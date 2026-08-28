__d(
  "baseTypeaheadLabelSuffixBuilder",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e.label.trimLeft().toLowerCase();
      return t == null || !n.startsWith(t) ? "" : n.slice(t.length);
    }
    i.default = e;
  },
  66,
);
