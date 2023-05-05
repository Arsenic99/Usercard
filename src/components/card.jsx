import '../assets/styles/card.scss'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.user.avatar} alt="" />
            <div className='name__block'>
                <p className="firstname">{props.user.first_name}</p>
                <p className="lastname">{props.user.last_name}</p>
            </div>
            <div className='email__block'>
                <a className="email" href={`mailto:${props.user.email}`}>{props.user.email}</a>
            </div>
            <div className='button__block'>
                <button>View details</button>
            </div>
        </div>
    )
}

export default Card;