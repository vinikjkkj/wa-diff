__d(
  "WAWebBookingConfirmationHeader.react",
  [
    "fbt",
    "WAWebBizOpenBookingConfirmationDrawer.react",
    "WAWebBookingConfirmation",
    "WAWebFormatEventDateString",
    "WAWebKeyboardIsKeyActivation",
    "WAWebMsgGetters",
    "WAWebThemeContext",
    "WDSFlex.stylex",
    "WDSFocusStateStyles",
    "WDSIconIcCalendarMonth.react",
    "WDSText.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
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
        iconColor: { color: "x14ug900", $$css: !0 },
        contentWrapper: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function m(t) {
      var n,
        a,
        i,
        l,
        u,
        m,
        p,
        _ = t.msg,
        f = o("WAWebBookingConfirmation").getBookingConfirmationInfo(_),
        g = o("WAWebMsgGetters").getIsSentByMe(_),
        h = o("WAWebThemeContext").useIsDarkTheme();
      if (f == null) return null;
      var y = (n = _.interactiveHeader) == null ? void 0 : n.title,
        C = Math.floor(Date.parse(f.startDatetime) / 1e3),
        b =
          f.endDatetime != null
            ? Math.floor(Date.parse(f.endDatetime) / 1e3)
            : null,
        v = o("WAWebFormatEventDateString").getEventDateStringFor(C, b),
        S =
          (a =
            (i = (l = f.location) != null ? l : f.bookingUrl) != null
              ? i
              : f.phoneNumber) != null
            ? a
            : null,
        R = f.bookingUrl != null,
        L = f.phoneNumber != null && f.location == null && f.bookingUrl == null,
        E = function () {
          o(
            "WAWebBizOpenBookingConfirmationDrawer.react",
          ).openBookingConfirmationDrawer(f, _);
        },
        k = function (t) {
          r("WAWebKeyboardIsKeyActivation")(t) && E();
        };
      return c.jsx(
        "div",
        babelHelpers.extends(
          {
            "data-testid": void 0,
            onClick: E,
            onKeyDown: k,
            role: "button",
            tabIndex: 0,
          },
          (e || (e = r("stylex"))).props(
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            d.wrapper,
            g ? d.bubbleOut : d.bubbleIn,
          ),
          {
            children: c.jsxs(
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
                          d.iconContainer,
                          h ? d.iconContainerDark : d.iconContainerLight,
                        ),
                        {
                          children: c.jsx(r("WDSIconIcCalendarMonth.react"), {
                            width: 24,
                            height: 24,
                            iconXstyle: d.iconColor,
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
                          d.contentWrapper,
                        ),
                        {
                          children: [
                            y != null &&
                              c.jsx(r("WDSText.react"), {
                                type: "Body2Emphasized",
                                colorName: "contentDefault",
                                testid: void 0,
                                children: y,
                              }),
                            c.jsx(r("WDSText.react"), {
                              type: "Body3",
                              colorName: "contentDefault",
                              maxLines: 1,
                              children: v,
                            }),
                            S != null &&
                              c.jsx(r("WDSText.react"), {
                                type: "Body3",
                                colorName: "contentDeemphasized",
                                maxLines: 1,
                                testid: void 0,
                                children: S,
                              }),
                            (R ||
                              L ||
                              ((u = f.displayContent) == null
                                ? void 0
                                : u.displayMeetingType) != null) &&
                              c.jsx(r("WDSText.react"), {
                                type: "Body3",
                                colorName: "contentDeemphasized",
                                children:
                                  (m =
                                    (p = f.displayContent) == null
                                      ? void 0
                                      : p.displayMeetingType) != null
                                    ? m
                                    : R
                                      ? s._(/*BTDS*/ "Video call")
                                      : s._(/*BTDS*/ "Phone call"),
                              }),
                          ],
                        },
                      ),
                    ),
                  ],
                },
              ),
            ),
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
