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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield f(e);
          return (
            t != null &&
            o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(t.chat)
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield f(e);
          if (
            n == null ||
            !o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(n.chat)
          )
            return null;
          if (!n.alreadyOnLead) return { isMember: !1, stage: null };
          var a = yield o(
              "WAWebGetLeadStageByChatJidJob",
            ).getLeadStageByChatJidJob({ chatJid: n.resolvedChatJid }),
            i = n.alreadyOnDetectedOutcomeLead
              ? o("WAWebLeadStage").LeadStage.LEAD
              : (t = n.pendingImportLeadStage) != null
                ? t
                : o("WAWebLeadStage").LeadStage.LEAD,
            l = o("WAWebLeadStage").getLeadStageFromNumber(a != null ? a : i);
          if (l == null) throw r("err")("[cm:import] Lead stage unrecognized");
          return { isMember: !0, stage: l };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !0);
          var r = yield f(e);
          if (r != null) {
            var a = r.alreadyOnManualLead,
              i = r.chat,
              l = r.labelId,
              s = r.leadLabelRow;
            if (o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(i)) {
              if (!a) {
                if (!n) return;
                var u = [{ id: l, type: "add" }];
                yield o(
                  "WAWebCustomerManagerImportPendingLeadStage",
                ).addImportedLeadMembership(l, [r.resolvedChatJid], t);
                var c = o("WAWebLabelCollection").LabelCollection.get(l);
                ((c == null ||
                  c.predefinedId !==
                    o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID ||
                  c.name == null) &&
                  o("WAWebLabelCollection").LabelCollection.add(
                    babelHelpers.extends({}, s),
                    { merge: !0 },
                  ),
                  o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD(
                    u,
                    [i],
                  ),
                  o("WAWebListsActions").logCtwaSignalsForChats(
                    [i],
                    Number(l),
                  ));
              }
              if (t != null) {
                var d = a ? r : yield f(e);
                d != null && (yield p(d, t));
              }
            }
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.labelId,
            r = e.pendingImportLeadStage,
            a = e.resolvedChatJid,
            i = yield o(
              "WAWebGetLeadStageByChatJidJob",
            ).getLeadStageByChatJidJob({ chatJid: a });
          if (i != null || e.alreadyOnDetectedOutcomeLead) {
            r != null &&
              (yield o(
                "WAWebDBLabelAssociationDatabaseApi",
              ).clearPendingImportLeadStage(n, a));
            return;
          }
          r === t &&
            (yield o(
              "WAWebCustomerManagerImportPendingLeadStage",
            ).commitPendingImportedLeadStage(n, a, t));
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
          var t,
            n = yield o("WAWebSchemaLabel").getLabelTable().all(),
            a = n.find(function (e) {
              return (
                e.predefinedId ===
                  o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID &&
                e.type !== o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED
              );
            });
          if (a == null) return null;
          var i = yield o(
            "WAWebCustomerManagerFindOrCreateChat",
          ).customerManagerFindOrCreateChat(o("WAWebWidFactory").createWid(e));
          if (i == null) throw r("err")("[cm:import] Lead chat unavailable");
          var l = o("WAJids").unsafeCoerceToChatJid(i.id.toString()),
            s = yield o(
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
                    o("WAWebDetectedOutcomeLabelConstants")
                      .DO_LEAD_PREDEFINED_ID
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
        })),
        g.apply(this, arguments)
      );
    }
    ((l.isImportedLeadStageEligible = e),
      (l.readImportedLeadState = u),
      (l.reconcileImportedLeadArtifacts = d));
  },
  98,
);
