import React, { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import "./MarkdownViewer.css"

const MarkdownViewer = ({ markdownUrl, isOpen, onClose }) => {
  const [content, setContent] = useState("")

  useEffect(() => {
    if (isOpen && markdownUrl) {
      fetch(markdownUrl)
        .then((response) => response.text())
        .then((text) => {
          const cleanedText = text.replace(/<!--[\s\S]*?-->/g, "")
          setContent(cleanedText)
        })
        .catch((error) => console.error("error loading markdown:", error))
    }
  }, [markdownUrl, isOpen])

  if (!isOpen) return null

  return (
    <div className="markdown-modal-overlay" onClick={onClose}>
      <div
        className="markdown-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="markdown-modal-close" onClick={onClose}>
          ×
        </button>
        <div className="markdown-body">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default MarkdownViewer
