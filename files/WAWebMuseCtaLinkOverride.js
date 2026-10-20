__d(
  "WAWebMuseCtaLinkOverride",
  ["WAWebHatchUrl", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = "6760173601";
    function s(t) {
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
    function u(e) {
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
    function c(e) {
      return s(e) || u(e);
    }
    function d(e) {
      var t;
      return e == null || !c(e) || r("justknobx")._("5912")
        ? e
        : (t = o("WAWebHatchUrl").getHatchJoinUrl()) != null
          ? t
          : e;
    }
    l.overrideCtaUrlIfNeeded = d;
  },
  98,
);
