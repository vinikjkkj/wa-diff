__d(
  "WAWebAutoLogoutGating",
  ["WAWebEnvironment", "WAWebUA"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = s();
      return e;
    }
    function s() {
      return r("WAWebEnvironment").isWindows || o("WAWebUA").UA.isOculusBrowser
        ? !1
        : o("WAWebUA").UA.hasCredentiallessIframeSupport || u();
    }
    function u() {
      var e = self.HTMLIFrameElement;
      return e != null && "credentialless" in e.prototype;
    }
    function c() {
      var e = self.location !== self.parent.location;
      if (!e) return !1;
      var t = new URLSearchParams(window.location.search),
        n = t.get("autologout");
      return n === "1";
    }
    function d() {
      var e = new URL(window.location.href);
      return (e.searchParams.set("autologout", "1"), e.toString());
    }
    ((l.isAutoLogoutEnabled = e),
      (l.isRunningInAutoLogoutIframe = c),
      (l.getAutoLogoutIframeUrl = d));
  },
  98,
);
