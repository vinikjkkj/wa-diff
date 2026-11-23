__d(
  "WAWebCustomerManagerImportLeadMerge",
  [
    "WAJids",
    "WAWebCustomerManagerFindOrCreateChat",
    "WAWebCustomerManagerImportPendingLeadStage",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDetectedOutcomeLabelConstants",
    "WAWebGetLeadStageByChatJidJob",
    "WAWebLabelCollection",
    "WAWebLeadListConstants",
    "WAWebLeadStage",
    "WAWebLeadSublistGating",
    "WAWebListsActions",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await d(e);
      return (
        t != null &&
        o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(t.chat)
      );
    }
    async function s(e) {
      var t,
        n = await d(e);
      if (
        n == null ||
        !o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(n.chat)
      )
        return null;
      if (!n.alreadyOnLead) return { isMember: !1, stage: null };
      var a = await o("WAWebGetLeadStageByChatJidJob").getLeadStageByChatJidJob(
          { chatJid: n.resolvedChatJid },
        ),
        i = n.alreadyOnDetectedOutcomeLead
          ? o("WAWebLeadStage").LeadStage.NEW_LEAD
          : (t = n.pendingImportLeadStage) != null
            ? t
            : o("WAWebLeadStage").LeadStage.NEW_LEAD,
        l = o("WAWebLeadStage").getLeadStageFromNumber(a != null ? a : i);
      if (l == null) throw r("err")("[cm:import] Lead stage unrecognized");
      return { isMember: !0, stage: l };
    }
    async function u(e, t, n) {
      n === void 0 && (n = !0);
      var r = await d(e);
      if (r != null) {
        var a = r.alreadyOnManualLead,
          i = r.chat,
          l = r.labelId,
          s = r.leadLabelRow;
        if (o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(i)) {
          if (!a) {
            if (!n) return;
            var u = [{ id: l, type: "add" }];
            await o(
              "WAWebCustomerManagerImportPendingLeadStage",
            ).addImportedLeadMembership(l, [r.resolvedChatJid], t);
            var m = o("WAWebLabelCollection").LabelCollection.get(l);
            ((m == null ||
              m.predefinedId !==
                o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID ||
              m.name == null) &&
              o("WAWebLabelCollection").LabelCollection.add(
                babelHelpers.extends({}, s),
                { merge: !0 },
              ),
              o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD(u, [
                i,
              ]),
              o("WAWebListsActions").logCtwaSignalsForChats([i], Number(l), t));
          }
          if (t != null) {
            var p = a ? r : await d(e);
            p != null && (await c(p, t));
          }
        }
      }
    }
    async function c(e, t) {
      var n = e.labelId,
        r = e.pendingImportLeadStage,
        a = e.resolvedChatJid,
        i = await o("WAWebGetLeadStageByChatJidJob").getLeadStageByChatJidJob({
          chatJid: a,
        });
      if (i != null || e.alreadyOnDetectedOutcomeLead) {
        r != null &&
          (await o(
            "WAWebDBLabelAssociationDatabaseApi",
          ).clearPendingImportLeadStage(n, a));
        return;
      }
      r === t &&
        (await o(
          "WAWebCustomerManagerImportPendingLeadStage",
        ).commitPendingImportedLeadStage(n, a, t));
    }
    async function d(e) {
      var t,
        n = await o("WAWebSchemaLabel").getLabelTable().all(),
        a = n.find(function (e) {
          return (
            e.predefinedId ===
              o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID &&
            e.type !== o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED
          );
        });
      if (a == null) return null;
      var i = await o(
        "WAWebCustomerManagerFindOrCreateChat",
      ).customerManagerFindOrCreateChat(o("WAWebWidFactory").createWid(e));
      if (i == null) throw r("err")("[cm:import] Lead chat unavailable");
      var l = o("WAJids").unsafeCoerceToChatJid(i.id.toString()),
        s = await o(
          "WAWebDBLabelAssociationDatabaseApi",
        ).queryLocalLabelAssociations([
          {
            associationId: l,
            type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
          },
        ]),
        u = s.find(function (e) {
          return e.labelId === a.id;
        }),
        c = new Set(
          n
            .filter(function (e) {
              return (
                e.predefinedId ===
                o("WAWebDetectedOutcomeLabelConstants").DO_LEAD_PREDEFINED_ID
              );
            })
            .map(function (e) {
              return e.id;
            }),
        ),
        d = s.some(function (e) {
          return c.has(e.labelId);
        });
      return {
        alreadyOnDetectedOutcomeLead: d,
        alreadyOnLead: u != null || d,
        alreadyOnManualLead: u != null,
        chat: i,
        labelId: a.id,
        leadLabelRow: a,
        pendingImportLeadStage:
          (t = u == null ? void 0 : u.pendingImportLeadStage) != null
            ? t
            : null,
        resolvedChatJid: l,
      };
    }
    ((l.isImportedLeadStageEligible = e),
      (l.readImportedLeadState = s),
      (l.reconcileImportedLeadArtifacts = u));
  },
  98,
);
