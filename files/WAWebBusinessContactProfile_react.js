__d(
  "WAWebBusinessContactProfile.react",
  [
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileLabels",
    "WAWebBusinessProfileSMBUserJourneyLogger",
    "WAWebBusinessProfileTextField.react",
    "WAWebFlex.react",
    "WAWebInfoRefreshedIcon.react",
    "WAWebValidationUtils",
    "WDSIconIcAlternateEmail.react",
    "WDSIconIcCall.react",
    "WDSIconIcKey.react",
    "WDSIconIcMail.react",
    "WDSText.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        container: {
          paddingInlineStart: "xdx6fka",
          position: "x1n2onr6",
          $$css: !0,
        },
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
        textFieldWrapper: { flex: "x98rzlu", $$css: !0 },
        usernameKeyBadge: {
          backgroundColor: "x6egj2d",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          paddingTop: "x4p5aij",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "x1j85h84",
          paddingInlineStart: "x25sj25",
          $$css: !0,
        },
        usernameKeyIcon: { color: "xhslqc4", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.icon,
        a = e.label,
        i = e.phoneNumberValue,
        l;
      t[0] !== n
        ? ((l = s.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            xstyle: c.iconContainer,
            children: n,
          })),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var u;
      t[2] !== i
        ? ((u = s.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: i,
          })),
          (t[2] = i),
          (t[3] = u))
        : (u = t[3]);
      var d;
      t[4] !== a
        ? ((d = s.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: a,
          })),
          (t[4] = a),
          (t[5] = d))
        : (d = t[5]);
      var m;
      t[6] !== u || t[7] !== d
        ? ((m = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            gap: 4,
            xstyle: c.textFieldWrapper,
            children: [u, d],
          })),
          (t[6] = u),
          (t[7] = d),
          (t[8] = m))
        : (m = t[8]);
      var p;
      return (
        t[9] !== l || t[10] !== m
          ? ((p = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 12,
              xstyle: c.fieldContainer,
              children: [l, m],
            })),
            (t[9] = l),
            (t[10] = m),
            (t[11] = p))
          : (p = t[11]),
        p
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.about,
        a = e.email,
        i = e.hideAbout,
        l = e.onChange,
        m = e.onValidationChange,
        p = e.phoneNumber,
        _ = e.username,
        f = e.usernameKey,
        g = u(a != null ? a : ""),
        h = g[0],
        y = g[1],
        C = u(!1),
        b = C[0],
        v = C[1],
        S;
      t[0] !== l || t[1] !== m
        ? ((S = function (t, n) {
            y(n);
            var e = o("WAWebValidationUtils").validateEmail(n);
            (v(!e), m && m(e), l && l(t, n));
          }),
          (t[0] = l),
          (t[1] = m),
          (t[2] = S))
        : (S = t[2]);
      var R = S,
        L;
      t[3] !== h
        ? ((L = function () {
            var e = h != null && h.trim() !== "";
            o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.clickEmail(e);
          }),
          (t[3] = h),
          (t[4] = L))
        : (L = t[4]);
      var E = L,
        k;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = o("WAWebBizGatingUtils").businessProfileRefreshV2Enabled()),
          (t[5] = k))
        : (k = t[5]);
      var I = k,
        T,
        D;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s.jsx(r("WDSIconIcMail.react"), {})),
          (D = o("WAWebBusinessProfileLabels").getEmailLabel()),
          (t[6] = T),
          (t[7] = D))
        : ((T = t[6]), (D = t[7]));
      var x;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = o("WAWebBusinessProfileLabels").getEmailErrorLabel()),
          (t[8] = x))
        : (x = t[8]);
      var $;
      t[9] !== h || t[10] !== R || t[11] !== E || t[12] !== b
        ? (($ = s.jsx(r("WAWebBusinessProfileTextField.react"), {
            editable: !0,
            fieldName: "email",
            icon: T,
            label: D,
            value: h,
            onChange: R,
            onClick: E,
            error: b,
            errorText: x,
          })),
          (t[9] = h),
          (t[10] = R),
          (t[11] = E),
          (t[12] = b),
          (t[13] = $))
        : ($ = t[13]);
      var P;
      t[14] !== n || t[15] !== i
        ? ((P =
            i !== !0 &&
            (I
              ? s.jsx(r("WDSTooltip.react"), {
                  label: o(
                    "WAWebBusinessProfileLabels",
                  ).getAboutNotEditableLabel(),
                  position: "end",
                  children: s.jsx(r("WAWebBusinessProfileTextField.react"), {
                    editable: !1,
                    icon: s.jsx(
                      o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
                      {},
                    ),
                    label: o("WAWebBusinessProfileLabels").getAboutLabel(),
                    value: n != null ? n : "",
                  }),
                })
              : s.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  gap: 12,
                  xstyle: c.fieldContainer,
                  children: [
                    s.jsx(o("WAWebFlex.react").FlexItem, {
                      align: "center",
                      justify: "center",
                      xstyle: c.iconContainer,
                      children: s.jsx(
                        o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
                        {},
                      ),
                    }),
                    s.jsxs(o("WAWebFlex.react").FlexColumn, {
                      align: "start",
                      grow: 1,
                      children: [
                        s.jsx(r("WDSText.react"), {
                          type: "Body3",
                          colorName: "contentDeemphasized",
                          children: o(
                            "WAWebBusinessProfileLabels",
                          ).getAboutLabel(),
                        }),
                        s.jsx(r("WDSText.react"), {
                          type: "Body2",
                          colorName: "contentDefault",
                          children: n != null ? n : "",
                        }),
                      ],
                    }),
                  ],
                }))),
          (t[14] = n),
          (t[15] = i),
          (t[16] = P))
        : (P = t[16]);
      var N;
      t[17] !== p
        ? ((N = I
            ? s.jsx(r("WDSTooltip.react"), {
                label: o(
                  "WAWebBusinessProfileLabels",
                ).getPhoneNumberNotEditableLabel(),
                position: "end",
                children: s.jsx(r("WAWebBusinessProfileTextField.react"), {
                  editable: !1,
                  icon: s.jsx(r("WDSIconIcCall.react"), {}),
                  label: o("WAWebBusinessProfileLabels").getPhoneNumberLabel(),
                  value: p != null ? p : "",
                }),
              })
            : s.jsx(d, {
                icon: s.jsx(r("WDSIconIcCall.react"), {}),
                phoneNumberValue: p,
                label: o(
                  "WAWebBusinessProfileLabels",
                ).getPhoneNumberNotEditableLabel(),
              })),
          (t[17] = p),
          (t[18] = N))
        : (N = t[18]);
      var M;
      t[19] !== _ || t[20] !== f
        ? ((M =
            _ != null &&
            (I
              ? s.jsx(r("WDSTooltip.react"), {
                  label: o(
                    "WAWebBusinessProfileLabels",
                  ).getUsernameNotEditableLabel(),
                  position: "end",
                  children: s.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    gap: 12,
                    xstyle: c.fieldContainer,
                    children: [
                      s.jsx(o("WAWebFlex.react").FlexItem, {
                        align: "center",
                        justify: "center",
                        xstyle: c.iconContainer,
                        children: s.jsx(r("WDSIconIcAlternateEmail.react"), {}),
                      }),
                      s.jsxs(o("WAWebFlex.react").FlexColumn, {
                        align: "start",
                        grow: 1,
                        children: [
                          s.jsx(r("WDSText.react"), {
                            type: "Body3",
                            colorName: "contentDeemphasized",
                            children: o(
                              "WAWebBusinessProfileLabels",
                            ).getUsernameLabel(),
                          }),
                          s.jsx(r("WDSText.react"), {
                            type: "Body2",
                            colorName: "contentDefault",
                            children: _,
                          }),
                          f != null &&
                            s.jsxs(o("WAWebFlex.react").FlexRow, {
                              align: "center",
                              gap: 8,
                              xstyle: c.usernameKeyBadge,
                              children: [
                                s.jsx(r("WDSIconIcKey.react"), {
                                  xstyle: c.usernameKeyIcon,
                                }),
                                s.jsx(r("WDSText.react"), {
                                  type: "Body2",
                                  colorName: "contentDeemphasized",
                                  children: f,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                })
              : s.jsx(d, {
                  icon: s.jsx(r("WDSIconIcAlternateEmail.react"), {}),
                  phoneNumberValue: _,
                  label: o(
                    "WAWebBusinessProfileLabels",
                  ).getUsernameNotEditableLabel(),
                }))),
          (t[19] = _),
          (t[20] = f),
          (t[21] = M))
        : (M = t[21]);
      var w;
      return (
        t[22] !== M || t[23] !== $ || t[24] !== P || t[25] !== N
          ? ((w = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              gap: 12,
              xstyle: c.container,
              children: [$, P, N, M],
            })),
            (t[22] = M),
            (t[23] = $),
            (t[24] = P),
            (t[25] = N),
            (t[26] = w))
          : (w = t[26]),
        w
      );
    }
    l.default = m;
  },
  98,
);
