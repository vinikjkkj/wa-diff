__d(
  "WAWebNavBarCometRouting",
  [
    "WAWebNavBarTypes",
    "WAXWhatsAppWebCometRoutedChannelsControllerRouteBuilder",
    "WAXWhatsAppWebCometRoutedMainControllerRouteBuilder",
    "WAXWhatsAppWebCometRoutedUpdatesControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map([
      [
        o("WAWebNavBarTypes").NavBarItems.Updates,
        r("WAXWhatsAppWebCometRoutedUpdatesControllerRouteBuilder")
          .buildUri({})
          .toString(),
      ],
      [
        o("WAWebNavBarTypes").NavBarItems.Chats,
        r("WAXWhatsAppWebCometRoutedMainControllerRouteBuilder")
          .buildUri({})
          .toString(),
      ],
      [
        o("WAWebNavBarTypes").NavBarItems.Newsletters,
        r("WAXWhatsAppWebCometRoutedChannelsControllerRouteBuilder")
          .buildUri({})
          .toString(),
      ],
    ]);
    function s(t) {
      return e.get(t);
    }
    function u(t) {
      var n = t.endsWith("/") ? t : t + "/",
        r = [n, t],
        a = null,
        i = 0,
        l = function () {
          var e = s[0],
            t = s[1];
          r.some(function (e) {
            return e.startsWith(t);
          }) &&
            t.length > i &&
            ((a = e), (i = t.length));
        };
      for (var s of e) l();
      return a != null ? a : o("WAWebNavBarTypes").NavBarItems.Chats;
    }
    ((l.getCometRouteForNavBarItem = s), (l.getNavBarItemForRouteUrl = u));
  },
  98,
);
