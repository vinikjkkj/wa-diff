__d(
  "WAWebChatDeleteBridge",
  [
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
    "WAWebDBReportingTokenUtils",
    "WAWebDeleteChatSync",
    "WAWebEditLabelAssociationBridge",
    "WAWebFtsClient",
    "WAWebGroupHistoryParticipantJob",
    "WAWebLabelJidSync",
    "WAWebMessageRangeUtils",
    "WAWebMobilePlatforms",
    "WAWebModelStorageUtils",
    "WAWebMuteChatSync",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebPinChatSync",
    "WAWebReactionUiService",
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
    "WAWebUiRuntime",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1e3;
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
          async function () {
            var e = await o(
                "WAWebDBQueryAndRemoveMessageHistory",
              ).getBoundsForChat(t),
              n = await o("WAWebSchemaChat").getChatTable().get(t.toString()),
              r = await Promise.all([
                o("WAWebSchemaChat").getChatTable().remove(t.toString()),
                o(
                  "WAWebDBQueryAndRemoveMessageHistory",
                ).queryAndRemoveMessageHistory(t),
                m(t),
                y(t),
                p({
                  chatId: t,
                  tcToken: n == null ? void 0 : n.tcToken,
                  tcTokenTimestamp: n == null ? void 0 : n.tcTokenTimestamp,
                }),
                h(
                  t,
                  (n == null ? void 0 : n.accountLid) != null
                    ? o("WAWebWidFactory").createWid(n.accountLid)
                    : null,
                ),
                t.isNewsletter() || t.isBroadcast()
                  ? Promise.resolve([])
                  : o(
                      "WAWebScheduledMsgRevealKeyStore",
                    ).deleteRevealKeysForChat(
                      o("WAWebWidToJid").widToChatJid(t),
                    ),
                t.isNewsletter()
                  ? Promise.resolve()
                  : o("WAWebThreadMetadataJob").deleteAllThreadsForChat(
                      t.isBroadcast()
                        ? o("WAWebWidToJid").widToBroadcastJid(t)
                        : o("WAWebWidToJid").widToChatJid(t),
                    ),
              ]),
              a = r[0],
              i = r[1],
              l = r[2];
            return { chatBoundaries: e, deletedMsgIds: i };
          },
        )
        .then(async function (n) {
          var r = n.chatBoundaries,
            a = n.deletedMsgIds;
          (o("WAWebBackendApi").frontendFireAndForget("chatHistoryCleared", {
            chatId: t.toString(),
          }),
            o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(a, {
              removeWholeRow: !0,
            }),
            r
              ? (d(babelHelpers.extends({ chatId: t.toString() }, r)),
                await (o("WAWebUiRuntime").isWebDiUiEnabled()
                  ? o("WAWebUiRuntime")
                      .uiRuntime(o("WAWebReactionUiService").ReactionUiService)
                      .deleteModelsForLastAddOnPreview(a)
                  : o("WAWebBackendApi").frontendSendAndReceive(
                      "deleteModelsForLastAddOnPreview",
                      { messagesIds: a },
                    )),
                await o("WAWebRequestDeleteAddOns").requestDeleteAddOns(
                  t.toString(),
                  a,
                ))
              : o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "sendConversationDelete: chat boundaries was null",
                    ])),
                ));
        });
    }
    async function d(e) {
      try {
        await o("WAWebFtsClient").ftsClient.purgeRange(e);
        return;
      } catch (e) {
        await new Promise(function (e) {
          return self.setTimeout(e, u);
        });
      }
      try {
        await o("WAWebFtsClient").ftsClient.purgeRange(e);
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "sendConversationDelete: ftsClient.purgeRange failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("fts-purge-range-failed");
      }
    }
    async function m(e) {
      var t = await _(e),
        n = t.labelsToUpdate,
        r = t.modelRecords;
      await o("WAWebEditLabelAssociationBridge").editLocalLabelAssociationMD(
        n,
        r,
      );
    }
    async function p(e) {
      var t = e.chatId,
        n = e.tcToken,
        r = e.tcTokenTimestamp;
      return o("WAWebABProps").getABPropConfigValue(
        "enable_spam_report_iq_with_privacy_token",
      ) &&
        n != null &&
        r != null
        ? o("WAWebApiOrphanTcToken").createOrUpdateOrphanTcToken(t, {
            tcToken: n,
            tcTokenTimestamp: r,
          })
        : Promise.resolve();
    }
    async function _(e) {
      var t = await o(
          "WAWebDBLabelAssociationDatabaseApi",
        ).queryLocalLabelAssociations([
          {
            associationId: e.toString(),
            type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
          },
        ]),
        n = (
          await Promise.all(
            t.map(async function (e) {
              var t = await o("WAWebSchemaLabel")
                .getLabelTable()
                .get(e.labelId);
              return {
                association: e,
                isFavorite:
                  (t == null ? void 0 : t.type) ===
                  o("WAWebSchemaLabel").ListType.FAVORITES,
              };
            }),
          )
        )
          .filter(function (e) {
            var t = e.isFavorite;
            return !t;
          })
          .map(function (e) {
            var t = e.association;
            return t;
          });
      return {
        labelsToUpdate: n.map(function (e) {
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
    }
    async function f(e, t, n, a, i) {
      n === void 0 && (n = !1);
      var l = o("WATimeUtils").unixTimeMs(),
        s = await Promise.all([
          r("WAWebDeleteChatSync").getDeleteChatMutation(l, e, !n),
          o("WAWebPinChatSync").PinChatSync.getPinMutation(l, !1, e),
          g(e),
        ]),
        u = s[0],
        c = s[1],
        d = s[2],
        _ = [].concat(d, [c]);
      t && _.push(u);
      var f;
      return (
        await o("WAWebMessageRangeUtils").lockForMessageRangeSync(
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
          _,
          async function () {
            (await o("WAWebApiAddActiveMessageRange").addActiveMessageRange(
              e.toString(),
              o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                "deleteChat",
                { deleteMedia: !n },
              ),
              u.binarySyncAction,
            ),
              (f = await o(
                "WAWebDBQueryAndRemoveMessageHistory",
              ).queryAndRemoveMessageHistory(e)));
            var t = await o("WAWebApiChatCommon").getChatRecord(e);
            await Promise.all([
              o("WAWebSchemaChat").getChatTable().remove(e.toString()),
              o("WAWebSchemaGroupMetadata")
                .getGroupMetadataTable()
                .remove(e.toString()),
              e.isGroup()
                ? o(
                    "WAWebGroupHistoryParticipantJob",
                  ).clearGroupHistoryParticipantStateForGroup(e)
                : Promise.resolve(),
              m(e),
              p({ chatId: e, tcToken: a, tcTokenTimestamp: i }),
              h(
                e,
                (t == null ? void 0 : t.accountLid) != null
                  ? o("WAWebWidFactory").createWid(t.accountLid)
                  : null,
              ),
              e.isBroadcast()
                ? Promise.resolve([])
                : o("WAWebScheduledMsgRevealKeyStore").deleteRevealKeysForChat(
                    o("WAWebWidToJid").widToChatJid(e),
                  ),
              o("WAWebThreadMetadataJob").deleteAllThreadsForChat(
                e.isBroadcast()
                  ? o("WAWebWidToJid").widToBroadcastJid(e)
                  : o("WAWebWidToJid").widToChatJid(e),
              ),
            ]);
          },
        ),
        o("WAWebBackendApi").frontendFireAndForget("chatHistoryCleared", {
          chatId: e.toString(),
        }),
        { status: 200, result: f }
      );
    }
    async function g(e) {
      var t = await _(e),
        n = t.labelsToUpdate,
        o = t.modelRecords;
      return r("WAWebLabelJidSync").createLabelAssociationMutations(n, o);
    }
    async function h(e, t) {
      var n = [JSON.stringify([r("WAWebMuteChatSync").getAction(), e.toJid()])];
      t != null &&
        n.push(JSON.stringify([r("WAWebMuteChatSync").getAction(), t.toJid()]));
      var a = (
        await Promise.all(
          n.map(async function (e) {
            var t = await o("WAWebSyncdDb").getSyncAction(e);
            if (
              !(
                t == null ||
                t.actionState === o("WAWebSyncdConst").SyncActionState.Orphan
              )
            )
              return e;
          }),
        )
      ).filter(Boolean);
      await o("WAWebSyncdDb").updateSyncActionRows(
        a.map(function (t) {
          return {
            index: t,
            actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
            modelType: o("WAWebSyncdConst").SyncModelType.Chat,
            modelId: e.toString(),
          };
        }),
      );
    }
    async function y(e) {
      if (o("WAWebMobilePlatforms").isSMB()) {
        var t = e.toString({ legacy: !0 }),
          n = await o("WAWebSchemaChatAssignment")
            .getChatAssignmentTable()
            .all(),
          r = n.filter(function (e) {
            return e.chatId === t;
          }),
          a = r.map(function (e) {
            return String(e.id);
          });
        (a.length > 0 &&
          (await o("WAWebSchemaChatAssignment")
            .getChatAssignmentTable()
            .bulkRemove(a)),
          o("WAWebBackendApi").frontendFireAndForget(
            "removeChatAssignmentsFromCollection",
            { assignmentIds: a },
          ));
      }
    }
    function C(e) {
      var t = e.id,
        n = e.tcToken,
        r = e.tcTokenTimestamp;
      return f(t, !0, !1, n, r).then(async function (e) {
        if (e.result != null && e.result.length > 0) {
          var n = e.result;
          return (
            o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(n, {
              removeWholeRow: !0,
            }),
            await (o("WAWebUiRuntime").isWebDiUiEnabled()
              ? o("WAWebUiRuntime")
                  .uiRuntime(o("WAWebReactionUiService").ReactionUiService)
                  .deleteModelsForLastAddOnPreview(n)
              : o("WAWebBackendApi").frontendSendAndReceive(
                  "deleteModelsForLastAddOnPreview",
                  { messagesIds: n },
                )),
            await o(
              "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
            ).deleteChatFromInitialSyncBoundary(t),
            await o("WAWebRequestDeleteAddOns").requestDeleteAddOns(
              t.toString(),
              n,
            ),
            e
          );
        }
        return e;
      });
    }
    ((l.deleteFromStorage = c), (l.sendConversationDelete = C));
  },
  98,
);
