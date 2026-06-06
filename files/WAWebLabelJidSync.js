__d(
  "WAWebLabelJidSync",
  [
    "WALogger",
    "WASyncdConst",
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
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsGeneral",
    "WAWebWamLabelSyncTrackingReporter",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.chatJidIndex = 2),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return o("WASyncdConst").LABEL_ASSOCIATION_SYNC_VERSION;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.LabelJid;
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              a = new Set(),
              i = [],
              l = [],
              u = [],
              c = [],
              d = 0,
              m = 0,
              p = await Promise.all(
                n.map(async function (e) {
                  try {
                    if (e.operation === "set") {
                      var n,
                        s = e.indexParts,
                        p = e.value,
                        _ = s[1],
                        f = s[2];
                      if (!_ || !f) return t.malformedActionIndex();
                      var g =
                        (n = p.labelAssociationAction) == null
                          ? void 0
                          : n.labeled;
                      if (g == null) {
                        var h;
                        d++;
                        var y = await (h = o(
                          "WAWebWamLabelSyncTrackingReporter",
                        )).generateLabelJidHash(_, f);
                        return (
                          h.logLabelSyncEvent(
                            y,
                            h.LABEL_SYNC_TYPE_ENUM.LABEL_JID,
                            h.LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                            h.LABEL_SYNC_RESULT_TYPE.FAILED_MISSING_ACTION,
                            !1,
                            Date.now(),
                          ),
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      }
                      if (!r("WAWebWid").isWid(f)) {
                        var h,
                          C = await (h = o(
                            "WAWebWamLabelSyncTrackingReporter",
                          )).generateLabelJidHash(_, f);
                        return (
                          h.logLabelSyncEvent(
                            C,
                            h.LABEL_SYNC_TYPE_ENUM.LABEL_JID,
                            h.LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                            h.LABEL_SYNC_RESULT_TYPE.FAILED_INVALID_JID,
                            g,
                            Date.now(),
                          ),
                          t.malformedActionIndex()
                        );
                      }
                      var b = o("WAWebWidFactory").createWid(f),
                        v =
                          await o(
                            "WAWebSyncdGetChat",
                          ).resolveChatForMutationIndex(b);
                      if (v.success === !0)
                        b = o("WAWebWidFactory").createWid(v.chat.id);
                      else if (
                        (v.success,
                        o(
                          "WAWebLid1X1MigrationGating",
                        ).Lid1X1MigrationUtils.isLidMigrated() && b.isLid())
                      ) {
                        var S = o("WAWebApiContact").getPhoneNumber(b);
                        S != null && (b = S);
                      }
                      var R = b.toString(),
                        L = {
                          labelId: _,
                          associationId: R,
                          type: o("WAWebSchemaLabelAssociation")
                            .LabelAssociationType.Jid,
                        },
                        E = null;
                      if (g) {
                        var k = a.has(R);
                        if (!k) {
                          var I = await o("WAWebSchemaChat")
                            .getChatTable()
                            .get(R, !1);
                          I && (a.add(R), (k = !0));
                        }
                        (i.push(L),
                          u.push({
                            parentId: R,
                            labels: [_],
                            parentType:
                              k || !b.isUser()
                                ? o("WAWebListItemParentType")
                                    .LabelItemParentType.Chat
                                : o("WAWebListItemParentType")
                                    .LabelItemParentType.Contact,
                          }));
                        var T = await o("WAWebSchemaLabel")
                          .getLabelTable()
                          .get(_);
                        if (
                          ((E = T == null ? void 0 : T.predefinedId),
                          o(
                            "WAWebUserPrefsGeneral",
                          ).getDetectedOutcomeOnboardingStatus() &&
                            (E ===
                              o("WAWebLabelConstants").PREDEFINED_LABEL_IDS
                                .DO_NEW_ORDER ||
                              E ===
                                o("WAWebLabelConstants").PREDEFINED_LABEL_IDS
                                  .DO_LEAD))
                        ) {
                          var D = o("WAWebContactSystemMsg").genNotificationMsg(
                            b,
                            {
                              type: "notification_template",
                              kind: o("WAWebMsgType").MsgKind
                                .NotificationTemplate,
                              subtype:
                                "biz_automatically_labeled_chat_system_message",
                              templateParams: [E.toString()],
                            },
                          );
                          await o(
                            "WAWebHandleSingleMsgWorkerCompatible",
                          ).handleSingleMsg({
                            chatId: b,
                            newMsg: D,
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
                          c.push({
                            parentId: R,
                            labelId: _,
                            parentType: o("WAWebListItemParentType")
                              .LabelItemParentType.Chat,
                          }));
                      return (
                        o("WAWebWamLabelSyncTrackingReporter")
                          .generateLabelJidHash(_, f)
                          .then(function (e) {
                            var t;
                            (t = o(
                              "WAWebWamLabelSyncTrackingReporter",
                            )).logLabelSyncEvent(
                              e,
                              t.LABEL_SYNC_TYPE_ENUM.LABEL_JID,
                              t.LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                              t.LABEL_SYNC_RESULT_TYPE.SUCCESS,
                              g,
                              Date.now(),
                              void 0,
                              E,
                            );
                          }),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        }
                      );
                    }
                    return (
                      m++,
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
            return (
              d > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "label jid sync: ",
                      " malformed mutations",
                    ])),
                  d,
                ),
              m > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "label jid sync: ",
                      " unsupported operations",
                    ])),
                  m,
                ),
              await o(
                "WAWebDBLabelAssociationDatabaseApi",
              ).removeLabelAssociations(l),
              await o(
                "WAWebDBLabelAssociationDatabaseApi",
              ).addOrEditLabelAssociations(i),
              (c.length > 0 || u.length > 0) &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "applyLabelAssociationChanges",
                  { removals: c, additions: u },
                ),
              p
            );
          }),
          (a.createLabelAssociationMutations = async function (t, n) {
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
                  version: o("WASyncdConst").LABEL_ASSOCIATION_SYNC_VERSION,
                  value: s,
                  action: o("WASyncdConst").Actions.LabelJid,
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
              ),
              l = async function (t) {
                if (t.action === o("WASyncdConst").Actions.LabelJid) {
                  var e = t.indexArgs,
                    n = e[0],
                    a = babelHelpers.arrayLikeToArray(e).slice(1),
                    i = a[0];
                  n != null &&
                    i != null &&
                    o("WAWebWamLabelSyncTrackingReporter")
                      .generateLabelJidHash(n, i)
                      .then(function (e) {
                        var n, a;
                        (a = o(
                          "WAWebWamLabelSyncTrackingReporter",
                        )).logLabelSyncEvent(
                          e,
                          a.LABEL_SYNC_TYPE_ENUM.LABEL_JID,
                          a.LABEL_SYNC_DIRECTION_TYPE.SENDER,
                          a.LABEL_SYNC_RESULT_TYPE.SUCCESS,
                          ((n = t.value.labelAssociationAction) == null
                            ? void 0
                            : n.labeled) === !0,
                          r,
                        );
                      });
                }
              };
            for (var s of i) await l(s);
            return i.map(o("WAWebSyncdActionUtils").buildPendingMutation);
          }),
          n
        );
      })(o("WAWebSyncdAction").ChatOrContactSyncdActionBase),
      c = new u();
    l.default = c;
  },
  98,
);
