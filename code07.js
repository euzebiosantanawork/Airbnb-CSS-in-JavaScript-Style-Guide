//Inline

/*use inline styles for styles that have a high cardinality (e.g. uses the value of a prop)
and not for styles that have a lor cardinality

why? Generating themed stlesheets can be expensive, so the are 
best for discrite sets of styles

*/

//bad

export default function MyComponent({spacind}) {

    return(

        <div style{(display: 'table', margin: spacing)} />
    
        );

}

//good
function Mycomponent({styles,spacing}) {
    return(
        <div{...CSS(styles.periodic,
            {margin:spacing})} />
            );
}
    export default withStyles (() => ({
        periodic:{
            display:'table',
        },
    }))(MyCwomponet);
