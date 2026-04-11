__d(
  "WAWebEmojiPanelEmojiSections",
  ["WAWebEmojiConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = babelHelpers.extends(
        { RECENT: "RECENT", RECENT_REACTIONS: "RECENT_REACTIONS" },
        o("WAWebEmojiConst").CATEGORIES,
        { SEARCH_RESULT: "SEARCH_RESULT" },
      ),
      u =
        ((e = {}),
        (e[s.RECENT] = s.RECENT),
        (e[s.RECENT_REACTIONS] = s.RECENT_REACTIONS),
        (e[s.SMILEYS_PEOPLE] = s.SMILEYS_PEOPLE),
        (e[s.ANIMALS_NATURE] = s.ANIMALS_NATURE),
        (e[s.FOOD_DRINK] = s.FOOD_DRINK),
        (e[s.ACTIVITY] = s.ACTIVITY),
        (e[s.TRAVEL_PLACES] = s.TRAVEL_PLACES),
        (e[s.OBJECTS] = s.OBJECTS),
        (e[s.SYMBOLS] = s.SYMBOLS),
        (e[s.FLAGS] = s.FLAGS),
        e),
      c = [].concat(o("WAWebEmojiConst").ORDERED_CATEGORY_IDS);
    ((l.SECTIONS = s), (l.ORDERED_TAB_SECTION_IDS = c));
  },
  98,
);
