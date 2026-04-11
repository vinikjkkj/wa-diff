__d(
  "WAWebSyncdResolveMessages",
  [
    "Promise",
    "WAWebABProps",
    "WAWebSchemaMessage",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      for (var n = [], r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
      return n;
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          r === void 0 && (r = 50);
          var a = s(t, r),
            i = yield (e || (e = n("Promise"))).all(
              a.map(function (e) {
                return o("WAWebSchemaMessage")
                  .getMessageTable()
                  .startsWithAnyOf(["id"], e);
              }),
            ),
            l = new Set();
          for (var u of i) for (var c of u) c && !l.has(c.id) && l.add(c.id);
          return Array.from(l);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = new Map(),
            i = (yield (e || (e = n("Promise"))).all(
              t.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e.indexParts,
                        n = t[1],
                        i = t[2],
                        l = t[3],
                        s = t[4];
                      if (!n || !i || !l || !s || !r("WAWebWid").isWid(n))
                        return null;
                      var u = yield o(
                        "WAWebSyncdGetChat",
                      ).resolveChatForMutationIndex(
                        o("WAWebWidFactory").createWid(n),
                      );
                      if (u.success) {
                        var c = u.chat.id;
                        a.set(n, c);
                        var d = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                          c,
                          i,
                          l,
                          s,
                        );
                        return d != null
                          ? o(
                              "WAWebSyncdIndexUtils",
                            ).msgKeyToDbIdWithoutFromMeParticipant(d)
                          : null;
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            )).filter(Boolean);
          return { incomingRemoteToLocalChatId: a, msgKeys: i };
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "synced_message_keys_processing_type",
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebABProps").getABPropConfigValue(
            "message_keys_async_chunk_size",
          );
          return p() === "async-chunk" ? yield y(e, t) : yield g(e);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield d(e),
            n = t.incomingRemoteToLocalChatId,
            r = t.msgKeys,
            a = [];
          return (
            yield o("WAWebSchemaMessage")
              .getMessageTable()
              .startsWithAnyOf(["id"], r)
              .then(function (e) {
                return e.forEach(function (e) {
                  e && a.push(e.id);
                });
              }),
            { messagesInDB: a, incomingRemoteToLocalChatId: n }
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield d(e),
            r = n.incomingRemoteToLocalChatId,
            o = n.msgKeys,
            a = yield u(o, t);
          return { messagesInDB: a, incomingRemoteToLocalChatId: r };
        })),
        C.apply(this, arguments)
      );
    }
    l.resolveMessagesForMutations = _;
  },
  98,
);
