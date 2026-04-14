__d(
  "WAWebContactInfoLeadStageRow.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebLeadStageChip.react",
    "WDSIconIcSort.react",
    "WDSText.react",
    "react",
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
      var t = e.customer,
        n = e.onStageChange;
      return u.jsx("div", {
        "data-testid": void 0,
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          gap: 12,
          xstyle: c.container,
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              justify: "center",
              xstyle: c.iconContainer,
              children: u.jsx(r("WDSIconIcSort.react"), {
                width: 24,
                height: 24,
              }),
            }),
            u.jsx("div", {
              className: "x98rzlu",
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Lead stage"),
              }),
            }),
            u.jsx(r("WAWebLeadStageChip.react"), {
              customer: t,
              onStageChange: n,
              showNoneOption: !0,
              testid: void 0,
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
