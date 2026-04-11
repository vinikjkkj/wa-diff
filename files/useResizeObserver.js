__d(
  "useResizeObserver",
  [
    "DOMRectReadOnly",
    "FBLogger",
    "getErrorSafe",
    "gkx",
    "react",
    "react-compiler-runtime",
    "resize-observer-polyfill-deprecated",
    "uniqueID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useLayoutEffect,
      d = s.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n = d(null),
        r = d(e),
        a,
        i;
      (t[0] !== e
        ? ((a = function () {
            r.current = e;
          }),
          (i = [e]),
          (t[0] = e),
          (t[1] = a),
          (t[2] = i))
        : ((a = t[1]), (i = t[2])),
        c(a, i));
      var l;
      return (
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = function (t) {
              var e = function (t, n, o) {
                  r.current && r.current(t, n, o);
                },
                o = t == null ? null : h(t, e);
              (n.current && n.current(), (n.current = o));
            }),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    var p = null,
      _ = new Map();
    function f() {
      return (
        p == null && (p = new (r("resize-observer-polyfill-deprecated"))(g)),
        p
      );
    }
    function g(e) {
      var t = new Map(),
        n = new Map(),
        o = new Map();
      for (var a of e) {
        var i = a.contentRect;
        if (r("gkx")("20942")) {
          var l = t.get(a.target);
          if (l == null) {
            var s = E(a.target);
            (t.set(a.target, s), (i = s));
          } else i = l;
        }
        n.set(a.target, i);
        var u = {
          target: a.target,
          contentRect: a.contentRect,
          borderBoxSize: a.borderBoxSize,
          contentBoxSize: a.contentBoxSize,
          devicePixelContentBoxSize: a.devicePixelContentBoxSize,
        };
        o.set(a.target, u);
      }
      var c = new Set(_.keys());
      for (var d of n) {
        var m = d[0],
          p = d[1],
          f = _.get(m);
        if (f != null)
          for (var g of f) {
            var h = g[1];
            try {
              h(p, m, o);
            } catch (e) {
              r("FBLogger")("useResizeObserver").catching(r("getErrorSafe")(e));
            }
          }
        else
          c.has(m) ||
            r("FBLogger")("useResizeObserver").mustfix(
              "ResizeObserver observed resizing of an element that it should not be observing",
            );
      }
    }
    function h(e, t) {
      var n,
        o = r("uniqueID")(),
        a = (n = _.get(e)) != null ? n : new Map();
      return (a.set(o, t), _.set(e, a), f().observe(e), y(e, o));
    }
    function y(e, t) {
      return function () {
        var n = _.get(e);
        n != null &&
          (n.delete(t), n.size === 0 && (f().unobserve(e), _.delete(e)));
      };
    }
    function C(e) {
      return parseFloat(e) || 0;
    }
    function b(e) {
      var t, n;
      return (t =
        e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) !=
        null
        ? t
        : window;
    }
    var v = r("DOMRectReadOnly").fromRect();
    function S(e) {
      return {
        top: C(e.paddingTop),
        right: C(e.paddingRight),
        bottom: C(e.paddingBottom),
        left: C(e.paddingLeft),
      };
    }
    function R(e) {
      return {
        top: C(e.borderTopWidth),
        right: C(e.borderRightWidth),
        bottom: C(e.borderBottomWidth),
        left: C(e.borderLeftWidth),
      };
    }
    function L(e) {
      for (
        var t = R(e),
          n = arguments.length,
          r = new Array(n > 1 ? n - 1 : 0),
          o = 1;
        o < n;
        o++
      )
        r[o - 1] = arguments[o];
      return r.reduce(function (e, n) {
        return e + C(t[n]);
      }, 0);
    }
    function E(e) {
      var t = e.clientWidth,
        n = e.clientHeight;
      if (!t && !n) return v;
      var o = b(e).getComputedStyle(e),
        a = S(o),
        i = a.left + a.right,
        l = a.top + a.bottom,
        s = C(o.width),
        u = C(o.height);
      return (
        o.boxSizing === "border-box" &&
          (Math.round(s + i) !== t && (s -= L(o, "left", "right") + i),
          Math.round(u + l) !== n && (u -= L(o, "top", "bottom") + l)),
        r("DOMRectReadOnly").fromRect({
          x: a.left,
          y: a.top,
          width: s,
          height: u,
        })
      );
    }
    l.default = m;
  },
  98,
);
