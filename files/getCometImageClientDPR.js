__d(
  "getCometImageClientDPR",
  ["ExecutionEnvironment", "WebPixelRatio"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t;
        return (t = window.devicePixelRatio) != null ? t : 1;
      }
      return o("WebPixelRatio").get();
    }
    l.default = s;
  },
  98,
);
