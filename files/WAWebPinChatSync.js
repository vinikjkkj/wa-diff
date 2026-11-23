__d(
  "WAWebPinChatSync",
  [
    "$InternalEnum",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebAndroidUnsupportedActionsSync",
    "WAWebArchiveChatSync",
    "WAWebChatGetExistingBridge",
    "WAWebChatPinBridge",
    "WAWebLidMigrationUtils",
    "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWamEnumMdFeatureCode",
    "WAWebWid",
    "WAWebWidFactory",
    "compactMap",
    "decodeProtobuf",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return e === m.Chat
        ? function (e) {
            return !r("WAWebWid").isNewsletter(e);
          }
        : e === m.Newsletter
          ? function (e) {
              return r("WAWebWid").isNewsletter(e);
            }
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    var m = n("$InternalEnum").Mirrored(["Chat", "Newsletter"]);
    function p(e) {
      var t = new Map(),
        n = [];
      for (var r of e) {
        var a,
          i = r.chatId,
          l = r.timestamp,
          s = i.isRegularUserPn()
            ? ((a = o("WAWebLidMigrationUtils").toLid(i)) != null
                ? a
                : i
              ).toString()
            : i.toString(),
          u = t.get(s);
        if (u == null) {
          var c = { chatId: i, timestamp: l };
          (t.set(s, c), n.push(c));
        } else l > u.timestamp && (u.timestamp = l);
      }
      return n;
    }
    var _ = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.chatJidIndex = 1),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 5;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.Pin;
          }),
          (a.applyMutations = async function (t) {
            r(
              "WAWebAndroidUnsupportedActionsSync",
            ).updatePrimaryAllowsAllMutationsFlag("other mutation");
            for (var e = [], n = 0; n < t.length; n++)
              e.push(await this.applyMutation(t[n]));
            return e;
          }),
          (a.applyMutation = async function (n) {
            if (n.operation === "remove")
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: pin_chat_sync: REMOVE not supported",
                    ])),
                ),
                Promise.resolve({
                  actionState: o("WAWebSyncdConst").SyncActionState.Unsupported,
                })
              );
            var t = n.indexParts,
              a = n.timestamp,
              i = n.value,
              l = t[1];
            try {
              if (!l)
                return (
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: pin_chat_sync: missing chatJid in index",
                      ])),
                  ),
                  this.malformedActionIndex()
                );
              if (!r("WAWebWid").isWid(l)) return this.malformedActionIndex();
              var d = i.pinAction;
              if (d == null)
                return (
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: pin_chat_sync: missing pinAction",
                      ])),
                  ),
                  o("WAWebSyncdIndexUtils").malformedActionValue(
                    this.collectionName,
                  )
                );
              var m = d.pinned;
              if (m == null)
                return (
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: pin_chat_sync: missing pinned field",
                      ])),
                  ),
                  o("WAWebSyncdIndexUtils").malformedActionValue(
                    this.collectionName,
                  )
                );
              var p = await o("WAWebSyncdGetChat").resolveChatForMutationIndex(
                o("WAWebWidFactory").createWid(l),
              );
              if (!p.success)
                return {
                  actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                  orphanModel: p.orphanModel,
                };
              var _ = p.chat.id,
                f = p.chat.id,
                g = o("WAWebWidFactory").createWid(f);
              if (!m)
                return (
                  await this.applyUpdates([
                    { wid: g, pinned: !1, timestamp: a },
                  ]),
                  { actionState: o("WAWebSyncdConst").SyncActionState.Success }
                );
              var h = g.isNewsletter()
                ? await this.getLocalNewsletterPins()
                : await this.getLocalChatPins();
              if (
                h.some(function (e) {
                  return e.chatId.toString() === g.toString();
                })
              )
                return (
                  await this.applyUpdates([
                    { wid: g, pinned: m, timestamp: a },
                  ]),
                  { actionState: o("WAWebSyncdConst").SyncActionState.Success }
                );
              if (h.length < o("WAWebChatPinBridge").getPinLimit(g))
                return (
                  await this.applyUpdates([
                    { wid: g, pinned: m, timestamp: a },
                  ]),
                  { actionState: o("WAWebSyncdConst").SyncActionState.Success }
                );
              r("gkx")("26258") ||
                new (o(
                  "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
                ).MdSyncdDogfoodingFeatureUsageWamEvent)({
                  mdSyncdDogfoodingFeature: o("WAWebWamEnumMdFeatureCode")
                    .MD_FEATURE_CODE.UNPIN_4TH_CHAT_MUTATION,
                }).commit();
              var y = h.reduce(function (e, t) {
                  return t.timestamp < e.timestamp ? t : e;
                }),
                C = [],
                b = y.timestamp < a ? y.chatId : g;
              return (
                b === y.chatId &&
                  C.push(
                    { wid: y.chatId, pinned: !1, timestamp: a },
                    { wid: g, pinned: !0, timestamp: a },
                  ),
                await Promise.all([
                  this.applyUpdates(C),
                  this.createPendingUnpin(b, a),
                ]),
                Promise.resolve({
                  actionState: o("WAWebSyncdConst").SyncActionState.Success,
                })
              );
            } catch (e) {
              return {
                actionState: o("WAWebSyncdConst").SyncActionState.Failed,
              };
            }
          }),
          (a.applyUpdates = async function (t) {
            if (t.length !== 0) {
              var e = t.map(function (e) {
                var t = e.pinned,
                  n = e.timestamp,
                  r = e.wid,
                  o = { id: r.toString(), pin: t ? n : 0 };
                return (t && (o.archive = !1), o);
              });
              (await Promise.all(
                e.map(function (e) {
                  return o("WAWebSchemaChat").getChatTable().merge(e.id, e);
                }),
              ),
                await Promise.all(
                  t.map(async function (e) {
                    var t = await o("WAWebChatGetExistingBridge").getExisting(
                      e.wid,
                    );
                    t != null &&
                      ((t.pin = e.pinned ? e.timestamp : 0),
                      e.pinned && (t.archive = !1));
                  }),
                ));
            }
          }),
          (a.createPendingUnpin = async function (t, n) {
            await o("WAWebSyncdDb").appendPendingMutationsRows([
              await this.getPinMutation(n, !1, t),
            ]);
          }),
          (a.getLocalChatPins = async function () {
            return p(await this.$PinChatSyncImpl$p_1(m.Chat));
          }),
          (a.getLocalNewsletterPins = async function () {
            return p(await this.$PinChatSyncImpl$p_1(m.Newsletter));
          }),
          (a.$PinChatSyncImpl$p_1 = async function (t) {
            var e = o("WAWebSchemaChat")
                .getChatTable()
                .all()
                .then(function (e) {
                  return e
                    .filter(function (e) {
                      return e.pin != null && e.pin > 0;
                    })
                    .map(function (e) {
                      return [e.id, r("nullthrows")(e.pin)];
                    });
                }),
              n = o("WAWebSyncdDb")
                .getPendingMutationsRows(
                  ["action"],
                  o("WAWebSyncdConst").Actions.Pin,
                )
                .then(function (e) {
                  return new Set(
                    r("compactMap")(e, function (e) {
                      return e.operation ===
                        o("WAWebProtobufsServerSync.pb")
                          .SyncdMutation$SyncdOperation.REMOVE
                        ? e.index
                        : null;
                    }),
                  );
                }),
              a = o("WAWebSyncdDb")
                .getSyncActionsRows(
                  ["action"],
                  [o("WAWebSyncdConst").Actions.Pin],
                )
                .then(function (e) {
                  var t = e.filter(function (e) {
                    return (
                      e.actionState ===
                      o("WAWebSyncdConst").SyncActionState.Orphan
                    );
                  });
                  return r("compactMap")(t, function (e) {
                    var t,
                      n = JSON.parse(e.index);
                    if (n.length < 2) return null;
                    var r = n[1],
                      a = o("decodeProtobuf").decodeProtobuf(
                        o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                        e.binarySyncData,
                      ).value;
                    return (a == null ? void 0 : a.pinAction) == null ||
                      (a == null ? void 0 : a.pinAction.pinned) !== !0
                      ? null
                      : {
                          index: e.index,
                          pin: [
                            r,
                            o("WALongInt").numberOrThrowIfTooLarge(
                              (t = a.timestamp) != null ? t : 0,
                            ),
                          ],
                        };
                  });
                }),
              i = await Promise.all([e, a, n]),
              l = i[0],
              s = i[1],
              u = i[2],
              c = r("compactMap")(s, function (e) {
                return u.has(e.index) ? null : e.pin;
              }),
              m = d(t);
            return []
              .concat(l, c)
              .filter(function (e) {
                var t = e[0];
                return m(t);
              })
              .map(function (e) {
                var t = e[0],
                  n = e[1];
                return {
                  chatId: o("WAWebWidFactory").createWid(t),
                  timestamp: n,
                };
              });
          }),
          (a.unpinAllChats = async function () {
            return this.$PinChatSyncImpl$p_2(
              await this.$PinChatSyncImpl$p_1(m.Chat),
            );
          }),
          (a.unpinAllNewsletters = async function () {
            return this.$PinChatSyncImpl$p_2(
              await this.$PinChatSyncImpl$p_1(m.Newsletter),
            );
          }),
          (a.$PinChatSyncImpl$p_2 = async function (t) {
            var e = this,
              n = o("WATimeUtils").unixTimeMs(),
              r = await Promise.all(
                t.map(function (t) {
                  var r = t.chatId;
                  return e.getPinMutation(n, !1, r);
                }),
              );
            return o("WAWebSyncdCoreApi")
              .lockForSync(["chat"], r, function () {
                return Promise.resolve();
              })
              .then(function () {
                return e.applyUpdates(
                  t.map(function (e) {
                    var t = e.chatId;
                    return { wid: t, pinned: !1, timestamp: n };
                  }),
                );
              });
          }),
          (a.getMutationsForPin = async function (t, n, a) {
            r("gkx")("26258") ||
              new (o(
                "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
              ).MdSyncdDogfoodingFeatureUsageWamEvent)({
                mdSyncdDogfoodingFeature: o("WAWebWamEnumMdFeatureCode")
                  .MD_FEATURE_CODE.PIN_MUTATION,
              }).commit();
            var e = [await this.getPinMutation(t, n, a)];
            return (
              n &&
                e.push(
                  await r("WAWebArchiveChatSync").getArchiveChatMutation(
                    t,
                    !1,
                    a,
                  ),
                ),
              e
            );
          }),
          (a.getPinMutation = async function (t, n, r) {
            o("WAWebSyncdGetChat").warnIfPnMutationWithForcedLid(
              o("WAWebSyncdGetChat").PnMutationCaller.GetPinMutation,
              r,
            );
            var e = { pinAction: { pinned: n } };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [
                await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                  r,
                  o("WAWebSyncdConst").Actions.Pin,
                ),
              ],
              value: e,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: t,
              action: this.getAction(),
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      f = new _();
    l.PinChatSync = f;
  },
  98,
);
