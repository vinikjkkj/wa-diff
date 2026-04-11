__d(
  "WAWebMuteChatSync",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = -1,
      d = (function (t) {
        function a() {
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
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 2;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.Mute;
          }),
          (i.applyMutations = function (a) {
            var t = this,
              i = 0,
              l = 0;
            return (u || (u = n("Promise")))
              .all(
                a.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        try {
                          if (e.operation === "set") {
                            var n,
                              a = e.indexParts,
                              s = e.value,
                              u = a[1];
                            if (!u || !r("WAWebWid").isWid(u))
                              return t.malformedActionIndex();
                            var c = s.muteAction,
                              d = (n = s.muteAction) == null ? void 0 : n.muted,
                              m = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                                c == null ? void 0 : c.muteEndTimestamp,
                              );
                            if (d == null || (d && m == null))
                              return (
                                i++,
                                o("WAWebSyncdIndexUtils").malformedActionValue(
                                  t.collectionName,
                                )
                              );
                            var p = yield o(
                              "WAWebSyncdGetChat",
                            ).resolveChatForMutationIndex(
                              o("WAWebWidFactory").createWid(u),
                            );
                            if (!p.success)
                              return {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Orphan,
                                orphanModel: p.orphanModel,
                              };
                            var _ = p.chat.id,
                              f = m != null ? m : 0,
                              g =
                                f > 0 && f < o("WATimeUtils").unixTimeMs()
                                  ? 0
                                  : Math.floor(f / 1e3),
                              h = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                                c == null
                                  ? void 0
                                  : c.muteEveryoneMentionEndTimestamp,
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
                            (r("WAWebWid").isGroup(
                              o("WAWebWidFactory").createWid(_),
                            ) &&
                              y != null &&
                              (C.mentionAllMuteExpiration = y),
                              yield o("WAWebSchemaChat")
                                .getChatTable()
                                .merge(_, C));
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
                              {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Success,
                              }
                            );
                          }
                          return (
                            l++,
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Unsupported,
                            }
                          );
                        } catch (e) {
                          return {
                            actionState:
                              o("WASyncdConst").SyncActionState.Failed,
                          };
                        }
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              )
              .then(function (t) {
                return (
                  i > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "mute chat sync: ",
                          " malformed mutations",
                        ])),
                      i,
                    ),
                  l > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "mute chat sync: ",
                          " operations not supported",
                        ])),
                      l,
                    ),
                  t
                );
              });
          }),
          (i.generateMuteMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var a = t !== void 0 && t !== 0,
                  i = o("WATimeUtils").unixTimeMs(),
                  l = t;
                l !== c && (l *= 1e3);
                var s = { muted: a, muteEndTimestamp: l };
                r("WAWebWid").isGroup(e) &&
                  n != null &&
                  o("WAWebABProps").getABPropConfigValue(
                    "enable_mention_everyone_syncd_sender",
                  ) &&
                  (n > 0
                    ? (s.muteEveryoneMentionEndTimestamp = n * 1e3)
                    : (s.muteEveryoneMentionEndTimestamp = n));
                var u = { muteAction: s };
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                  collection: this.collectionName,
                  indexArgs: [
                    yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                      e,
                      o("WASyncdConst").Actions.Mute,
                    ),
                  ],
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  version: this.getVersion(),
                  value: u,
                  timestamp: i,
                  action: this.getAction(),
                });
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
