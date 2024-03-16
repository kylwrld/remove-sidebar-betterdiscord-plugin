/**
 * @name remove-sidebar
 * @version 0.0.1
 * @description removes sidebar
 * @author kylwrld
 * 
 */

var sidebar;
let is_removed = false;

module.exports = class Remove {
    handleSidebar(event) {
        if (event.code == "Pause") {
            let parent = document.querySelector(".content__4bf10");

            if (is_removed) {
                console.log(sidebar)
                parent.insertBefore(sidebar, parent.firstChild)    
                is_removed = false;
            } else {
                sidebar = document.querySelector(".sidebar_ded4b5");
                is_removed = true;
                parent.removeChild(sidebar)
            }
        }
    }

    start() {
        document.body.addEventListener("keydown", this.handleSidebar, false)
    }

    stop() {
        document.body.removeEventListener("keydown", this.handleSidebar, false);
    }
}