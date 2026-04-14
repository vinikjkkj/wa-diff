__d(
  "WAWebPaymentReminderHeader.react",
  [
    "fbt",
    "WAWebCurrencyUtils",
    "WAWebExternalLink.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardIsKeyActivation",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebName.react",
    "WAWebPaymentReminder",
    "WAWebThemeContext",
    "WDSFlex.stylex",
    "WDSFocusStateStyles",
    "WDSIconIcSchedule.react",
    "WDSIconIcWarning.react",
    "WDSText.react",
    "react",
    "stylex",
    "wdsWidth",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      m = {
        wrapper: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingTop: "x96k8nx",
          paddingInlineEnd: "xrw5ot4",
          paddingBottom: "xdvlbce",
          paddingInlineStart: "x7coems",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        bubbleIn: { backgroundColor: "x6egj2d", $$css: !0 },
        bubbleOut: { backgroundColor: "x4wrhlh", $$css: !0 },
        iconContainer: {
          width: "x1useyqa",
          height: "xsdox4t",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        iconContainerDark: { backgroundColor: "x1od0jb8", $$css: !0 },
        iconContainerLight: { backgroundColor: "x16w0wmm", $$css: !0 },
        warningIconColor: { color: "x30a034", $$css: !0 },
        contentWrapper: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        divider: {
          height: "xqtp20y",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "xlya59e",
          borderTopColor: "x1uebkx7",
          opacity: "xz5rk10",
          marginTop: "x1xmf6yo",
          marginBottom: "x1e56ztr",
          $$css: !0,
        },
      };
    function p(t) {
      var n,
        a,
        i = t.msg,
        l = o("WAWebPaymentReminder").getPaymentReminderInfo(i),
        u = o("WAWebMsgGetters").getIsSentByMe(i),
        p = o("WAWebFrontendMsgGetters").getCurrentChat(i.unsafe()),
        _ = o("WAWebThemeContext").useIsDarkTheme();
      if (l == null) return null;
      var f = o("WAWebCurrencyUtils").formatAmount(
          l.amountDueCurrency,
          l.amountDue.value / l.amountDue.offset,
        ),
        g = d.format(new Date(l.dueDateMs)),
        h = l.isOverdue
          ? s._(
              /*BTDS*/ '_j{"*":"Payment overdue by {days} days","_1":"Payment overdue by {days} day"}',
              [
                s._plural((n = l.daysOverdue) != null ? n : 0),
                s._param("days", (a = l.daysOverdue) != null ? a : 0),
              ],
            )
          : s._(/*BTDS*/ "Payment due"),
        y = null;
      l.accountName != null
        ? (y = s._(/*BTDS*/ "Account: {accountName}", [
            s._param("accountName", l.accountName),
          ]))
        : l.cardNumber != null &&
          (y = s._(/*BTDS*/ "Card \u2022 \u2022 \u2022 \u2022 {cardNumber}", [
            s._param("cardNumber", l.cardNumber),
          ]));
      var C = function () {
          l.url != null && o("WAWebExternalLink.react").openExternalLink(l.url);
        },
        b = function (t) {
          r("WAWebKeyboardIsKeyActivation")(t) && C();
        };
      return c.jsxs(
        "div",
        babelHelpers.extends(
          { onClick: C, onKeyDown: b, role: "button", tabIndex: 0 },
          (e || (e = r("stylex"))).props(
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            m.wrapper,
            u ? m.bubbleOut : m.bubbleIn,
          ),
          {
            children: [
              c.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(
                    o("WDSFlex.stylex").wdsFlex.flexRowCenter,
                    o("WDSFlex.stylex").wdsFlex.columnGapSingle,
                  ),
                  {
                    children: [
                      c.jsx(
                        "div",
                        babelHelpers.extends(
                          {},
                          e.props(
                            o("WDSFlex.stylex").wdsFlex.flexCenter,
                            o("WDSFlex.stylex").wdsFlex.flexShrink0,
                            m.iconContainer,
                            _ ? m.iconContainerDark : m.iconContainerLight,
                          ),
                          {
                            children: l.isOverdue
                              ? c.jsx(r("WDSIconIcWarning.react"), {
                                  width: 24,
                                  height: 24,
                                  iconXstyle: m.warningIconColor,
                                })
                              : c.jsx(r("WDSIconIcSchedule.react"), {
                                  width: 24,
                                  height: 24,
                                }),
                          },
                        ),
                      ),
                      c.jsxs(
                        "div",
                        babelHelpers.extends(
                          {},
                          e.props(
                            o("WDSFlex.stylex").wdsFlex.flexColumn,
                            o("WDSFlex.stylex").wdsFlex.flexGrow1,
                            o("WDSFlex.stylex").wdsFlex.justifyCenter,
                            m.contentWrapper,
                          ),
                          {
                            children: [
                              c.jsx(r("WDSText.react"), {
                                type: "Body2Emphasized",
                                colorName: "contentDefault",
                                children: h,
                              }),
                              c.jsx(r("WDSText.react"), {
                                type: "Body3",
                                colorName: "contentDefault",
                                children: c.jsx(o("WAWebName.react").Name, {
                                  chat: p,
                                  ellipsify: !0,
                                }),
                              }),
                              y != null &&
                                c.jsx(r("WDSText.react"), {
                                  type: "Body3",
                                  colorName: "contentDeemphasized",
                                  children: y,
                                }),
                            ],
                          },
                        ),
                      ),
                    ],
                  },
                ),
              ),
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(o("wdsWidth").wdsWidth.fullWidth, m.divider),
                ),
              ),
              c.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(
                    o("WDSFlex.stylex").wdsFlex.flexRow,
                    o("WDSFlex.stylex").wdsFlex.justifyBetween,
                    o("wdsWidth").wdsWidth.fullWidth,
                  ),
                  {
                    children: [
                      c.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDefault",
                        children: s._(/*BTDS*/ "Due date"),
                      }),
                      c.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDefault",
                        children: g,
                      }),
                    ],
                  },
                ),
              ),
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(o("wdsWidth").wdsWidth.fullWidth, m.divider),
                ),
              ),
              c.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(
                    o("WDSFlex.stylex").wdsFlex.flexRow,
                    o("WDSFlex.stylex").wdsFlex.justifyBetween,
                    o("wdsWidth").wdsWidth.fullWidth,
                  ),
                  {
                    children: [
                      c.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDefault",
                        children: s._(/*BTDS*/ "Amount due"),
                      }),
                      c.jsx(r("WDSText.react"), {
                        type: "Body2Emphasized",
                        colorName: "contentDefault",
                        children: f,
                      }),
                    ],
                  },
                ),
              ),
            ],
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
