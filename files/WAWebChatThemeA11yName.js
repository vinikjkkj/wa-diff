__d(
  "WAWebChatThemeA11yName",
  ["fbt", "WAWebChatThemeColorSchemeA11yName$FbtEnum", "WAWebChatThemeEnums"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n,
        a = e,
        i =
          e === o("WAWebChatThemeEnums").Theme.Default
            ? o("WAWebChatThemeEnums").Theme.WhatsAppGreen
            : (n = o("WAWebChatThemeEnums").Theme.cast(a.replace(/@.*/, ""))) !=
                null
              ? n
              : o("WAWebChatThemeEnums").Theme.WhatsAppGreen,
        l = o("WAWebChatThemeEnums").hasVibrantBubbleColor(e)
          ? "vibrant"
          : "tonal",
        u = i + ":" + t + ":" + l;
      return s._(/*BTDS*/ "", [
        s._enum(u, r("WAWebChatThemeColorSchemeA11yName$FbtEnum")),
      ]);
    }
    l.getColorSchemeA11yName = e;
  },
  226,
);
