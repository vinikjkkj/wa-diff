__d(
  "WebBloksGestureExtensionHandler",
  ["WebBloksExtentionUtils", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 500,
      s = 250,
      u = "$",
      c = "-",
      d = "A",
      m = "#",
      p = "5",
      _ = "=",
      f = "+",
      g = "6",
      h = ">",
      y = "1",
      C = "2",
      b = {
        getStyles: function (t) {
          return { pointerEvents: "auto" };
        },
        onMount: function (n, r, a) {
          var t,
            i = r.current,
            l = (t = i.uiMutableContainer.domNode) == null ? void 0 : t.current;
          if (l == null) return;
          var b = n.getExpression(f),
            v = n.getExpression(g),
            S = n.getExpression(h),
            R = n.getExpression(m),
            L = n.getExpression(p),
            E = n.getExpression(_),
            k = n.getExpression(u),
            I = n.getExpression(c),
            T = n.getExpression(d),
            D = n.getExpression(y);
          function x(e, t) {
            D != null &&
              a.executeCatch(r.current, D, [r.current, a.bloksContext, e, t]);
          }
          function $(e) {
            x(e.clientX, e.clientY);
          }
          function P(e) {
            x(e.touches[0].clientX, e.touches[0].clientY);
          }
          D != null &&
            (l.addEventListener("mousedown", $),
            l.addEventListener("touchstart", P));
          var N = n.getExpression(C);
          function M(e, t) {
            N != null &&
              a.executeCatch(r.current, N, [r.current, a.bloksContext, e, t]);
          }
          function w(e) {
            M(e.clientX, e.clientY);
          }
          function A(e) {
            M(e.touches[0].clientX, e.touches[0].clientY);
          }
          N != null &&
            (l.addEventListener("mouseup", w),
            l.addEventListener("touchend", A));
          var F = i.uiMutableContainer.gestures || {
            longPressTimeout: null,
            doublePressTimeout: null,
            startX: 0,
            startY: 0,
            preventTap: !1,
          };
          i.uiMutableContainer.gestures = F;
          function O() {
            (window.clearTimeout(F.longPressTimeout),
              (F.longPressTimeout = null),
              o("WebBloksExtentionUtils").enableLongPressSideEffectsInSafari());
          }
          function B(t, n) {
            if (
              F.longPressTimeout === null &&
              (o(
                "WebBloksExtentionUtils",
              ).disableLongPressSideEffectsInSafari(),
              l != null)
            ) {
              var i = l.getBoundingClientRect();
              ((F.startX = i.left),
                (F.startY = i.top),
                (F.preventTap = !1),
                (F.longPressTimeout = window.setTimeout(function () {
                  ((F.preventTap = !0),
                    (F.longPressTimeout = null),
                    o("WebBloksUtils").isBloksModelEnabled(r.current) &&
                      (R != null &&
                        a.executeCatch(r.current, R, [
                          r.current,
                          a.bloksContext,
                        ]),
                      L != null &&
                        a.executeCatch(r.current, L, [
                          r.current,
                          a.bloksContext,
                          t,
                          n,
                        ]),
                      E != null &&
                        a.executeCatch(r.current, E, [
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
          function W(e) {
            B(e.touches[0].clientX, e.touches[0].clientY);
          }
          function q(e) {
            B(e.clientX, e.clientY);
          }
          function U(e) {
            var t = e.targetTouches[0];
            l != null &&
              o("WebBloksUtils").shouldCancelTouchEvent(
                l,
                F.startX,
                F.startY,
                t,
              ) &&
              O();
          }
          function V() {
            O();
          }
          function H(e) {
            (F.preventTap && e.preventDefault(), O());
          }
          function G() {
            O();
          }
          (R != null || L != null || E != null) &&
            (l.addEventListener(
              "touchstart",
              W,
              o("WebBloksUtils").passiveTouchEventOptions,
            ),
            l.addEventListener(
              "touchmove",
              U,
              o("WebBloksUtils").passiveTouchEventOptions,
            ),
            l.addEventListener("touchend", H),
            l.addEventListener("touchcancel", H),
            l.addEventListener("mousedown", q),
            l.addEventListener("mouseleave", V),
            l.addEventListener("mouseup", G));
          function z(e) {
            var t;
            (e.stopPropagation(),
              ((t = r.current.uiMutableContainer) == null ||
              (t = t.gestures) == null
                ? void 0
                : t.preventTap) !== !0 &&
                o("WebBloksUtils").isBloksModelEnabled(r.current) &&
                ((b != null || v != null || S != null) &&
                  k == null &&
                  I == null &&
                  T == null &&
                  (b != null &&
                    a.executeCatch(r.current, b, [r.current, a.bloksContext]),
                  v != null &&
                    a.executeCatch(r.current, v, [
                      r.current,
                      a.bloksContext,
                      e.clientX,
                      e.clientY,
                    ]),
                  S != null &&
                    a.executeCatch(r.current, S, [
                      r.current,
                      a.bloksContext,
                      a,
                      e.clientX,
                      e.clientY,
                    ])),
                (k != null || I != null || T != null) &&
                  (b != null || v != null || S != null) &&
                  e.detail === 1 &&
                  (window.clearTimeout(F.doublePressTimeout),
                  (F.doublePressTimeout = window.setTimeout(function () {
                    (b != null &&
                      a.executeCatch(r.current, b, [r.current, a.bloksContext]),
                      v != null &&
                        a.executeCatch(r.current, v, [
                          r.current,
                          a.bloksContext,
                          e.clientX,
                          e.clientY,
                        ]),
                      S != null &&
                        a.executeCatch(r.current, S, [
                          r.current,
                          a.bloksContext,
                          a,
                          e.clientX,
                          e.clientY,
                        ]));
                  }, s)))));
          }
          (b != null ||
            v != null ||
            S != null ||
            k != null ||
            I != null ||
            T == null) &&
            l.addEventListener("click", z);
          function j(e) {
            (window.clearTimeout(F.doublePressTimeout),
              (F.doublePressTimeout = null),
              k != null &&
                a.executeCatch(r.current, k, [r.current, a.bloksContext]),
              I != null &&
                a.executeCatch(r.current, I, [
                  r.current,
                  a.bloksContext,
                  e.clientX,
                  e.clientY,
                ]),
              T != null &&
                a.executeCatch(r.current, T, [
                  r.current,
                  a.bloksContext,
                  a,
                  e.clientX,
                  e.clientY,
                ]));
          }
          return (
            (k != null || I != null || T != null) &&
              l.addEventListener("dblclick", j),
            function () {
              (l.removeEventListener("touchstart", W),
                l.removeEventListener("touchmove", U),
                l.removeEventListener("touchend", H),
                l.removeEventListener("touchcancel", H),
                l.removeEventListener("mousedown", q),
                l.removeEventListener("mouseleave", V),
                l.removeEventListener("mouseup", G),
                l.removeEventListener("click", z),
                l.removeEventListener("dblclick", j),
                l.removeEventListener("mousedown", $),
                l.removeEventListener("touchstart", P),
                l.removeEventListener("mouseup", w),
                l.removeEventListener("touchend", A));
            }
          );
        },
      },
      v = b;
    l.default = v;
  },
  98,
);
