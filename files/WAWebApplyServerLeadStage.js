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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!o("WAWebCustomerManagerGating").customerManagerEnabled())
            return "gate_off";
          if (r("WAWebSyncBootstrap").isSyncDBootstrapInProcess())
            return "labels_syncing";
          var n = u(t);
          if (n == null) return "unknown_stage";
          if (
            !r("WAWebWid").isWid(e) ||
            !o("WAWebCustomerManagerGating").isWidEligibleForCustomerFields(
              o("WAWebWidFactory").createWid(e),
            )
          )
            return "ineligible";
          var a = yield r("WAWebLabelSublistSync").resolveChatJid(e);
          if (a == null) return "unresolved_chat";
          var i = yield c();
          if (i == null) return "no_lead_list";
          var l = yield m(a, n, i);
          return l == null
            ? "unchanged"
            : (yield _({
                chatJid: a,
                manualLabelId: i,
                threadLid: e,
                write: l,
              }),
              "applied");
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return /^\d+$/.test(e)
        ? o("WAWebLeadStage").getLeadStageFromNumber(Number(e))
        : null;
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          return (e = (yield o("WAWebSchemaLabel").getLabelTable().all()).find(
            function (e) {
              return (
                e.predefinedId ===
                o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID
              );
            },
          )) == null
            ? void 0
            : e.id;
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
          var a = null;
          return (
            yield o("WAWebSyncdCoreApi").lockForSync(
              ["label-association", "label_sublist", "label"],
              [],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var n,
                  i = yield o(
                    "WAWebDBLabelAssociationDatabaseApi",
                  ).queryLocalLabelAssociations([
                    {
                      associationId: e,
                      type: o("WAWebSchemaLabelAssociation")
                        .LabelAssociationType.Jid,
                    },
                  ]),
                  l = i.some(function (e) {
                    return e.labelId === r;
                  }),
                  s = yield o(
                    "WAWebDBLabelSublistDatabaseApi",
                  ).getLabelSublistByChat(
                    o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
                    e,
                  );
                if (
                  !(
                    l &&
                    ((n = s == null ? void 0 : s.subListId) != null
                      ? n
                      : o("WAWebLeadStage").LeadStage.LEAD) === t
                  )
                ) {
                  l ||
                    (yield o(
                      "WAWebDBLabelAssociationDatabaseApi",
                    ).addOrEditLabelAssociations([
                      {
                        labelId: r,
                        associationId: e,
                        type: o("WAWebSchemaLabelAssociation")
                          .LabelAssociationType.Jid,
                      },
                    ]));
                  var u = {
                    predefinedId: o("WAWebLeadListConstants")
                      .LEAD_LIST_PREDEFINED_ID,
                    chatJid: e,
                    subListId: t,
                  };
                  (yield o(
                    "WAWebDBLabelSublistDatabaseApi",
                  ).addOrEditLabelSublist(u),
                    (a = { addedMembership: !l }));
                }
              }),
            ),
            a
          );
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
          var t = e.chatJid,
            n = e.manualLabelId,
            r = e.threadLid,
            a = e.write;
          if (a.addedMembership) {
            var i =
              (yield o("WAWebSchemaChat").getChatTable().get(t, !1)) != null;
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
                      : o("WAWebListItemParentType").LabelItemParentType
                          .Contact,
                  },
                ],
              },
            );
          }
          o("WAWebBackendApi").frontendFireAndForget("serverLeadStageApplied", {
            profileChatJid: r,
          });
        })),
        f.apply(this, arguments)
      );
    }
    l.applyServerLeadStage = e;
  },
  98,
);
