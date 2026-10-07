__d(
  "WAWebCustomerManagerSearchNoteContents",
  [
    "WAWebApiContact",
    "WAWebCustomerManagerChatJid",
    "WAWebCustomerManagerChatResolver",
    "WAWebGetNotesByChatJidsJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map(),
      s = { contents: e, contentsByNoteId: new Map() };
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield d(e)).contents;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = p(e),
            n = t.chatJids,
            r = t.contactIdByChatJid;
          if (n.length === 0) return s;
          var a = yield o("WAWebGetNotesByChatJidsJob").getNotesByChatJidsJob({
              chatJids: n,
            }),
            i = new Map(),
            l = new Map();
          for (var u of a) {
            var c,
              d = u.chatJid,
              m = u.content,
              _ = u.id,
              f = String(d),
              g = r.get(f);
            if (g != null) {
              var h = i.get(g);
              i.set(g, h == null ? m : h + "\n" + m);
              var y = (c = l.get(f)) != null ? c : new Map();
              (y.set(String(_), m), l.set(f, y));
            }
          }
          return { contents: i, contentsByNoteId: l };
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
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
      (l.loadCustomerSearchNoteSnapshot = d),
      (l.getCustomerSearchNoteScope = p));
  },
  98,
);
