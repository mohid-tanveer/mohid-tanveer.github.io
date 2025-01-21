import { DijkstrasImg } from "../../images";
import { DijkstrasMD } from "../../files";
import { React, useEffect } from "react";
import "../pages.css";
import { Topnav, Bottomnav, Worknav, Mobilenav } from "../../components";

const Dijkstras = () => {
  useEffect(() => {
    document.title = "it's just dijkstra's? - mohid tanveer portfolio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Topnav />
      <Bottomnav />
      <Mobilenav />
      <Worknav leftUrl="/work/racket" rightUrl="/work/blueshell" />
      <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>It’s just Dijkstra’s?</h1>
            <br />
            <br />
            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
              <i>Created in Racket — MARCH 2023 — </i>
              <a
                href="https://github.com/mohid-tanveer/racket-projects/blob/main/graphs%20and%20dijkstras.rkt"
                rel="noopener noreferrer"
                target="_blank"
              >
                repository link
              </a>
              <br />
              This project was created during my Programming Languages course.
              In this course we were mainly focused on learning the semantics
              surrounding functional programming languages. If you are not
              familiar with functional programming languages, the main
              differences between it and object-oriented programming languages
              is that all data that is used is immutable, all "loops" are done
              recursively, functions have no side effects (there are no states
              in functional programming), and it follows a more declarative
              style of programming (you tell the computer exactly what to do)
              rather than an imperative, thus requiring the programmer to think
              about the same problems we are used to solving in different ways.
              This project's main goal was to implement Dijkstra's algorithm,
              one that we are all familiar with, in functional programming.
              First, I had to create a graph data structure; this graph had to
              be both undirected and weighted. In order to implement "private
              fields" I had to use closures, which are functions that return
              functions or in this case data (since lists are immutable you are
              required to add new values to a new identical list which replaces
              the old list). I chose to represent my graph structure through an
              adjacency list, the outer list contains all the edges, and the
              inner lists contain the vertices in the edge and its weight. I
              then implemented Dijkstra's; to do this I first had to initialize
              a "frontier" which is a list of paths that hold the sequence of
              vertices and their summed weights, it starts simply with the path
              of the start to itself. I also keep track of explored vertices in
              a separate list. I then created a function that serves as the
              "while" loop which takes the frontier and explored lists, this
              checks if the frontier is empty, if it is then we have explored
              all possible paths, otherwise we take the first path in the
              frontier (which is the smallest) and the first vertex in that path
              (vertices are stored in reverse order to easily access the
              necessary vertex). First check if that vertex is the "finish"
              vertex, if so return the path. You skip any explored vertices and
              explore the neighbors of new vertices, adding them to the frontier
              (if any paths end in explored vertices they are filtered out). You
              then sort the frontier so that the first path is always the
              smallest. The function calls then itself with the updated frontier
              and explored lists. Finally once the function was written, I call
              it with the initial frontier and explored lists, if it ends up
              returning a path then I reverse the sequence of vertices and
              return it along with the weight. Otherwise, return false.{" "}
              <a href={DijkstrasMD} rel="noopener noreferrer" target="_blank">
                Here
              </a>
              &nbsp;is a sample interaction with the project. You can browse the
              source code and read more about the project objectives at the
              repository linked above.
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="Dijkstras" src={DijkstrasImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dijkstras;
