import RoundedButtonSm from '../components/RoundedButtonSm'
import WelcomeFall from '../utils/WelcomeFall'


export default function WelcomeScreen() {
    return (
        <div id='welcome' className='welcome screen'>
            <h1 className='title'>Привет, дорогая</h1>
            <p className='subtitle'>Для полного экспириенса надень наушники и расслабься</p>
            <p>Готова?</p>
            <RoundedButtonSm text='Да' onClick={WelcomeFall} />
        </div>
    )
}