/**
 * @name remove-sidebar
 * @version 0.0.1
 * @description removes sidebar
 * @author kylwrld
 * 
 */

let id;
var sidebar_cache;
let is_removed = false;

module.exports = class Remove {
    handleSidebar(event) {
        let parent = document.querySelector(".content__4bf10");
        
        if (event.code == "Pause") {
            if (is_removed) {
                console.log(sidebar_cache)
                parent.insertBefore(sidebar_cache, parent.firstChild)    
                is_removed = false;
            } else {
                let sidebar = document.querySelector(".sidebar_ded4b5");
                sidebar_cache = sidebar
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
        clearInterval(id)
    }
}