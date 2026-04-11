__d(
  "WAWebNewsletterApiParse",
  [
    "$InternalEnum",
    "WAWebApiParseUtils",
    "WAWebChatEntryPoint",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["Handle", "InviteCode", "Id"]),
      s = "channel",
      u = "create",
      c = "directory",
      d = new RegExp(
        "^" +
          o("WAWebApiParseUtils").ORIGIN +
          o("WAWebApiParseUtils").OPTIONAL_PATH_PART +
          "/accept/?\\?channel_invite_code=(\\w+)(?:&.*)?$",
        "i",
      ),
      m = new RegExp("^whatsapp://(" + s + ")/(\\w+)/?(?:\\?.*)?$", "i");
    function p(e) {
      return e.length === 0 || (e.length === 1 && e[0] === "");
    }
    function _(t, n) {
      try {
        var r = new URL(t),
          a = r.pathname,
          i = a.split("/"),
          l = i[0],
          _ = i[1],
          g = i[2],
          h = babelHelpers.arrayLikeToArray(i).slice(3);
        if (_ === s && o("WAWebApiParseUtils").isWhatsappHost(r)) {
          if (p(h))
            switch (g) {
              case u:
                return { type: "create", url: r.href };
              case c:
                return { type: "directory", url: r.href };
              default:
                if (g != null && g !== "")
                  return {
                    identifier: g,
                    url: r.href,
                    identifierType: e.InviteCode,
                    type: "view",
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                      .Link,
                    discoverySurface:
                      n != null
                        ? n
                        : o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_LINK,
                  };
            }
          if (
            g !== u &&
            g !== c &&
            (h.length === 1 || (h.length === 2 && h[1] === ""))
          ) {
            var y = parseInt(h[0], 10);
            return babelHelpers.extends(
              {
                identifier: g,
                url: r.href,
                identifierType: e.InviteCode,
                type: "view",
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Link,
                discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                  .CHANNEL_LINK,
              },
              !Number.isNaN(y) && { serverId: y },
            );
          }
        }
        var C = f(d, t);
        if (C != null) return C;
        var b = f(m, t);
        return b != null ? b : null;
      } catch (e) {
        return null;
      }
    }
    function f(t, n) {
      var r = n.match(t);
      if (r) {
        var a = r[2];
        return a === u
          ? { type: "create", url: n }
          : a === c
            ? { type: "directory", url: n }
            : {
                identifier: r[2],
                url: r[1] || "/",
                identifierType: e.InviteCode,
                type: "view",
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .Deeplink,
                discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                  .CHANNEL_LINK,
              };
      }
      return null;
    }
    function g(e) {
      return e == null
        ? !1
        : e.startsWith("http://") || e.startsWith("https://")
          ? _(e) != null
          : _("https://" + e) != null;
    }
    ((l.NewsletterIdentifierType = e),
      (l.parseNewsletter = _),
      (l.isNewsletterInviteCode = g));
  },
  98,
);
