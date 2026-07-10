// Show a hello message to user in differnet colors pass 2 values as props : userNmae and Textcolor 

export default function MsgBox({userName , textColor}){

    return (
        <h1 style={{color:textColor}}>Hello , {userName}</h1>
    );
}