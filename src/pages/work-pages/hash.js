import { HashImg } from '../../images';
import { HashMD, hashDOC } from '../../files';
import { React, useEffect } from 'react';
import '../pages.css';
import { Topnav, Bottomnav, Worknav, Mobilenav } from '../../components';

const Hash = () => {
  useEffect(() => {
    document.title = "where's the hash? - mohid tanveer portfolio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Topnav />
        <Bottomnav />
        <Mobilenav />
        <Worknav leftUrl="/work/rr" rightUrl="/work/racket" />
        <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>Where's the Hash?</h1><br /><br />
            <span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
              <i>Created in C — APRIL 2023 — </i>
              <a href="https://github.com/mohid-tanveer/c-projects/tree/main/2hashmap" rel="noopener noreferrer" target="_blank">repository link (access by request)</a><br />
              This project was created during my Computer Systems and Systems Programming course. The goal of this project was not to learn how Hash Tables,
              Linked Lists, or Maps function but rather to implement such a data structure in C by dynamically allocating memory and using pointers. The biggest
              challenge of this project was to maintain 0 leaks across all test cases. This was achieved by testing against a variety of test cases 
              and using Valgrind to check for leaks. The first tests ran against the data structure were to check if the put, get, and resize functions
              worked properly by running a word count against large text files. Next, I ran a stress test against the struct to make sure that the
              struct could handle a large amount of data along with executing a large number of operations without any leaks. Once these tests were passed,
              I could be confident that the data structure was working properly and the hash map was ready to be used in other projects such as Rhodes Ramble (RR).&nbsp;
              <a href={HashMD} rel="noopener noreferrer" target="_blank">Here</a> is an example interaction of the hash map running against test cases. 
              You can browse the source code by request at the repository linked above and read more about the project objectives 
              <a href={hashDOC} rel="noopener noreferrer" target="_blank">Here</a>.
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="Where's the Hash?" src={HashImg} />
          </div>
        </div>
    </div>
    </div>
  );
}

export default Hash;