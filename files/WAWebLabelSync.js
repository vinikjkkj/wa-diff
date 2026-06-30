__d(
  "WAWebLabelSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
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
    "WAWebSyncdIndexUtils",
    "WAWebWamLabelSyncTrackingReporter",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 3;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.LabelEdit;
          }),
          (i.applyMutations = function (a) {
            var t = this,
              i = 0,
              l = 0,
              m = 0,
              _ = 0,
              f = [],
              g = 0,
              h = (p || (p = n("Promise"))).all(
                a.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        try {
                          if (e.operation === "set") {
                            var a,
                              s = e.indexParts,
                              u = e.value,
                              c = s[1];
                            if (!c) return t.malformedActionIndex();
                            var d = u.labelEditAction;
                            if (!d) {
                              var p;
                              i++;
                              var h = yield (p = o(
                                "WAWebWamLabelSyncTrackingReporter",
                              )).generateLabelEditHash(c);
                              return (
                                p.logLabelSyncEvent(
                                  h,
                                  p.LABEL_SYNC_TYPE_ENUM.LABEL_EDIT,
                                  p.LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                                  p.LABEL_SYNC_RESULT_TYPE
                                    .FAILED_MISSING_ACTION,
                                  !1,
                                  Date.now(),
                                ),
                                o("WAWebSyncdIndexUtils").malformedActionValue(
                                  t.collectionName,
                                )
                              );
                            }
                            if (d.deleted === !0) {
                              (yield o("WAWebSchemaLabel")
                                .getLabelTable()
                                .remove(c),
                                o(
                                  "WAWebLabelCollection",
                                ).LabelCollection.remove(c));
                              var y = d.predefinedId;
                              return (
                                o("WAWebWamLabelSyncTrackingReporter")
                                  .generateLabelEditHash(c)
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
                                      y,
                                    );
                                  }),
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Success,
                                }
                              );
                            }
                            var C = d.color,
                              b = d.isActive,
                              v = d.isImmutable,
                              S = d.predefinedId,
                              R = d.type,
                              L = (a = d.name) != null ? a : "";
                            (L === "" && l++,
                              o("WAWebMobilePlatforms").isSMB() &&
                                C == null &&
                                m++);
                            var E = L;
                            if (
                              v === !0 &&
                              o("WAWebABProps").getABPropConfigValue(
                                "smb_do_label_localize_on_create_enabled_code",
                              )
                            ) {
                              var k = o(
                                "WAWebLabelConstants",
                              ).getLocalizedDoLabelNameByPredefinedId(S);
                              k != null && (E = k);
                            }
                            var I = {
                              id: c,
                              name: E,
                              colorIndex: C,
                              predefinedId: S,
                            };
                            if (
                              (d.orderIndex != null &&
                                (I.orderIndex = d.orderIndex),
                              R != null)
                            ) {
                              var T = o("WAWebSchemaLabel").ListType.cast(R);
                              if (T != null) I.type = T;
                              else
                                return (
                                  _++,
                                  f.length < 3 && f.push(R),
                                  {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Skipped,
                                  }
                                );
                            }
                            (b != null && (I.isActive = b),
                              v != null && (I.isImmutable = v));
                            var D =
                              R ===
                                o("WAWebProtobufSyncAction.pb")
                                  .SyncActionValue$LabelEditAction$ListType
                                  .AI_HANDOFF ||
                              R ===
                                o("WAWebProtobufSyncAction.pb")
                                  .SyncActionValue$LabelEditAction$ListType
                                  .AI_RESPONDING;
                            if (
                              r("justknobx")._("1781") &&
                              D &&
                              d.deleted !== !0
                            ) {
                              var x = yield o("WAWebModelStorageUtils")
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
                                        return e.id !== c && e.type === I.type;
                                      });
                                    });
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })(),
                                );
                              if (x != null)
                                return {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Success,
                                };
                            }
                            if (
                              r("justknobx")._("1781") &&
                              d.deleted !== !0 &&
                              R ===
                                o("WAWebProtobufSyncAction.pb")
                                  .SyncActionValue$LabelEditAction$ListType
                                  .CUSTOM
                            ) {
                              var $ =
                                  o("WAWebListUtils").getExpectedAiLabelName(
                                    "AI_HANDOFF",
                                  ),
                                P =
                                  o("WAWebListUtils").getExpectedAiLabelName(
                                    "AI_RESPONDING",
                                  ),
                                N = L === $ || L === P;
                              if (N)
                                return {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Success,
                                };
                            }
                            var M = yield o("WAWebModelStorageUtils")
                              .getStorage()
                              .lock(
                                ["label", "label-association", "chat"],
                                (function () {
                                  var e = n(
                                    "asyncToGeneratorRuntime",
                                  ).asyncToGenerator(function* (e) {
                                    var t = e[0];
                                    return (
                                      yield t.createOrReplace(I),
                                      o(
                                        "WAWebDBLabelAssociationDatabaseApi",
                                      ).queryLabelAssociationsForLabelIds([c])
                                    );
                                  });
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })(),
                              );
                            R ===
                            o("WAWebProtobufSyncAction.pb")
                              .SyncActionValue$LabelEditAction$ListType
                              .SERVER_ASSIGNED
                              ? o(
                                  "WAWebLabelCollection",
                                ).LabelCollection.addToServerAssignedLabelIdMap(
                                  c,
                                  S,
                                )
                              : o("WAWebLabelCollection").LabelCollection.add(
                                  babelHelpers.extends({}, I),
                                  { merge: !0 },
                                );
                            var w = o(
                              "WAWebLabelCollection",
                            ).LabelCollection.get(c);
                            if (w != null && M.length > 0) {
                              var A = w.labelItemCollection.reduce(function (
                                  e,
                                  t,
                                ) {
                                  return (e.add(t.id), e);
                                }, new Set()),
                                F = M.filter(function (e) {
                                  return !A.has(e.associationId);
                                });
                              F.length > 0 &&
                                o(
                                  "WAWebLabelCollection",
                                ).LabelCollection.initializeAssociationsFromCache(
                                  F,
                                );
                            }
                            return (
                              o("WAWebWamLabelSyncTrackingReporter")
                                .generateLabelEditHash(c)
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
                                    S,
                                  );
                                }),
                              {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Success,
                              }
                            );
                          }
                          return (
                            g++,
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Unsupported,
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
            return h.then(function (t) {
              return (
                i > 0 &&
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "label sync: ",
                        " malformed mutations",
                      ])),
                    i,
                  ),
                l > 0 &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.name is empty for ",
                        " mutations",
                      ])),
                    l,
                  ),
                m > 0 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.color is empty for ",
                        " mutations",
                      ])),
                    m,
                  ),
                _ > 0 &&
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.type has unexpected value for ",
                        " mutations => ",
                        "",
                      ])),
                    _,
                    f,
                  ),
                g > 0 &&
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "label sync: ",
                        " operations not supported",
                      ])),
                    g,
                  ),
                t
              );
            });
          }),
          (i.getLabelMutation = function (t, n, r, a, i, l, s, u) {
            var e = { name: n, deleted: a };
            if (
              (r != null && (e.color = r),
              i != null && (e.predefinedId = i),
              l != null && (e.isActive = l),
              s != null)
            ) {
              var c = o(
                "WAWebProtobufSyncAction.pb",
              ).SyncActionValue$LabelEditAction$ListType.cast(s);
              c != null
                ? (e.type = c)
                : o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "getLabelMutation: type has unexpected value: ",
                        "",
                      ])),
                    s,
                  );
            }
            return (
              o("WAWebWamLabelSyncTrackingReporter")
                .generateLabelEditHash(t)
                .then(function (e) {
                  var t;
                  (t = o(
                    "WAWebWamLabelSyncTrackingReporter",
                  )).logLabelSyncEvent(
                    e,
                    t.LABEL_SYNC_TYPE_ENUM.LABEL_EDIT,
                    t.LABEL_SYNC_DIRECTION_TYPE.SENDER,
                    t.LABEL_SYNC_RESULT_TYPE.SUCCESS,
                    !a,
                    u,
                    void 0,
                    i,
                  );
                }),
              o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [t],
                value: { labelEditAction: e },
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb")
                  .SyncdMutation$SyncdOperation.SET,
                timestamp: u,
                action: this.getAction(),
              })
            );
          }),
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      f = new _();
    l.default = f;
  },
  98,
);
