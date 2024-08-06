({
    doInit: function (component, event, helper) {
        console.log("Initialization Complete");

        const gameMode = component.get("v.mode");
        let column = 0;
        if (gameMode && gameMode === "hard") {
            column = 6;
        } else if (gameMode && gameMode === "medium") {
            column = 4;
        } else {
            column = 3;
        }

        let blockSize = 12 / column;
        component.set("v.blockSize", blockSize);

        const words = helper.getWords(column * column);
        component.set("v.words", words);

        const winWord = helper.getWinWord(words);
        component.set("v.winWord", winWord);
        helper.resetBoard(component);
    },

    doRender: function (component, event, helper) {
        console.log("Render Complete");
    },

    blockClickHandler: function (component, event, helper) {
        let clickCount = component.get("v.clickCount") + 1;
        const value = event.getParam("value");
        component.set("v.clickCount", clickCount);

        if (value === component.get("v.winWord")) {
            component.set("v.result", "YOU WIN");
            helper.disableBoard(component);
            // console.log("In block click handler win");
            helper.fireResultEvent("win");
        } else if (clickCount === 3) {
            component.set("v.result", "YOU LOSE");
            helper.disableBoard(component);
            // console.log("In block click handler lose");
            helper.fireResultEvent("lose");
        }
    },

    reshuffleBoard: function (component, event, helper) {
        const words = component.get("v.words");
        const randomizedWords = helper.randomizeArray(words);
        component.set("v.words", randomizedWords);
        helper.resetBoard(component);
    }
});
