class TypedArrayList {
    constructor(type, name) {
        this.type = type;
        this.name = name;
        this.elements = [];
        this.createDOMElements();
    }

    createDOMElements() {
        const container = document.createElement('div');
        container.className = 'arraylist-container fade-in';
        container.innerHTML = `
            <div class="arraylist-header">
                <span class="arraylist-title">${this.name}</span>
                <span class="arraylist-type">${this.type}</span>
            </div>
            <div class="arraylist-controls">
                <input type="text" placeholder="enter value" class="value-input">
                <input type="number" placeholder="enter index" class="index-input">
                <button onclick="lists['${this.name}'].add()">add</button>
                <button onclick="lists['${this.name}'].addAtIndex()">add at index</button>
                <button onclick="lists['${this.name}'].removeAtIndex()">remove at index</button>
                <button onclick="lists['${this.name}'].removeLast()">remove last</button>
                <button onclick="lists['${this.name}'].clear()">clear</button>
            </div>
            <div class="array-container"></div>
            <div class="array-info">
                <span>size: <span class="size">0</span></span>
                <span>is empty: <span class="empty">true</span></span>
            </div>
            <div class="message"></div>
        `;
        document.getElementById('arrayLists').appendChild(container);
        this.domElements = {
            container: container,
            arrayContainer: container.querySelector('.array-container'),
            valueInput: container.querySelector('.value-input'),
            indexInput: container.querySelector('.index-input'),
            sizeDisplay: container.querySelector('.size'),
            emptyDisplay: container.querySelector('.empty'),
            message: container.querySelector('.message')
        };
    }

    validateValue(value) {
        switch(this.type) {
            case 'string':
                return typeof value === 'string';
            case 'number':
                return !isNaN(Number(value));
            case 'boolean':
                return value.toLowerCase() === 'true' || value.toLowerCase() === 'false';
            default:
                return false;
        }
    }

    convertValue(value) {
        switch(this.type) {
            case 'number':
                return Number(value);
            case 'boolean':
                return value.toLowerCase() === 'true';
            default:
                return value;
        }
    }

    showMessage(text, isError = false) {
        this.domElements.message.className = `message ${isError ? 'error-message' : 'success-message'}`;
        this.domElements.message.textContent = text;
        setTimeout(() => this.domElements.message.textContent = '', 3000);
    }

    add() {
        const value = this.domElements.valueInput.value.trim();
        if (!value) return;

        if (!this.validateValue(value)) {
            this.showMessage(`invalid ${this.type} value`, true);
            return;
        }

        const convertedValue = this.convertValue(value);
        this.elements.push(convertedValue);
        this.updateDisplay();
        this.domElements.valueInput.value = '';
        this.showMessage(`added "${value}"`);
    }

    addAtIndex() {
        const value = this.domElements.valueInput.value.trim();
        const index = parseInt(this.domElements.indexInput.value);

        if (!value || isNaN(index)) return;
        if (!this.validateValue(value)) {
            this.showMessage(`invalid ${this.type} value`, true);
            return;
        }

        if (index < 0 || index > this.elements.length) {
            this.showMessage('invalid index', true);
            return;
        }

        const convertedValue = this.convertValue(value);
        this.elements.splice(index, 0, convertedValue);
        this.updateDisplay();
        this.domElements.valueInput.value = '';
        this.domElements.indexInput.value = '';
        this.showMessage(`added "${value}" at index ${index}`);
    }

    removeAtIndex() {
        const index = parseInt(this.domElements.indexInput.value);
        if (isNaN(index) || index < 0 || index >= this.elements.length) {
            this.showMessage('invalid index', true);
            return;
        }

        this.elements.splice(index, 1);
        this.updateDisplay();
        this.domElements.indexInput.value = '';
        this.showMessage(`removed element at index ${index}`);
    }

    removeLast() {
        if (this.elements.length === 0) {
            this.showMessage('list is empty', true);
            return;
        }
        this.elements.pop();
        this.updateDisplay();
        this.showMessage('removed last element');
    }

    clear() {
        this.elements = [];
        this.updateDisplay();
        this.showMessage('cleared list');
    }

    updateDisplay() {
        this.domElements.arrayContainer.innerHTML = '';
        this.elements.forEach((element, index) => {
            const div = document.createElement('div');
            div.className = 'array-element';
            div.textContent = element.toString();
            div.setAttribute('data-index', index);
            this.domElements.arrayContainer.appendChild(div);
        });
        this.domElements.sizeDisplay.textContent = this.elements.length;
        this.domElements.emptyDisplay.textContent = this.elements.length === 0;
    }
}

const lists = {};

function createNewList() {
    const type = document.getElementById('listType').value;
    const name = document.getElementById('listName').value.trim();

    if (!name) {
        alert('please enter a name for the arraylist');
        return;
    }

    if (lists[name]) {
        alert('an arraylist with this name already exists');
        return;
    }

    lists[name] = new TypedArrayList(type, name);
    document.getElementById('listName').value = '';
}
