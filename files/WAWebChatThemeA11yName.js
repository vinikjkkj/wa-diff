__d(
  "WAWebChatThemeA11yName",
  ["fbt", "WAWebChatThemeEnums"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = o("WAWebChatThemeEnums").Theme.cast(e.replace(/@.*/, "")),
        r = t === "dark";
      return (function (e) {
        if (
          e === o("WAWebChatThemeEnums").Theme.Default ||
          e === o("WAWebChatThemeEnums").Theme.WhatsAppGreen
        )
          return r ? s._(/*BTDS*/ "Dark Green") : s._(/*BTDS*/ "Light Green");
        if (e === o("WAWebChatThemeEnums").Theme.PearlIndigo)
          return r
            ? s._(/*BTDS*/ "Dark Blue Gray")
            : s._(/*BTDS*/ "Light Purple");
        if (e === o("WAWebChatThemeEnums").Theme.TyrianPurple)
          return r
            ? s._(/*BTDS*/ "Dark Red Purple")
            : s._(/*BTDS*/ "Light Magenta");
        if (e === o("WAWebChatThemeEnums").Theme.SunsetOrange)
          return r ? s._(/*BTDS*/ "Dark Brown") : s._(/*BTDS*/ "Light Orange");
        if (e === o("WAWebChatThemeEnums").Theme.MerinoTeal)
          return r
            ? s._(/*BTDS*/ "Dark Green Blue")
            : s._(/*BTDS*/ "Light Teal");
        if (
          e === o("WAWebChatThemeEnums").Theme.RoyalBlue ||
          e === o("WAWebChatThemeEnums").Theme.DefaultBlue
        )
          return r ? s._(/*BTDS*/ "Dark Navy") : s._(/*BTDS*/ "Light Blue");
        if (
          e === o("WAWebChatThemeEnums").Theme.DarkCerulean ||
          e === o("WAWebChatThemeEnums").Theme.SkyBlue
        )
          return r
            ? s._(/*BTDS*/ "Dark Indigo Blue")
            : s._(/*BTDS*/ "Pale Blue");
        if (e === o("WAWebChatThemeEnums").Theme.CharcoalGreen)
          return r
            ? s._(/*BTDS*/ "Dark Gray Green")
            : s._(/*BTDS*/ "Light Gray Green");
        if (e === o("WAWebChatThemeEnums").Theme.PersianPlum)
          return r ? s._(/*BTDS*/ "Dark Red Brown") : s._(/*BTDS*/ "Light Red");
        if (
          e === o("WAWebChatThemeEnums").Theme.DuneMono ||
          e === o("WAWebChatThemeEnums").Theme.DefaultMono
        )
          return r ? s._(/*BTDS*/ "Dark Gray") : s._(/*BTDS*/ "Light Gray");
        if (e === o("WAWebChatThemeEnums").Theme.Brown)
          return r ? s._(/*BTDS*/ "Dark Brown") : s._(/*BTDS*/ "Light Brown");
        if (e === o("WAWebChatThemeEnums").Theme.Cream)
          return r ? s._(/*BTDS*/ "Dark Cream") : s._(/*BTDS*/ "Light Cream");
        if (e === o("WAWebChatThemeEnums").Theme.Emerald)
          return r
            ? s._(/*BTDS*/ "Dark Emerald")
            : s._(/*BTDS*/ "Light Emerald");
        if (e === o("WAWebChatThemeEnums").Theme.Lemon)
          return r ? s._(/*BTDS*/ "Dark Yellow") : s._(/*BTDS*/ "Light Yellow");
        if (e === o("WAWebChatThemeEnums").Theme.Lime)
          return r ? s._(/*BTDS*/ "Dark Lime") : s._(/*BTDS*/ "Light Lime");
        if (e === o("WAWebChatThemeEnums").Theme.Pink)
          return r ? s._(/*BTDS*/ "Dark Pink") : s._(/*BTDS*/ "Pink");
        if (e === o("WAWebChatThemeEnums").Theme.Red)
          return r ? s._(/*BTDS*/ "Dark Red") : s._(/*BTDS*/ "Light Red");
        if (e === o("WAWebChatThemeEnums").Theme.SunriseOrange)
          return r ? s._(/*BTDS*/ "Dark Orange") : s._(/*BTDS*/ "Peach");
        if (e === o("WAWebChatThemeEnums").Theme.WarmYellow)
          return r
            ? s._(/*BTDS*/ "Dark Warm Yellow")
            : s._(/*BTDS*/ "Light Warm Yellow");
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(n != null ? n : o("WAWebChatThemeEnums").Theme.Default);
    }
    l.getColorSchemeA11yName = e;
  },
  226,
);
