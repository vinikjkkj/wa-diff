__d(
  "WAWebOpenBotGroupOpenAddedModal.react",
  [
    "fbt",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        headerText: { textAlign: "x2b8uid", $$css: !0 },
        sectionTitle: { width: "xdzyupr", lineHeight: "x1o2sk6j", $$css: !0 },
      };
    function m() {
      var t,
        n,
        a,
        i = function () {
          (o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getOpenGroupLearnMoreUrl(),
          ),
            o("WAWebModalManager").ModalManager.close());
        },
        l = r("useWAWebFocusOnMount")(),
        u = s._(/*BTDS*/ "A group member added Meta AI to this chat");
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        okText: s._(/*BTDS*/ "Learn more"),
        onOK: i,
        cancelText: s._(/*BTDS*/ "Close"),
        onCancel: o("WAWebModalManager").closeModalManager,
        type: o("WAWebModal.react").ModalTheme.Promote,
        ref: l,
        children: c.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
          align: "center",
          xstyle: [
            (n = o("WAWebUISpacing")).uiMargin.vertAuto,
            n.uiPadding.bottom16,
          ],
          children: [
            c.jsx(r("WAWebBox.react"), {
              xstyle: [
                d.headerText,
                n.uiMargin.horiz8,
                n.uiMargin.top16,
                n.uiMargin.bottom8,
              ],
              children: c.jsx((a = o("WAWebText.react")).WAWebTextLarge, {
                weight: "bold",
                children: u,
              }),
            }),
            c.jsx(t.FlexRow, {
              className: (e || (e = r("stylex")))(
                o("WAWebUISpacing").uiMargin.horiz8,
                o("WAWebUISpacing").uiMargin.vert16,
              ),
              children: c.jsxs(o("WAWebFlex.react").FlexItem, {
                xstyle: [o("WAWebUISpacing").uiPadding.horiz8, d.sectionTitle],
                children: [
                  c.jsx(o("WAWebText.react").WAWebTextTitle, {
                    children: s._(/*BTDS*/ "Meta AI is a member"),
                  }),
                  c.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(
                      /*BTDS*/ "Meta AI can read and respond to new messages in this chat, and Meta can access these messages.",
                    ),
                  }),
                ],
              }),
            }),
            c.jsx(o("WAWebFlex.react").FlexRow, {
              className: e(
                o("WAWebUISpacing").uiMargin.horiz8,
                o("WAWebUISpacing").uiMargin.vert16,
              ),
              children: c.jsxs(o("WAWebFlex.react").FlexItem, {
                xstyle: [o("WAWebUISpacing").uiPadding.horiz8, d.sectionTitle],
                children: [
                  c.jsx(o("WAWebText.react").WAWebTextTitle, {
                    children: s._(/*BTDS*/ "Group admins are in control"),
                  }),
                  c.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(
                      /*BTDS*/ "Admins can remove Meta AI from the group at any time.",
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
