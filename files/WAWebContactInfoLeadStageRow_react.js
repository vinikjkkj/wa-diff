__d(
  "WAWebContactInfoLeadStageRow.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebLeadStageChip.react",
    "WDSIconIcSort.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          alignSelf: "xkh2ocl",
          marginInlineStart: "x150mmf0",
          marginInlineEnd: "xqf2s3x",
          marginLeft: null,
          marginRight: null,
          paddingBottom: "x12xbjc7",
          paddingInlineEnd: "xvtqlqk",
          paddingInlineStart: "x12w63v0",
          paddingTop: "x16ovd2e",
          $$css: !0,
        },
        iconContainer: {
          color: "xhslqc4",
          height: "x1nqnulx",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          width: "x1xvr5cs",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.customer,
        a = e.onStageChange,
        i,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            xstyle: c.iconContainer,
            children: u.jsx(r("WDSIconIcSort.react"), {
              width: 24,
              height: 24,
            }),
          })),
          (l = { className: "x98rzlu" }),
          (t[0] = i),
          (t[1] = l))
        : ((i = t[0]), (l = t[1]));
      var d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(
            "div",
            babelHelpers.extends({}, l, {
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Lead stage"),
              }),
            }),
          )),
          (t[2] = d))
        : (d = t[2]);
      var m;
      return (
        t[3] !== n || t[4] !== a
          ? ((m = u.jsx("div", {
              "data-testid": void 0,
              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                gap: 12,
                xstyle: c.container,
                children: [
                  i,
                  d,
                  u.jsx(r("WAWebLeadStageChip.react"), {
                    customer: n,
                    onStageChange: a,
                    showNoneOption: !0,
                    testid: void 0,
                  }),
                ],
              }),
            })),
            (t[3] = n),
            (t[4] = a),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    l.default = d;
  },
  226,
);
