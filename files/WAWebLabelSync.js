__d(
  "WAWebLabelSync",
  [
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
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 3;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.LabelEdit;
          }),
          (a.applyMutations = function (n) {
            var t = this,
              a = 0,
              i = 0,
              l = 0,
              m = 0,
              p = [],
              _ = 0,
              f = Promise.all(
                n.map(async function (e) {
                  try {
                    if (e.operation === "set") {
                      var n,
                        s = e.indexParts,
                        u = e.value,
                        c = s[1];
                      if (!c) return t.malformedActionIndex();
                      var d = u.labelEditAction;
                      if (!d) {
                        var f;
                        a++;
                        var g = await (f = o(
                          "WAWebWamLabelSyncTrackingReporter",
                        )).generateLabelEditHash(c);
                        return (
                          f.logLabelSyncEvent(
                            g,
                            f.LABEL_SYNC_TYPE_ENUM.LABEL_EDIT,
                            f.LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                            f.LABEL_SYNC_RESULT_TYPE.FAILED_MISSING_ACTION,
                            !1,
                            Date.now(),
                          ),
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      }
                      if (d.deleted === !0) {
                        (await o("WAWebSchemaLabel").getLabelTable().remove(c),
                          o("WAWebLabelCollection").LabelCollection.remove(c));
                        var h = d.predefinedId;
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
                                h,
                              );
                            }),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          }
                        );
                      }
                      var y = d.color,
                        C = d.isActive,
                        b = d.isImmutable,
                        v = d.predefinedId,
                        S = d.type,
                        R = (n = d.name) != null ? n : "";
                      (R === "" && i++,
                        o("WAWebMobilePlatforms").isSMB() && y == null && l++);
                      var L = R;
                      if (
                        b === !0 &&
                        o("WAWebABProps").getABPropConfigValue(
                          "smb_do_label_localize_on_create_enabled_code",
                        )
                      ) {
                        var E = o(
                          "WAWebLabelConstants",
                        ).getLocalizedDoLabelNameByPredefinedId(v);
                        E != null && (L = E);
                      }
                      var k = {
                        id: c,
                        name: L,
                        colorIndex: y,
                        predefinedId: v,
                      };
                      if (
                        (d.orderIndex != null && (k.orderIndex = d.orderIndex),
                        S != null)
                      ) {
                        var I = o("WAWebSchemaLabel").ListType.cast(S);
                        I != null
                          ? (k.type = I)
                          : (m++, p.length < 3 && p.push(S));
                      }
                      (C != null && (k.isActive = C),
                        b != null && (k.isImmutable = b));
                      var T =
                        S ===
                          o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$LabelEditAction$ListType
                            .AI_HANDOFF ||
                        S ===
                          o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$LabelEditAction$ListType
                            .AI_RESPONDING;
                      if (r("justknobx")._("1781") && T && d.deleted !== !0) {
                        var D = await o("WAWebModelStorageUtils")
                          .getStorage()
                          .lock(["label"], async function (e) {
                            var t = e[0],
                              n = await t.all();
                            return n.find(function (e) {
                              return e.id !== c && e.type === k.type;
                            });
                          });
                        if (D != null)
                          return {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          };
                      }
                      if (
                        r("justknobx")._("1781") &&
                        d.deleted !== !0 &&
                        S ===
                          o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$LabelEditAction$ListType.CUSTOM
                      ) {
                        var x =
                            o("WAWebListUtils").getExpectedAiLabelName(
                              "AI_HANDOFF",
                            ),
                          $ =
                            o("WAWebListUtils").getExpectedAiLabelName(
                              "AI_RESPONDING",
                            ),
                          P = R === x || R === $;
                        if (P)
                          return {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          };
                      }
                      var N = await o("WAWebModelStorageUtils")
                        .getStorage()
                        .lock(
                          ["label", "label-association", "chat"],
                          async function (e) {
                            var t = e[0];
                            return (
                              await t.createOrReplace(k),
                              o(
                                "WAWebDBLabelAssociationDatabaseApi",
                              ).queryLabelAssociationsForLabelIds([c])
                            );
                          },
                        );
                      S ===
                      o("WAWebProtobufSyncAction.pb")
                        .SyncActionValue$LabelEditAction$ListType
                        .SERVER_ASSIGNED
                        ? o(
                            "WAWebLabelCollection",
                          ).LabelCollection.addToServerAssignedLabelIdMap(c, v)
                        : o("WAWebLabelCollection").LabelCollection.add(
                            babelHelpers.extends({}, k),
                            { merge: !0 },
                          );
                      var M = o("WAWebLabelCollection").LabelCollection.get(c);
                      if (M != null && N.length > 0) {
                        var w = M.labelItemCollection.reduce(function (e, t) {
                            return (e.add(t.id), e);
                          }, new Set()),
                          A = N.filter(function (e) {
                            return !w.has(e.associationId);
                          });
                        A.length > 0 &&
                          o(
                            "WAWebLabelCollection",
                          ).LabelCollection.initializeAssociationsFromCache(A);
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
                              v,
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
                          o("WASyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return f.then(function (t) {
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
                    p,
                  ),
                _ > 0 &&
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "label sync: ",
                        " operations not supported",
                      ])),
                    _,
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
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      _ = new p();
    l.default = _;
  },
  98,
);
