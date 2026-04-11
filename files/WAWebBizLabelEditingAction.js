__d(
  "WAWebBizLabelEditingAction",
  [
    "invariant",
    "WALogger",
    "WATimeUtils",
    "WAWebBizGatingUtils",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelDatabaseApi",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLabelJidSync",
    "WAWebLabelSync",
    "WAWebListsGatingUtils",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = 0;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          o("WAWebBizGatingUtils").labelsEditingEnabled() || s(0, 75240);
          var i;
          try {
            i = yield o("WAWebDBLabelDatabaseApi").getNextLabelId();
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "labelAddAction: failed to generate next label id with error ",
                    "",
                  ])),
                t,
              )
              .sendLogs("labelAddAction-failed");
            return;
          }
          var l = o("WATimeUtils").unixTime(),
            c = o("WAWebLabelConstants").mapLabelNameToPredefinedId(t),
            d,
            m;
          o("WAWebListsGatingUtils").isListsEnabled() &&
            ((d = !0), (m = o("WAWebSchemaLabel").ListType.CUSTOM));
          var p = r("WAWebLabelSync").getLabelMutation(
            String(i),
            t,
            a,
            !1,
            c,
            d,
            m,
            l,
          );
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[Label] labelAddAction: id ",
                ", mutation generated",
              ])),
            i,
          );
          var _ = {
            id: String(i),
            name: t,
            colorIndex: a,
            predefinedId: c,
            isActive: d,
            type: m,
          };
          return (
            yield o("WAWebSyncdCoreApi").lockForSync(
              ["label"],
              [p],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                yield o("WAWebDBLabelDatabaseApi").addOrEditLabel(_);
              }),
            ),
            o("WAWebLabelCollection").LabelCollection.add(
              babelHelpers.extends({}, _),
            ),
            i
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r, o, a) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, u) {
            o("WAWebBizGatingUtils").labelsEditingEnabled() || s(0, 75241);
            var d = o("WATimeUtils").unixTime(),
              p = r("WAWebLabelSync").getLabelMutation(
                e,
                t,
                i,
                !1,
                a != null ? a : m,
                l,
                u,
                d,
              );
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[Label] labelEditAction: id ",
                  ", mutation generated",
                ])),
              e,
            );
            var _ = {
              id: e,
              name: t,
              colorIndex: i,
              predefinedId: a,
              isActive: l != null ? l : void 0,
              type: u != null ? u : void 0,
            };
            (yield o("WAWebSyncdCoreApi").lockForSync(
              ["label"],
              [p],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                yield o("WAWebDBLabelDatabaseApi").addOrEditLabel(_);
              }),
            ),
              o("WAWebLabelCollection").LabelCollection.add(
                babelHelpers.extends({}, _),
                { merge: !0 },
              ));
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          o("WAWebBizGatingUtils").labelsEditingEnabled() || s(0, 75242);
          var i = yield o(
              "WAWebDBLabelAssociationDatabaseApi",
            ).queryLabelAssociationsForLabelIds([e]),
            l = o("WATimeUtils").unixTime(),
            u = r("WAWebLabelSync").getLabelMutation(
              e,
              t,
              a,
              !0,
              m,
              void 0,
              void 0,
              l,
            ),
            c = [],
            p = i.filter(function (e) {
              return (
                e.type ===
                o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
              );
            });
          (p.length > 0 &&
            (c = yield r("WAWebLabelJidSync").createLabelAssociationMutations(
              [{ id: e, type: "remove" }],
              p.map(function (e) {
                return {
                  labelAssociationType: o("WAWebSchemaLabelAssociation")
                    .LabelAssociationType.Jid,
                  modelId: e.associationId,
                  mutationIndexSegments: [e.associationId],
                };
              }),
            )),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[Label] labelDeleteAction: id ",
                  ", mutation generated",
                ])),
              e,
            ),
            yield o("WAWebSyncdCoreApi").lockForSync(
              ["label", "label-association", "chat"],
              [u].concat(c),
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (yield o("WAWebDBLabelDatabaseApi").removeLabel(e),
                  i.length > 0 &&
                    (yield o(
                      "WAWebDBLabelAssociationDatabaseApi",
                    ).removeLabelAssociations(
                      i.map(function (e) {
                        return o(
                          "WAWebSchemaLabelAssociation",
                        ).createLabelAssociationPrimaryKey(e);
                      }),
                    )));
              }),
            ),
            o("WAWebLabelCollection").LabelCollection.remove(e));
        })),
        y.apply(this, arguments)
      );
    }
    ((l.labelAddAction = p),
      (l.labelEditAction = f),
      (l.labelDeleteAction = h));
  },
  98,
);
