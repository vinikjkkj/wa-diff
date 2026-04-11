__d(
  "WAWebEmojiPickerConstants",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = 1e3,
      l = 100,
      s = 63,
      u = 5,
      c = 15,
      d = s * 0.7,
      m = s * 1.5,
      p = n("$InternalEnum").Mirrored([
        "LOVE",
        "GREETINGS",
        "HAPPY",
        "SAD",
        "ANGRY",
        "CELEBRATE",
      ]),
      _ = n("$InternalEnum").Mirrored([
        "RECENTS",
        "FAVORITES",
        "LOVE",
        "GREETINGS",
        "HAPPY",
        "SAD",
        "ANGRY",
        "CELEBRATE",
        "STORE",
      ]),
      f = function (t) {
        var e = t;
        return p.isValid(e) ? p.cast(e) : null;
      };
    ((i.SCROLL_CLICK_TIME_GAP = e),
      (i.SCROLL_THROTTLE_TIME = l),
      (i.INPUT_BAR_TOTAL_HEIGHT = s),
      (i.INPUT_BAR_SCROLL_SENSITIVITY = u),
      (i.INPUT_BAR_SCROLL_FAST = c),
      (i.INPUT_HIDE_POINT = d),
      (i.INPUT_SHOW_POINT = m),
      (i.ValidMoods = p),
      (i.StickerTabs = _),
      (i.convertTabToMood = f));
  },
  66,
);
