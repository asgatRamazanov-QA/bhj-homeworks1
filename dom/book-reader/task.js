
const fontSizeDict = {
    0: 'book_fs-small',
    1: '',
    2: 'book_fs-big',
};

const fontColorDict = {
    0: '',
    1: 'book_color-gray',
    2: 'book_color-whitesmoke',
};

const backgroundColorDict = {
    0: 'book_bg-black',
    1: 'book_bg-gray',
    2: '',
};

const fontSizeLinks = Array.from(document.querySelectorAll('a.font-size'));
const fontColorLinks = Array.from(document.querySelectorAll('div.book__control_color a.color'));
const backgroundColorLinks = Array.from(document.querySelectorAll('div.book__control_background a.color'));
const bookContent = document.querySelector('div.book__content');


function getAttributeType(element) {
    return element.classList.contains('color') ? 'color' : element.classList.contains('font-size') ? 'font_size' : '';
}


function isActive(element) {
    let type = getAttributeType(element);
    return type === 'color' ? element.classList.contains('color_active') : type === 'font_size' ? element.classList.contains('font-size_active') : false;
};


function changeClassForBookContent(item, currentIndex, index) {
    if (item.closest('div').classList.contains('book__control_font-size')) {
        fontSizeDict[index] ? bookContent.classList.toggle(fontSizeDict[index]) : '';
        fontSizeDict[currentIndex] ? bookContent.classList.toggle(fontSizeDict[currentIndex]) : '';
    } else if (item.closest('div').classList.contains('book__control_color')) {
        fontColorDict[index] ? bookContent.classList.toggle(fontColorDict[index]) : '';
        fontColorDict[currentIndex] ? bookContent.classList.toggle(fontColorDict[currentIndex]) : '';
    } else if (item.closest('div').classList.contains('book__control_background')) {
        backgroundColorDict[index] ? bookContent.classList.toggle(backgroundColorDict[index]) : '';
        backgroundColorDict[currentIndex] ? bookContent.classList.toggle(backgroundColorDict[currentIndex]) : '';
    };

}

function clickEvent(array) {
    array.forEach(function (item, index, array) {
        item.onclick = function () {
            let oldIndex = array.findIndex(isActive);
            let type = getAttributeType(item);
            if (type === 'color') {
                array[oldIndex].classList.toggle('color_active');
                item.classList.toggle('color_active');
                changeClassForBookContent(item, oldIndex, index);
                return false;
            } else if (type === 'font_size') {
                array[oldIndex].classList.toggle('font-size_active');
                item.classList.toggle('font-size_active');
                changeClassForBookContent(item, oldIndex, index);
                return false;
            };
        };
    });
};

clickEvent(fontSizeLinks);
clickEvent(fontColorLinks);
clickEvent(backgroundColorLinks);