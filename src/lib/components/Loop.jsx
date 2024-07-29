export default function Loop(props) {
    let items = [];

    // eslint-disable-next-line react/prop-types
    for(let r=0; r < props.repeat; r++) {

        // eslint-disable-next-line react/prop-types
        items.push(props.children(r));
    }

    return <>{ items }</>
}