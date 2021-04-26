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
            gridContainer.appendChild(square);
        }
        randomColorSquare();
    }

    function randomColorSquare(){
        document.querySelectorAll('.square').forEach(square =>
            square.addEventListener('mouseover', () => square.style.backgroundColor = 'hotpink')
        );
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
            createGrid(getNumberInput());
        });
        document.querySelector('#resetSquareColor').addEventListener('click', function (event) {
            event.preventDefault();
            resetSquareColor();
        });

    }
    main();
});