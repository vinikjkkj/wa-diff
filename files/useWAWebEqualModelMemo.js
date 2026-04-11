__d(
  "useWAWebEqualModelMemo",
  ["WAArraysShallowEqual", "useCustomEqualityMemo"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r("WAArraysShallowEqual")(e, t, function (e, t) {
        return e.id === t.id;
      });
    }
    function s(t) {
      return r("useCustomEqualityMemo")(t, e);
    }
    l.default = s;
  },
  98,
);
