__d(
  "WAWebReactionsBubble.react",
  [
    "WAWebAddOnBubble.react",
    "WAWebFlexItem.react",
    "WAWebReactionEmojiAnimated",
    "WAWebReactionsUtils",
    "WAWebRollerCounter.react",
    "lodash",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebPrevious",
    "useWAWebTimeout",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.memo,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState,
      _ = 100,
      f = {
        reactionItem: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          textAlign: "x2b8uid",
          fontSize: "x1jchvi3",
          lineHeight: "x1fc57z9",
          $$css: !0,
        },
      };
    function g(e, t) {
      var n = r("lodash").differenceBy(t || [], e || [], function (e) {
          return e.reactionAggregate;
        }),
        o = r("lodash").differenceBy(e || [], t || [], function (e) {
          return e.reactionAggregate;
        });
      return { added: n, removed: o };
    }
    function h(e) {
      var t = { timestamp: 0, reactionAgg: "" };
      return (
        e.forEach(function (e) {
          e.reactionSenders.forEach(function (n) {
            t.timestamp < n.timestamp &&
              ((t.timestamp = n.timestamp),
              (t.reactionAgg = e.reactionAggregate));
          });
        }),
        t
      );
    }
    function y(e) {
      var t = e.isFirstData,
        n = e.reactions,
        a = e.reactionsAggregateCount,
        i = m(null),
        l = m(n),
        u = m(!0),
        c = r("useWAWebPrevious")(n),
        y = p([]),
        C = y[0],
        b = y[1],
        v = p([]),
        S = v[0],
        R = v[1],
        L = r("useWAWebUnmountSignal")(),
        E = p([]),
        k = E[0],
        I = E[1],
        T = m(null),
        D = m(!1);
      (i.current == null && (i.current = c != null ? c : null),
        T.current == null && (T.current = a),
        (l.current = n));
      var x = o("useWAWebTimeout").useTimeout(
          function () {
            R(l.current);
          },
          o("WAWebReactionEmojiAnimated").ANIMATION_REMOVE_LENGTH + 1,
        ),
        $ = x[0],
        P = x[1],
        N = r("useWAWebDebouncedCallback")(function () {
          if (!L.aborted) {
            var e = g(i.current, l.current),
              n = e.added,
              o = e.removed,
              s = T.current != null ? T.current > a : !1;
            ((T.current = null),
              !r("lodash").isEqual(o, k) && t === !1 && I(o));
            var c = [];
            if (!r("lodash").isEqual(n, C) && t === !1 && !s) {
              var d = h(l.current);
              n.forEach(function (e) {
                e.reactionAggregate === d.reactionAgg && c.push(e);
              });
            }
            (s ||
              l.current.forEach(function (e) {
                var n,
                  r =
                    (n = i.current) == null
                      ? void 0
                      : n.find(function (t) {
                          return t.reactionAggregate === e.reactionAggregate;
                        });
                t === !1 && e.reactionByMe && r == null && (c = [e]);
              }),
              o.length === 0 ? R(l.current) : $(),
              b(c),
              (i.current = null),
              (u.current = !1));
          }
        }, _);
      (r("lodash").isEqual(c, n) || N(),
        d(function () {
          t === !0 && R(n);
        }, []));
      var M = S.map(function (e) {
          var t = k.includes(e),
            n = t
              ? {
                  shouldRemoveAnimation: t,
                  animationFinished: function () {
                    (P(), R(l.current));
                  },
                }
              : null,
            a = o("WAWebReactionsUtils").getReactionForDisplay(e),
            i = C.includes(e);
          return s.jsx(
            r("WAWebFlexItem.react"),
            {
              xstyle: f.reactionItem,
              testid: void 0,
              children: s.jsx(
                o("WAWebReactionEmojiAnimated").ReactionEmojiAnimated,
                { reaction: a, shouldAnimate: i, removeAnimation: n },
              ),
            },
            a,
          );
        }),
        w = s.jsx(r("WAWebRollerCounter.react"), {
          counter: a,
          shouldAnimate: t === !1,
          rollerCounterOptions: {
            showAggregateMax: !0,
            showOneToTwoAnimation: !0,
          },
        }),
        A = g(i.current, l.current),
        F = A.added,
        O = t === !1 && u.current && (F.length > 0 || D.current);
      D.current = O;
      var B = function () {
        D.current = !1;
      };
      return s.jsxs(r("WAWebAddOnBubble.react"), {
        shouldAnimateBubble: O,
        onAnimationEnd: B,
        children: [M, w],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e, t) {
      return r("lodash").isEqual(e, t);
    }
    var b = c(y, C);
    l.default = b;
  },
  98,
);
