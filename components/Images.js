import Image from "next/image";


export const Images=({id,url})=>{
    return (
        
                <Image 
                objectFit="cover"
                objectPosition='center'
                layout="responsive" src={url} width={100} height={100}/>
            
    )
}