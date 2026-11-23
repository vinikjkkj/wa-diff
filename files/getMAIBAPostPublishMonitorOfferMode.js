__d(
  "getMAIBAPostPublishMonitorOfferMode",
  ["isMAIBAAsyncTaskEnabled", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      if (!r("isMAIBAAsyncTaskEnabled")()) return "control";
      var e = r("qex")._("5645");
      return e === "auto" ? "auto" : e === "widget" ? "widget" : "control";
    }
    l.default = e;
  },
  98,
);
