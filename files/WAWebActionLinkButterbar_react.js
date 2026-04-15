__d(
  "WAWebActionLinkButterbar.react",
  [
    "WAWebChevronIcon.react",
    "WAWebClickable.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        chevron: { display: "x1rg5ohu", verticalAlign: "x16dsc37", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.action,
        r = e.children,
        a = e.dataTab,
        i = e.inline,
        l = e.overrideDirection,
        c = l === void 0 ? null : l,
        d;
      t[0] !== n
        ? ((d = function () {
            n == null || n();
          }),
          (t[0] = n),
          (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] !== i
        ? ((m = { 0: {}, 1: { className: "x1lliihq" } }[!i << 0]),
          (t[2] = i),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { className: "xt0b8zv x1277o0a" }), (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] !== r
        ? ((_ = s.jsx("span", babelHelpers.extends({}, p, { children: r }))),
          (t[5] = r),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      t[7] !== c
        ? ((f = s.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            xstyle: u.chevron,
            directional: !1,
            height: 20,
            width: 18,
            overrideDirection: c,
          })),
          (t[7] = c),
          (t[8] = f))
        : (f = t[8]);
      var g;
      t[9] !== m || t[10] !== _ || t[11] !== f
        ? ((g = s.jsxs(
            "span",
            babelHelpers.extends({}, m, { children: [_, f] }),
          )),
          (t[9] = m),
          (t[10] = _),
          (t[11] = f),
          (t[12] = g))
        : (g = t[12]);
      var h;
      return (
        t[13] !== a || t[14] !== d || t[15] !== g
          ? ((h = s.jsx(o("WAWebClickable.react").Clickable, {
              "data-tab": a,
              onClick: d,
              children: g,
            })),
            (t[13] = a),
            (t[14] = d),
            (t[15] = g),
            (t[16] = h))
          : (h = t[16]),
        h
      );
    }
    l.default = c;
  },
  98,
);
