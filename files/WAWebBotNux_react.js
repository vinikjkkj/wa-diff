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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(68),
        i = t.onCancel,
        l = t.onOK,
        u = t.origin,
        d = p(!1),
        C = d[0],
        S = d[1],
        R;
      a[0] !== u ? ((R = y(u)), (a[0] = u), (a[1] = R)) : (R = a[1]);
      var L;
      a[2] !== R ? ((L = { noticeId: R }), (a[2] = R), (a[3] = L)) : (L = a[3]);
      var E = r("useWAWebDisclosureShownTracking")(L),
        k = v,
        I;
      a[4] !== l || a[5] !== u
        ? ((I = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o("WAWebBotTos").hasSeenBotTos() || (S(!0), yield k(u), S(!1)),
                o("WAWebModalManager").ModalManager.close(),
                l == null || l());
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[4] = l),
          (a[5] = u),
          (a[6] = I))
        : (I = a[6]);
      var T = I,
        D;
      a[7] !== i
        ? ((D = function () {
            (o("WAWebModalManager").ModalManager.close(), i == null || i());
          }),
          (a[7] = i),
          (a[8] = D))
        : (D = a[8]);
      var x = D,
        $ = r("useWAWebFocusOnMount")(),
        P,
        N;
      (a[9] !== u
        ? ((P = function () {
            o("WAWebBotTos").hasSeenBotTos() && k(u);
          }),
          (N = [u]),
          (a[9] = u),
          (a[10] = P),
          (a[11] = N))
        : ((P = a[10]), (N = a[11])),
        m(P, N));
      var M;
      a[12] !== u
        ? ((M = c.jsx(o("WAWebFlex.react").FlexItem, {
            children:
              u === "agent"
                ? c.jsx(o("WAWebWdsIllAiChatsIcon.react").WdsIllAiChatsIcon, {
                    width: 168,
                    height: 128,
                  })
                : c.jsx(r("WAWebImg.react"), {
                    src: o("WAWebMetaAiRingAssetResolver").getBotAssistantURL(),
                    style: { width: 168, height: 168 },
                  }),
          })),
          (a[12] = u),
          (a[13] = M))
        : (M = a[13]);
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
        Y;
      if (
        a[14] !== x ||
        a[15] !== T ||
        a[16] !== w ||
        a[17] !== C ||
        a[18] !== u ||
        a[19] !== $ ||
        a[20] !== E
      ) {
        var J;
        e: switch (u) {
          case "invoke": {
            J = f();
            break e;
          }
          case "shortcut": {
            J = h();
            break e;
          }
          default:
            J = g();
        }
        var Z = J,
          ee = Z.headerText,
          te = Z.sections,
          ne;
        (a[37] !== u
          ? ((ne =
              u === "agent"
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
                  )),
            (a[37] = u),
            (a[38] = ne))
          : (ne = a[38]),
          (O = ne),
          (K = E),
          (F = o("WAWebConfirmPopup.react").ConfirmPopup),
          (q = $),
          (U = o("WAWebModal.react").ModalTheme.BotNut),
          a[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((V = s._(/*BTDS*/ "Continue")), (a[39] = V))
            : (V = a[39]),
          (H = T),
          (G = C === !0),
          a[40] === Symbol.for("react.memo_cache_sentinel")
            ? ((z = s._(/*BTDS*/ "Cancel")), (a[40] = z))
            : (z = a[40]),
          (j = x),
          (A = o("WAWebFlex.react").FlexColumn),
          (Q = "center"),
          a[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((X = [
                o("WAWebUISpacing").uiMargin.vertAuto,
                o("WAWebUISpacing").uiPadding.bottom16,
              ]),
              (a[41] = X))
            : (X = a[41]),
          (Y = w));
        var re;
        (a[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((re = [
              _.headerText,
              o("WAWebUISpacing").uiMargin.horiz8,
              o("WAWebUISpacing").uiMargin.top16,
              o("WAWebUISpacing").uiMargin.bottom8,
            ]),
            (a[42] = re))
          : (re = a[42]),
          (B = c.jsx(r("WAWebBox.react"), {
            xstyle: re,
            children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
              weight: "bold",
              children: ee,
            }),
          })),
          (W = te.map(b)),
          (a[14] = x),
          (a[15] = T),
          (a[16] = w),
          (a[17] = C),
          (a[18] = u),
          (a[19] = $),
          (a[20] = E),
          (a[21] = A),
          (a[22] = F),
          (a[23] = O),
          (a[24] = B),
          (a[25] = W),
          (a[26] = q),
          (a[27] = U),
          (a[28] = V),
          (a[29] = H),
          (a[30] = G),
          (a[31] = z),
          (a[32] = j),
          (a[33] = K),
          (a[34] = Q),
          (a[35] = X),
          (a[36] = Y));
      } else
        ((A = a[21]),
          (F = a[22]),
          (O = a[23]),
          (B = a[24]),
          (W = a[25]),
          (q = a[26]),
          (U = a[27]),
          (V = a[28]),
          (H = a[29]),
          (G = a[30]),
          (z = a[31]),
          (j = a[32]),
          (K = a[33]),
          (Q = a[34]),
          (X = a[35]),
          (Y = a[36]));
      var oe;
      a[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                _.divider,
                o("WAWebUISpacing").uiMargin.vert16,
              ),
            ),
          )),
          (a[43] = oe))
        : (oe = a[43]);
      var ae;
      a[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = [
            o("WAWebUISpacing").uiMargin.horiz8,
            o("WAWebUISpacing").uiMargin.vert8,
          ]),
          (a[44] = ae))
        : (ae = a[44]);
      var ie;
      a[45] !== O
        ? ((ie = c.jsx(r("WAWebBox.react"), {
            xstyle: ae,
            children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: O,
            }),
          })),
          (a[45] = O),
          (a[46] = ie))
        : (ie = a[46]);
      var le;
      a[47] !== A ||
      a[48] !== B ||
      a[49] !== W ||
      a[50] !== ie ||
      a[51] !== Q ||
      a[52] !== X ||
      a[53] !== Y
        ? ((le = c.jsxs(A, {
            align: Q,
            xstyle: X,
            children: [Y, B, W, oe, ie],
          })),
          (a[47] = A),
          (a[48] = B),
          (a[49] = W),
          (a[50] = ie),
          (a[51] = Q),
          (a[52] = X),
          (a[53] = Y),
          (a[54] = le))
        : (le = a[54]);
      var se;
      a[55] !== F ||
      a[56] !== q ||
      a[57] !== U ||
      a[58] !== V ||
      a[59] !== H ||
      a[60] !== G ||
      a[61] !== z ||
      a[62] !== j ||
      a[63] !== le
        ? ((se = c.jsx(F, {
            ref: q,
            type: U,
            okText: V,
            onOK: H,
            okSpinner: G,
            cancelText: z,
            onCancel: j,
            children: le,
          })),
          (a[55] = F),
          (a[56] = q),
          (a[57] = U),
          (a[58] = V),
          (a[59] = H),
          (a[60] = G),
          (a[61] = z),
          (a[62] = j),
          (a[63] = le),
          (a[64] = se))
        : (se = a[64]);
      var ue;
      return (
        a[65] !== K || a[66] !== se
          ? ((ue = c.jsx("div", { ref: K, children: se })),
            (a[65] = K),
            (a[66] = se),
            (a[67] = ue))
          : (ue = a[67]),
        ue
      );
    }
    function b(t, n) {
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
              xstyle: [o("WAWebUISpacing").uiPadding.horiz8, _.sectionIcon],
              children: a,
            }),
            c.jsxs(o("WAWebFlex.react").FlexItem, {
              xstyle: [o("WAWebUISpacing").uiPadding.horiz8, _.sectionTitle],
              children: [
                c.jsx(o("WAWebText.react").WAWebTextTitle, { children: l }),
                c.jsx(o("WAWebText.react").WAWebTextMuted, { children: i }),
              ],
            }),
          ],
        },
        n,
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e: switch (e) {
            case "agent": {
              yield o("WAWebBotTos").markSeenAgentTos();
              break e;
            }
            case "invoke": {
              yield o("WAWebBotTos").markSeenInvokeTos();
              break e;
            }
            case "shortcut":
              yield o("WAWebBotTos").markSeenShortcutTos();
          }
        })),
        S.apply(this, arguments)
      );
    }
    l.default = C;
  },
  226,
);
