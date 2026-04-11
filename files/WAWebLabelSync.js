__d(
  "WAWebLabelSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebLabelCollection",
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
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 3;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.LabelEdit;
          }),
          (a.applyMutations = function (r) {
            var t = this,
              a = 0,
              i = 0,
              l = 0,
              m = 0,
              _ = [],
              f = 0,
              g = (p || (p = n("Promise"))).all(
                r.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        try {
                          if (e.operation === "set") {
                            var r,
                              s = e.indexParts,
                              u = e.value,
                              c = s[1];
                            if (!c) return t.malformedActionIndex();
                            var d = u.labelEditAction;
                            if (!d) {
                              var p;
                              a++;
                              var g = yield (p = o(
                                "WAWebWamLabelSyncTrackingReporter",
                              )).generateLabelEditHash(c);
                              return (
                                p.logLabelSyncEvent(
                                  g,
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
                            if (d.deleted === !0)
                              return (
                                yield o("WAWebSchemaLabel")
                                  .getLabelTable()
                                  .remove(c),
                                o(
                                  "WAWebLabelCollection",
                                ).LabelCollection.remove(c),
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
                                    );
                                  }),
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Success,
                                }
                              );
                            var h = d.color,
                              y = d.isActive,
                              C = d.isImmutable,
                              b = d.predefinedId,
                              v = d.type,
                              S = (r = d.name) != null ? r : "";
                            (S === "" && i++,
                              o("WAWebMobilePlatforms").isSMB() &&
                                h == null &&
                                l++);
                            var R = {
                              id: c,
                              name: S,
                              colorIndex: h,
                              predefinedId: b,
                            };
                            if (
                              (d.orderIndex != null &&
                                (R.orderIndex = d.orderIndex),
                              v != null)
                            ) {
                              var L = o("WAWebSchemaLabel").ListType.cast(v);
                              L != null
                                ? (R.type = L)
                                : (m++, _.length < 3 && _.push(v));
                            }
                            (y != null && (R.isActive = y),
                              C != null && (R.isImmutable = C));
                            var E = yield o("WAWebModelStorageUtils")
                              .getStorage()
                              .lock(
                                ["label", "label-association", "chat"],
                                (function () {
                                  var e = n(
                                    "asyncToGeneratorRuntime",
                                  ).asyncToGenerator(function* (e) {
                                    var t = e[0];
                                    return (
                                      yield t.createOrReplace(R),
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
                            v ===
                            o("WAWebProtobufSyncAction.pb")
                              .SyncActionValue$LabelEditAction$ListType
                              .SERVER_ASSIGNED
                              ? o(
                                  "WAWebLabelCollection",
                                ).LabelCollection.addToServerAssignedLabelIdMap(
                                  c,
                                  b,
                                )
                              : o("WAWebLabelCollection").LabelCollection.add(
                                  babelHelpers.extends({}, R),
                                  { merge: !0 },
                                );
                            var k = o(
                              "WAWebLabelCollection",
                            ).LabelCollection.get(c);
                            if (k != null && E.length > 0) {
                              var I = k.labelItemCollection.reduce(function (
                                  e,
                                  t,
                                ) {
                                  return (e.add(t.id), e);
                                }, new Set()),
                                T = E.filter(function (e) {
                                  return !I.has(e.associationId);
                                });
                              T.length > 0 &&
                                o(
                                  "WAWebLabelCollection",
                                ).LabelCollection.initializeAssociationsFromCache(
                                  T,
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
                                  );
                                }),
                              {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Success,
                              }
                            );
                          }
                          return (
                            f++,
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
            return g.then(function (t) {
              return (
                a > 0 &&
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "label sync: ",
                        " malformed mutations",
                      ])),
                    a,
                  ),
                i > 0 &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.name is empty for ",
                        " mutations",
                      ])),
                    i,
                  ),
                l > 0 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.color is empty for ",
                        " mutations",
                      ])),
                    l,
                  ),
                m > 0 &&
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.type has unexpected value for ",
                        " mutations => ",
                        "",
                      ])),
                    m,
                    _,
                  ),
                f > 0 &&
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "label sync: ",
                        " operations not supported",
                      ])),
                    f,
                  ),
                t
              );
            });
          }),
          (a.getLabelMutation = function (t, n, r, a, i, l, s, u) {
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
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      f = new _();
    l.default = f;
  },
  98,
);
