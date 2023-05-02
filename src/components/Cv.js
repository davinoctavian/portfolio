import React, { useState } from "react"
import { Document, Page } from "react-pdf"
import cvPDF from "../assets/documents/CV_Davin_Octavian.pdf"
import styles from "./Cv.module.css"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import { useDispatch } from "react-redux"
import { changePhone } from '../reducers/globalSlice'

const Cv = () => {
  const dispatch = useDispatch()
  const [numPages, setNumPages] = useState(null)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  function addBorderLayer() {
    const textLayers = document.querySelectorAll(".react-pdf__Page")
    textLayers.forEach(layer => {
      const { style } = layer
      style.border = "1px solid black"
      style.marginBottom = "1.2rem"
      style.borderRadius = "1.2rem"
      style.padding = "1.2rem"
      style.textAlign = "center"
      style.textAlign = "-webkit-center"
      style.textAlign = "-moz-center"
    })
  }

  function cvDownload() {
    dispatch(changePhone("081264527452"))
  }

  return (
    <div className={styles.container}>
      <Document
        file={cvPDF}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} onLoadSuccess={addBorderLayer}/>
        ))}
      </Document>
      <a href={cvPDF} className={styles.download_button} onClick={() => cvDownload()} download>Download</a>
    </div>
  )
}

export default Cv