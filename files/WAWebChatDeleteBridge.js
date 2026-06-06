__d(
  "WAWebChatDeleteBridge",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiActiveMessageRanges",
    "WAWebApiChatCommon",
    "WAWebApiOrphanTcToken",
    "WAWebBackendApi",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBQueryAndRemoveMessageHistory",
    "WAWebDeleteChatSync",
    "WAWebEditLabelAssociationBridge",
    "WAWebFtsClient",
    "WAWebLabelJidSync",
    "WAWebListsGatingUtils",
    "WAWebListsLabelGatingUtils",
    "WAWebMessageRangeUtils",
    "WAWebMobilePlatforms",
    "WAWebModelStorageUtils",
    "WAWebMuteChatSync",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPinChatSync",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebSchemaChat",
    "WAWebSchemaChatAssignment",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncdDb",
    "WAWebThreadMetadataJob",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
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
                u(t),
                f(t),
                c({
                  chatId: t,
                  tcToken: n == null ? void 0 : n.tcToken,
                  tcTokenTimestamp: n == null ? void 0 : n.tcTokenTimestamp,
                }),
                _(
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
          r
            ? (o("WAWebFtsClient").ftsClient.purgeRange(
                babelHelpers.extends({ chatId: t.toString() }, r),
              ),
              await o("WAWebBackendApi").frontendSendAndReceive(
                "deleteModelsForLastAddOnPreview",
                { messagesIds: a },
              ),
              await o("WAWebPersistedJobManagerWorkerCompatible")
                .getJobManager()
                .waitUntilPersisted(
                  o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(
                    t.toString(),
                    a,
                  ),
                ))
            : o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendConversationDelete: chat boundaries was null",
                  ])),
              );
        });
    }
    async function u(e) {
      if (
        o("WAWebListsLabelGatingUtils").canEditLabelAssociation() ||
        o("WAWebListsGatingUtils").isListsEnabled()
      ) {
        var t = await d(e),
          n = t.labelsToUpdate,
          r = t.modelRecords;
        await o("WAWebEditLabelAssociationBridge").editLocalLabelAssociationMD(
          n,
          r,
        );
      }
    }
    async function c(e) {
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
    async function d(e) {
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
    async function m(e, t, n, a, i) {
      n === void 0 && (n = !1);
      var l = o("WATimeUtils").unixTimeMs(),
        s = await Promise.all([
          r("WAWebDeleteChatSync").getDeleteChatMutation(l, e, !n),
          o("WAWebPinChatSync").PinChatSync.getPinMutation(l, !1, e),
          p(e),
        ]),
        d = s[0],
        m = s[1],
        f = s[2],
        g = [].concat(f, [m]);
      t && g.push(d);
      var h;
      return (
        await o("WAWebMessageRangeUtils").lockForMessageRangeSync(
          [
            "message",
            "chat",
            "label-association",
            "message-association",
            "group-metadata",
            "orphan-tc-token",
            "scheduled-msg-reveal-key",
            "sync-actions",
            "thread-metadata",
          ],
          g,
          async function () {
            (await o("WAWebApiActiveMessageRanges").addActiveMessageRange(
              e.toString(),
              o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                "deleteChat",
                { deleteMedia: !n },
              ),
              d.binarySyncAction,
            ),
              (h = await o(
                "WAWebDBQueryAndRemoveMessageHistory",
              ).queryAndRemoveMessageHistory(e)));
            var t = await o("WAWebApiChatCommon").getChatRecord(e);
            await Promise.all([
              o("WAWebSchemaChat").getChatTable().remove(e.toString()),
              o("WAWebSchemaGroupMetadata")
                .getGroupMetadataTable()
                .remove(e.toString()),
              u(e),
              c({ chatId: e, tcToken: a, tcTokenTimestamp: i }),
              _(
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
        { status: 200, result: h }
      );
    }
    async function p(e) {
      if (
        !(
          o("WAWebListsLabelGatingUtils").canEditLabelAssociation() ||
          o("WAWebListsGatingUtils").isListsEnabled()
        )
      )
        return [];
      var t = await d(e),
        n = t.labelsToUpdate,
        a = t.modelRecords;
      return r("WAWebLabelJidSync").createLabelAssociationMutations(n, a);
    }
    async function _(e, t) {
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
                t.actionState === o("WASyncdConst").SyncActionState.Orphan
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
            actionState: o("WASyncdConst").SyncActionState.Orphan,
            modelType: o("WASyncdConst").SyncModelType.Chat,
            modelId: e.toString(),
          };
        }),
      );
    }
    async function f(e) {
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
    function g(e, t, n) {
      return m(e, !0, !1, t, n).then(async function (t) {
        if (t.result != null && t.result.length > 0) {
          var n = t.result;
          return (
            await o("WAWebBackendApi").frontendSendAndReceive(
              "deleteModelsForLastAddOnPreview",
              { messagesIds: n },
            ),
            await o(
              "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
            ).deleteChatFromInitialSyncBoundary(e),
            await o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .waitUntilPersisted(
                o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(
                  e.toString(),
                  n,
                ),
              ),
            t
          );
        }
        return t;
      });
    }
    ((l.deleteFromStorage = s), (l.sendConversationDelete = g));
  },
  98,
);
