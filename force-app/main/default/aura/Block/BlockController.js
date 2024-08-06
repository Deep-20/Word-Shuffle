({
    blockClickHandler: function (component, event, helper) {
        const open = component.get("v.open");
        if (open === false) {
            component.set("v.open", true);

            const label = component.get("v.label");

            let compEvent = component.getEvent("onclick");
            compEvent.setParams({ value: label });
            compEvent.fire();
        }
    },

    scriptsLoaded: function (component, event, helper) {
        const divElement = component.getElement(".board-block");
        fitText(divElement);
    }
});
