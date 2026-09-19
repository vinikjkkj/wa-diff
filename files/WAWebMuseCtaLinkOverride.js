__d(
  "WAWebMuseCtaLinkOverride",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = "6760173601",
      s = "https://muse.ai/join";
    function u(t) {
      try {
        var n = new URL(t);
        return (
          n.protocol === "itms-apps:" &&
          n.hostname === "itunes.apple.com" &&
          n.pathname.endsWith("/id" + e)
        );
      } catch (e) {
        return !1;
      }
    }
    function c(e) {
      return e != null && u(e) && !r("justknobx")._("5912") ? s : e;
    }
    l.overrideCtaUrlIfNeeded = c;
  },
  98,
);
