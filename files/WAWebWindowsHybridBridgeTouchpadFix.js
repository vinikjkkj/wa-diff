__d(
  "WAWebWindowsHybridBridgeTouchpadFix",
  [
    "WAWebDebounce",
    "WAWebODS",
    "WAWebWindowsHybridBridgeTrace",
    "WAWebWindowsHybridFlowHelpers",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.$2 = r("WAWebDebounce")(function (e) {
          if (!(e.deltaX <= 0)) {
            for (
              var n = e.target,
                r = o(
                  "WAWebWindowsHybridFlowHelpers",
                ).unsafeCastDocumentWheelEventTargetToElement(n, t),
                a = !1,
                i = 0;
              r && r !== document.body && i < 3;
            ) {
              var l = self.getComputedStyle(r);
              if (
                (l.overflowX === "auto" || l.overflowX === "scroll") &&
                r.scrollWidth > r.clientWidth
              ) {
                a = !0;
                break;
              }
              var s = r.parentElement;
              if (!s) break;
              ((r = s), i++);
            }
            a || t.interruptManipulations();
          }
        }, 500)),
          (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.interruptManipulations = function () {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.touchpad_fix.send.interrupt_manipulations",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "touchpadFix",
                method: "interruptManipulations",
                type: "sync",
              },
              function () {
                return e.$1.interruptManipulations();
              },
            )
          );
        }),
        (t.init = function () {
          document.addEventListener("wheel", this.$2, { passive: !1 });
        }),
        e
      );
    })();
    l.WindowsHybridBridgeTouchpadFix = e;
  },
  98,
);
