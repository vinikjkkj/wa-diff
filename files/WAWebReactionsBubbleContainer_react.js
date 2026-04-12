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
      var t = e.msgIds,
        n = e.onDetailsPaneClosed,
        a = e.reactionBubbleType,
        i = t.map(function (e) {
          return o("WAWebMsgCollection").MsgCollection.get(e);
        }),
        l = m(i);
      if (l != null)
        return o(
          "WAWebNewsletterExtendedGatingUtils",
        ).isNewsletterReactionEnabled()
          ? s.jsx(r("WAWebNewsletterReactionsBubbleContainer.react"), {
              reactionBubbleVisible: !0,
              msgs: l,
              onDetailsPaneClosed: n,
              reactionBubbleType: a,
            })
          : null;
      if (t.length === 1) {
        var u = i[0];
        if (u != null && !o("WAWebReactionsBEUtils").canHaveReactions(u))
          return null;
      }
      return s.jsx(_, babelHelpers.extends({}, e));
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.displayType,
        n = e.hasReaction,
        a = e.isOutgoingMsg,
        i = e.msgIds,
        l = e.onDetailsPaneClosed,
        u = e.reactionBubbleType,
        c = e.reactionBubbleVisible,
        m = c === void 0 ? !0 : c,
        p = d(),
        _ = p[0],
        f = p[1],
        g = d(),
        h = g[0],
        y = g[1],
        C = o("WAWebMarkAddOnsAsReadAction").useMarkAddOnsAsRead(),
        b = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_reactions_2",
        ),
        v = function (t) {
          var e = r("lodash").flatten(
            t.map(function (e) {
              return e.unreadSenders();
            }),
          );
          (C({
            addOnType: o("WAWebMessageAddOnType").MessageAddOnType.Reaction,
            addOns: e.map(function (e) {
              return {
                msgKey: r("WAWebMsgKey").from(e.msgKey),
                sender: e.senderUserJid,
              };
            }),
          }),
            u !== o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER &&
              o("WAWebReactionsUtils").lastMessageReactionChange(i));
        },
        S = r("useWAWebReactions")(i, v, n),
        R = S.isFirstData,
        L = S.numberOfSenderReactions,
        E = S.reactionArrayEmojis,
        k = S.reactionsModels,
        I = function () {
          (l == null || l(),
            f(null),
            o(
              "WAWebReactionUserJourneyLogger",
            ).ReactionUserJourneyLogger.detailsDismiss());
        },
        T = function () {
          y(null);
        },
        D = function () {
          return b
            ? s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                name: "DetailsPane",
                children: s.jsx(r("WAWebReactionDetailsPaneV2.react"), {
                  onCloseDetailsPane: I,
                  onOpenEmojiPicker: y,
                  onCloseEmojiPicker: T,
                  msgIds: i,
                  reactionsModels: k,
                  isAggregated: i.length > 1,
                }),
              })
            : s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                name: "DetailsPane",
                children: s.jsx(r("WAWebReactionDetailsPane.react"), {
                  onCloseDetailsPane: I,
                  onEmpty: I,
                  msgIds: i,
                  reactionsModels: k,
                  isAggregated: i.length > 1,
                }),
              });
        },
        x = function (n) {
          var e;
          (n.preventDefault(), n.stopPropagation());
          var r = D(),
            l = o("WAWebMsgCollection").MsgCollection.get(i[0]),
            s = l != null ? o("WAWebFrontendMsgGetters").getChat(l) : null;
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
          (l != null &&
            s != null &&
            o(
              "WAWebReactionUserJourneyLogger",
            ).ReactionUserJourneyLogger.reactionDetails(
              s.id,
              l,
              o("WAWebWamEnumReactionUserJourneyEntryPoint")
                .REACTION_USER_JOURNEY_ENTRY_POINT.EXISTING_REACTION_CTA,
            ),
            f({
              menu: r,
              dirY: o("WAWebDropdown.react").DirY.BOTTOM,
              dirX:
                a && !o("WAWebDisplayType").isWideDisplay(t)
                  ? o("WAWebDropdown.react").DirX.LEFT
                  : o("WAWebDropdown.react").DirX.RIGHT,
              type: o("WAWebDropdown.react").MenuType.ReactionDetailsPane,
              anchor: n.target,
              flipOnRtl: !0,
            }));
        },
        $ = { enter: x, space: x };
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(r("WAWebReactionsBubbleWrapper.react"), {
            handlers: $,
            isFirstData: R,
            openDetailsPane: x,
            detailsPane: _,
            closeDetailsPane: I,
            hasReaction: !!n,
            numberOfSenderReactions: L,
            reactionBubbleVisible: m,
            reactionArrayEmojis: E,
          }),
          h &&
            s.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ReactionEmojiPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: T,
              children: s.jsx(r("WAWebUimUieMenu.react"), { contextMenu: h }),
            }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t) {
      return r("lodash").isEqual(e, t);
    }
    var g = c(p, f);
    l.ReactionBubbleContainer = g;
  },
  98,
);
