__d(
  "mergeDeep",
  ["mergeDeepInto", "mergeHelpers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o,
        a = (o = r("mergeHelpers")).normalizeMergeArg(e),
        i = o.normalizeMergeArg(t);
      (o.checkMergeObjectArgs(a, i), o.checkArrayStrategy(n));
      var l = {};
      return (r("mergeDeepInto")(l, a, n), r("mergeDeepInto")(l, i, n), l);
    }
    l.default = e;
  },
  98,
);
