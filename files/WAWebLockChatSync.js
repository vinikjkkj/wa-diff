__d(
  "WAWebLockChatSync",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.LockChat;
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              a = [],
              i = 0,
              l = [],
              d = 0,
              m = 0,
              p = [],
              _ = await Promise.all(
                n.map(async function (e) {
                  var n;
                  if (e.operation !== "set")
                    return (
                      i++,
                      l.length < 3 && l.push(e.operation),
                      {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  var s = e.indexParts[1],
                    u =
                      (n = e.value.lockChatAction) == null ? void 0 : n.locked;
                  if (u == null)
                    return (
                      d++,
                      o("WAWebSyncdIndexUtils").malformedActionValue(
                        t.collectionName,
                      )
                    );
                  if (!r("WAWebWid").isWid(s))
                    return (
                      m++,
                      p.length < 3 && p.push(String(s)),
                      t.malformedActionIndex()
                    );
                  var c = await o(
                    "WAWebSyncdGetChat",
                  ).resolveChatForMutationIndex(
                    o("WAWebWidFactory").createWid(s),
                  );
                  if (!c.success)
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Orphan,
                      orphanModel: c.orphanModel,
                    };
                  var _ = o("WAWebWidFactory").createWid(c.chat.id);
                  return (
                    a.push({ isLocked: u, chatId: _ }),
                    { actionState: o("WASyncdConst").SyncActionState.Success }
                  );
                }),
              );
            return (
              i > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "LockChatSync: ",
                      " operations not supported => ",
                      "",
                    ])),
                  i,
                  l,
                ),
              d > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "LockChatSync: ",
                      " malformed mutations with locked is null",
                    ])),
                  d,
                ),
              m > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "LockChatSync: ",
                      " malformed mutations with chatJid not wid => ",
                      "",
                    ])),
                  m,
                  p,
                ),
              await Promise.all(
                a.map(function (e) {
                  return e.isLocked
                    ? o("WAWebChatLockAction").setChatAsLocked(e.chatId, {
                        syncWithPrimaries: !1,
                      })
                    : o("WAWebChatLockAction").setChatAsUnlocked(e.chatId, {
                        syncWithPrimaries: !1,
                      });
                }),
              ),
              a.length > 0 &&
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "LockChatSync: updated lock status for ",
                      " chats",
                    ])),
                  a.length,
                ),
              _
            );
          }),
          (a.getChatLockMutation = async function (t, n, r) {
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [
                await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                  r,
                  o("WASyncdConst").Actions.LockChat,
                ),
              ],
              value: { lockChatAction: { locked: n } },
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: t,
              action: this.getAction(),
            });
          }),
          (a.sendLockMutation = async function (t, n) {
            var e = n.isLocked,
              a = o("WATimeUtils").unixTimeMs(),
              i = [];
            (e &&
              i.push(
                r("WAWebArchiveChatSync").getArchiveChatMutation(a, !1, t),
                o("WAWebPinChatSync").PinChatSync.getPinMutation(a, !1, t),
              ),
              i.push(this.getChatLockMutation(a, e, t)),
              await o("WAWebSyncdCoreApi").lockForSync(
                [],
                await Promise.all(i),
                function () {
                  return Promise.resolve();
                },
              ));
          }),
          n
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
