__d(
  "WAWebSendReactionsTrayNewsletterContainer.react",
  [
    "WAWebDefaultReactions",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebReactionsBEUtils",
    "WAWebReactionsUtils",
    "WAWebSendReactionsTray.react",
    "react",
    "useWAWebNewsletterReactions",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m(e) {
      var t = e.disableAutoFocus,
        n = t === void 0 ? !1 : t,
        a = e.isInlineMode,
        i = e.msg,
        l = e.onMouseEnter,
        u = e.onMouseLeave,
        m = e.onMouseOver,
        p = e.ref,
        _ = e.selectedCallback,
        f = r("useWAWebNewsletterReactions")([i.id]),
        g = f[0],
        h = d(null),
        y = h[0],
        C = h[1],
        b = function (t) {
          if (t === (g == null ? void 0 : g.myReaction))
            return (
              C(null),
              _(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT)
            );
          (C(
            o("WAWebReactionsUtils")
              .getReactionsForTray(
                o("WAWebDefaultReactions").DEFAULT_REACTIONS,
                g == null ? void 0 : g.myReaction,
              )
              .indexOf(t),
          ),
            _(t));
        };
      c(
        function () {
          var e = g == null ? void 0 : g.myReaction;
          C(
            e != null
              ? o("WAWebReactionsUtils")
                  .getReactionsForTray(
                    o("WAWebDefaultReactions").DEFAULT_REACTIONS,
                    e,
                  )
                  .indexOf(e)
              : null,
          );
        },
        [g == null ? void 0 : g.myReaction],
      );
      var v = o("WAWebReactionsUtils").getReactionsForTray(
          o("WAWebDefaultReactions").DEFAULT_REACTIONS,
          g == null ? void 0 : g.myReaction,
        ),
        S = o("WAWebFrontendMsgGetters").getChat(i);
      return s.jsx("div", {
        ref: p,
        onMouseEnter: l,
        onMouseOver: m,
        onMouseLeave: u,
        children: s.jsx(o("WAWebSendReactionsTray.react").SendReactionsTray, {
          isInlineMode: a,
          selectedIndex: y,
          selectedCallback: b,
          reactions: v,
          showMoreOption: o(
            "WAWebNewsletterGatingUtils",
          ).shouldShowAllReactionsForNewsletter(S),
          disableAutoFocus: n,
          isParentMsgSentByMe: o("WAWebMsgGetters").getIsSentByMe(i),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.SendReactionsTrayNewsletterContainer = m));
  },
  98,
);
