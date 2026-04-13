__d(
  "WAWebReactionsBubbleContainer.react",
  [
    "WAWebAddOnBubbleType",
    "WAWebDisplayType",
    "WAWebDropdown.react",
    "WAWebErrorBoundary.react",
    "WAWebFrontendMsgGetters",
    "WAWebMarkAddOnsAsReadAction",
    "WAWebMessageAddOnType",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterReactionsBubbleContainer.react",
    "WAWebPnhCagDailyUtils",
    "WAWebReactionDetailsPane.react",
    "WAWebReactionDetailsPaneV2.react",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebReactionsBubbleWrapper.react",
    "WAWebReactionsUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebWamEnumReactionUserJourneyEntryPoint",
    "lodash",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebReactions",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.memo,
      d = u.useState;
    function m(e) {
      var t = e.filter(Boolean);
      return t.length > 0 &&
        t.every(function (e) {
          return e.id.remote.isNewsletter();
        })
        ? t
        : null;
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.msgIds,
        a = e.onDetailsPaneClosed,
        i = e.reactionBubbleType,
        l;
      if (t[0] !== n || t[1] !== a || t[2] !== i) {
        l = Symbol.for("react.early_return_sentinel");
        e: {
          var u = n.map(_),
            c = m(u);
          if (c != null) {
            if (
              !o(
                "WAWebNewsletterExtendedGatingUtils",
              ).isNewsletterReactionEnabled()
            ) {
              l = null;
              break e;
            }
            l = s.jsx(r("WAWebNewsletterReactionsBubbleContainer.react"), {
              reactionBubbleVisible: !0,
              msgs: c,
              onDetailsPaneClosed: a,
              reactionBubbleType: i,
            });
            break e;
          }
          if (n.length === 1) {
            var d = u[0];
            if (d != null && !o("WAWebReactionsBEUtils").canHaveReactions(d)) {
              l = null;
              break e;
            }
          }
        }
        ((t[0] = n), (t[1] = a), (t[2] = i), (t[3] = l));
      } else l = t[3];
      if (l !== Symbol.for("react.early_return_sentinel")) return l;
      var p;
      return (
        t[4] !== e
          ? ((p = s.jsx(f, babelHelpers.extends({}, e))),
            (t[4] = e),
            (t[5] = p))
          : (p = t[5]),
        p
      );
    }
    function _(e) {
      return o("WAWebMsgCollection").MsgCollection.get(e);
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(34),
        n = e.displayType,
        a = e.hasReaction,
        i = e.isOutgoingMsg,
        l = e.msgIds,
        u = e.onDetailsPaneClosed,
        c = e.reactionBubbleType,
        m = e.reactionBubbleVisible,
        p = m === void 0 ? !0 : m,
        _ = d(),
        f = _[0],
        y = _[1],
        C = d(),
        b = C[0],
        v = C[1],
        S = o("WAWebMarkAddOnsAsReadAction").useMarkAddOnsAsRead(),
        R = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_reactions_2",
        ),
        L;
      t[0] !== S || t[1] !== l || t[2] !== c
        ? ((L = function (t) {
            var e = r("lodash").flatten(t.map(h));
            (S({
              addOnType: o("WAWebMessageAddOnType").MessageAddOnType.Reaction,
              addOns: e.map(g),
            }),
              c !== o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER &&
                o("WAWebReactionsUtils").lastMessageReactionChange(l));
          }),
          (t[0] = S),
          (t[1] = l),
          (t[2] = c),
          (t[3] = L))
        : (L = t[3]);
      var E = L,
        k = r("useWAWebReactions")(l, E, a),
        I = k.isFirstData,
        T = k.numberOfSenderReactions,
        D = k.reactionArrayEmojis,
        x = k.reactionsModels,
        $;
      t[4] !== u
        ? (($ = function () {
            (u == null || u(),
              y(null),
              o(
                "WAWebReactionUserJourneyLogger",
              ).ReactionUserJourneyLogger.detailsDismiss());
          }),
          (t[4] = u),
          (t[5] = $))
        : ($ = t[5]);
      var P = $,
        N;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = function () {
            v(null);
          }),
          (t[6] = N))
        : (N = t[6]);
      var M = N,
        w;
      t[7] !== P || t[8] !== l || t[9] !== x || t[10] !== R
        ? ((w = function () {
            return R
              ? s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                  name: "DetailsPane",
                  children: s.jsx(r("WAWebReactionDetailsPaneV2.react"), {
                    onCloseDetailsPane: P,
                    onOpenEmojiPicker: v,
                    onCloseEmojiPicker: M,
                    msgIds: l,
                    reactionsModels: x,
                    isAggregated: l.length > 1,
                  }),
                })
              : s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                  name: "DetailsPane",
                  children: s.jsx(r("WAWebReactionDetailsPane.react"), {
                    onCloseDetailsPane: P,
                    onEmpty: P,
                    msgIds: l,
                    reactionsModels: x,
                    isAggregated: l.length > 1,
                  }),
                });
          }),
          (t[7] = P),
          (t[8] = l),
          (t[9] = x),
          (t[10] = R),
          (t[11] = w))
        : (w = t[11]);
      var A = w,
        F;
      t[12] !== n || t[13] !== A || t[14] !== i || t[15] !== l[0]
        ? ((F = function (t) {
            var e;
            (t.preventDefault(), t.stopPropagation());
            var r = A(),
              a = o("WAWebMsgCollection").MsgCollection.get(l[0]),
              s = a != null ? o("WAWebFrontendMsgGetters").getChat(a) : null;
            if (s != null && (e = s.groupMetadata) != null && e.isCag) {
              var u,
                c = (u = s.groupMetadata) == null ? void 0 : u.parentGroup;
              c &&
                o("WAWebPnhCagDailyUtils").incrementPnhDailyCount(
                  c,
                  o("WAWebPnhCagDailyUtils").PnhCagDailyMetricsType
                    .REACTION_OPEN_TRAY_COUNT,
                );
            }
            (a != null &&
              s != null &&
              o(
                "WAWebReactionUserJourneyLogger",
              ).ReactionUserJourneyLogger.reactionDetails(
                s.id,
                a,
                o("WAWebWamEnumReactionUserJourneyEntryPoint")
                  .REACTION_USER_JOURNEY_ENTRY_POINT.EXISTING_REACTION_CTA,
              ),
              y({
                menu: r,
                dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                dirX:
                  i && !o("WAWebDisplayType").isWideDisplay(n)
                    ? o("WAWebDropdown.react").DirX.LEFT
                    : o("WAWebDropdown.react").DirX.RIGHT,
                type: o("WAWebDropdown.react").MenuType.ReactionDetailsPane,
                anchor: t.target,
                flipOnRtl: !0,
              }));
          }),
          (t[12] = n),
          (t[13] = A),
          (t[14] = i),
          (t[15] = l[0]),
          (t[16] = F))
        : (F = t[16]);
      var O = F,
        B;
      t[17] !== O
        ? ((B = { enter: O, space: O }), (t[17] = O), (t[18] = B))
        : (B = t[18]);
      var W = B,
        q = !!a,
        U;
      t[19] !== P ||
      t[20] !== O ||
      t[21] !== f ||
      t[22] !== W ||
      t[23] !== I ||
      t[24] !== T ||
      t[25] !== D ||
      t[26] !== p ||
      t[27] !== q
        ? ((U = s.jsx(r("WAWebReactionsBubbleWrapper.react"), {
            handlers: W,
            isFirstData: I,
            openDetailsPane: O,
            detailsPane: f,
            closeDetailsPane: P,
            hasReaction: q,
            numberOfSenderReactions: T,
            reactionBubbleVisible: p,
            reactionArrayEmojis: D,
          })),
          (t[19] = P),
          (t[20] = O),
          (t[21] = f),
          (t[22] = W),
          (t[23] = I),
          (t[24] = T),
          (t[25] = D),
          (t[26] = p),
          (t[27] = q),
          (t[28] = U))
        : (U = t[28]);
      var V;
      t[29] !== b
        ? ((V =
            b &&
            s.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ReactionEmojiPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: M,
              children: s.jsx(r("WAWebUimUieMenu.react"), { contextMenu: b }),
            })),
          (t[29] = b),
          (t[30] = V))
        : (V = t[30]);
      var H;
      return (
        t[31] !== V || t[32] !== U
          ? ((H = s.jsxs(s.Fragment, { children: [U, V] })),
            (t[31] = V),
            (t[32] = U),
            (t[33] = H))
          : (H = t[33]),
        H
      );
    }
    function g(e) {
      return {
        msgKey: r("WAWebMsgKey").from(e.msgKey),
        sender: e.senderUserJid,
      };
    }
    function h(e) {
      return e.unreadSenders();
    }
    function y(e, t) {
      return r("lodash").isEqual(e, t);
    }
    var C = c(p, y);
    l.ReactionBubbleContainer = C;
  },
  98,
);
