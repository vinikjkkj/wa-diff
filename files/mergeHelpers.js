__d(
  "mergeHelpers",
  ["invariant", "FbtResultBase"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 36,
      u = function (t) {
        return (
          typeof t != "object" ||
          t instanceof Date ||
          t === null ||
          t instanceof r("FbtResultBase")
        );
      },
      c = {
        MAX_MERGE_DEPTH: e,
        isTerminal: u,
        normalizeMergeArg: function (t) {
          return t == null ? {} : t;
        },
        checkMergeArrayArgs: function (t, n) {
          (Array.isArray(t) && Array.isArray(n)) || s(0, 3714, t, n);
        },
        checkMergeObjectArgs: function (t, n) {
          (c.checkMergeObjectArg(t), c.checkMergeObjectArg(n));
        },
        checkMergeObjectArg: function (t) {
          (!u(t) && !Array.isArray(t)) || s(0, 3715, t);
        },
        checkMergeIntoObjectArg: function (t) {
          ((!u(t) || typeof t == "function") && !Array.isArray(t)) ||
            s(0, 3716, t);
        },
        checkMergeLevel: function (n) {
          n < e || s(0, 3717);
        },
        checkArrayStrategy: function (t) {
          t == null || t in c.ArrayStrategies || s(0, 3718);
        },
        ArrayStrategies: {
          Clobber: "Clobber",
          Concat: "Concat",
          IndexByIndex: "IndexByIndex",
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
