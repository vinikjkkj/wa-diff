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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(80),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = _(null),
        s = _(null),
        c = a,
        m = c.displayType,
        g = c.isGroupedSticker,
        h = c.msg,
        y = c.msgContent,
        C = g === void 0 ? !1 : g,
        b;
      if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
        var v;
        ((b = [
          (v = o("WAWebMsgGetters")).getId,
          v.getIsSentByMe,
          v.getIsGroupMsg,
          o("WAWebFrontendMsgGetters").getSenderObj,
          v.getHasReaction,
          o("WAWebFrontendMsgGetters").getIsTransparentMsg,
          o("WAWebFrontendMsgGetters").getIsTransparentMsgEmoji,
          v.getGroupHistoryBundleMessageKey,
        ]),
          (n[3] = b));
      } else b = n[3];
      var S = o("useWAWebMsgValues").useMsgValues(a.msg.id, b),
        R = S[0],
        L = S[1],
        E = S[3],
        k = S[4],
        I = S[5],
        T = S[6],
        D = S[7],
        x;
      (n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function () {
            return {
              getAnchorRef: function () {
                return l;
              },
              getMetaRef: function () {
                return s;
              },
            };
          }),
          (n[4] = x))
        : (x = n[4]),
        p(i, x));
      var $;
      n[5] !== a.displayType || n[6] !== a.mediaData
        ? (($ = { mediaData: a.mediaData, displayType: a.displayType }),
          (n[5] = a.displayType),
          (n[6] = a.mediaData),
          (n[7] = $))
        : ($ = n[7]);
      var P = o("useWAWebSendViewCount").useSendViewCount(h.id, $),
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V;
      if (
        n[8] !== m ||
        n[9] !== D ||
        n[10] !== k ||
        n[11] !== R ||
        n[12] !== C ||
        n[13] !== L ||
        n[14] !== I ||
        n[15] !== T ||
        n[16] !== h ||
        n[17] !== a.bubbleStyle ||
        n[18] !== a.displayAuthor ||
        n[19] !== a.displayCtwaContext ||
        n[20] !== a.onDetailsPaneClosed ||
        n[21] !== a.position ||
        n[22] !== a.quotedMsg ||
        n[23] !== E
      ) {
        var H,
          G,
          z,
          j = o("WAWebDisplayType").isWideDisplay(m),
          K =
            o("WAWebMsgSelectors").showForwarded(h) &&
            o("WAWebMsgGetters").getHasOriginatedFromNewsletter(h) &&
            !T;
        O =
          K &&
          o("WAWebNewsletterGatingUtils").isStickerForwardedAttributionEnabled()
            ? d.jsx(r("WAWebMessageForwardedIndicator.react"), {
                msg: h.unsafe(),
              })
            : null;
        var Q;
        (n[35] !== h
          ? ((Q = d.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
              msg: h,
            })),
            (n[35] = h),
            (n[36] = Q))
          : (Q = n[36]),
          (q = Q),
          (B = K ? void 0 : "center"),
          (M = K ? "end" : void 0));
        var X;
        (n[37] !== m || n[38] !== h || n[39] !== a.displayAuthor || n[40] !== E
          ? ((X = a.displayAuthor
              ? d.jsx("div", {
                  ref: l,
                  className: "_am2m",
                  children: d.jsx(r("WAWebMessageAuthor.react"), {
                    msg: h,
                    contact: E,
                    displayType: m,
                  }),
                })
              : null),
            (n[37] = m),
            (n[38] = h),
            (n[39] = a.displayAuthor),
            (n[40] = E),
            (n[41] = X))
          : (X = n[41]),
          (w = X));
        var Y;
        (n[42] !== h || n[43] !== a.displayCtwaContext
          ? ((Y =
              a.displayCtwaContext === !0
                ? d.jsx(r("WAWebBizCtwaContext.react"), {
                    msg: h.unsafe(),
                    wrapperClass: "_am2n",
                  })
                : null),
            (n[42] = h),
            (n[43] = a.displayCtwaContext),
            (n[44] = Y))
          : (Y = n[44]),
          (F = Y));
        var J = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          K && "x9f619 x1racca4 xahult9",
          ((H = {}), (H._am2o = !K), (H["_aof-"] = !j), H),
        );
        U = a.quotedMsg
          ? d.jsx("div", { className: J, children: a.quotedMsg })
          : null;
        var Z = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((G = {}),
          (G._am2p = a.displayAuthor),
          (G._am2q =
            !j &&
            (a.position === o("WAWebMessagePosition").MsgPosition.FRONT ||
              a.position === o("WAWebMessagePosition").MsgPosition.SINGLE)),
          (G._am2r = I),
          (G._am2s = !K),
          (G._amee = j && !C),
          G),
        );
        A = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((z = {}),
          (z._am2u = !0),
          (z._amef = j),
          (z._aoyn = j),
          (z._ar8h = T),
          z),
        );
        var ee = o("WAWebMsgCollection").MsgCollection.get(R);
        if (
          ((N = null),
          I &&
            (m === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION || j) &&
            ee != null)
        ) {
          var te;
          n[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((te = (u || (u = r("stylex"))).props(
                o("WAWebUISpacing").uiMargin.startAuto,
              )),
              (n[45] = te))
            : (te = n[45]);
          var ne = [ee.id.toString()],
            re;
          (n[46] !== m ||
          n[47] !== k ||
          n[48] !== L ||
          n[49] !== a.onDetailsPaneClosed ||
          n[50] !== ne
            ? ((re = d.jsx(
                "div",
                babelHelpers.extends({}, te, {
                  children: d.jsx(r("WAWebAddOnBubblesContainer.react"), {
                    isOutgoingMsg: L,
                    displayType: m,
                    bubbleType: o("WAWebAddOnBubbleType").AddOnBubbleType
                      .STICKER_LIKE_MSG,
                    parentIds: ne,
                    onDetailsPaneClosed: a.onDetailsPaneClosed,
                    hasReaction: k,
                  }),
                }),
              )),
              (n[46] = m),
              (n[47] = k),
              (n[48] = L),
              (n[49] = a.onDetailsPaneClosed),
              (n[50] = ne),
              (n[51] = re))
            : (re = n[51]),
            (N = re));
        }
        var oe = D != null && f.groupHistoryMessage,
          ae;
        n[52] !== h
          ? ((ae = d.jsx(o("WAWebMessageMeta.react").Meta, { msg: h })),
            (n[52] = h),
            (n[53] = ae))
          : (ae = n[53]);
        var ie;
        (n[54] !== m ||
        n[55] !== L ||
        n[56] !== I ||
        n[57] !== ae ||
        n[58] !== oe
          ? ((ie = d.jsx(o("WAWebMessageMeta.react").MetaWrapper, {
              isSentByMe: L,
              isTransparent: I,
              displayType: m,
              ref: s,
              xstyle: oe,
              children: ae,
            })),
            (n[54] = m),
            (n[55] = L),
            (n[56] = I),
            (n[57] = ae),
            (n[58] = oe),
            (n[59] = ie))
          : (ie = n[59]),
          (W = ie),
          (V = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            Z,
            (u || (u = r("stylex")))(
              f.bubbleZIndex,
              (K || !I) && f.wrapper,
              a.bubbleStyle,
            ),
          )),
          (n[8] = m),
          (n[9] = D),
          (n[10] = k),
          (n[11] = R),
          (n[12] = C),
          (n[13] = L),
          (n[14] = I),
          (n[15] = T),
          (n[16] = h),
          (n[17] = a.bubbleStyle),
          (n[18] = a.displayAuthor),
          (n[19] = a.displayCtwaContext),
          (n[20] = a.onDetailsPaneClosed),
          (n[21] = a.position),
          (n[22] = a.quotedMsg),
          (n[23] = E),
          (n[24] = N),
          (n[25] = M),
          (n[26] = w),
          (n[27] = A),
          (n[28] = F),
          (n[29] = O),
          (n[30] = B),
          (n[31] = W),
          (n[32] = q),
          (n[33] = U),
          (n[34] = V));
      } else
        ((N = n[24]),
          (M = n[25]),
          (w = n[26]),
          (A = n[27]),
          (F = n[28]),
          (O = n[29]),
          (B = n[30]),
          (W = n[31]),
          (q = n[32]),
          (U = n[33]),
          (V = n[34]));
      var le;
      n[60] !== A || n[61] !== y
        ? ((le = d.jsx("div", { className: A, children: y })),
          (n[60] = A),
          (n[61] = y),
          (n[62] = le))
        : (le = n[62]);
      var se;
      n[63] !== N ||
      n[64] !== M ||
      n[65] !== m ||
      n[66] !== I ||
      n[67] !== B ||
      n[68] !== W
        ? ((se =
            I && o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(m)
              ? d.jsxs(o("WAWebFlex.react").FlexRow, {
                  alignSelf: M,
                  justifySelf: B,
                  columnGap: 2,
                  children: [N, W],
                })
              : d.jsxs(o("WAWebFlex.react").FlexColumn, { children: [W, N] })),
          (n[63] = N),
          (n[64] = M),
          (n[65] = m),
          (n[66] = I),
          (n[67] = B),
          (n[68] = W),
          (n[69] = se))
        : (se = n[69]);
      var ue;
      return (
        n[70] !== w ||
        n[71] !== F ||
        n[72] !== O ||
        n[73] !== q ||
        n[74] !== U ||
        n[75] !== P ||
        n[76] !== V ||
        n[77] !== le ||
        n[78] !== se
          ? ((ue = d.jsxs("div", {
              className: V,
              onClick: o("WAWebStopEvent").stopPropagation,
              ref: P,
              children: [w, O, q, U, F, le, se],
            })),
            (n[70] = w),
            (n[71] = F),
            (n[72] = O),
            (n[73] = q),
            (n[74] = U),
            (n[75] = P),
            (n[76] = V),
            (n[77] = le),
            (n[78] = se),
            (n[79] = ue))
          : (ue = n[79]),
        ue
      );
    }
    l.default = g;
  },
  98,
);
