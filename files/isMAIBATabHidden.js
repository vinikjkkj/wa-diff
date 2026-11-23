__d(
  "isMAIBATabHidden",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? document.visibilityState !== "visible"
        : !1;
    }
    l.default = s;
  },
  98,
);
