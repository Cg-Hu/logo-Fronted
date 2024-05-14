export class Swiper {
    constructor(options) {
        this.$options = options;
        this.$current = 0;
        this.__init();
        this.__thetime();
        this.__pageEvent();
        console.log(this);
    }

    __init() {
        this.content = document.querySelector(this.$options.content);
        this.swiperItem = document.querySelectorAll(this.$options.swiperItem);
        this.page = document.querySelector(this.$options.page).children;
    }

    __pageEvent() {
        [...this.page].forEach((item, index) => {
            item.onclick = () => {
                clearInterval(this.timer)
                this.$current = index;
                this.__content();
                setTimeout(() => {
                    this.__thetime()
                }, 4000)
            }
        });
    }

    __thetime() {
        this.timer = setInterval(() => {

            this.$current++;
            if (this.$current > this.swiperItem.length - 1) {
                this.$current = 0;
                this.content.style.transition = "";

            }
            if (this.$current == 1) {
                this.content.style.transition = "all .3s";
            }
            this.__content();
            this.__pageSelect();
        }, 3000);
    }

    __content() {
        this.content.style.left = -510 * this.$current + "px";
        // for (let i = 0; i < this.swiperItem.length - 1; i++) {
        //     if( i != this.$current) {
        //         [...this.page][i].style.backgroundColor = "";
        //     }
        // }
        // [...this.page][this.$current].style.backgroundColor = "red";
    }

    __pageSelect() {
        if (this.$current == 0) {
            [...this.page][this.$current].style.backgroundColor = "red";
        }
        else if (this.$current > 0 && this.$current < this.swiperItem.length - 1) {
            [...this.page][this.$current - 1].style.backgroundColor = "";
            [...this.page][this.$current].style.backgroundColor = "red";
        }
        else if (this.$current == this.swiperItem.length - 1) {
            [...this.page][this.$current - 1].style.backgroundColor = "";
            [...this.page][0].style.backgroundColor = "red";
        }
        else {
            [...this.page][0].style.backgroundColor = "red";
        }

    }
}