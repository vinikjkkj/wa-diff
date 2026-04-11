__d(
  "WAWebPinChatSync",
  [
    "$InternalEnum",
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
    "decodeProtobuf",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return e === p.Chat
        ? function (e) {
            return !r("WAWebWid").isNewsletter(e);
          }
        : e === p.Newsletter
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
    var p = n("$InternalEnum").Mirrored(["Chat", "Newsletter"]),
      _ = (function (t) {
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
            return 5;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.Pin;
          }),
          (i.applyMutations = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                r(
                  "WAWebAndroidUnsupportedActionsSync",
                ).updatePrimaryAllowsAllMutationsFlag("other mutation");
                for (var t = [], n = 0; n < e.length; n++)
                  t.push(yield this.applyMutation(e[n]));
                return t;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.applyMutation = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                if (t.operation === "remove")
                  return (
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: pin_chat_sync: REMOVE not supported",
                        ])),
                    ),
                    (d || (d = n("Promise"))).resolve({
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    })
                  );
                var a = t.indexParts,
                  i = t.timestamp,
                  l = t.value,
                  m = a[1];
                try {
                  if (!m)
                    return (
                      o("WALogger").WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: pin_chat_sync: missing chatJid in index",
                          ])),
                      ),
                      this.malformedActionIndex()
                    );
                  if (!r("WAWebWid").isWid(m))
                    return this.malformedActionIndex();
                  var p = l.pinAction;
                  if (p == null)
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
                  var _ = p.pinned;
                  if (_ == null)
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
                  var f = yield o(
                    "WAWebSyncdGetChat",
                  ).resolveChatForMutationIndex(
                    o("WAWebWidFactory").createWid(m),
                  );
                  if (!f.success)
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Orphan,
                      orphanModel: f.orphanModel,
                    };
                  var g = f.chat.id,
                    h = f.chat.id,
                    y = o("WAWebWidFactory").createWid(h);
                  if (!_)
                    return (
                      yield this.applyUpdates([
                        { wid: y, pinned: !1, timestamp: i },
                      ]),
                      { actionState: o("WASyncdConst").SyncActionState.Success }
                    );
                  var C = y.isNewsletter()
                    ? yield this.getLocalNewsletterPins()
                    : yield this.getLocalChatPins();
                  if (
                    C.some(function (e) {
                      return e.chatId.toString() === y.toString();
                    })
                  )
                    return (
                      yield this.applyUpdates([
                        { wid: y, pinned: _, timestamp: i },
                      ]),
                      { actionState: o("WASyncdConst").SyncActionState.Success }
                    );
                  if (C.length < o("WAWebChatPinBridge").getPinLimit(y))
                    return (
                      yield this.applyUpdates([
                        { wid: y, pinned: _, timestamp: i },
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
                  var b = C.reduce(function (e, t) {
                      return t.timestamp < e.timestamp ? t : e;
                    }),
                    v = [],
                    S = b.timestamp < i ? b.chatId : y;
                  return (
                    S === b.chatId &&
                      v.push(
                        { wid: b.chatId, pinned: !1, timestamp: i },
                        { wid: y, pinned: !0, timestamp: i },
                      ),
                    yield (d || (d = n("Promise"))).all([
                      this.applyUpdates(v),
                      this.createPendingUnpin(S, i),
                    ]),
                    d.resolve({
                      actionState: o("WASyncdConst").SyncActionState.Success,
                    })
                  );
                } catch (e) {
                  return {
                    actionState: o("WASyncdConst").SyncActionState.Failed,
                  };
                }
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.applyUpdates = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e.length !== 0) {
                  var t = e.map(function (e) {
                    var t = e.pinned,
                      n = e.timestamp,
                      r = e.wid,
                      o = { id: r.toString(), pin: t ? n : 0 };
                    return (t && (o.archive = !1), o);
                  });
                  (yield (d || (d = n("Promise"))).all(
                    t.map(function (e) {
                      return o("WAWebSchemaChat").getChatTable().merge(e.id, e);
                    }),
                  ),
                    yield d.all(
                      e.map(
                        (function () {
                          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (e) {
                              var t = yield o(
                                "WAWebChatGetExistingBridge",
                              ).getExisting(e.wid);
                              t != null &&
                                ((t.pin = e.pinned ? e.timestamp : 0),
                                e.pinned && (t.archive = !1));
                            },
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      ),
                    ));
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.createPendingUnpin = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                yield o("WAWebSyncdDb").appendPendingMutationsRows([
                  yield this.getPinMutation(t, !1, e),
                ]);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getLocalChatPins = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return this.$PinChatSyncImpl$p_1(p.Chat);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getLocalNewsletterPins = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return this.$PinChatSyncImpl$p_1(p.Newsletter);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$PinChatSyncImpl$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("WAWebSchemaChat")
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
                  a = o("WAWebSyncdDb")
                    .getSyncActionsRows(
                      ["action"],
                      [o("WASyncdConst").Actions.Pin],
                    )
                    .then(function (e) {
                      var t = e.filter(function (e) {
                        return (
                          e.actionState ===
                          o("WASyncdConst").SyncActionState.Orphan
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
                  i = yield (d || (d = n("Promise"))).all([t, a]),
                  l = i[0],
                  s = i[1],
                  u = m(e);
                return []
                  .concat(l, s)
                  .filter(function (e) {
                    var t = e[0];
                    return u(t);
                  })
                  .map(function (e) {
                    var t = e[0],
                      n = e[1];
                    return {
                      chatId: o("WAWebWidFactory").createWid(t),
                      timestamp: n,
                    };
                  });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.unpinAllChats = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return this.$PinChatSyncImpl$p_2(yield this.getLocalChatPins());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.unpinAllNewsletters = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return this.$PinChatSyncImpl$p_2(
                yield this.getLocalNewsletterPins(),
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$PinChatSyncImpl$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  r = o("WATimeUtils").unixTimeMs(),
                  a = yield (d || (d = n("Promise"))).all(
                    e.map(function (e) {
                      var n = e.chatId;
                      return t.getPinMutation(r, !1, n);
                    }),
                  );
                return o("WAWebSyncdCoreApi")
                  .lockForSync(["chat"], a, function () {
                    return (d || (d = n("Promise"))).resolve();
                  })
                  .then(function () {
                    return t.applyUpdates(
                      e.map(function (e) {
                        var t = e.chatId;
                        return { wid: t, pinned: !1, timestamp: r };
                      }),
                    );
                  });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getMutationsForPin = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                r("gkx")("26258") ||
                  new (o(
                    "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
                  ).MdSyncdDogfoodingFeatureUsageWamEvent)({
                    mdSyncdDogfoodingFeature: o("WAWebWamEnumMdFeatureCode")
                      .MD_FEATURE_CODE.PIN_MUTATION,
                  }).commit();
                var a = [yield this.getPinMutation(e, t, n)];
                return (
                  t &&
                    a.push(
                      yield r("WAWebArchiveChatSync").getArchiveChatMutation(
                        e,
                        !1,
                        n,
                      ),
                    ),
                  a
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getPinMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                o("WAWebSyncdGetChat").warnIfPnMutationWithForcedLid(
                  o("WAWebSyncdGetChat").PnMutationCaller.GetPinMutation,
                  n,
                );
                var r = { pinAction: { pinned: t } };
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                  collection: this.collectionName,
                  indexArgs: [
                    yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                      n,
                      o("WASyncdConst").Actions.Pin,
                    ),
                  ],
                  value: r,
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
          a
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      f = new _();
    l.PinChatSync = f;
  },
  98,
);
