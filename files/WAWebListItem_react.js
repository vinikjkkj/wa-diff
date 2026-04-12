__d(
  "WAWebListItem.react",
  ["WAWebCompatibility", "react", "shallowEqual", "stylex", "useWAWebPrevious"],
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
        o,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u = l.data,
        d = l.index,
        m = l.renderItem,
        y = l.testid,
        b = l.zIndex,
        v = p(!0),
        S = v[0],
        R = v[1],
        L = r("useWAWebPrevious")(u.itemKey),
        E = r("useWAWebPrevious")(u.offset),
        k = C(l, L, E);
      k !== S && R(k);
      var I = S ? g + " " + f + "ms ease-in-out" : "none",
        T =
          l.listDirection === "horizontal"
            ? ((n = { width: u.width }),
              (n[g] = "translateX(" + u.offset + "px)"),
              n)
            : ((o = { height: u.height }),
              (o[g] = "translateY(" + u.offset + "px)"),
              o),
        D = babelHelpers.extends(((a = { zIndex: b }), (a[h] = I), a), T),
        x = m(u, d);
      return c.jsx("div", {
        ref: i,
        className: (s || (s = r("stylex")))([_.item]),
        style: D,
        onFocus: l.onFocus,
        role: l.role,
        "data-testid": void 0,
        children: x,
      });
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
