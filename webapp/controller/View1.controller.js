sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,formatter) {
        "use strict";       

        return Controller.extend("moovi.m08a01.controller.View1", {       
            
            formatter: formatter,
        
            onInit: function () {

            }
        });
    });
