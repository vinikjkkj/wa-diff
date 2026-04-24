__d(
  "WAWebWindowsHybridBridgeScalingControl",
  [
    "WAWebODS",
    "WAWebWindowsHybridBridgeTrace",
    "WAWebWindowsScalingControlEventEmitter",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.$2 = !1),
          (this.$3 = function () {
            r("WAWebWindowsScalingControlEventEmitter").trigger(
              "requestZoomIn",
            );
          }),
          (this.$4 = function () {
            r("WAWebWindowsScalingControlEventEmitter").trigger(
              "requestZoomOut",
            );
          }),
          (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.initialize = function () {
          var e, t, n;
          this.$2 ||
            ((this.$2 = !0),
            (e = this.$1) == null ||
              e.addEventListener("zoomInRequested", this.$3),
            (t = this.$1) == null ||
              t.addEventListener("zoomOutRequested", this.$4),
            (n = this.$1) == null || n.subscribe(null));
        }),
        (t.zoomIn = function () {
          this.$3();
        }),
        (t.zoomOut = function () {
          this.$4();
        }),
        (t.showScalingControl = function (t) {
          var e = this;
          (r("WAWebODS").incr(
            "web.hybrid.bridge.scaling_control.send.show_scaling_control",
          ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "scalingControl",
                method: "showScalingControl",
                type: "sync",
              },
              function () {
                var n;
                return (n = e.$1) == null ? void 0 : n.showScalingControl(t);
              },
            ));
        }),
        e
      );
    })();
    l.WindowsHybridBridgeScalingControl = e;
  },
  98,
);
