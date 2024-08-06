({
    startGame: function (component, event, helper) {
        //access comboBox
        let gameModeComboBox = component.find("gameMode");

        //access value of comboBox
        let selectedValue = gameModeComboBox.get("v.value");
        const selectedMode = component.get("v.selectedMode");

        //updates selectedMode value
        component.set("v.selectedMode", selectedValue);
        if (selectedMode) {
            const boardComp = component.find("boardComp");
            boardComp.startGame();
        }
    },

    reshuffleBoard: function (component, event, helper) {
        const boardComp = component.find("boardComp");
        boardComp.reshuffleBoard();
        component.set("v.reshuffleDisabled", true);
    },

    onResultHandler: function (component, event, helper) {
        const result = event.getParam("result");
        // console.log("Resulr in BPC " + result);
        if (result === "win") {
            component.set("v.reshuffleDisabled", true);
            helper.showToast("YOU WIN", "Hooray!!", "success");
        } else {
            component.set("v.reshuffleDisabled", false);
            helper.showToast("YOU LOSE", "Reshuffle to Play Again", "error");
        }
        helper.addResultRecord(component, result);
    }
});
