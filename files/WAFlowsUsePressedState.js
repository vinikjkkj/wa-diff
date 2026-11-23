__d(
  "WAFlowsUsePressedState",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef,
      m = s.useState,
      p = function () {
        var e,
          t = navigator;
        return (
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          ((e = t.msMaxTouchPoints) != null ? e : 0) > 0
        );
      };
    function _(e, t, n, r) {
      r === void 0 && (r = !1);
      var o = m(!1),
        a = o[0],
        i = o[1],
        l = d({ lastPressedTime: 0 }),
        s = u(
          function () {
            a !== !0 && (i(!0), (l.current.lastPressedTime = Date.now()));
          },
          [a],
        ),
        _ = u(
          function () {
            if (a === !0) {
              var e = Date.now() - l.current.lastPressedTime;
              e > t
                ? i(!1)
                : window.setTimeout(function () {
                    i(!1);
                  }, t - e);
            }
          },
          [a, t],
        );
      return (
        c(
          function () {
            if (e.platform === "android") {
              var t = n.current,
                r = {
                  setPress: ["mousedown"],
                  unsetPress: ["mouseup", "mouseleave"],
                },
                o = {
                  setPress: ["touchstart"],
                  unsetPress: ["touchend", "touchmove", "touchcancel"],
                },
                a = p() ? o : r;
              return (
                a.setPress.forEach(function (e) {
                  t == null || t.addEventListener(e, s);
                }),
                a.unsetPress.forEach(function (e) {
                  t == null || t.addEventListener(e, _);
                }),
                function () {
                  (a.setPress.forEach(function (e) {
                    t == null || t.removeEventListener(e, s);
                  }),
                    a.unsetPress.forEach(function (e) {
                      t == null || t.removeEventListener(e, _);
                    }));
                }
              );
            }
          },
          [n, e.platform, s, _],
        ),
        c(
          function () {
            r && _();
          },
          [r, _],
        ),
        a
      );
    }
    l.usePressedState = _;
  },
  98,
);
