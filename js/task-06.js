const input = document.querySelector('input');
    const createBtn = document.querySelector('[data-create]');
    const destroyBtn = document.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    createBtn.addEventListener('click', createBoxes);
    destroyBtn.addEventListener('click', destroyBoxes);

    function createBoxes() {
      const amount = input.value;
      if (amount < 1 || amount > 100) {
        return;
      }

      const boxes = [];

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();

        boxes.push(box);
      }

      boxesContainer.append(...boxes);
      input.value = '';
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }