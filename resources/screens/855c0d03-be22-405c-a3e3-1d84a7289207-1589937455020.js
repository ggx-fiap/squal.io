jQuery("#simulation")
  .on("click", ".s-855c0d03-be22-405c-a3e3-1d84a7289207 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Savings_Account","#s-Christopher_Account","#s-Current_Account_1","#s-noActive_step2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-change_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4696E7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4696E7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4696E7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4696E7",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4696E7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4696E7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4696E7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4696E7",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "TransferSendingAcc" ],
                    "value": null
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
                    "target": [ "#s-Current_Account","#s-Christopher_Account","#s-noActive_step2","#s-Savings_Account_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-change_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4696E7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4696E7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4696E7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4696E7",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4696E7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4696E7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4696E7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4696E7",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "TransferSendingAcc" ],
                    "value": null
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
                    "target": [ "#s-Current_Account","#s-Savings_Account","#s-Christopher_Account_1","#s-noActive_step2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-change_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4696E7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4696E7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4696E7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4696E7",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4696E7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4696E7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4696E7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4696E7",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "TransferSendingAcc" ],
                    "value": null
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
    } else if(jFirer.is("#s-Selectother_account_Copy_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Current_Account","#s-Savings_Account","#s-Christopher_Account","#s-Christopher_Account_1","#s-Current_Account_1","#s-noActive_step2","#s-Savings_Account_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_8": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-change_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_7" ]
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
    } else if(jFirer.is("#s-NEWACCOUNT_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-acc_new" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-noActive_step3" ]
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
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Christopher_Account_1","#s-noActive_step3","#s-Savings_Account_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-change_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_7" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4696E7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4696E7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4696E7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4696E7",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4696E7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4696E7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4696E7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4696E7",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "TransferDestinationAcc" ],
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "TransferRecipientName" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-CurrentAccount_4422_7",
                      "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Christopher_Account_1","#s-noActive_step3","#s-Current_Account_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-change_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_7" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4696E7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4696E7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4696E7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4696E7",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4696E7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4696E7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4696E7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4696E7",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "TransferDestinationAcc" ],
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "TransferRecipientName" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-SavingsAccount_4422_5",
                      "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-noActive_step3","#s-Current_Account_1","#s-Savings_Account_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-change_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_7" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4696E7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4696E7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4696E7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4696E7",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_8": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4696E7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4696E7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4696E7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4696E7",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "TransferDestinationAcc" ],
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "TransferRecipientName" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-ChristopherAccount_4",
                      "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Selectother_account_Copy_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Current_Account",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Christopher_Account_1","#s-noActive_step3","#s-Savings_Account_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_8": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-change_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_7" ]
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
              "condition": {
                "datatype": "property",
                "target": "#s-Savings_Account",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Christopher_Account_1","#s-noActive_step3","#s-Current_Account_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_8": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-change_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_7" ]
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
              "condition": {
                "datatype": "property",
                "target": "#s-Christopher_Account",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Current_Account_1","#s-Savings_Account_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_8": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D4D4D4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D4D4D4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D4D4D4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D4D4D4",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-change_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_7" ]
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
    } else if(jFirer.is("#s-NEWACCOUNT_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-acc_selection" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-noActive_step3" ]
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
    } else if(jFirer.is("#s-continue_butt")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-nameFull",
                    "property": "jimGetValue"
                  },"^.{2,}$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Nameand_Surname_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_9 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EF5558",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#EF5558",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EF5558",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EF5558",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_9": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EF5558",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#EF5558",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EF5558",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EF5558",
                        "border-radius": "5px 5px 5px 5px"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Nameand_Surname_2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-noActive_step3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "TransferDestinationAcc" ],
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "TransferRecipientName" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-nameFull",
                      "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Selectother_account_Copy_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-acc_selection" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-noActive_step3" ]
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
    } else if(jFirer.is("#s-make_transfer_butt")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cbe7ed4c-7bd7-4337-a88b-989aa13e631e",
                    "transition": {
                      "type": "fade",
                      "duration": 700
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
  .on("focusin", ".s-855c0d03-be22-405c-a3e3-1d84a7289207 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-nameFull")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_9 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4696E7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4696E7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4696E7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4696E7",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_9": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4696E7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4696E7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4696E7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4696E7",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Nameand_Surname_2" ]
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
    }
  })
  .on("focusout", ".s-855c0d03-be22-405c-a3e3-1d84a7289207 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-amount")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-amount" ],
                    "value": {
                      "action": "jimRound",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-amount",
                        "property": "jimGetValue"
                      },"2" ]
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
  .on("mouseenter dragenter", ".s-855c0d03-be22-405c-a3e3-1d84a7289207 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Current_Account" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "-3"
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "0px 3px 15px 0px #EBEBEB"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_2": {
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Savings_Account" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "-3"
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "0px 3px 15px 0px #EBEBEB"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_3": {
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
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Christopher_Account" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "-3"
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "0px 3px 15px 0px #EBEBEB"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_4": {
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
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Current_Account_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "-3"
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "0px 3px 15px 0px #EBEBEB"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_5": {
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
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Savings_Account_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "-3"
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "0px 3px 15px 0px #EBEBEB"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_6": {
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
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Christopher_Account_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "-3"
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "0px 3px 15px 0px #EBEBEB"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_8": {
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
    }
  })
  .on("mouseleave dragleave", ".s-855c0d03-be22-405c-a3e3-1d84a7289207 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_2") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_2").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_2") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Current_Account" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "3"
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_2": {
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
    } else if(jFirer.is("#s-Rectangle_3") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_3").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_3") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Savings_Account" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "3"
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_2": {
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
    } else if(jFirer.is("#s-Rectangle_4") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_4").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_4") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Christopher_Account" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "3"
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_4": {
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
    } else if(jFirer.is("#s-Rectangle_5") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_5").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_5") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Current_Account_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "3"
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_5": {
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
    } else if(jFirer.is("#s-Rectangle_6") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_6").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_6") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Savings_Account_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "3"
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_6": {
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
    } else if(jFirer.is("#s-Rectangle_8") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_8").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_8") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Christopher_Account_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "3"
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-Rectangle_8": {
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
    }
  })
  .on("mouseenter dragenter", ".s-855c0d03-be22-405c-a3e3-1d84a7289207 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-continue_butt") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-continue_butt > .backgroundLayer": {
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-continue_butt": {
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
    } else if(jFirer.is("#s-make_transfer_butt") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-make_transfer_butt > .backgroundLayer": {
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
                    "#s-855c0d03-be22-405c-a3e3-1d84a7289207 #s-make_transfer_butt": {
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
  .on("mouseleave dragleave", ".s-855c0d03-be22-405c-a3e3-1d84a7289207 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-continue_butt")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-make_transfer_butt")) {
      jEvent.undoCases(jFirer);
    }
  });