import { } from '../../images';
import { React, useEffect } from 'react';
import '../pages.css';
import { Topnav, Bottomnav, Worknav } from '../../components';

const Dijkstras = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);

  return (
    <div>
        <Topnav />
        <Bottomnav />
        <Worknav leftUrl="" rightUrl="/work/shell" />
        <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>It’s just Dijkstra’s?</h1><br /><br />
            <span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
                <i>Created in Racket — March 2023 — </i>
                <a href="https://github.com/mohid-tanveer/racket-projects/blob/main/graphs%20and%20dijkstras.rkt" rel="noopener noreferrer" target="_blank">repository link</a><br />
                This project was created during my Programming Languages course. In this course we were mainly focused on learning the
                semantics surrounding functional programming languages. If you are not familiar with functional programming languages,
                the main differences between it and object-oriented programming languages is that all data that is used is immutable,
                all "loops" are done recursively, functions have no side effects (there are no states in functional programming), and
                it follows a more declarative style of programming (you tell the computer exactly what to do) rather than an imperative, 
                thus requiring the programmer to think about the same problems we are used to solving in different ways. This project's
                main goal was to implement Dijkstra's algorithm, one that we are all familiar with, in functional programming.
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="Dijkstras" src='' />
          </div>
        </div>
    </div>
    </div>
  );
}

export default Dijkstras;