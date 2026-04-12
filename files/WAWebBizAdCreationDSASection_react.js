__d(
  "WAWebBizAdCreationDSASection.react",
  [
    "fbt",
    "WAWebBizAdCard.react",
    "WAWebBizAdCreationSectionNotices.react",
    "WAWebFlex.react",
    "WDSSwitch.react",
    "WDSText.react",
    "WDSTextField.react",
    "react",
    "useWAWebBizAdCreationSpecDispatcherContext",
    "waWebBizAdCreationDSAReducer",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = { content: { rowGap: "x1j3ira4", $$css: !0 } };
    function _(e) {
      var t = e.subjectToDSA,
        n = m(!1),
        a = n[0],
        i = n[1],
        l = m(""),
        c = l[0],
        _ = l[1],
        f = m(""),
        g = f[0],
        h = f[1],
        y = r("useWAWebBizAdCreationSpecDispatcherContext")([
          r("waWebBizAdCreationDSAReducer"),
        ]),
        C = function (t) {
          (i(t),
            t
              ? (h(""), y({ dsaPayor: "", type: "dsa_reducer.set_dsa_payor" }))
              : (h(""), y({ dsaPayor: c, type: "dsa_reducer.set_dsa_payor" })));
        },
        b = function (t) {
          (_(t),
            y({ dsaBeneficiary: t, type: "dsa_reducer.set_dsa_beneficiary" }),
            a || y({ dsaPayor: t, type: "dsa_reducer.set_dsa_payor" }));
        },
        v = function (t) {
          (h(t), y({ dsaPayor: t, type: "dsa_reducer.set_dsa_payor" }));
        };
      return (
        d(
          function () {
            t ||
              (y({
                dsaBeneficiary: "",
                type: "dsa_reducer.set_dsa_beneficiary",
              }),
              y({ dsaPayor: "", type: "dsa_reducer.set_dsa_payor" }));
          },
          [t, y],
        ),
        t
          ? u.jsx(r("WAWebBizAdCard.react"), {
              header: s._(/*BTDS*/ "For advertisers targeting the EU"),
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                gap: 16,
                align: "stretch",
                children: [
                  u.jsx(r("WAWebBizAdCreationSectionNotices.react"), {
                    specElement: "DSA",
                  }),
                  u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    xstyle: p.content,
                    align: "stretch",
                    children: [
                      u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        children: s._(
                          /*BTDS*/ "Review your beneficiary and payer information",
                        ),
                      }),
                      u.jsx(r("WDSTextField.react"), {
                        label: s._(/*BTDS*/ "Who is this ad benefiting?"),
                        value: c,
                        onValueChange: b,
                        testid: void 0,
                      }),
                      u.jsxs(o("WAWebFlex.react").FlexRow, {
                        align: "center",
                        justify: "all",
                        children: [
                          u.jsx(r("WDSText.react"), {
                            type: "Body2",
                            colorName: "contentDefault",
                            children: s._(
                              /*BTDS*/ "A different person or organization is paying for this ad",
                            ),
                          }),
                          u.jsx(r("WDSSwitch.react"), {
                            value: a,
                            onChange: C,
                            testid: void 0,
                          }),
                        ],
                      }),
                      a &&
                        u.jsx(r("WDSTextField.react"), {
                          label: s._(/*BTDS*/ "Who is paying for this ad?"),
                          value: g,
                          onValueChange: v,
                          testid: void 0,
                        }),
                    ],
                  }),
                ],
              }),
            })
          : null
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = r("withWAWebBizAdCreationSpecContext")(_, function (e) {
      return { subjectToDSA: e.audienceData.subjectToDSA };
    });
    l.default = f;
  },
  226,
);
