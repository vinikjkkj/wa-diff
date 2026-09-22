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
      try {
        var t = new URL(e);
        if (
          t.protocol !== "whatsapp:" ||
          t.hostname.toLowerCase() !== "hatch" ||
          (t.pathname !== "" && t.pathname !== "/")
        )
          return !1;
        var n = t.searchParams.get("link_to_open");
        return n == null || new URL(n).protocol.toLowerCase() === "hatch:";
      } catch (e) {
        return !1;
      }
    }
    function d(e) {
      return u(e) || c(e) ? s : null;
    }
    function m(e) {
      if (e != null) {
        var t = d(e);
        if (t != null && !r("justknobx")._("5912")) return t;
      }
      return e;
    }
    l.overrideCtaUrlIfNeeded = m;
  },
  98,
);
