__d(
  "OverlayConfigLayerManager",
  ["FBLogger", "OverlayConfigConstants", "OverlayConfigDefaultsLayer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = [new (r("OverlayConfigDefaultsLayer"))()];
      }
      var t = e.prototype;
      return (
        (t.getValue = function (t) {
          for (var e = this.$1.length - 1; e >= 0; e--) {
            var n = this.$1[e].getValue(t);
            if (
              n > r("OverlayConfigConstants").OverlayConfigNotPresentFlagValue
            )
              return n;
          }
          throw r("FBLogger")("rtc_www").mustfixThrow(
            "OverlayConfigLayerManager: No value found for id %s",
            String(t),
          );
        }),
        (t.addLayer = function (t) {
          return (this.$1.push(t), this.$1.length - 1);
        }),
        (t.replaceLayer = function (t, n) {
          if (t === 0)
            throw r("FBLogger")("rtc_www").mustfixThrow(
              "OverlayConfigLayerManager: Tried to replace default layer!",
            );
          if (this.$1[t] == null)
            throw r("FBLogger")("rtc_www").mustfixThrow(
              "OverlayConfigLayerManager: Layer does not exist at index %s",
              String(t),
            );
          this.$1[t] = n;
        }),
        (t.clone = function () {
          var t = new e();
          return ((t.$1 = this.$1.slice()), t);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
