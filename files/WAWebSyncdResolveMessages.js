__d(
  "WAWebSyncdResolveMessages",
  [
    "Promise",
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
    var u = 50;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = s(t, u),
            a = yield (e || (e = n("Promise"))).all(
              r.map(function (e) {
                return o("WAWebSchemaMessage")
                  .getMessageTable()
                  .startsWithAnyOf(["id"], e);
              }),
            ),
            i = new Set();
          for (var l of a) for (var c of l) c && !i.has(c.id) && i.add(c.id);
          return Array.from(i);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield m(e),
            n = t.incomingRemoteToLocalChatId,
            r = t.msgKeys,
            o = yield c(r);
          return { messagesInDB: o, incomingRemoteToLocalChatId: n };
        })),
        f.apply(this, arguments)
      );
    }
    l.resolveMessagesForMutations = _;
  },
  98,
);
