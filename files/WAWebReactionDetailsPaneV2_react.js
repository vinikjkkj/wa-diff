__d(
  "WAWebReactionDetailsPaneV2.react",
  [
    "WAWebAddReactionPill.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebKeyboardRotateFocusModal.react",
    "WAWebKeyboardTabUtils",
    "WAWebMsgCollection",
    "WAWebNoop",
    "WAWebReactionDetailsList.react",
    "WAWebReactionDetailsPaneTitle.react",
    "WAWebReactionPillsContainer.react",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebReactionsUtils",
    "WAWebSendReactionMsgAction",
    "WAWebUserPrefsMeUser",
    "lodash",
    "react",
    "useLazyRef",
    "useWAWebFocusOnMount",
    "useWAWebReactionEmojiPicker",
    "useWAWebReactionPillOrder",
    "useWAWebReactions",
    "useWAWebSelectedReactions",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = u.useState;
    function p(e) {
      if (e == null || e.length === 0) return null;
      var t = o("WAWebMsgCollection").MsgCollection.get(e[0]);
      return t == null || !o("WAWebReactionsUtils").canReactToMessage(t)
        ? null
        : t;
    }
    var _ = function (t, n) {
      t === void 0 && (t = []);
      var e = r("lodash").intersectionWith(t, n, function (e, t) {
          return e.isEqual(t);
        }),
        o = r("lodash").differenceWith(n, t, function (e, t) {
          return e.isEqual(t);
        });
      return e.concat.apply(e, o);
    };
    function f(e, t) {
      var n = o("WAWebReactionsUtils").getReactionAggregates(e),
        r = [],
        a = [],
        i = [];
      n.forEach(function (e) {
        var t = e.reactionSenders;
        if (!(t.length <= 0)) {
          var n = !1;
          (t.forEach(function (e) {
            o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid)
              ? (a.push(e), (n = !0))
              : r.push(e);
          }),
            i.push({
              emoji: o("WAWebReactionsUtils").getReactionForDisplay(e),
              count: t.length,
              hasMyReaction: n,
            }));
        }
      });
      var l = _(t, r);
      return (l.unshift.apply(l, a), { allSenders: l, aggregates: i });
    }
    var g = { focusTrapContainer: { position: "x1n2onr6", $$css: !0 } };
    function h(e) {
      var t,
        n,
        a = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        i = d(null),
        l = d(null),
        u = (t = (n = e.msgIds) == null ? void 0 : n[0]) != null ? t : "",
        _ = r("useWAWebSelectedReactions")(u),
        h = m(function () {
          return f(e.reactionsModels).allSenders;
        }),
        y = h[0],
        C = h[1],
        b = m(function () {
          return f(e.reactionsModels).aggregates;
        }),
        v = b[0],
        S = b[1],
        R = r("useWAWebFocusOnMount")(),
        L = r("useWAWebReactionPillOrder")(v),
        E = p(e.msgIds),
        k = function (t) {
          var e = f(t, y),
            n = e.aggregates,
            r = e.allSenders,
            o = L(n);
          (C(r), S(o));
        };
      (r("useWAWebReactions")(e.msgIds, k),
        c(
          function () {
            y.length === 0 && (e.onEmpty == null || e.onEmpty());
          },
          [e, y],
        ));
      var I = function (t, n) {
          if (E != null) {
            var e = n ? o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT : t;
            (n
              ? o(
                  "WAWebReactionUserJourneyLogger",
                ).ReactionUserJourneyLogger.reactionUnselect()
              : o(
                  "WAWebReactionUserJourneyLogger",
                ).ReactionUserJourneyLogger.reactionSelect(t),
              o("WAWebSendReactionMsgAction").sendReactionToMsg(E, e));
          }
        },
        T = r("useWAWebReactionEmojiPicker")({
          msgId: u != null ? u : "",
          onEmojiSelected: function (t) {
            if (E != null) {
              var e =
                t === _ ? o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT : t;
              (o(
                "WAWebReactionUserJourneyLogger",
              ).ReactionUserJourneyLogger.reactionSelect(t),
                o("WAWebSendReactionMsgAction")
                  .sendReactionToMsg(E, e)
                  .catch(function (e) {}));
            }
          },
          onCloseDetailsPane: e.onCloseDetailsPane,
          onOpenEmojiPicker: e.onOpenEmojiPicker,
          onCloseEmojiPicker: e.onCloseEmojiPicker,
        }),
        D = function (t) {
          E != null && T(t, l);
        };
      return s.jsxs(r("WAWebKeyboardRotateFocusModal.react"), {
        focusType: { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
        ref: R,
        xstyle: g.focusTrapContainer,
        children: [
          s.jsx(r("WAWebReactionDetailsPaneTitle.react"), { count: y.length }),
          s.jsx(r("WAWebReactionPillsContainer.react"), {
            addReactionPill: E
              ? s.jsx(r("WAWebAddReactionPill.react"), { ref: l, onClick: D })
              : null,
            mode: E ? "interactive" : "read-only",
            onPillClick: I,
            reactionAggregates: v,
          }),
          s.jsx("div", { className: "x3x0x6p xjm9jq1" }),
          s.jsx(o("WAWebFlex.react").FlexColumn, {
            ref: i,
            children: s.jsx(r("WAWebReactionDetailsList.react"), {
              senders: y,
              flatListController: a.current,
              onCloseDetailsPane: e.onCloseDetailsPane
                ? e.onCloseDetailsPane
                : r("WAWebNoop"),
              isAggregated: e.isAggregated,
            }),
          }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
