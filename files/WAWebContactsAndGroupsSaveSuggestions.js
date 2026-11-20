__d(
  "WAWebContactsAndGroupsSaveSuggestions",
  [
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactsAndGroupsChatMessageCountsCache",
    "WAWebContactsAndGroupsContacts",
    "WAWebContactsAndGroupsGroupInteractions",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e
        .filter(function (e) {
          return e.isSaved && e.messageCount > 0;
        })
        .map(function (e) {
          return e.messageCount;
        });
      if (t.length === 0) return [];
      var n = u(t);
      return e
        .filter(function (e) {
          return s(e) && e.messageCount > n;
        })
        .sort(function (e, t) {
          return (
            t.messageCount - e.messageCount || t.lastChatTime - e.lastChatTime
          );
        })
        .map(function (e) {
          var t = e.contact,
            n = e.messageCount;
          return { contact: t, messageCount: n };
        });
    }
    function s(e) {
      return !e.isSaved && e.sentCount > 0;
    }
    function u(e) {
      var t = [].concat(e).sort(function (e, t) {
        return e - t;
      });
      return t[Math.ceil(t.length / 2) - 1];
    }
    function c(e, t) {
      var n = new Map(),
        r = new Set();
      return (
        o("WAWebChatCollection").ChatCollection.forEach(function (a) {
          var i,
            l = o("WAWebContactsAndGroupsGroupInteractions").getPersonKey(
              (i = a.accountLid) != null ? i : a.id,
            );
          if (l != null) {
            p(a) && r.add(l);
            var s = e.get(a.id.toString()),
              u =
                s != null &&
                o("WAWebContactsAndGroupsChatMessageCountsCache").isCountedChat(
                  a,
                  t,
                )
                  ? m(a)
                  : null;
            s != null && u != null && n.set(l, d(n.get(l), u, a, s));
          }
        }),
        Array.from(n)
          .filter(function (e) {
            var t = e[0],
              n = e[1];
            return n.isSaved || !r.has(t);
          })
          .map(function (e) {
            var t = e[1];
            return t;
          })
      );
    }
    function d(e, t, n, r) {
      var o,
        a,
        i,
        l,
        s = (e == null ? void 0 : e.isSaved) === !0 ? e : t,
        u = s.contact,
        c = s.isSaved;
      return {
        contact: u,
        isSaved: c,
        lastChatTime: Math.max(
          (o = e == null ? void 0 : e.lastChatTime) != null ? o : 0,
          (a = n.t) != null ? a : 0,
        ),
        messageCount:
          ((i = e == null ? void 0 : e.messageCount) != null ? i : 0) +
          r.received +
          r.sent,
        sentCount:
          ((l = e == null ? void 0 : e.sentCount) != null ? l : 0) + r.sent,
      };
    }
    function m(e) {
      var t,
        n = o("WAWebContactsAndGroupsContacts").getUnsavedChatContact(e);
      if (n != null) return { contact: n, isSaved: !1 };
      var r = e.accountLid,
        a =
          (t =
            r == null
              ? null
              : o("WAWebContactCollection").ContactCollection.get(r)) != null
            ? t
            : e.contact;
      return o("WAWebFrontendContactGetters").getIsMyContact(a)
        ? { contact: a, isSaved: !0 }
        : null;
    }
    function p(e) {
      var t = e.accountLid,
        n = t == null ? null : o("WAWebLidMigrationUtils").toPn(t);
      return [e.id, t, n].some(function (e) {
        var t =
          e == null
            ? null
            : o("WAWebContactCollection").ContactCollection.get(e);
        return (
          t != null &&
          (o("WAWebFrontendContactGetters").getIsContactBlocked(t) ||
            o("WAWebContactGetters").getIsBusiness(t))
        );
      });
    }
    ((l.pickSaveSuggestions = e),
      (l.isSaveCandidate = s),
      (l.getPersonMessageCounts = c));
  },
  98,
);
