import { RacketImg } from '../../images';
import { RacketMD } from '../../files';
import { React, useEffect } from 'react';
import '../pages.css';
import { Topnav, Bottomnav, Worknav } from '../../components';

const Racket = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Topnav />
        <Bottomnav />
        <Worknav leftUrl="/work/hash" rightUrl="/work/dijkstras" />
        <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>What’s that Racket?</h1><br /><br />
            <span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
              <i>Created in Java — April 2023 — </i>
              <a href="https://github.com/mohid-tanveer/java-projects/tree/main/racketinterpreter" rel="noopener noreferrer" target="_blank">repository link</a><br />
              This project was created during my Programming Language course. The goal of this project was to explore the different
              nuances and specificities of programming languages in more depth. In building this Racket interpreter, the main focus
              was what was occurring behind the scenes in a functional programming language like Racket; for example, replicating how
              Racket stores variables, how the frames function and how they are created, how to evaluate straight-forward and nested
              expressions, evaluating conditionals, and evaluating primitive, non-primitive, and anonymous functions such as lambdas.
              Building an interpreter allowed me to gain a deeper understanding of parsing techniques, such as tokenization, lexical 
              analysis, and syntactic analysis. <a href={RacketMD} rel="noopener noreferrer" target="_blank">Here</a> is an example
              interaction with the interpreter. You can browse the source code on the repository linked above.
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="" src={ RacketImg } />
          </div>
        </div>
    </div>
    </div>
  );
}

export default Racket;