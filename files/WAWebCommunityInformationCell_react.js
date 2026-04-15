__d(
  "WAWebCommunityInformationCell.react",
  [
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        title: { color: "x14ug900", lineHeight: "x37zpob", $$css: !0 },
        iconColor: { color: "xhslqc4", $$css: !0 },
        subText: { paddingTop: "x16ovd2e", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.Icon,
        r = e.description,
        a = e.title,
        i,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { className: "x78zum5 xw7yly9 x1yztbdb xh8yej3" }),
          (l = { className: "x1gxa6cn xvy4d1p xxk0z11" }),
          (t[0] = i),
          (t[1] = l))
        : ((i = t[0]), (l = t[1]));
      var c;
      t[2] !== n
        ? ((c = s.jsx(
            "div",
            babelHelpers.extends({}, l, {
              children: s.jsx(n, {
                width: 24,
                height: 24,
                iconXstyle: u.iconColor,
              }),
            }),
          )),
          (t[2] = n),
          (t[3] = c))
        : (c = t[3]);
      var d;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { className: "x1iyjqo2 xyqm7xq x1ys307a" }), (t[4] = d))
        : (d = t[4]);
      var m;
      t[5] !== a
        ? ((m = s.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: u.title,
            children: a,
          })),
          (t[5] = a),
          (t[6] = m))
        : (m = t[6]);
      var p;
      t[7] !== r
        ? ((p = s.jsx(o("WAWebText.react").WAWebTextMuted, {
            as: "p",
            xstyle: u.subText,
            children: r,
          })),
          (t[7] = r),
          (t[8] = p))
        : (p = t[8]);
      var _;
      t[9] !== m || t[10] !== p
        ? ((_ = s.jsxs(
            "div",
            babelHelpers.extends({}, d, { children: [m, p] }),
          )),
          (t[9] = m),
          (t[10] = p),
          (t[11] = _))
        : (_ = t[11]);
      var f;
      return (
        t[12] !== c || t[13] !== _
          ? ((f = s.jsxs(
              "div",
              babelHelpers.extends({}, i, { children: [c, _] }),
            )),
            (t[12] = c),
            (t[13] = _),
            (t[14] = f))
          : (f = t[14]),
        f
      );
    }
    l.default = c;
  },
  98,
);
