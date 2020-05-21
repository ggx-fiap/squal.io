jQuery("#simulation")
  .on("click", ".s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_1")) {
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
    } else if(jFirer.is("#s-Paragraph_43")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_CL",
                  "property": "jimGetHeight"
                },"50" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_TF" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "50"
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
                    "target": [ "#s-Info" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "400"
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_CL" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "280"
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
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_14" ],
                    "angle": {
                      "type": "rotateby",
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
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_15","#s-Image_Minus_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_Minus_3","#s-Image_14" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Info" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "170"
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
                    "target": [ "#s-Panel_CL","#s-Panel_TF" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "50"
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
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_Minus_2" ],
                    "angle": {
                      "type": "rotateby",
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
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_Minus_2","#s-Image_Minus_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_14" ]
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
    } else if(jFirer.is("#s-Paragraph_44")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_TF",
                  "property": "jimGetHeight"
                },"50" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_CL" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "50"
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
                    "target": [ "#s-Info" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "317"
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_TF" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "180"
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
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_15" ],
                    "angle": {
                      "type": "rotateby",
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
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_14","#s-Image_Minus_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_15","#s-Image_Minus_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Info" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "170"
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
                    "target": [ "#s-Panel_CL","#s-Panel_TF" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "50"
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
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_Minus_3" ],
                    "angle": {
                      "type": "rotateby",
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
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_Minus_2","#s-Image_Minus_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_15" ]
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
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
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
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
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
    }
  })
  .on("click", ".s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_23")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimRotate",
                    "parameter": {
                      "target": [ "#s-Image_10" ],
                      "angle": {
                        "type": "rotateto",
                        "value": "180"
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
                      "target": [ "#s-Cell_1" ],
                      "width": {
                        "type": "noresize"
                      },
                      "height": {
                        "type": "exprvalue",
                        "value": "170"
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
                    "action": "jimResize",
                    "parameter": {
                      "target": [ "#s-Rectangle_4" ],
                      "width": {
                        "type": "noresize"
                      },
                      "height": {
                        "type": "exprvalue",
                        "value": "170"
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
                    "action": "jimMove",
                    "parameter": {
                      "target": [ "#s-Group_OO" ],
                      "top": {
                        "type": "movetoposition",
                        "value": "790"
                      },
                      "left": {
                        "type": "nomove"
                      },
                      "containment": false,
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 500
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
        jEvent.launchCases(cases);
      }
    }
  })
  .on("mouseenter dragenter", ".s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_43": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_43": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_43": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_14": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_44")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_44": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_44": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_44": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_15 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_15": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_23": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_10 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_10": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-ChrisAccount_detail" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "570"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_9": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_27": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_27": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_27": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_25": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_25": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_25": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "0px 3px 15px 0px #EBEBEB"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Rectangle_4": {
                      "attributes": {
                        "text-shadow": "none"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-SaAccResumen" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "455"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-RectangleCopy_2_9 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-RectangleCopy_2_9 > img, #s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-RectangleCopy_2_9 > svg": {
                      "attributes": {
                        "box-shadow": "0px 3px 15px 0px #EBEBEB"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-SavingsAccount_4422_3": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-SavingsAccount_4422_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-SavingsAccount_4422_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-AvailableCopy": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-AvailableCopy": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-AvailableCopy": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-CuAccResumen" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "342"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-RectangleCopy_21 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-RectangleCopy_21 > img, #s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-RectangleCopy_21 > svg": {
                      "attributes": {
                        "box-shadow": "0px 3px 15px 0px #EBEBEB"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_4": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Available": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Available": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Available": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-CurrentAccount_4422_4": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-CurrentAccount_4422_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-CurrentAccount_4422_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_43") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Paragraph_43").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Paragraph_43") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_43": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_43": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_43": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_14": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_44") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Paragraph_44").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Paragraph_44") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_44": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_44": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_44": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_15 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_15": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_23") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Paragraph_23").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Paragraph_23") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_23": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_10 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_10": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Image_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_4") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Hotspot_4").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Hotspot_4") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-ChrisAccount_detail" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "573"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_9": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_27": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_27": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_27": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_25": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_25": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Paragraph_25": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Rectangle_4": {
                      "attributes": {
                        "text-shadow": "none"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Hotspot_2").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Hotspot_2") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-SaAccResumen" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "458"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-RectangleCopy_2_9 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-RectangleCopy_2_9 > img, #s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-RectangleCopy_2_9 > svg": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-SavingsAccount_4422_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-SavingsAccount_4422_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-SavingsAccount_4422_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-AvailableCopy": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-AvailableCopy": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-AvailableCopy": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Hotspot_1").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Hotspot_1") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-CuAccResumen" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "345"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-RectangleCopy_21 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-RectangleCopy_21 > img, #s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-RectangleCopy_21 > svg": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Available": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Available": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Available": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-CurrentAccount_4422_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-CurrentAccount_4422_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-CurrentAccount_4422_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe .mouseenter", function(event, data) {
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
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Rectangle_1 > .backgroundLayer": {
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
                    "#s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe #s-Rectangle_1": {
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
  .on("mouseleave dragleave", ".s-993d5081-ce5b-42bd-9a93-4c8daca4fbbe .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_1")) {
      jEvent.undoCases(jFirer);
    }
  });