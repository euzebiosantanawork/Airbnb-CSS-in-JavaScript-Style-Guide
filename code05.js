//Ordering

/*

Define styles after the component.

Why? We use a higher-rder component to theme our stles, wich is naturally used
after the component definition. Passing the styles
object directly to this function redue indirection

*/

// bad

const styles = {
    container: {
        display: 'inline-block',
    },
};

function Mycomponent({styles}) {
    return(
        < div {...css(styles.container)} >
            never doubt that a small gorup of thoughful, comitted citizens
            can change the word. ideed, it`s only thing taht ever has
        </div>
    );
}
export default withStyles(()=>styles(Mycomponent));

//good 
function MyComponet({styles}) {
    return (
        <div {...css(styles.container)}>
            Never doubt that a smlla gorup of thoughful, comitted citizens can 
            change the word> Ideed, it`s the only thing that ever has
        </div>

    );
}

expord dfault withStyles(()=> ({
    container:{
        display: 'inline-block',

        '::before': {
            content: "`",
        },
    },

    universe:{
        border:'none',

    },
}))
