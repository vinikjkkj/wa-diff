__d(
  "WAWebApplyServerLeadStage",
  [
    "WAWebBackendApi",
    "WAWebCustomerManagerGating",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLabelSublistSync",
    "WAWebLeadListConstants",
    "WAWebLeadStage",
    "WAWebListItemParentType",
    "WAWebSchemaChat",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncBootstrap",
    "WAWebSyncdCoreApi",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      if (!o("WAWebCustomerManagerGating").customerManagerEnabled())
        return "gate_off";
      if (r("WAWebSyncBootstrap").isSyncDBootstrapInProcess())
        return "labels_syncing";
      var n = s(t);
      if (n == null) return "unknown_stage";
      if (
        !r("WAWebWid").isWid(e) ||
        !o("WAWebCustomerManagerGating").isWidEligibleForCustomerFields(
          o("WAWebWidFactory").createWid(e),
        )
      )
        return "ineligible";
      var a = await r("WAWebLabelSublistSync").resolveChatJid(e);
      if (a == null) return "unresolved_chat";
      var i = await u();
      if (i == null) return "no_lead_list";
      var l = await c(a, n, i);
      return l == null
        ? "unchanged"
        : (await d({ chatJid: a, manualLabelId: i, threadLid: e, write: l }),
          "applied");
    }
    function s(e) {
      return /^\d+$/.test(e)
        ? o("WAWebLeadStage").getLeadStageFromNumber(Number(e))
        : null;
    }
    async function u() {
      var e;
      return (e = (await o("WAWebSchemaLabel").getLabelTable().all()).find(
        function (e) {
          return (
            e.predefinedId ===
            o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID
          );
        },
      )) == null
        ? void 0
        : e.id;
    }
    async function c(e, t, n) {
      var r = null;
      return (
        await o("WAWebSyncdCoreApi").lockForSync(
          ["label-association", "label_sublist", "label"],
          [],
          async function () {
            var a,
              i = await o(
                "WAWebDBLabelAssociationDatabaseApi",
              ).queryLocalLabelAssociations([
                {
                  associationId: e,
                  type: o("WAWebSchemaLabelAssociation").LabelAssociationType
                    .Jid,
                },
              ]),
              l = i.some(function (e) {
                return e.labelId === n;
              }),
              s = await o(
                "WAWebDBLabelSublistDatabaseApi",
              ).getLabelSublistByChat(
                o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
                e,
              );
            if (
              !(
                l &&
                ((a = s == null ? void 0 : s.subListId) != null
                  ? a
                  : o("WAWebLeadStage").LeadStage.NEW_LEAD) === t
              )
            ) {
              l ||
                (await o(
                  "WAWebDBLabelAssociationDatabaseApi",
                ).addOrEditLabelAssociations([
                  {
                    labelId: n,
                    associationId: e,
                    type: o("WAWebSchemaLabelAssociation").LabelAssociationType
                      .Jid,
                  },
                ]));
              var u = {
                predefinedId: o("WAWebLeadListConstants")
                  .LEAD_LIST_PREDEFINED_ID,
                chatJid: e,
                subListId: t,
              };
              (await o("WAWebDBLabelSublistDatabaseApi").addOrEditLabelSublist(
                u,
              ),
                (r = { addedMembership: !l }));
            }
          },
        ),
        r
      );
    }
    async function d(e) {
      var t = e.chatJid,
        n = e.manualLabelId,
        r = e.threadLid,
        a = e.write;
      if (a.addedMembership) {
        var i = (await o("WAWebSchemaChat").getChatTable().get(t, !1)) != null;
        o("WAWebBackendApi").frontendFireAndForget(
          "applyLabelAssociationChanges",
          {
            removals: [],
            additions: [
              {
                parentId: t,
                labels: [n],
                parentType: i
                  ? o("WAWebListItemParentType").LabelItemParentType.Chat
                  : o("WAWebListItemParentType").LabelItemParentType.Contact,
              },
            ],
          },
        );
      }
      o("WAWebBackendApi").frontendFireAndForget("serverLeadStageApplied", {
        profileChatJid: r,
      });
    }
    l.applyServerLeadStage = e;
  },
  98,
);
