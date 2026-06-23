__d(
  "WAWebDBProcessReplyMsgs",
  [
    "WADeepEquals",
    "WAWebBatchedStatusIdUtils",
    "WAWebDBMessageSerialization",
    "WAWebDBMsgUtils",
    "WAWebGroupType",
    "WAWebMessageEditUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "filterObject",
    "isStringNullOrEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length) {
            var t = yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message"],
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t[0],
                        a = new Set();
                      e.forEach(function (e) {
                        var t = u(e);
                        t !== "missing-stanza-id" && a.add(t.toString());
                      });
                      var i = (yield o("WAWebDBMsgUtils").getMsgsByMsgKey(
                          Array.from(a.values()),
                        )).filter(function (e) {
                          var t = o("WAWebMessageEditUtils").getMsgEditType(
                            e.type,
                          );
                          return t != null;
                        }),
                        l = new Map(
                          i.map(function (e) {
                            return [e.id.toString(), e];
                          }),
                        ),
                        s = e.filter(function (e) {
                          var t = u(e);
                          return t === "missing-stanza-id"
                            ? !1
                            : l.has(t.toString());
                        });
                      if (s.length) {
                        var c = [];
                        if (
                          (s.forEach(function (e) {
                            var t = u(e);
                            if (t !== "missing-stanza-id") {
                              var n = r("nullthrows")(l.get(t.toString()));
                              e.quotedMsg == null
                                ? c.push(
                                    babelHelpers.extends({}, e, {
                                      quotedMsg: n,
                                    }),
                                  )
                                : d(r("nullthrows")(e.quotedMsg), n) &&
                                  c.push(
                                    babelHelpers.extends({}, e, {
                                      quotedMsg: n,
                                    }),
                                  );
                            }
                          }),
                          !!c.length)
                        )
                          return (
                            yield n.bulkCreateOrMerge(
                              c.map(function (e) {
                                return o(
                                  "WAWebDBMessageSerialization",
                                ).dbRowFromMessage(e);
                              }),
                            ),
                            c
                          );
                      }
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              );
            t != null &&
              t.length &&
              t.forEach(function (t) {
                var n = r("nullthrows")(
                  e.find(function (e) {
                    return e.id.equals(t.id);
                  }),
                );
                n.quotedMsg = t.quotedMsg;
              });
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      var t, n;
      if (r("isStringNullOrEmpty")(e.quotedStanzaID))
        return "missing-stanza-id";
      var a = (t = e.quotedParticipant) != null ? t : void 0,
        i = (n = e.quotedRemoteJid) != null ? n : e.id.remote,
        l = e.quotedStanzaID,
        s =
          l != null && r("WAWebWid").isStatus(i)
            ? o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(l)
            : l;
      return new (r("WAWebMsgKey"))({
        id: s,
        fromMe: o("WAWebUserPrefsMeUser").isMeAccount(a),
        remote: i,
        participant:
          o("WAWebMsgGetters").getIsGroupMsg(e) ||
          r("WAWebWid").isStatus(i) ||
          (a != null && a.isBot())
            ? a
            : void 0,
      });
    }
    var c = {
      inviteGrpType: o("WAWebGroupType").GroupType.DEFAULT,
      thumbnail: "",
      body: "",
      caption: "",
      interactiveAnnotations: [],
      scanLengths: [],
      staticUrl: "",
      pageCount: 0,
    };
    function d(e, t) {
      var n = r("filterObject")(e, function (e, t) {
          return e != null && t !== "kind";
        }),
        a = r("filterObject")(t, function (e, t) {
          return Object.prototype.hasOwnProperty.call(n, t) && t !== "kind";
        }),
        i = m(n),
        l = m(a);
      return !o("WADeepEquals").deepEqual(i, l);
    }
    function m(e) {
      var t = babelHelpers.extends({}, c);
      for (var n of Object.entries(e)) {
        var r = n[0],
          o = n[1];
        o !== void 0 && (t[r] = o);
      }
      return t;
    }
    ((l.processReplyMsgs = e), (l.createQuotedMsgKey = u));
  },
  98,
);
