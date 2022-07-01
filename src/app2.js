import "./app2.css"
import $ from "jquery"
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on("click", "li", (e) => {
    const $li = $(e.currentTarget)
    $li.addClass('selected').siblings().removeClass("selected")
    const index = $li.index()
    // 找到tabContent的儿子们，然后第index个变成display:'block'，它的兄弟变成display:'none'
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})
