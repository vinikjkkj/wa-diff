__d(
  "WebBloksCssAnimationExtensionHandler",
  ["WebBloksModel", "WebBloksSSRUtils", "WebBloksStyle", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "ease",
      u = (e = o("WebBloksModel")).defineWebBloksAttributeKey("#"),
      c = e.defineWebBloksAttributeKey("$"),
      d = e.defineWebBloksAttributeKey("&"),
      m = e.defineWebBloksAttributeKey("("),
      p = e.defineWebBloksAttributeKey(")"),
      _ = e.defineWebBloksAttributeKey("*"),
      f = e.defineWebBloksAttributeKey("+"),
      g = e.defineWebBloksAttributeKey(","),
      h = e.defineWebBloksAttributeKey("-"),
      y = e.defineWebBloksAttributeKey("."),
      C = e.defineWebBloksAttributeKey("0"),
      b = e.defineWebBloksAttributeKey("#"),
      v = e.defineWebBloksAttributeKey("$"),
      S = e.defineWebBloksAttributeKey("&"),
      R = e.defineWebBloksAttributeKey("("),
      L = e.defineWebBloksAttributeKey(")"),
      E = e.defineWebBloksAttributeKey("*"),
      k = new Map(),
      I = 128;
    function T() {
      return !o("WebBloksSSRUtils").canUseDOM || window.matchMedia == null
        ? !1
        : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    function D(e, t, n, r) {
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
    function x(e) {
      if (e == null || e.length === 0) return null;
      var t = {};
      for (var n of e) {
        var r,
          a = (r = n.get(E)) != null ? r : 0,
          i = D(
            o("WebBloksUtils").toPx(n.get(R)),
            o("WebBloksUtils").toPx(n.get(L)),
            n.get(v),
            n.get(S),
          ),
          l = n.get(b),
          s = l != null ? String(l) : "1";
        t[a + "%"] = { opacity: s, transform: i };
      }
      var u = Object.keys(t)
          .map(function (e) {
            return e + ":" + t[e].transform + ":" + t[e].opacity;
          })
          .join("|"),
        c = k.get(u);
      if (c == null) {
        if (((c = o("WebBloksStyle").keyframes(t).trim()), k.size >= I)) {
          var d = k.keys().next().value;
          d != null && k.delete(d);
        }
        k.set(u, c);
      }
      return c;
    }
    function $(e) {
      var t,
        n,
        r,
        a = x(e.getSubNodes(_)),
        i = (t = e.get(g)) != null ? t : !0;
      if (a == null || (i && T())) return {};
      var l = e.get(d),
        b = (n = e.get(h)) != null ? n : s,
        v = (r = e.get(u)) != null ? r : 0,
        S = e.get(p),
        R = e.get(c),
        L = e.get(m),
        E = e.get(f),
        k = e.get(y),
        I = e.get(C);
      return babelHelpers.extends(
        {
          animationName: a,
          animationDuration: l != null ? l + "ms" : void 0,
          animationTimingFunction: b,
          animationDelay: v !== 0 ? v + "ms" : void 0,
          animationIterationCount: S != null && S >= 0 ? String(S) : "infinite",
          animationDirection: R != null ? R : void 0,
          animationFillMode: L != null ? L : void 0,
          animationPlayState: E != null ? E : void 0,
          willChange: "transform, opacity",
        },
        k != null || I != null
          ? {
              transformOrigin:
                (k != null ? o("WebBloksUtils").toPx(k) : "50%") +
                " " +
                ("" + (I != null ? o("WebBloksUtils").toPx(I) : "50%")),
            }
          : null,
      );
    }
    var P = {
        getStyles: function (t) {
          return $(t);
        },
      },
      N = P;
    l.default = N;
  },
  98,
);
