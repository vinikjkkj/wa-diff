__d(
  "WAWebCellRequest.react",
  [
    "fbt",
    "WAWebAlertErrorIcon.react",
    "WAWebCellRequestState",
    "WAWebCheckmarkIcon.react",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatConfiguration",
    "WAWebRound.react",
    "WAWebSpinner.react",
    "WAWebTag.react",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebThemeContext",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebXIcon.react",
    "WDSButton.react",
    "fbs",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useHoverState",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useState,
      _ = "x18f3kag-B",
      f = {
        row: {
          width: "xh8yej3",
          minHeight: "xuwdbiy",
          backgroundColor: "x1280gxy",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        rowHover: { ":hover_backgroundColor": "x17gydlx", $$css: !0 },
        image: { minWidth: "xayfy2v", $$css: !0 },
        info: { lineHeight: "x1fc57z9", $$css: !0 },
        actions: { minWidth: "x450l9j", $$css: !0 },
        text: {
          maxWidth: "x193iq5w",
          whiteSpace: "xuxw1ft",
          textOverflow: "xlyipyv",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        tag: {
          fontSize: "x1f6kntn",
          lineHeight: "x16h55sf",
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x12w63v0",
          height: "xmix8c7",
          $$css: !0,
        },
        rejected: {
          backgroundColor: "xhj6x0y",
          color: "x117hm8",
          borderTopColor: "x15fblf8",
          borderInlineEndColor: "x1eimsvo",
          borderBottomColor: "xmtv5dy",
          borderInlineStartColor: "xfdsq3p",
          $$css: !0,
        },
        rejectedHover: {
          backgroundColor: "x19mg4ev",
          color: "xejeqp1",
          borderTopColor: "x24bj3i",
          borderInlineEndColor: "x105f6xi",
          borderBottomColor: "x1lwhfw6",
          borderInlineStartColor: "x7bkp5h",
          $$css: !0,
        },
        notClickable: { cursor: "xt0e3qv", $$css: !0 },
        signalItem: { marginInlineStart: "x1el38ya", $$css: !0 },
        signalContainer: {
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          backgroundColor: "x4wrhlh",
          fontSize: "x1f6kntn",
          $$css: !0,
        },
        descriptionTitle: { color: "x1v5yvga", $$css: !0 },
        descriptionContent: { lineHeight: "x16h55sf", $$css: !0 },
        grayColor: { color: "xhslqc4", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
      };
    function g(t) {
      var n = o("react-compiler-runtime").c(101),
        a = t.hoverEnabled,
        i = t.image,
        l = t.onApprove,
        u = t.onClick,
        d = t.onError,
        m = t.onReject,
        _ = t.primary,
        g = t.secondary,
        h = t.secondaryTestId,
        y = t.signals,
        C = t.state,
        b = a === void 0 ? !1 : a,
        v = o("WAWebThemeContext").useIsDarkTheme(),
        S;
      n[0] !== y
        ? ((S = y != null ? y : {}), (n[0] = y), (n[1] = S))
        : (S = n[1]);
      var R = S,
        L = R.customSignals,
        E = R.description,
        k = r("useHoverState")(),
        I = k.isHovered,
        T = k.onMouseEnter,
        D = k.onMouseLeave,
        x = b ? I : !1,
        $ = p(!1),
        P = $[0],
        N = $[1],
        M;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = function (t) {
            t && N(t.isExpanded);
          }),
          (n[2] = M))
        : (M = n[2]);
      var w = M,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z,
        j,
        K,
        Q,
        X,
        Y,
        J,
        Z;
      if (
        n[3] !== x ||
        n[4] !== i ||
        n[5] !== l ||
        n[6] !== u ||
        n[7] !== d ||
        n[8] !== T ||
        n[9] !== D ||
        n[10] !== m ||
        n[11] !== _ ||
        n[12] !== g ||
        n[13] !== h ||
        n[14] !== C
      ) {
        var ee = [];
        if (C)
          e: switch (C) {
            case o("WAWebCellRequestState").State.Pending: {
              var te;
              n[33] === Symbol.for("react.memo_cache_sentinel")
                ? ((te = s._(/*BTDS*/ "Reject")), (n[33] = te))
                : (te = n[33]);
              var ne;
              n[34] === Symbol.for("react.memo_cache_sentinel")
                ? ((ne = c.jsx(o("WAWebXIcon.react").XIcon, {
                    height: 24,
                    width: 24,
                  })),
                  (n[34] = ne))
                : (ne = n[34]);
              var re;
              (n[35] !== m
                ? ((re = c.jsx(
                    o("WAWebRound.react").Round,
                    {
                      label: te,
                      onClick: m,
                      theme: o("WAWebRound.react").RoundTheme.Reject,
                      children: ne,
                    },
                    "reject",
                  )),
                  (n[35] = m),
                  (n[36] = re))
                : (re = n[36]),
                (ee = [re]),
                l &&
                  ee.push(
                    c.jsx(
                      o("WAWebRound.react").Round,
                      {
                        label: s._(/*BTDS*/ "Approve"),
                        onClick: l,
                        theme: o("WAWebRound.react").RoundTheme.Approve,
                        children: c.jsx(
                          o("WAWebCheckmarkIcon.react").CheckmarkIcon,
                          { height: 24, width: 24 },
                        ),
                      },
                      "approve",
                    ),
                  ));
              break e;
            }
            case o("WAWebCellRequestState").State.Loading: {
              var oe;
              (n[37] === Symbol.for("react.memo_cache_sentinel")
                ? ((oe = c.jsx(
                    o("WAWebSpinner.react").Spinner,
                    { size: 32, stroke: 3 },
                    "loading",
                  )),
                  (n[37] = oe))
                : (oe = n[37]),
                (ee = [oe]));
              break e;
            }
            case o("WAWebCellRequestState").State.Approved: {
              var ae;
              n[38] === Symbol.for("react.memo_cache_sentinel")
                ? ((ae = [f.tag]), (n[38] = ae))
                : (ae = n[38]);
              var ie = ae,
                le;
              (n[39] === Symbol.for("react.memo_cache_sentinel")
                ? ((le = c.jsx(
                    o("WAWebTag.react").Tag,
                    { xstyle: ie, children: s._(/*BTDS*/ "Approved") },
                    "approved",
                  )),
                  (n[39] = le))
                : (le = n[39]),
                (ee = [le]));
              break e;
            }
            case o("WAWebCellRequestState").State.Rejected: {
              var se = x && f.rejectedHover,
                ue;
              n[40] !== se
                ? ((ue = [f.tag, f.rejected, se]), (n[40] = se), (n[41] = ue))
                : (ue = n[41]);
              var ce;
              n[42] === Symbol.for("react.memo_cache_sentinel")
                ? ((ce = s._(/*BTDS*/ "Rejected")), (n[42] = ce))
                : (ce = n[42]);
              var de;
              (n[43] !== ue
                ? ((de = c.jsx(
                    o("WAWebTag.react").Tag,
                    { xstyle: ue, children: ce },
                    "rejected",
                  )),
                  (n[43] = ue),
                  (n[44] = de))
                : (de = n[44]),
                (ee = [de]));
              break e;
            }
            case o("WAWebCellRequestState").State.Canceled: {
              var me = x && f.rejectedHover,
                pe;
              n[45] !== me
                ? ((pe = [f.tag, f.rejected, me]), (n[45] = me), (n[46] = pe))
                : (pe = n[46]);
              var _e;
              n[47] === Symbol.for("react.memo_cache_sentinel")
                ? ((_e = s._(/*BTDS*/ "Canceled")), (n[47] = _e))
                : (_e = n[47]);
              var fe;
              (n[48] !== pe
                ? ((fe = c.jsx(
                    o("WAWebTag.react").Tag,
                    { xstyle: pe, children: _e },
                    "canceled",
                  )),
                  (n[48] = pe),
                  (n[49] = fe))
                : (fe = n[49]),
                (ee = [fe]));
              break e;
            }
            case o("WAWebCellRequestState").State.Error: {
              var ge;
              n[50] === Symbol.for("react.memo_cache_sentinel")
                ? ((ge = r("fbs")._(/*BTDS*/ "Error")), (n[50] = ge))
                : (ge = n[50]);
              var he;
              (n[51] !== d
                ? ((he = c.jsx(
                    r("WDSButton.react"),
                    {
                      Icon: o("WAWebAlertErrorIcon.react").AlertErrorIcon,
                      size: "small",
                      onPress: d,
                      variant: "borderless",
                      "aria-label": ge,
                    },
                    "error",
                  )),
                  (n[51] = d),
                  (n[52] = he))
                : (he = n[52]),
                (ee = [he]));
            }
          }
        ((W = o("WAWebFlex.react").FlexColumn),
          (B = r("WAWebUnstyledButton.react")),
          (U = u),
          (V = T),
          (H = D),
          (G = "row"));
        var ye = x && f.rowHover,
          Ce = !u && f.notClickable;
        (n[53] !== ye || n[54] !== Ce
          ? ((z = [
              f.row,
              o("WAWebUISpacing").uiPadding.horiz24,
              o("WAWebUISpacing").uiPadding.vert16,
              ye,
              Ce,
            ]),
            (n[53] = ye),
            (n[54] = Ce),
            (n[55] = z))
          : (z = n[55]),
          (O = o("WAWebFlex.react").FlexRow),
          (Y = "center"),
          (J = "all"),
          n[56] !== i
            ? ((Z = c.jsx(r("WAWebFlexItem.react"), {
                xstyle: f.image,
                children: i,
              })),
              (n[56] = i),
              (n[57] = Z))
            : (Z = n[57]));
        var be;
        n[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((be = [f.info, o("WAWebUISpacing").uiPadding.horiz12]),
            (n[58] = be))
          : (be = n[58]);
        var ve;
        (n[59] !== g || n[60] !== h
          ? ((ve = c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              color: "secondary",
              size: "14",
              testid: void 0,
              xstyle: f.text,
              children: g,
            })),
            (n[59] = g),
            (n[60] = h),
            (n[61] = ve))
          : (ve = n[61]),
          n[62] !== _ || n[63] !== ve
            ? ((q = c.jsx(r("WAWebFlexItem.react"), {
                grow: 1,
                justify: "start",
                xstyle: be,
                children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                  children: [_, ve],
                }),
              })),
              (n[62] = _),
              (n[63] = ve),
              (n[64] = q))
            : (q = n[64]),
          (F = r("WAWebFlexItem.react")),
          (X = f.actions),
          (A = o("WAWebFlex.react").FlexRow),
          (j = "end"));
        var Se =
            C === o("WAWebCellRequestState").State.Error &&
            o("WAWebUISpacing").uiPadding.end10,
          Re =
            C === o("WAWebCellRequestState").State.Loading &&
            o("WAWebUISpacing").uiPadding.end4;
        (n[65] !== Se || n[66] !== Re
          ? ((K = [Se, Re]), (n[65] = Se), (n[66] = Re), (n[67] = K))
          : (K = n[67]),
          (Q = ee.map(function (e, t) {
            return c.jsx(
              r("WAWebFlexItem.react"),
              {
                xstyle: t < ee.length - 1 && o("WAWebUISpacing").uiPadding.end8,
                children: e,
              },
              (C != null ? C : "") + "-" + t,
            );
          })),
          (n[3] = x),
          (n[4] = i),
          (n[5] = l),
          (n[6] = u),
          (n[7] = d),
          (n[8] = T),
          (n[9] = D),
          (n[10] = m),
          (n[11] = _),
          (n[12] = g),
          (n[13] = h),
          (n[14] = C),
          (n[15] = A),
          (n[16] = F),
          (n[17] = O),
          (n[18] = B),
          (n[19] = W),
          (n[20] = q),
          (n[21] = U),
          (n[22] = V),
          (n[23] = H),
          (n[24] = G),
          (n[25] = z),
          (n[26] = j),
          (n[27] = K),
          (n[28] = Q),
          (n[29] = X),
          (n[30] = Y),
          (n[31] = J),
          (n[32] = Z));
      } else
        ((A = n[15]),
          (F = n[16]),
          (O = n[17]),
          (B = n[18]),
          (W = n[19]),
          (q = n[20]),
          (U = n[21]),
          (V = n[22]),
          (H = n[23]),
          (G = n[24]),
          (z = n[25]),
          (j = n[26]),
          (K = n[27]),
          (Q = n[28]),
          (X = n[29]),
          (Y = n[30]),
          (J = n[31]),
          (Z = n[32]));
      var Le;
      n[68] !== A || n[69] !== j || n[70] !== K || n[71] !== Q
        ? ((Le = c.jsx(A, { justify: j, xstyle: K, children: Q })),
          (n[68] = A),
          (n[69] = j),
          (n[70] = K),
          (n[71] = Q),
          (n[72] = Le))
        : (Le = n[72]);
      var Ee;
      n[73] !== F || n[74] !== Le || n[75] !== X
        ? ((Ee = c.jsx(F, { xstyle: X, children: Le })),
          (n[73] = F),
          (n[74] = Le),
          (n[75] = X),
          (n[76] = Ee))
        : (Ee = n[76]);
      var ke;
      n[77] !== O ||
      n[78] !== q ||
      n[79] !== Ee ||
      n[80] !== Y ||
      n[81] !== J ||
      n[82] !== Z
        ? ((ke = c.jsxs(O, { align: Y, justify: J, children: [Z, q, Ee] })),
          (n[77] = O),
          (n[78] = q),
          (n[79] = Ee),
          (n[80] = Y),
          (n[81] = J),
          (n[82] = Z),
          (n[83] = ke))
        : (ke = n[83]);
      var Ie;
      n[84] !== B ||
      n[85] !== U ||
      n[86] !== V ||
      n[87] !== H ||
      n[88] !== G ||
      n[89] !== z ||
      n[90] !== ke
        ? ((Ie = c.jsx(B, {
            onClick: U,
            onMouseEnter: V,
            onMouseLeave: H,
            testid: void 0,
            xstyle: z,
            children: ke,
          })),
          (n[84] = B),
          (n[85] = U),
          (n[86] = V),
          (n[87] = H),
          (n[88] = G),
          (n[89] = z),
          (n[90] = ke),
          (n[91] = Ie))
        : (Ie = n[91]);
      var Te;
      n[92] !== L || n[93] !== E || n[94] !== v || n[95] !== P
        ? ((Te =
            E || (L != null && L.length)
              ? c.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: f.row,
                  children: c.jsx(r("WAWebFlexItem.react"), {
                    grow: 1,
                    xstyle: [
                      f.signalItem,
                      o("WAWebUISpacing").uiPadding.start12,
                    ],
                    children: c.jsxs(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(
                          o("WAWebUISpacing").uiPadding.all12,
                          o("WAWebUISpacing").uiMargin.bottom16,
                          o("WAWebUISpacing").uiMargin.top4,
                          o("WAWebUISpacing").uiMargin.horiz24,
                          f.signalContainer,
                        ),
                        {
                          children: [
                            E
                              ? c.jsxs(c.Fragment, {
                                  children: [
                                    c.jsx(
                                      o("WAWebText_DONOTUSE.react").TextDiv,
                                      {
                                        size: "13",
                                        xstyle: [
                                          f.descriptionTitle,
                                          o("WAWebUISpacing").uiMargin.bottom4,
                                        ],
                                        children: E.title,
                                      },
                                    ),
                                    c.jsx(
                                      "section",
                                      babelHelpers.extends(
                                        {},
                                        {
                                          0: {},
                                          1: {
                                            className:
                                              "x1hyak1l x1rife3k x10pp7p3 x7v9bd0",
                                          },
                                        }[!!P << 0],
                                        {
                                          children: c.jsx(
                                            o("WAWebExpandableText.react")
                                              .ExpandableText,
                                            {
                                              ref: w,
                                              text: E.content,
                                              textLimit: 100,
                                              children: function (t) {
                                                var e = t.textLimit;
                                                return c.jsx(
                                                  o("WAWebEmojiText.react")
                                                    .EmojiText,
                                                  {
                                                    formatters: o(
                                                      "WAWebFormatConfiguration",
                                                    ).UntrustedGroupDesc({
                                                      bulletPointsEnabled: !0,
                                                      expandedFormattingEnabled:
                                                        !1,
                                                    }),
                                                    inferLinesDirection: !0,
                                                    multiline: !0,
                                                    text: E.content,
                                                    textLimit: e,
                                                    xstyle:
                                                      f.descriptionContent,
                                                  },
                                                );
                                              },
                                            },
                                          ),
                                        },
                                      ),
                                    ),
                                  ],
                                })
                              : null,
                            L == null
                              ? void 0
                              : L.map(function (e, t) {
                                  var n = e.Icon,
                                    r = e.text;
                                  return c.jsxs(
                                    o("WAWebFlex.react").FlexRow,
                                    {
                                      align: "center",
                                      justify: "start",
                                      xstyle:
                                        E && o("WAWebUISpacing").uiPadding.top4,
                                      children: [
                                        c.jsx(n, {
                                          iconXstyle: v
                                            ? f.secondaryColor
                                            : f.grayColor,
                                          height: 20,
                                          width: 20,
                                          xstyle:
                                            o("WAWebUISpacing").uiPadding.end4,
                                        }),
                                        c.jsx(
                                          o("WAWebText.react").WAWebTextMuted,
                                          { children: r },
                                        ),
                                      ],
                                    },
                                    t,
                                  );
                                }),
                          ],
                        },
                      ),
                    ),
                  }),
                })
              : null),
          (n[92] = L),
          (n[93] = E),
          (n[94] = v),
          (n[95] = P),
          (n[96] = Te))
        : (Te = n[96]);
      var De;
      return (
        n[97] !== W || n[98] !== Ie || n[99] !== Te
          ? ((De = c.jsxs(W, { children: [Ie, Te] })),
            (n[97] = W),
            (n[98] = Ie),
            (n[99] = Te),
            (n[100] = De))
          : (De = n[100]),
        De
      );
    }
    l.default = g;
  },
  226,
);
