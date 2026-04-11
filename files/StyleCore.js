__d(
  "StyleCore",
  [
    "invariant",
    "camelize",
    "containsNode",
    "err",
    "getOpacityStyleName",
    "getStyleProperty",
    "hyphenate",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = _.get(e, t);
      return n === "auto" || n === "scroll";
    }
    var u = new RegExp(
      "\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)",
      "g",
    );
    function c(e) {
      var t = {};
      return (
        e.replace(u, function (e, n, r) {
          return ((t[n] = r), r);
        }),
        t
      );
    }
    function d(e) {
      var t = "";
      for (var n in e) e[n] && (t += n + ":" + e[n] + ";");
      return t;
    }
    function m(e) {
      return e !== "" ? "alpha(opacity=" + e * 100 + ")" : "";
    }
    function p(e, t, n) {
      switch (r("hyphenate")(t)) {
        case "font-weight":
        case "line-height":
        case "opacity":
        case "z-index":
        case "animation-iteration-count":
        case "-webkit-animation-iteration-count":
          break;
        case "width":
        case "height":
          var o = parseInt(n, 10) < 0;
          !o || s(0, 11849, e, t, n);
        default:
          isNaN(n) || !n || n === "0" || s(0, 11850, e, t, n, n + "px");
          break;
      }
    }
    var _ = {
        set: function (t, n, o) {
          if ((p("Style.set", n, o), t != null)) {
            var e = t.style;
            switch (n) {
              case "opacity":
                r("getOpacityStyleName")() === "filter"
                  ? (e.filter = m(o))
                  : (e.opacity = o);
                break;
              case "float":
                e.cssFloat = e.styleFloat = o || "";
                break;
              default:
                try {
                  e[r("camelize")(n)] = o;
                } catch (e) {
                  throw r("err")(
                    'Style.set: "%s" argument is invalid: %s',
                    n,
                    o,
                  );
                }
            }
          }
        },
        apply: function (t, n) {
          var e;
          for (e in n) p("Style.apply", e, n[e]);
          "opacity" in n &&
            r("getOpacityStyleName")() === "filter" &&
            ((n.filter = m(n.opacity)), delete n.opacity);
          var o = c(t.style.cssText);
          for (e in n) {
            var a = n[e];
            delete n[e];
            var i = r("hyphenate")(e);
            for (var l in o)
              (l === i || l.indexOf(i + "-") === 0) && delete o[l];
            n[i] = a;
          }
          (Object.assign(o, n), (t.style.cssText = d(o)));
        },
        get: r("getStyleProperty"),
        getFloat: function (t, n) {
          return parseFloat(_.get(t, n), 10);
        },
        getOpacity: function (t) {
          if (r("getOpacityStyleName")() === "filter") {
            var e = _.get(t, "filter");
            if (e) {
              var n = /(\d+(?:\.\d+)?)/.exec(e);
              if (n) return parseFloat(n.pop()) / 100;
            }
          }
          return _.getFloat(t, "opacity") || 1;
        },
        isFixed: function (t) {
          for (; r("containsNode")(document.body, t); ) {
            if (_.get(t, "position") === "fixed") return !0;
            t = t.parentNode;
          }
          return !1;
        },
        getScrollParent: function (n) {
          if (!n) return null;
          for (; n && n !== document.body; ) {
            if (e(n, "overflow") || e(n, "overflowY") || e(n, "overflowX"))
              return n;
            n = n.parentNode;
          }
          return window;
        },
      },
      f = _;
    l.default = f;
  },
  98,
);
