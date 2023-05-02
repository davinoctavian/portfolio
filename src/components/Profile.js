import React, { useState, useEffect } from "react"
import styles from './Profile.module.css'
import pasPhoto from '../assets/images/pasphoto.jpg'
import { useSelector } from "react-redux"

const Profile = () => {
  const phoneString = useSelector((state) => state.global.phone)
  const [phone, setPhone] = useState('...')

  useEffect(() => {
    setPhone(phoneString)
  }, [phoneString])

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img src={pasPhoto} alt="pas-photo"/>
      </div>
      <div className={styles.description}>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Davin Octavian</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Place and Date of Birth</td>
              <td>Tello Island, 13 October 1992</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>davinoctavian@gmail.com</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>
                {phone && phone === "..." ?
                  <div className={styles.hover_text}>{phone}
                    <span className={styles.tooltip_text}>This is hidden for now, click a link in CV to show it</span>
                  </div> :
                  <div>{phone}</div>
                }
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Profile