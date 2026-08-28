__d(
  "AdsICDeliveryDebuggerUtils",
  [
    "AdsICDebuggerContainer.react",
    "Bootloader",
    "emptyFunction",
    "gkx",
    "react",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u;
    r("requireWeak")("AdsICDeliveryDebugger", function (e) {
      u = e;
    });
    var c = (function () {
        function e() {
          ((this.$1 = !1),
            (this.$2 = !1),
            (this.$1 = !1),
            (this.$2 = !1),
            r("gkx")("21447") &&
              ((this.$1 = !0),
              r("Bootloader").loadModules(
                ["AdsICDeliveryDebugger"],
                r("emptyFunction"),
                "AdsICDeliveryDebuggerUtils",
              )));
        }
        var t = e.prototype;
        return (
          (t.isDebugModeOn = function () {
            return this.$1;
          }),
          (t.isVerboseDebugModeOn = function () {
            return this.$1 && this.$2;
          }),
          (t.setVerboseMode = function (t) {
            (t === void 0 && (t = !0), (this.$2 = t));
          }),
          (t.getDebuggerInfoForMessage = function (t) {
            var e = "[IC Debugger - " + t + "]";
            if (u) {
              var n,
                r = u.getMessageState(t);
              if (r)
                for (var o in r)
                  o !== "id" && (e += " - " + o + ": " + JSON.stringify(r[o]));
              e +=
                " - invisibleReason: " +
                ((n = u.getInvisibleReasonForMessage(t)) != null ? n : "");
            }
            return e;
          }),
          (t.wrapInDebugContainer = function (t, n) {
            return s.jsx(r("AdsICDebuggerContainer.react"), {
              tooltip: this.getDebuggerInfoForMessage(t),
              children: n,
            });
          }),
          e
        );
      })(),
      d = new c();
    l.default = d;
  },
  98,
);
