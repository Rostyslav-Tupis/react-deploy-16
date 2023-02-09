import {ReactComponent as Svg}from './img/verif.svg'

function allInfo({avatar , name ,nickname, date}){
    return (
        <div className="all-info">
            <div className="logo">
                <img src={avatar} alt="img" className="profilepict"></img>
            </div> 
            <div className="info">
                <p><a href="#" className="name">{name}</a></p>
                <Svg className="svgs verifed"/>
                <p className="nickname"><a href="#" className="style">{nickname}</a></p>
                <p className="date"><a href="#" className="style">{date}</a></p>
            </div>
        </div>
    )
}
export default allInfo