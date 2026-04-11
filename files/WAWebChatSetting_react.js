__d(
  "WAWebChatSetting.react",
  [
    "WANullthrows",
    "WAWebDrawerButton.react",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebSettingsConst",
    "WAWebSettingsStepIcon.react",
    "WAWebStateUtils",
    "react",
    "useWAWebModelValues",
    "useWAWebSearchQuery",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { text: { fontSize: "x1f6kntn", $$css: !0 } };
    function c(e) {
      var t = e.onClick,
        n = e.searchQuery,
        a = o("useWAWebModelValues").useModelValues(e.setting, ["id", "label"]),
        i = function (n) {
          t(n, o("WAWebStateUtils").unproxy(a));
        },
        l = o("useWAWebSearchQuery").useSearchText(n),
        c = o("WAWebFormatConfiguration").Search({ terms: [l] });
      return s.jsx(o("WAWebDrawerButton.react").DrawerButton, {
        icon: s.jsx(r("WAWebSettingsStepIcon.react"), {
          setting: r("WANullthrows")(
            o("WAWebSettingsConst").SettingsSteps.cast(a.id),
          ),
        }),
        id: a.id,
        active: e.active,
        onClick: i,
        theme: "chatlist",
        children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: a.label,
          formatters: c,
          xstyle: u.text,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
