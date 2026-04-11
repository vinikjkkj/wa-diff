__d(
  "WebBloksUtils",
  [
    "Promise",
    "WebBloksBooleanUtils",
    "WebBloksConstants",
    "WebBloksDimensionUtils",
    "WebBloksErrors",
    "WebBloksSSRUtils",
    "WebBloksTheme",
    "WebBloksURLSearchParams",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["data", "layout", "status"],
      s,
      u,
      c = u || (u = o("react")),
      d = c.useEffect,
      m = c.useLayoutEffect,
      p = [];
    Object.freeze(p);
    var _ = p,
      f = Object.create(null);
    Object.freeze(f);
    var g = new Map();
    g.set = function () {
      throw new (o("WebBloksErrors").WebBloksError)("Map is immutable");
    };
    var h = 0;
    function y() {
      h = 0;
    }
    function C() {
      return ++h;
    }
    function b(e) {
      return typeof e == "string" ? e.replace("_", "-") : e;
    }
    function v(e) {
      if (typeof e == "string") {
        for (
          var t = e.replace(/-/g, "_").split(/_/), n = t[0], r = 1;
          r < t.length;
          r++
        ) {
          var o = t[r];
          n += o[0].toUpperCase() + o.slice(1);
        }
        return n;
      }
      return e;
    }
    function S(e) {
      return e == null
        ? {}
        : {
            paddingTop: R(e == null ? void 0 : e.get("top")),
            paddingRight: R(e == null ? void 0 : e.get("end")),
            paddingBottom: R(e == null ? void 0 : e.get("bottom")),
            paddingLeft: R(e == null ? void 0 : e.get("start")),
          };
    }
    function R(e) {
      if (typeof e == "string") {
        var t = o("WebBloksDimensionUtils").parseDimension(e);
        return t == null ? e : t.type === "%" ? t.value + "%" : t.value + "px";
      }
      return e;
    }
    function L(e) {
      var t;
      return (
        ((t = o("WebBloksDimensionUtils").parseDimension(e)) == null
          ? void 0
          : t.type) === "%"
      );
    }
    function E(e) {
      return L(e) ? parseFloat(e) / 100 : null;
    }
    function k(e) {
      if (e.startsWith("rgba(")) {
        var t = e.slice(5, e.indexOf(")")),
          n = t.split(",").map(function (e) {
            return Number(e);
          }),
          r = n[0],
          o = n[1],
          a = n[2],
          i = n[3];
        return [r, o, a, i];
      } else if (e.startsWith("rgb(")) {
        var l = e.slice(4, e.indexOf(")")),
          s = l.split(",").map(function (e) {
            return Number(e);
          }),
          u = s[0],
          c = s[1],
          d = s[2];
        return [u, c, d, 1];
      } else if (e.length === 9) {
        var m = parseInt(e.slice(1, 3), 16) / 255,
          p = parseInt(e.slice(3, 5), 16),
          _ = parseInt(e.slice(5, 7), 16),
          f = parseInt(e.slice(7, 9), 16);
        return [p, _, f, m];
      } else {
        var g = parseInt(e.slice(1, 3), 16),
          h = parseInt(e.slice(3, 5), 16),
          y = parseInt(e.slice(5, 7), 16);
        return [g, h, y, 1];
      }
    }
    function I(e) {
      var t = e[0],
        n = e[1],
        r = e[2],
        o = e[3],
        a = o === void 0 ? 1 : o;
      return "rgba(" + t + "," + n + "," + r + "," + a.toFixed(4) + ")";
    }
    function T(e, t) {
      var n =
        t === o("WebBloksTheme").THEME.dark
          ? e.get("dark_color")
          : e.get("light_color");
      return k(n);
    }
    function D(e, t) {
      return I(T(e, t));
    }
    function x(e) {
      var t,
        n = {
          translate_x: "translateX",
          translate_y: "translateY",
          scale_x: "scaleX",
          scale_y: "scaleY",
          alpha: "",
          rotation: "rotate",
        };
      return (t = n[e]) != null ? t : "";
    }
    function $(e, t) {
      return e != null && e.styleId === t;
    }
    function P(e, t) {
      return e == null
        ? null
        : e.find(function (e) {
            return e.styleId === t;
          });
    }
    function N(e) {
      return e;
    }
    function M(e) {
      if (!e.length)
        throw new (o("WebBloksErrors").WebBloksError)("Empty collection");
      return e[e.length - 1];
    }
    function w(e, t) {
      if (t != null)
        for (var n of t) {
          var r = n[0],
            o = n[1];
          e.set(r, o);
        }
    }
    function A(e) {
      for (var t in e) return t;
    }
    var F = (function () {
      function e() {
        this.listeners = new Set();
      }
      var t = e.prototype;
      return (
        (t.on = function (t) {
          this.listeners.add(t);
        }),
        (t.off = function (t) {
          this.listeners.delete(t);
        }),
        (t.emit = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          this.listeners.forEach(function (e) {
            return e.apply(void 0, t);
          });
        }),
        (t.clear = function () {
          this.listeners.clear();
        }),
        e
      );
    })();
    function O(e) {
      return new (s || (s = n("Promise")))(function (t) {
        window.setTimeout(t, e);
      });
    }
    var B = { passive: !0 },
      W = 10;
    function q(e, t, n, r) {
      if (!r) return !0;
      var o = e.getBoundingClientRect();
      if (Math.abs(o.left - t) > W || Math.abs(o.top - n) > W) return !0;
      var a = document.elementFromPoint(r.clientX, r.clientY);
      return a ? !e.contains(a) : !0;
    }
    function U(e) {
      return /^[0-9]*(\.[0-9]+)?\%$/.test(e);
    }
    function V(e) {
      return /^[0-9]*(\.[0-9]+)?(dp|px)$/.test(e);
    }
    function H(e) {
      var t,
        n = e;
      return function () {
        return (n && ((t = n.apply(this, arguments)), (n = null)), t);
      };
    }
    function G(e, t) {
      var n = e.indexOf(t);
      n !== -1 && e.splice(n, 1);
    }
    function z(e, t) {
      if ((t === void 0 && (t = "Got unexpected null or undefined"), e != null))
        return e;
      var n = new (o("WebBloksErrors").WebBloksError)(t);
      throw ((n.framesToPop = 1), n);
    }
    function j(e) {
      for (var t in e) return !1;
      return !0;
    }
    function K(e, t) {
      if (e === t) return !0;
      if (e == null || t == null || e.size !== t.size) return !1;
      for (var n of e) {
        var r = n[0],
          o = n[1],
          a = t.get(r);
        if (o !== a) return !1;
      }
      return !0;
    }
    function Q(e, t) {
      var n = !1;
      return function () {
        if (!n) {
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          (e.apply(this, o),
            (n = !0),
            window.setTimeout(function () {
              n = !1;
            }, t));
        }
      };
    }
    function X(e, t) {
      var n;
      return function () {
        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
          o[a] = arguments[a];
        var i = this;
        (window.clearTimeout(n),
          (n = window.setTimeout(function () {
            e.apply(i, o);
          }, t)));
      };
    }
    var Y = o("WebBloksSSRUtils").canUseDOM ? m : d,
      J = Object.prototype.toString;
    function Z(e) {
      switch (J.call(e)) {
        case "[object String]":
        case "[object Number]":
        case "[object Boolean]":
        case "[object Null]":
        case "[object Undefined]":
          return !0;
      }
      return !1;
    }
    function ee(e, t) {
      var n = function (t) {
          return function (e, n) {
            return ee(e, t[n]);
          };
        },
        r = function (t, n) {
          return function (e) {
            return e in t && e in n && ee(t[e], n[e]);
          };
        };
      if (J.call(e) !== J.call(t)) return !1;
      if (Z(e)) return e === t;
      if (Array.isArray(e) && Array.isArray(t))
        return e.length === t.length && e.every(n(t));
      if (
        typeof e == "object" &&
        typeof t == "object" &&
        !Array.isArray(e) &&
        e !== null &&
        t !== null
      ) {
        var o = Object.keys(e),
          a = Object.keys(t);
        return o.length !== a.length ? !1 : o.every(r(e, t));
      }
      return !1;
    }
    function te(e) {
      return (
        e !== null && Object.prototype.toString.call(e) === "[object Object]"
      );
    }
    function ne(e) {
      return !o("WebBloksBooleanUtils").isFalse(e.get("enabled"));
    }
    function re() {
      return new (r("WebBloksURLSearchParams"))(window.location.search);
    }
    function oe(e) {
      var t;
      if (e == null) return o("WebBloksConstants").WEBBLOKS_DEFAULT_FONT_FAMILY;
      var n = (t = e.__default) == null ? void 0 : t.webFontName;
      return n === null
        ? "inherit"
        : n != null
          ? n
          : o("WebBloksConstants").WEBBLOKS_DEFAULT_FONT_FAMILY;
    }
    function ae(t) {
      var n,
        r = t == null ? void 0 : t.server_data;
      if (((n = t.layout) == null ? void 0 : n.bloks_payload) != null)
        return babelHelpers.extends({}, t.layout.bloks_payload, {
          server_data: r,
        });
      var o = t.data,
        a = t.layout,
        i = t.status,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends(
        { data: o || [], server_data: r, tree: t.layout },
        l,
      );
    }
    ((l.EMPTY_ARRAY = p),
      (l.EMPTY_KEY_PATH = _),
      (l.EMPTY_OBJECT = f),
      (l.EMPTY_MAP = g),
      (l.resetGlobalBloksClientIdForTest = y),
      (l.getNextGlobalBloksClientId = C),
      (l.toHyphen = b),
      (l.toCamel = v),
      (l.insetToPadding = S),
      (l.toPx = R),
      (l.isPercentage = L),
      (l.toPercentageValue = E),
      (l.convertRGBOrHexStringToArr = k),
      (l.convertRGBArrToString = I),
      (l.convertThemedColorToArr = T),
      (l.getRGBColorWithTheme = D),
      (l.viewTransformKeyToTransformFunction = x),
      (l.isStyle = $),
      (l.findExtension = P),
      (l.cast = N),
      (l.peek = M),
      (l.putAll = w),
      (l.getFirstKey = A),
      (l.EventEmitter = F),
      (l.sleep = O),
      (l.passiveTouchEventOptions = B),
      (l.shouldCancelTouchEvent = q),
      (l.isBloksDimensionPercentage = U),
      (l.isBloksDimensionPixel = V),
      (l.once = H),
      (l.removeFromArray = G),
      (l.nullthrows = z),
      (l.isEmptyObject = j),
      (l.shallowMapEqual = K),
      (l.throttle = Q),
      (l.debounce = X),
      (l.useLayoutEffect_SAFE_FOR_SSR = Y),
      (l.deepEquals = ee),
      (l.isObject = te),
      (l.isBloksModelEnabled = ne),
      (l.getQueryParams = re),
      (l.getWrapperFontFamily = oe),
      (l.normaliseBloksPayload = ae));
  },
  98,
);
