__d(
  "WAWebReactionsPanel.react",
  [
    "WAWebCmd",
    "WAWebDropdown.react",
    "WAWebEmojiPanel.react",
    "WAWebPanelsDisplayLocation",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebReactionsSelectionContext",
    "react",
    "react-compiler-runtime",
    "useWAWebSelectedReactions",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.msgId,
        a = e.onSelection,
        i = r("useWAWebSelectedReactions")(n),
        l = d(!1),
        u;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = []), (t[0] = u))
        : (u = t[0]),
        c(p, u));
      var m;
      t[1] !== a || t[2] !== i
        ? ((m = function (t) {
            var e = t;
            (t === i && (e = o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT),
              a(e),
              o("WAWebCmd").Cmd.closeContextMenu());
          }),
          (t[1] = a),
          (t[2] = i),
          (t[3] = m))
        : (m = t[3]);
      var _ = m,
        f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function () {
            l.current ||
              (o(
                "WAWebReactionUserJourneyLogger",
              ).ReactionUserJourneyLogger.reactionSearch(),
              (l.current = !0));
          }),
          (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] !== _
        ? ((g = s.jsx(r("WAWebEmojiPanel.react"), {
            onEmoji: _,
            displayLocation: o("WAWebPanelsDisplayLocation").DisplayLocation
              .Reactions,
            width: o("WAWebDropdown.react").REACTIONS_PANEL_WIDTH,
            onChange: f,
          })),
          (t[5] = _),
          (t[6] = g))
        : (g = t[6]);
      var h;
      return (
        t[7] !== i || t[8] !== g
          ? ((h = s.jsx(r("WAWebReactionsSelectionContext").Provider, {
              value: i,
              children: g,
            })),
            (t[7] = i),
            (t[8] = g),
            (t[9] = h))
          : (h = t[9]),
        h
      );
    }
    function p() {
      return _;
    }
    function _() {
      o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayClose();
    }
    l.default = m;
  },
  98,
);
