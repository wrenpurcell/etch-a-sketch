document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.querySelector('#grid-container');


    function createGrid(numOfSquares) {
        let squareSize = 800 / numOfSquares;
        //set CSS variable
        document.documentElement.style.setProperty("--colNum", numOfSquares);
        document.documentElement.style.setProperty("--squareSize", `${squareSize}px`);
        for (let i = 1; i <= numOfSquares * numOfSquares; i++) {
            let square = document.createElement('div');
            square.classList.add("square");
            square.addEventListener('mouseover', randomColorSquare)
            gridContainer.appendChild(square);
        }

    }

    function randomColorSquare(evnt) {
        let rgbRed = Math.floor(Math.random() * 256);
        let rgbGreen = Math.floor(Math.random() * 256);
        let rgbBlue = Math.floor(Math.random() * 256);
        evnt.target.style.backgroundColor = `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`;
    }

    function getNumberInput() {
        return document.querySelector('#number-input').value;
    }

    function resetSquareColor() {
        document.querySelectorAll('.square').forEach(square =>
            square.style.backgroundColor = 'white');
    }

    function clear() {
        //make array out of children of gridContainer
        const gridArray = Array.from(gridContainer.childNodes);
        gridArray.forEach((element) => {
            gridContainer.removeChild(element);
        });
    }

    function main() {
        createGrid(32);
        document.querySelector('#form-submit').addEventListener('click', function (event) {
            event.preventDefault();
            clear();
            let number = getNumberInput();
            if (number >= 4 && number <= 100) {
                createGrid(number);
            }
            else {
                alert('please enter a number between 4-100');
                createGrid(32);
            }
        });
        document.querySelector('#clear').addEventListener('click', function (event) {
            event.preventDefault();
            resetSquareColor();
        });

    }
    main();
});