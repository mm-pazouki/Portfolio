
#popup {
  position: fixed;
  width: 90vw;
  height: calc(100vh - 10vw);
  padding: 60px 5vw 5vw 5vw;
  left: 5vw;
  top: 5vw;
  margin: auto;
  background-color: white;
  border: 1px solid gray;
  display: none;
  flex-direction: column;
  box-sizing: border-box;
  overflow: auto;
}

#closePopup {
  text-align: center;
  font-size: 1.7rem;
  width: 5vh;
  height: 5vh;
  top: 7vh;
  line-height: 5vh;
  color: #1a2236;
  border-radius: 50%;
  align-self: flex-end;
  position: fixed;
  background-color: #ffffff85;
}

#closePopup:hover {
  background-color: #f9f9fa;
  color: #2d4581;
  cursor: pointer;
}

#popupHeader {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

#popupTools {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}

#popupTools > li {
  border: 1px solid gray;
  color: gray;
  padding: 6px;
  float: left;
  margin-right: 5px;
}

#popupImage {
  max-height: 30vh;
  width: 100%;
  object-fit: cover;
}

#popupText {
  font-size: 1rem;
  word-break: break-word;
  text-align: left;
}

#buttonContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#buttonContainer > button {
  margin-left: 30px;
  margin-right: 30px;
}

#otherProjects {
  display: none;
}

@media screen and (min-width: 600px) {
  #popup {
    z-index: 5;
    height: 95vh;
    top: 2.5vh;
    padding-top: 20px;
    padding-left: 50px;
    padding-right: 50px;
  }

  #popupTools {
    margin-bottom: 30px;
    padding: 0;
  }

  #popupText {
    margin-left: 10%;
    margin-right: 10%;
  }

  #buttonContainer {
    margin-left: 10%;
    margin-right: 10%;
    flex-direction: row;
    justify-content: flex-start;
  }

  #buttonContainer > button {
    margin-left: 0;
  }

  #popupImage {
    max-height: none;
    max-width: 100%;
    object-fit: cover;
  }

  #otherProjects {
    display: flex;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
  }
}