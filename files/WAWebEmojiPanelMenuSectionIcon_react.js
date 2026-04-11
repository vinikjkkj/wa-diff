__d(
  "WAWebEmojiPanelMenuSectionIcon.react",
  [
    "WAWebEmojiPanelEmojiSections",
    "WAWebPanelEmojiActivityRefreshedIcon.react",
    "WDSIconIcDirectionsCar.react",
    "WDSIconIcEmojiFoodBeverage.react",
    "WDSIconIcEmojiNature.react",
    "WDSIconIcEmojiObjects.react",
    "WDSIconIcEmojiSymbols.react",
    "WDSIconIcFlag.react",
    "WDSIconIcMood.react",
    "WDSIconIcSchedule.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c =
        ((e = {}),
        (e[o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT] = r(
          "WDSIconIcSchedule.react",
        )),
        (e[o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT_REACTIONS] = r(
          "WDSIconIcSchedule.react",
        )),
        (e[o("WAWebEmojiPanelEmojiSections").SECTIONS.SMILEYS_PEOPLE] = r(
          "WDSIconIcMood.react",
        )),
        (e[o("WAWebEmojiPanelEmojiSections").SECTIONS.ANIMALS_NATURE] = r(
          "WDSIconIcEmojiNature.react",
        )),
        (e[o("WAWebEmojiPanelEmojiSections").SECTIONS.FOOD_DRINK] = r(
          "WDSIconIcEmojiFoodBeverage.react",
        )),
        (e[o("WAWebEmojiPanelEmojiSections").SECTIONS.ACTIVITY] = o(
          "WAWebPanelEmojiActivityRefreshedIcon.react",
        ).PanelEmojiActivityRefreshedIcon),
        (e[o("WAWebEmojiPanelEmojiSections").SECTIONS.TRAVEL_PLACES] = r(
          "WDSIconIcDirectionsCar.react",
        )),
        (e[o("WAWebEmojiPanelEmojiSections").SECTIONS.OBJECTS] = r(
          "WDSIconIcEmojiObjects.react",
        )),
        (e[o("WAWebEmojiPanelEmojiSections").SECTIONS.SYMBOLS] = r(
          "WDSIconIcEmojiSymbols.react",
        )),
        (e[o("WAWebEmojiPanelEmojiSections").SECTIONS.FLAGS] = r(
          "WDSIconIcFlag.react",
        )),
        e);
    function d(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.sectionId,
        r = c[n],
        a;
      return (
        t[0] !== r ? ((a = u.jsx(r, {})), (t[0] = r), (t[1] = a)) : (a = t[1]),
        a
      );
    }
    l.default = d;
  },
  98,
);
