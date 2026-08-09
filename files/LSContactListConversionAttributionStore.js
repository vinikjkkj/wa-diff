__d(
  "LSContactListConversionAttributionStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l(t) {
      return t != null ? e.get(t) : null;
    }
    function s(t, n) {
      t != null && e.set(t, n);
    }
    function u(t) {
      t != null && e.delete(t);
    }
    ((i.getAttribution = l), (i.setAttribution = s), (i.resetAttribution = u));
  },
  66,
);
