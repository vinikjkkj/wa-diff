__d(
  "WAWebLockChatSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebArchiveChatSync",
    "WAWebChatLockAction",
    "WAWebPinChatSync",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.chatJidIndex = 1),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 7;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.LockChat;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = [],
                  l = 0,
                  m = [],
                  p = 0,
                  _ = 0,
                  f = [],
                  g = yield (d || (d = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            var t;
                            if (e.operation !== "set")
                              return (
                                l++,
                                m.length < 3 && m.push(e.operation),
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState
                                      .Unsupported,
                                }
                              );
                            var n = e.indexParts[1],
                              s =
                                (t = e.value.lockChatAction) == null
                                  ? void 0
                                  : t.locked;
                            if (s == null)
                              return (
                                p++,
                                o("WAWebSyncdIndexUtils").malformedActionValue(
                                  a.collectionName,
                                )
                              );
                            if (!r("WAWebWid").isWid(n))
                              return (
                                _++,
                                f.length < 3 && f.push(String(n)),
                                a.malformedActionIndex()
                              );
                            var u = yield o(
                              "WAWebSyncdGetChat",
                            ).resolveChatForMutationIndex(
                              o("WAWebWidFactory").createWid(n),
                            );
                            if (!u.success)
                              return {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Orphan,
                                orphanModel: u.orphanModel,
                              };
                            var c = o("WAWebWidFactory").createWid(u.chat.id);
                            return (
                              i.push({ isLocked: s, chatId: c }),
                              {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Success,
                              }
                            );
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                return (
                  l > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "LockChatSync: ",
                          " operations not supported => ",
                          "",
                        ])),
                      l,
                      m,
                    ),
                  p > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "LockChatSync: ",
                          " malformed mutations with locked is null",
                        ])),
                      p,
                    ),
                  _ > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "LockChatSync: ",
                          " malformed mutations with chatJid not wid => ",
                          "",
                        ])),
                      _,
                      f,
                    ),
                  yield d.all(
                    i.map(function (e) {
                      return e.isLocked
                        ? o("WAWebChatLockAction").setChatAsLocked(e.chatId, {
                            syncWithPrimaries: !1,
                          })
                        : o("WAWebChatLockAction").setChatAsUnlocked(e.chatId, {
                            syncWithPrimaries: !1,
                          });
                    }),
                  ),
                  i.length > 0 &&
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "LockChatSync: updated lock status for ",
                          " chats",
                        ])),
                      i.length,
                    ),
                  g
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.getChatLockMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                  collection: this.collectionName,
                  indexArgs: [
                    yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                      n,
                      o("WASyncdConst").Actions.LockChat,
                    ),
                  ],
                  value: { lockChatAction: { locked: t } },
                  version: this.getVersion(),
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  timestamp: e,
                  action: this.getAction(),
                });
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.sendLockMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var a = t.isLocked,
                  i = o("WATimeUtils").unixTimeMs(),
                  l = [];
                (a &&
                  l.push(
                    r("WAWebArchiveChatSync").getArchiveChatMutation(i, !1, e),
                    o("WAWebPinChatSync").PinChatSync.getPinMutation(i, !1, e),
                  ),
                  l.push(this.getChatLockMutation(i, a, e)),
                  yield o("WAWebSyncdCoreApi").lockForSync(
                    [],
                    yield (d || (d = n("Promise"))).all(l),
                    function () {
                      return (d || (d = n("Promise"))).resolve();
                    },
                  ));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      p = new m();
    l.default = p;
  },
  98,
);
