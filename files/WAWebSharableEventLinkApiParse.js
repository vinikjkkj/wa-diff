__d(
  "WAWebSharableEventLinkApiParse",
  ["WAWebApiParseUtils", "WAWebGuestCoreEventLinkHandoff"],
  function (t, n, r, o, a, i, l) {
    var e = /^[\w-]+$/,
      s = /^https?:\/\/event\.whatsapp\.com\/([\w-]+)\/?(?:\?.*)?$/i,
      u = new RegExp(
        "^(?:" +
          o("WAWebApiParseUtils").ORIGIN +
          "|https://web\\.whatsapp\\.com)/guest/event/?\\?(.*)$",
        "i",
      ),
      c = /^whatsapp:\/\/event\/?\?(.*)$/i,
      d = new RegExp("^" + o("WAWebApiParseUtils").ORIGIN + "/?\\?(.*)$", "i");
    function m(e) {
      var t,
        n,
        r,
        a,
        i = (t = e.match(s)) == null ? void 0 : t[1];
      if (i != null) return { token: i };
      var l = (n = e.match(u)) == null ? void 0 : n[1];
      if (l != null) return p(new URLSearchParams(l).get("token"));
      var m = (r = e.match(c)) == null ? void 0 : r[1];
      if (m != null) return p(new URLSearchParams(m).get("code"));
      var _ = (a = e.match(d)) == null ? void 0 : a[1];
      if (_ != null) {
        var f = new URLSearchParams(_);
        return f.get("cmd") ===
          o("WAWebGuestCoreEventLinkHandoff").WA_WEB_EVENT_LINK_CMD
          ? p(f.get("token"))
          : null;
      }
      return null;
    }
    function p(t) {
      return t != null && e.test(t) ? { token: t } : null;
    }
    l.parseSharableEventLink = m;
  },
  98,
);
