__d(
  "isSocialPlugin",
  ["CSSCore", "ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? !!document.body && o("CSSCore").hasClass(document.body, "plugin")
        : !1;
    }
    l.default = s;
  },
  98,
);
