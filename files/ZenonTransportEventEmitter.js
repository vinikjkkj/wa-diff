__d(
  "ZenonTransportEventEmitter",
  ["EventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.emitJoinReady = function (t) {
            this.emit("transportPlatformEvent", {
              messageType: "joinReady",
              mwThriftRingRequest: t,
            });
          }),
          (n.emitParentWindowConnectionTimeout = function () {
            this.emit("transportPlatformEvent", {
              messageType: "parentWindowConnectionTimeout",
              mwThriftRingRequest: null,
            });
          }),
          t
        );
      })(r("EventEmitter")),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
