__d(
  "WANotifyConnectionChangeFactory",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 15e3;
    function l(t, n, r) {
      r === void 0 && (r = e);
      var o = {
          timeoutID: null,
          connectionStatus: "disconnected",
          optimismLevel: "optimist",
        },
        a = function () {
          var e = o.connectionStatus,
            t = o.optimismLevel;
          t === "optimist"
            ? (o.timeoutID = setTimeout(function () {
                ((o.optimismLevel = "realist"), n(e));
              }, r))
            : n(e);
        };
      return function (e) {
        ((o.connectionStatus = e),
          e === "disconnected" || e === "in_handshake"
            ? a()
            : (o.timeoutID != null &&
                (clearTimeout(o.timeoutID), (o.timeoutID = null)),
              n(e)),
          t(e));
      };
    }
    i.notifyConnectionChangeFactory = l;
  },
  66,
);
