__d(
  "WAWebDBProcessReplyMsgs",
  [
    "WADeepEquals",
    "WALogger",
    "WAWebBatchedStatusIdUtils",
    "WAWebCommonMsgUtils",
    "WAWebDBMessageSerialization",
    "WAWebDBMsgUtils",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebMessageEditUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "filterObject",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length) {
            var t = yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message"],
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t[0],
                        a = f(),
                        i = e.map(function (e) {
                          return { msg: e, keys: _(e, a) };
                        }),
                        l = new Set(
                          i.flatMap(function (e) {
                            var t = e.keys;
                            return t;
                          }),
                        ),
                        s = (yield o("WAWebDBMsgUtils").getMsgsByMsgKey(
                          Array.from(l.values()),
                        )).filter(function (e) {
                          return a
                            ? !o("WAWebCommonMsgUtils").isPlaceholderMsg(
                                e.type,
                              ) &&
                                e.type !==
                                  o("WAWebMsgType").MSG_TYPE.QUARANTINED &&
                                e.type !==
                                  o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                                !o("WAWebCommonMsgUtils").isNotificationType(
                                  e.type,
                                  e.subtype,
                                )
                            : o("WAWebMessageEditUtils").getMsgEditType(
                                e.type,
                              ) != null;
                        }),
                        u = new Map(
                          s.map(function (e) {
                            return [e.id.toString(), e];
                          }),
                        ),
                        c = [];
                      if (
                        (i.forEach(function (e) {
                          var t = e.keys,
                            n = e.msg,
                            o = t.find(function (e) {
                              return u.has(e);
                            });
                          o != null &&
                            c.push({
                              msg: n,
                              quotedMsg: r("nullthrows")(u.get(o)),
                            });
                        }),
                        !!c.length)
                      ) {
                        var d = [];
                        if (
                          (c.forEach(function (e) {
                            var t = e.msg,
                              n = e.quotedMsg;
                            t.quotedMsg == null
                              ? d.push(
                                  babelHelpers.extends({}, t, { quotedMsg: n }),
                                )
                              : o("WAWebMessageEditUtils").getMsgEditType(
                                  n.type,
                                ) != null &&
                                C(r("nullthrows")(t.quotedMsg), n) &&
                                d.push(
                                  babelHelpers.extends({}, t, { quotedMsg: n }),
                                );
                          }),
                          !!d.length)
                        )
                          return (
                            yield n.bulkCreateOrMerge(
                              d.map(function (e) {
                                return o(
                                  "WAWebDBMessageSerialization",
                                ).dbRowFromMessage(e);
                              }),
                            ),
                            d
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
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.filter(p);
          if (!(n.length === 0 || !f()))
            try {
              yield u(n);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[reply-messages] processReplyMsgs failed, source: ",
                      "",
                    ])),
                  t,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("process-reply-msgs-failed");
            }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return e.quotedMsg == null && !r("isStringNullOrEmpty")(e.quotedStanzaID);
    }
    function _(e, t) {
      var n = g(function () {
        return h(e);
      });
      if (n == null || n === "missing-stanza-id") return [];
      if (!t) return [n.toString()];
      var r = g(function () {
        return o("WAWebLidMigrationUtils").getAlternateMsgKey(n);
      });
      return r == null ? [n.toString()] : [n.toString(), r.toString()];
    }
    function f() {
      return r("justknobx")._("6899");
    }
    function g(t) {
      try {
        return t();
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[reply-messages] failed to create quoted msg key",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("reply-msgs-quoted-key-fail"),
          null
        );
      }
    }
    function h(e) {
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
    var y = {
      inviteGrpType: o("WAWebGroupType").GroupType.DEFAULT,
      thumbnail: "",
      body: "",
      caption: "",
      interactiveAnnotations: [],
      scanLengths: [],
      staticUrl: "",
      pageCount: 0,
    };
    function C(e, t) {
      var n = r("filterObject")(e, function (e, t) {
          return e != null && t !== "kind";
        }),
        a = r("filterObject")(t, function (e, t) {
          return Object.prototype.hasOwnProperty.call(n, t) && t !== "kind";
        }),
        i = b(n),
        l = b(a);
      return !o("WADeepEquals").deepEqual(i, l);
    }
    function b(e) {
      var t = babelHelpers.extends({}, y);
      for (var n of Object.entries(e)) {
        var r = n[0],
          o = n[1];
        o !== void 0 && (t[r] = o);
      }
      return t;
    }
    ((l.processReplyMsgs = u),
      (l.hydrateReplyMsgsSafely = d),
      (l.createQuotedMsgKey = h));
  },
  98,
);
