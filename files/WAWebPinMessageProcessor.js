__d(
  "WAWebPinMessageProcessor",
  [
    "Promise",
    "WANullthrows",
    "WAWebBackendApi",
    "WAWebDBCRUDOperationsPinInChat",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebDBStoreMessageOrphans",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPinsDbSerialization",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("compactMap")(e, function (e) {
              return e.pinParentKey;
            }),
            n = t.map(function (e) {
              return e.toString();
            }),
            a = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(n),
            i = new Map(
              a.map(function (e) {
                return [e.id.toString(), e];
              }),
            );
          return i;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
            e,
            function (e) {
              return r("WANullthrows")(e.pinParentKey);
            },
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = yield s(a),
            l = [],
            u = [];
          for (var d of a) {
            var m = i.get(r("WANullthrows")(d.pinParentKey).toString());
            m ? u.push(d) : l.push(d);
          }
          yield (e || (e = n("Promise"))).all([
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              l.length !== 0 &&
                (yield c(l),
                yield o(
                  "WAWebDBMarkFutureproofMessagesReparsed",
                ).markFutureproofMessagesReparsed(
                  l.map(function (e) {
                    return e.id.toString();
                  }),
                ));
            })(),
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (u.length !== 0) {
                var a = yield o("WAWebBackendApi").frontendSendAndReceive(
                  "updatePinCollection",
                  { msgs: u, removeMsgs: [] },
                );
                a &&
                  (yield o(
                    "WAWebDBCRUDOperationsPinInChat",
                  ).createOrUpdatePinInChat(
                    t,
                    a.map(function (e) {
                      return o("WAWebPinsDbSerialization").serializePinInChat(
                        e,
                      );
                    }),
                  ),
                  yield o(
                    "WAWebDBMarkFutureproofMessagesReparsed",
                  ).markFutureproofMessagesReparsed(
                    a.map(function (e) {
                      return e.msgKey.toString();
                    }),
                  ));
                var i = yield (e || (e = n("Promise"))).all(
                    r("compactMap")(u, function (e) {
                      return e.pinMessageType ===
                        o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                          .PIN_FOR_ALL
                        ? _(
                            t,
                            r("WANullthrows")(e.t),
                            r("WANullthrows")(
                              o("WAWebMsgGetters").getSender(e),
                            ),
                          )
                        : null;
                    }),
                  ),
                  l = yield o("WAWebBackendApi").frontendSendAndReceive(
                    "processMultipleMessages",
                    {
                      chatId: t,
                      msgObjs: i,
                      meta: { add: "after", isHistory: !1 },
                      processMessagesOrigin: "pinMessage",
                    },
                  );
                l && (yield o("WAWebDBProcessMessage").storeMessages(i, t));
              }
            })(),
          ]);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            i = o("WAWebUserPrefsMeUser").isMeAccount(n);
          return {
            id: new (r("WAWebMsgKey"))({
              id: yield r("WAWebMsgKey").newId(),
              fromMe: i,
              remote: e,
              participant: n,
            }),
            author: n,
            from: e,
            to: a,
            recipients: [],
            t: t,
            type: o("WAWebMsgType").MSG_TYPE.PINNED_MESSAGE,
            kind: o("WAWebMsgType").MsgKind.PinnedMessage,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            templateParams: [n],
          };
        })),
        f.apply(this, arguments)
      );
    }
    ((l.processPinMessages = m), (l.genSystemMessage = _));
  },
  98,
);
