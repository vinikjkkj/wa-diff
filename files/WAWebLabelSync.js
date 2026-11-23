__d(
  "WAWebLabelSync",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLeadListConstants",
    "WAWebListUtils",
    "WAWebMobilePlatforms",
    "WAWebModelStorageUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaLabel",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebWamLabelSyncTrackingReporter",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(t, n, a, i, l, s) {
      o("WAWebWamLabelSyncTrackingReporter")
        .generateLabelJidHash(t, n)
        .then(function (e) {
          o("WAWebWamLabelSyncTrackingReporter").logLabelSyncEvent(
            e,
            o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_TYPE_ENUM
              .LABEL_JID,
            o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_DIRECTION_TYPE
              .RETRY,
            s,
            a,
            i,
            void 0,
            l,
          );
        })
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to log deferred label association WAM event",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("label-association-retry-wam-error");
        });
    }
    function g(e, t) {
      if (
        t ===
        o("WAWebProtobufSyncAction.pb").SyncActionValue$LabelEditAction$ListType
          .SERVER_ASSIGNED
      ) {
        o("WAWebLabelCollection").LabelCollection.addToServerAssignedLabelIdMap(
          e.id,
          e.predefinedId,
        );
        return;
      }
      o("WAWebLabelCollection").LabelCollection.hideIfLegacyLeadList(e) ||
        o("WAWebLabelCollection").LabelCollection.add(
          babelHelpers.extends({}, e),
          { merge: !0 },
        );
    }
    async function h() {
      try {
        await o(
          "WAWebDBLabelSublistDatabaseApi",
        ).removeLabelSublistsByPredefinedId(
          o("WAWebLeadListConstants").LEGACY_LEAD_LIST_PREDEFINED_ID,
        );
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "label sync: clearing legacy Lead list stages failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("label-sync-clear-legacy-lead-sublists-failed");
      }
    }
    function y(e, t) {
      var n = t.isActive,
        r = t.type;
      if ((n != null && (e.isActive = n), r != null)) {
        var a = o(
          "WAWebProtobufSyncAction.pb",
        ).SyncActionValue$LabelEditAction$ListType.cast(r);
        a != null
          ? (e.type = a)
          : o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "getLabelMutation: type has unexpected value: ",
                  "",
                ])),
              r,
            );
      }
    }
    var C = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.collectionName = o("WAWebSyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getVersion = function () {
            return 3;
          }),
          (n.getAction = function () {
            return o("WAWebSyncdConst").Actions.LabelEdit;
          }),
          (n.applyMutations = function (t) {
            var e = this,
              n = 0,
              a = 0,
              i = 0,
              l = 0,
              s = [],
              u = 0,
              y = [],
              C = Promise.all(
                t.map(async function (t, c) {
                  try {
                    if (t.operation === "set") {
                      var d,
                        m = t.indexParts,
                        p = t.value,
                        _ = m[1];
                      if (!_) return e.malformedActionIndex();
                      var f = p.labelEditAction;
                      if (!f) {
                        var C;
                        n++;
                        var b = await (C = o(
                          "WAWebWamLabelSyncTrackingReporter",
                        )).generateLabelEditHash(_);
                        return (
                          C.logLabelSyncEvent(
                            b,
                            C.LABEL_SYNC_TYPE_ENUM.LABEL_EDIT,
                            C.LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                            C.LABEL_SYNC_RESULT_TYPE.FAILED_MISSING_ACTION,
                            !1,
                            Date.now(),
                          ),
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            e.collectionName,
                          )
                        );
                      }
                      if (
                        _ === o("WAWebListUtils").META_AI_LIST_ID ||
                        f.type === o("WAWebSchemaLabel").ListType.META_AI_THREAD
                      )
                        return {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Skipped,
                        };
                      if (f.deleted === !0) {
                        var v = await o("WAWebSchemaLabel")
                          .getLabelTable()
                          .get(_);
                        (await o("WAWebSchemaLabel").getLabelTable().remove(_),
                          o("WAWebLabelCollection").LabelCollection.remove(_),
                          (v == null ? void 0 : v.predefinedId) ===
                            o("WAWebLeadListConstants")
                              .LEGACY_LEAD_LIST_PREDEFINED_ID && (await h()));
                        var S = f.predefinedId;
                        return (
                          (y[c] = {
                            isDeleted: !0,
                            labelId: _,
                            predefinedId: S,
                          }),
                          o("WAWebWamLabelSyncTrackingReporter")
                            .generateLabelEditHash(_)
                            .then(function (e) {
                              var t;
                              (t = o(
                                "WAWebWamLabelSyncTrackingReporter",
                              )).logLabelSyncEvent(
                                e,
                                t.LABEL_SYNC_TYPE_ENUM.LABEL_EDIT,
                                t.LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                                t.LABEL_SYNC_RESULT_TYPE.SUCCESS,
                                !1,
                                Date.now(),
                                void 0,
                                S,
                              );
                            }),
                          {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Success,
                          }
                        );
                      }
                      var R = f.color,
                        L = f.isActive,
                        E = f.isImmutable,
                        k = f.predefinedId,
                        I = f.type,
                        T = (d = f.name) != null ? d : "";
                      (T === "" && a++,
                        o("WAWebMobilePlatforms").isSMB() && R == null && i++);
                      var D = T;
                      if (
                        E === !0 &&
                        o("WAWebABProps").getABPropConfigValue(
                          "smb_do_label_localize_on_create_enabled_code",
                        )
                      ) {
                        var x = o(
                          "WAWebLabelConstants",
                        ).getLocalizedDoLabelNameByPredefinedId(k);
                        x != null && (D = x);
                      }
                      var $ = {
                        id: _,
                        name: D,
                        colorIndex: R,
                        predefinedId: k,
                      };
                      if (
                        (f.orderIndex != null && ($.orderIndex = f.orderIndex),
                        I != null)
                      ) {
                        var P = o("WAWebSchemaLabel").ListType.cast(I);
                        if (P != null) $.type = P;
                        else
                          return (
                            l++,
                            s.length < 3 && s.push(I),
                            {
                              actionState:
                                o("WAWebSyncdConst").SyncActionState.Skipped,
                            }
                          );
                      }
                      (L != null && ($.isActive = L),
                        E != null && ($.isImmutable = E));
                      var N =
                        I ===
                          o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$LabelEditAction$ListType
                            .AI_HANDOFF ||
                        I ===
                          o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$LabelEditAction$ListType
                            .AI_RESPONDING;
                      if (r("justknobx")._("1781") && N && f.deleted !== !0) {
                        var M = await o("WAWebModelStorageUtils")
                          .getStorage()
                          .lock(["label"], async function (e) {
                            var t = e[0],
                              n = await t.all();
                            return n.find(function (e) {
                              return e.id !== _ && e.type === $.type;
                            });
                          });
                        if (M != null)
                          return {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Success,
                          };
                      }
                      if (
                        r("justknobx")._("1781") &&
                        f.deleted !== !0 &&
                        I ===
                          o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$LabelEditAction$ListType.CUSTOM
                      ) {
                        var w =
                            o("WAWebListUtils").getExpectedAiLabelName(
                              "AI_HANDOFF",
                            ),
                          A =
                            o("WAWebListUtils").getExpectedAiLabelName(
                              "AI_RESPONDING",
                            ),
                          F = T === w || T === A;
                        if (F)
                          return {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Success,
                          };
                      }
                      var O = await o("WAWebModelStorageUtils")
                        .getStorage()
                        .lock(
                          ["label", "label-association", "chat"],
                          async function (e) {
                            var t = e[0];
                            if ($.orderIndex == null) {
                              var n = await t.get(_);
                              (n == null ? void 0 : n.orderIndex) != null &&
                                ($.orderIndex = n.orderIndex);
                            }
                            return (
                              await t.createOrReplace($),
                              o(
                                "WAWebDBLabelAssociationDatabaseApi",
                              ).queryLabelAssociationsForLabelIds([_])
                            );
                          },
                        );
                      g($, I);
                      var B = o("WAWebLabelCollection").LabelCollection.get(_);
                      if (B != null && O.length > 0) {
                        var W = B.labelItemCollection.reduce(function (e, t) {
                            return (e.add(t.id), e);
                          }, new Set()),
                          q = O.filter(function (e) {
                            return !W.has(e.associationId);
                          });
                        q.length > 0 &&
                          o(
                            "WAWebLabelCollection",
                          ).LabelCollection.initializeAssociationsFromCache(q);
                      }
                      return (
                        o("WAWebWamLabelSyncTrackingReporter")
                          .generateLabelEditHash(_)
                          .then(function (e) {
                            var t;
                            (t = o(
                              "WAWebWamLabelSyncTrackingReporter",
                            )).logLabelSyncEvent(
                              e,
                              t.LABEL_SYNC_TYPE_ENUM.LABEL_EDIT,
                              t.LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                              t.LABEL_SYNC_RESULT_TYPE.SUCCESS,
                              !0,
                              Date.now(),
                              void 0,
                              k,
                            );
                          }),
                        (y[c] = { isDeleted: !1, labelId: _, predefinedId: k }),
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Success,
                        }
                      );
                    }
                    return (
                      u++,
                      {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WAWebSyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return C.then(function (e) {
              (n > 0 &&
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "label sync: ",
                      " malformed mutations",
                    ])),
                  n,
                ),
                a > 0 &&
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.name is empty for ",
                        " mutations",
                      ])),
                    a,
                  ),
                i > 0 &&
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.color is empty for ",
                        " mutations",
                      ])),
                    i,
                  ),
                l > 0 &&
                  o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.type has unexpected value for ",
                        " mutations => ",
                        "",
                      ])),
                    l,
                    s,
                  ),
                u > 0 &&
                  o("WALogger").WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "label sync: ",
                        " operations not supported",
                      ])),
                    u,
                  ));
              var t = new Map();
              return (
                e.forEach(function (e, n) {
                  var r = y[n];
                  if (
                    !(
                      e.actionState !==
                        o("WAWebSyncdConst").SyncActionState.Success ||
                      r == null
                    )
                  ) {
                    var a = t.get(r.labelId);
                    ((a == null ? void 0 : a.isDeleted) === !1 &&
                      r.isDeleted) ||
                      t.set(r.labelId, r);
                  }
                }),
                t.forEach(function (e) {
                  var t = o(
                    "WAWebWamLabelSyncTrackingReporter",
                  ).takeDeferredLabelAssociations(e.labelId);
                  t.forEach(function (t) {
                    f(
                      e.labelId,
                      t.chatJid,
                      t.isLabeled,
                      t.timestampMs,
                      e.predefinedId,
                      e.isDeleted
                        ? o("WAWebWamLabelSyncTrackingReporter")
                            .LABEL_SYNC_RESULT_TYPE.FAILED_LABEL_NOT_FOUND
                        : o("WAWebWamLabelSyncTrackingReporter")
                            .LABEL_SYNC_RESULT_TYPE.SUCCESS,
                    );
                  });
                }),
                e
              );
            });
          }),
          (n.getLabelMutation = function (t) {
            var e = t.color,
              n = t.deleted,
              r = t.id,
              a = t.name,
              i = t.predefinedId,
              l = t.timestamp,
              s = { name: a, deleted: n };
            return (
              e != null && (s.color = e),
              i != null && (s.predefinedId = i),
              t.deleted || y(s, t),
              o("WAWebWamLabelSyncTrackingReporter")
                .generateLabelEditHash(r)
                .then(function (e) {
                  var t;
                  (t = o(
                    "WAWebWamLabelSyncTrackingReporter",
                  )).logLabelSyncEvent(
                    e,
                    t.LABEL_SYNC_TYPE_ENUM.LABEL_EDIT,
                    t.LABEL_SYNC_DIRECTION_TYPE.SENDER,
                    t.LABEL_SYNC_RESULT_TYPE.SUCCESS,
                    !n,
                    l,
                    void 0,
                    i,
                  );
                }),
              o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [r],
                value: { labelEditAction: s },
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb")
                  .SyncdMutation$SyncdOperation.SET,
                timestamp: l,
                action: this.getAction(),
              })
            );
          }),
          t
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      b = new C();
    l.default = b;
  },
  98,
);
