__d(
  "WAWebListItem.react",
  [
    "WAWebCompatibility",
    "react",
    "react-compiler-runtime",
    "shallowEqual",
    "stylex",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.memo,
      p = d.useState,
      _ = {
        item: {
          position: "x10l6tqk",
          width: "xh8yej3",
          ":hover_zIndex": "x1g42fcv",
          $$css: !0,
        },
      },
      f = 200,
      g = o("WAWebCompatibility").compatPrefix("transform"),
      h = o("WAWebCompatibility").compatPrefix("transition");
    function y(t) {
      var n,
        a,
        i,
        l = o("react-compiler-runtime").c(1),
        u = t.ref,
        d = babelHelpers.objectWithoutPropertiesLoose(t, e),
        m = d.data,
        y = d.index,
        b = d.renderItem,
        v = d.testid,
        S = d.zIndex,
        R = p(!0),
        L = R[0],
        E = R[1],
        k = r("useWAWebPrevious")(m.itemKey),
        I = r("useWAWebPrevious")(m.offset),
        T = C(d, k, I);
      T !== L && E(T);
      var D = L ? g + " " + f + "ms ease-in-out" : "none",
        x =
          d.listDirection === "horizontal"
            ? ((n = { width: m.width }),
              (n[g] = "translateX(" + m.offset + "px)"),
              n)
            : ((a = { height: m.height }),
              (a[g] = "translateY(" + m.offset + "px)"),
              a),
        $ = babelHelpers.extends(((i = { zIndex: S }), (i[h] = D), i), x),
        P = b(m, y),
        N;
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (s || (s = r("stylex")))([_.item])), (l[0] = N))
          : (N = l[0]),
        c.jsx("div", {
          ref: u,
          className: N,
          style: $,
          onFocus: d.onFocus,
          role: d.role,
          "data-testid": void 0,
          children: P,
        })
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e, t, n) {
      if (e.animate !== !0) return !1;
      var r = e.data.itemKey;
      return r !== t ? !1 : e.data.offset !== n;
    }
    function b(e, t) {
      return (
        e.animate === t.animate &&
        e.zIndex === t.zIndex &&
        e.renderItem === t.renderItem &&
        r("shallowEqual")(e.data, t.data)
      );
    }
    var v = m(y, b);
    l.default = v;
  },
  98,
);
