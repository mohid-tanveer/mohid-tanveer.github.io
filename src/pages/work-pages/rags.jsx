import { ragsImg } from "../../images"
import {} from "../../files"
import { React, useEffect } from "react"
import "../pages.css"
import { Topnav, Bottomnav, Worknav, Mobilenav } from "../../components"

const Rags = () => {
  useEffect(() => {
    document.title = "From RAGs to Riches - mohid tanveer portfolio"
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Topnav />
      <Bottomnav />
      <Mobilenav />
      <Worknav leftUrl="/work/rephoto" rightUrl="/work/tubify" />
      <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>From RAGs to Riches</h1>
            <br />
            <br />
            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
              <i>Created in Python/Typescript — MAY 2025 — </i>
              <a
                href="https://github.com/mohid-tanveer/hpcGPT"
                rel="noopener noreferrer"
                target="_blank"
              >
                repository link (access by request)
              </a>
              <br />
              <br />
              hpcGPT was my final project during my role as a Student Machine
              Learning Engineer at St. Jude Children's Research Hospital's High
              Performance Research Computing (HPC) group. Our goal was to
              explore ways to leverage Retrieval-Augmented Generation (RAG) to
              support the use of Large Language Models (LLMs) in the healthcare
              domain, specifically for researchers and clinicians at St. Jude.
              Through my day-to-day work, I had exposure to the workflows of the
              other members of our HPC group as well as the researchers we
              directly worked with. One thing that stood out to me was the
              barrier to entry for clinical researchers in understanding the
              documentation and code needed to interface with HPC resources
              (like the cluster) to support their research. In fact, after
              analyzing historical ticket data, I found that a large portion of
              ServiceDesk tickets were explicitly related to or answerable by
              pieces of documentation buried in the wiki or scattered across
              multiple sources.
              <br />
              <br />
              This project was my attempt to address this issue and provide a
              foundation and proof of concept for a scalable system that could
              operate as a centralized knowledge base for the hospital. The goal
              was to supplement LLM usage while maintaining control of the data
              and ensuring that the system would be compliant with HIPAA and
              other relevant regulations.
              <br />
              <br />
              In order to build hpcGPT, I first needed to deepen my
              understanding of RAG and review current research on how RAG was
              improving LLM performance. Along with my mentor, we looked into
              various techniques and approaches to building RAG systems,
              including standard RAG supplemented with GraphRAG as well as both
              sparse and dense retrieval strategies.
              <br />
              <br />
              Since we were building the system specifically for things HPC
              related, our data source consisted of documentation and
              code/terminal snippets from our Confluence wiki. I embedded this
              data by chunking the wiki pages and generating dense vector
              embeddings, allowing the system to return relevant results
              without requiring the same technical jargon used in the
              documentation. Since the workflows used by researchers and HPC
              members involved many interconnected concepts (e.g., modules,
              policies, tools, domain-specific components), I also created a
              knowledge graph that mapped these relationships explicitly. This
              allowed the system to supplement semantic retrieval with
              structured context, improving accuracy for more complex,
              multi-step workflow questions.
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="From RAGs to Riches" src={ragsImg} />
            <br />
            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
              All of this was connected through a unified, OpenAI-compatible API
              service I built to orchestrate the retrieval pipeline and pass the
              final context to the model. For LLM inference, I used Ollama to
              run an open-weight model locally on the cluster, ensuring that all
              data stayed inside St. Jude's infrastructure. OpenWebUI connected
              directly to this API, giving researchers a user-friendly interface
              layered on top of the RAG system.
              <br />
              <br />
              The system's architecture was intentionally designed to support
              scalability and modularity, allowing for additional knowledge
              bases as well as updates to existing knowledge bases. OpenWebUI
              also provided access controls that allowed admins to regulate who
              could access which knowledge bases according to their role and
              permissions, ensuring that we kept security and privacy in mind.
              Following rigorous testing and validation, we deployed the system
              to the cluster and gave access to HPC staff and researchers with
              access to the cluster, noting a significant reduction in
              ServiceDesk tickets (80% over a one-month period).
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rags
