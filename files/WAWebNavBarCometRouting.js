__d(
  "WAWebNavBarCometRouting",
  [
    "WAWebNavBarTypes",
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
    ]);
    function s(t) {
      return e.get(t);
    }
    function u(t) {
      var n = null,
        r = 0;
      for (var a of e) {
        var i = a[0],
          l = a[1];
        t.startsWith(l) && l.length > r && ((n = i), (r = l.length));
      }
      return n != null ? n : o("WAWebNavBarTypes").NavBarItems.Chats;
    }
    ((l.getCometRouteForNavBarItem = s), (l.getNavBarItemForRouteUrl = u));
  },
  98,
);
