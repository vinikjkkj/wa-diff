__d(
  "isDABulkEditingBusinessEnabled",
  ["AdsScopeUtils", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("AdsScopeUtils").getSelectedBusinessID();
      return e != null && e !== "" && r("justknobx")._("7015");
    }
    l.default = e;
  },
  98,
);
