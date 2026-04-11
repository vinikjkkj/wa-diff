__d(
  "WAWebBusinessServiceField.react",
  [
    "WAWebBusinessProfileLabels",
    "WAWebFlex.react",
    "WDSChip.react",
    "WDSIconIcBlock.react",
    "WDSIconIcCheck.react",
    "WDSText.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        fieldContainer: {
          alignSelf: "xkh2ocl",
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
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.services,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o("WAWebBusinessProfileLabels").getServicesEditMobileLabel()),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            xstyle: u.iconContainer,
            children: s.jsx(r("WDSIconIcCheck.react"), { directional: !0 }),
          })),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body3",
            children: o("WAWebBusinessProfileLabels").getServicesLabel(),
          })),
          (t[2] = l))
        : (l = t[2]);
      var c;
      t[3] !== n
        ? ((c = n != null && n.map(d)), (t[3] = n), (t[4] = c))
        : (c = t[4]);
      var m;
      return (
        t[5] !== c
          ? ((m = s.jsx(r("WDSTooltip.react"), {
              label: a,
              position: "end",
              children: s.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                gap: 12,
                xstyle: u.fieldContainer,
                children: [
                  i,
                  s.jsxs(o("WAWebFlex.react").FlexColumn, {
                    justify: "center",
                    gap: 8,
                    children: [
                      l,
                      s.jsx(o("WAWebFlex.react").FlexRow, {
                        gap: 8,
                        wrap: "wrap",
                        children: c,
                      }),
                    ],
                  }),
                ],
              }),
            })),
            (t[5] = c),
            (t[6] = m))
          : (m = t[6]),
        m
      );
    }
    function d(e) {
      return s.jsx(
        r("WDSChip.react"),
        {
          Icon: e.is_offered
            ? r("WDSIconIcCheck.react")
            : r("WDSIconIcBlock.react"),
          label: e.localized_display_name,
          isNeutral: !0,
        },
        e.id,
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.WAWebBusinessServiceField = c));
  },
  98,
);
