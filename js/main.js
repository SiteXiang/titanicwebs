const pages = document.querySelectorAll('.page');
const prevButtons = document.querySelectorAll('.prev');
const nextButtons = document.querySelectorAll('.next');
const body = document.querySelector('body');

let currentPage = 0; // 当前页面索引

function showPage(index) {
    pages.forEach((page, i) => {
        if (i === index) {
            page.classList.add('active');
            body.style.backgroundImage = `url('bg${i+1}.jpg')`; // 假设您的背景图片按照bg1.jpg, bg2.jpg等命名
        } else {
            page.classList.remove('active');
            page.classList.remove('flip'); // 确保移除flip类，以便重新触发动画
        }
    });
}

prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentPage > 0) {
            pages[currentPage].classList.add('flip'); // 添加flip类以触发翻页动画
            currentPage -= 1;
            showPage(currentPage);
        }
    });
});

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            pages[currentPage].classList.add('flip'); // 添加flip类以触发翻页动画
            currentPage += 1;
            showPage(currentPage);
        }
    });
});

showPage(currentPage); // 初始化显示第一页
