__d(
  "WAWebAvatarOverlay.react",
  ["$InternalEnum", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = n("$InternalEnum").Mirrored(["DEFAULT", "COMMUNITY"]);
    function d(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.icon,
        r = e.ref,
        a = e.text,
        i = e.theme,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "x1awj2ng" }), (t[0] = l))
        : (l = t[0]);
      var u;
      t[1] !== n
        ? ((u = s.jsx("div", babelHelpers.extends({}, l, { children: n }))),
          (t[1] = n),
          (t[2] = u))
        : (u = t[2]);
      var d;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = {
            className: "xh8yej3 x2b8uid x1mzt3pk x1awj2ng x1nxh6w3 x1d3mw78",
          }),
          (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] !== a
        ? ((m = s.jsx(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, d, { children: a }),
          )),
          (t[4] = a),
          (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] !== u || t[7] !== m
        ? ((p = s.jsxs(s.Fragment, { children: [u, m] })),
          (t[6] = u),
          (t[7] = m),
          (t[8] = p))
        : (p = t[8]);
      var _ = p,
        f;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = {
            className:
              "x78zum5 x6s0dn4 xl56j7k xdt5ytf x129bwdz x9f619 x29ncy0 x17j7krd x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
          }),
          (t[9] = f))
        : (f = t[9]);
      var g;
      (t[10] !== _
        ? ((g = s.jsx("div", babelHelpers.extends({}, f, { children: _ }))),
          (t[10] = _),
          (t[11] = g))
        : (g = t[11]),
        (_ = g));
      var h = _,
        y;
      t[12] !== i
        ? ((y = {
            0: {
              className:
                "x10l6tqk x13vifvy x16uhe5s x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x5yr21d x219wg1",
            },
            1: {
              className:
                "x10l6tqk x13vifvy x16uhe5s x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x5yr21d x219wg1 x1bczwif x17un8ov x1e7945m x11o6v7j",
            },
          }[(i === c.COMMUNITY) << 0]),
          (t[12] = i),
          (t[13] = y))
        : (y = t[13]);
      var C;
      return (
        t[14] !== h || t[15] !== r || t[16] !== y
          ? ((C = s.createElement(
              "div",
              babelHelpers.extends({ ref: r }, y, { key: "avatar-overlay" }),
              h,
            )),
            (t[14] = h),
            (t[15] = r),
            (t[16] = y),
            (t[17] = C))
          : (C = t[17]),
        C
      );
    }
    ((l.AvatarOverlayTheme = c), (l.AvatarOverlay = d));
  },
  98,
);
