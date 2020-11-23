(function(window, undefined) {
  var dictionary = {
    "993d5081-ce5b-42bd-9a93-4c8daca4fbbe": "HB -Home",
    "07eca82d-78e9-497b-9ad3-45de8abe1161": "HB - Movements SaAcc",
    "847dd8d3-2b89-4c80-a595-8135e57e47eb": "Dashboard",
    "bf9eeaa9-ee11-4297-86c4-521373b04bd9": "HB - Movements ChAcc",
    "855c0d03-be22-405c-a3e3-1d84a7289207": "HB - Transfer",
    "cbe7ed4c-7bd7-4337-a88b-989aa13e631e": "HB - Transfer Summary",
    "b68fa54e-c5f5-485b-a983-45e249093e3f": "HB - Movements CuAcc",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);