__d(
  "WAWebMessageTextBubble.react",
  [
    "WAWebBizCtwaAGMUtils",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatGroupUtils",
    "WAWebCommonMsgUtils",
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleTypingIndicator.react",
    "WAWebMessageCropping",
    "WAWebMessageDisclaimerText.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMsgGetters",
    "WAWebMsgSelectors",
    "WAWebMsgType",
    "WAWebUISpacing",
    "WAWebUnifiedResponseUtils",
    "WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        bubble: { boxSizing: "x9f619", userSelect: "x1hx0egp", $$css: !0 },
        portrait: { maxWidth: "xjqp5cu", $$css: !0 },
        landscape: { maxWidth: "x3vyiyz", $$css: !0 },
        announcement: { width: "x1yuel0x", $$css: !0 },
        fixedWidth: { width: "x1o095ql", maxWidth: "x193iq5w", $$css: !0 },
        meta: {
          position: "x1n2onr6",
          zIndex: "x1n327nk",
          float: "x18mqm2i",
          marginTop: "xhsvlbd",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xz62fqu",
          marginInlineStart: "x1wbi8v6",
          $$css: !0,
        },
        metaForImagineUR: {
          bottom: "xrb244j",
          insetInlineEnd: "xxx7yvo",
          left: null,
          right: null,
          $$css: !0,
        },
        metaForRTLMsg: { float: "xtrg13t", $$css: !0 },
        isPSA: { paddingBottom: "xcmr1wf", $$css: !0 },
        elevatedPushNames: {
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "xf159sx",
          paddingBottom: "xwib8y2",
          paddingInlineStart: "x7coems",
          $$css: !0,
        },
        pollCreation: {
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "xctv8m",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "xbm2j3o",
          $$css: !0,
        },
        regular: {
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "xizg8k",
          paddingInlineStart: "xu9hqtb",
          paddingBottom: "xwib8y2",
          $$css: !0,
        },
        imagineUR: {
          paddingTop: "xyqdw3p",
          paddingInlineEnd: "x1im30kd",
          paddingBottom: "xg8j3zb",
          paddingInlineStart: "x1djpfga",
          $$css: !0,
        },
        metaAi: {
          float: "xyen2ro",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        forwardedIndicator: {
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "x1bjonze",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x7coems",
          $$css: !0,
        },
        bubbleWithTeeLockIcon: {
          "--tee-lock-margin-end": "xdfy5ai",
          ":hover_--tee-lock-margin-end": "x1ii11e9",
          $$css: !0,
        },
      };
    function d(t) {
      var n,
        a,
        i,
        l,
        s,
        d,
        m,
        p = t.isFollowUpReply,
        _ = t.msg,
        f = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
          (m = o("WAWebMsgGetters")).getIsGroupMsg,
          m.getIsPSA,
          m.getIsSentByMe,
          o("WAWebFrontendMsgGetters").getSenderObj,
          m.getSender,
          m.getType,
          m.getActiveBotMsgStreamingInProgress,
          m.getUnifiedResponse,
        ]),
        g = f[0],
        h = f[1],
        y = f[2],
        C = f[3],
        b = f[4],
        v = f[5],
        S = f[6],
        R = f[7],
        L = r("WAWebL10N").isRTL(),
        E = o("WAWebFrontendMsgGetters").getChat(_.unsafe()),
        k = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(E),
        I = o("WAWebDisplayType").isWideDisplay(t.displayType),
        T = o("WAWebUnifiedResponseUtils").isImagineResponse(R),
        D;
      T
        ? (D = c.imagineUR)
        : v === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
            v === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT
          ? (D = c.pollCreation)
          : v === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION
            ? (D = [
                o("WAWebUISpacing").uiPadding.horiz3,
                o("WAWebUISpacing").uiPadding.top3,
                o("WAWebUISpacing").uiPadding.bottom8,
              ])
            : v === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
              ? (D = o("WAWebUISpacing").uiPadding.all0)
              : k
                ? (D = c.elevatedPushNames)
                : (D = c.regular);
      var x = _.unsafe(),
        $ = x.botGroupParticipant,
        P =
          b != null &&
          o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(b) &&
          (o("WAWebChatGroupUtils").isAIGroupTee(E) ||
            ($ != null && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid($))),
        N = (e || (e = r("stylex")))(
          c.bubble,
          o("WAWebMsgGetters").getIsPSA(_) && c.isPSA,
          t.theme === "portrait" && !I && c.portrait,
          t.theme === "landscape" && !I && c.landscape,
          I && c.announcement,
          t.useFixedWidth === !0 && !T && c.fixedWidth,
          D,
          P && c.bubbleWithTeeLockIcon,
          t.xstyle,
        ),
        M = T
          ? {
              width: o("WAWebMessageCropping").IMAGINE_UR_WIDTH,
              maxWidth: "100%",
            }
          : void 0,
        w = t.displayAuthor
          ? u.jsx(r("WAWebMessageAuthor.react"), {
              role: t.authorRole,
              msg: _,
              contact: C,
              displayType: t.displayType,
              disableClick:
                ((n = _.author) == null ? void 0 : n.isLid()) &&
                ((a = E.groupMetadata) == null ? void 0 : a.groupType) ===
                  o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
            })
          : null,
        A =
          P && b != null
            ? o("WAWebBotFrontendUtils").getMetaAiTEEBotSecondaryLine(b)
            : null,
        F =
          w != null && P
            ? u.jsxs("div", {
                className: "x6s0dn4 x78zum5 x1qughib",
                children: [
                  u.jsxs("div", {
                    className: "x1pha0wt x78zum5",
                    children: [
                      w,
                      u.jsx("span", {
                        className: "xhslqc4 x2lah0s x1pg5gke x1wbi8v6",
                        children: A,
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    className: "x14ug900 x2lah0s x1iildab x13fj5qh x1ci9iwe",
                    children: u.jsx(
                      r("WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react"),
                      { height: 16, width: 16 },
                    ),
                  }),
                ],
              })
            : w,
        O = o("WAWebMsgSelectors").showForwarded(_)
          ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
              msg: _.unsafe(),
              xstyle:
                _.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK &&
                c.forwardedIndicator,
            })
          : null,
        B = u.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
          msg: _,
        }),
        W = u.jsx(r("WAWebMessageDisclaimerText.react"), { msg: _ }),
        q = null;
      return (
        o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
          (i = _.ctwaContext) == null ? void 0 : i.sourceApp,
          _.type,
          (l = _.ctwaContext) == null
            ? void 0
            : l.automatedGreetingMessageShown,
        )
          ? (q = null)
          : S === !0 &&
              (v === o("WAWebMsgType").MSG_TYPE.CHAT ||
                o("WAWebCommonMsgUtils").isSomewhatParsedRichResponseMsg(
                  _.unsafe(),
                ))
            ? (q = u.jsx(r("WAWebMessageBubbleTypingIndicator.react"), {
                isBotMsgStreaming: !0,
              }))
            : t.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY &&
              t.hideMeta !== !0 &&
              (q = u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    c.meta,
                    o("WAWebMsgGetters").getIsPSA(_) &&
                      o("WAWebUISpacing").uiMargin.top4,
                    L && c.metaForRTLMsg,
                    o("WAWebBotGating").showBotSearchPlugin(_.unsafe()) &&
                      c.metaAi,
                    T && c.metaForImagineUR,
                  ),
                  {
                    children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                      msg: _,
                      displayType: t.displayType,
                      isFollowUpReply: p,
                    }),
                  },
                ),
              )),
        u.jsxs(
          "div",
          babelHelpers.extends(
            {},
            r("WAWebEnvironment").isWindows && {
              onDragStart: function (t) {
                return (t.preventDefault(), !1);
              },
            },
            {
              "aria-label": (s = t.ariaLabel) != null ? s : void 0,
              className: N,
              style: M,
              "data-testid": void 0,
              children: [F, O, W, B, t.children, q],
            },
          ),
        )
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
