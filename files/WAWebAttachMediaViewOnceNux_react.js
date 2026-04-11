__d(
  "WAWebAttachMediaViewOnceNux.react",
  [
    "fbt",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebLockIcon.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWdsPictoViewOnceIcon.react",
    "WDSIconWdsIcViewOnce.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        icon: { color: "xhslqc4", $$css: !0 },
        sectionIcon: { width: "xvy4d1p", $$css: !0 },
        sectionTitle: { width: "xxsgkw5", lineHeight: "x1o2sk6j", $$css: !0 },
      };
    function d(e) {
      var t,
        n = e.onOkClick,
        a = s._(/*BTDS*/ "View once messages give you more privacy"),
        i = { width: 24, height: 24, iconXstyle: c.icon },
        l = [
          {
            icon: u.jsx(
              r("WDSIconWdsIcViewOnce.react"),
              babelHelpers.extends({}, i),
            ),
            description: s._(
              /*BTDS*/ "When you send a photo, video or voice message, it disappears from the chat after it is opened.",
            ),
          },
          {
            icon: u.jsx(
              o("WAWebLockIcon.react").LockIcon,
              babelHelpers.extends({}, i),
            ),
            description: s._(
              /*BTDS*/ "For added privacy, the recipient can't share, forward, copy, save, or take a screenshot of it.",
            ),
          },
        ];
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "view-once-nux" },
        onOK: n,
        cancelText: r("WAWebFbtCommon")("Learn more"),
        onCancel: m,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          xstyle: (t = o("WAWebUISpacing")).uiMargin.vertAuto,
          children: [
            u.jsx(o("WAWebWdsPictoViewOnceIcon.react").WdsPictoViewOnceIcon, {
              width: 132 * 1.5,
              height: 91 * 1.5,
              xstyle: t.uiMargin.vert16,
            }),
            u.jsx(r("WAWebBox.react"), {
              alignSelf: "center",
              xstyle: [t.uiMargin.horiz8, t.uiMargin.top16, t.uiMargin.bottom8],
              children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
                weight: "bold",
                children: a,
              }),
            }),
            l.map(function (e, t) {
              var n,
                r = e.description,
                a = e.icon;
              return u.jsxs(
                o("WAWebFlex.react").FlexRow,
                {
                  xstyle: [
                    (n = o("WAWebUISpacing")).uiPadding.horiz8,
                    n.uiMargin.vert16,
                  ],
                  children: [
                    u.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: [n.uiPadding.horiz8, c.sectionIcon],
                      children: a,
                    }),
                    u.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: [n.uiPadding.horiz8, c.sectionTitle],
                      children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                        children: r,
                      }),
                    }),
                  ],
                },
                t,
              );
            }),
          ],
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getViewOnceFaqUrl(),
      );
    }
    l.default = d;
  },
  226,
);
