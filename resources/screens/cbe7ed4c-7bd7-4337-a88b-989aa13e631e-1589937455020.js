jQuery("#simulation")
  .on("click", ".s-cbe7ed4c-7bd7-4337-a88b-989aa13e631e .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/855c0d03-be22-405c-a3e3-1d84a7289207"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/993d5081-ce5b-42bd-9a93-4c8daca4fbbe"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-cbe7ed4c-7bd7-4337-a88b-989aa13e631e .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_3" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "900"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 3000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cbe7ed4c-7bd7-4337-a88b-989aa13e631e #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#0583B0"
                      }
                    }
                  },{
                    "#s-cbe7ed4c-7bd7-4337-a88b-989aa13e631e #s-Rectangle_2": {
                      "attributes-ie": {
                        "-pie-background": "#0583B0",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 1000
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cbe7ed4c-7bd7-4337-a88b-989aa13e631e #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#0583B0"
                      }
                    }
                  },{
                    "#s-cbe7ed4c-7bd7-4337-a88b-989aa13e631e #s-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "#0583B0",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 1000
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cbe7ed4c-7bd7-4337-a88b-989aa13e631e #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#0583B0"
                      }
                    }
                  },{
                    "#s-cbe7ed4c-7bd7-4337-a88b-989aa13e631e #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#0583B0",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 1000
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Confirmation" ],
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "timed",
                  "delay": 500
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-MyAccounts_2" ],
                    "value": "Processamento concluído"
                  },
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-cbe7ed4c-7bd7-4337-a88b-989aa13e631e .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cbe7ed4c-7bd7-4337-a88b-989aa13e631e #s-Rectangle_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#19BDD3",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#19BDD3",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#19BDD3",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#19BDD3",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#19BDD3",
                        "border-radius": "17px 17px 17px 17px"
                      }
                    }
                  },{
                    "#s-cbe7ed4c-7bd7-4337-a88b-989aa13e631e #s-Rectangle_1": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#19BDD3",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#19BDD3",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#19BDD3",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#19BDD3",
                        "border-radius": "17px 17px 17px 17px",
                        "-pie-background": "#19BDD3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-cbe7ed4c-7bd7-4337-a88b-989aa13e631e .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_1")) {
      jEvent.undoCases(jFirer);
    }
  });