__d(
  "VultureJSPageLifecycle",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      (e || (e = r("ExecutionEnvironment"))).canUseEventListeners &&
        window.addEventListener("pagehide", t);
    }
    l.onPageHide = s;
  },
  98,
);
