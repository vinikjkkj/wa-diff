__d(
  "WAWebMessageStickerLikeBubbleContainer.react",
  [
    "cx",
    "WAWebAddOnBubbleRenderUtils",
    "WAWebAddOnBubbleType",
    "WAWebAddOnBubblesContainer.react",
    "WAWebBizCtwaContext.react",
    "WAWebClassnames",
    "WAWebDisplayType",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAuthor.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMessagePosition",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgSelectors",
    "WAWebNewsletterGatingUtils",
    "WAWebStopEvent",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebMsgValues",
    "useWAWebSendViewCount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useImperativeHandle,
      _ = m.useRef,
      f = {
        wrapper: {
          boxSizing: "x9f619",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingTop: "x16ovd2e",
          position: "x1n2onr6",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        bubbleZIndex: { zIndex: "x1vjfegm", $$css: !0 },
        groupHistoryMessage: { backgroundColor: "x1fast2d", $$css: !0 },
      };
    function g(t) {
      var n,
        a,
        i,
        l = t.ref,
        s = babelHelpers.objectWithoutPropertiesLoose(t, e),
        c = _(null),
        m = _(null),
        g = s.displayType,
        h = s.isGroupedSticker,
        y = h === void 0 ? !1 : h,
        C = s.msg,
        b = s.msgContent,
        v = o("useWAWebMsgValues").useMsgValues(s.msg.id, [
          o("WAWebMsgGetters").getId,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebMsgGetters").getIsGroupMsg,
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebMsgGetters").getHasReaction,
          o("WAWebFrontendMsgGetters").getIsTransparentMsg,
          o("WAWebFrontendMsgGetters").getIsTransparentMsgEmoji,
          o("WAWebMsgGetters").getGroupHistoryBundleMessageKey,
        ]),
        S = v[0],
        R = v[1],
        L = v[2],
        E = v[3],
        k = v[4],
        I = v[5],
        T = v[6],
        D = v[7];
      p(l, function () {
        return {
          getAnchorRef: function () {
            return c;
          },
          getMetaRef: function () {
            return m;
          },
        };
      });
      var x = o("useWAWebSendViewCount").useSendViewCount(C.id, {
          mediaData: s.mediaData,
          displayType: s.displayType,
        }),
        $ = o("WAWebDisplayType").isWideDisplay(g),
        P =
          o("WAWebMsgSelectors").showForwarded(C) &&
          o("WAWebMsgGetters").getHasOriginatedFromNewsletter(C) &&
          !T,
        N =
          P &&
          o("WAWebNewsletterGatingUtils").isStickerForwardedAttributionEnabled()
            ? d.jsx(r("WAWebMessageForwardedIndicator.react"), {
                msg: C.unsafe(),
              })
            : null,
        M = d.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
          msg: C,
        }),
        w = P ? void 0 : "center",
        A = P ? "end" : void 0,
        F = s.displayAuthor
          ? d.jsx("div", {
              ref: c,
              className: "_am2m",
              children: d.jsx(r("WAWebMessageAuthor.react"), {
                msg: C,
                contact: E,
                displayType: g,
              }),
            })
          : null,
        O =
          s.displayCtwaContext === !0
            ? d.jsx(r("WAWebBizCtwaContext.react"), {
                msg: C.unsafe(),
                wrapperClass: "_am2n",
              })
            : null,
        B = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          P && "x9f619 x1racca4 xahult9",
          ((n = {}), (n._am2o = !P), (n["_aof-"] = !$), n),
        ),
        W = s.quotedMsg
          ? d.jsx("div", { className: B, children: s.quotedMsg })
          : null,
        q = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((a = {}),
          (a._am2p = s.displayAuthor),
          (a._am2q =
            !$ &&
            (s.position === o("WAWebMessagePosition").MsgPosition.FRONT ||
              s.position === o("WAWebMessagePosition").MsgPosition.SINGLE)),
          (a._am2r = I),
          (a._am2s = !P),
          (a._amee = $ && !y),
          a),
        ),
        U = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((i = {}),
          (i._am2u = !0),
          (i._amef = $),
          (i._aoyn = $),
          (i._ar8h = T),
          i),
        ),
        V = o("WAWebMsgCollection").MsgCollection.get(S),
        H = null;
      I &&
        (g === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION || $) &&
        V != null &&
        (H = d.jsx(
          "div",
          babelHelpers.extends(
            {},
            (u || (u = r("stylex"))).props(
              o("WAWebUISpacing").uiMargin.startAuto,
            ),
            {
              children: d.jsx(r("WAWebAddOnBubblesContainer.react"), {
                isOutgoingMsg: R,
                displayType: g,
                bubbleType: o("WAWebAddOnBubbleType").AddOnBubbleType
                  .STICKER_LIKE_MSG,
                parentIds: [V.id.toString()],
                onDetailsPaneClosed: s.onDetailsPaneClosed,
                hasReaction: k,
              }),
            },
          ),
        ));
      var G = d.jsx(o("WAWebMessageMeta.react").MetaWrapper, {
        isSentByMe: R,
        isTransparent: I,
        displayType: g,
        ref: m,
        xstyle: D != null && f.groupHistoryMessage,
        children: d.jsx(o("WAWebMessageMeta.react").Meta, { msg: C }),
      });
      return d.jsxs("div", {
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          q,
          (u || (u = r("stylex")))(
            f.bubbleZIndex,
            (P || !I) && f.wrapper,
            s.bubbleStyle,
          ),
        ),
        onClick: o("WAWebStopEvent").stopPropagation,
        ref: x,
        children: [
          F,
          N,
          M,
          W,
          O,
          d.jsx("div", { className: U, children: b }),
          I && o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(g)
            ? d.jsxs(o("WAWebFlex.react").FlexRow, {
                alignSelf: A,
                justifySelf: w,
                columnGap: 2,
                children: [H, G],
              })
            : d.jsxs(o("WAWebFlex.react").FlexColumn, { children: [G, H] }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
