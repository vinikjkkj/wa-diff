__d(
  "WAWebReactionDetailsPane.react",
  [
    "fbt",
    "WAWebAutoCarouselMenuMenu.react",
    "WAWebEmojiText.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebNoop",
    "WAWebPanelsMenuContainer.react",
    "WAWebReactionDetailsList.react",
    "WAWebReactionEmoji.react",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsUtils",
    "WAWebUserPrefsMeUser",
    "lodash",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebIsKeyboardUser",
    "useWAWebReactions",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState,
      f = {
        emojiCount: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          display: "x1rg5ohu",
          height: "xt7dq6l",
          fontSize: "x6prxxf",
          lineHeight: "x1fc57z9",
          $$css: !0,
        },
        emoji: {
          color: "x14ug900",
          marginInlineEnd: "x1p8j9ns",
          imageRendering: "x1k0y4fr",
          $$css: !0,
        },
        buttonStyle: { width: "x187nhsf", $$css: !0 },
        willChange: { willChange: "x1so62im", $$css: !0 },
      },
      g = "_all_",
      h = function (t, n) {
        var e;
        if ((e = t.current) != null && e.hasFocus()) {
          var r;
          (r = n.current) == null || r.focus();
        } else {
          var o;
          (o = t.current) == null || o.focus();
        }
      },
      y = function (t, n) {
        t === void 0 && (t = []);
        var e = r("lodash").intersectionWith(t, n, function (e, t) {
            return e.isEqual(t);
          }),
          o = r("lodash").differenceWith(n, t, function (e, t) {
            return e.isEqual(t);
          });
        return e.concat.apply(e, o);
      };
    function C(t) {
      var n = t.tab,
        a = n.emoji,
        i = n.reactions;
      return c.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        children: c.jsxs(r("WAWebFlexItem.react"), {
          xstyle: f.willChange,
          children: [
            a === g
              ? c.jsx("div", {
                  className:
                    "xdj266r xat24cr x1lziwak x1rg5ohu xt7dq6l x6prxxf x1fc57z9 x14ug900 xbelrpt",
                  children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: s._(/*BTDS*/ '_j{"*":"All"}', [s._plural(i.length)]),
                  }),
                })
              : c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      f.emojiCount,
                      f.emoji,
                      o("WAWebReactionEmoji.react").tabScale,
                    ),
                    {
                      children: c.jsx(
                        o("WAWebReactionEmoji.react").ReactionEmoji,
                        { reaction: a },
                      ),
                    },
                  ),
                ),
            c.jsx("div", {
              "data-testid": void 0,
              className:
                "xdj266r xat24cr x1lziwak x1rg5ohu xt7dq6l x6prxxf x1fc57z9 xhslqc4 xmpx0yj",
              children: r("WAWebL10N").n(i.length),
            }),
          ],
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = _(0),
        n = t[0],
        a = t[1],
        i = _(0),
        l = i[0],
        s = i[1],
        u = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        d = p(null),
        b = p(null),
        v = p(null),
        S = r("useWAWebIsKeyboardUser")(),
        R = S.isKeyboardUser;
      m(function () {
        var e, t;
        s(
          (e = (t = v.current) == null ? void 0 : t.clientHeight) != null
            ? e
            : 0,
        );
      }, []);
      var L = function (t, n) {
          var e,
            a,
            i = o("WAWebReactionsUtils").getReactionAggregates(t),
            l = [],
            s = [],
            u = [],
            c = function (t, n) {
              var e = t.reactionSenders;
              if (e.length) {
                var r = y(n, e);
                (r.forEach(function (e) {
                  o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid)
                    ? s.push(e)
                    : l.push(e);
                }),
                  u.push({
                    emoji: o("WAWebReactionsUtils").getReactionForDisplay(t),
                    reactions: r,
                  }));
              }
            };
          (n == null ||
            n.forEach(function (e) {
              var t = r("lodash").remove(i, function (t) {
                return t.reactionAggregate === e.emoji;
              })[0];
              t && c(t, e.reactions);
            }),
            i.forEach(function (e) {
              c(e);
            }));
          var d = y(
            (e = n == null || (a = n[0]) == null ? void 0 : a.reactions) != null
              ? e
              : [],
            l,
          );
          return (
            d.unshift.apply(d, s),
            d.length && u.unshift({ emoji: g, reactions: d }),
            u
          );
        },
        E = _(L(e.reactionsModels)),
        k = E[0],
        I = E[1],
        T = function (t) {
          var e,
            r = R && !!((e = d.current) != null && e.hasFocus()),
            o = L(t, k);
          if ((o.length < k.length && a(Math.max(0, n - 1)), I(o), r)) {
            var i;
            (i = d.current) == null || i.focus();
          }
        };
      if (
        (r("useWAWebReactions")(e.msgIds, T),
        m(
          function () {
            k.length === 0 && (e.onEmpty == null || e.onEmpty());
          },
          [e, k],
        ),
        k.length === 0)
      )
        return null;
      var D = function (t, n) {
          (a(t),
            u.current.setScrollFromStart(0),
            o(
              "WAWebReactionUserJourneyLogger",
            ).ReactionUserJourneyLogger.selectTabInReactionDetails());
        },
        x = k[n].reactions,
        $ = {
          "shift+tab": function (t) {
            (t.preventDefault(), h(b, d));
          },
          tab: function (t) {
            (t.preventDefault(), h(b, d));
          },
        },
        P = {};
      return (
        l && (P.height = l),
        c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
          handlers: $,
          tabIndex: null,
          children: [
            c.jsx(r("WAWebAutoCarouselMenuMenu.react"), {
              ref: b,
              numItems: k.length,
              onItemClick: D,
              renderItem: function (t) {
                return c.jsx(C, { tab: k[t] });
              },
              selectedIndex: n,
              buttonStyle: f.buttonStyle,
              theme: o("WAWebPanelsMenuContainer.react").MenuContainerTheme
                .REACTIONS_CONTAINER,
            }),
            c.jsx("div", { className: "x3x0x6p xjm9jq1" }),
            c.jsx(o("WAWebFlex.react").FlexColumn, {
              ref: v,
              style: P,
              children: c.jsx(r("WAWebReactionDetailsList.react"), {
                ref: d,
                senders: x,
                flatListController: u.current,
                onCloseDetailsPane: e.onCloseDetailsPane
                  ? e.onCloseDetailsPane
                  : r("WAWebNoop"),
                isAggregated: e.isAggregated,
              }),
            }),
          ],
        })
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
