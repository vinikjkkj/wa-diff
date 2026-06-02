__d(
  "WAWebEditLabelAssociationBridge",
  [
    "WALogger",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebLabelJidSync",
    "WAWebListsGatingUtils",
    "WAWebListsLabelGatingUtils",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncdCoreApi",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      var n = c(
        e,
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
    async function c(e, t) {
      if (
        !(
          o("WAWebListsLabelGatingUtils").canEditLabelAssociation() ||
          o("WAWebListsGatingUtils").isListsEnabled()
        )
      )
        return Promise.reject(
          r("err")("editLabelAssociation is not supported"),
        );
      var n = await r("WAWebLabelJidSync").createLabelAssociationMutations(
        e,
        t,
      );
      return o("WAWebSyncdCoreApi").lockForSync(
        ["label-association", "chat"],
        n,
        function () {
          return d(e, t);
        },
      );
    }
    async function d(t, n) {
      var a = [],
        i = [];
      (t.forEach(function (e) {
        var t = e.id,
          r = e.type;
        n.map(function (e) {
          var n = e.labelAssociationType,
            l = e.modelId;
          r === "add"
            ? a.push({ labelId: t, associationId: l, type: n })
            : i.push(
                o(
                  "WAWebSchemaLabelAssociation",
                ).createLabelAssociationPrimaryKey({
                  labelId: t,
                  associationId: l,
                  type: n,
                }),
              );
        });
      }),
        await Promise.all([
          o("WAWebDBLabelAssociationDatabaseApi")
            .addOrEditLabelAssociations(a)
            .catch(function (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
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
            .removeLabelAssociations(i)
            .catch(function (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.editLabelAssociation = u), (l.editLocalLabelAssociationMD = d));
  },
  98,
);
