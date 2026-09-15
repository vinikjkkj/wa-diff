__d(
  "WebBloksDragExtensionHandler",
  ["WebBloksModel", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 200,
      s = "ease-out",
      u = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      c = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      d = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      m = 4,
      p = { axis: "vertical", allowsPositive: !0, allowsNegative: !1 },
      _ = new Map([
        ["down", p],
        ["up", { axis: "vertical", allowsPositive: !1, allowsNegative: !0 }],
        [
          "vertical",
          { axis: "vertical", allowsPositive: !0, allowsNegative: !0 },
        ],
        [
          "right",
          { axis: "horizontal", allowsPositive: !0, allowsNegative: !1 },
        ],
        [
          "left",
          { axis: "horizontal", allowsPositive: !1, allowsNegative: !0 },
        ],
        [
          "horizontal",
          { axis: "horizontal", allowsPositive: !0, allowsNegative: !0 },
        ],
        ["both", { axis: "both", allowsPositive: !0, allowsNegative: !0 }],
      ]);
    function f(e) {
      return e.axis === "both"
        ? "none"
        : e.axis === "vertical"
          ? "pan-x pinch-zoom"
          : "pan-y pinch-zoom";
    }
    function g(e, t) {
      for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];
      return null;
    }
    function h(e) {
      var t, n;
      return (t = _.get((n = e.get(u)) != null ? n : "")) != null ? t : p;
    }
    function y(e, t) {
      return e > 0
        ? t.allowsPositive
          ? e
          : 0
        : e < 0 && t.allowsNegative
          ? e
          : 0;
    }
    var C = {
        getStyles: function (t) {
          if (t.get(d) == null) return {};
          var e = h(t);
          return { pointerEvents: "auto", touchAction: f(e) };
        },
        onMount: function (n, r, a, i) {
          var t,
            l =
              (t = r.current.uiMutableContainer.domNode) == null
                ? void 0
                : t.current;
          if (l != null) {
            var u = n.getExpression(c),
              p = n.getExpression(d);
            if (p != null) {
              var _ = 0,
                f = 0,
                C = 0,
                b = 0,
                v = null,
                S = !1,
                R = 0,
                L = 0,
                E = null,
                k = function (t, n) {
                  return "translate(" + t + "px, " + n + "px)";
                },
                I = function (n, r) {
                  ((l.style.transition = r ? "transform " + e + "ms " + s : ""),
                    (l.style.transform = n));
                },
                T = function () {
                  ((l.style.transition = ""), (l.style.transform = ""));
                },
                D = function () {
                  E != null && (window.clearTimeout(E), (E = null));
                },
                x = function () {
                  (I(k(_, f), !0),
                    (E = window.setTimeout(function () {
                      ((E = null), _ === 0 && f === 0 && T());
                    }, e)));
                },
                $ = function () {
                  ((_ += C), (f += b), I(k(_, f), !1));
                },
                P = function (t) {
                  return o("WebBloksUtils").isBloksModelEnabled(r.current, i)
                    ? a.executeCatch(n, p, [C, b, t]) === !0
                    : !1;
                },
                N = function () {
                  ((v = null), S && (P(!1) ? $() : x()));
                },
                M = function (t) {
                  if (v == null) {
                    var e = t.changedTouches[0];
                    e != null &&
                      ((v = e.identifier),
                      (S = !1),
                      (C = 0),
                      (b = 0),
                      (R = e.clientX),
                      (L = e.clientY));
                  }
                },
                w = function (t) {
                  var e = v;
                  if (e != null) {
                    var l = g(t.touches, e);
                    if (l != null) {
                      var s = h(n),
                        c = l.clientY - L,
                        d = l.clientX - R;
                      if (!S) {
                        if (Math.abs(c) < m && Math.abs(d) < m) return;
                        if (s.axis !== "both") {
                          var p = s.axis === "vertical" ? c : d,
                            E = s.axis === "vertical" ? d : c;
                          if (
                            Math.abs(p) <= Math.abs(E) ||
                            (p > 0 && !s.allowsPositive) ||
                            (p < 0 && !s.allowsNegative)
                          ) {
                            v = null;
                            return;
                          }
                        }
                        ((S = !0),
                          D(),
                          u != null &&
                            o("WebBloksUtils").isBloksModelEnabled(
                              r.current,
                              i,
                            ) &&
                            a.executeCatch(n, u, []));
                      }
                      (t.preventDefault(),
                        (C = s.axis === "vertical" ? 0 : y(d, s)),
                        (b = s.axis === "horizontal" ? 0 : y(c, s)),
                        I(k(_ + C, f + b), !1));
                    }
                  }
                },
                A = function (t) {
                  var e = v;
                  e == null || g(t.changedTouches, e) == null || N();
                },
                F = function () {
                  var e = v != null && S;
                  ((v = null), e && (P(!0), x()));
                };
              return (
                l.addEventListener(
                  "touchstart",
                  M,
                  o("WebBloksUtils").passiveTouchEventOptions,
                ),
                l.addEventListener("touchmove", w, { passive: !1 }),
                l.addEventListener("touchend", A),
                l.addEventListener("touchcancel", F),
                function () {
                  (D(),
                    T(),
                    l.removeEventListener("touchstart", M),
                    l.removeEventListener("touchmove", w),
                    l.removeEventListener("touchend", A),
                    l.removeEventListener("touchcancel", F));
                }
              );
            }
          }
        },
      },
      b = C;
    l.default = b;
  },
  98,
);
