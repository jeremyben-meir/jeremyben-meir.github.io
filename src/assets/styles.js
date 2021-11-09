function divStyle (marg){ 
return ({
    width:marg,
    margin:"auto",
    textAlign: 'left',
    marginTop: 30,
    marginBottom: 30,
    
})};
var contentStyle = {
    display: "flex",
    flexDirection: "column",
    marginLeft:20
};
var headerStyle = {
    fontSize: 30,
    fontWeight: 'bold'
};
var subheaderStyle = {
    fontSize: 20,
    fontWeight: 'bold'
};
var subtitleStyle = {
    fontWeight: 'bold',
    textDecoration: 'none'
};

export default {divStyle, contentStyle, headerStyle, subheaderStyle, subtitleStyle}