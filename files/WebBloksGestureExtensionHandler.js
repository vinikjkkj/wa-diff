__d(
  "WebBloksGestureExtensionHandler",
  ["WebBloksExtentionUtils", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 500,
      s = 250,
      u = {
        getStyles: function (t) {
          return { pointerEvents: "auto" };
        },
        onMount: function (n, r, a) {
          var t,
            i = r.current,
            l = (t = i.uiMutableContainer.domNode) == null ? void 0 : t.current;
          if (l == null) return;
          var u = n.getExpression("on_tap"),
            c = n.getExpression("on_tap_with_touch_point"),
            d = n.getExpression("on_tap_with_touch_point_v2"),
            m = n.getExpression("on_long_press"),
            p = n.getExpression("on_long_press_with_touch_point"),
            _ = n.getExpression("on_long_press_with_touch_point_v2"),
            f = n.getExpression("on_double_tap"),
            g = n.getExpression("on_double_tap_with_touch_point"),
            h = n.getExpression("on_double_tap_with_touch_point_v2"),
            y = n.getExpression("on_touch_down");
          function C(e, t) {
            y != null &&
              a.executeCatch(r.current, y, [r.current, a.bloksContext, e, t]);
          }
          function b(e) {
            C(e.clientX, e.clientY);
          }
          function v(e) {
            C(e.touches[0].clientX, e.touches[0].clientY);
          }
          y != null &&
            (l.addEventListener("mousedown", b),
            l.addEventListener("touchstart", v));
          var S = n.getExpression("on_touch_up");
          function R(e, t) {
            S != null &&
              a.executeCatch(r.current, S, [r.current, a.bloksContext, e, t]);
          }
          function L(e) {
            R(e.clientX, e.clientY);
          }
          function E(e) {
            R(e.touches[0].clientX, e.touches[0].clientY);
          }
          S != null &&
            (l.addEventListener("mouseup", L),
            l.addEventListener("touchend", E));
          var k = i.uiMutableContainer.gestures || {
            longPressTimeout: null,
            doublePressTimeout: null,
            startX: 0,
            startY: 0,
            preventTap: !1,
          };
          i.uiMutableContainer.gestures = k;
          function I() {
            (window.clearTimeout(k.longPressTimeout),
              (k.longPressTimeout = null),
              o("WebBloksExtentionUtils").enableLongPressSideEffectsInSafari());
          }
          function T(t, n) {
            if (
              k.longPressTimeout === null &&
              (o(
                "WebBloksExtentionUtils",
              ).disableLongPressSideEffectsInSafari(),
              l != null)
            ) {
              var i = l.getBoundingClientRect();
              ((k.startX = i.left),
                (k.startY = i.top),
                (k.preventTap = !1),
                (k.longPressTimeout = window.setTimeout(function () {
                  ((k.preventTap = !0),
                    (k.longPressTimeout = null),
                    o("WebBloksUtils").isBloksModelEnabled(r.current) &&
                      (m != null &&
                        a.executeCatch(r.current, m, [
                          r.current,
                          a.bloksContext,
                        ]),
                      p != null &&
                        a.executeCatch(r.current, p, [
                          r.current,
                          a.bloksContext,
                          t,
                          n,
                        ]),
                      _ != null &&
                        a.executeCatch(r.current, _, [
                          r.current,
                          a.bloksContext,
                          a,
                          "detected",
                          t,
                          n,
                        ])),
                    o(
                      "WebBloksExtentionUtils",
                    ).enableLongPressSideEffectsInSafari());
                }, e)));
            }
          }
          function D(e) {
            T(e.touches[0].clientX, e.touches[0].clientY);
          }
          function x(e) {
            T(e.clientX, e.clientY);
          }
          function $(e) {
            var t = e.targetTouches[0];
            l != null &&
              o("WebBloksUtils").shouldCancelTouchEvent(
                l,
                k.startX,
                k.startY,
                t,
              ) &&
              I();
          }
          function P() {
            I();
          }
          function N(e) {
            (k.preventTap && e.preventDefault(), I());
          }
          function M() {
            I();
          }
          (m != null || p != null || _ != null) &&
            (l.addEventListener(
              "touchstart",
              D,
              o("WebBloksUtils").passiveTouchEventOptions,
            ),
            l.addEventListener(
              "touchmove",
              $,
              o("WebBloksUtils").passiveTouchEventOptions,
            ),
            l.addEventListener("touchend", N),
            l.addEventListener("touchcancel", N),
            l.addEventListener("mousedown", x),
            l.addEventListener("mouseleave", P),
            l.addEventListener("mouseup", M));
          function w(e) {
            var t;
            (e.stopPropagation(),
              ((t = r.current.uiMutableContainer) == null ||
              (t = t.gestures) == null
                ? void 0
                : t.preventTap) !== !0 &&
                o("WebBloksUtils").isBloksModelEnabled(r.current) &&
                ((u != null || c != null || d != null) &&
                  f == null &&
                  g == null &&
                  h == null &&
                  (u != null &&
                    a.executeCatch(r.current, u, [r.current, a.bloksContext]),
                  c != null &&
                    a.executeCatch(r.current, c, [
                      r.current,
                      a.bloksContext,
                      e.clientX,
                      e.clientY,
                    ]),
                  d != null &&
                    a.executeCatch(r.current, d, [
                      r.current,
                      a.bloksContext,
                      a,
                      e.clientX,
                      e.clientY,
                    ])),
                (f != null || g != null || h != null) &&
                  (u != null || c != null || d != null) &&
                  e.detail === 1 &&
                  (window.clearTimeout(k.doublePressTimeout),
                  (k.doublePressTimeout = window.setTimeout(function () {
                    (u != null &&
                      a.executeCatch(r.current, u, [r.current, a.bloksContext]),
                      c != null &&
                        a.executeCatch(r.current, c, [
                          r.current,
                          a.bloksContext,
                          e.clientX,
                          e.clientY,
                        ]),
                      d != null &&
                        a.executeCatch(r.current, d, [
                          r.current,
                          a.bloksContext,
                          a,
                          e.clientX,
                          e.clientY,
                        ]));
                  }, s)))));
          }
          (u != null ||
            c != null ||
            d != null ||
            f != null ||
            g != null ||
            h == null) &&
            l.addEventListener("click", w);
          function A(e) {
            (window.clearTimeout(k.doublePressTimeout),
              (k.doublePressTimeout = null),
              f != null &&
                a.executeCatch(r.current, f, [r.current, a.bloksContext]),
              g != null &&
                a.executeCatch(r.current, g, [
                  r.current,
                  a.bloksContext,
                  e.clientX,
                  e.clientY,
                ]),
              h != null &&
                a.executeCatch(r.current, h, [
                  r.current,
                  a.bloksContext,
                  a,
                  e.clientX,
                  e.clientY,
                ]));
          }
          return (
            (f != null || g != null || h != null) &&
              l.addEventListener("dblclick", A),
            function () {
              (l.removeEventListener("touchstart", D),
                l.removeEventListener("touchmove", $),
                l.removeEventListener("touchend", N),
                l.removeEventListener("touchcancel", N),
                l.removeEventListener("mousedown", x),
                l.removeEventListener("mouseleave", P),
                l.removeEventListener("mouseup", M),
                l.removeEventListener("click", w),
                l.removeEventListener("dblclick", A),
                l.removeEventListener("mousedown", b),
                l.removeEventListener("touchstart", v),
                l.removeEventListener("mouseup", L),
                l.removeEventListener("touchend", E));
            }
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
