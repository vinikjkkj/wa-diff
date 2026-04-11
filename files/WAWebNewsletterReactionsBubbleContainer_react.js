__d(
  "WAWebNewsletterReactionsBubbleContainer.react",
  [
    "WALogger",
    "WAWebAddOnBubbleType",
    "WAWebDropdown.react",
    "WAWebFrontendMsgGetters",
    "WAWebNewsletterReactionDetailsPane.react",
    "WAWebNewsletterReactionDetailsPaneV2.react",
    "WAWebNewsletterReactionFrontendUtils",
    "WAWebNewsletterSendReactionAction",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebReactionsBubbleWrapper.react",
    "WAWebReactionsUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebWamEnumReactionUserJourneyEntryPoint",
    "react",
    "useWAWebABPropConfigValue",
    "useWAWebEventTargetValue",
    "useWAWebNewsletterReactions",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useState;
    function _(t) {
      var n = t.msgs,
        a = t.onDetailsPaneClosed,
        i = t.reactionBubbleType,
        l = t.reactionBubbleVisible,
        s = n.map(function (e) {
          return e.id;
        }),
        c = p(),
        _ = c[0],
        f = c[1],
        g = p(),
        h = g[0],
        y = g[1],
        C = r("useWAWebNewsletterReactions")(s),
        b = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_reactions_2",
        ),
        v = s.join("-");
      m(
        function () {
          i !== o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER &&
            o("WAWebReactionsUtils").lastMessageReactionChange(
              n.map(function (e) {
                return e.id.toString();
              }),
            );
        },
        [v, i],
      );
      var S = r("useWAWebEventTargetValue")(
          C,
          ["change:myReaction", "change:reactionCountMapTs", "remove"],
          function () {
            return o(
              "WAWebNewsletterReactionFrontendUtils",
            ).aggregateAndSortReactions(C);
          },
        ),
        R = S.count,
        L = S.reactions,
        E = function () {
          (f(null),
            o(
              "WAWebReactionUserJourneyLogger",
            ).ReactionUserJourneyLogger.detailsDismiss());
        },
        k = d(function (t, n) {
          (n === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT && E(),
            o("WAWebNewsletterSendReactionAction")
              .sendNewsletterReaction(t, n)
              .catch(function (t) {
                return o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to react",
                    ])),
                );
              }));
        }, []),
        I = function () {
          y(null);
        },
        T = function (t) {
          (t.preventDefault(), t.stopPropagation());
          var e = o("WAWebFrontendMsgGetters").getChat(n[0]),
            a = b
              ? u.jsx(r("WAWebNewsletterReactionDetailsPaneV2.react"), {
                  multipleMsgs: n.length > 1,
                  reactionModels: C,
                  chat: e,
                  firstMsg: n[0],
                  onCloseDetailsPane: E,
                  onOpenEmojiPicker: y,
                  onCloseEmojiPicker: I,
                })
              : u.jsx(r("WAWebNewsletterReactionDetailsPane.react"), {
                  handleEmojiClick: k,
                  multipleMsgs: n.length > 1,
                  reactionModels: C,
                  chat: e,
                  firstMsg: n[0],
                  onCloseDetailsPane: E,
                });
          (n[0] != null &&
            e != null &&
            o(
              "WAWebReactionUserJourneyLogger",
            ).ReactionUserJourneyLogger.reactionDetails(
              e.id,
              n[0],
              o("WAWebWamEnumReactionUserJourneyEntryPoint")
                .REACTION_USER_JOURNEY_ENTRY_POINT.EXISTING_REACTION_CTA,
            ),
            f({
              menu: a,
              dirY: o("WAWebDropdown.react").DirY.BOTTOM,
              dirX: o("WAWebDropdown.react").DirX.RIGHT,
              anchor: t.target,
              flipOnRtl: !0,
              type: o("WAWebDropdown.react").MenuType.ReactionDetailsPane,
            }));
        },
        D = { enter: T, space: T };
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(r("WAWebReactionsBubbleWrapper.react"), {
            closeDetailsPane: E,
            detailsPane: _,
            handlers: D,
            hasReaction: L.length > 0,
            isFirstData: !0,
            numberOfSenderReactions: R,
            openDetailsPane: T,
            reactionArrayEmojis: L.map(function (e) {
              var t = e[0];
              return t;
            }).slice(0, o("WAWebReactionsUtils").getMaxReactionsInBubble()),
            reactionBubbleVisible: !!l,
          }),
          h &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ReactionEmojiPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: I,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: h }),
            }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
