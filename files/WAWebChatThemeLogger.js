__d(
  "WAWebChatThemeLogger",
  [
    "WAWebChatListWallpaperWamEvent",
    "WAWebChatThemeScreenWamEvent",
    "WAWebChatThreadWallpaperWamEvent",
    "WAWebChatWallpaperWamEvent",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebGroupJoinRequestMetricUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.appearanceType,
        n = e.chatThemeChangeApplied,
        r = e.chatThemeId,
        a = e.chatThemeSource,
        i = e.chatWallpaperType,
        l = e.colorSchemeId,
        s = e.wallpaperId;
      new (o("WAWebChatThemeScreenWamEvent").ChatThemeScreenWamEvent)({
        appearanceType: t,
        chatThemeChangeApplied: n,
        chatThemeId: r,
        chatThemeSource: a,
        chatWallpaperType: i,
        colorSchemeId: l,
        wallpaperId: s,
      }).commit();
    }
    function s(e) {
      var t = e.appearanceType,
        n = e.chatWallpaperChangeApplied,
        r = e.chatWallpaperSource,
        a = e.chatWallpaperType,
        i = e.chatWallpaperVisit;
      new (o("WAWebChatWallpaperWamEvent").ChatWallpaperWamEvent)({
        appearanceType: t,
        chatWallpaperChangeApplied: n,
        chatWallpaperSource: r,
        chatWallpaperType: a,
        chatWallpaperVisit: i,
      }).commit();
    }
    function u(e) {
      var t = e.appearanceType,
        n = e.belongsToCommunity,
        r = e.chatThemeId,
        a = e.chatThemeSource,
        i = e.chatWid,
        l = e.colorSchemeId,
        s = e.wallpaperApplied,
        u = e.wallpaperId;
      new (o("WAWebChatThreadWallpaperWamEvent").ChatThreadWallpaperWamEvent)({
        appearanceType: t,
        belongsToCommunity: n,
        chatThemeId: r,
        chatThemeSource: a,
        chatType: o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(
          i,
        ),
        colorSchemeId: l,
        threadId: i.isGroup()
          ? o("WAWebGroupJoinRequestMetricUtils").getSanitizedJid(i)
          : i.toJid(),
        wallpaperApplied: s,
        wallpaperId: u,
      }).commit();
    }
    function c(e) {
      var t = e.anyWallpaperApplied,
        n = e.chatThemesEnabled;
      new (o("WAWebChatListWallpaperWamEvent").ChatListWallpaperWamEvent)({
        anyWallpaperApplied: t,
        chatThemesEnabled: n,
      }).commit();
    }
    ((l.logChatThemeScreenEvent = e),
      (l.logChatWallpaperEvent = s),
      (l.logChatThreadWallpaperEvent = u),
      (l.logChatListWallpaperEvent = c));
  },
  98,
);
