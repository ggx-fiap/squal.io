jQuery("#simulation")
  .on("click", ".s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-ShowMore_butt")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-container" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-accMovements",
                          "property": "jimGetHeight"
                        },"73" ]
                      }
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-All" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "datatype": "property",
                        "target": "#s-accMovements",
                        "property": "jimGetHeight"
                      }
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ShowLess_Butt" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 500,
                      "direction": "up"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-ShowLess_Butt")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-container" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "525"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-All" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "381"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ShowLess_Butt" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 500,
                      "direction": "up"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-RectangleCopy_20")) {
      cases = [
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
    } else if(jFirer.is("#s-Allmovements")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dropdownmovements" ],
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
                    "target": [ "#s-Shape_7" ],
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
              "condition": null,
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dropdownmovements" ],
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
                    "target": [ "#s-Shape_7" ],
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
    } else if(jFirer.is("#s-Rectangle_2")) {
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dropdownmovements" ],
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
                    "target": [ "#s-Shape_7" ],
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
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-modal" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimWindowHeight"
                      }
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-modal" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-accMovements" ],
                    "value": {
                      "action": "jimSortDataAscendant",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "ChristopherAccount",
                          "value": {
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "Locutor"
                            },"Pedro" ]
                          }
                        },
                        "value": {
                          "field": "Timestamp"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "listColor" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-modal" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dropdownmovements" ],
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
                    "target": [ "#s-Shape_7" ],
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
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-modal" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimWindowHeight"
                      }
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-modal" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-accMovements" ],
                    "value": {
                      "action": "jimSortDataAscendant",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "ChristopherAccount",
                          "value": {
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "Locutor"
                            },"Vitor" ]
                          }
                        },
                        "value": {
                          "field": "Timestamp"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-accMovements .s-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-accMovements .s-Input_2 input": {
                      "attributes": {
                        "color": "#585858",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "listColor" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-modal" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
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
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dropdownmovements" ],
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
                    "target": [ "#s-Shape_7" ],
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
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-modal" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimWindowHeight"
                      }
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-modal" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-accMovements" ],
                    "value": {
                      "action": "jimSortDataAscendant",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "ChristopherAccount",
                        "value": {
                          "field": "Timestamp"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "listColor" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-modal" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
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
  .on("pageload", ".s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Current_row_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-accMovements" ],
                    "value": {
                      "action": "jimSortDataDescendant",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "ChristopherAccount",
                        "value": null
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "listColor" ],
                    "value": "1"
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
  .on("mouseenter dragenter", ".s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-ShowMore_butt") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-ShowMore_butt > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#19BDD3",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#19BDD3",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#19BDD3",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#19BDD3",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#19BDD3",
                        "border-radius": "7px 7px 7px 7px"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-ShowMore_butt": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-ShowMore_butt .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-ShowMore_butt span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-ShowMore_butt": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#19BDD3",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#19BDD3",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#19BDD3",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#19BDD3",
                        "border-radius": "7px 7px 7px 7px",
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
    } else if(jFirer.is("#s-ShowLess_Butt") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-ShowLess_Butt > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#19BDD3",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#19BDD3",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#19BDD3",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#19BDD3",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#19BDD3",
                        "border-radius": "7px 7px 7px 7px"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-ShowLess_Butt": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-ShowLess_Butt .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-ShowLess_Butt span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-ShowLess_Butt": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#19BDD3",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#19BDD3",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#19BDD3",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#19BDD3",
                        "border-radius": "7px 7px 7px 7px",
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
    } else if(jFirer.is("#s-Allmovements") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-Allmovements": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-Allmovements .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-Allmovements span": {
                      "attributes": {
                        "color": "#19BDD3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-Shape_7 > svg": {
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
    } else if(jFirer.is("#s-Rectangle_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-Rectangle_2 > .backgroundLayer": {
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
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-Rectangle_2": {
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
    } else if(jFirer.is("#s-Rectangle_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-Rectangle_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#E2E2E2"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-Rectangle_1": {
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
    } else if(jFirer.is("#s-Rectangle_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#E2E2E2"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-Rectangle_3": {
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
    } else if(jFirer.is("#s-Rectangle_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#E2E2E2"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-Rectangle_4": {
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
  .on("mouseleave dragleave", ".s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-ShowMore_butt")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-ShowLess_Butt")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Allmovements")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_4")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("variablechange.jim", ".s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "listColor") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "property",
                  "target": ".s-Input_2",
                  "property": "jimGetValue"
                },"-$" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-accMovements .s-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-bf9eeaa9-ee11-4297-86c4-521373b04bd9 #s-accMovements .s-Input_2 input": {
                      "attributes": {
                        "color": "#FF0000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  });