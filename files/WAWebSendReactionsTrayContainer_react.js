__d(
  "WAWebSendReactionsTrayContainer.react",
  [
    "WAWebChatGetters",
    "WAWebDefaultReactions",
    "WAWebErrorBoundary.react",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebReactionActionsWamEvent",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebReactionsUtils",
    "WAWebSendReactionsTray.react",
    "WAWebSendReactionsTrayNewsletterContainer.react",
    "WAWebWamEnumReactionActionType",
    "WAWebWamMsgUtils",
    "react",
    "useVisibility",
    "useWAWebReactions",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["userJourneyEntryPoint"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState;
    function p(t) {
      var n = t.userJourneyEntryPoint,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = r("useVisibility")({
          onVisible: function () {
            o(
              "WAWebReactionUserJourneyLogger",
            ).ReactionUserJourneyLogger.trayOpen(
              o("WAWebFrontendMsgGetters").getChat(a.msg).id,
              a.msg,
              n,
            );
          },
        }),
        l = i[0];
      return o("WAWebChatGetters").getIsNewsletter(
        o("WAWebFrontendMsgGetters").getChat(a.msg),
      )
        ? o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionEnabled()
          ? u.jsx(
              o("WAWebSendReactionsTrayNewsletterContainer.react")
                .SendReactionsTrayNewsletterContainer,
              babelHelpers.extends({ ref: l }, a),
            )
          : null
        : u.jsx(_, babelHelpers.extends({ ref: l }, a));
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t,
        n = e.disableAutoFocus,
        a = e.isInlineMode,
        i = e.msg,
        l = e.onMouseEnter,
        s = e.onMouseLeave,
        c = e.onMouseOver,
        p = e.ref,
        _ = e.selectedCallback;
      d(
        function () {
          new (o("WAWebReactionActionsWamEvent").ReactionActionsWamEvent)({
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(i),
            messageType: o("WAWebWamMsgUtils").getWamMessageType(i),
            reactionAction: o("WAWebWamEnumReactionActionType")
              .REACTION_ACTION_TYPE.OPEN_TRAY,
          }).commit();
        },
        [i],
      );
      var f = m(null),
        g = f[0],
        h = f[1],
        y = function (t) {
          var e,
            n,
            r,
            a = t[0];
          if (!a) {
            h(null);
            return;
          }
          var i =
              (e = (n = a.reactionByMe) == null ? void 0 : n.reactionText) !=
              null
                ? e
                : "",
            l = o("WAWebReactionsUtils")
              .getReactionsForTray(
                o("WAWebDefaultReactions").DEFAULT_REACTIONS,
                (r = a.reactionByMe) == null ? void 0 : r.reactionText,
              )
              .indexOf(i);
          if (l === -1) {
            h(null);
            return;
          }
          h(l);
        },
        C = r("useWAWebReactions")([i.id.toString()], y),
        b = C.reactionsModels,
        v = function (t) {
          var e;
          if (
            b[0] &&
            t === ((e = b[0].reactionByMe) == null ? void 0 : e.reactionText)
          ) {
            _(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
            return;
          }
          _(t);
        },
        S = o("WAWebReactionsUtils").getReactionsForTray(
          o("WAWebDefaultReactions").DEFAULT_REACTIONS,
          (t = b[0]) == null || (t = t.reactionByMe) == null
            ? void 0
            : t.reactionText,
        ),
        R = S.length > o("WAWebDefaultReactions").DEFAULT_REACTIONS.length;
      return u.jsx("div", {
        ref: p,
        onMouseEnter: l,
        onMouseOver: c,
        onMouseLeave: s,
        children: u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
          name: "SendReactionsTrayContainer",
          children: u.jsx(o("WAWebSendReactionsTray.react").SendReactionsTray, {
            isInlineMode: a,
            selectedIndex: g,
            selectedCallback: v,
            reactions: S,
            showMoreOption: !R,
            isParentMsgSentByMe: o("WAWebMsgGetters").getIsSentByMe(i),
            disableAutoFocus: n,
          }),
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.SendReactionsTrayContainer = p));
  },
  98,
);
