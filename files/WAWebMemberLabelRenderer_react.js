__d(
  "WAWebMemberLabelRenderer.react",
  [
    "WAWebClickable.react",
    "WAWebMemberLabelHooks",
    "WAWebMemberLabelsFrontendUtils",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { clickable: { ":hover_textDecoration": "xt0b8zv", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.colorName,
        a = e.memberLabelArgs,
        i = e.onClick,
        l = e.type,
        c = n === void 0 ? "contentDeemphasized" : n,
        d = l === void 0 ? "Body3" : l,
        m;
      t[0] !== a
        ? ((m = o("WAWebMemberLabelsFrontendUtils").memberLabelKeyFrom(a)),
          (t[0] = a),
          (t[1] = m))
        : (m = t[1]);
      var p = o("WAWebMemberLabelHooks").useMemberLabelValue(m);
      if (p == null) return null;
      var _ = a.from,
        f = _ === "message" && i != null,
        g = f ? u.clickable : void 0,
        h;
      t[2] !== c || t[3] !== g || t[4] !== d || t[5] !== p
        ? ((h = s.jsx(r("WDSText.react"), {
            type: d,
            colorName: c,
            selectable: !0,
            xstyle: g,
            children: p,
          })),
          (t[2] = c),
          (t[3] = g),
          (t[4] = d),
          (t[5] = p),
          (t[6] = h))
        : (h = t[6]);
      var y = h,
        C;
      return (
        t[7] !== f || t[8] !== i || t[9] !== y
          ? ((C = f
              ? s.jsx(o("WAWebClickable.react").Clickable, {
                  onClick: i,
                  children: y,
                })
              : y),
            (t[7] = f),
            (t[8] = i),
            (t[9] = y),
            (t[10] = C))
          : (C = t[10]),
        C
      );
    }
    l.default = c;
  },
  98,
);
