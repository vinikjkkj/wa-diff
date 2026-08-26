__d(
  "WAWebLabelSync",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
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
    var g = (function (e) {
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
              p = 0,
              g = [],
              h = 0,
              y = [],
              C = (_ || (_ = n("Promise"))).all(
                t.map(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t, s) {
                        try {
                          if (t.operation === "set") {
                            var u,
                              c = t.indexParts,
                              d = t.value,
                              m = c[1];
                            if (!m) return e.malformedActionIndex();
                            var _ = d.labelEditAction;
                            if (!_) {
                              var f;
                              a++;
                              var C = yield (f = o(
                                "WAWebWamLabelSyncTrackingReporter",
                              )).generateLabelEditHash(m);
                              return (
                                f.logLabelSyncEvent(
                                  C,
                                  f.LABEL_SYNC_TYPE_ENUM.LABEL_EDIT,
                                  f.LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                                  f.LABEL_SYNC_RESULT_TYPE
                                    .FAILED_MISSING_ACTION,
                                  !1,
                                  Date.now(),
                                ),
                                o("WAWebSyncdIndexUtils").malformedActionValue(
                                  e.collectionName,
                                )
                              );
                            }
                            if (_.deleted === !0) {
                              (yield o("WAWebSchemaLabel")
                                .getLabelTable()
                                .remove(m),
                                o(
                                  "WAWebLabelCollection",
                                ).LabelCollection.remove(m));
                              var b = _.predefinedId;
                              return (
                                (y[s] = {
                                  isDeleted: !0,
                                  labelId: m,
                                  predefinedId: b,
                                }),
                                o("WAWebWamLabelSyncTrackingReporter")
                                  .generateLabelEditHash(m)
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
                                      b,
                                    );
                                  }),
                                {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Success,
                                }
                              );
                            }
                            var v = _.color,
                              S = _.isActive,
                              R = _.isImmutable,
                              L = _.predefinedId,
                              E = _.type,
                              k = (u = _.name) != null ? u : "";
                            (k === "" && i++,
                              o("WAWebMobilePlatforms").isSMB() &&
                                v == null &&
                                l++);
                            var I = k;
                            if (
                              R === !0 &&
                              o("WAWebABProps").getABPropConfigValue(
                                "smb_do_label_localize_on_create_enabled_code",
                              )
                            ) {
                              var T = o(
                                "WAWebLabelConstants",
                              ).getLocalizedDoLabelNameByPredefinedId(L);
                              T != null && (I = T);
                            }
                            var D = {
                              id: m,
                              name: I,
                              colorIndex: v,
                              predefinedId: L,
                            };
                            if (
                              (_.orderIndex != null &&
                                (D.orderIndex = _.orderIndex),
                              E != null)
                            ) {
                              var x = o("WAWebSchemaLabel").ListType.cast(E);
                              if (x != null) D.type = x;
                              else
                                return (
                                  p++,
                                  g.length < 3 && g.push(E),
                                  {
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Skipped,
                                  }
                                );
                            }
                            (S != null && (D.isActive = S),
                              R != null && (D.isImmutable = R));
                            var $ =
                              E ===
                                o("WAWebProtobufSyncAction.pb")
                                  .SyncActionValue$LabelEditAction$ListType
                                  .AI_HANDOFF ||
                              E ===
                                o("WAWebProtobufSyncAction.pb")
                                  .SyncActionValue$LabelEditAction$ListType
                                  .AI_RESPONDING;
                            if (
                              r("justknobx")._("1781") &&
                              $ &&
                              _.deleted !== !0
                            ) {
                              var P = yield o("WAWebModelStorageUtils")
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
                                        return e.id !== m && e.type === D.type;
                                      });
                                    });
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })(),
                                );
                              if (P != null)
                                return {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Success,
                                };
                            }
                            if (
                              r("justknobx")._("1781") &&
                              _.deleted !== !0 &&
                              E ===
                                o("WAWebProtobufSyncAction.pb")
                                  .SyncActionValue$LabelEditAction$ListType
                                  .CUSTOM
                            ) {
                              var N =
                                  o("WAWebListUtils").getExpectedAiLabelName(
                                    "AI_HANDOFF",
                                  ),
                                M =
                                  o("WAWebListUtils").getExpectedAiLabelName(
                                    "AI_RESPONDING",
                                  ),
                                w = k === N || k === M;
                              if (w)
                                return {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Success,
                                };
                            }
                            var A = yield o("WAWebModelStorageUtils")
                              .getStorage()
                              .lock(
                                ["label", "label-association", "chat"],
                                (function () {
                                  var e = n(
                                    "asyncToGeneratorRuntime",
                                  ).asyncToGenerator(function* (e) {
                                    var t = e[0];
                                    if (D.orderIndex == null) {
                                      var n = yield t.get(m);
                                      (n == null ? void 0 : n.orderIndex) !=
                                        null && (D.orderIndex = n.orderIndex);
                                    }
                                    return (
                                      yield t.createOrReplace(D),
                                      o(
                                        "WAWebDBLabelAssociationDatabaseApi",
                                      ).queryLabelAssociationsForLabelIds([m])
                                    );
                                  });
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })(),
                              );
                            E ===
                            o("WAWebProtobufSyncAction.pb")
                              .SyncActionValue$LabelEditAction$ListType
                              .SERVER_ASSIGNED
                              ? o(
                                  "WAWebLabelCollection",
                                ).LabelCollection.addToServerAssignedLabelIdMap(
                                  m,
                                  L,
                                )
                              : o("WAWebLabelCollection").LabelCollection.add(
                                  babelHelpers.extends({}, D),
                                  { merge: !0 },
                                );
                            var F = o(
                              "WAWebLabelCollection",
                            ).LabelCollection.get(m);
                            if (F != null && A.length > 0) {
                              var O = F.labelItemCollection.reduce(function (
                                  e,
                                  t,
                                ) {
                                  return (e.add(t.id), e);
                                }, new Set()),
                                B = A.filter(function (e) {
                                  return !O.has(e.associationId);
                                });
                              B.length > 0 &&
                                o(
                                  "WAWebLabelCollection",
                                ).LabelCollection.initializeAssociationsFromCache(
                                  B,
                                );
                            }
                            return (
                              o("WAWebWamLabelSyncTrackingReporter")
                                .generateLabelEditHash(m)
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
                                    L,
                                  );
                                }),
                              (y[s] = {
                                isDeleted: !1,
                                labelId: m,
                                predefinedId: L,
                              }),
                              {
                                actionState:
                                  o("WAWebSyncdConst").SyncActionState.Success,
                              }
                            );
                          }
                          return (
                            h++,
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
            return C.then(function (e) {
              (a > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "label sync: ",
                      " malformed mutations",
                    ])),
                  a,
                ),
                i > 0 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.name is empty for ",
                        " mutations",
                      ])),
                    i,
                  ),
                l > 0 &&
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.color is empty for ",
                        " mutations",
                      ])),
                    l,
                  ),
                p > 0 &&
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.type has unexpected value for ",
                        " mutations => ",
                        "",
                      ])),
                    p,
                    g,
                  ),
                h > 0 &&
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "label sync: ",
                        " operations not supported",
                      ])),
                    h,
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
          (a.getLabelMutation = function (t) {
            var e = t.color,
              n = t.deleted,
              r = t.id,
              a = t.isActive,
              i = t.name,
              l = t.predefinedId,
              s = t.timestamp,
              u = t.type,
              c = { name: i, deleted: n };
            if (
              (e != null && (c.color = e),
              l != null && (c.predefinedId = l),
              a != null && (c.isActive = a),
              u != null)
            ) {
              var d = o(
                "WAWebProtobufSyncAction.pb",
              ).SyncActionValue$LabelEditAction$ListType.cast(u);
              d != null
                ? (c.type = d)
                : o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "getLabelMutation: type has unexpected value: ",
                        "",
                      ])),
                    u,
                  );
            }
            return (
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
                    s,
                    void 0,
                    l,
                  );
                }),
              o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [r],
                value: { labelEditAction: c },
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb")
                  .SyncdMutation$SyncdOperation.SET,
                timestamp: s,
                action: this.getAction(),
              })
            );
          }),
          t
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      h = new g();
    l.default = h;
  },
  98,
);
