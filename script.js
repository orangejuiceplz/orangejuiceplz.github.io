class ArrayList {
    constructor() {
        this.elements = [];
        this.container = document.getElementById('arrayContainer');
        this.sizeDisplay = document.getElementById('arraySize');
        this.isEmptyDisplay = document.getElementById('isEmpty');
        this.methodResult = document.getElementById('methodResult');
    }

    add(value) {
        this.elements.push(value);
        this.updateDisplay();
        this.animateElement(this.elements.length - 1, 'slide-in');
    }

    addAt(index, value) {
        if (index >= 0 && index <= this.elements.length) {
            this.elements.splice(index, 0, value);
            this.updateDisplay();
            this.animateElement(index, 'slide-in');
            return true;
        }
        return false;
    }

    removeLast() {
        if (this.elements.length > 0) {
            const lastIndex = this.elements.length - 1;
            this.animateElement(lastIndex, 'slide-out', () => {
                this.elements.pop();
                this.updateDisplay();
            });
        }
    }

    removeAt(index) {
        if (index >= 0 && index < this.elements.length) {
            this.animateElement(index, 'slide-out', () => {
                this.elements.splice(index, 1);
                this.updateDisplay();
            });
            return true;
        }
        return false;
    }

    set(index, value) {
        if (index >= 0 && index < this.elements.length) {
            this.elements[index] = value;
            this.updateDisplay();
            this.animateElement(index, 'pulse');
            return true;
        }
        return false;
    }

    get(index) {
        if (index >= 0 && index < this.elements.length) {
            this.animateElement(index, 'highlight');
            return this.elements[index];
        }
        return null;
    }

    indexOf(value) {
        const index = this.elements.indexOf(value);
        if (index !== -1) {
            this.animateElement(index, 'highlight');
        }
        return index;
    }

    clear() {
        this.elements = [];
        this.updateDisplay();
    }

    animateElement(index, animationClass, callback) {
        const element = this.container.children[index];
        if (element) {
            element.classList.add(animationClass);
            if (callback) {
                setTimeout(callback, 500);
            }
            setTimeout(() => {
                element.classList.remove(animationClass);
            }, 500);
        }
    }

    updateDisplay() {
        this.container.innerHTML = '';
        this.elements.forEach((element, index) => {
            const div = document.createElement('div');
            div.className = 'array-element';
            div.textContent = element;
            div.setAttribute('data-index', index);
            this.container.appendChild(div);
        });
        this.sizeDisplay.textContent = this.elements.length;
        this.isEmptyDisplay.textContent = this.elements.length === 0;
    }
}

const arrayList = new ArrayList();

function addElement() {
    const input = document.getElementById('valueInput');
    const value = input.value.trim();
    if (value) {
        arrayList.add(value);
        input.value = '';
        arrayList.methodResult.textContent = `added "${value}" to end of list`;
    }
}

function addAtIndex() {
    const value = document.getElementById('valueInput').value.trim();
    const index = parseInt(document.getElementById('indexInput').value);
    if (value && !isNaN(index)) {
        if (arrayList.addAt(index, value)) {
            document.getElementById('valueInput').value = '';
            document.getElementById('indexInput').value = '';
            arrayList.methodResult.textContent = `added "${value}" at index ${index}`;
        } else {
            arrayList.methodResult.textContent = 'invalid index';
        }
    }
}

function removeElement() {
    arrayList.removeLast();
    arrayList.methodResult.textContent = 'removed last element';
}

function removeAtIndex() {
    const index = parseInt(document.getElementById('indexInput').value);
    if (!isNaN(index)) {
        if (arrayList.removeAt(index)) {
            document.getElementById('indexInput').value = '';
            arrayList.methodResult.textContent = `removed element at index ${index}`;
        } else {
            arrayList.methodResult.textContent = 'invalid index';
        }
    }
}

function setAtIndex() {
    const value = document.getElementById('valueInput').value.trim();
    const index = parseInt(document.getElementById('indexInput').value);
    if (value && !isNaN(index)) {
        if (arrayList.set(index, value)) {
            document.getElementById('valueInput').value = '';
            document.getElementById('indexInput').value = '';
            arrayList.methodResult.textContent = `set "${value}" at index ${index}`;
        } else {
            arrayList.methodResult.textContent = 'invalid index';
        }
    }
}

function getAtIndex() {
    const index = parseInt(document.getElementById('indexInput').value);
    if (!isNaN(index)) {
        const value = arrayList.get(index);
        if (value !== null) {
            arrayList.methodResult.textContent = `element at index ${index} is "${value}"`;
        } else {
            arrayList.methodResult.textContent = 'invalid index';
        }
    }
}

function findIndex() {
    const value = document.getElementById('valueInput').value.trim();
    if (value) {
        const index = arrayList.indexOf(value);
        document.getElementById('valueInput').value = '';
        if (index !== -1) {
            arrayList.methodResult.textContent = `"${value}" found at index ${index}`;
        } else {
            arrayList.methodResult.textContent = `"${value}" not found in list`;
        }
    }
}

function clearArray() {
    arrayList.clear();
    arrayList.methodResult.textContent = 'cleared all elements';
}

document.getElementById('valueInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addElement();
    }
});
