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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(6),
        a = t.userJourneyEntryPoint,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = r("useVisibility")({
          onVisible: function () {
            o(
              "WAWebReactionUserJourneyLogger",
            ).ReactionUserJourneyLogger.trayOpen(
              o("WAWebFrontendMsgGetters").getChat(i.msg).id,
              i.msg,
              a,
            );
          },
        }),
        s = l[0];
      if (
        o("WAWebChatGetters").getIsNewsletter(
          o("WAWebFrontendMsgGetters").getChat(i.msg),
        )
      ) {
        var c;
        return (
          n[0] !== i || n[1] !== s
            ? ((c = o(
                "WAWebNewsletterExtendedGatingUtils",
              ).isNewsletterReactionEnabled()
                ? u.jsx(
                    o("WAWebSendReactionsTrayNewsletterContainer.react")
                      .SendReactionsTrayNewsletterContainer,
                    babelHelpers.extends({ ref: s }, i),
                  )
                : null),
              (n[0] = i),
              (n[1] = s),
              (n[2] = c))
            : (c = n[2]),
          c
        );
      }
      var d;
      return (
        n[3] !== i || n[4] !== s
          ? ((d = u.jsx(_, babelHelpers.extends({ ref: s }, i))),
            (n[3] = i),
            (n[4] = s),
            (n[5] = d))
          : (d = n[5]),
        d
      );
    }
    function _(e) {
      var t,
        n = o("react-compiler-runtime").c(29),
        a = e.disableAutoFocus,
        i = e.isInlineMode,
        l = e.msg,
        s = e.onMouseEnter,
        c = e.onMouseLeave,
        p = e.onMouseOver,
        _ = e.ref,
        f = e.selectedCallback,
        g,
        h;
      (n[0] !== l
        ? ((g = function () {
            new (o("WAWebReactionActionsWamEvent").ReactionActionsWamEvent)({
              mediaType: o("WAWebWamMsgUtils").getWamMediaType(l),
              messageType: o("WAWebWamMsgUtils").getWamMessageType(l),
              reactionAction: o("WAWebWamEnumReactionActionType")
                .REACTION_ACTION_TYPE.OPEN_TRAY,
            }).commit();
          }),
          (h = [l]),
          (n[0] = l),
          (n[1] = g),
          (n[2] = h))
        : ((g = n[1]), (h = n[2])),
        d(g, h));
      var y = m(null),
        C = y[0],
        b = y[1],
        v;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function (t) {
            var e,
              n,
              r,
              a = t[0];
            if (!a) {
              b(null);
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
              b(null);
              return;
            }
            b(l);
          }),
          (n[3] = v))
        : (v = n[3]);
      var S = v,
        R;
      n[4] !== l.id
        ? ((R = l.id.toString()), (n[4] = l.id), (n[5] = R))
        : (R = n[5]);
      var L;
      n[6] !== R ? ((L = [R]), (n[6] = R), (n[7] = L)) : (L = n[7]);
      var E = r("useWAWebReactions")(L, S),
        k = E.reactionsModels,
        I;
      n[8] !== k[0] || n[9] !== f
        ? ((I = function (t) {
            var e;
            if (
              k[0] &&
              t === ((e = k[0].reactionByMe) == null ? void 0 : e.reactionText)
            ) {
              f(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
              return;
            }
            f(t);
          }),
          (n[8] = k[0]),
          (n[9] = f),
          (n[10] = I))
        : (I = n[10]);
      var T = I,
        D =
          (t = k[0]) == null || (t = t.reactionByMe) == null
            ? void 0
            : t.reactionText,
        x;
      n[11] !== D
        ? ((x = o("WAWebReactionsUtils").getReactionsForTray(
            o("WAWebDefaultReactions").DEFAULT_REACTIONS,
            D,
          )),
          (n[11] = D),
          (n[12] = x))
        : (x = n[12]);
      var $ = x,
        P = $.length > o("WAWebDefaultReactions").DEFAULT_REACTIONS.length,
        N = !P,
        M;
      n[13] !== l
        ? ((M = o("WAWebMsgGetters").getIsSentByMe(l)),
          (n[13] = l),
          (n[14] = M))
        : (M = n[14]);
      var w;
      n[15] !== a ||
      n[16] !== i ||
      n[17] !== $ ||
      n[18] !== C ||
      n[19] !== T ||
      n[20] !== M ||
      n[21] !== N
        ? ((w = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            name: "SendReactionsTrayContainer",
            children: u.jsx(
              o("WAWebSendReactionsTray.react").SendReactionsTray,
              {
                isInlineMode: i,
                selectedIndex: C,
                selectedCallback: T,
                reactions: $,
                showMoreOption: N,
                isParentMsgSentByMe: M,
                disableAutoFocus: a,
              },
            ),
          })),
          (n[15] = a),
          (n[16] = i),
          (n[17] = $),
          (n[18] = C),
          (n[19] = T),
          (n[20] = M),
          (n[21] = N),
          (n[22] = w))
        : (w = n[22]);
      var A;
      return (
        n[23] !== s || n[24] !== c || n[25] !== p || n[26] !== _ || n[27] !== w
          ? ((A = u.jsx("div", {
              ref: _,
              onMouseEnter: s,
              onMouseOver: p,
              onMouseLeave: c,
              children: w,
            })),
            (n[23] = s),
            (n[24] = c),
            (n[25] = p),
            (n[26] = _),
            (n[27] = w),
            (n[28] = A))
          : (A = n[28]),
        A
      );
    }
    l.SendReactionsTrayContainer = p;
  },
  98,
);
