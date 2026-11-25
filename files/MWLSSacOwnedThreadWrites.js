__d(
  "MWLSSacOwnedThreadWrites",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new WeakSet();
    function l(t) {
      return (e.add(t), t);
    }
    function s(t) {
      return e.has(t);
    }
    ((i.markSacOwnedThreadWrite = l), (i.isSacOwnedThreadWrite = s));
  },
  66,
);
