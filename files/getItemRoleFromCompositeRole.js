__d(
  "getItemRoleFromCompositeRole",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e) {
        case "grid":
          return "row";
        case "listbox":
          return "option";
        case "list":
          return "listitem";
        case "menu":
          return "menuitem";
        case "radiogroup":
          return "radio";
        case "row":
          return "gridcell";
        case "tablist":
          return "tab";
      }
      return null;
    }
    i.default = e;
  },
  66,
);
