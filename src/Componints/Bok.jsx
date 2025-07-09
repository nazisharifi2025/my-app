export default function Bok({name , imgUrl , price}){
    return(
        <div>
        <h1>{name}</h1>
        <img src={imgUrl} alt="" />
        </div>
    )
}