__d(
  "WAWebWindowsHybridBridgeTouchpadFix",
  ["WAWebDebounce", "WAWebODS", "WAWebWindowsHybridBridgeTrace"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.$2 = r("WAWebDebounce")(function (e) {
          if (!(e.deltaX <= 0)) {
            var n = e.target;
            if (n instanceof Element) {
              for (
                var r = n, o = !1, a = 0;
                r && r !== document.body && a < 3;
              ) {
                var i = self.getComputedStyle(r);
                if (
                  (i.overflowX === "auto" || i.overflowX === "scroll") &&
                  r.scrollWidth > r.clientWidth
                ) {
                  o = !0;
                  break;
                }
                var l = r.parentElement;
                if (!l) break;
                ((r = l), a++);
              }
              o || t.interruptManipulations();
            }
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
                type: "async",
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
