__d(
  "WAWebCustomerManagerImportPendingLeadStage",
  [
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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var a = t.map(function (e) {
          return {
            labelAssociationType: o("WAWebSchemaLabelAssociation")
              .LabelAssociationType.Jid,
            modelId: e,
            mutationIndexSegments: [
              o("WAWebWidFactory").createWid(e).toString({ legacy: !0 }),
            ],
          };
        }),
        i = await r("WAWebLabelJidSync").createLabelAssociationMutations(
          [{ id: e, type: "add" }],
          a,
        ),
        l = ["label-association", "chat"];
      (n != null && l.push("label_sublist", "label"),
        await o("WAWebSyncdCoreApi").lockForSync(l, i, async function () {
          var a = await Promise.all(
            t.map(function (e) {
              return o(
                "WAWebDBLabelAssociationDatabaseApi",
              ).queryLocalLabelAssociations([
                {
                  associationId: e,
                  type: o("WAWebSchemaLabelAssociation").LabelAssociationType
                    .Jid,
                },
              ]);
            }),
          );
          if (
            a.some(function (t) {
              return t.some(function (t) {
                return t.labelId === e;
              });
            })
          )
            throw r("err")("Label association already exists");
          var i = new Set(
              (n != null
                ? await o("WAWebSchemaLabel").getLabelTable().all()
                : []
              )
                .filter(function (e) {
                  return o("WAWebLeadListConstants").isLeadListPredefinedId(
                    e.predefinedId,
                  );
                })
                .map(function (e) {
                  return e.id;
                }),
            ),
            l = await Promise.all(
              t.map(async function (t, r) {
                var l = a[r].some(function (e) {
                    return i.has(e.labelId);
                  }),
                  s = l ? null : n;
                return (
                  s != null &&
                    (await o(
                      "WAWebDBLabelSublistDatabaseApi",
                    ).removeLabelSublist(
                      o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey(
                        {
                          predefinedId: o("WAWebLeadListConstants")
                            .LEAD_LIST_PREDEFINED_ID,
                          chatJid: t,
                        },
                      ),
                    )),
                  babelHelpers.extends(
                    {
                      associationId: t,
                      labelId: e,
                      type: o("WAWebSchemaLabelAssociation")
                        .LabelAssociationType.Jid,
                    },
                    s != null ? { pendingImportLeadStage: s } : {},
                  )
                );
              }),
            );
          await o(
            "WAWebDBLabelAssociationDatabaseApi",
          ).addOrEditLabelAssociations(l);
        }));
    }
    async function s(e, t, n) {
      var a = {
          predefinedId: o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
          chatJid: t,
          subListId: n,
        },
        i = await r("WAWebLabelSublistSync").getLabelSublistMutation(a);
      (await o("WAWebSyncdCoreApi").lockForSync(
        ["label-association", "chat", "label_sublist", "label"],
        [i],
        async function () {
          var i = await o(
            "WAWebDBLabelAssociationDatabaseApi",
          ).queryLocalLabelAssociations([
            {
              associationId: t,
              type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
            },
          ]);
          if (
            !i.some(function (t) {
              return t.labelId === e && t.pendingImportLeadStage === n;
            })
          )
            throw r("err")("[cm:import] pending Lead membership changed");
          if (
            (await o("WAWebDBLabelSublistDatabaseApi").getLabelSublistByChat(
              o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
              t,
            )) != null
          )
            throw r("err")("[cm:import] pending Lead stage changed");
          var l = await o("WAWebSchemaLabel")
            .getLabelTable()
            .bulkGet(
              i
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
          (await o("WAWebDBLabelSublistDatabaseApi").addOrEditLabelSublist(a),
            await o(
              "WAWebDBLabelAssociationDatabaseApi",
            ).clearPendingImportLeadStage(e, t));
        },
      ),
        o("WAWebBackendApi").frontendFireAndForget("syncLeadSublist", a));
    }
    ((l.addImportedLeadMembership = e), (l.commitPendingImportedLeadStage = s));
  },
  98,
);
