__d(
  "WAWebChatDeleteBridge",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiActiveMessageRanges",
    "WAWebApiChatCommon",
    "WAWebApiOrphanTcToken",
    "WAWebBackendApi",
    "WAWebBizGatingUtils",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBQueryAndRemoveMessageHistory",
    "WAWebDeleteChatSync",
    "WAWebEditLabelAssociationBridge",
    "WAWebFtsClient",
    "WAWebLabelJidSync",
    "WAWebListsGatingUtils",
    "WAWebMessageRangeUtils",
    "WAWebMobilePlatforms",
    "WAWebModelStorageUtils",
    "WAWebMuteChatSync",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPinChatSync",
    "WAWebSchemaChat",
    "WAWebSchemaChatAssignment",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncdDb",
    "WAWebThreadMetadataJob",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          [
            "chat",
            "label-association",
            "message-association",
            "message",
            "chat-assignment",
            "orphan-tc-token",
            "sync-actions",
            "thread-metadata",
          ],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o(
                "WAWebDBQueryAndRemoveMessageHistory",
              ).getBoundsForChat(t),
              r = yield o("WAWebSchemaChat").getChatTable().get(t.toString()),
              a = yield (s || (s = n("Promise"))).all([
                o("WAWebSchemaChat").getChatTable().remove(t.toString()),
                o(
                  "WAWebDBQueryAndRemoveMessageHistory",
                ).queryAndRemoveMessageHistory(t),
                c(t),
                S(t),
                m(
                  t,
                  r == null ? void 0 : r.tcToken,
                  r == null ? void 0 : r.tcTokenTimestamp,
                ),
                b(
                  t,
                  (r == null ? void 0 : r.accountLid) != null
                    ? o("WAWebWidFactory").createWid(r.accountLid)
                    : null,
                ),
                t.isNewsletter()
                  ? (s || (s = n("Promise"))).resolve()
                  : o("WAWebThreadMetadataJob").deleteAllThreadsForChat(
                      t.isBroadcast()
                        ? o("WAWebWidToJid").widToBroadcastJid(t)
                        : o("WAWebWidToJid").widToChatJid(t),
                    ),
              ]),
              i = a[0],
              l = a[1],
              u = a[2];
            return { chatBoundaries: e, deletedMsgIds: l };
          }),
        )
        .then(
          (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                var r = n.chatBoundaries,
                  a = n.deletedMsgIds;
                r
                  ? (o("WAWebFtsClient").ftsClient.purgeRange(
                      babelHelpers.extends({ chatId: t.toString() }, r),
                    ),
                    yield o("WAWebBackendApi").frontendSendAndReceive(
                      "deleteModelsForLastAddOnPreview",
                      { messagesIds: a },
                    ),
                    yield o("WAWebPersistedJobManagerWorkerCompatible")
                      .getJobManager()
                      .waitUntilPersisted(
                        o(
                          "WAWebPersistedJobDefinitions",
                        ).jobSerializers.deleteAddOns(t.toString(), a),
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
              return r.apply(this, arguments);
            };
          })(),
        );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebBizGatingUtils").canEditLabelAssociation() ||
            o("WAWebListsGatingUtils").isListsEnabled()
          ) {
            var t = yield _(e),
              n = t.labelsToUpdate,
              r = t.modelRecords;
            yield o(
              "WAWebEditLabelAssociationBridge",
            ).editLocalLabelAssociationMD(n, r);
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          return o("WAWebABProps").getABPropConfigValue(
            "enable_spam_report_iq_with_privacy_token",
          ) &&
            t != null &&
            r != null
            ? o("WAWebApiOrphanTcToken").createOrUpdateOrphanTcToken(e, {
                tcToken: t,
                tcTokenTimestamp: r,
              })
            : (s || (s = n("Promise"))).resolve();
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
              "WAWebDBLabelAssociationDatabaseApi",
            ).queryLocalLabelAssociations([
              {
                associationId: e.toString(),
                type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
              },
            ]),
            r = (yield (s || (s = n("Promise"))).all(
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
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r, o) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            a === void 0 && (a = !1);
            var u = o("WATimeUtils").unixTimeMs(),
              d = yield (s || (s = n("Promise"))).all([
                r("WAWebDeleteChatSync").getDeleteChatMutation(u, e, !a),
                o("WAWebPinChatSync").PinChatSync.getPinMutation(u, !1, e),
                y(e),
              ]),
              p = d[0],
              _ = d[1],
              f = d[2],
              g = [].concat(f, [_]);
            t && g.push(p);
            var h;
            return (
              yield o("WAWebMessageRangeUtils").lockForMessageRangeSync(
                [
                  "message",
                  "chat",
                  "label-association",
                  "message-association",
                  "group-metadata",
                  "orphan-tc-token",
                  "sync-actions",
                  "thread-metadata",
                ],
                g,
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  (yield o("WAWebApiActiveMessageRanges").addActiveMessageRange(
                    e.toString(),
                    o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                      "deleteChat",
                      { deleteMedia: !a },
                    ),
                    p.binarySyncAction,
                  ),
                    (h = yield o(
                      "WAWebDBQueryAndRemoveMessageHistory",
                    ).queryAndRemoveMessageHistory(e)));
                  var t = yield o("WAWebApiChatCommon").getChatRecord(e);
                  yield (s || (s = n("Promise"))).all([
                    o("WAWebSchemaChat").getChatTable().remove(e.toString()),
                    o("WAWebSchemaGroupMetadata")
                      .getGroupMetadataTable()
                      .remove(e.toString()),
                    c(e),
                    m(e, i, l),
                    b(
                      e,
                      (t == null ? void 0 : t.accountLid) != null
                        ? o("WAWebWidFactory").createWid(t.accountLid)
                        : null,
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
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(
              o("WAWebBizGatingUtils").canEditLabelAssociation() ||
              o("WAWebListsGatingUtils").isListsEnabled()
            )
          )
            return [];
          var t = yield _(e),
            n = t.labelsToUpdate,
            a = t.modelRecords;
          return r("WAWebLabelJidSync").createLabelAssociationMutations(n, a);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = [
            JSON.stringify([r("WAWebMuteChatSync").getAction(), e.toJid()]),
          ];
          t != null &&
            a.push(
              JSON.stringify([r("WAWebMuteChatSync").getAction(), t.toJid()]),
            );
          var i = (yield (s || (s = n("Promise"))).all(
            a.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield o("WAWebSyncdDb").getSyncAction(e);
                    if (
                      !(
                        t == null ||
                        t.actionState ===
                          o("WASyncdConst").SyncActionState.Orphan
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
                actionState: o("WASyncdConst").SyncActionState.Orphan,
                modelType: o("WASyncdConst").SyncModelType.Chat,
                modelId: e.toString(),
              };
            }),
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        R.apply(this, arguments)
      );
    }
    function L(e, t, r) {
      return g(e, !0, !1, t, r).then(
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            if (t.result != null && t.result.length > 0) {
              var n = t.result;
              return (
                yield o("WAWebBackendApi").frontendSendAndReceive(
                  "deleteModelsForLastAddOnPreview",
                  { messagesIds: n },
                ),
                yield o(
                  "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                ).deleteChatFromInitialSyncBoundary(e),
                yield o("WAWebPersistedJobManagerWorkerCompatible")
                  .getJobManager()
                  .waitUntilPersisted(
                    o(
                      "WAWebPersistedJobDefinitions",
                    ).jobSerializers.deleteAddOns(e.toString(), n),
                  ),
                t
              );
            }
            return t;
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      );
    }
    ((l.deleteFromStorage = u), (l.sendConversationDelete = L));
  },
  98,
);
