function  Collage({name}){
    return(
        <div>
           {name.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
            
        </div>
    )
}
export default Collage