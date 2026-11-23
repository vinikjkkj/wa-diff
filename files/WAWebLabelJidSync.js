__d(
  "WAWebLabelJidSync",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebBackendApi",
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = r("JSResourceForInteraction")(
        "WAWebLabelAssociationModelMetadata",
      ).__setRef("WAWebLabelJidSync"),
      m = r("JSResourceForInteraction")("WAWebAEOnboarded").__setRef(
        "WAWebLabelJidSync",
      );
    async function p(e) {
      var t = e.associationId,
        n = e.chatExists,
        r = e.labelId,
        a = e.mutationTimestamp;
      if (!o("WAWebMobilePlatforms").isSMB()) return !1;
      var i = await m.load(),
        l = i.getCanonicalAEOnboardedStatus,
        s = l();
      if (s == null)
        return o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus();
      var u = o("WAWebUserPrefsMultiDevice").getPairingTimestamp();
      return !s ||
        !n ||
        u == null ||
        o("WATimeUtils").castMilliSecondsToUnixTime(a) <=
          o("WATimeUtils").castToUnixTime(u)
        ? !1
        : !(await _(r, t));
    }
    async function _(e, t) {
      return (
        (await o("WAWebSchemaLabelAssociation")
          .getLabelAssociationTable()
          .get([
            e,
            t,
            o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
          ])) != null
      );
    }
    async function f(e) {
      var t = e.associationId,
        n = e.chatExists,
        a = e.isDetectedOutcome,
        i = e.labelCollectionAddition,
        l = e.labelId,
        s = e.modelMetaData,
        u = e.predefinedId,
        c = e.queuedEmissions,
        m = e.wid;
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
        var p = JSON.stringify([l, m]);
        if (!c.has(p) && (c.add(p), !(await _(l, t)))) {
          var f =
            u === o("WAWebDetectedOutcomeLabelConstants").DO_LEAD_PREDEFINED_ID;
          if (
            s == null ||
            !o("WAWebABProps").getABPropConfigValue(
              "ctwa_ae_model_meta_data_enabled",
            )
          ) {
            i.detectedOutcomeSignalEmission = { lead: f };
            return;
          }
          var g = await d.load(),
            h = g.parseLabelAssociationModelMetadata,
            y = h(s);
          i.detectedOutcomeSignalEmission =
            y.length === 0
              ? { lead: f }
              : {
                  lead: f,
                  metadata: JSON.stringify(
                    f ? { ae_model_data: y } : { paid: !1, ae_model_data: y },
                  ),
                };
        }
      }
    }
    function g(t) {
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
    function h(e, t) {
      (t ===
        o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
          .FAILED_ORPHANED &&
        e.labeled &&
        o("WAWebWamLabelSyncTrackingReporter").recordDeferredLabelAssociation(
          e.labelId,
          { chatJid: e.jid, isLabeled: e.labeled, timestampMs: e.timestampMs },
        ),
        g({
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
    function y(e) {
      (e.labeled ||
        o("WAWebWamLabelSyncTrackingReporter").removeDeferredLabelAssociation(
          e.labelId,
          e.jid,
        ),
        h(
          e,
          e.isOrphaned
            ? o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
                .FAILED_ORPHANED
            : o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
                .SUCCESS,
        ));
    }
    var C = (function (e) {
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
        var n = t.prototype;
        return (
          (n.getVersion = function () {
            return o("WAWebSyncdConst").LABEL_ASSOCIATION_SYNC_VERSION;
          }),
          (n.getAction = function () {
            return o("WAWebSyncdConst").Actions.LabelJid;
          }),
          (n.applyMutations = async function (t) {
            var e = this,
              n = new Map(),
              a = [],
              i = [],
              l = [],
              d = [],
              m = [],
              _ = new Set(),
              C = 0,
              b = 0,
              v = await Promise.all(
                t.map(async function (t) {
                  try {
                    if (t.operation === "set") {
                      var u,
                        c,
                        h = t.indexParts,
                        y = t.value,
                        v = h[1],
                        S = h[2];
                      if (!v || !S) return e.malformedActionIndex();
                      var R =
                        (u = y.labelAssociationAction) == null
                          ? void 0
                          : u.labeled;
                      if (R == null)
                        return (
                          C++,
                          g({
                            direction: o("WAWebWamLabelSyncTrackingReporter")
                              .LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                            isLabeled: !1,
                            jid: S,
                            labelId: v,
                            result: o("WAWebWamLabelSyncTrackingReporter")
                              .LABEL_SYNC_RESULT_TYPE.FAILED_MISSING_ACTION,
                            timestampMs: Date.now(),
                          }),
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            e.collectionName,
                          )
                        );
                      var L =
                        (c = y.labelAssociationAction) == null
                          ? void 0
                          : c.modelMetaData;
                      if (!r("WAWebWid").isWid(S))
                        return (
                          g({
                            direction: o("WAWebWamLabelSyncTrackingReporter")
                              .LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                            isLabeled: R,
                            jid: S,
                            labelId: v,
                            result: o("WAWebWamLabelSyncTrackingReporter")
                              .LABEL_SYNC_RESULT_TYPE.FAILED_INVALID_JID,
                            timestampMs: Date.now(),
                          }),
                          e.malformedActionIndex()
                        );
                      var E = o("WAWebWidFactory").createWid(S),
                        k =
                          await o(
                            "WAWebSyncdGetChat",
                          ).resolveChatForMutationIndex(E);
                      if (k.success === !0)
                        E = o("WAWebWidFactory").createWid(k.chat.id);
                      else if ((k.success, E.isLid())) {
                        var I = o("WAWebApiContact").getPhoneNumber(E);
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
                          M = await o("WAWebSchemaLabel")
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
                          A = n.has(T);
                        if (!A) {
                          var F = await o("WAWebSchemaChat")
                            .getChatTable()
                            .get(T, !1);
                          if (F) {
                            var O;
                            (n.set(
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
                        a.push(D);
                        var B = {
                          parentId: T,
                          labels: [v],
                          parentType:
                            A || !E.isUser()
                              ? o("WAWebListItemParentType").LabelItemParentType
                                  .Chat
                              : o("WAWebListItemParentType").LabelItemParentType
                                  .Contact,
                        };
                        if (
                          (l.push(B),
                          x != null &&
                            w &&
                            (await p({
                              associationId: (P = n.get(T)) != null ? P : T,
                              chatExists: A,
                              labelId: v,
                              mutationTimestamp: t.timestamp,
                            })))
                        ) {
                          var W = o("WAWebContactSystemMsg").genNotificationMsg(
                            E,
                            {
                              type: "notification_template",
                              kind: o("WAWebMsgType").MsgKind
                                .NotificationTemplate,
                              subtype:
                                "biz_automatically_labeled_chat_system_message",
                              templateParams: [x.toString()],
                            },
                          );
                          await o(
                            "WAWebHandleSingleMsgWorkerCompatible",
                          ).handleSingleMsg({
                            chatId: E,
                            newMsg: W,
                            handleSingleMsgOrigin:
                              "detectedOutcomeNotification",
                            preserveOrder: !1,
                          });
                        }
                        await f({
                          associationId: (N = n.get(T)) != null ? N : T,
                          chatExists: A,
                          isDetectedOutcome: w,
                          labelCollectionAddition: B,
                          labelId: v,
                          modelMetaData: L,
                          predefinedId: x,
                          queuedEmissions: _,
                          wid: T,
                        });
                      } else
                        (i.push(
                          o(
                            "WAWebSchemaLabelAssociation",
                          ).createLabelAssociationPrimaryKey(D),
                        ),
                          d.push({
                            parentId: T,
                            labelId: v,
                            parentType: o("WAWebListItemParentType")
                              .LabelItemParentType.Chat,
                          }));
                      return (
                        m.push({
                          labelId: v,
                          jid: S,
                          labeled: R,
                          isOrphaned: $,
                          predefinedId: x,
                          timestampMs: Date.now(),
                        }),
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Success,
                        }
                      );
                    }
                    return (
                      b++,
                      {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return (
                      o("WALogger")
                        .ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "Failed to apply label JID sync mutation",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("label-jid-sync-apply-error"),
                      {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Failed,
                      }
                    );
                  }
                }),
              );
            (C > 0 &&
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "label jid sync: ",
                    " malformed mutations",
                  ])),
                C,
              ),
              b > 0 &&
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "label jid sync: ",
                      " unsupported operations",
                    ])),
                  b,
                ));
            var S = m.filter(function (e) {
                return !e.labeled;
              }),
              R = m.filter(function (e) {
                return e.labeled;
              });
            try {
              await o(
                "WAWebDBLabelAssociationDatabaseApi",
              ).removeLabelAssociations(i);
            } catch (e) {
              throw (
                S.forEach(function (e) {
                  h(
                    e,
                    o("WAWebWamLabelSyncTrackingReporter")
                      .LABEL_SYNC_RESULT_TYPE.FAILED_DB_UPDATE,
                  );
                }),
                e
              );
            }
            try {
              await o(
                "WAWebDBLabelAssociationDatabaseApi",
              ).mergeReceivedLabelAssociations(a);
            } catch (e) {
              throw (
                S.forEach(y),
                R.forEach(function (e) {
                  h(
                    e,
                    o("WAWebWamLabelSyncTrackingReporter")
                      .LABEL_SYNC_RESULT_TYPE.FAILED_DB_UPDATE,
                  );
                }),
                e
              );
            }
            return (
              m.forEach(y),
              (d.length > 0 || l.length > 0) &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "applyLabelAssociationChanges",
                  { removals: d, additions: l },
                ),
              v
            );
          }),
          (n.createLabelAssociationMutations = async function (t, n) {
            var e = this,
              r = o("WATimeUtils").unixTimeMs(),
              a = [];
            t.forEach(function (t) {
              var i = t.id,
                l = t.type;
              n.forEach(function (t) {
                var n = t.mutationIndexSegments,
                  s = { labelAssociationAction: { labeled: l === "add" } };
                a.push({
                  timestamp: r,
                  collection: e.collectionName,
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  indexArgs: [i].concat(n),
                  version: o("WAWebSyncdConst").LABEL_ASSOCIATION_SYNC_VERSION,
                  value: s,
                  action: o("WAWebSyncdConst").Actions.LabelJid,
                });
              });
            });
            var i = await Promise.all(
              a.map(async function (e) {
                var t = e.indexArgs,
                  n = t[0],
                  r = babelHelpers.arrayLikeToArray(t).slice(1),
                  a = await Promise.all(
                    r.map(async function (e) {
                      var t = o("WAWebWidFactory").createWid(e);
                      return o("WAWebSyncdGetChat").getWidMutationIndexForWid(
                        t,
                      );
                    }),
                  );
                return babelHelpers.extends({}, e, {
                  indexArgs: [n].concat(a),
                });
              }),
            );
            for (var l of i)
              if (l.action === o("WAWebSyncdConst").Actions.LabelJid) {
                var s = l.indexArgs,
                  u = s[0],
                  c = babelHelpers.arrayLikeToArray(s).slice(1),
                  d = c[0];
                if (u != null && d != null) {
                  var m;
                  g({
                    direction: o("WAWebWamLabelSyncTrackingReporter")
                      .LABEL_SYNC_DIRECTION_TYPE.SENDER,
                    isLabeled:
                      ((m = l.value.labelAssociationAction) == null
                        ? void 0
                        : m.labeled) === !0,
                    jid: d,
                    labelId: u,
                    result: o("WAWebWamLabelSyncTrackingReporter")
                      .LABEL_SYNC_RESULT_TYPE.SUCCESS,
                    timestampMs: r,
                  });
                }
              }
            return i.map(o("WAWebSyncdActionUtils").buildPendingMutation);
          }),
          t
        );
      })(o("WAWebSyncdAction").ChatOrContactSyncdActionBase),
      b = new C();
    l.default = b;
  },
  98,
);
