__d(
  "WAWebFavicon.react",
  ["WAWebNotificationIcon", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("react-compiler-runtime").c(1),
        n = e.children,
        r;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = []), (t[0] = r))
          : (r = t[0]),
        s(c, r),
        n
      );
    }
    function c() {
      o("WAWebNotificationIcon").setTitleAndIcon(0);
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(1),
        n = e.children,
        r;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = []), (t[0] = r))
          : (r = t[0]),
        s(m, r),
        n
      );
    }
    function m() {
      o("WAWebNotificationIcon").setTitleAndIcon(-1);
    }
    ((l.DefaultFavicon = u), (l.ErrorFavicon = d));
  },
  98,
);
