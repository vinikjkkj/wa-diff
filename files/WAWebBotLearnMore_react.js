__d(
  "WAWebBotLearnMore.react",
  [
    "fbt",
    "WAWebBotGating",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebLockIcon.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWdsIcAiFilledIcon.react",
    "WAWebWdsPictoAiIcon.react",
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
        icon: { color: "xhslqc4", $$css: !0 },
        sectionIcon: { width: "xvy4d1p", $$css: !0 },
        sectionTitle: { width: "xdzyupr", lineHeight: "x1o2sk6j", $$css: !0 },
      };
    function m() {
      return {
        icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
          width: 24,
          height: 24,
          iconXstyle: d.icon,
        }),
        title: s._(/*BTDS*/ "Your conversation stays private"),
        subtitle: o("WAWebBotGating").isAiWebForwardEnabled()
          ? s._(
              /*BTDS*/ "When you share with or mention \u0040Meta AI, the AI generates a response. Meta can't read or listen to the other messages and calls in this chat, because they are end-to-end encrypted.",
            )
          : s._(
              /*BTDS*/ "When you mention \u0040Meta AI, the AI generates a response. Meta can't read or listen to the other messages and calls in this chat, because they are end-to-end encrypted.",
            ),
      };
    }
    function p() {
      return {
        icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
          width: 24,
          height: 24,
          iconXstyle: d.icon,
        }),
        title: s._(/*BTDS*/ "Improving AI quality"),
        subtitle: s._(
          /*BTDS*/ "Meta may use your AI messages to improve AI quality. But your personal messages are never sent to Meta. They can't be read and remain end-to-end encrypted.",
        ),
      };
    }
    function _() {
      return {
        icon: c.jsx(o("WAWebWdsIcAiFilledIcon.react").WdsIcAiFilledIcon, {
          width: 24,
          height: 24,
          iconXstyle: d.icon,
        }),
        title: s._(/*BTDS*/ "What is generative AI?"),
        subtitle: s._(
          /*BTDS*/ "Generative AI is a computer model that has learned data patterns, so people can use it to create something new like text or images.",
        ),
      };
    }
    function f(t) {
      var n = t.fromInvoke,
        a = function () {
          (o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getBotLearnMoreUrl(),
          ),
            o("WAWebModalManager").ModalManager.close());
        },
        i = r("useWAWebFocusOnMount")(),
        l = c.jsx(o("WAWebFlex.react").FlexItem, {
          children: c.jsx(o("WAWebWdsPictoAiIcon.react").WdsPictoAiIcon, {
            height: 88,
          }),
        }),
        u = s._(/*BTDS*/ "About AI messages"),
        f = [n ? m() : p(), _()];
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        okText: s._(/*BTDS*/ "Learn more"),
        onOK: a,
        cancelText: s._(/*BTDS*/ "Close"),
        onCancel: o("WAWebModalManager").closeModalManager,
        type: o("WAWebModal.react").ModalTheme.Promote,
        ref: i,
        children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          xstyle: [
            o("WAWebUISpacing").uiMargin.vertAuto,
            o("WAWebUISpacing").uiPadding.bottom16,
          ],
          children: [
            l,
            c.jsx(r("WAWebBox.react"), {
              xstyle: [
                d.headerText,
                o("WAWebUISpacing").uiMargin.horiz8,
                o("WAWebUISpacing").uiMargin.top16,
                o("WAWebUISpacing").uiMargin.bottom8,
              ],
              children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
                weight: "bold",
                children: u,
              }),
            }),
            f.map(function (t, n) {
              var a = t.icon,
                i = t.subtitle,
                l = t.title;
              return c.jsxs(
                o("WAWebFlex.react").FlexRow,
                {
                  className: (e || (e = r("stylex")))(
                    o("WAWebUISpacing").uiMargin.horiz8,
                    o("WAWebUISpacing").uiMargin.vert16,
                  ),
                  children: [
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: [
                        o("WAWebUISpacing").uiPadding.horiz8,
                        d.sectionIcon,
                      ],
                      children: a,
                    }),
                    c.jsxs(o("WAWebFlex.react").FlexItem, {
                      xstyle: [
                        o("WAWebUISpacing").uiPadding.horiz8,
                        d.sectionTitle,
                      ],
                      children: [
                        c.jsx(o("WAWebText.react").WAWebTextTitle, {
                          children: l,
                        }),
                        c.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: i,
                        }),
                      ],
                    }),
                  ],
                },
                n,
              );
            }),
          ],
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
