__d(
  "WAWebMuteChatSync",
  [
    "WALogger",
    "WALongInt",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = -1,
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.chatJidIndex = 1),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 2;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.Mute;
          }),
          (a.applyMutations = function (n) {
            var t = this,
              a = 0,
              i = 0;
            return Promise.all(
              n.map(async function (e) {
                try {
                  if (e.operation === "set") {
                    var n,
                      l = e.indexParts,
                      s = e.value,
                      u = l[1];
                    if (!u || !r("WAWebWid").isWid(u))
                      return t.malformedActionIndex();
                    var c = s.muteAction,
                      d = (n = s.muteAction) == null ? void 0 : n.muted,
                      m = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                        c == null ? void 0 : c.muteEndTimestamp,
                      );
                    if (d == null || (d && m == null))
                      return (
                        a++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          t.collectionName,
                        )
                      );
                    var p = await o(
                      "WAWebSyncdGetChat",
                    ).resolveChatForMutationIndex(
                      o("WAWebWidFactory").createWid(u),
                    );
                    if (!p.success)
                      return {
                        actionState: o("WASyncdConst").SyncActionState.Orphan,
                        orphanModel: p.orphanModel,
                      };
                    var _ = p.chat.id,
                      f = m != null ? m : 0,
                      g =
                        f > 0 && f < o("WATimeUtils").unixTimeMs()
                          ? 0
                          : Math.floor(f / 1e3),
                      h = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                        c == null ? void 0 : c.muteEveryoneMentionEndTimestamp,
                      ),
                      y;
                    h != null &&
                      o("WAWebABProps").getABPropConfigValue(
                        "enable_mention_everyone_receiver_web",
                      ) &&
                      (h > o("WATimeUtils").unixTimeMs()
                        ? (y = Math.floor(h / 1e3))
                        : h > 0
                          ? (y = 0)
                          : (y = h));
                    var C = { muteExpiration: g };
                    (r("WAWebWid").isGroup(o("WAWebWidFactory").createWid(_)) &&
                      y != null &&
                      (C.mentionAllMuteExpiration = y),
                      await o("WAWebSchemaChat").getChatTable().merge(_, C));
                    var b = { id: _, expiration: g };
                    return (
                      r("WAWebWid").isGroup(
                        o("WAWebWidFactory").createWid(_),
                      ) &&
                        y != null &&
                        (b.mentionAllMuteExpiration = y),
                      o("WAWebBackendApi").frontendFireAndForget(
                        "muteCollectionAdd",
                        { muteData: b },
                      ),
                      { actionState: o("WASyncdConst").SyncActionState.Success }
                    );
                  }
                  return (
                    i++,
                    {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    }
                  );
                } catch (e) {
                  return {
                    actionState: o("WASyncdConst").SyncActionState.Failed,
                  };
                }
              }),
            ).then(function (t) {
              return (
                a > 0 &&
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "mute chat sync: ",
                        " malformed mutations",
                      ])),
                    a,
                  ),
                i > 0 &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "mute chat sync: ",
                        " operations not supported",
                      ])),
                    i,
                  ),
                t
              );
            });
          }),
          (a.generateMuteMutation = async function (t, n, a) {
            var e = n !== void 0 && n !== 0,
              i = o("WATimeUtils").unixTimeMs(),
              l = n;
            l !== u && (l *= 1e3);
            var s = { muted: e, muteEndTimestamp: l };
            r("WAWebWid").isGroup(t) &&
              a != null &&
              o("WAWebABProps").getABPropConfigValue(
                "enable_mention_everyone_syncd_sender",
              ) &&
              (a > 0
                ? (s.muteEveryoneMentionEndTimestamp = a * 1e3)
                : (s.muteEveryoneMentionEndTimestamp = a));
            var c = { muteAction: s };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [
                await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                  t,
                  o("WASyncdConst").Actions.Mute,
                ),
              ],
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              version: this.getVersion(),
              value: c,
              timestamp: i,
              action: this.getAction(),
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
