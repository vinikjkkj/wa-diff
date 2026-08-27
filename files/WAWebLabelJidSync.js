__d(
  "WAWebLabelJidSync",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebCTWAAeDetectionGating",
    "WAWebContactSystemMsg",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDetectedOutcomeLabelConstants",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLid1X1MigrationGating",
    "WAWebListItemParentType",
    "WAWebMsgType",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncBootstrap",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsGeneral",
    "WAWebWamLabelSyncTrackingReporter",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = r("JSResourceForInteraction")(
        "WAWebLabelAssociationModelMetadata",
      ).__setRef("WAWebLabelJidSync");
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.associationId,
            n = e.chatExists,
            a = e.isDetectedOutcome,
            i = e.labelCollectionAddition,
            l = e.labelId,
            s = e.modelMetaData,
            u = e.predefinedId,
            c = e.queuedEmissions,
            d = e.wid;
          if (
            !(
              !n ||
              u == null ||
              !a ||
              r("WAWebSyncBootstrap").isSyncDBootstrapInProcess() ||
              !o(
                "WAWebCTWAAeDetectionGating",
              ).isCtwa3pdConversionOnAeDetectionEnabled()
            )
          ) {
            var p = JSON.stringify([l, d]);
            if (
              !c.has(p) &&
              (c.add(p),
              (yield o("WAWebSchemaLabelAssociation")
                .getLabelAssociationTable()
                .get([
                  l,
                  t,
                  o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
                ])) == null)
            ) {
              var _ =
                u ===
                o("WAWebDetectedOutcomeLabelConstants").DO_LEAD_PREDEFINED_ID;
              if (s == null) {
                i.detectedOutcomeSignalEmission = { lead: _ };
                return;
              }
              var f = yield m.load(),
                g = f.parseLabelAssociationModelMetadata,
                h = g(s);
              i.detectedOutcomeSignalEmission =
                h.length === 0
                  ? { lead: _ }
                  : {
                      lead: _,
                      metadata: JSON.stringify(
                        _
                          ? { ae_model_data: h }
                          : { paid: !1, ae_model_data: h },
                      ),
                    };
            }
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(t, n, a, i, l, s, u) {
      o("WAWebWamLabelSyncTrackingReporter")
        .generateLabelJidHash(t, n)
        .then(function (e) {
          o("WAWebWamLabelSyncTrackingReporter").logLabelSyncEvent(
            e,
            o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_TYPE_ENUM
              .LABEL_JID,
            a,
            i,
            l,
            s,
            void 0,
            u,
          );
        })
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to log label JID sync WAM event",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("label-jid-sync-wam-error");
        });
    }
    function g(e, t) {
      (t ===
        o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
          .FAILED_ORPHANED &&
        e.labeled &&
        o("WAWebWamLabelSyncTrackingReporter").recordDeferredLabelAssociation(
          e.labelId,
          { chatJid: e.jid, isLabeled: e.labeled, timestampMs: e.timestampMs },
        ),
        f(
          e.labelId,
          e.jid,
          o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_DIRECTION_TYPE
            .RECEIVER,
          t,
          e.labeled,
          e.timestampMs,
          e.predefinedId,
        ));
    }
    function h(e) {
      (e.labeled ||
        o("WAWebWamLabelSyncTrackingReporter").removeDeferredLabelAssociation(
          e.labelId,
          e.jid,
        ),
        g(
          e,
          e.isOrphaned
            ? o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
                .FAILED_ORPHANED
            : o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
                .SUCCESS,
        ));
    }
    var y = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.chatJidIndex = 2),
            (t.collectionName = o("WAWebSyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.getVersion = function () {
            return o("WAWebSyncdConst").LABEL_ASSOCIATION_SYNC_VERSION;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.LabelJid;
          }),
          (a.applyMutations = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  a = new Map(),
                  i = [],
                  l = [],
                  m = [],
                  _ = [],
                  y = [],
                  C = new Set(),
                  b = 0,
                  v = 0,
                  S = yield (d || (d = n("Promise"))).all(
                    e.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              if (e.operation === "set") {
                                var n,
                                  u,
                                  c = e.indexParts,
                                  d = e.value,
                                  g = c[1],
                                  h = c[2];
                                if (!g || !h) return t.malformedActionIndex();
                                var S =
                                  (n = d.labelAssociationAction) == null
                                    ? void 0
                                    : n.labeled;
                                if (S == null)
                                  return (
                                    b++,
                                    f(
                                      g,
                                      h,
                                      o("WAWebWamLabelSyncTrackingReporter")
                                        .LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                                      o("WAWebWamLabelSyncTrackingReporter")
                                        .LABEL_SYNC_RESULT_TYPE
                                        .FAILED_MISSING_ACTION,
                                      !1,
                                      Date.now(),
                                    ),
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(t.collectionName)
                                  );
                                var R =
                                  (u = d.labelAssociationAction) == null
                                    ? void 0
                                    : u.modelMetaData;
                                if (!r("WAWebWid").isWid(h))
                                  return (
                                    f(
                                      g,
                                      h,
                                      o("WAWebWamLabelSyncTrackingReporter")
                                        .LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                                      o("WAWebWamLabelSyncTrackingReporter")
                                        .LABEL_SYNC_RESULT_TYPE
                                        .FAILED_INVALID_JID,
                                      S,
                                      Date.now(),
                                    ),
                                    t.malformedActionIndex()
                                  );
                                var L = o("WAWebWidFactory").createWid(h),
                                  E =
                                    yield o(
                                      "WAWebSyncdGetChat",
                                    ).resolveChatForMutationIndex(L);
                                if (E.success === !0)
                                  L = o("WAWebWidFactory").createWid(E.chat.id);
                                else if (
                                  (E.success,
                                  o(
                                    "WAWebLid1X1MigrationGating",
                                  ).Lid1X1MigrationUtils.isLidMigrated() &&
                                    L.isLid())
                                ) {
                                  var k =
                                    o("WAWebApiContact").getPhoneNumber(L);
                                  k != null && (L = k);
                                }
                                var I = L.toString(),
                                  T = {
                                    labelId: g,
                                    associationId: I,
                                    type: o("WAWebSchemaLabelAssociation")
                                      .LabelAssociationType.Jid,
                                  },
                                  D = null,
                                  x = !1;
                                if (S) {
                                  var $,
                                    P = yield o("WAWebSchemaLabel")
                                      .getLabelTable()
                                      .get(g);
                                  ((D = P == null ? void 0 : P.predefinedId),
                                    (x = P == null));
                                  var N =
                                      D ===
                                        o("WAWebDetectedOutcomeLabelConstants")
                                          .DO_NEW_ORDER_PREDEFINED_ID ||
                                      D ===
                                        o("WAWebDetectedOutcomeLabelConstants")
                                          .DO_LEAD_PREDEFINED_ID,
                                    M = a.has(I);
                                  if (!M) {
                                    var w = yield o("WAWebSchemaChat")
                                      .getChatTable()
                                      .get(I, !1);
                                    w &&
                                      (a.set(
                                        I,
                                        o(
                                          "WAWebLid1X1MigrationGating",
                                        ).Lid1X1MigrationUtils.isLidMigrated() &&
                                          w.accountLid != null
                                          ? w.accountLid
                                          : I,
                                      ),
                                      (M = !0));
                                  }
                                  i.push(T);
                                  var A = {
                                    parentId: I,
                                    labels: [g],
                                    parentType:
                                      M || !L.isUser()
                                        ? o("WAWebListItemParentType")
                                            .LabelItemParentType.Chat
                                        : o("WAWebListItemParentType")
                                            .LabelItemParentType.Contact,
                                  };
                                  if (
                                    (m.push(A),
                                    D != null &&
                                      o(
                                        "WAWebUserPrefsGeneral",
                                      ).getDetectedOutcomeOnboardingStatus() &&
                                      N)
                                  ) {
                                    var F = o(
                                      "WAWebContactSystemMsg",
                                    ).genNotificationMsg(L, {
                                      type: "notification_template",
                                      kind: o("WAWebMsgType").MsgKind
                                        .NotificationTemplate,
                                      subtype:
                                        "biz_automatically_labeled_chat_system_message",
                                      templateParams: [D.toString()],
                                    });
                                    yield o(
                                      "WAWebHandleSingleMsgWorkerCompatible",
                                    ).handleSingleMsg({
                                      chatId: L,
                                      newMsg: F,
                                      handleSingleMsgOrigin:
                                        "detectedOutcomeNotification",
                                      preserveOrder: !1,
                                    });
                                  }
                                  yield p({
                                    associationId:
                                      ($ = a.get(I)) != null ? $ : I,
                                    chatExists: M,
                                    isDetectedOutcome: N,
                                    labelCollectionAddition: A,
                                    labelId: g,
                                    modelMetaData: R,
                                    predefinedId: D,
                                    queuedEmissions: C,
                                    wid: I,
                                  });
                                } else
                                  (l.push(
                                    o(
                                      "WAWebSchemaLabelAssociation",
                                    ).createLabelAssociationPrimaryKey(T),
                                  ),
                                    _.push({
                                      parentId: I,
                                      labelId: g,
                                      parentType: o("WAWebListItemParentType")
                                        .LabelItemParentType.Chat,
                                    }));
                                return (
                                  y.push({
                                    labelId: g,
                                    jid: h,
                                    labeled: S,
                                    isOrphaned: x,
                                    predefinedId: D,
                                    timestampMs: Date.now(),
                                  }),
                                  {
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Success,
                                  }
                                );
                              }
                              return (
                                v++,
                                {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Unsupported,
                                }
                              );
                            } catch (e) {
                              return (
                                o("WALogger")
                                  .ERROR(
                                    s ||
                                      (s =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "Failed to apply label JID sync mutation",
                                          ],
                                        )),
                                  )
                                  .catching(r("getErrorSafe")(e))
                                  .sendLogs("label-jid-sync-apply-error"),
                                {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState.Failed,
                                }
                              );
                            }
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                (b > 0 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "label jid sync: ",
                        " malformed mutations",
                      ])),
                    b,
                  ),
                  v > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "label jid sync: ",
                          " unsupported operations",
                        ])),
                      v,
                    ));
                var R = y.filter(function (e) {
                    return !e.labeled;
                  }),
                  L = y.filter(function (e) {
                    return e.labeled;
                  });
                try {
                  yield o(
                    "WAWebDBLabelAssociationDatabaseApi",
                  ).removeLabelAssociations(l);
                } catch (e) {
                  throw (
                    R.forEach(function (e) {
                      g(
                        e,
                        o("WAWebWamLabelSyncTrackingReporter")
                          .LABEL_SYNC_RESULT_TYPE.FAILED_DB_UPDATE,
                      );
                    }),
                    e
                  );
                }
                try {
                  yield o(
                    "WAWebDBLabelAssociationDatabaseApi",
                  ).addOrEditLabelAssociations(i);
                } catch (e) {
                  throw (
                    R.forEach(h),
                    L.forEach(function (e) {
                      g(
                        e,
                        o("WAWebWamLabelSyncTrackingReporter")
                          .LABEL_SYNC_RESULT_TYPE.FAILED_DB_UPDATE,
                      );
                    }),
                    e
                  );
                }
                return (
                  y.forEach(h),
                  (_.length > 0 || m.length > 0) &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "applyLabelAssociationChanges",
                      { removals: _, additions: m },
                    ),
                  S
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.createLabelAssociationMutations = (function () {
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
                      version:
                        o("WAWebSyncdConst").LABEL_ASSOCIATION_SYNC_VERSION,
                      value: s,
                      action: o("WAWebSyncdConst").Actions.LabelJid,
                    });
                  });
                });
                var l = yield (d || (d = n("Promise"))).all(
                  i.map(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          var t = e.indexArgs,
                            r = t[0],
                            a = babelHelpers.arrayLikeToArray(t).slice(1),
                            i = yield (d || (d = n("Promise"))).all(
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
                );
                for (var s of l)
                  if (s.action === o("WAWebSyncdConst").Actions.LabelJid) {
                    var u = s.indexArgs,
                      c = u[0],
                      m = babelHelpers.arrayLikeToArray(u).slice(1),
                      p = m[0];
                    if (c != null && p != null) {
                      var _;
                      f(
                        c,
                        p,
                        o("WAWebWamLabelSyncTrackingReporter")
                          .LABEL_SYNC_DIRECTION_TYPE.SENDER,
                        o("WAWebWamLabelSyncTrackingReporter")
                          .LABEL_SYNC_RESULT_TYPE.SUCCESS,
                        ((_ = s.value.labelAssociationAction) == null
                          ? void 0
                          : _.labeled) === !0,
                        a,
                      );
                    }
                  }
                return l.map(o("WAWebSyncdActionUtils").buildPendingMutation);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(o("WAWebSyncdAction").ChatOrContactSyncdActionBase),
      C = new y();
    l.default = C;
  },
  98,
);
