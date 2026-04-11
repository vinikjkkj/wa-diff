__d(
  "WAWebNewsletterReactionDetailsPaneV2.react",
  [
    "fbt",
    "WALogger",
    "WAWebAddReactionPill.react",
    "WAWebConnectedPillButtons.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebKeyboardRotateFocusModal.react",
    "WAWebKeyboardTabUtils",
    "WAWebNewsletterContactsReactionList.react",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterReactionFrontendUtils",
    "WAWebNewsletterSendReactionAction",
    "WAWebReactionDetailsPaneTitle.react",
    "WAWebReactionPillsContainer.react",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebReactionsUtils",
    "WAWebSpinner.react",
    "WAWebUserPrefsMeUser",
    "react",
    "sumBy",
    "useLazyRef",
    "useWAWebEventTargetValue",
    "useWAWebFocusOnMount",
    "useWAWebNewsletterReactionSenderList",
    "useWAWebReactionEmojiPicker",
    "useWAWebReactionPillOrder",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useRef,
      _ = m.useState,
      f = {
        fullWidth: { width: "xh8yej3", $$css: !0 },
        focusTrapContainer: { position: "x1n2onr6", $$css: !0 },
        marginTop40: { marginTop: "x1q9ymp4", $$css: !0 },
        marginBottom4: { marginBottom: "x4tpdpg", $$css: !0 },
        marginTop28: { marginTop: "xevwqry", $$css: !0 },
      };
    function g(e) {
      var t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().toJid(),
        n = o("WAWebNewsletterReactionFrontendUtils").aggregateAndSortReactions(
          e,
        ).reactions,
        r = n.map(function (e) {
          var n = e[0],
            r = e[1];
          return {
            emoji: n.reactionAggregate,
            count: r,
            myReactions: n.reactionSenders.filter(function (e) {
              return e.senderUserJid === t;
            }),
          };
        }),
        a = r.map(function (e) {
          var t = e.count,
            n = e.emoji,
            r = e.myReactions;
          return { emoji: n, count: t, hasMyReaction: r.length > 0 };
        });
      return { reactions: r, aggregates: a };
    }
    function h(t) {
      var n = t.chat,
        a = t.firstMsg,
        i = t.multipleMsgs,
        l = t.onCloseDetailsPane,
        c = t.onCloseEmojiPicker,
        m = t.onOpenEmojiPicker,
        h = t.reactionModels,
        y = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        C = _("all"),
        b = C[0],
        v = C[1],
        S = p(null),
        R = o("WAWebReactionsUtils").canReactToMessage(a),
        L = o(
          "useWAWebNewsletterReactionSenderList",
        ).useNewsletterReactionSenderList(n, a, i),
        E = L[0],
        k = L[1],
        I = L[2],
        T = L[3],
        D = L[4],
        x = L[5],
        $ = L[6],
        P = g(h),
        N = P.aggregates,
        M = P.reactions,
        w = _(M),
        A = w[0],
        F = w[1],
        O = _(N),
        B = O[0],
        W = O[1],
        q = r("useWAWebFocusOnMount")(),
        U = r("useWAWebReactionPillOrder")(B),
        V = function () {
          var e = g(h),
            t = e.aggregates,
            n = e.reactions,
            r = U(t);
          (F(n), W(r));
        };
      r("useWAWebEventTargetValue")(
        h,
        ["change:myReaction", "change:reactionCountMapTs", "remove"],
        V,
      );
      var H = function (n, r) {
          r
            ? o(
                "WAWebReactionUserJourneyLogger",
              ).ReactionUserJourneyLogger.reactionUnselect()
            : o(
                "WAWebReactionUserJourneyLogger",
              ).ReactionUserJourneyLogger.reactionSelect(n);
          var t = a.id,
            i = r ? o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT : n;
          o("WAWebNewsletterSendReactionAction")
            .sendNewsletterReaction(t, i)
            .catch(function (t) {
              return o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to react",
                  ])),
              );
            });
        },
        G = r("useWAWebReactionEmojiPicker")({
          msgId: a.id.toString(),
          onEmojiSelected: function (t) {
            o(
              "WAWebReactionUserJourneyLogger",
            ).ReactionUserJourneyLogger.reactionSelect(t);
            var e = a.id;
            o("WAWebNewsletterSendReactionAction")
              .sendNewsletterReaction(e, t)
              .catch(function (e) {
                return o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to react",
                    ])),
                );
              });
          },
          onCloseDetailsPane: l,
          onOpenEmojiPicker: m,
          onCloseEmojiPicker: c,
        }),
        z = d.jsxs(d.Fragment, {
          children: [
            d.jsx(r("WAWebReactionPillsContainer.react"), {
              addReactionPill:
                R &&
                o(
                  "WAWebNewsletterGatingUtils",
                ).shouldShowAllReactionsForNewsletter(n)
                  ? d.jsx(r("WAWebAddReactionPill.react"), {
                      onClick: function (t) {
                        return G(t, S);
                      },
                      ref: S,
                    })
                  : null,
              display: "grid",
              mode: R ? "interactive" : "read-only",
              onPillClick: H,
              reactionAggregates: B,
            }),
            d.jsx("div", { className: "x3x0x6p xjm9jq1 xh8yej3" }),
          ],
        }),
        j =
          b === "contacts"
            ? d.jsx(r("WAWebFlatListContainer.react"), {
                className: "xh8yej3 xuyqlj2 x1lumt5c xw2csxc x1odjw0f",
                flatListControllers: [y.current],
                children: I
                  ? d.jsx(o("WAWebFlex.react").FlexRow, {
                      justify: "center",
                      xstyle: f.marginTop40,
                      children: d.jsx(o("WAWebSpinner.react").Spinner, {
                        color: "accent",
                        size: 24,
                      }),
                    })
                  : d.jsx(r("WAWebNewsletterContactsReactionList.react"), {
                      reactionList: k,
                      flatListController: y.current,
                      reactionSendersServerError: T,
                      setReactionSendersServerError: x,
                      retryFetchingReactionSenders: $,
                      isOffline: D,
                      onCloseDetailsPane: l,
                    }),
              })
            : null,
        K =
          b === "all"
            ? r("sumBy")(A, function (e) {
                return e.count;
              })
            : k.length,
        Q =
          b === "all"
            ? d.jsx(r("WAWebReactionDetailsPaneTitle.react"), { count: K })
            : b === "contacts"
              ? !D && !T && !I
                ? d.jsx(r("WAWebReactionDetailsPaneTitle.react"), { count: K })
                : null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      b,
                  );
                })(),
        X = [
          { id: "all", title: s._(/*BTDS*/ "All") },
          { id: "contacts", title: s._(/*BTDS*/ "Contacts") },
        ];
      return d.jsx(r("WAWebKeyboardRotateFocusModal.react"), {
        focusType: { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
        ref: q,
        xstyle: f.focusTrapContainer,
        children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
          testid: void 0,
          children: [
            o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterReactionSenderListEnabled(n, i) &&
              d.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: [f.marginBottom4, f.marginTop28, f.fullWidth],
                justify: "center",
                children: d.jsx(r("WAWebConnectedPillButtons.react"), {
                  pills: X,
                  onChange: function (t) {
                    (t === "all" || t === "contacts") && v(t);
                  },
                  currentlySelected: b,
                }),
              }),
            Q,
            z,
            j,
          ],
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
