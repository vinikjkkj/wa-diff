__d(
  "react-gui-0.2.1",
  ["react-0.0.0"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("react-0.0.0"),
      l = {},
      s = { exports: l };
    function u() {
      ((l.__esModule = !0), (l.default = e));
      function e() {
        return !!(
          typeof window != "undefined" &&
          window.document &&
          window.document.createElement
        );
      }
      s.exports = l.default;
    }
    var c = !1;
    function d() {
      return (c || ((c = !0), u()), s.exports);
    }
    var m = {},
      p = { exports: m };
    function _() {
      ((m.__esModule = !0), (m.default = r));
      var e = t(d());
      function t(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var n = (0, e.default)();
      function r() {
        var e = !1;
        if (n)
          try {
            var t = document.createElement("div"),
              r = {};
            (Object.defineProperty(r, "preventScroll", {
              get: function () {
                return ((e = !0), !1);
              },
            }),
              t.focus(r));
          } catch (e) {}
        return e;
      }
      p.exports = m.default;
    }
    var f = !1;
    function g() {
      return (f || ((f = !0), _()), p.exports);
    }
    var h = {},
      y = { exports: h };
    function C() {
      ((h.__esModule = !0), (h.default = a));
      var e = t(g());
      function t(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var n = (0, e.default)();
      function r(e) {
        for (
          var t = [], n = document.documentElement, r = e.parentElement;
          r != null && r !== n;
        )
          ((r.offsetHeight < r.scrollHeight || r.offsetWidth < r.scrollWidth) &&
            t.push([r, r.scrollTop, r.scrollLeft]),
            (r = r.parentElement));
        return (n != null && t.push([n, n.scrollTop, n.scrollLeft]), t);
      }
      function o(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
            r = n[0],
            o = n[1],
            a = n[2];
          ((r.scrollTop = o), (r.scrollLeft = a));
        }
      }
      function a(e, t) {
        if (n) e.focus(t);
        else {
          var a;
          (t != null && t.preventScroll === !0 && (a = r(e)),
            e.focus(),
            a != null && o(a));
        }
      }
      y.exports = h.default;
    }
    var b = !1;
    function v() {
      return (b || ((b = !0), C()), y.exports);
    }
    var S = {},
      R = { exports: S };
    function L() {
      ((S.__esModule = !0), (S.default = r));
      var e = t(d());
      function t(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var n = (0, e.default)();
      function r() {
        var e = !1;
        if (n)
          try {
            var t = {};
            (Object.defineProperty(t, "passive", {
              get: function () {
                return ((e = !0), !1);
              },
            }),
              window.addEventListener("test", null, t),
              window.removeEventListener("test", null, t));
          } catch (e) {}
        return e;
      }
      R.exports = S.default;
    }
    var E = !1;
    function k() {
      return (E || ((E = !0), L()), R.exports);
    }
    var I = {},
      T = { exports: I };
    function D() {
      ((I.__esModule = !0), (I.addEvent = i), (I.removeEvent = l));
      var e = t(k());
      function t(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var n = (0, e.default)(),
        r = function () {},
        o = { touchstart: !0, touchmove: !0, scroll: !0 };
      function a(e, t) {
        if (t != null) {
          var r = t.capture,
            a = t.passive;
          return n
            ? a == null || o[e] === !0
              ? { capture: r, passive: !0 }
              : t
            : !!r;
        }
        return !1;
      }
      function i(e, t, n, o) {
        var i = a(t, o);
        if (typeof n == "function") {
          var l = e;
          return (
            l.addEventListener(t, n, i),
            function () {
              l != null && l.removeEventListener(t, n, i);
            }
          );
        } else return r;
      }
      function l(e, t, n, r) {
        var o = a(t, r);
        if (typeof n == "function") {
          var i = e;
          i.removeEventListener(t, n, o);
        }
      }
    }
    var x = !1;
    function $() {
      return (x || ((x = !0), D()), T.exports);
    }
    var P = {},
      N = { exports: P };
    function M() {
      ((P.__esModule = !0), (P.default = void 0));
      var e = function () {
          return typeof window != "undefined" && window.PointerEvent != null;
        },
        t = e;
      ((P.default = t), (N.exports = P.default));
    }
    var w = !1;
    function A() {
      return (w || ((w = !0), M()), N.exports);
    }
    var F = {},
      O = { exports: F };
    function B() {
      ((F.__esModule = !0),
        (F.getActiveModality = U),
        (F.getModality = V),
        (F.addModalityListener = H),
        (F.testOnly_resetActiveModality = G));
      var e = $(),
        t = r(d()),
        n = r(A());
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var o = "keyboard",
        a = "keyboard",
        i,
        l,
        s = !1,
        u = new Set(),
        c = "keyboard",
        m = "mouse",
        p = "touch",
        _ = "blur",
        f = "contextmenu",
        g = "focus",
        h = "keydown",
        y = "mousedown",
        C = "mousemove",
        b = "mouseover",
        v = "mouseup",
        S = "pointerdown",
        R = "pointermove",
        L = "pointerover",
        E = "scroll",
        k = "selectionchange",
        I = "touchcancel",
        T = "touchmove",
        D = "touchstart",
        x = "visibilitychange",
        P = { capture: !0, passive: !0 };
      function N() {
        (i != null || l != null) &&
          (i != null && ((a = i), (i = null)),
          l != null && ((o = l), (l = null)),
          q());
      }
      function M() {
        ((i = a), (l = o), (o = c), (a = c), q(), (s = !1));
      }
      function w() {
        N();
      }
      function O(e) {
        e.metaKey ||
          e.altKey ||
          e.ctrlKey ||
          (a !== c && ((a = c), (o = c), q()));
      }
      function B() {
        document.visibilityState !== "hidden" && N();
      }
      function W(e) {
        var t = e.type;
        if ((0, n.default)()) {
          if (t === S) {
            o !== e.pointerType &&
              ((a = e.pointerType), (o = e.pointerType), q());
            return;
          }
          if (t === R || t === L) {
            a !== e.pointerType && ((a = e.pointerType), q());
            return;
          }
        } else {
          if (
            (s ||
              (t === y && o !== m && ((a = m), (o = m), q()),
              (t === C || t === b) && a !== m && ((a = m), q())),
            t === D)
          ) {
            ((s = !0),
              e.touches && e.touches.length > 1 && (s = !1),
              o !== p && ((a = p), (o = p), q()));
            return;
          }
          (t === f || t === v || t === k || t === E || t === I || t === T) &&
            (s = !1);
        }
      }
      (0, t.default)() &&
        ((0, e.addEvent)(window, _, M),
        (0, e.addEvent)(window, g, w),
        (0, e.addEvent)(document, h, O, P),
        (0, e.addEvent)(document, x, B, P),
        [S, R, L, f, y, C, b, v, E, k, I, T, D].forEach(function (t) {
          (0, e.addEvent)(document, t, W, P);
        }));
      function q() {
        var e = { activeModality: o, modality: a };
        u.forEach(function (t) {
          t(e);
        });
      }
      function U() {
        return o;
      }
      function V() {
        return a;
      }
      function H(e) {
        return (
          u.add(e),
          function () {
            u.delete(e);
          }
        );
      }
      function G() {
        ((s = !1), (o = c), (a = c));
      }
    }
    var W = !1;
    function q() {
      return (W || ((W = !0), B()), O.exports);
    }
    var U = {},
      V = { exports: U };
    function H() {
      ((U.__esModule = !0),
        (U.blur = o),
        (U.clear = a),
        (U.focus = i),
        (U.getLayoutRect = l));
      var e = n(v()),
        t = q();
      ((U.getActiveModality = t.getActiveModality),
        (U.getModality = t.getModality));
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var r = { A: !0, BUTTON: !0, INPUT: !0, SELECT: !0, TEXTAREA: !0 };
      function o(e) {
        if (e != null)
          try {
            e.blur();
          } catch (e) {}
      }
      function a(e) {
        e != null && typeof e.value == "string" && (e.value = "");
      }
      function i(t, n) {
        if (t != null)
          try {
            var o = t.nodeName;
            (r[o] == null &&
              t.getAttribute("tabIndex") == null &&
              t.setAttribute("tabIndex", "-1"),
              (0, e.default)(t, n));
          } catch (e) {}
      }
      function l(e, t) {
        if (e != null) return e.getBoundingClientRect();
      }
    }
    var G = !1;
    function z() {
      return (G || ((G = !0), H()), V.exports);
    }
    var j = {},
      K = { exports: j };
    function Q() {
      ((j.__esModule = !0), (j.useRefCallback = n));
      var t = e();
      function n(e) {
        var n = (0, t.useRef)(void 0);
        return (0, t.useCallback)(
          function (t) {
            (n.current && (n.current(), (n.current = void 0)),
              t != null && (n.current = e(t)));
          },
          [e],
        );
      }
    }
    var X = !1;
    function Y() {
      return (X || ((X = !0), Q()), K.exports);
    }
    var J = {},
      Z = { exports: J };
    function ee() {
      ((J.__esModule = !0), (J.useFocus = i));
      var t = e(),
        n = $(),
        r = Y(),
        o = { passive: !0 },
        a = { capture: !0, passive: !0 };
      function i(e) {
        var i = e.disabled,
          l = e.onBlur,
          s = e.onBlurCapture,
          u = e.onFocus,
          c = e.onFocusCapture,
          d = e.onFocusChange,
          m = (0, t.useCallback)(
            function (e) {
              function t(e) {
                i || (l != null && l(e), d != null && d(!1, e));
              }
              function r(e) {
                i || (u != null && u(e), d != null && d(!0, e));
              }
              var m = [
                (0, n.addEvent)(e, "blur", t, o),
                (0, n.addEvent)(e, "focus", r, o),
                (0, n.addEvent)(e, "blur", i ? null : s, a),
                (0, n.addEvent)(e, "focus", i ? null : c, a),
              ];
              return function () {
                m.forEach(function (e) {
                  e();
                });
              };
            },
            [i, l, s, u, c, d],
          );
        return (0, r.useRefCallback)(m);
      }
    }
    var te = !1;
    function ne() {
      return (te || ((te = !0), ee()), Z.exports);
    }
    var re = {},
      oe = { exports: re };
    function ae() {
      oe.exports = ne();
    }
    var ie = !1;
    function le() {
      return (ie || ((ie = !0), ae()), oe.exports);
    }
    var se = {},
      ue = { exports: se };
    function ce() {
      ((se.__esModule = !0), (se.default = void 0));
      var t = e(),
        n = r(d());
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var o = (0, n.default)() ? t.useLayoutEffect : t.useEffect,
        a = o;
      ((se.default = a), (ue.exports = se.default));
    }
    var de = !1;
    function me() {
      return (de || ((de = !0), ce()), ue.exports);
    }
    var pe = {},
      _e = { exports: pe };
    function fe() {
      ((pe.__esModule = !0), (pe.useModality = a));
      var t = o(e()),
        n = q(),
        r = o(me());
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a() {
        var e = t.default.useState({
            activeModality: (0, n.getActiveModality)(),
            modality: (0, n.getModality)(),
          }),
          o = e[0],
          a = e[1];
        return (
          (0, r.default)(function () {
            var e = (0, n.addModalityListener)(function (e) {
              a(e);
            });
            return e;
          }, []),
          o
        );
      }
    }
    var ge = !1;
    function he() {
      return (ge || ((ge = !0), fe()), _e.exports);
    }
    var ye = {},
      Ce = { exports: ye };
    function be() {
      ((ye.__esModule = !0), (ye.useFocusVisibility = t));
      var e = he();
      function t() {
        var t = (0, e.useModality)(),
          n = t.activeModality;
        return n === "keyboard";
      }
    }
    var ve = !1;
    function Se() {
      return (ve || ((ve = !0), be()), Ce.exports);
    }
    var Re = {},
      Le = { exports: Re };
    function Ee() {
      Le.exports = Se();
    }
    var ke = !1;
    function Ie() {
      return (ke || ((ke = !0), Ee()), Le.exports);
    }
    function Te(e) {
      switch (e) {
        case void 0:
          return z();
        case "/use-focus":
          return le();
        case "/use-focus-visibility":
          return Ie();
      }
    }
    a.exports = Te;
  },
  null,
);
