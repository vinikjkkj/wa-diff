__d(
  "WAWebAutoLogoutGating",
  ["WAWebEnvironment", "WAWebUA"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = s();
      return e;
    }
    function s() {
      return r("WAWebEnvironment").isWindows
        ? !1
        : o("WAWebUA").UA.hasCredentiallessIframeSupport &&
            !o("WAWebUA").UA.isOculusBroswer;
    }
    function u() {
      var e = self.location !== self.parent.location;
      if (!e) return !1;
      var t = new URLSearchParams(window.location.search),
        n = t.get("autologout");
      return n === "1";
    }
    function c() {
      var e = new URL(window.location.href);
      return (e.searchParams.set("autologout", "1"), e.toString());
    }
    ((l.isAutoLogoutEnabled = e),
      (l.isRunningInAutoLogoutIframe = u),
      (l.getAutoLogoutIframeUrl = c));
  },
  98,
);
