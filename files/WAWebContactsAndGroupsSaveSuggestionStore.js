__d(
  "WAWebContactsAndGroupsSaveSuggestionStore",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactsAndGroupsChatMessageCountsCache",
    "WAWebContactsAndGroupsSaveSuggestions",
    "WAWebNoop",
    "WAWebUIListener",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [
        "add",
        "remove",
        "reset",
        "change:name",
        "change:orgMemberName",
        "change:isUsernameContact",
        "change:isContactBlocked",
        "change:isBusiness",
      ],
      c = null;
    function d() {
      var e, t;
      return (e = (t = c) == null ? void 0 : t.shown) != null ? e : null;
    }
    function m(e) {
      var t = c != null ? c : _();
      return (
        t.listeners.add(e),
        function () {
          (t.listeners.delete(e),
            t.listeners.size === 0 && c === t && (t.stop(), (c = null)));
        }
      );
    }
    function p(e) {
      var t = c != null ? c : _();
      t.renderedCount++;
      var n = m(e),
        r = !0;
      return function () {
        r && ((r = !1), t.renderedCount--, n(), f(t));
      };
    }
    function _() {
      var e = {
        isUpdateScheduled: !1,
        listeners: new Set(),
        renderedCount: 0,
        shown: null,
        stop: r("WAWebNoop"),
      };
      c = e;
      var t = function () {
          return f(e);
        },
        n = function (n) {
          n.id.isUser() && t();
        },
        a = o(
          "WAWebContactsAndGroupsChatMessageCountsCache",
        ).startChatMessageCountsScan(),
        i = o(
          "WAWebContactsAndGroupsChatMessageCountsCache",
        ).subscribeToChatMessageCounts(t);
      o("WAWebChatCollection")
        .ChatCollection.on("add", t)
        .on("remove", t)
        .on("reset", t)
        .on("change:t", n)
        .on("change:isLocked", n)
        .on("change:msgsLength", n)
        .on("change:createdLocally", n)
        .on("change:chatViewMode", n);
      var l = u.map(function (e) {
        return new (o("WAWebUIListener").Listener)(
          o("WAWebContactCollection").ContactCollection,
          e,
          t,
        );
      });
      return (
        l.forEach(function (e) {
          return e.engage();
        }),
        (e.stop = function () {
          (a(),
            i(),
            o("WAWebChatCollection").ChatCollection.off(null, t).off(null, n),
            l.forEach(function (e) {
              return e.disengage();
            }));
        }),
        (e.shown = h(e)),
        e
      );
    }
    function f(t) {
      t.isUpdateScheduled ||
        ((t.isUpdateScheduled = !0),
        (s || (s = n("Promise"))).resolve().then(function () {
          if (((t.isUpdateScheduled = !1), c === t))
            try {
              g(t);
            } catch (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "contacts and groups: updating the save suggestion failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t));
            }
        }));
    }
    function g(e) {
      var t,
        n,
        r = h(e);
      ((r == null ? void 0 : r.contact) ===
        ((t = e.shown) == null ? void 0 : t.contact) &&
        (r == null ? void 0 : r.messageCount) ===
          ((n = e.shown) == null ? void 0 : n.messageCount)) ||
        ((e.shown = r),
        e.listeners.forEach(function (e) {
          return e();
        }));
    }
    function h(e) {
      var t,
        n = e.renderedCount,
        r = e.shown,
        a = o(
          "WAWebContactsAndGroupsChatMessageCountsCache",
        ).getChatMessageCountsSnapshot();
      if (a == null) return null;
      var i = o("WAWebContactsAndGroupsSaveSuggestions").getPersonMessageCounts(
          a,
          o("WATimeUtils").unixTime(),
        ),
        l =
          n > 0 && r != null
            ? i.find(function (e) {
                return (
                  o("WAWebContactsAndGroupsSaveSuggestions").isSaveCandidate(
                    e,
                  ) && e.contact.id.equals(r.contact.id)
                );
              })
            : null;
      return l != null
        ? { contact: l.contact, messageCount: l.messageCount }
        : (t = o("WAWebContactsAndGroupsSaveSuggestions").pickSaveSuggestions(
              i,
            )[0]) != null
          ? t
          : null;
    }
    ((l.getShownSaveSuggestion = d),
      (l.subscribeToShownSaveSuggestion = m),
      (l.subscribeToRenderedSaveSuggestion = p));
  },
  98,
);
