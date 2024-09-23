function changeImg(element, event){
    var img = document.getElementById('doorImg')

    
    if(event.type == 'mouseover'){
        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSGYLfiRUpvn4sgkyKnncTpKzQdInOZzDhA&s'
    }

    else{
        img.src="https://png.pngtree.com/png-vector/20221119/ourmid/pngtree-closed-wooden-door-design-vector-png-image_6471174.png"
    }
}
