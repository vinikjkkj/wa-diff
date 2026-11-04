__d(
  "WAWebLabelSync",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(t, n, a, i, l, s) {
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
    function h(e, t) {
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
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o(
              "WAWebDBLabelSublistDatabaseApi",
            ).removeLabelSublistsByPredefinedId(
              o("WAWebLeadListConstants").LEGACY_LEAD_LIST_PREDEFINED_ID,
            );
          } catch (e) {
            o("WALogger")
              .WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "label sync: clearing legacy Lead list stages failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("label-sync-clear-legacy-lead-sublists-failed");
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      var n = t.isActive,
        r = t.type;
      if ((n != null && (e.isActive = n), r != null)) {
        var a = o(
          "WAWebProtobufSyncAction.pb",
        ).SyncActionValue$LabelEditAction$ListType.cast(r);
        a != null
          ? (e.type = a)
          : o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getLabelMutation: type has unexpected value: ",
                  "",
                ])),
              r,
            );
      }
    }
    var v = (function (e) {
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
        var a = t.prototype;
        return (
          (a.getVersion = function () {
            return 3;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.LabelEdit;
          }),
          (a.applyMutations = function (t) {
            var e = this,
              a = 0,
              i = 0,
              l = 0,
              s = 0,
              _ = [],
              C = 0,
              b = [],
              v = (f || (f = n("Promise"))).all(
                t.map(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t, u) {
                        try {
                          if (t.operation === "set") {
                            var c,
                              d = t.indexParts,
                              m = t.value,
                              p = d[1];
                            if (!p) return e.malformedActionIndex();
                            var f = m.labelEditAction;
                            if (!f) {
                              var g;
                              a++;
                              var v = yield (g = o(
                                "WAWebWamLabelSyncTrackingReporter",
                              )).generateLabelEditHash(p);
                              return (
                                g.logLabelSyncEvent(
                                  v,
                                  g.LABEL_SYNC_TYPE_ENUM.LABEL_EDIT,
                                  g.LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                                  g.LABEL_SYNC_RESULT_TYPE
                                    .FAILED_MISSING_ACTION,
                                  !1,
                                  Date.now(),
                                ),
                                o("WAWebSyncdIndexUtils").malformedActionValue(
                                  e.collectionName,
                                )
                              );
                            }
                            if (f.deleted === !0) {
                              var S = yield o("WAWebSchemaLabel")
                                .getLabelTable()
                                .get(p);
                              (yield o("WAWebSchemaLabel")
                                .getLabelTable()
                                .remove(p),
                                o(
                                  "WAWebLabelCollection",
                                ).LabelCollection.remove(p),
                                (S == null ? void 0 : S.predefinedId) ===
                                  o("WAWebLeadListConstants")
                                    .LEGACY_LEAD_LIST_PREDEFINED_ID &&
                                  (yield y()));
                              var R = f.predefinedId;
                              return (
                                (b[u] = {
                                  isDeleted: !0,
                                  labelId: p,
                                  predefinedId: R,
                                }),
                                o("WAWebWamLabelSyncTrackingReporter")
                                  .generateLabelEditHash(p)
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
                                      R,
                                    );
                                  }),
                                {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Success,
                                }
                              );
                            }
                            var L = f.color,
                              E = f.isActive,
                              k = f.isImmutable,
                              I = f.predefinedId,
                              T = f.type,
                              D = (c = f.name) != null ? c : "";
                            (D === "" && i++,
                              o("WAWebMobilePlatforms").isSMB() &&
                                L == null &&
                                l++);
                            var x = D;
                            if (
                              k === !0 &&
                              o("WAWebABProps").getABPropConfigValue(
                                "smb_do_label_localize_on_create_enabled_code",
                              )
                            ) {
                              var $ = o(
                                "WAWebLabelConstants",
                              ).getLocalizedDoLabelNameByPredefinedId(I);
                              $ != null && (x = $);
                            }
                            var P = {
                              id: p,
                              name: x,
                              colorIndex: L,
                              predefinedId: I,
                            };
                            if (
                              (f.orderIndex != null &&
                                (P.orderIndex = f.orderIndex),
                              T != null)
                            ) {
                              var N = o("WAWebSchemaLabel").ListType.cast(T);
                              if (N != null) P.type = N;
                              else
                                return (
                                  s++,
                                  _.length < 3 && _.push(T),
                                  {
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Skipped,
                                  }
                                );
                            }
                            (E != null && (P.isActive = E),
                              k != null && (P.isImmutable = k));
                            var M =
                              T ===
                                o("WAWebProtobufSyncAction.pb")
                                  .SyncActionValue$LabelEditAction$ListType
                                  .AI_HANDOFF ||
                              T ===
                                o("WAWebProtobufSyncAction.pb")
                                  .SyncActionValue$LabelEditAction$ListType
                                  .AI_RESPONDING;
                            if (
                              r("justknobx")._("1781") &&
                              M &&
                              f.deleted !== !0
                            ) {
                              var w = yield o("WAWebModelStorageUtils")
                                .getStorage()
                                .lock(
                                  ["label"],
                                  (function () {
                                    var e = n(
                                      "asyncToGeneratorRuntime",
                                    ).asyncToGenerator(function* (e) {
                                      var t = e[0],
                                        n = yield t.all();
                                      return n.find(function (e) {
                                        return e.id !== p && e.type === P.type;
                                      });
                                    });
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })(),
                                );
                              if (w != null)
                                return {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Success,
                                };
                            }
                            if (
                              r("justknobx")._("1781") &&
                              f.deleted !== !0 &&
                              T ===
                                o("WAWebProtobufSyncAction.pb")
                                  .SyncActionValue$LabelEditAction$ListType
                                  .CUSTOM
                            ) {
                              var A =
                                  o("WAWebListUtils").getExpectedAiLabelName(
                                    "AI_HANDOFF",
                                  ),
                                F =
                                  o("WAWebListUtils").getExpectedAiLabelName(
                                    "AI_RESPONDING",
                                  ),
                                O = D === A || D === F;
                              if (O)
                                return {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Success,
                                };
                            }
                            var B = yield o("WAWebModelStorageUtils")
                              .getStorage()
                              .lock(
                                ["label", "label-association", "chat"],
                                (function () {
                                  var e = n(
                                    "asyncToGeneratorRuntime",
                                  ).asyncToGenerator(function* (e) {
                                    var t = e[0];
                                    if (P.orderIndex == null) {
                                      var n = yield t.get(p);
                                      (n == null ? void 0 : n.orderIndex) !=
                                        null && (P.orderIndex = n.orderIndex);
                                    }
                                    return (
                                      yield t.createOrReplace(P),
                                      o(
                                        "WAWebDBLabelAssociationDatabaseApi",
                                      ).queryLabelAssociationsForLabelIds([p])
                                    );
                                  });
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })(),
                              );
                            h(P, T);
                            var W = o(
                              "WAWebLabelCollection",
                            ).LabelCollection.get(p);
                            if (W != null && B.length > 0) {
                              var q = W.labelItemCollection.reduce(function (
                                  e,
                                  t,
                                ) {
                                  return (e.add(t.id), e);
                                }, new Set()),
                                U = B.filter(function (e) {
                                  return !q.has(e.associationId);
                                });
                              U.length > 0 &&
                                o(
                                  "WAWebLabelCollection",
                                ).LabelCollection.initializeAssociationsFromCache(
                                  U,
                                );
                            }
                            return (
                              o("WAWebWamLabelSyncTrackingReporter")
                                .generateLabelEditHash(p)
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
                                    I,
                                  );
                                }),
                              (b[u] = {
                                isDeleted: !1,
                                labelId: p,
                                predefinedId: I,
                              }),
                              {
                                actionState:
                                  o("WAWebSyncdConst").SyncActionState.Success,
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
                          return {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Failed,
                          };
                        }
                      },
                    );
                    return function (e, n) {
                      return t.apply(this, arguments);
                    };
                  })(),
                ),
              );
            return v.then(function (e) {
              (a > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "label sync: ",
                      " malformed mutations",
                    ])),
                  a,
                ),
                i > 0 &&
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.name is empty for ",
                        " mutations",
                      ])),
                    i,
                  ),
                l > 0 &&
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.color is empty for ",
                        " mutations",
                      ])),
                    l,
                  ),
                s > 0 &&
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.type has unexpected value for ",
                        " mutations => ",
                        "",
                      ])),
                    s,
                    _,
                  ),
                C > 0 &&
                  o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "label sync: ",
                        " operations not supported",
                      ])),
                    C,
                  ));
              var t = new Map();
              return (
                e.forEach(function (e, n) {
                  var r = b[n];
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
                    g(
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
          (a.getLabelMutation = function (t) {
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
              t.deleted || b(s, t),
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
      S = new v();
    l.default = S;
  },
  98,
);
