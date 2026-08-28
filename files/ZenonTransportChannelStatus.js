__d(
  "ZenonTransportChannelStatus",
  ["EventEmitter", "FBLogger", "JSResourceForInteraction", "ZenonDGWUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("ZenonDGWUtils").shouldUseDGW()
        ? r("JSResourceForInteraction")(
            "ZenonDGWTransportChannelStatus",
          ).__setRef("ZenonTransportChannelStatus")
        : r("JSResourceForInteraction")(
            "ZenonMQTTTransportChannelStatus",
          ).__setRef("ZenonTransportChannelStatus"),
      s = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this) || this),
            (n.$ZenonTransportChannelStatus$p_1 = null),
            e
              .load()
              .then(function (e) {
                var t = new e();
                ((n.$ZenonTransportChannelStatus$p_1 = t),
                  t.addListener("connectionStateEvent", function (e) {
                    n.emit("connectionStateEvent", e);
                  }));
                var r = t.getConnectionState();
                r !== "Disconnected" && n.emit("connectionStateEvent", r);
              })
              .catch(function (e) {
                r("FBLogger")("rtc_www").warn(
                  "Failed to load transport channel status resource: %s",
                  String(e),
                );
              }),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.getConnectionState = function () {
            var e, t;
            return (e =
              (t = this.$ZenonTransportChannelStatus$p_1) == null
                ? void 0
                : t.getConnectionState()) != null
              ? e
              : "Disconnected";
          }),
          (o.getTransportName = function () {
            var e, t;
            return (e =
              (t = this.$ZenonTransportChannelStatus$p_1) == null
                ? void 0
                : t.getTransportName()) != null
              ? e
              : "unknown";
          }),
          n
        );
      })(r("EventEmitter"));
    l.default = s;
  },
  98,
);
