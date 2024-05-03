document.addEventListener('DOMContentLoaded', function () {
    const draggables = document.querySelectorAll('.draggable');

    let draggedItem = null;

    for (const draggable of draggables) {
        draggable.addEventListener('dragstart', function () {
            draggedItem = this;
            setTimeout(() => {
                this.style.display = 'none';
            }, 0);
        });

        draggable.addEventListener('dragend', function () {
            setTimeout(() => {
                draggedItem.style.display = 'grid';
                draggedItem = null;
            }, 0);
        });

        draggable.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        draggable.addEventListener('dragenter', function () {
            this.classList.add('hovered');
        });

        draggable.addEventListener('dragleave', function () {
            this.classList.remove('hovered');
        });

        draggable.addEventListener('drop', function () {
            this.classList.remove('hovered');
            if (draggedItem !== this) {
                const temp = this.innerHTML;
                this.innerHTML = draggedItem.innerHTML;
                draggedItem.innerHTML = temp;
            }
        });
    }
});