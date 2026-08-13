__d(
  "WAWebLabelJidSync",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebHandleSingleMsgWorkerCompatible",
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
    var e, s, u, c, d;
    function m(t, n, a, i, l, s, u) {
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
    function p(e, t) {
      (t ===
        o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
          .FAILED_ORPHANED &&
        e.labeled &&
        o("WAWebWamLabelSyncTrackingReporter").recordDeferredLabelAssociation(
          e.labelId,
          { chatJid: e.jid, isLabeled: e.labeled, timestampMs: e.timestampMs },
        ),
        m(
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
    function _(e) {
      (e.labeled ||
        o("WAWebWamLabelSyncTrackingReporter").removeDeferredLabelAssociation(
          e.labelId,
          e.jid,
        ),
        p(
          e,
          e.isOrphaned
            ? o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
                .FAILED_ORPHANED
            : o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
                .SUCCESS,
        ));
    }
    var f = (function (e) {
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
                  a = new Set(),
                  i = [],
                  l = [],
                  f = [],
                  g = [],
                  h = [],
                  y = 0,
                  C = 0,
                  b = yield (d || (d = n("Promise"))).all(
                    e.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              if (e.operation === "set") {
                                var n,
                                  u = e.indexParts,
                                  c = e.value,
                                  d = u[1],
                                  p = u[2];
                                if (!d || !p) return t.malformedActionIndex();
                                var _ =
                                  (n = c.labelAssociationAction) == null
                                    ? void 0
                                    : n.labeled;
                                if (_ == null)
                                  return (
                                    y++,
                                    m(
                                      d,
                                      p,
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
                                if (!r("WAWebWid").isWid(p))
                                  return (
                                    m(
                                      d,
                                      p,
                                      o("WAWebWamLabelSyncTrackingReporter")
                                        .LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                                      o("WAWebWamLabelSyncTrackingReporter")
                                        .LABEL_SYNC_RESULT_TYPE
                                        .FAILED_INVALID_JID,
                                      _,
                                      Date.now(),
                                    ),
                                    t.malformedActionIndex()
                                  );
                                var b = o("WAWebWidFactory").createWid(p),
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
                                    labelId: d,
                                    associationId: R,
                                    type: o("WAWebSchemaLabelAssociation")
                                      .LabelAssociationType.Jid,
                                  },
                                  E = null,
                                  k = !1;
                                if (_) {
                                  var I = yield o("WAWebSchemaLabel")
                                    .getLabelTable()
                                    .get(d);
                                  ((E = I == null ? void 0 : I.predefinedId),
                                    (k = I == null));
                                  var T = a.has(R);
                                  if (!T) {
                                    var D = yield o("WAWebSchemaChat")
                                      .getChatTable()
                                      .get(R, !1);
                                    D && (a.add(R), (T = !0));
                                  }
                                  if (
                                    (i.push(L),
                                    f.push({
                                      parentId: R,
                                      labels: [d],
                                      parentType:
                                        T || !b.isUser()
                                          ? o("WAWebListItemParentType")
                                              .LabelItemParentType.Chat
                                          : o("WAWebListItemParentType")
                                              .LabelItemParentType.Contact,
                                    }),
                                    o(
                                      "WAWebUserPrefsGeneral",
                                    ).getDetectedOutcomeOnboardingStatus() &&
                                      (E ===
                                        o("WAWebLabelConstants")
                                          .PREDEFINED_LABEL_IDS.DO_NEW_ORDER ||
                                        E ===
                                          o("WAWebLabelConstants")
                                            .PREDEFINED_LABEL_IDS.DO_LEAD))
                                  ) {
                                    var x = o(
                                      "WAWebContactSystemMsg",
                                    ).genNotificationMsg(b, {
                                      type: "notification_template",
                                      kind: o("WAWebMsgType").MsgKind
                                        .NotificationTemplate,
                                      subtype:
                                        "biz_automatically_labeled_chat_system_message",
                                      templateParams: [E.toString()],
                                    });
                                    yield o(
                                      "WAWebHandleSingleMsgWorkerCompatible",
                                    ).handleSingleMsg({
                                      chatId: b,
                                      newMsg: x,
                                      handleSingleMsgOrigin:
                                        "detectedOutcomeNotification",
                                      preserveOrder: !1,
                                    });
                                  }
                                } else
                                  (l.push(
                                    o(
                                      "WAWebSchemaLabelAssociation",
                                    ).createLabelAssociationPrimaryKey(L),
                                  ),
                                    g.push({
                                      parentId: R,
                                      labelId: d,
                                      parentType: o("WAWebListItemParentType")
                                        .LabelItemParentType.Chat,
                                    }));
                                return (
                                  h.push({
                                    labelId: d,
                                    jid: p,
                                    labeled: _,
                                    isOrphaned: k,
                                    predefinedId: E,
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
                (y > 0 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "label jid sync: ",
                        " malformed mutations",
                      ])),
                    y,
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
                var v = h.filter(function (e) {
                    return !e.labeled;
                  }),
                  S = h.filter(function (e) {
                    return e.labeled;
                  });
                try {
                  yield o(
                    "WAWebDBLabelAssociationDatabaseApi",
                  ).removeLabelAssociations(l);
                } catch (e) {
                  throw (
                    v.forEach(function (e) {
                      p(
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
                    v.forEach(_),
                    S.forEach(function (e) {
                      p(
                        e,
                        o("WAWebWamLabelSyncTrackingReporter")
                          .LABEL_SYNC_RESULT_TYPE.FAILED_DB_UPDATE,
                      );
                    }),
                    e
                  );
                }
                return (
                  h.forEach(_),
                  (g.length > 0 || f.length > 0) &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "applyLabelAssociationChanges",
                      { removals: g, additions: f },
                    ),
                  b
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
                      p = babelHelpers.arrayLikeToArray(u).slice(1),
                      _ = p[0];
                    if (c != null && _ != null) {
                      var f;
                      m(
                        c,
                        _,
                        o("WAWebWamLabelSyncTrackingReporter")
                          .LABEL_SYNC_DIRECTION_TYPE.SENDER,
                        o("WAWebWamLabelSyncTrackingReporter")
                          .LABEL_SYNC_RESULT_TYPE.SUCCESS,
                        ((f = s.value.labelAssociationAction) == null
                          ? void 0
                          : f.labeled) === !0,
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
      g = new f();
    l.default = g;
  },
  98,
);
