__d(
  "WAWebBlockContactPopup.react",
  [
    "fbt",
    "WAWebCheckBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebName.react",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WDSFocusStateStyles",
    "react",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.contact,
        n = e.isReportPreChecked,
        a = e.onBlock,
        i = e.onCancel,
        l = e.onReportSpamBlock,
        c = r("useWAWebToggle")(n),
        d = c[0],
        m = c[1],
        p = u.jsx(o("WAWebName.react").Name, { contact: t, breakWord: !0 }),
        _ = s._(/*BTDS*/ "Block {contact}?", [s._param("contact", p)]),
        f = s._(
          /*BTDS*/ "This person won't be able to message or call you. They won't know you blocked or reported them.",
        ),
        g = s._(/*BTDS*/ "Report to WhatsApp"),
        h = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
          testid: void 0,
          children: r("WAWebFbtCommon")("Learn more"),
        }),
        y = s._(
          /*BTDS*/ "The last 5 messages from this user will be sent to WhatsApp. {link to learn more}",
          [s._param("link to learn more", h)],
        );
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "block-contact",
          viewName: "block-contact",
        },
        onOK: d ? l : a,
        okButtonType: "solid-warning",
        okText: r("WAWebFbtCommon")("Block"),
        onCancel: i,
        title: _,
        children: [
          u.jsx(o("WAWebText.react").WAWebTextMuted, { children: f }),
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: o("WAWebUISpacing").uiMargin.vert12,
            columnGap: 8,
            children: [
              u.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: o("WDSFocusStateStyles").WDSFocusStateStyles
                  .genericFocus,
                children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
                  onChange: m,
                  checked: d,
                  id: "menu-icon-block",
                  tabIndex: 0,
                }),
              }),
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: o("WAWebUISpacing").uiMargin.top2,
                children: [
                  u.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
                    htmlFor: "menu-icon-block",
                    weight: "bold",
                    children: g,
                  }),
                  u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: o("WAWebUISpacing").uiMargin.top6,
                    children: y,
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
