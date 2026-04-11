__d(
  "BigPipeInstance",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = {
        Events: {
          init: "BigPipe/init",
          tti: "tti_bigpipe",
          displayed: "all_pagelets_displayed",
          loaded: "all_pagelets_loaded",
        },
        setCurrentInstance_DO_NOT_USE: function (n) {
          e = n;
        },
        getCurrentInstance: function () {
          return e;
        },
      },
      s = l;
    i.default = s;
  },
  66,
);
