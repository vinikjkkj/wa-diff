__d(
  "WAWebLabelJidSync",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebCTWAAeDetectionGating",
    "WAWebContactSystemMsg",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDetectedOutcomeLabelConstants",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebListItemParentType",
    "WAWebMobilePlatforms",
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
    "WAWebUserPrefsLabelAssociationsLidMigration",
    "WAWebUserPrefsMultiDevice",
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
      ).__setRef("WAWebLabelJidSync"),
      p = r("JSResourceForInteraction")("WAWebAEOnboarded").__setRef(
        "WAWebLabelJidSync",
      );
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.associationId,
            n = e.chatExists,
            r = e.labelId,
            a = e.mutationTimestamp;
          if (!o("WAWebMobilePlatforms").isSMB()) return !1;
          var i = yield p.load(),
            l = i.getCanonicalAEOnboardedStatus,
            s = l();
          if (s == null)
            return o(
              "WAWebUserPrefsGeneral",
            ).getDetectedOutcomeOnboardingStatus();
          var u = o("WAWebUserPrefsMultiDevice").getPairingTimestamp();
          return !s ||
            !n ||
            u == null ||
            o("WATimeUtils").castMilliSecondsToUnixTime(a) <=
              o("WATimeUtils").castToUnixTime(u)
            ? !1
            : !(yield g(r, t));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (
            (yield o("WAWebSchemaLabelAssociation")
              .getLabelAssociationTable()
              .get([
                e,
                t,
                o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
              ])) != null
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              !o("WAWebABProps").getABPropConfigValue(
                "ctwa_3pd_conversion_on_ae_detection",
              )
            )
          ) {
            var p = JSON.stringify([l, d]);
            if (!c.has(p) && (c.add(p), !(yield g(l, t)))) {
              var _ =
                u ===
                o("WAWebDetectedOutcomeLabelConstants").DO_LEAD_PREDEFINED_ID;
              if (
                s == null ||
                !o(
                  "WAWebCTWAAeDetectionGating",
                ).isCtwaAeModelMetadataIngestionEnabled()
              ) {
                i.detectedOutcomeSignalEmission = { lead: _ };
                return;
              }
              var f = yield m.load(),
                h = f.parseLabelAssociationModelMetadata,
                y = h(s);
              i.detectedOutcomeSignalEmission =
                y.length === 0
                  ? { lead: _ }
                  : {
                      lead: _,
                      metadata: JSON.stringify(
                        _
                          ? { ae_model_data: y }
                          : { paid: !1, ae_model_data: y },
                      ),
                    };
            }
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(t) {
      var n = t.direction,
        a = t.isLabeled,
        i = t.jid,
        l = t.labelId,
        s = t.predefinedId,
        u = t.result,
        c = t.timestampMs;
      o("WAWebWamLabelSyncTrackingReporter")
        .generateLabelJidHash(l, i)
        .then(function (e) {
          o("WAWebWamLabelSyncTrackingReporter").logLabelSyncEvent(
            e,
            o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_TYPE_ENUM
              .LABEL_JID,
            n,
            u,
            a,
            c,
            void 0,
            s,
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
    function v(e, t) {
      (t ===
        o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
          .FAILED_ORPHANED &&
        e.labeled &&
        o("WAWebWamLabelSyncTrackingReporter").recordDeferredLabelAssociation(
          e.labelId,
          { chatJid: e.jid, isLabeled: e.labeled, timestampMs: e.timestampMs },
        ),
        b({
          direction: o("WAWebWamLabelSyncTrackingReporter")
            .LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
          isLabeled: e.labeled,
          jid: e.jid,
          labelId: e.labelId,
          predefinedId: e.predefinedId,
          result: t,
          timestampMs: e.timestampMs,
        }));
    }
    function S(e) {
      (e.labeled ||
        o("WAWebWamLabelSyncTrackingReporter").removeDeferredLabelAssociation(
          e.labelId,
          e.jid,
        ),
        v(
          e,
          e.isOrphaned
            ? o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
                .FAILED_ORPHANED
            : o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
                .SUCCESS,
        ));
    }
    var R = (function (e) {
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
                  p = [],
                  f = [],
                  g = new Set(),
                  h = 0,
                  C = 0,
                  R = yield (d || (d = n("Promise"))).all(
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
                                  v = c[1],
                                  S = c[2];
                                if (!v || !S) return t.malformedActionIndex();
                                var R =
                                  (n = d.labelAssociationAction) == null
                                    ? void 0
                                    : n.labeled;
                                if (R == null)
                                  return (
                                    h++,
                                    b({
                                      direction: o(
                                        "WAWebWamLabelSyncTrackingReporter",
                                      ).LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                                      isLabeled: !1,
                                      jid: S,
                                      labelId: v,
                                      result: o(
                                        "WAWebWamLabelSyncTrackingReporter",
                                      ).LABEL_SYNC_RESULT_TYPE
                                        .FAILED_MISSING_ACTION,
                                      timestampMs: Date.now(),
                                    }),
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(t.collectionName)
                                  );
                                var L =
                                  (u = d.labelAssociationAction) == null
                                    ? void 0
                                    : u.modelMetaData;
                                if (!r("WAWebWid").isWid(S))
                                  return (
                                    b({
                                      direction: o(
                                        "WAWebWamLabelSyncTrackingReporter",
                                      ).LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                                      isLabeled: R,
                                      jid: S,
                                      labelId: v,
                                      result: o(
                                        "WAWebWamLabelSyncTrackingReporter",
                                      ).LABEL_SYNC_RESULT_TYPE
                                        .FAILED_INVALID_JID,
                                      timestampMs: Date.now(),
                                    }),
                                    t.malformedActionIndex()
                                  );
                                var E = o("WAWebWidFactory").createWid(S),
                                  k =
                                    yield o(
                                      "WAWebSyncdGetChat",
                                    ).resolveChatForMutationIndex(E);
                                if (k.success === !0)
                                  E = o("WAWebWidFactory").createWid(k.chat.id);
                                else if ((k.success, E.isLid())) {
                                  var I =
                                    o("WAWebApiContact").getPhoneNumber(E);
                                  I != null && (E = I);
                                }
                                var T = E.toString(),
                                  D = {
                                    labelId: v,
                                    associationId: T,
                                    type: o("WAWebSchemaLabelAssociation")
                                      .LabelAssociationType.Jid,
                                  },
                                  x = null,
                                  $ = !1;
                                if (R) {
                                  var P,
                                    N,
                                    M = yield o("WAWebSchemaLabel")
                                      .getLabelTable()
                                      .get(v);
                                  ((x = M == null ? void 0 : M.predefinedId),
                                    ($ = M == null));
                                  var w =
                                      x ===
                                        o("WAWebDetectedOutcomeLabelConstants")
                                          .DO_NEW_ORDER_PREDEFINED_ID ||
                                      x ===
                                        o("WAWebDetectedOutcomeLabelConstants")
                                          .DO_LEAD_PREDEFINED_ID,
                                    A = a.has(T);
                                  if (!A) {
                                    var F = yield o("WAWebSchemaChat")
                                      .getChatTable()
                                      .get(T, !1);
                                    if (F) {
                                      var O;
                                      (a.set(
                                        T,
                                        o(
                                          "WAWebUserPrefsLabelAssociationsLidMigration",
                                        ).isLabelAssociationsMigrationComplete() &&
                                          (O = F.accountLid) != null
                                          ? O
                                          : T,
                                      ),
                                        (A = !0));
                                    }
                                  }
                                  i.push(D);
                                  var B = {
                                    parentId: T,
                                    labels: [v],
                                    parentType:
                                      A || !E.isUser()
                                        ? o("WAWebListItemParentType")
                                            .LabelItemParentType.Chat
                                        : o("WAWebListItemParentType")
                                            .LabelItemParentType.Contact,
                                  };
                                  if (
                                    (m.push(B),
                                    x != null &&
                                      w &&
                                      (yield _({
                                        associationId:
                                          (P = a.get(T)) != null ? P : T,
                                        chatExists: A,
                                        labelId: v,
                                        mutationTimestamp: e.timestamp,
                                      })))
                                  ) {
                                    var W = o(
                                      "WAWebContactSystemMsg",
                                    ).genNotificationMsg(E, {
                                      type: "notification_template",
                                      kind: o("WAWebMsgType").MsgKind
                                        .NotificationTemplate,
                                      subtype:
                                        "biz_automatically_labeled_chat_system_message",
                                      templateParams: [x.toString()],
                                    });
                                    yield o(
                                      "WAWebHandleSingleMsgWorkerCompatible",
                                    ).handleSingleMsg({
                                      chatId: E,
                                      newMsg: W,
                                      handleSingleMsgOrigin:
                                        "detectedOutcomeNotification",
                                      preserveOrder: !1,
                                    });
                                  }
                                  yield y({
                                    associationId:
                                      (N = a.get(T)) != null ? N : T,
                                    chatExists: A,
                                    isDetectedOutcome: w,
                                    labelCollectionAddition: B,
                                    labelId: v,
                                    modelMetaData: L,
                                    predefinedId: x,
                                    queuedEmissions: g,
                                    wid: T,
                                  });
                                } else
                                  (l.push(
                                    o(
                                      "WAWebSchemaLabelAssociation",
                                    ).createLabelAssociationPrimaryKey(D),
                                  ),
                                    p.push({
                                      parentId: T,
                                      labelId: v,
                                      parentType: o("WAWebListItemParentType")
                                        .LabelItemParentType.Chat,
                                    }));
                                return (
                                  f.push({
                                    labelId: v,
                                    jid: S,
                                    labeled: R,
                                    isOrphaned: $,
                                    predefinedId: x,
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
                                C++,
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
                (h > 0 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "label jid sync: ",
                        " malformed mutations",
                      ])),
                    h,
                  ),
                  C > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "label jid sync: ",
                          " unsupported operations",
                        ])),
                      C,
                    ));
                var L = f.filter(function (e) {
                    return !e.labeled;
                  }),
                  E = f.filter(function (e) {
                    return e.labeled;
                  });
                try {
                  yield o(
                    "WAWebDBLabelAssociationDatabaseApi",
                  ).removeLabelAssociations(l);
                } catch (e) {
                  throw (
                    L.forEach(function (e) {
                      v(
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
                  ).mergeReceivedLabelAssociations(i);
                } catch (e) {
                  throw (
                    L.forEach(S),
                    E.forEach(function (e) {
                      v(
                        e,
                        o("WAWebWamLabelSyncTrackingReporter")
                          .LABEL_SYNC_RESULT_TYPE.FAILED_DB_UPDATE,
                      );
                    }),
                    e
                  );
                }
                return (
                  f.forEach(S),
                  (p.length > 0 || m.length > 0) &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "applyLabelAssociationChanges",
                      { removals: p, additions: m },
                    ),
                  R
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
                      b({
                        direction: o("WAWebWamLabelSyncTrackingReporter")
                          .LABEL_SYNC_DIRECTION_TYPE.SENDER,
                        isLabeled:
                          ((_ = s.value.labelAssociationAction) == null
                            ? void 0
                            : _.labeled) === !0,
                        jid: p,
                        labelId: c,
                        result: o("WAWebWamLabelSyncTrackingReporter")
                          .LABEL_SYNC_RESULT_TYPE.SUCCESS,
                        timestampMs: a,
                      });
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
      L = new R();
    l.default = L;
  },
  98,
);
