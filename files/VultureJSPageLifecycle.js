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
    function u(t) {
      (e || (e = r("ExecutionEnvironment"))).canUseEventListeners &&
        document.addEventListener("visibilitychange", function () {
          t(c());
        });
    }
    function c() {
      return (
        (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        document.visibilityState === "hidden"
      );
    }
    ((l.onPageHide = s), (l.onVisibilityChange = u), (l.isPageHidden = c));
  },
  98,
);
