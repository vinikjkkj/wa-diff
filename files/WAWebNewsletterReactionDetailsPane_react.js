__d(
  "WAWebNewsletterReactionDetailsPane.react",
  [
    "fbt",
    "WAWebConnectedPillButtons.react",
    "WAWebEmoji",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterContactsReactionList.react",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterReactionDetailsPaneItem.react",
    "WAWebNewsletterReactionFrontendUtils",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebUserPrefsMeUser",
    "clamp",
    "react",
    "sumBy",
    "useLazyRef",
    "useWAWebEventTargetValue",
    "useWAWebNewsletterReactionSenderList",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.createRef,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = {
        fullWidth: { width: "xh8yej3", $$css: !0 },
        header: { width: "xh8yej3", boxSizing: "x9f619", $$css: !0 },
        marginTop40: { marginTop: "x1q9ymp4", $$css: !0 },
        marginBottom4: { marginBottom: "x4tpdpg", $$css: !0 },
        marginTop28: { marginTop: "xevwqry", $$css: !0 },
        paddingTop20: { paddingTop: "x1h678fw", $$css: !0 },
        paddingBottom8: { paddingBottom: "x12xbjc7", $$css: !0 },
        paddingHoriz16: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      g = 53,
      h = 48;
    function y(e) {
      var t = e.chat,
        n = e.firstMsg,
        a = e.handleEmojiClick,
        i = e.multipleMsgs,
        l = e.onCloseDetailsPane,
        c = e.reactionModels,
        g = _(0),
        h = g[0],
        y = g[1],
        v = p(new Map()),
        S = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        R = _("all"),
        L = R[0],
        E = R[1],
        k = o(
          "useWAWebNewsletterReactionSenderList",
        ).useNewsletterReactionSenderList(t, n, i),
        I = k[0],
        T = k[1],
        D = k[2],
        x = k[3],
        $ = k[4],
        P = k[5],
        N = k[6],
        M = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        w = r("useWAWebEventTargetValue")(
          c,
          ["change:myReaction", "change:reactionCountMapTs", "remove"],
          function () {
            return o("WAWebNewsletterReactionFrontendUtils")
              .aggregateAndSortReactions(c)
              .reactions.map(function (e) {
                var t = e[0],
                  n = e[1];
                return {
                  emoji: t.reactionAggregate,
                  count: n,
                  myReactions: t.reactionSenders.filter(function (e) {
                    return e.senderUserJid === M.toJid();
                  }),
                };
              });
          },
        ),
        A = b(w, i, I),
        F = function (t) {
          var e = A[t];
          if (e) {
            var n,
              r = e.itemKey,
              o = v.current.get(r);
            o == null || (n = o.current) == null || n.focus();
          }
        };
      m(function () {
        F(0);
      }, []);
      var O = function (t) {
          return r("clamp")(t, 0, A.length - 1);
        },
        B = function (t) {
          t.preventDefault();
          var e = O(h - 1);
          (y(e), F(e));
        },
        W = function (t) {
          var e = O(h + 1);
          (t.preventDefault(), y(e), F(e));
        },
        q = { up: B, down: W },
        U,
        V;
      switch (L) {
        case "all":
          ((V = u.jsx(C, {
            count: r("sumBy")(w, function (e) {
              return e.count;
            }),
            chat: t,
            multipleMsgs: i,
          })),
            (U = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              role: "list",
              tabIndex: null,
              handlers: q,
              children: u.jsx(o("WAWebFlatList.react").FlatList, {
                data: A,
                direction: "vertical",
                renderItem: function (t) {
                  var e = d();
                  return (
                    v.current.set(t.itemKey, e),
                    u.jsx(
                      r("WAWebNewsletterReactionDetailsPaneItem.react"),
                      babelHelpers.extends({ ref: e }, t, {
                        firstMsg: n,
                        multipleMsgs: i,
                        onClick: a,
                        offlineOrServerError: $ || x,
                        onCloseDetailsPane: l,
                      }),
                    )
                  );
                },
                flatListController: S.current,
              }),
            })));
          break;
        case "contacts":
          ((V =
            !$ && !x && !D
              ? u.jsx(C, { count: T.length, chat: t, multipleMsgs: i })
              : null),
            (U = D
              ? u.jsx(o("WAWebFlex.react").FlexRow, {
                  justify: "center",
                  xstyle: f.marginTop40,
                  children: u.jsx(o("WAWebSpinner.react").Spinner, {
                    color: "accent",
                    size: 24,
                  }),
                })
              : u.jsx(r("WAWebNewsletterContactsReactionList.react"), {
                  reactionList: T,
                  flatListController: S.current,
                  reactionSendersServerError: x,
                  setReactionSendersServerError: P,
                  retryFetchingReactionSenders: N,
                  isOffline: $,
                  onCloseDetailsPane: l,
                })));
          break;
      }
      var H = [
        { id: "all", title: s._(/*BTDS*/ "All") },
        { id: "contacts", title: s._(/*BTDS*/ "Contacts") },
      ];
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        testid: void 0,
        children: [
          o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterReactionSenderListEnabled(t, i) &&
            u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: [f.marginBottom4, f.marginTop28, f.fullWidth],
              justify: "center",
              children: u.jsx(r("WAWebConnectedPillButtons.react"), {
                pills: H,
                onChange: function (t) {
                  (t === "all" || t === "contacts") && E(t);
                },
                currentlySelected: L,
              }),
            }),
          V,
          u.jsx(r("WAWebFlatListContainer.react"), {
            className: "xh8yej3 xuyqlj2 x1lumt5c xw2csxc x1odjw0f",
            flatListControllers: [S.current],
            children: U,
          }),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.chat,
        n = e.count,
        r = e.multipleMsgs,
        a = s._(/*BTDS*/ '_j{"*":"{reactions} reactions","_1":"1 reaction"}', [
          s._plural(n, "reactions", n),
        ]);
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: o(
          "WAWebNewsletterExtendedGatingUtils",
        ).isNewsletterReactionSenderListEnabled(t, r)
          ? "start"
          : "center",
        xstyle: [f.paddingTop20, f.paddingBottom8, f.paddingHoriz16, f.header],
        testid: void 0,
        children: o(
          "WAWebNewsletterExtendedGatingUtils",
        ).isNewsletterReactionSenderListEnabled(t, r)
          ? u.jsx(o("WAWebText.react").WAWebTextTitle, {
              weight: "semibold",
              children: a,
            })
          : u.jsx(o("WAWebText.react").WAWebTextLarge, { children: a }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e, t, n) {
      var r = [];
      return (
        e.forEach(function (e) {
          var a = o("WAWebEmoji").EmojiUtil.getNormalizedOrTofu(e.emoji),
            i = e.count;
          if (e.myReactions.length > 0)
            (e.myReactions.forEach(function (a) {
              var l;
              r.push({
                emoji: o("WAWebEmoji").EmojiUtil.getNormalizedOrTofu(
                  a.reactionText,
                ),
                count: t ? 1 : i,
                parentMsgKey: a.id,
                itemKey: a.id.toString(),
                height: g,
                facePileImages: (l = n.get(e.emoji)) != null ? l : [],
              });
            }),
              t &&
                r.push({
                  emoji: a,
                  count: i,
                  itemKey: e.emoji,
                  height: g,
                  facePileImages: [],
                }));
          else {
            var l;
            r.push({
              emoji: a,
              count: i,
              itemKey: e.emoji,
              height: h,
              facePileImages: (l = n.get(e.emoji)) != null ? l : [],
            });
          }
        }),
        r.sort(function (e, t) {
          return e.parentMsgKey != null && t.parentMsgKey != null
            ? 0
            : e.parentMsgKey != null
              ? -1
              : t.parentMsgKey != null
                ? 1
                : t.count - e.count;
        })
      );
    }
    l.default = y;
  },
  226,
);
