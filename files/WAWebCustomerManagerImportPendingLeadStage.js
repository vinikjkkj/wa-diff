__d(
  "WAWebCustomerManagerImportPendingLeadStage",
  [
    "Promise",
    "WAWebBackendApi",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLabelJidSync",
    "WAWebLabelSublistSync",
    "WAWebLeadListConstants",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSchemaLabelSublist",
    "WAWebSyncdCoreApi",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = a.map(function (e) {
              return {
                labelAssociationType: o("WAWebSchemaLabelAssociation")
                  .LabelAssociationType.Jid,
                modelId: e,
                mutationIndexSegments: [
                  o("WAWebWidFactory").createWid(e).toString({ legacy: !0 }),
                ],
              };
            }),
            s = yield r("WAWebLabelJidSync").createLabelAssociationMutations(
              [{ id: t, type: "add" }],
              l,
            ),
            u = ["label-association", "chat"];
          (i != null && u.push("label_sublist", "label"),
            yield o("WAWebSyncdCoreApi").lockForSync(
              u,
              s,
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var l = yield (e || (e = n("Promise"))).all(
                  a.map(function (e) {
                    return o(
                      "WAWebDBLabelAssociationDatabaseApi",
                    ).queryLocalLabelAssociations([
                      {
                        associationId: e,
                        type: o("WAWebSchemaLabelAssociation")
                          .LabelAssociationType.Jid,
                      },
                    ]);
                  }),
                );
                if (
                  l.some(function (e) {
                    return e.some(function (e) {
                      return e.labelId === t;
                    });
                  })
                )
                  throw r("err")("Label association already exists");
                var s = new Set(
                    (i != null
                      ? yield o("WAWebSchemaLabel").getLabelTable().all()
                      : []
                    )
                      .filter(function (e) {
                        return o(
                          "WAWebLeadListConstants",
                        ).isLeadListPredefinedId(e.predefinedId);
                      })
                      .map(function (e) {
                        return e.id;
                      }),
                  ),
                  u = yield e.all(
                    a.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e, n) {
                            var r = l[n].some(function (e) {
                                return s.has(e.labelId);
                              }),
                              a = r ? null : i;
                            return (
                              a != null &&
                                (yield o(
                                  "WAWebDBLabelSublistDatabaseApi",
                                ).removeLabelSublist(
                                  o(
                                    "WAWebSchemaLabelSublist",
                                  ).createLabelSublistPrimaryKey({
                                    predefinedId: o("WAWebLeadListConstants")
                                      .LEAD_LIST_PREDEFINED_ID,
                                    chatJid: e,
                                  }),
                                )),
                              babelHelpers.extends(
                                {
                                  associationId: e,
                                  labelId: t,
                                  type: o("WAWebSchemaLabelAssociation")
                                    .LabelAssociationType.Jid,
                                },
                                a != null ? { pendingImportLeadStage: a } : {},
                              )
                            );
                          },
                        );
                        return function (t, n) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                yield o(
                  "WAWebDBLabelAssociationDatabaseApi",
                ).addOrEditLabelAssociations(u);
              }),
            ));
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = {
              predefinedId: o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
              chatJid: t,
              subListId: a,
            },
            l = yield r("WAWebLabelSublistSync").getLabelSublistMutation(i);
          (yield o("WAWebSyncdCoreApi").lockForSync(
            ["label-association", "chat", "label_sublist", "label"],
            [l],
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = yield o(
                "WAWebDBLabelAssociationDatabaseApi",
              ).queryLocalLabelAssociations([
                {
                  associationId: t,
                  type: o("WAWebSchemaLabelAssociation").LabelAssociationType
                    .Jid,
                },
              ]);
              if (
                !n.some(function (t) {
                  return t.labelId === e && t.pendingImportLeadStage === a;
                })
              )
                throw r("err")("[cm:import] pending Lead membership changed");
              if (
                (yield o(
                  "WAWebDBLabelSublistDatabaseApi",
                ).getLabelSublistByChat(
                  o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
                  t,
                )) != null
              )
                throw r("err")("[cm:import] pending Lead stage changed");
              var l = yield o("WAWebSchemaLabel")
                .getLabelTable()
                .bulkGet(
                  n
                    .filter(function (t) {
                      return t.labelId !== e;
                    })
                    .map(function (e) {
                      return e.labelId;
                    }),
                );
              if (
                l.some(function (e) {
                  return o("WAWebLeadListConstants").isLeadListPredefinedId(
                    e == null ? void 0 : e.predefinedId,
                  );
                })
              )
                throw r("err")("[cm:import] pending Lead stage changed");
              (yield o("WAWebDBLabelSublistDatabaseApi").addOrEditLabelSublist(
                i,
              ),
                yield o(
                  "WAWebDBLabelAssociationDatabaseApi",
                ).clearPendingImportLeadStage(e, t));
            }),
          ),
            o("WAWebBackendApi").frontendFireAndForget("syncLeadSublist", i));
        })),
        d.apply(this, arguments)
      );
    }
    ((l.addImportedLeadMembership = s), (l.commitPendingImportedLeadStage = c));
  },
  98,
);
