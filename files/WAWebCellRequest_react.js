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
      var n = t.hoverEnabled,
        a = n === void 0 ? !1 : n,
        i = t.image,
        l = t.onApprove,
        u = t.onClick,
        d = t.onError,
        _ = t.onReject,
        g = t.primary,
        h = t.secondary,
        y = t.secondaryTestId,
        C = t.signals,
        b = t.state,
        v = o("WAWebThemeContext").useIsDarkTheme(),
        S = C != null ? C : {},
        R = S.customSignals,
        L = S.description,
        E = r("useHoverState")(),
        k = E.isHovered,
        I = E.onMouseEnter,
        T = E.onMouseLeave,
        D = a ? k : !1,
        x = p(!1),
        $ = x[0],
        P = x[1],
        N = m(function (e) {
          e && P(e.isExpanded);
        }, []),
        M = [];
      if (b)
        switch (b) {
          case o("WAWebCellRequestState").State.Pending:
            ((M = [
              c.jsx(
                o("WAWebRound.react").Round,
                {
                  label: s._(/*BTDS*/ "Reject"),
                  onClick: _,
                  theme: o("WAWebRound.react").RoundTheme.Reject,
                  children: c.jsx(o("WAWebXIcon.react").XIcon, {
                    height: 24,
                    width: 24,
                  }),
                },
                "reject",
              ),
            ]),
              l &&
                M.push(
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
            break;
          case o("WAWebCellRequestState").State.Loading:
            M = [
              c.jsx(
                o("WAWebSpinner.react").Spinner,
                { size: 32, stroke: 3 },
                "loading",
              ),
            ];
            break;
          case o("WAWebCellRequestState").State.Approved: {
            var w = [f.tag];
            M = [
              c.jsx(
                o("WAWebTag.react").Tag,
                { xstyle: w, children: s._(/*BTDS*/ "Approved") },
                "approved",
              ),
            ];
            break;
          }
          case o("WAWebCellRequestState").State.Rejected:
            M = [
              c.jsx(
                o("WAWebTag.react").Tag,
                {
                  xstyle: [f.tag, f.rejected, D && f.rejectedHover],
                  children: s._(/*BTDS*/ "Rejected"),
                },
                "rejected",
              ),
            ];
            break;
          case o("WAWebCellRequestState").State.Canceled:
            M = [
              c.jsx(
                o("WAWebTag.react").Tag,
                {
                  xstyle: [f.tag, f.rejected, D && f.rejectedHover],
                  children: s._(/*BTDS*/ "Canceled"),
                },
                "canceled",
              ),
            ];
            break;
          case o("WAWebCellRequestState").State.Error:
            M = [
              c.jsx(
                r("WDSButton.react"),
                {
                  Icon: o("WAWebAlertErrorIcon.react").AlertErrorIcon,
                  size: "small",
                  onPress: d,
                  variant: "borderless",
                  "aria-label": r("fbs")._(/*BTDS*/ "Error"),
                },
                "error",
              ),
            ];
            break;
        }
      return c.jsxs(o("WAWebFlex.react").FlexColumn, {
        children: [
          c.jsx(r("WAWebUnstyledButton.react"), {
            onClick: u,
            onMouseEnter: I,
            onMouseLeave: T,
            testid: void 0,
            xstyle: [
              f.row,
              o("WAWebUISpacing").uiPadding.horiz24,
              o("WAWebUISpacing").uiPadding.vert16,
              D && f.rowHover,
              !u && f.notClickable,
            ],
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "all",
              children: [
                c.jsx(r("WAWebFlexItem.react"), {
                  xstyle: f.image,
                  children: i,
                }),
                c.jsx(r("WAWebFlexItem.react"), {
                  grow: 1,
                  justify: "start",
                  xstyle: [f.info, o("WAWebUISpacing").uiPadding.horiz12],
                  children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                    children: [
                      g,
                      c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                        color: "secondary",
                        size: "14",
                        testid: void 0,
                        xstyle: f.text,
                        children: h,
                      }),
                    ],
                  }),
                }),
                c.jsx(r("WAWebFlexItem.react"), {
                  xstyle: f.actions,
                  children: c.jsx(o("WAWebFlex.react").FlexRow, {
                    justify: "end",
                    xstyle: [
                      b === o("WAWebCellRequestState").State.Error &&
                        o("WAWebUISpacing").uiPadding.end10,
                      b === o("WAWebCellRequestState").State.Loading &&
                        o("WAWebUISpacing").uiPadding.end4,
                    ],
                    children: M.map(function (e, t) {
                      return c.jsx(
                        r("WAWebFlexItem.react"),
                        {
                          xstyle:
                            t < M.length - 1 &&
                            o("WAWebUISpacing").uiPadding.end8,
                          children: e,
                        },
                        (b != null ? b : "") + "-" + t,
                      );
                    }),
                  }),
                }),
              ],
            }),
          }),
          L || (R != null && R.length)
            ? c.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: f.row,
                children: c.jsx(r("WAWebFlexItem.react"), {
                  grow: 1,
                  xstyle: [f.signalItem, o("WAWebUISpacing").uiPadding.start12],
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
                          L
                            ? c.jsxs(c.Fragment, {
                                children: [
                                  c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                                    size: "13",
                                    xstyle: [
                                      f.descriptionTitle,
                                      o("WAWebUISpacing").uiMargin.bottom4,
                                    ],
                                    children: L.title,
                                  }),
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
                                      }[!!$ << 0],
                                      {
                                        children: c.jsx(
                                          o("WAWebExpandableText.react")
                                            .ExpandableText,
                                          {
                                            ref: N,
                                            text: L.content,
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
                                                  text: L.content,
                                                  textLimit: e,
                                                  xstyle: f.descriptionContent,
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
                          R == null
                            ? void 0
                            : R.map(function (e, t) {
                                var n = e.Icon,
                                  r = e.text;
                                return c.jsxs(
                                  o("WAWebFlex.react").FlexRow,
                                  {
                                    align: "center",
                                    justify: "start",
                                    xstyle:
                                      L && o("WAWebUISpacing").uiPadding.top4,
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
            : null,
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
