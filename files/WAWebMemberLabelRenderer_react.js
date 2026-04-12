__d(
  "WAWebMemberLabelRenderer.react",
  [
    "WAWebClickable.react",
    "WAWebMemberLabelHooks",
    "WAWebMemberLabelsFrontendUtils",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { clickable: { ":hover_textDecoration": "xt0b8zv", $$css: !0 } };
    function c(e) {
      var t = e.colorName,
        n = t === void 0 ? "contentDeemphasized" : t,
        a = e.memberLabelArgs,
        i = e.onClick,
        l = e.type,
        c = l === void 0 ? "Body3" : l,
        d = o("WAWebMemberLabelHooks").useMemberLabelValue(
          o("WAWebMemberLabelsFrontendUtils").memberLabelKeyFrom(a),
        );
      if (d == null) return null;
      var m = a.from,
        p = m === "message" && i != null,
        _ = s.jsx(r("WDSText.react"), {
          type: c,
          colorName: n,
          selectable: !0,
          xstyle: p ? u.clickable : void 0,
          children: d,
        });
      return p
        ? s.jsx(o("WAWebClickable.react").Clickable, {
            onClick: i,
            children: _,
          })
        : _;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
