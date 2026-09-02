__d(
  "WebBloksDragExtensionHandler",
  ["WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 200,
      s = "ease-out",
      u = 4,
      c = { axis: "vertical", allowsPositive: !0, allowsNegative: !1 },
      d = new Map([
        ["down", c],
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
    function m(e) {
      return e.axis === "both"
        ? "none"
        : e.axis === "vertical"
          ? "pan-x pinch-zoom"
          : "pan-y pinch-zoom";
    }
    function p(e, t) {
      for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];
      return null;
    }
    function _(e) {
      var t, n;
      return (t = d.get((n = e.get("direction")) != null ? n : "")) != null
        ? t
        : c;
    }
    function f(e, t) {
      return e > 0
        ? t.allowsPositive
          ? e
          : 0
        : e < 0 && t.allowsNegative
          ? e
          : 0;
    }
    var g = {
        getStyles: function (t) {
          if (t.get("on_drag_end") == null) return {};
          var e = _(t);
          return { pointerEvents: "auto", touchAction: m(e) };
        },
        onMount: function (n, r, a) {
          var t,
            i =
              (t = r.current.uiMutableContainer.domNode) == null
                ? void 0
                : t.current;
          if (i != null) {
            var l = n.getExpression("on_drag_begin"),
              c = n.getExpression("on_drag_end");
            if (c != null) {
              var d = 0,
                m = 0,
                g = 0,
                h = 0,
                y = null,
                C = !1,
                b = 0,
                v = 0,
                S = null,
                R = function (t, n) {
                  return "translate(" + t + "px, " + n + "px)";
                },
                L = function (n, r) {
                  ((i.style.transition = r ? "transform " + e + "ms " + s : ""),
                    (i.style.transform = n));
                },
                E = function () {
                  ((i.style.transition = ""), (i.style.transform = ""));
                },
                k = function () {
                  S != null && (window.clearTimeout(S), (S = null));
                },
                I = function () {
                  (L(R(d, m), !0),
                    (S = window.setTimeout(function () {
                      ((S = null), d === 0 && m === 0 && E());
                    }, e)));
                },
                T = function () {
                  ((d += g), (m += h), L(R(d, m), !1));
                },
                D = function (t) {
                  return o("WebBloksUtils").isBloksModelEnabled(r.current)
                    ? a.executeCatch(n, c, [g, h, t]) === !0
                    : !1;
                },
                x = function () {
                  ((y = null), C && (D(!1) ? T() : I()));
                },
                $ = function (t) {
                  if (y == null) {
                    var e = t.changedTouches[0];
                    e != null &&
                      ((y = e.identifier),
                      (C = !1),
                      (g = 0),
                      (h = 0),
                      (b = e.clientX),
                      (v = e.clientY));
                  }
                },
                P = function (t) {
                  var e = y;
                  if (e != null) {
                    var i = p(t.touches, e);
                    if (i != null) {
                      var s = _(n),
                        c = i.clientY - v,
                        S = i.clientX - b;
                      if (!C) {
                        if (Math.abs(c) < u && Math.abs(S) < u) return;
                        if (s.axis !== "both") {
                          var E = s.axis === "vertical" ? c : S,
                            I = s.axis === "vertical" ? S : c;
                          if (
                            Math.abs(E) <= Math.abs(I) ||
                            (E > 0 && !s.allowsPositive) ||
                            (E < 0 && !s.allowsNegative)
                          ) {
                            y = null;
                            return;
                          }
                        }
                        ((C = !0),
                          k(),
                          l != null &&
                            o("WebBloksUtils").isBloksModelEnabled(r.current) &&
                            a.executeCatch(n, l, []));
                      }
                      (t.preventDefault(),
                        (g = s.axis === "vertical" ? 0 : f(S, s)),
                        (h = s.axis === "horizontal" ? 0 : f(c, s)),
                        L(R(d + g, m + h), !1));
                    }
                  }
                },
                N = function (t) {
                  var e = y;
                  e == null || p(t.changedTouches, e) == null || x();
                },
                M = function () {
                  var e = y != null && C;
                  ((y = null), e && (D(!0), I()));
                };
              return (
                i.addEventListener(
                  "touchstart",
                  $,
                  o("WebBloksUtils").passiveTouchEventOptions,
                ),
                i.addEventListener("touchmove", P, { passive: !1 }),
                i.addEventListener("touchend", N),
                i.addEventListener("touchcancel", M),
                function () {
                  (k(),
                    E(),
                    i.removeEventListener("touchstart", $),
                    i.removeEventListener("touchmove", P),
                    i.removeEventListener("touchend", N),
                    i.removeEventListener("touchcancel", M));
                }
              );
            }
          }
        },
      },
      h = g;
    l.default = h;
  },
  98,
);
