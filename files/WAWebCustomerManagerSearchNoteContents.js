__d(
  "WAWebCustomerManagerSearchNoteContents",
  [
    "WAWebApiContact",
    "WAWebCustomerManagerChatJid",
    "WAWebCustomerManagerChatResolver",
    "WAWebGetNotesByChatJidsJob",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map(),
      s = { contents: e, contentsByNoteId: new Map() };
    async function u(e) {
      return (await c(e)).contents;
    }
    async function c(e) {
      var t = d(e),
        n = t.chatJids,
        r = t.contactIdByChatJid;
      if (n.length === 0) return s;
      var a = await o("WAWebGetNotesByChatJidsJob").getNotesByChatJidsJob({
          chatJids: n,
        }),
        i = new Map(),
        l = new Map();
      for (var u of a) {
        var c,
          m = u.chatJid,
          p = u.content,
          _ = u.id,
          f = String(m),
          g = r.get(f);
        if (g != null) {
          var h = i.get(g);
          i.set(
            g,
            h == null
              ? p
              : h +
                  `
` +
                  p,
          );
          var y = (c = l.get(f)) != null ? c : new Map();
          (y.set(String(_), p), l.set(f, y));
        }
      }
      return { contents: i, contentsByNoteId: l };
    }
    function d(e) {
      var t = [],
        n = new Map();
      for (var r of e != null ? e : []) {
        var a = o("WAWebCustomerManagerChatJid").toChatJidOrNull(r);
        if (a != null) {
          var i = String(a);
          n.has(i) || (t.push(a), n.set(i, i));
        }
      }
      for (var l of [].concat(t)) {
        var s,
          u = String(l),
          c = o("WAWebWidFactory").createWid(u),
          d =
            c.isRegularUser() && c.isLid()
              ? o("WAWebApiContact").getPnIfLidIsLatestMapping(
                  o("WAWebWidFactory").asUserLidOrThrow(c),
                )
              : (s = o(
                    "WAWebCustomerManagerChatResolver",
                  ).resolveCustomerManagerChat(l)) == null
                ? void 0
                : s.id,
          m =
            d != null
              ? o("WAWebCustomerManagerChatJid").toChatJidOrNull(String(d))
              : null;
        if (m != null) {
          var p = String(m);
          n.has(p) || (t.push(m), n.set(p, u));
        }
      }
      return { chatJids: t, contactIdByChatJid: n };
    }
    ((l.EMPTY_SEARCH_NOTE_CONTENTS = e),
      (l.EMPTY_SEARCH_NOTE_SNAPSHOT = s),
      (l.loadCustomerSearchNoteContents = u),
      (l.loadCustomerSearchNoteSnapshot = c),
      (l.getCustomerSearchNoteScope = d));
  },
  98,
);
