let accordians = document.querySelectorAll('.accordian-container .accordian');

accordians.forEach(acc => {
    acc.onclick = () => {
        accordians.forEach(acrn => acrn.classList.remove('active'));
        acc.classList.add('active');
    }
})