
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const server = express();
const host = 'http://cubaysermon.system';
const port = 4435;

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors({
    origin: 'http://cubaysermon.system:5173',
    credentials: true
}));

// POST
server.post('/accounts/post', async (req, res) => {
    const task = req.body;
    const data = await db.pool.query('INSERT INTO accounts VALUES(account_id, ?,?,?,?)', [
        task.username,
        task.password,
        task.role,
        task.creation
    ]);

    console.log(data)
});

server.post('/accounts/search', async (req, res) => {
    const task = req.body;
    const data = await db.pool.query('SELECT * FROM accounts WHERE account_id=? OR account_username=?', [
        task.account_id,
        task.account_username
    ]);

    res.send(data);
});

server.post('/accounts/delete', async (req, res) => {
    const task = req.body;
    const data = await db.pool.query('DELETE FROM accounts WHERE account_id=?', [
        task.id
    ]);

    console.log(data);
});

server.post('/residents/post', async (req, res) => {
    const task = req.body;
    const data = await db.pool.query('INSERT INTO residents VALUES(resident_id, ?,?,?,?,?,?,?,?,?)', [
        task.name,
        task.age,
        task.sex,
        task.dob,
        task.purok,
        task.cpno,
        task.status,
        task.occupation,
        task.creation,
    ]);

    console.log(data);
});

server.post('/residents/search', async (req, res) => {
    const task = req.body;
    const data = await db.pool.query('SELECT * FROM residents WHERE resident_id=? OR resident_name=? OR resident_purok=?', [
        task.id,
        task.name,
        task.purok
    ]);

    res.send(data);
});

server.post('/residents/delete', async (req) => {
    const task = req.body;
    const data = await db.pool.query('DELETE FROM residents WHERE resident_id=?', [
        task.id
    ]);

    console.log(data);
});

server.post('/notifications/post', async (req, res) => {
    const task = req.body;
    const data = await db.pool.query('INSERT INTO notifications VALUES(id, ?,?,?,?)', [
        task.name,
        task.read,
        task.timeline,
        task.creation
    ]);

    console.log(data);
});

// GET
server.get('/accounts/order/id', async (req, res) => {
    const task = req.body;
    const data = await db.pool.query('SELECT * FROM accounts', [task.id]);
    res.send(data);
});

server.get('/residents/order/id', async (req, res) => {
    const task = req.body;
    const data = await db.pool.query('SELECT * FROM residents', [task.id]);
    res.send(data);
});

server.get('/notifications', async (req, res) => {
    const task = req.body;
    const data = await db.pool.query('SELECT * FROM notifications', [task.id]);
    res.send(data);
});


// PUT
server.put('/accounts/edit', async (req) => {
    const task = req.body;
    const data = await db.pool.query('UPDATE accounts SET account_username=?, account_password=? WHERE account_id=?', [
        task.username,
        task.password,
        task.id
    ]);

    console.log(data);
});

server.put('/residents/edit', async (req) => {
    const task = req.body;
    const data = await db.pool.query('UPDATE residents SET resident_name=?, resident_age=?, resident_sex=?, resident_purok=?, resident_birthday=?, resident_contact_number=?, resident_civil_status=?, resident_occupation=? WHERE resident_id=?', [
        task.name,
        task.age,
        task.sex,
        task.purok,
        task.birthday,
        task.number,
        task.status,
        task.occupation,
        task.id
    ]);

    console.log(data);
});

// DELETE

server.listen(port, () => console.log(`API server is now running at ${host}:${port}`));


// GET TOTAL
server.get('/accounts/order/id', async (req, res) => {
    const task = req.body;
    const personnel = await db.pool.query('SELECT * FROM accounts', [task.id]);
    res.send(personnel);
});

server.get('/accounts/order/id', async (req, res) => {
    const task = req.body;
    const residents = await db.pool.query('SELECT * FROM accounts', [task.id]);
    res.send(residents);
});

// src/utils/generatePDF.js
import { PDFDocument, rgb } from 'pdf-lib';

export const generatePDF = async (data) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);

  page.drawText(`Name: ${data.name}`, {
    x: 50,
    y: 350,
    size: 30,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Email: ${data.email}`, {
    x: 50,
    y: 300,
    size: 30,
    color: rgb(0, 0, 0),
  });

  // Add more data as needed

  const pdfBytes = await pdfDoc.save();

  // Create a link element to trigger the download
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'document.pdf';
  link.click();
};