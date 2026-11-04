__d(
  "WAWebContactsAndGroupsGroupInteractions",
  [
    "WAWebBotUtils",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new Map();
      return (
        e.forEach(function (n, r) {
          var o = e[r - 1];
          if (o != null && o.fromMe !== n.fromMe) {
            var a = n.fromMe ? o : n;
            d(t, a.author, Math.max(o.t, n.t));
          }
          c(n).forEach(function (e) {
            return d(t, e, n.t);
          });
        }),
        t
      );
    }
    function s(e) {
      var t;
      if (
        !e.isUser() ||
        e.isBot() ||
        e.isPSA() ||
        o("WAWebBotUtils").isAnyMetaAiBot(e) ||
        o("WAWebUserPrefsMeUser").isMeAccount(e)
      )
        return null;
      var n = o("WAWebWidFactory").asUserWidOrThrow(e);
      return (
        (t = o("WAWebLidMigrationUtils").toUserLid(n)) != null ? t : n
      ).toString();
    }
    function u(e, t) {
      t.forEach(function (t, n) {
        var r;
        e.set(n, Math.max((r = e.get(n)) != null ? r : 0, t));
      });
    }
    function c(e) {
      if (e.fromMe) return [e.quotedParticipant].concat(e.mentionedJidList);
      var t =
        o("WAWebUserPrefsMeUser").isMeAccount(e.quotedParticipant) ||
        e.mentionedJidList.some(function (e) {
          return o("WAWebUserPrefsMeUser").isMeAccount(e);
        });
      return t ? [e.author] : [];
    }
    function d(e, t, n) {
      var r = t == null ? null : s(t);
      if (r != null) {
        var o;
        e.set(r, Math.max((o = e.get(r)) != null ? o : 0, n));
      }
    }
    ((l.getGroupInteractionTimes = e),
      (l.getPersonKey = s),
      (l.mergeGroupInteractionTimes = u));
  },
  98,
);
