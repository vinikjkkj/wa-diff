__d(
  "WAWebBotNux.react",
  [
    "fbt",
    "WAWebBotMessageBubbleIcon.react",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebImg.react",
    "WAWebLockIcon.react",
    "WAWebMetaAiRingAssetResolver",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWdsIcAiFilledIcon.react",
    "WAWebWdsIcPhotoAiIcon.react",
    "WAWebWdsIllAiChatsIcon.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebDisclosureShownTracking",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = {
        headerText: { textAlign: "x2b8uid", $$css: !0 },
        icon: { color: "xhslqc4", $$css: !0 },
        sectionIcon: { width: "xvy4d1p", $$css: !0 },
        sectionTitle: { width: "x1cvmir6", lineHeight: "x1o2sk6j", $$css: !0 },
        divider: {
          width: "xw90zxv",
          height: "xjm9jq1",
          backgroundColor: "x3x0x6p",
          $$css: !0,
        },
      };
    function f() {
      return {
        headerText: s._(/*BTDS*/ "Introducing Meta AI in chats"),
        sections: [
          {
            icon: c.jsx(
              o("WAWebBotMessageBubbleIcon.react").BotMessageBubbleIcon,
              { width: 24, height: 24, iconXstyle: _.icon },
            ),
            title: s._(/*BTDS*/ "Bring the group together"),
            subtitle: s._(
              /*BTDS*/ "Get ideas for your next gathering, generate fun images or help settle debates.",
            ),
          },
          {
            icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
              width: 24,
              height: 24,
              iconXstyle: _.icon,
            }),
            title: s._(/*BTDS*/ "Your personal messages stay private"),
            subtitle: s._(
              /*BTDS*/ "Meta AI can only read messages people share with it. Messages sent to Meta AI may be used to improve AI at Meta. Meta can't read any other messages in your personal chats, as your personal messages remain end-to-end encrypted.",
            ),
          },
        ],
      };
    }
    function g() {
      return {
        headerText: s._(/*BTDS*/ "Introducing AI Studio"),
        sections: [
          {
            icon: c.jsx(
              o("WAWebBotMessageBubbleIcon.react").BotMessageBubbleIcon,
              { width: 24, height: 24, iconXstyle: _.icon },
            ),
            title: s._(/*BTDS*/ "Chat with different AIs"),
            subtitle: s._(
              /*BTDS*/ "Explore a variety of helpful and fun AIs, created by Meta and others.",
            ),
          },
          {
            icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
              width: 24,
              height: 24,
              iconXstyle: _.icon,
            }),
            title: s._(/*BTDS*/ "Personal messages stay private"),
            subtitle: s._(
              /*BTDS*/ "Meta may use your AI messages to improve AI quality. Personal messages are never sent to Meta, can't be read, and remain end-to-end encrypted.",
            ),
          },
        ],
      };
    }
    function h() {
      return {
        headerText: s._(/*BTDS*/ "Ask Meta AI anything"),
        sections: [
          {
            icon: c.jsx(o("WAWebWdsIcAiFilledIcon.react").WdsIcAiFilledIcon, {
              width: 24,
              height: 24,
              iconXstyle: _.icon,
            }),
            title: s._(/*BTDS*/ "Get answers to any questions"),
            subtitle: s._(
              /*BTDS*/ "See recommendations, find information and learn new skills.",
            ),
          },
          {
            icon: c.jsx(o("WAWebWdsIcPhotoAiIcon.react").WdsIcPhotoAiIcon, {
              width: 24,
              height: 24,
              iconXstyle: _.icon,
            }),
            title: s._(/*BTDS*/ "Express yourself"),
            subtitle: s._(
              /*BTDS*/ "Generate unique images to share with anyone you want.",
            ),
          },
          {
            icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
              width: 24,
              height: 24,
              iconXstyle: _.icon,
            }),
            title: s._(/*BTDS*/ "Personal messages stay private"),
            subtitle: s._(
              /*BTDS*/ "Meta AI can only read messages people share with it. Messages sent to Meta AI may be used to improve AI at Meta. Meta can't read any other messages in your personal chats, as your personal messages remain end-to-end encrypted.",
            ),
          },
        ],
      };
    }
    function y(e) {
      switch (e) {
        case "agent":
          return o("WAWebBotTosIds").getBotAgentTosId();
        case "invoke":
          return o("WAWebBotTosIds").getBotInvokeTosId();
        case "shortcut":
          return o("WAWebBotTosIds").getBotShortcutTosId();
      }
    }
    function C(t) {
      var a = t.onCancel,
        i = t.onOK,
        l = t.origin,
        u = p(!1),
        d = u[0],
        C = u[1],
        b = r("useWAWebDisclosureShownTracking")({ noticeId: y(l) }),
        v = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            switch (e) {
              case "agent":
                yield o("WAWebBotTos").markSeenAgentTos();
                break;
              case "invoke":
                yield o("WAWebBotTos").markSeenInvokeTos();
                break;
              case "shortcut":
                yield o("WAWebBotTos").markSeenShortcutTos();
                break;
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        S = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o("WAWebBotTos").hasSeenBotTos() || (C(!0), yield v(l), C(!1)),
              o("WAWebModalManager").ModalManager.close(),
              i == null || i());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        R = function () {
          (o("WAWebModalManager").ModalManager.close(), a == null || a());
        },
        L = r("useWAWebFocusOnMount")();
      m(
        function () {
          o("WAWebBotTos").hasSeenBotTos() && v(l);
        },
        [l],
      );
      var E = c.jsx(o("WAWebFlex.react").FlexItem, {
          children:
            l === "agent"
              ? c.jsx(o("WAWebWdsIllAiChatsIcon.react").WdsIllAiChatsIcon, {
                  width: 168,
                  height: 128,
                })
              : c.jsx(r("WAWebImg.react"), {
                  src: o("WAWebMetaAiRingAssetResolver").getBotAssistantURL(),
                  style: { width: 168, height: 168 },
                }),
        }),
        k;
      switch (l) {
        case "invoke":
          k = f();
          break;
        case "shortcut":
          k = h();
          break;
        default:
          k = g();
      }
      var I = k,
        T = I.headerText,
        D = I.sections,
        x =
          l === "agent"
            ? s._(
                /*BTDS*/ "AI Studio is an optional service. It is subject to Meta's {=m2}. By clicking Continue, you agree to Meta's {=m5}. {=m8}",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getBotPrivacyPolicyUrl(),
                      children: s._(/*BTDS*/ "Privacy Policy"),
                    }),
                  ),
                  s._implicitParam(
                    "=m5",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getBotTermsUrl(),
                      children: s._(/*BTDS*/ "AI Terms"),
                    }),
                  ),
                  s._implicitParam(
                    "=m8",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getBotLearnMoreUrl(),
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  ),
                ],
              )
            : s._(
                /*BTDS*/ "Meta AI is an optional service. Meta AI is subject to Meta's {=m2}. By clicking Continue, you agree to Meta's {=m5}. {=m8}",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getBotPrivacyPolicyUrl(),
                      children: s._(/*BTDS*/ "Privacy Policy"),
                    }),
                  ),
                  s._implicitParam(
                    "=m5",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getBotTermsUrl(),
                      children: s._(/*BTDS*/ "AI Terms"),
                    }),
                  ),
                  s._implicitParam(
                    "=m8",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getBotLearnMoreUrl(),
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  ),
                ],
              );
      return c.jsx("div", {
        ref: b,
        children: c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          ref: L,
          type: o("WAWebModal.react").ModalTheme.BotNut,
          okText: s._(/*BTDS*/ "Continue"),
          onOK: S,
          okSpinner: d === !0,
          cancelText: s._(/*BTDS*/ "Cancel"),
          onCancel: R,
          children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: [
              o("WAWebUISpacing").uiMargin.vertAuto,
              o("WAWebUISpacing").uiPadding.bottom16,
            ],
            children: [
              E,
              c.jsx(r("WAWebBox.react"), {
                xstyle: [
                  _.headerText,
                  o("WAWebUISpacing").uiMargin.horiz8,
                  o("WAWebUISpacing").uiMargin.top16,
                  o("WAWebUISpacing").uiMargin.bottom8,
                ],
                children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
                  weight: "bold",
                  children: T,
                }),
              }),
              D.map(function (t, n) {
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
                          _.sectionIcon,
                        ],
                        children: a,
                      }),
                      c.jsxs(o("WAWebFlex.react").FlexItem, {
                        xstyle: [
                          o("WAWebUISpacing").uiPadding.horiz8,
                          _.sectionTitle,
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
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    _.divider,
                    o("WAWebUISpacing").uiMargin.vert16,
                  ),
                ),
              ),
              c.jsx(r("WAWebBox.react"), {
                xstyle: [
                  o("WAWebUISpacing").uiMargin.horiz8,
                  o("WAWebUISpacing").uiMargin.vert8,
                ],
                children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: x,
                }),
              }),
            ],
          }),
        }),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
