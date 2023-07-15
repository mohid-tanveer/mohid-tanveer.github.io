import { ShellImg } from '../../images';
import { ShellMD } from '../../files';
import { React, useEffect } from 'react';
import '../pages.css';
import { Topnav, Bottomnav, Worknav, Mobilenav } from '../../components';

const Blueshell = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "blue shell! - mohid tanveer portfolio";
  }, []);

  return (
    <div>
        <Topnav />
        <Bottomnav />
        <Mobilenav />
        <Worknav leftUrl="/work/dijkstras" rightUrl="/work/duckingautocorrect" />
        <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>Blue Shell!</h1><br /><br />
            <span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
              <i>Created in C — FEBRUARY 2023 — </i>
              <a href="https://github.com/mohid-tanveer/c-projects/tree/main/1shell" rel="noopener noreferrer" target="_blank">repository link (access by request)</a><br />
              This project was created during my Computer Systems and Systems Programming course. The original goal of the project was to create a shell that could
              run basic commands on a Unix machine. However, I have since updated it to be able to run on Windows as well. This shell first prints the path of the machine
              it is being run on, and then runs a command loop allowing the user to input multiple commands. This loop first prompts the user for an input, then it parses
              the input in order to determine whether or not to perform one of the built-in actions that are hardcoded into the shell, such as ls, pwd, cd, exit, and history or
              to run another program. Once it has determined what to do, it will either run the built-in action or fork a child process to run the program. <a href={ShellMD} rel="noopener noreferrer" target="_blank">Here</a> 
              &nbsp;is a sample interaction of the shell running on my Unix machine. In the picture on the right you can see the shell running on my Windows machine. This
              project allowed me to gain familiarity with C syntax and semantics as well as pointers to data and string processing functions in C. You can browse the source code 
              and read more about the project objectives by request at the repository linked above.
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="Shell Example Interaction" src={ShellImg} />
          </div>
        </div>
    </div>
    </div>
  );
}

export default Blueshell;