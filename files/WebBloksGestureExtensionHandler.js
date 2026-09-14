__d(
  "WebBloksGestureExtensionHandler",
  [
    "WebBloksExtentionUtils",
    "WebBloksMinificationUtils",
    "WebBloksModel",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 500,
      u = 250,
      c = (e = o("WebBloksModel")).defineWebBloksAttributeKey("$"),
      d = e.defineWebBloksAttributeKey("-"),
      m = e.defineWebBloksAttributeKey("A"),
      p = e.defineWebBloksAttributeKey("#"),
      _ = e.defineWebBloksAttributeKey("5"),
      f = e.defineWebBloksAttributeKey("="),
      g = e.defineWebBloksAttributeKey("+"),
      h = e.defineWebBloksAttributeKey("6"),
      y = e.defineWebBloksAttributeKey(">"),
      C = e.defineWebBloksAttributeKey("1"),
      b = e.defineWebBloksAttributeKey("2"),
      v = {
        getStyles: function (t) {
          return { pointerEvents: "auto" };
        },
        onMount: function (t, n, r) {
          var e,
            a = n.current,
            i = (e = a.uiMutableContainer.domNode) == null ? void 0 : e.current,
            l =
              r.bloksContext.objectSet.environment.loadedMinificationMaps
                .unminificationMap;
          function v() {
            var e = n.current;
            return o("WebBloksUtils").isBloksModelEnabled(
              e,
              o(
                "WebBloksMinificationUtils",
              ).getOptionalMinifiedWebBloksAttributeKey(
                String(e.styleId),
                "enabled",
                l,
              ),
            );
          }
          if (i == null) return;
          var S = t.getExpression(g),
            R = t.getExpression(h),
            L = t.getExpression(y),
            E = t.getExpression(p),
            k = t.getExpression(_),
            I = t.getExpression(f),
            T = t.getExpression(c),
            D = t.getExpression(d),
            x = t.getExpression(m),
            $ = t.getExpression(C);
          function P(e, t) {
            $ != null &&
              r.executeCatch(n.current, $, [n.current, r.bloksContext, e, t]);
          }
          function N(e) {
            P(e.clientX, e.clientY);
          }
          function M(e) {
            P(e.touches[0].clientX, e.touches[0].clientY);
          }
          $ != null &&
            (i.addEventListener("mousedown", N),
            i.addEventListener("touchstart", M));
          var w = t.getExpression(b);
          function A(e, t) {
            w != null &&
              r.executeCatch(n.current, w, [n.current, r.bloksContext, e, t]);
          }
          function F(e) {
            A(e.clientX, e.clientY);
          }
          function O(e) {
            A(e.touches[0].clientX, e.touches[0].clientY);
          }
          w != null &&
            (i.addEventListener("mouseup", F),
            i.addEventListener("touchend", O));
          var B = a.uiMutableContainer.gestures || {
            longPressTimeout: null,
            doublePressTimeout: null,
            startX: 0,
            startY: 0,
            preventTap: !1,
          };
          a.uiMutableContainer.gestures = B;
          function W() {
            (window.clearTimeout(B.longPressTimeout),
              (B.longPressTimeout = null),
              o("WebBloksExtentionUtils").enableLongPressSideEffectsInSafari());
          }
          function q(e, t) {
            if (
              B.longPressTimeout === null &&
              (o(
                "WebBloksExtentionUtils",
              ).disableLongPressSideEffectsInSafari(),
              i != null)
            ) {
              var a = i.getBoundingClientRect();
              ((B.startX = a.left),
                (B.startY = a.top),
                (B.preventTap = !1),
                (B.longPressTimeout = window.setTimeout(function () {
                  ((B.preventTap = !0),
                    (B.longPressTimeout = null),
                    v() &&
                      (E != null &&
                        r.executeCatch(n.current, E, [
                          n.current,
                          r.bloksContext,
                        ]),
                      k != null &&
                        r.executeCatch(n.current, k, [
                          n.current,
                          r.bloksContext,
                          e,
                          t,
                        ]),
                      I != null &&
                        r.executeCatch(n.current, I, [
                          n.current,
                          r.bloksContext,
                          r,
                          "detected",
                          e,
                          t,
                        ])),
                    o(
                      "WebBloksExtentionUtils",
                    ).enableLongPressSideEffectsInSafari());
                }, s)));
            }
          }
          function U(e) {
            q(e.touches[0].clientX, e.touches[0].clientY);
          }
          function V(e) {
            q(e.clientX, e.clientY);
          }
          function H(e) {
            var t = e.targetTouches[0];
            i != null &&
              o("WebBloksUtils").shouldCancelTouchEvent(
                i,
                B.startX,
                B.startY,
                t,
              ) &&
              W();
          }
          function G() {
            W();
          }
          function z(e) {
            (B.preventTap && e.preventDefault(), W());
          }
          function j() {
            W();
          }
          (E != null || k != null || I != null) &&
            (i.addEventListener(
              "touchstart",
              U,
              o("WebBloksUtils").passiveTouchEventOptions,
            ),
            i.addEventListener(
              "touchmove",
              H,
              o("WebBloksUtils").passiveTouchEventOptions,
            ),
            i.addEventListener("touchend", z),
            i.addEventListener("touchcancel", z),
            i.addEventListener("mousedown", V),
            i.addEventListener("mouseleave", G),
            i.addEventListener("mouseup", j));
          function K(e) {
            var t;
            (e.stopPropagation(),
              ((t = n.current.uiMutableContainer) == null ||
              (t = t.gestures) == null
                ? void 0
                : t.preventTap) !== !0 &&
                v() &&
                ((S != null || R != null || L != null) &&
                  T == null &&
                  D == null &&
                  x == null &&
                  (S != null &&
                    r.executeCatch(n.current, S, [n.current, r.bloksContext]),
                  R != null &&
                    r.executeCatch(n.current, R, [
                      n.current,
                      r.bloksContext,
                      e.clientX,
                      e.clientY,
                    ]),
                  L != null &&
                    r.executeCatch(n.current, L, [
                      n.current,
                      r.bloksContext,
                      r,
                      e.clientX,
                      e.clientY,
                    ])),
                (T != null || D != null || x != null) &&
                  (S != null || R != null || L != null) &&
                  e.detail === 1 &&
                  (window.clearTimeout(B.doublePressTimeout),
                  (B.doublePressTimeout = window.setTimeout(function () {
                    (S != null &&
                      r.executeCatch(n.current, S, [n.current, r.bloksContext]),
                      R != null &&
                        r.executeCatch(n.current, R, [
                          n.current,
                          r.bloksContext,
                          e.clientX,
                          e.clientY,
                        ]),
                      L != null &&
                        r.executeCatch(n.current, L, [
                          n.current,
                          r.bloksContext,
                          r,
                          e.clientX,
                          e.clientY,
                        ]));
                  }, u)))));
          }
          (S != null ||
            R != null ||
            L != null ||
            T != null ||
            D != null ||
            x == null) &&
            i.addEventListener("click", K);
          function Q(e) {
            (window.clearTimeout(B.doublePressTimeout),
              (B.doublePressTimeout = null),
              T != null &&
                r.executeCatch(n.current, T, [n.current, r.bloksContext]),
              D != null &&
                r.executeCatch(n.current, D, [
                  n.current,
                  r.bloksContext,
                  e.clientX,
                  e.clientY,
                ]),
              x != null &&
                r.executeCatch(n.current, x, [
                  n.current,
                  r.bloksContext,
                  r,
                  e.clientX,
                  e.clientY,
                ]));
          }
          return (
            (T != null || D != null || x != null) &&
              i.addEventListener("dblclick", Q),
            function () {
              (i.removeEventListener("touchstart", U),
                i.removeEventListener("touchmove", H),
                i.removeEventListener("touchend", z),
                i.removeEventListener("touchcancel", z),
                i.removeEventListener("mousedown", V),
                i.removeEventListener("mouseleave", G),
                i.removeEventListener("mouseup", j),
                i.removeEventListener("click", K),
                i.removeEventListener("dblclick", Q),
                i.removeEventListener("mousedown", N),
                i.removeEventListener("touchstart", M),
                i.removeEventListener("mouseup", F),
                i.removeEventListener("touchend", O));
            }
          );
        },
      },
      S = v;
    l.default = S;
  },
  98,
);
