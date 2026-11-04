__d(
  "WAWebContactsAndGroupsPanelHistory",
  ["WAWebChatCollection", "WAWebContactCollection", "WAWebFrontendChatGetters"],
  function (t, n, r, o, a, i, l) {
    var e = 0;
    function s(t) {
      return ((e += 1), { key: e, target: t });
    }
    function u(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = p(e),
            r = t.at(-1);
          n != null && (r == null || !d(r.target, n)) && t.push(s(n));
        }),
        t
      );
    }
    function c(e) {
      for (var t = e.length; t > 0 && p(e[t - 1].target) == null; ) t -= 1;
      return e.slice(0, t);
    }
    function d(e, t) {
      return e.kind === "contact" && t.kind === "contact"
        ? e.contact.id.equals(t.contact.id)
        : e.kind === "group" && t.kind === "group"
          ? e.chat.id.equals(t.chat.id)
          : !1;
    }
    function m(e) {
      return p(e) == null;
    }
    function p(e) {
      if (e.kind === "contact") {
        var t = o("WAWebContactCollection").ContactCollection.get(e.contact.id);
        return t == null ? null : { contact: t, kind: "contact" };
      }
      var n = o("WAWebChatCollection").ChatCollection.get(e.chat.id);
      return n != null && _(n) ? { chat: n, kind: "group" } : null;
    }
    function _(e) {
      var t;
      return (
        o("WAWebFrontendChatGetters").getIsCommunity(e) ||
        ((t = e.groupMetadata) == null
          ? void 0
          : t.participants.iAmMember()) === !0
      );
    }
    ((l.createPanelEntry = s),
      (l.restorePanelEntries = u),
      (l.dropGonePanelEntries = c),
      (l.isSamePanelTarget = d),
      (l.isPanelTargetGone = m));
  },
  98,
);
