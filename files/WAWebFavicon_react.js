__d(
  "WAWebFavicon.react",
  ["WAWebNotificationIcon", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = e.children;
      return (
        s(function () {
          o("WAWebNotificationIcon").setTitleAndIcon(0);
        }, []),
        t
      );
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = e.children;
      return (
        s(function () {
          o("WAWebNotificationIcon").setTitleAndIcon(-1);
        }, []),
        t
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.DefaultFavicon = u),
      (l.ErrorFavicon = c));
  },
  98,
);
