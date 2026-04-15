__d(
  "WAWebNewsletterStatusApiParse",
  ["WAWebApiParseUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "channel_status",
      s = new RegExp(
        "^whatsapp:\\/\\/" + e + "\\/(\\w+)(?:\\/(\\w+))?\\/?(\\?.*)?$",
        "i",
      ),
      u = new RegExp(
        "^" +
          o("WAWebApiParseUtils").ORIGIN +
          o("WAWebApiParseUtils").OPTIONAL_PATH_PART +
          "/" +
          e +
          "/(\\w+)(?:/(\\w+))?\\/?(\\?.*)?$",
        "i",
      );
    function c(t) {
      try {
        var n = new URL(t);
        if (o("WAWebApiParseUtils").isWhatsappHost(n)) {
          var r = n.pathname,
            a = r.split("/"),
            i = a[0],
            l = a[1],
            c = a[2],
            m = a[3],
            p = babelHelpers.arrayLikeToArray(a).slice(4);
          if (l === e && c != null && c !== "")
            return p.length > 0 && !(p.length === 1 && p[0] === "")
              ? null
              : { inviteCode: c, statusId: d(m) };
        }
        var _ = t.match(u);
        if (_) {
          var f = _[2],
            g = _[3];
          if (f != null && f !== "") return { inviteCode: f, statusId: d(g) };
        }
      } catch (e) {}
      var h = t.match(s);
      if (h) {
        var y = h[1],
          C = h[2];
        if (y != null && y !== "") return { inviteCode: y, statusId: d(C) };
      }
      return null;
    }
    function d(e) {
      if (e == null || e === "" || !/^\d+$/.test(e)) return null;
      var t = parseInt(e, 10);
      return Number.isNaN(t) || t <= 0 ? null : e;
    }
    l.parseNewsletterStatusDeeplink = c;
  },
  98,
);
