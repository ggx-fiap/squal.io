jQuery("#simulation")
  .on("click", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-MyAccounts_menu")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Dropdownmovements" ],
                    "effect": {
                      "type": "slide",
                      "duration": 300,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#t-Drop_trigger" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "180"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#t-Drop_trigger" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-Dropdownmovements" ],
                    "effect": {
                      "type": "slide",
                      "duration": 300,
                      "direction": "up"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 3000
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Conversations_menu")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/847dd8d3-2b89-4c80-a595-8135e57e47eb"
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
    } else if(jFirer.is("#t-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#t-Drop_trigger" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-Dropdownmovements" ],
                    "effect": {
                      "type": "slide",
                      "duration": 300,
                      "direction": "up"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "listColor" ],
                    "value": "0"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b68fa54e-c5f5-485b-a983-45e249093e3f"
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
    } else if(jFirer.is("#t-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#t-Drop_trigger" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-Dropdownmovements" ],
                    "effect": {
                      "type": "slide",
                      "duration": 300,
                      "direction": "up"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "listColor" ],
                    "value": "0"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/07eca82d-78e9-497b-9ad3-45de8abe1161"
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
    } else if(jFirer.is("#t-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#t-Drop_trigger" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "360"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-Dropdownmovements" ],
                    "effect": {
                      "type": "slide",
                      "duration": 300,
                      "direction": "up"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "listColor" ],
                    "value": "0"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bf9eeaa9-ee11-4297-86c4-521373b04bd9"
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
    } else if(jFirer.is("#t-Hotspot_1")) {
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
  .on("pageload", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Text_5" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ null,"0",{
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimCount",
                          "parameter": [ null ]
                        },"6" ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Text_2" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ null,{
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimCount",
                          "parameter": [ null ]
                        },"2" ]
                      },{
                        "action": "jimCount",
                        "parameter": [ null ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Text_3" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ null,{
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimCount",
                          "parameter": [ null ]
                        },"6" ]
                      },{
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimCount",
                          "parameter": [ null ]
                        },"2" ]
                      } ]
                    }
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
    } else if(jFirer.is("#t-Text_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Text_8" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ null,"0",{
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimCount",
                          "parameter": [ null ]
                        },"6" ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Text_6" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ null,{
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimCount",
                          "parameter": [ null ]
                        },"2" ]
                      },{
                        "action": "jimCount",
                        "parameter": [ null ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Text_7" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ null,{
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimCount",
                          "parameter": [ null ]
                        },"6" ]
                      },{
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimCount",
                          "parameter": [ null ]
                        },"2" ]
                      } ]
                    }
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
  .on("mouseenter dragenter", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-MyAccounts_menu") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-MyAccounts_menu": {
                      "attributes": {
                        "line-height": "24px",
                        "font-size": "11.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-MyAccounts_menu .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-MyAccounts_menu span": {
                      "attributes": {
                        "color": "#19BDD3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Drop_trigger > svg": {
                      "attributes": {
                        "overlay": "#19BDD3"
                      }
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#t-Rectangle_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#E2E2E2"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_2": {
                      "attributes-ie": {
                        "-pie-background": "#E2E2E2",
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
    } else if(jFirer.is("#t-Rectangle_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#E2E2E2"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "#E2E2E2",
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
    } else if(jFirer.is("#t-Rectangle_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#E2E2E2"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#E2E2E2",
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
  .on("mouseleave dragleave", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-MyAccounts_menu")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Rectangle_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Rectangle_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Rectangle_4")) {
      jEvent.undoCases(jFirer);
    }
  });