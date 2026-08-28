__d(
  "AdsSelectorNameUtils",
  ["renameFunction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r("renameFunction")(e, t);
    }
    function s(t, n) {
      Object.keys(t).forEach(function (r) {
        var o = t[r];
        typeof o == "function" && o.getStores != null && e(o, n + "." + r);
      });
    }
    ((l.nameSelector = e), (l.nameSelectorsInObject = s));
  },
  98,
);
