//define fonts only in themes

//bad

export defalut withStyles(()=>({

    towerOfPisa:{
        fontStyle:`italic`,
    },

}))(MyComponet) ;

//good
export defalut withStyles(({font})=> ({
    towerOfpIsa{
        fontSyle font.italic,
    },
}))(MyComponent);

//Define fonts as sets of related styles

//bad

export defaut withStyles(()=>({
    towerOfPisa{
        fontFamily:`italiana,"Times New Roman", serif',
        fontSize:'2em',
        fontStyles`italic',
        lineHeight: 1.5,
    },
}

)

)(MyComponent);

//Define base grind utils in theme (either as value or a function that takes a muttipler).
//bad

expor default withStyles(()=>({
    rip: {
        bottom:'-6912px',//6feet
    },
}))(MyComponent);

//good
export default withStyles (({unit})=>({
    rip:{
        bottom:units(864),//6feet assuming our it 8px
    },
}))(MyComponent);

//good

export default withStyles (({unit})=>({
    rip: {
        bottom:864*unit, //6feet, assuming our unit is 8px
    },
}))(MyComponent);
//define media queries only is theme

//bad
export default withstyles(()=>({
    container:{
        width:50%,
    },
},))(MyComponent);

//good

export default withStyles(({breakpoint}) => ({
    container: {
        width: '100%',

        [breakpoint.medium]: {
            width:'50%',
        }
    },
},))(MyComponent);
