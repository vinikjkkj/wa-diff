__d(
  "WAWebEditLabelAssociationBridge",
  [
    "Promise",
    "WALogger",
    "WAWebBizGatingUtils",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebLabelJidSync",
    "WAWebListsGatingUtils",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      var n = d(
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
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !(
              o("WAWebBizGatingUtils").canEditLabelAssociation() ||
              o("WAWebListsGatingUtils").isListsEnabled()
            )
          )
            return (u || (u = n("Promise"))).reject(
              r("err")("editLabelAssociation is not supported"),
            );
          var a = yield r("WAWebLabelJidSync").createLabelAssociationMutations(
            e,
            t,
          );
          return o("WAWebSyncdCoreApi").lockForSync(
            ["label-association", "chat"],
            a,
            function () {
              return p(e, t);
            },
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = [],
            l = [];
          (t.forEach(function (e) {
            var t = e.id,
              n = e.type;
            a.map(function (e) {
              var r = e.labelAssociationType,
                a = e.modelId;
              n === "add"
                ? i.push({ labelId: t, associationId: a, type: r })
                : l.push(
                    o(
                      "WAWebSchemaLabelAssociation",
                    ).createLabelAssociationPrimaryKey({
                      labelId: t,
                      associationId: a,
                      type: r,
                    }),
                  );
            });
          }),
            yield (u || (u = n("Promise"))).all([
              o("WAWebDBLabelAssociationDatabaseApi")
                .addOrEditLabelAssociations(i)
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
                .removeLabelAssociations(l)
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
        })),
        _.apply(this, arguments)
      );
    }
    ((l.editLabelAssociation = c), (l.editLocalLabelAssociationMD = p));
  },
  98,
);
