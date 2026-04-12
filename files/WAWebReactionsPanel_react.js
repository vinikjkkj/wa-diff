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
    "useWAWebSelectedReactions",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef;
    function m(e) {
      var t = e.msgId,
        n = e.onSelection,
        a = r("useWAWebSelectedReactions")(t),
        i = d(!1);
      c(function () {
        return function () {
          o(
            "WAWebReactionUserJourneyLogger",
          ).ReactionUserJourneyLogger.trayClose();
        };
      }, []);
      var l = function (t) {
        var e = t;
        (t === a && (e = o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT),
          n(e),
          o("WAWebCmd").Cmd.closeContextMenu());
      };
      return s.jsx(r("WAWebReactionsSelectionContext").Provider, {
        value: a,
        children: s.jsx(r("WAWebEmojiPanel.react"), {
          onEmoji: l,
          displayLocation: o("WAWebPanelsDisplayLocation").DisplayLocation
            .Reactions,
          width: o("WAWebDropdown.react").REACTIONS_PANEL_WIDTH,
          onChange: function () {
            i.current ||
              (o(
                "WAWebReactionUserJourneyLogger",
              ).ReactionUserJourneyLogger.reactionSearch(),
              (i.current = !0));
          },
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
