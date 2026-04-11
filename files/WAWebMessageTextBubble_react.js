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
    "react-compiler-runtime",
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
        i = o("react-compiler-runtime").c(59),
        l = t.isFollowUpReply,
        s = t.msg,
        d;
      if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
        var p;
        ((d = [
          (p = o("WAWebMsgGetters")).getIsGroupMsg,
          p.getIsPSA,
          p.getIsSentByMe,
          o("WAWebFrontendMsgGetters").getSenderObj,
          p.getSender,
          p.getType,
          p.getActiveBotMsgStreamingInProgress,
          p.getUnifiedResponse,
        ]),
          (i[0] = d));
      } else d = i[0];
      var _ = o("useWAWebMsgValues").useMsgValues(t.msg.id, d),
        f = _[3],
        g = _[4],
        h = _[5],
        y = _[6],
        C = _[7],
        b,
        v,
        S,
        R,
        L,
        E,
        k;
      if (
        i[1] !== y ||
        i[2] !== l ||
        i[3] !== s ||
        i[4] !== t.authorRole ||
        i[5] !== t.displayAuthor ||
        i[6] !== t.displayType ||
        i[7] !== t.hideMeta ||
        i[8] !== t.theme ||
        i[9] !== t.useFixedWidth ||
        i[10] !== t.xstyle ||
        i[11] !== g ||
        i[12] !== f ||
        i[13] !== h ||
        i[14] !== C
      ) {
        var I,
          T,
          D = r("WAWebL10N").isRTL(),
          x = o("WAWebFrontendMsgGetters").getChat(s.unsafe()),
          $ = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(x),
          P = o("WAWebDisplayType").isWideDisplay(t.displayType),
          N = o("WAWebUnifiedResponseUtils").isImagineResponse(C),
          M;
        N
          ? (M = c.imagineUR)
          : h === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
              h === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT
            ? (M = c.pollCreation)
            : h === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION
              ? (M = [
                  o("WAWebUISpacing").uiPadding.horiz3,
                  o("WAWebUISpacing").uiPadding.top3,
                  o("WAWebUISpacing").uiPadding.bottom8,
                ])
              : h === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
                ? (M = o("WAWebUISpacing").uiPadding.all0)
                : $
                  ? (M = c.elevatedPushNames)
                  : (M = c.regular);
        var w = s.unsafe(),
          A = w.botGroupParticipant,
          F =
            g != null &&
            o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(g) &&
            (o("WAWebChatGroupUtils").isAIGroupTee(x) ||
              (A != null && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(A)));
        ((S = (e || (e = r("stylex")))(
          c.bubble,
          o("WAWebMsgGetters").getIsPSA(s) && c.isPSA,
          t.theme === "portrait" && !P && c.portrait,
          t.theme === "landscape" && !P && c.landscape,
          P && c.announcement,
          t.useFixedWidth === !0 && !N && c.fixedWidth,
          M,
          F && c.bubbleWithTeeLockIcon,
          t.xstyle,
        )),
          (R = N
            ? {
                width: o("WAWebMessageCropping").IMAGINE_UR_WIDTH,
                maxWidth: "100%",
              }
            : void 0));
        var O;
        if (
          i[22] !== x ||
          i[23] !== s ||
          i[24] !== t.authorRole ||
          i[25] !== t.displayAuthor ||
          i[26] !== t.displayType ||
          i[27] !== f
        ) {
          var B, W;
          ((O = t.displayAuthor
            ? u.jsx(r("WAWebMessageAuthor.react"), {
                role: t.authorRole,
                msg: s,
                contact: f,
                displayType: t.displayType,
                disableClick:
                  ((B = s.author) == null ? void 0 : B.isLid()) &&
                  ((W = x.groupMetadata) == null ? void 0 : W.groupType) ===
                    o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
              })
            : null),
            (i[22] = x),
            (i[23] = s),
            (i[24] = t.authorRole),
            (i[25] = t.displayAuthor),
            (i[26] = t.displayType),
            (i[27] = f),
            (i[28] = O));
        } else O = i[28];
        var q = O,
          U;
        i[29] !== F || i[30] !== g
          ? ((U =
              F && g != null
                ? o("WAWebBotFrontendUtils").getMetaAiTEEBotSecondaryLine(g)
                : null),
            (i[29] = F),
            (i[30] = g),
            (i[31] = U))
          : (U = i[31]);
        var V = U,
          H;
        (i[32] !== q || i[33] !== F || i[34] !== V
          ? ((H =
              q != null && F
                ? u.jsxs("div", {
                    className: "x6s0dn4 x78zum5 x1qughib",
                    children: [
                      u.jsxs("div", {
                        className: "x1pha0wt x78zum5",
                        children: [
                          q,
                          u.jsx("span", {
                            className: "xhslqc4 x2lah0s x1pg5gke x1wbi8v6",
                            children: V,
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className:
                          "x14ug900 x2lah0s x1iildab x13fj5qh x1ci9iwe",
                        children: u.jsx(
                          r(
                            "WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react",
                          ),
                          { height: 16, width: 16 },
                        ),
                      }),
                    ],
                  })
                : q),
            (i[32] = q),
            (i[33] = F),
            (i[34] = V),
            (i[35] = H))
          : (H = i[35]),
          (b = H));
        var G;
        (i[36] !== s
          ? ((G = o("WAWebMsgSelectors").showForwarded(s)
              ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
                  msg: s.unsafe(),
                  xstyle:
                    s.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK &&
                    c.forwardedIndicator,
                })
              : null),
            (i[36] = s),
            (i[37] = G))
          : (G = i[37]),
          (L = G));
        var z;
        (i[38] !== s
          ? ((z = u.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
              msg: s,
            })),
            (i[38] = s),
            (i[39] = z))
          : (z = i[39]),
          (k = z));
        var j;
        if (
          (i[40] !== s
            ? ((j = u.jsx(r("WAWebMessageDisclaimerText.react"), { msg: s })),
              (i[40] = s),
              (i[41] = j))
            : (j = i[41]),
          (v = j),
          (E = null),
          o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
            (I = s.ctwaContext) == null ? void 0 : I.sourceApp,
            s.type,
            (T = s.ctwaContext) == null
              ? void 0
              : T.automatedGreetingMessageShown,
          ))
        )
          E = null;
        else if (
          y === !0 &&
          (h === o("WAWebMsgType").MSG_TYPE.CHAT ||
            o("WAWebCommonMsgUtils").isSomewhatParsedRichResponseMsg(
              s.unsafe(),
            ))
        ) {
          var K;
          (i[42] === Symbol.for("react.memo_cache_sentinel")
            ? ((K = u.jsx(r("WAWebMessageBubbleTypingIndicator.react"), {
                isBotMsgStreaming: !0,
              })),
              (i[42] = K))
            : (K = i[42]),
            (E = K));
        } else if (
          t.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY &&
          t.hideMeta !== !0
        ) {
          var Q;
          (i[43] !== l || i[44] !== s || i[45] !== t.displayType
            ? ((Q = u.jsx(o("WAWebMessageMeta.react").Meta, {
                msg: s,
                displayType: t.displayType,
                isFollowUpReply: l,
              })),
              (i[43] = l),
              (i[44] = s),
              (i[45] = t.displayType),
              (i[46] = Q))
            : (Q = i[46]),
            (E = u.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  c.meta,
                  o("WAWebMsgGetters").getIsPSA(s) &&
                    o("WAWebUISpacing").uiMargin.top4,
                  D && c.metaForRTLMsg,
                  o("WAWebBotGating").showBotSearchPlugin(s.unsafe()) &&
                    c.metaAi,
                  N && c.metaForImagineUR,
                ),
                { children: Q },
              ),
            )));
        }
        ((i[1] = y),
          (i[2] = l),
          (i[3] = s),
          (i[4] = t.authorRole),
          (i[5] = t.displayAuthor),
          (i[6] = t.displayType),
          (i[7] = t.hideMeta),
          (i[8] = t.theme),
          (i[9] = t.useFixedWidth),
          (i[10] = t.xstyle),
          (i[11] = g),
          (i[12] = f),
          (i[13] = h),
          (i[14] = C),
          (i[15] = b),
          (i[16] = v),
          (i[17] = S),
          (i[18] = R),
          (i[19] = L),
          (i[20] = E),
          (i[21] = k));
      } else
        ((b = i[15]),
          (v = i[16]),
          (S = i[17]),
          (R = i[18]),
          (L = i[19]),
          (E = i[20]),
          (k = i[21]));
      var X;
      i[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = r("WAWebEnvironment").isWindows && { onDragStart: m }),
          (i[47] = X))
        : (X = i[47]);
      var Y = (n = t.ariaLabel) != null ? n : void 0,
        J = (a = t.testid) != null ? a : void 0,
        Z;
      return (
        i[48] !== b ||
        i[49] !== v ||
        i[50] !== S ||
        i[51] !== R ||
        i[52] !== L ||
        i[53] !== E ||
        i[54] !== k ||
        i[55] !== t.children ||
        i[56] !== Y ||
        i[57] !== J
          ? ((Z = u.jsxs(
              "div",
              babelHelpers.extends({}, X, {
                "aria-label": Y,
                className: S,
                style: R,
                "data-testid": void 0,
                children: [b, L, v, k, t.children, E],
              }),
            )),
            (i[48] = b),
            (i[49] = v),
            (i[50] = S),
            (i[51] = R),
            (i[52] = L),
            (i[53] = E),
            (i[54] = k),
            (i[55] = t.children),
            (i[56] = Y),
            (i[57] = J),
            (i[58] = Z))
          : (Z = i[58]),
        Z
      );
    }
    function m(e) {
      return (e.preventDefault(), !1);
    }
    l.default = d;
  },
  98,
);
