__d(
  "WAWebEditLabelAssociationBridge",
  [
    "Promise",
    "WALogger",
    "WAWebContactManagerGating",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLabelJidSync",
    "WAWebLabelSublistSync",
    "WAWebLeadListConstants",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSchemaLabelSublist",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      var n = m(
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
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (
            !(
              o("WAWebMobilePlatforms").isSMB() ||
              o("WAWebListsGatingUtils").isListsEnabled()
            )
          )
            return (c || (c = n("Promise"))).reject(
              r("err")("editLabelAssociation is not supported"),
            );
          var i = yield r("WAWebLabelJidSync").createLabelAssociationMutations(
              t,
              a,
            ),
            l = o("WAWebContactManagerGating").contactManagerEnabled()
              ? yield _(t, a)
              : { sublistLocalRemoves: [], sublistMutations: [] },
            s = l.sublistLocalRemoves,
            u = l.sublistMutations,
            d =
              u.length > 0
                ? ["label-association", "chat", "label_sublist"]
                : ["label-association", "chat"];
          return o("WAWebSyncdCoreApi").lockForSync(
            d,
            [].concat(i, u),
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield g(t, a),
                yield (c || (c = n("Promise"))).all(
                  s.map(function (t) {
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
            }),
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = [],
            i = [],
            l = yield (c || (c = n("Promise"))).all(
              e.map(function (e) {
                var t = e.id;
                return o("WAWebSchemaLabel").getLabelTable().get(t);
              }),
            );
          e.forEach(function (e, n) {
            var s,
              u = e.type;
            if (
              ((s = l[n]) == null ? void 0 : s.predefinedId) ===
                o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID &&
              u === "remove"
            )
              for (var c of t) {
                var d = c.modelId;
                (i.push(
                  r("WAWebLabelSublistSync").getLabelSublistRemoveMutation({
                    predefinedId: o("WAWebLeadListConstants")
                      .LEAD_LIST_PREDEFINED_ID,
                    chatJid: d,
                  }),
                ),
                  a.push(
                    o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
                      predefinedId: o("WAWebLeadListConstants")
                        .LEAD_LIST_PREDEFINED_ID,
                      chatJid: d,
                    }),
                  ));
              }
          });
          var s = yield c.all(i);
          return { sublistLocalRemoves: a, sublistMutations: s };
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = [],
            i = [];
          (e.forEach(function (e) {
            var n = e.id,
              r = e.type;
            t.map(function (e) {
              var t = e.labelAssociationType,
                l = e.modelId;
              r === "add"
                ? a.push({ labelId: n, associationId: l, type: t })
                : i.push(
                    o(
                      "WAWebSchemaLabelAssociation",
                    ).createLabelAssociationPrimaryKey({
                      labelId: n,
                      associationId: l,
                      type: t,
                    }),
                  );
            });
          }),
            yield (c || (c = n("Promise"))).all([
              o("WAWebDBLabelAssociationDatabaseApi")
                .addOrEditLabelAssociations(a)
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
                .removeLabelAssociations(i)
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
        })),
        h.apply(this, arguments)
      );
    }
    ((l.editLabelAssociation = d), (l.editLocalLabelAssociationMD = g));
  },
  98,
);
