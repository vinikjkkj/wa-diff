__d(
  "WAWebEditLabelAssociationBridge",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebCustomerManagerGating",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLabelJidSync",
    "WAWebLabelSublistSync",
    "WAWebLeadListConstants",
    "WAWebListUtils",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSchemaLabelSublist",
    "WAWebSyncdCoreApi",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      var n = d(
        e.filter(function (e) {
          var t = e.id;
          return t !== o("WAWebListUtils").META_AI_LIST_ID;
        }),
        t.map(function (e) {
          return {
            labelAssociationType: o("WAWebSchemaLabelAssociation")
              .LabelAssociationType.Jid,
            modelId: e.id.toString(),
            mutationIndexSegments: [e.id.toString({ legacy: !0 })],
          };
        }),
      );
      return n;
    }
    async function d(t, n) {
      var a = await r("WAWebLabelJidSync").createLabelAssociationMutations(
          t,
          n,
        ),
        i = o("WAWebCustomerManagerGating").customerManagerEnabled()
          ? await m(t, n)
          : { sublistLocalRemoves: [], sublistMutations: [] },
        l = i.sublistLocalRemoves,
        s = i.sublistMutations,
        u =
          s.length > 0
            ? ["label-association", "chat", "label_sublist"]
            : ["label-association", "chat"];
      await o("WAWebSyncdCoreApi").lockForSync(
        u,
        [].concat(a, s),
        async function () {
          (await p(t, n),
            await Promise.all(
              l.map(function (t) {
                return o("WAWebDBLabelSublistDatabaseApi")
                  .removeLabelSublist(t)
                  .catch(function (t) {
                    throw (
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "removeLabelSublist: clear lead sub-list on Lead removal failed",
                            ])),
                        )
                        .verbose()
                        .sendLogs(
                          "edit-label-association-remove-lead-sublist-failed",
                        ),
                      r("err")(
                        "removeLabelSublist for lead sub-list cleanup failed",
                      )
                    );
                  });
              }),
            ));
        },
      );
      for (var c of l) {
        var d = o("WAWebSchemaLabelSublist").getChatJidFromPrimaryKey(c);
        (o("WAWebBackendApi").frontendFireAndForget(
          "removeLeadSublistFromCollection",
          {
            chatJid: d,
            predefinedId: o(
              "WAWebSchemaLabelSublist",
            ).getPredefinedIdFromPrimaryKey(c),
          },
        ),
          o("WAWebBackendApi").frontendFireAndForget("leadRemovedFromChat", {
            chatJid: d,
          }));
      }
    }
    async function m(e, t) {
      var n = await Promise.all(
          e.map(function (e) {
            var t = e.id;
            return o("WAWebSchemaLabel").getLabelTable().get(t);
          }),
        ),
        a = e.some(function (e, t) {
          var r,
            a = e.type;
          return (
            a === "remove" &&
            o("WAWebLeadListConstants").isLeadListPredefinedId(
              (r = n[t]) == null ? void 0 : r.predefinedId,
            )
          );
        });
      if (!a) return { sublistLocalRemoves: [], sublistMutations: [] };
      var i = t.map(function (e) {
          var t = e.modelId;
          return o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
            predefinedId: o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
            chatJid: t,
          });
        }),
        l = await Promise.all(
          t.map(function (e) {
            var t = e.modelId;
            return r("WAWebLabelSublistSync").getLabelSublistRemoveMutation({
              predefinedId: o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
              chatJid: t,
            });
          }),
        );
      return { sublistLocalRemoves: i, sublistMutations: l };
    }
    async function p(e, t) {
      var n = [],
        a = [];
      (e.forEach(function (e) {
        var r = e.id,
          i = e.type;
        t.map(function (e) {
          var t = e.labelAssociationType,
            l = e.modelId;
          i === "add"
            ? n.push({ labelId: r, associationId: l, type: t })
            : a.push(
                o(
                  "WAWebSchemaLabelAssociation",
                ).createLabelAssociationPrimaryKey({
                  labelId: r,
                  associationId: l,
                  type: t,
                }),
              );
        });
      }),
        await Promise.all([
          o("WAWebDBLabelAssociationDatabaseApi")
            .addOrEditLabelAssociations(n)
            .catch(function (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "addOrEditLabelAssociations: label assoc table failed",
                      ])),
                  )
                  .verbose()
                  .sendLogs(
                    "editLocalLabelAssociationMD-add-or-edit-label-associations-failed",
                  ),
                r("err")(
                  "addOrEditLabelAssociations into label association table failed",
                )
              );
            }),
          o("WAWebDBLabelAssociationDatabaseApi")
            .removeLabelAssociations(a)
            .catch(function (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "removeLabelAssociations from label association table failed",
                      ])),
                  )
                  .verbose()
                  .sendLogs(
                    "editLocalLabelAssociationMD-remove-label-associations-failed",
                  ),
                r("err")(
                  "removeLabelAssociations form label association table failed",
                )
              );
            }),
        ]));
    }
    ((l.editLabelAssociation = c), (l.editLocalLabelAssociationMD = p));
  },
  98,
);
