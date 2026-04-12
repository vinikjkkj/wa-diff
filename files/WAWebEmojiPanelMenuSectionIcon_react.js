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
      var t = e.sectionId,
        n = c[t];
      return u.jsx(n, {});
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
