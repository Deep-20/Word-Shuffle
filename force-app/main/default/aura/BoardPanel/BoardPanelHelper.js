({
    addResultRecord: function (component, gameResult) {
        const action = component.get("c.addResult");
        // console.log("Result: " + gameResult);
        // console.log("Mode: " + component.get("v.selectedMode"));

        const modeValue = component.get("v.selectedMode").toUpperCase();
        action.setParams({
            result: gameResult.toUpperCase(),
            mode: modeValue
        });

        action.setCallback(this, function (response) {
            const state = response.getState();
            // console.log("State in helper: " + state);
            if (state !== "SUCCESS") {
                console.error("Error in saving record");
            }
        });

        $A.enqueueAction(action);
    },

    showToast: function (titleValue, messageValue, typeValue) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title: titleValue,
            message: messageValue,
            type: typeValue
        });
        toastEvent.fire();
    }
});
