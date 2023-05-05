import React, { useState } from "react"
import styles from "./Project.module.css"
import Modal from "./Modal.js"
import crudAngular from "../assets/videos/crud-angular.mp4"
import crudReactJsonServer from "../assets/videos/crud-react-jsonserver.mp4"
import cssAnimation from "../assets/videos/css-animation.mp4"
import nextjsGetGitRepo from "../assets/videos/nextjs-get-gitrepo.mp4"
import reactReduxWithLogin from "../assets/videos/react-redux-with-login.mp4"
import shoeStoreReactJsonServer from "../assets/videos/shoeStore-react-jsonserver.mp4"
import simpleReactCdn from "../assets/videos/simple-react-cdn.mp4"
import molaTv from "../assets/videos/molatv.mp4"

const Project = () => {
  const [ isModal, setModal ] = useState(false)
  const [ datas, setDatas ] = useState([])

  const handleGalleryClick = (param) => {
    if (param === "personal") {
      const dataImage = [{name: "Simple React from CDN Link", link: simpleReactCdn},
                         {name: "CRUD React with Json Server", link: crudReactJsonServer},
                         {name: "React Filter with Json Server", link: shoeStoreReactJsonServer},
                         {name: "React Redux with Login", link: reactReduxWithLogin},
                         {name: "CRUD Angular", link: crudAngular},
                         {name: "NextJs Get Git Repository", link: nextjsGetGitRepo},
                         {name: "Animation with CSS", link: cssAnimation}
                        ] 
      setDatas(dataImage)
    }
    if (param === "mola") {
      const dataImage = [{name: "mola.tv", link: molaTv}]
      setDatas(dataImage)
    }
    setModal(true)
  }

  const handleCloseModal = () => {
    setModal(false)
    setDatas([])
  }

  return (
    <div className={styles.container}>
      <Modal show={isModal} handleClose={() => handleCloseModal()}>
        {datas?.map((data, index) => {
          return (
            <fieldset key={index} className={styles.fieldset}>
              <legend>{data.name}</legend>
              <video width="100%" height="100%" controls>
                <source src={data.link} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </fieldset>
          )
        })}
      </Modal>
      <div className={styles.note_container}>
        <h3 className={styles.note_title}>Personal Project</h3>
        <hr />
        <div className={styles.note_description}>
          <p>Mini Project I create to learn Programming Language</p>
          <ol>
            <li>Programming Language
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
                <li>Next</li>
                <li>TypeSript</li>
              </ul>
            </li>
            <li>Tools
              <ul>
                <li>Visual Studio</li>
                <li>Visual Studio Code</li>
                <li>SQL Server Management Studio</li>
                <li>Gitlab</li>
                <li>Github</li>
              </ul>
            </li>
            <li>Link
              <ul>
                <li><a href="https://gitlab.com/users/davinoctavian/projects" target="_blank" rel="noreferrer">Gitlab</a></li>
                <li><a href="https://github.com/davinoctavian?tab=repositories" target="_blank" rel="noreferrer">Github</a></li>
                <li><button onClick={() => handleGalleryClick("personal")}>Gallery</button></li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.note_container}>
        <h3 className={styles.note_title}>Mola.tv</h3>
        <hr />
        <div className={styles.note_description}>
          <p>This Project when I work on Global Media Visual</p>
          <ol>
            <li>Programming Language
              <ul>
                <li>React</li>
              </ul>
            </li>
            <li>Tools
              <ul>
                <li>Visual Studio Code</li>
                <li>Gitlab</li>
                <li>Slack</li>
                <li>Wrike</li>
                <li>Jira</li>
                <li>Figma</li>
              </ul>
            </li>
            <li>Tasks
              <ul>
                <li>Add New Feature</li>
                <li>Fixing</li>
                <li>Enhance</li>
                <li>Testing</li>
              </ul>
            </li>
            <li>Link
              <ul>
                <li><a href="https://mola.tv/" target="_blank" rel="noreferrer">Mola</a></li>
                <li><button onClick={() => handleGalleryClick("mola")}>Gallery</button></li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.note_container}>
        <h3 className={styles.note_title}>Mega Monitoring</h3>
        <hr />
        <div className={styles.note_description}>
          <p>This Project when I work on Qwerty Aplikasi Inovasi</p>
          <ol>
            <li>Programming Language
              <ul>
                <li>React</li>
              </ul>
            </li>
            <li>Tools
              <ul>
                <li>Visual Studio Code</li>
                <li>Gitlab</li>
                <li>Team City</li>
              </ul>
            </li>
            <li>Tasks
              <ul>
                <li>Make from scratch</li>
                <li>Fixing</li>
                <li>Testing</li>
                <li>Deploy</li>
              </ul>
            </li>
            <li>Link
              <ul>
                <li>Didn't Have Access Anymore</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.note_container}>
        <h3 className={styles.note_title}>Qontact Agent</h3>
        <hr />
        <div className={styles.note_description}>
          <p>This Project when I work on Qwerty Aplikasi Inovasi</p>
          <ol>
            <li>Programming Language
              <ul>
                <li>Angular</li>
              </ul>
            </li>
            <li>Tools
              <ul>
                <li>Visual Studio Code</li>
                <li>Gitlab</li>
                <li>Team City</li>
              </ul>
            </li>
            <li>Tasks
              <ul>
                <li>Make from scratch</li>
                <li>Fixing</li>
                <li>Testing</li>
                <li>Deploy</li>
              </ul>
            </li>
            <li>Link
              <ul>
                <li>Didn't Have Access Anymore</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.note_container}>
        <h3 className={styles.note_title}>Qontact CRM</h3>
        <hr />
        <div className={styles.note_description}>
          <p>This Project when I work on Qwerty Aplikasi Inovasi and other like Qontact Fullerton, 
            Qontact Telmark, and others project in this company based on this</p>
          <ol>
            <li>Programming Language
              <ul>
                <li>Angular</li>
              </ul>
            </li>
            <li>Tools
              <ul>
                <li>Visual Studio Code</li>
                <li>Gitlab</li>
                <li>Team City</li>
              </ul>
            </li>
            <li>Tasks
              <ul>
                <li>Add New Feature</li>
                <li>Enhance</li>
                <li>Fixing</li>
                <li>Testing</li>
                <li>Deploy</li>
              </ul>
            </li>
            <li>Link
              <ul>
                <li>Didn't Have Access Anymore</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.note_container}>
        <h3 className={styles.note_title}>DMS</h3>
        <hr />
        <div className={styles.note_description}>
          <p>This Project when I work on Indocyber Global Teknologi</p>
          <ol>
            <li>Programming Language
              <ul>
                <li>C#</li>
              </ul>
            </li>
            <li>Tools
              <ul>
                <li>Visual Studio</li>
                <li>SQL Server Management Studio</li>
              </ul>
            </li>
            <li>Tasks
              <ul>
                <li>Design Workflow</li>
                <li>Make Master Menu</li>
              </ul>
            </li>
            <li>Link
              <ul>
                <li>Didn't Have Access Anymore</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.note_container}>
        <h3 className={styles.note_title}>External Constractor</h3>
        <hr />
        <div className={styles.note_description}>
          <p>This Project when I work on Indocyber Global Teknologi</p>
          <ol>
            <li>Programming Language
              <ul>
                <li>C#</li>
              </ul>
            </li>
            <li>Tools
              <ul>
                <li>Visual Studio</li>
                <li>SQL Server Management Studio</li>
              </ul>
            </li>
            <li>Tasks
              <ul>
                <li>Add New Feature</li>
                <li>Enhance</li>
                <li>Fixing</li>
                <li>Testing</li>
              </ul>
            </li>
            <li>Link
              <ul>
                <li>Didn't Have Access Anymore</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.note_container}>
        <h3 className={styles.note_title}>SLIK</h3>
        <hr />
        <div className={styles.note_description}>
          <p>This Project when I work on Indocyber Global Teknologi</p>
          <ol>
            <li>Programming Language
              <ul>
                <li>C#</li>
              </ul>
            </li>
            <li>Tools
              <ul>
                <li>Visual Studio</li>
                <li>SQL Server Management Studio</li>
              </ul>
            </li>
            <li>Tasks
              <ul>
                <li>Add New Feature</li>
                <li>Enhance</li>
                <li>Fixing</li>
                <li>Testing</li>
              </ul>
            </li>
            <li>Link
              <ul>
                <li>Didn't Have Access Anymore</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.note_container}>
        <h3 className={styles.note_title}>Insurance Claim</h3>
        <hr />
        <div className={styles.note_description}>
          <p>This Project when I work on Indocyber Global Teknologi</p>
          <ol>
            <li>Programming Language
              <ul>
                <li>C#</li>
              </ul>
            </li>
            <li>Tools
              <ul>
                <li>Visual Studio</li>
                <li>SQL Server Management Studio</li>
              </ul>
            </li>
            <li>Tasks
              <ul>
                <li>Add New Feature</li>
                <li>Enhance</li>
                <li>Fixing</li>
                <li>Testing</li>
              </ul>
            </li>
            <li>Link
              <ul>
                <li>Didn't Have Access Anymore</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.note_container}>
        <h3 className={styles.note_title}>Bridging</h3>
        <hr />
        <div className={styles.note_description}>
          <p>This Project when I work on Indocyber Global Teknologi</p>
          <ol>
            <li>Programming Language
              <ul>
                <li>C#</li>
              </ul>
            </li>
            <li>Tools
              <ul>
                <li>Visual Studio</li>
                <li>SQL Server Management Studio</li>
              </ul>
            </li>
            <li>Tasks
              <ul>
                <li>Enhance</li>
                <li>Fixing</li>
                <li>Testing</li>
              </ul>
            </li>
            <li>Link
              <ul>
                <li>Didn't Have Access Anymore</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.note_container}>
        <h3 className={styles.note_title}>Starbridge</h3>
        <hr />
        <div className={styles.note_description}>
          <p>This Project when I work on Indocyber Global Teknologi</p>
          <ol>
            <li>Programming Language
              <ul>
                <li>C#</li>
              </ul>
            </li>
            <li>Tools
              <ul>
                <li>Visual Studio</li>
                <li>SQL Server Management Studio</li>
              </ul>
            </li>
            <li>Tasks
              <ul>
                <li>Add New Feature</li>
                <li>Learning</li>
              </ul>
            </li>
            <li>Link
              <ul>
                <li>Didn't Have Access Anymore</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Project