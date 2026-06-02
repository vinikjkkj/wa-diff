__d(
  "WAWebPinChatSync",
  [
    "$InternalEnum",
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebAndroidUnsupportedActionsSync",
    "WAWebArchiveChatSync",
    "WAWebChatGetExistingBridge",
    "WAWebChatPinBridge",
    "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
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
    var m = n("$InternalEnum").Mirrored(["Chat", "Newsletter"]),
      p = (function (t) {
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
            return 5;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.Pin;
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
                  actionState: o("WASyncdConst").SyncActionState.Unsupported,
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
                  actionState: o("WASyncdConst").SyncActionState.Orphan,
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
                  { actionState: o("WASyncdConst").SyncActionState.Success }
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
                  { actionState: o("WASyncdConst").SyncActionState.Success }
                );
              if (h.length < o("WAWebChatPinBridge").getPinLimit(g))
                return (
                  await this.applyUpdates([
                    { wid: g, pinned: m, timestamp: a },
                  ]),
                  { actionState: o("WASyncdConst").SyncActionState.Success }
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
                  actionState: o("WASyncdConst").SyncActionState.Success,
                })
              );
            } catch (e) {
              return { actionState: o("WASyncdConst").SyncActionState.Failed };
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
            return this.$PinChatSyncImpl$p_1(m.Chat);
          }),
          (a.getLocalNewsletterPins = async function () {
            return this.$PinChatSyncImpl$p_1(m.Newsletter);
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
                      return [e.id, r("WANullthrows")(e.pin)];
                    });
                }),
              n = o("WAWebSyncdDb")
                .getSyncActionsRows(["action"], [o("WASyncdConst").Actions.Pin])
                .then(function (e) {
                  var t = e.filter(function (e) {
                    return (
                      e.actionState === o("WASyncdConst").SyncActionState.Orphan
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
                      : [
                          r,
                          o("WALongInt").numberOrThrowIfTooLarge(
                            (t = a.timestamp) != null ? t : 0,
                          ),
                        ];
                  });
                }),
              a = await Promise.all([e, n]),
              i = a[0],
              l = a[1],
              s = d(t);
            return []
              .concat(i, l)
              .filter(function (e) {
                var t = e[0];
                return s(t);
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
            return this.$PinChatSyncImpl$p_2(await this.getLocalChatPins());
          }),
          (a.unpinAllNewsletters = async function () {
            return this.$PinChatSyncImpl$p_2(
              await this.getLocalNewsletterPins(),
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
                  o("WASyncdConst").Actions.Pin,
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
      _ = new p();
    l.PinChatSync = _;
  },
  98,
);
