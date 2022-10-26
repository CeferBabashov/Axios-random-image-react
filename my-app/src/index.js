import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import {createRoot} from 'react-dom/client'
import './Style.css'
import Input from './Input'
import Picture from './Picture'
import axios from 'axios'


export default function Index() {
  const [ img , setImg] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXp7vG6vsHs8fTBxci3u77k6ezf4+bFyczO09bM0NPIzM/i5+q7v8LX3N/o7fC+wsXU2dx29PC8AAACcElEQVR4nO3bbVuCMBSAYZgDbQPk///aAjVhbIJzxY4+97e6vIinnXgxLAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO5UGntnhKiiNccETN/l2ajaUpdJaN3nmKjaRH1j4ynDxCph4E9ivXfPgvpKWlge8lvEZtiv5iuBcUu62zvIVY271aY4V1id5ZhW6f56Em4qJQr32VRKi91SRdfFXX8JKWyPTdMcTlVEo4RCVZ0vZ0ddts8nSiis72f/iOsvAYVdM7k4eX5X8y9Up9kF3PnZRRRQOL9CfXpf8y+sncLgX2Lnv/bMv9C9UTSBQmUab+LbFKqjLs++xPwLN06pGV7mS8y/cNORRpnLqzyJAgo3nC2GES0DifkXbjnjm/svYZEooHB21eZ7Y1CZ6Sq7iRIKV6687yPqTZRQWNzunvzvXhv3bbl5opDC8B2wWgQ6iVIKQ9wRXSZKL/SsoJMou9A3om6i6EL/iDqJwgqtnX4VXMExsXq8qZ0Fduvn2/b3gBoe0dkqSipUdvjmLfHRiE5XUVKhvfxD6pq4soLl7UZLUGF13fExcW1EBRaOI3rdc6vWR1ReoZ3cQzX1hhWUVlg9jhFfOBnRNy2cjuhbFsaMqKTCuBGVVBg3ooIKI0dUUGH8A24U7opCCinc32cVHqL1Mgpf+UyCu6mMfOCziVlsKqVPKexTPOc9Hou1Xf+Z/+w8Hu/jD6N3lxPH3j0LzgMYLzvm93mLLva21yvDIV08CvVaYMSjxX9P2YNOpKlzDCyGxv6UQJ9r3yDFySLfj5ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAf5Bl2RJSrnoeEoAAAAAElFTkSuQmCC')

  const Get_Img = (data) =>{ 
    setImg('https://i.pinimg.com/originals/a2/dc/96/a2dc9668f2cf170fe3efeb263128b0e7.gif')
      axios.get(`https://source.unsplash.com/random/?${data}`)
      .then(({request}) => {
        setImg(request.responseURL);
      })
   }
  

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-6 offset-3">
              <Input get_img = {Get_Img} />
              <hr />
              <Picture img={img} />
          </div>
        </div>
      </div>
    </div>

  )
}


let id_root = document.getElementById('root')
let root= createRoot(id_root)
root.render(<Index/>)