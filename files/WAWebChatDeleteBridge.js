__d(
  "WAWebChatDeleteBridge",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiActiveMessageRanges",
    "WAWebApiAddActiveMessageRange",
    "WAWebApiChatCommon",
    "WAWebApiOrphanTcToken",
    "WAWebBackendApi",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBQueryAndRemoveMessageHistory",
    "WAWebDeleteChatSync",
    "WAWebEditLabelAssociationBridge",
    "WAWebFtsClient",
    "WAWebGroupHistoryParticipantJob",
    "WAWebLabelJidSync",
    "WAWebListsGatingUtils",
    "WAWebMessageRangeUtils",
    "WAWebMobilePlatforms",
    "WAWebModelStorageUtils",
    "WAWebMuteChatSync",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebPinChatSync",
    "WAWebRequestDeleteAddOns",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebSchemaChat",
    "WAWebSchemaChatAssignment",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebThreadMetadataJob",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          [
            "chat",
            "label",
            "label-association",
            "message-association",
            "message",
            "chat-assignment",
            "orphan-tc-token",
            "scheduled-msg-reveal-key",
            "sync-actions",
            "thread-metadata",
          ],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o(
                "WAWebDBQueryAndRemoveMessageHistory",
              ).getBoundsForChat(t),
              r = yield o("WAWebSchemaChat").getChatTable().get(t.toString()),
              a = yield (u || (u = n("Promise"))).all([
                o("WAWebSchemaChat").getChatTable().remove(t.toString()),
                o(
                  "WAWebDBQueryAndRemoveMessageHistory",
                ).queryAndRemoveMessageHistory(t),
                d(t),
                R(t),
                p({
                  chatId: t,
                  tcToken: r == null ? void 0 : r.tcToken,
                  tcTokenTimestamp: r == null ? void 0 : r.tcTokenTimestamp,
                }),
                v(
                  t,
                  (r == null ? void 0 : r.accountLid) != null
                    ? o("WAWebWidFactory").createWid(r.accountLid)
                    : null,
                ),
                t.isNewsletter() || t.isBroadcast()
                  ? (u || (u = n("Promise"))).resolve([])
                  : o(
                      "WAWebScheduledMsgRevealKeyStore",
                    ).deleteRevealKeysForChat(
                      o("WAWebWidToJid").widToChatJid(t),
                    ),
                t.isNewsletter()
                  ? (u || (u = n("Promise"))).resolve()
                  : o("WAWebThreadMetadataJob").deleteAllThreadsForChat(
                      t.isBroadcast()
                        ? o("WAWebWidToJid").widToBroadcastJid(t)
                        : o("WAWebWidToJid").widToChatJid(t),
                    ),
              ]),
              i = a[0],
              l = a[1],
              s = a[2];
            return { chatBoundaries: e, deletedMsgIds: l };
          }),
        )
        .then(
          (function () {
            var a = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (a) {
                var i = a.chatBoundaries,
                  l = a.deletedMsgIds;
                i
                  ? ((u || (u = n("Promise")))
                      .resolve(
                        o("WAWebFtsClient").ftsClient.purgeRange(
                          babelHelpers.extends({ chatId: t.toString() }, i),
                        ),
                      )
                      .catch(function (e) {
                        o("WALogger")
                          .WARN(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "sendConversationDelete: ftsClient.purgeRange failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .sendLogs("fts-purge-range-failed");
                      }),
                    yield o("WAWebBackendApi").frontendSendAndReceive(
                      "deleteModelsForLastAddOnPreview",
                      { messagesIds: l },
                    ),
                    yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(
                      t.toString(),
                      l,
                    ))
                  : o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "sendConversationDelete: chat boundaries was null",
                        ])),
                    );
              },
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
        );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebMobilePlatforms").isSMB() ||
            o("WAWebListsGatingUtils").isListsEnabled()
          ) {
            var t = yield f(e),
              n = t.labelsToUpdate,
              r = t.modelRecords;
            yield o(
              "WAWebEditLabelAssociationBridge",
            ).editLocalLabelAssociationMD(n, r);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            r = e.tcToken,
            a = e.tcTokenTimestamp;
          return o("WAWebABProps").getABPropConfigValue(
            "enable_spam_report_iq_with_privacy_token",
          ) &&
            r != null &&
            a != null
            ? o("WAWebApiOrphanTcToken").createOrUpdateOrphanTcToken(t, {
                tcToken: r,
                tcTokenTimestamp: a,
              })
            : (u || (u = n("Promise"))).resolve();
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
              "WAWebDBLabelAssociationDatabaseApi",
            ).queryLocalLabelAssociations([
              {
                associationId: e.toString(),
                type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
              },
            ]),
            r = (yield (u || (u = n("Promise"))).all(
              t.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield o("WAWebSchemaLabel")
                        .getLabelTable()
                        .get(e.labelId);
                      return {
                        association: e,
                        isFavorite:
                          (t == null ? void 0 : t.type) ===
                          o("WAWebSchemaLabel").ListType.FAVORITES,
                      };
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ))
              .filter(function (e) {
                var t = e.isFavorite;
                return !t;
              })
              .map(function (e) {
                var t = e.association;
                return t;
              });
          return {
            labelsToUpdate: r.map(function (e) {
              var t = e.labelId;
              return { id: t, type: "remove" };
            }),
            modelRecords: [
              {
                labelAssociationType: o("WAWebSchemaLabelAssociation")
                  .LabelAssociationType.Jid,
                modelId: e.toString(),
                mutationIndexSegments: [e.toString({ legacy: !0 })],
              },
            ],
          };
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r, o) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            a === void 0 && (a = !1);
            var s = o("WATimeUtils").unixTimeMs(),
              c = yield (u || (u = n("Promise"))).all([
                r("WAWebDeleteChatSync").getDeleteChatMutation(s, e, !a),
                o("WAWebPinChatSync").PinChatSync.getPinMutation(s, !1, e),
                C(e),
              ]),
              m = c[0],
              _ = c[1],
              f = c[2],
              g = [].concat(f, [_]);
            t && g.push(m);
            var h;
            return (
              yield o("WAWebMessageRangeUtils").lockForMessageRangeSync(
                [
                  "message",
                  "chat",
                  "group-history-participant",
                  "label",
                  "label-association",
                  "message-association",
                  "group-metadata",
                  "orphan-tc-token",
                  "scheduled-msg-reveal-key",
                  "sync-actions",
                  "thread-metadata",
                ],
                g,
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  (yield o(
                    "WAWebApiAddActiveMessageRange",
                  ).addActiveMessageRange(
                    e.toString(),
                    o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                      "deleteChat",
                      { deleteMedia: !a },
                    ),
                    m.binarySyncAction,
                  ),
                    (h = yield o(
                      "WAWebDBQueryAndRemoveMessageHistory",
                    ).queryAndRemoveMessageHistory(e)));
                  var t = yield o("WAWebApiChatCommon").getChatRecord(e);
                  yield (u || (u = n("Promise"))).all([
                    o("WAWebSchemaChat").getChatTable().remove(e.toString()),
                    o("WAWebSchemaGroupMetadata")
                      .getGroupMetadataTable()
                      .remove(e.toString()),
                    e.isGroup()
                      ? o(
                          "WAWebGroupHistoryParticipantJob",
                        ).clearGroupHistoryParticipantStateForGroup(e)
                      : (u || (u = n("Promise"))).resolve(),
                    d(e),
                    p({ chatId: e, tcToken: i, tcTokenTimestamp: l }),
                    v(
                      e,
                      (t == null ? void 0 : t.accountLid) != null
                        ? o("WAWebWidFactory").createWid(t.accountLid)
                        : null,
                    ),
                    e.isBroadcast()
                      ? (u || (u = n("Promise"))).resolve([])
                      : o(
                          "WAWebScheduledMsgRevealKeyStore",
                        ).deleteRevealKeysForChat(
                          o("WAWebWidToJid").widToChatJid(e),
                        ),
                    o("WAWebThreadMetadataJob").deleteAllThreadsForChat(
                      e.isBroadcast()
                        ? o("WAWebWidToJid").widToBroadcastJid(e)
                        : o("WAWebWidToJid").widToChatJid(e),
                    ),
                  ]);
                }),
              ),
              { status: 200, result: h }
            );
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(
              o("WAWebMobilePlatforms").isSMB() ||
              o("WAWebListsGatingUtils").isListsEnabled()
            )
          )
            return [];
          var t = yield f(e),
            n = t.labelsToUpdate,
            a = t.modelRecords;
          return r("WAWebLabelJidSync").createLabelAssociationMutations(n, a);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = [
            JSON.stringify([r("WAWebMuteChatSync").getAction(), e.toJid()]),
          ];
          t != null &&
            a.push(
              JSON.stringify([r("WAWebMuteChatSync").getAction(), t.toJid()]),
            );
          var i = (yield (u || (u = n("Promise"))).all(
            a.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield o("WAWebSyncdDb").getSyncAction(e);
                    if (
                      !(
                        t == null ||
                        t.actionState ===
                          o("WAWebSyncdConst").SyncActionState.Orphan
                      )
                    )
                      return e;
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          )).filter(Boolean);
          yield o("WAWebSyncdDb").updateSyncActionRows(
            i.map(function (t) {
              return {
                index: t,
                actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                modelType: o("WAWebSyncdConst").SyncModelType.Chat,
                modelId: e.toString(),
              };
            }),
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebMobilePlatforms").isSMB()) {
            var t = e.toString({ legacy: !0 }),
              n = yield o("WAWebSchemaChatAssignment")
                .getChatAssignmentTable()
                .all(),
              r = n.filter(function (e) {
                return e.chatId === t;
              }),
              a = r.map(function (e) {
                return String(e.id);
              });
            (a.length > 0 &&
              (yield o("WAWebSchemaChatAssignment")
                .getChatAssignmentTable()
                .bulkRemove(a)),
              o("WAWebBackendApi").frontendFireAndForget(
                "removeChatAssignmentsFromCollection",
                { assignmentIds: a },
              ));
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t = e.id,
        r = e.tcToken,
        a = e.tcTokenTimestamp;
      return h(t, !0, !1, r, a).then(
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (e.result != null && e.result.length > 0) {
              var n = e.result;
              return (
                yield o("WAWebBackendApi").frontendSendAndReceive(
                  "deleteModelsForLastAddOnPreview",
                  { messagesIds: n },
                ),
                yield o(
                  "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                ).deleteChatFromInitialSyncBoundary(t),
                yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(
                  t.toString(),
                  n,
                ),
                e
              );
            }
            return e;
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    }
    ((l.deleteFromStorage = c), (l.sendConversationDelete = E));
  },
  98,
);
