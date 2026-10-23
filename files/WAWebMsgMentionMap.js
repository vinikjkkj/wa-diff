__d(
  "WAWebMsgMentionMap",
  [
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebMentionDisplayUtils",
    "WAWebWid",
    "WAWebWidFormat",
    "escapeRegex",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (!e.mentionedJidList || !e.mentionedJidList.length) return null;
      var t = {};
      return (
        e.mentionedJidList.forEach(function (e) {
          t["@" + (r("WAWebWid").user(e) || "")] = o(
            "WAWebContactCollection",
          ).ContactCollection.gadd(e);
        }),
        t
      );
    }
    function s(e, t) {
      var n,
        a = {},
        i = {};
      return (
        ((n = e.mentionedJidList) != null ? n : []).forEach(function (e) {
          var t,
            n = "@" + (r("WAWebWid").user(e) || ""),
            l = e.isLid() ? o("WAWebApiContact").getPhoneNumber(e) : null,
            s =
              (t = o("WAWebContactCollection").ContactCollection.get(e)) != null
                ? t
                : l != null
                  ? o("WAWebContactCollection").ContactCollection.get(l)
                  : null;
          s != null ? (a[n] = s) : (i[n] = l != null ? l : e);
        }),
        { mentions: r("isEmptyObject")(a) ? null : a, text: u(t, i) }
      );
    }
    function u(e, t) {
      if (r("isEmptyObject")(t)) return e;
      var n = Object.keys(t).map(r("escapeRegex")).join("|");
      return e.replace(new RegExp("(" + n + ")(?!\\d)", "g"), function (e) {
        return o("WAWebMentionDisplayUtils").addAtPrefixForMention(
          o("WAWebWidFormat").widToFormattedUser(t[e]),
        );
      });
    }
    function c(e) {
      return !e.groupMentions || !e.groupMentions.length
        ? null
        : e.groupMentions.reduce(function (e, t) {
            var n,
              r = "@" + t.groupJid.toString();
            return ((e[r] = (n = t.groupSubject) != null ? n : ""), e);
          }, {});
    }
    ((l.calculateMsgMentionMap = e),
      (l.calculateKnownMsgMentions = s),
      (l.calculateMsgGroupMentionMap = c));
  },
  98,
);
