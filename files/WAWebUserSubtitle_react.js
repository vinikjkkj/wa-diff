__d(
  "WAWebUserSubtitle.react",
  [
    "fbt",
    "WAWebBizCoexGatingUtils",
    "WAWebBizGatingUtils",
    "WAWebBotBaseGating",
    "WAWebBotFrontendUtils",
    "WAWebBotProfileGetters",
    "WAWebChatAssignmentLogEvents",
    "WAWebChatSubtitleText",
    "WAWebChatSubtitleText.react",
    "WAWebContactGetters",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "WAWebHasAcceptedBizBotTos",
    "WAWebMiscGatingUtils",
    "WAWebPresenceEnum",
    "WAWebPsaVerifiedBlueIcon.react",
    "WAWebPsaVerifiedIcon.react",
    "WAWebSupportChatStrings",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebTypingIndicatorGatingUtils",
    "WAWebUISpacing",
    "WAWebUseBusinessProfile.react",
    "WAWebWid",
    "WDSIconWdsIcAiFilled.react",
    "react",
    "stylex",
    "useWAWebAiThreadTitle",
    "useWAWebContactValues",
    "useWAWebModelValues",
    "useWAWebOptionalBotProfileValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = {
        icon: {
          display: "x1rg5ohu",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          color: "xhslqc4",
          $$css: !0,
        },
        divider: { fontWeight: "x117nqv4", lineHeight: "x1fc57z9", $$css: !0 },
      };
    function p(t) {
      var n,
        a = s._(/*BTDS*/ "click here for contact info"),
        i = s._(/*BTDS*/ "Business Account"),
        l = s._(/*BTDS*/ "Official WhatsApp account"),
        u = s._(/*BTDS*/ "Message yourself"),
        p = s._(/*BTDS*/ "AI"),
        _ = s._(/*BTDS*/ "Uses AI from Meta"),
        f = o("useWAWebContactValues").useContactValues(t.contact.id, [
          o("WAWebContactGetters").getName,
          o("WAWebContactGetters").getVerifiedName,
          o("WAWebContactGetters").getId,
          (n = o("WAWebFrontendContactGetters")).getTextStatusString,
          n.getTextStatusEmoji,
          n.getTextStatusLastUpdateTime,
          n.getTextStatusExpiryTs,
          n.getTextStatusEphemeralDuration,
        ]),
        g = f[0],
        h = f[1],
        y = f[2],
        C = f[3],
        b = f[4],
        v = f[5],
        S = f[6],
        R = f[7],
        L = o("WAWebTextStatusUtils").shouldDisplayTextStatus(C, b, v, S, R),
        E = o("useWAWebModelValues").useModelValues(t.presence, [
          "chatstate",
          "withholdDisplayStage",
          "forceDisplay",
          "hasData",
        ]),
        k = t.assignmentSubtitle,
        I = t.chatId,
        T = t.location,
        D = t.showBusinessCheckmark,
        x = D === void 0 ? !1 : D,
        $ = t.showVerifiedName,
        P = $ === void 0 ? !1 : $,
        N = t.threadId;
      o("useWAWebModelValues").useModelValues(t.chatstate, [
        "type",
        "deny",
        "t",
      ]);
      var M = o("WAWebUseBusinessProfile.react").useBusinessProfile(I, [
          "isBizBot1p",
          "isBizBot3p",
          "isAuthorizedAgent",
          "parentCompanyName",
        ]),
        w =
          o("WAWebBotBaseGating").isBizBot1pEnabled() &&
          (M == null ? void 0 : M.isBizBot1p) === !0,
        A =
          o("WAWebBotBaseGating").isBizBot3pEnabled() &&
          (M == null ? void 0 : M.isBizBot3p) === !0,
        F = o("WAWebHasAcceptedBizBotTos").useHasAcceptedBizBotTos(),
        O = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(
          I,
          [o("WAWebBotProfileGetters").getIsDefault],
        ),
        B = O[0],
        W = r("useWAWebAiThreadTitle")(I, N);
      d(
        function () {
          k != null &&
            E.withholdDisplayStage ===
              o("WAWebPresenceEnum").WithholdDisplayStage.ChatAssignment &&
            o("WAWebChatAssignmentLogEvents").logChatStatusTickerShown(I);
        },
        [I, E.withholdDisplayStage, k],
      );
      var q,
        U,
        V,
        H,
        G = !1,
        z =
          F &&
          o("WAWebBizGatingUtils").isUpdatedConsumerDisclosureUiIndiaEnabled();
      if (r("WAWebWid").isPSA(y)) q = l;
      else if (r("WAWebWid").isCAPISupportAccount(y))
        q = o("WAWebSupportChatStrings").SupportChatSubtitle();
      else if (y.isBot() || A)
        ((q = p),
          B &&
            (q =
              W != null
                ? W
                : o("WAWebBotFrontendUtils").metaAiLlamaVersionTitleFbs()));
      else if (w) q = z ? _ : i;
      else if (
        o("WAWebBizCoexGatingUtils").authorizedAgentsEnabled() &&
        (M == null ? void 0 : M.isAuthorizedAgent) === !0
      ) {
        var j;
        G = !0;
        var K =
          (j = M == null ? void 0 : M.parentCompanyName) != null ? j : null;
        K != null && K !== "" ? (q = K) : (q = i);
      } else
        E.withholdDisplayStage ===
        o("WAWebPresenceEnum").WithholdDisplayStage.E2EE
          ? ((q = o("WAWebChatSubtitleText").e2eChatSubtitleText()), (H = !0))
          : E.withholdDisplayStage ===
              o("WAWebPresenceEnum").WithholdDisplayStage.Self
            ? (q = u)
            : T === "list" || T === "info"
              ? (q = E.getUserSubtitleText())
              : E.withholdDisplayStage ===
                  o("WAWebPresenceEnum").WithholdDisplayStage.Info
                ? (q = a)
                : E.withholdDisplayStage ===
                    o("WAWebPresenceEnum").WithholdDisplayStage.Business
                  ? (q = i)
                  : k != null &&
                      E.withholdDisplayStage ===
                        o("WAWebPresenceEnum").WithholdDisplayStage
                          .ChatAssignment
                    ? (q = k)
                    : E.withholdDisplayStage ===
                        o("WAWebPresenceEnum").WithholdDisplayStage.LastSeen
                      ? (q = E.getUserSubtitleText())
                      : E.chatstate.type === "unavailable" &&
                          L &&
                          o(
                            "WAWebTextStatusGatingUtils",
                          ).receiveTextStatusForNewSurfacesEnabled() &&
                          !(
                            T === "title" &&
                            o(
                              "WAWebTextStatusGatingUtils",
                            ).receiveTextStatusEnabled()
                          )
                        ? ((q = C), (V = b))
                        : (q =
                            E.getUserSubtitleText(
                              o(
                                "WAWebTypingIndicatorGatingUtils",
                              ).isTypingIndicatorMessageBubbleEnabled(I),
                            ) || (E.forceDisplay ? "" : a));
      return (
        ((q != null && q !== "") || V != null) &&
          (U = c.jsx(r("WAWebChatSubtitleText.react"), {
            text: q,
            textStatusEmoji: V,
            location: T,
            showLockIcon: H,
          })),
        y.isBot() || w
          ? c.jsxs("div", {
              className: "x78zum5 x1q0g3np xeuugli x6ikm8r x10wlt62",
              children: [
                U,
                z &&
                  c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        m.icon,
                        o("WAWebUISpacing").uiMargin.top4,
                        o("WAWebUISpacing").uiMargin.start2,
                      ),
                      {
                        children: c.jsx(r("WDSIconWdsIcAiFilled.react"), {
                          width: 12,
                          height: 12,
                        }),
                      },
                    ),
                  ),
              ],
            })
          : T === "title" && G && q !== a
            ? c.jsxs("div", {
                className: "x78zum5 x1q0g3np xeuugli x6ikm8r x10wlt62",
                children: [
                  U,
                  c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        m.icon,
                        o("WAWebUISpacing").uiMargin.top2,
                        o("WAWebUISpacing").uiMargin.start2,
                      ),
                      {
                        children: o("WAWebMiscGatingUtils").isBlueEnabled()
                          ? c.jsx(
                              o("WAWebPsaVerifiedBlueIcon.react")
                                .PsaVerifiedBlueIcon,
                              { width: 16, height: 16 },
                            )
                          : c.jsx(
                              o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon,
                              { width: 16, height: 16 },
                            ),
                      },
                    ),
                  ),
                ],
              })
            : T === "title" && q !== a && (x || P) && !y.isCAPISupportAccount()
              ? c.jsxs("div", {
                  className: "x78zum5 x1q0g3np xeuugli x6ikm8r x10wlt62",
                  children: [
                    c.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: h,
                      className: "x1c4vz4f xisnujt x1nxh6w3 x1fc57z9 xhslqc4",
                      direction: "auto",
                      titlify: !0,
                    }),
                    x &&
                      c.jsx(
                        "div",
                        babelHelpers.extends(
                          {},
                          (e || (e = r("stylex"))).props(
                            m.icon,
                            o("WAWebUISpacing").uiMargin.top2,
                            o("WAWebUISpacing").uiMargin.start2,
                          ),
                          {
                            children: o("WAWebMiscGatingUtils").isBlueEnabled()
                              ? c.jsx(
                                  o("WAWebPsaVerifiedBlueIcon.react")
                                    .PsaVerifiedBlueIcon,
                                  { width: 16, height: 16 },
                                )
                              : c.jsx(
                                  o("WAWebPsaVerifiedIcon.react")
                                    .PsaVerifiedIcon,
                                  { width: 16, height: 16 },
                                ),
                          },
                        ),
                      ),
                    U &&
                      c.jsx(
                        "span",
                        babelHelpers.extends(
                          {},
                          (e || (e = r("stylex"))).props(
                            m.divider,
                            o("WAWebUISpacing").uiMargin.horiz3,
                          ),
                          { children: "\xB7" },
                        ),
                      ),
                    U,
                  ],
                })
              : U || null
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
