__d(
  "WAWebLabelJidSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebHandleSingleMsgFactory",
    "WAWebLabelConstants",
    "WAWebLid1X1MigrationGating",
    "WAWebListItemParentType",
    "WAWebMsgType",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsGeneral",
    "WAWebWamLabelSyncTrackingReporter",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.chatJidIndex = 2),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return o("WASyncdConst").LABEL_ASSOCIATION_SYNC_VERSION;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.LabelJid;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = new Set(),
                  l = [],
                  c = [],
                  d = [],
                  m = [],
                  p = 0,
                  _ = 0,
                  f = yield (u || (u = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              if (e.operation === "set") {
                                var t,
                                  n = e.indexParts,
                                  s = e.value,
                                  u = n[1],
                                  f = n[2];
                                if (!u || !f) return a.malformedActionIndex();
                                var g =
                                  (t = s.labelAssociationAction) == null
                                    ? void 0
                                    : t.labeled;
                                if (g == null) {
                                  var h;
                                  p++;
                                  var y = yield (h = o(
                                    "WAWebWamLabelSyncTrackingReporter",
                                  )).generateLabelJidHash(u, f);
                                  return (
                                    h.logLabelSyncEvent(
                                      y,
                                      h.LABEL_SYNC_TYPE_ENUM.LABEL_JID,
                                      h.LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                                      h.LABEL_SYNC_RESULT_TYPE
                                        .FAILED_MISSING_ACTION,
                                      !1,
                                      Date.now(),
                                    ),
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(a.collectionName)
                                  );
                                }
                                if (!r("WAWebWid").isWid(f)) {
                                  var h,
                                    C = yield (h = o(
                                      "WAWebWamLabelSyncTrackingReporter",
                                    )).generateLabelJidHash(u, f);
                                  return (
                                    h.logLabelSyncEvent(
                                      C,
                                      h.LABEL_SYNC_TYPE_ENUM.LABEL_JID,
                                      h.LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                                      h.LABEL_SYNC_RESULT_TYPE
                                        .FAILED_INVALID_JID,
                                      g,
                                      Date.now(),
                                    ),
                                    a.malformedActionIndex()
                                  );
                                }
                                var b = o("WAWebWidFactory").createWid(f),
                                  v =
                                    yield o(
                                      "WAWebSyncdGetChat",
                                    ).resolveChatForMutationIndex(b);
                                if (v.success === !0)
                                  b = o("WAWebWidFactory").createWid(v.chat.id);
                                else if (
                                  (v.success,
                                  o(
                                    "WAWebLid1X1MigrationGating",
                                  ).Lid1X1MigrationUtils.isLidMigrated() &&
                                    b.isLid())
                                ) {
                                  var S =
                                    o("WAWebApiContact").getPhoneNumber(b);
                                  S != null && (b = S);
                                }
                                var R = b.toString(),
                                  L = {
                                    labelId: u,
                                    associationId: R,
                                    type: o("WAWebSchemaLabelAssociation")
                                      .LabelAssociationType.Jid,
                                  };
                                if (g) {
                                  var E = i.has(R);
                                  if (!E) {
                                    var k = yield o("WAWebSchemaChat")
                                      .getChatTable()
                                      .get(R, !1);
                                    k && (i.add(R), (E = !0));
                                  }
                                  (l.push(L),
                                    d.push({
                                      parentId: R,
                                      labels: [u],
                                      parentType:
                                        E || !b.isUser()
                                          ? o("WAWebListItemParentType")
                                              .LabelItemParentType.Chat
                                          : o("WAWebListItemParentType")
                                              .LabelItemParentType.Contact,
                                    }));
                                  var I = yield o("WAWebSchemaLabel")
                                      .getLabelTable()
                                      .get(u),
                                    T = I == null ? void 0 : I.predefinedId;
                                  if (
                                    o(
                                      "WAWebUserPrefsGeneral",
                                    ).getDetectedOutcomeOnboardingStatus() &&
                                    (T ===
                                      o("WAWebLabelConstants")
                                        .PREDEFINED_LABEL_IDS.DO_NEW_ORDER ||
                                      T ===
                                        o("WAWebLabelConstants")
                                          .PREDEFINED_LABEL_IDS.DO_LEAD)
                                  ) {
                                    var D = o(
                                      "WAWebContactSystemMsg",
                                    ).genNotificationMsg(b, {
                                      type: "notification_template",
                                      kind: o("WAWebMsgType").MsgKind
                                        .NotificationTemplate,
                                      subtype:
                                        "biz_automatically_labeled_chat_system_message",
                                      templateParams: [T.toString()],
                                    });
                                    yield o(
                                      "WAWebHandleSingleMsgFactory",
                                    ).handleSingleMsg({
                                      chatId: b,
                                      newMsg: D,
                                      handleSingleMsgOrigin:
                                        "detectedOutcomeNotification",
                                      preserveOrder: !1,
                                    });
                                  }
                                } else
                                  (c.push(
                                    o(
                                      "WAWebSchemaLabelAssociation",
                                    ).createLabelAssociationPrimaryKey(L),
                                  ),
                                    m.push({
                                      parentId: R,
                                      labelId: u,
                                      parentType: o("WAWebListItemParentType")
                                        .LabelItemParentType.Chat,
                                    }));
                                return (
                                  o("WAWebWamLabelSyncTrackingReporter")
                                    .generateLabelJidHash(u, f)
                                    .then(function (e) {
                                      var t;
                                      (t = o(
                                        "WAWebWamLabelSyncTrackingReporter",
                                      )).logLabelSyncEvent(
                                        e,
                                        t.LABEL_SYNC_TYPE_ENUM.LABEL_JID,
                                        t.LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                                        t.LABEL_SYNC_RESULT_TYPE.SUCCESS,
                                        g,
                                        Date.now(),
                                      );
                                    }),
                                  {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Success,
                                  }
                                );
                              }
                              return (
                                _++,
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState
                                      .Unsupported,
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
                  );
                return (
                  p > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "label jid sync: ",
                          " malformed mutations",
                        ])),
                      p,
                    ),
                  _ > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "label jid sync: ",
                          " unsupported operations",
                        ])),
                      _,
                    ),
                  yield o(
                    "WAWebDBLabelAssociationDatabaseApi",
                  ).removeLabelAssociations(c),
                  yield o(
                    "WAWebDBLabelAssociationDatabaseApi",
                  ).addOrEditLabelAssociations(l),
                  (m.length > 0 || d.length > 0) &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "applyLabelAssociationChanges",
                      { removals: m, additions: d },
                    ),
                  f
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.createLabelAssociationMutations = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r = this,
                  a = o("WATimeUtils").unixTimeMs(),
                  i = [];
                e.forEach(function (e) {
                  var n = e.id,
                    l = e.type;
                  t.forEach(function (e) {
                    var t = e.mutationIndexSegments,
                      s = { labelAssociationAction: { labeled: l === "add" } };
                    i.push({
                      timestamp: a,
                      collection: r.collectionName,
                      operation: o("WAWebProtobufsServerSync.pb")
                        .SyncdMutation$SyncdOperation.SET,
                      indexArgs: [n].concat(t),
                      version: o("WASyncdConst").LABEL_ASSOCIATION_SYNC_VERSION,
                      value: s,
                      action: o("WASyncdConst").Actions.LabelJid,
                    });
                  });
                });
                var l = yield (u || (u = n("Promise"))).all(
                    i.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            var t = e.indexArgs,
                              r = t[0],
                              a = babelHelpers.arrayLikeToArray(t).slice(1),
                              i = yield (u || (u = n("Promise"))).all(
                                a.map(
                                  (function () {
                                    var e = n(
                                      "asyncToGeneratorRuntime",
                                    ).asyncToGenerator(function* (e) {
                                      var t = o("WAWebWidFactory").createWid(e);
                                      return o(
                                        "WAWebSyncdGetChat",
                                      ).getWidMutationIndexForWid(t);
                                    });
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })(),
                                ),
                              );
                            return babelHelpers.extends({}, e, {
                              indexArgs: [r].concat(i),
                            });
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  ),
                  s = function* (t) {
                    if (t.action === o("WASyncdConst").Actions.LabelJid) {
                      var e = t.indexArgs,
                        n = e[0],
                        r = babelHelpers.arrayLikeToArray(e).slice(1),
                        i = r[0];
                      n != null &&
                        i != null &&
                        o("WAWebWamLabelSyncTrackingReporter")
                          .generateLabelJidHash(n, i)
                          .then(function (e) {
                            var n, r;
                            (r = o(
                              "WAWebWamLabelSyncTrackingReporter",
                            )).logLabelSyncEvent(
                              e,
                              r.LABEL_SYNC_TYPE_ENUM.LABEL_JID,
                              r.LABEL_SYNC_DIRECTION_TYPE.SENDER,
                              r.LABEL_SYNC_RESULT_TYPE.SUCCESS,
                              ((n = t.value.labelAssociationAction) == null
                                ? void 0
                                : n.labeled) === !0,
                              a,
                            );
                          });
                    }
                  };
                for (var c of l) yield* s(c);
                return l.map(o("WAWebSyncdActionUtils").buildPendingMutation);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebSyncdAction").ChatOrContactSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
