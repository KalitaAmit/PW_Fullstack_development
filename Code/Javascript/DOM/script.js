let currentDraggedItem;

const tierInput = document.getElementById('tier');

const itemContainers = document.getElementsByClassName('item-container');

// const tierLists = document.querySelectorAll('.tier-list');

const submitBtn = document.getElementById('submit');

const imageForm = document.getElementById('image-form');



for (const itemContainer of itemContainers) {
    setUpItemContainerForDrag(itemContainer);
}

// tierLists.forEach(setUpDropZoneInTierList);



imageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log('form submited');
    const imageItemInput = document.getElementById('image-item');

    // if (tierInput.value == '') {
    //     alert('please enter a valid image name');
    //     return;
    // }

    const imageUrl = imageItemInput.value;
    createTierListItem(imageUrl);
    imageItemInput.value = '';

});

submitBtn.addEventListener('click', (event) => {
    // console.log("button is clicked");
    // console.log(event);
    event.preventDefault();  //  stop the default behaviour of the event

    //  To get access of the elemnent on which this event was fired
    // const target = event.target;
    // console.log(target);
    // console.log(tierInput.value);
    if (tierInput.value == '') {
        alert('please enter a tier name');
        return;
    }

    createTierList(tierInput.value);
    tierInput.value = '';
});



function createTierList(tierListName) {
    const newTierList = document.createElement('div');
    newTierList.classList.add('tier-list');

    const heading = document.createElement('div');
    heading.classList.add('heading');

    const textContainer = document.createElement('div');
    textContainer.textContent = tierListName;

    heading.appendChild(textContainer);

    const newTierListItems = document.createElement('div');
    newTierListItems.classList.add('tier-list-items');

    newTierList.appendChild(heading);
    newTierList.appendChild(newTierListItems);


    setUpDropZoneInTierListItem(newTierList); newTierListItems


    const tierSection = document.getElementById('tier-list-section');
    tierSection.appendChild(newTierList);
}


function createTierListItem(imageUrl) {
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('draggable', true);
    imageDiv.classList.add('item-container');

    setUpItemContainerForDrag(img);

    const img = document.createElement('img');
    img.src = imageUrl;

    imageDiv.appendChild(img);

    const nonTierSection = document.getElementById('non-tier-section');
    nonTierSection.appendChild(imageDiv);
}

function setUpItemContainerForDrag(itemContainer) {
    // console.log(itemContainer);
    itemContainer.addEventListener('dragstart', (event) => {
        // console.log(event.target.parentNode);
        currentDraggedItem = event.target.parentNode;
    });



    itemContainer.addEventListner('dbclick', (event) => {
        const parentNode = event.target.parentNode;
        const nonTierSection = documet.getElement.getElementById('non-tier-section');
        nonTierSection.appendChild(parentNode);
    })
}




function setUpDropZoneInTierListItem(tierListItem) {
    tierListItem.addEventListener('drop', (event) => {
        event.preventDefault();
        // console.log('Drop');  //  stops the default behaviour of the event which is to not allow drop

        // console.log('tierList');
        event.target.appendChild(currentDraggedItem);

    });

    tierListItem.addEventListener('dragover', function (event {
        // console.log("dragged over a drop zone");
        // console.log(event.target);
        // event.target.appendChild(currentDraggedItem);
        console.log("event commming up", event);
    if (this != currentDrraggedItem.parentNode) {
        // console.log(event.target);
        this.appendChild(currentDraggeditem)
    }


});

}