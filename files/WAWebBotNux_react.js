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
    "WAWebPDFNTypes",
    "WAWebSetUserDisclosureStageAction",
    "WAWebText.react",
    "WAWebTos",
    "WAWebUISpacing",
    "WAWebUserDisclosureCollection",
    "WAWebWdsIcAiFilledIcon.react",
    "WAWebWdsIcPhotoAiIcon.react",
    "WAWebWdsIllAiChatsIcon.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useVisibility",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState,
      f = {
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
    function g() {
      return {
        headerText: s._(/*BTDS*/ "Introducing Meta AI in chats"),
        sections: [
          {
            icon: c.jsx(
              o("WAWebBotMessageBubbleIcon.react").BotMessageBubbleIcon,
              { width: 24, height: 24, iconXstyle: f.icon },
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
              iconXstyle: f.icon,
            }),
            title: s._(/*BTDS*/ "Your personal messages stay private"),
            subtitle: s._(
              /*BTDS*/ "Meta AI can only read messages people share with it. Messages sent to Meta AI may be used to improve AI at Meta. Meta can't read any other messages in your personal chats, as your personal messages remain end-to-end encrypted.",
            ),
          },
        ],
      };
    }
    function h() {
      return {
        headerText: s._(/*BTDS*/ "Introducing AI Studio"),
        sections: [
          {
            icon: c.jsx(
              o("WAWebBotMessageBubbleIcon.react").BotMessageBubbleIcon,
              { width: 24, height: 24, iconXstyle: f.icon },
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
              iconXstyle: f.icon,
            }),
            title: s._(/*BTDS*/ "Personal messages stay private"),
            subtitle: s._(
              /*BTDS*/ "Meta may use your AI messages to improve AI quality. Personal messages are never sent to Meta, can't be read, and remain end-to-end encrypted.",
            ),
          },
        ],
      };
    }
    function y() {
      return {
        headerText: s._(/*BTDS*/ "Ask Meta AI anything"),
        sections: [
          {
            icon: c.jsx(o("WAWebWdsIcAiFilledIcon.react").WdsIcAiFilledIcon, {
              width: 24,
              height: 24,
              iconXstyle: f.icon,
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
              iconXstyle: f.icon,
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
              iconXstyle: f.icon,
            }),
            title: s._(/*BTDS*/ "Personal messages stay private"),
            subtitle: s._(
              /*BTDS*/ "Meta AI can only read messages people share with it. Messages sent to Meta AI may be used to improve AI at Meta. Meta can't read any other messages in your personal chats, as your personal messages remain end-to-end encrypted.",
            ),
          },
        ],
      };
    }
    function C(e) {
      switch (e) {
        case "agent":
          return o("WAWebBotTosIds").getBotAgentTosId();
        case "invoke":
          return o("WAWebBotTosIds").getBotInvokeTosId();
        case "shortcut":
          return o("WAWebBotTosIds").getBotShortcutTosId();
      }
    }
    function b(t) {
      var a = o("react-compiler-runtime").c(68),
        i = t.onCancel,
        l = t.onOK,
        u = t.origin,
        d = _(!1),
        b = d[0],
        R = d[1],
        L = r("useVisibility")(),
        E = L[0],
        k = L[1],
        I = p(!1),
        T = S,
        D;
      a[0] !== l || a[1] !== u
        ? ((D = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o("WAWebBotTos").hasSeenBotTos() || (R(!0), yield T(u), R(!1)),
                o("WAWebModalManager").ModalManager.close(),
                l == null || l());
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[0] = l),
          (a[1] = u),
          (a[2] = D))
        : (D = a[2]);
      var x = D,
        $;
      a[3] !== i
        ? (($ = function () {
            (o("WAWebModalManager").ModalManager.close(), i == null || i());
          }),
          (a[3] = i),
          (a[4] = $))
        : ($ = a[4]);
      var P = $,
        N = r("useWAWebFocusOnMount")(),
        M,
        w;
      (a[5] !== u
        ? ((M = function () {
            o("WAWebBotTos").hasSeenBotTos() && T(u);
          }),
          (w = [u]),
          (a[5] = u),
          (a[6] = M),
          (a[7] = w))
        : ((M = a[6]), (w = a[7])),
        m(M, w));
      var A, F;
      (a[8] !== k || a[9] !== u
        ? ((A = function () {
            if (k && !I.current) {
              var e = C(u),
                t = o(
                  "WAWebUserDisclosureCollection",
                ).UserDisclosureCollection.get(e),
                n = o("WAWebTos").TosManager.getState(e);
              if (
                (t == null ? void 0 : t.stage) != null ||
                n === "SHOWN" ||
                n === "ACCEPTED"
              )
                return;
              ((I.current = !0),
                o(
                  "WAWebSetUserDisclosureStageAction",
                ).updateUserDisclosureStateAction(
                  Number(e),
                  o("WAWebPDFNTypes").DISCLOSURE_STAGE.SHOWN_0,
                ));
            }
          }),
          (F = [k, u]),
          (a[8] = k),
          (a[9] = u),
          (a[10] = A),
          (a[11] = F))
        : ((A = a[10]), (F = a[11])),
        m(A, F));
      var O;
      a[12] !== u
        ? ((O = c.jsx(o("WAWebFlex.react").FlexItem, {
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
          (a[13] = O))
        : (O = a[13]);
      var B = O,
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
        Z,
        ee,
        te;
      if (
        a[14] !== P ||
        a[15] !== x ||
        a[16] !== B ||
        a[17] !== b ||
        a[18] !== u ||
        a[19] !== N ||
        a[20] !== E
      ) {
        var ne;
        e: switch (u) {
          case "invoke": {
            ne = g();
            break e;
          }
          case "shortcut": {
            ne = y();
            break e;
          }
          default:
            ne = h();
        }
        var re = ne,
          oe = re.headerText,
          ae = re.sections,
          ie;
        (a[37] !== u
          ? ((ie =
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
            (a[38] = ie))
          : (ie = a[38]),
          (U = ie),
          (J = E),
          (q = o("WAWebConfirmPopup.react").ConfirmPopup),
          (G = N),
          (z = o("WAWebModal.react").ModalTheme.BotNut),
          a[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((j = s._(/*BTDS*/ "Continue")), (a[39] = j))
            : (j = a[39]),
          (K = x),
          (Q = b === !0),
          a[40] === Symbol.for("react.memo_cache_sentinel")
            ? ((X = s._(/*BTDS*/ "Cancel")), (a[40] = X))
            : (X = a[40]),
          (Y = P),
          (W = o("WAWebFlex.react").FlexColumn),
          (Z = "center"),
          a[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((ee = [
                o("WAWebUISpacing").uiMargin.vertAuto,
                o("WAWebUISpacing").uiPadding.bottom16,
              ]),
              (a[41] = ee))
            : (ee = a[41]),
          (te = B));
        var le;
        (a[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((le = [
              f.headerText,
              o("WAWebUISpacing").uiMargin.horiz8,
              o("WAWebUISpacing").uiMargin.top16,
              o("WAWebUISpacing").uiMargin.bottom8,
            ]),
            (a[42] = le))
          : (le = a[42]),
          (V = c.jsx(r("WAWebBox.react"), {
            xstyle: le,
            children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
              weight: "bold",
              children: oe,
            }),
          })),
          (H = ae.map(v)),
          (a[14] = P),
          (a[15] = x),
          (a[16] = B),
          (a[17] = b),
          (a[18] = u),
          (a[19] = N),
          (a[20] = E),
          (a[21] = W),
          (a[22] = q),
          (a[23] = U),
          (a[24] = V),
          (a[25] = H),
          (a[26] = G),
          (a[27] = z),
          (a[28] = j),
          (a[29] = K),
          (a[30] = Q),
          (a[31] = X),
          (a[32] = Y),
          (a[33] = J),
          (a[34] = Z),
          (a[35] = ee),
          (a[36] = te));
      } else
        ((W = a[21]),
          (q = a[22]),
          (U = a[23]),
          (V = a[24]),
          (H = a[25]),
          (G = a[26]),
          (z = a[27]),
          (j = a[28]),
          (K = a[29]),
          (Q = a[30]),
          (X = a[31]),
          (Y = a[32]),
          (J = a[33]),
          (Z = a[34]),
          (ee = a[35]),
          (te = a[36]));
      var se;
      a[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((se = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                f.divider,
                o("WAWebUISpacing").uiMargin.vert16,
              ),
            ),
          )),
          (a[43] = se))
        : (se = a[43]);
      var ue;
      a[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = [
            o("WAWebUISpacing").uiMargin.horiz8,
            o("WAWebUISpacing").uiMargin.vert8,
          ]),
          (a[44] = ue))
        : (ue = a[44]);
      var ce;
      a[45] !== U
        ? ((ce = c.jsx(r("WAWebBox.react"), {
            xstyle: ue,
            children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: U,
            }),
          })),
          (a[45] = U),
          (a[46] = ce))
        : (ce = a[46]);
      var de;
      a[47] !== W ||
      a[48] !== V ||
      a[49] !== H ||
      a[50] !== ce ||
      a[51] !== Z ||
      a[52] !== ee ||
      a[53] !== te
        ? ((de = c.jsxs(W, {
            align: Z,
            xstyle: ee,
            children: [te, V, H, se, ce],
          })),
          (a[47] = W),
          (a[48] = V),
          (a[49] = H),
          (a[50] = ce),
          (a[51] = Z),
          (a[52] = ee),
          (a[53] = te),
          (a[54] = de))
        : (de = a[54]);
      var me;
      a[55] !== q ||
      a[56] !== G ||
      a[57] !== z ||
      a[58] !== j ||
      a[59] !== K ||
      a[60] !== Q ||
      a[61] !== X ||
      a[62] !== Y ||
      a[63] !== de
        ? ((me = c.jsx(q, {
            ref: G,
            type: z,
            okText: j,
            onOK: K,
            okSpinner: Q,
            cancelText: X,
            onCancel: Y,
            children: de,
          })),
          (a[55] = q),
          (a[56] = G),
          (a[57] = z),
          (a[58] = j),
          (a[59] = K),
          (a[60] = Q),
          (a[61] = X),
          (a[62] = Y),
          (a[63] = de),
          (a[64] = me))
        : (me = a[64]);
      var pe;
      return (
        a[65] !== J || a[66] !== me
          ? ((pe = c.jsx("div", { ref: J, children: me })),
            (a[65] = J),
            (a[66] = me),
            (a[67] = pe))
          : (pe = a[67]),
        pe
      );
    }
    function v(t, n) {
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
              xstyle: [o("WAWebUISpacing").uiPadding.horiz8, f.sectionIcon],
              children: a,
            }),
            c.jsxs(o("WAWebFlex.react").FlexItem, {
              xstyle: [o("WAWebUISpacing").uiPadding.horiz8, f.sectionTitle],
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
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        R.apply(this, arguments)
      );
    }
    l.default = b;
  },
  226,
);
