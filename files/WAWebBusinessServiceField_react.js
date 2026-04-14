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
      var t,
        n = e.services;
      return s.jsx(r("WDSTooltip.react"), {
        label: o("WAWebBusinessProfileLabels").getServicesEditMobileLabel(),
        position: "end",
        children: s.jsxs((t = o("WAWebFlex.react")).FlexRow, {
          align: "center",
          gap: 12,
          xstyle: u.fieldContainer,
          children: [
            s.jsx(t.FlexItem, {
              align: "center",
              justify: "center",
              xstyle: u.iconContainer,
              children: s.jsx(r("WDSIconIcCheck.react"), { directional: !0 }),
            }),
            s.jsxs(t.FlexColumn, {
              justify: "center",
              gap: 8,
              children: [
                s.jsx(r("WDSText.react"), {
                  colorName: "contentDeemphasized",
                  type: "Body3",
                  children: o("WAWebBusinessProfileLabels").getServicesLabel(),
                }),
                s.jsx(t.FlexRow, {
                  gap: 8,
                  wrap: "wrap",
                  children:
                    n != null &&
                    n.map(function (e) {
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
                    }),
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.WAWebBusinessServiceField = c));
  },
  98,
);
