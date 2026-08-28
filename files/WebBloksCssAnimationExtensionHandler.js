__d(
  "WebBloksCssAnimationExtensionHandler",
  ["WebBloksSSRUtils", "WebBloksStyle", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "ease",
      s = "#",
      u = "$",
      c = "&",
      d = "(",
      m = ")",
      p = "*",
      _ = "+",
      f = ",",
      g = "-",
      h = ".",
      y = "0",
      C = "#",
      b = "$",
      v = "&",
      S = "(",
      R = ")",
      L = "*",
      E = new Map(),
      k = 128;
    function I() {
      return !o("WebBloksSSRUtils").canUseDOM || window.matchMedia == null
        ? !1
        : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    function T(e, t, n, r) {
      return (
        "translate3d(" +
        (e != null ? e : "0px") +
        "," +
        (t != null ? t : "0px") +
        ",0) " +
        ("rotate(" +
          (n != null ? n : 0) +
          "deg) scale(" +
          (r != null ? r : 1) +
          ")")
      );
    }
    function D(e) {
      if (e == null || e.length === 0) return null;
      var t = {};
      for (var n of e) {
        var r,
          a = (r = n.get(L)) != null ? r : 0,
          i = T(
            o("WebBloksUtils").toPx(n.get(S)),
            o("WebBloksUtils").toPx(n.get(R)),
            n.get(b),
            n.get(v),
          ),
          l = n.get(C),
          s = l != null ? String(l) : "1";
        t[a + "%"] = { opacity: s, transform: i };
      }
      var u = Object.keys(t)
          .map(function (e) {
            return e + ":" + t[e].transform + ":" + t[e].opacity;
          })
          .join("|"),
        c = E.get(u);
      if (c == null) {
        if (((c = o("WebBloksStyle").keyframes(t).trim()), E.size >= k)) {
          var d = E.keys().next().value;
          d != null && E.delete(d);
        }
        E.set(u, c);
      }
      return c;
    }
    function x(t) {
      var n,
        r,
        a,
        i = D(t.getSubNodes(p)),
        l = (n = t.get(f)) != null ? n : !0;
      if (i == null || (l && I())) return {};
      var C = t.get(c),
        b = (r = t.get(g)) != null ? r : e,
        v = (a = t.get(s)) != null ? a : 0,
        S = t.get(m),
        R = t.get(u),
        L = t.get(d),
        E = t.get(_),
        k = t.get(h),
        T = t.get(y);
      return babelHelpers.extends(
        {
          animationName: i,
          animationDuration: C != null ? C + "ms" : void 0,
          animationTimingFunction: b,
          animationDelay: v !== 0 ? v + "ms" : void 0,
          animationIterationCount: S != null && S >= 0 ? String(S) : "infinite",
          animationDirection: R != null ? R : void 0,
          animationFillMode: L != null ? L : void 0,
          animationPlayState: E != null ? E : void 0,
          willChange: "transform, opacity",
        },
        k != null || T != null
          ? {
              transformOrigin:
                (k != null ? o("WebBloksUtils").toPx(k) : "50%") +
                " " +
                ("" + (T != null ? o("WebBloksUtils").toPx(T) : "50%")),
            }
          : null,
      );
    }
    var $ = {
        getStyles: function (t) {
          return x(t);
        },
      },
      P = $;
    l.default = P;
  },
  98,
);
