__d(
  "WAWebApiPrepareCtwaContextSend",
  ["WAWebLinkify", "WAWebProtobufsE2E.pb", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n, r;
      if (t != null) return babelHelpers.extends({}, t);
      var a = e == null ? void 0 : e.sourceUrl;
      if (!(a == null || a === "")) {
        var i = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        if (i != null) {
          var l = o("WAWebLinkify").findLink(a, !1, i);
          return {
            sourceUrl: a,
            sourceType: "",
            sourceId: "",
            mediaType: o("WAWebProtobufsE2E.pb")
              .ContextInfo$ExternalAdReplyInfo$MediaType.NONE,
            isSuspiciousLink: !!(
              (n =
                l == null || (r = l.suspiciousCharacters) == null
                  ? void 0
                  : r.size) != null && n
            ),
          };
        }
      }
    }
    l.prepareCtwaContextSend = e;
  },
  98,
);
