__d(
  "WAWebBizLabelEditingAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelDatabaseApi",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLabelJidSync",
    "WAWebLabelSync",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 0;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
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
            u = o("WAWebLabelConstants").mapLabelNameToPredefinedId(t),
            c = !0,
            d = o("WAWebSchemaLabel").ListType.CUSTOM,
            m = r("WAWebLabelSync").getLabelMutation({
              color: a,
              deleted: !1,
              id: String(i),
              isActive: c,
              name: t,
              predefinedId: u,
              timestamp: l,
              type: d,
            });
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[Label] labelAddAction: id ",
                ", mutation generated",
              ])),
            i,
          );
          var p = {
            id: String(i),
            name: t,
            colorIndex: a,
            predefinedId: u,
            isActive: c,
            type: d,
          };
          return (
            yield o("WAWebSyncdCoreApi").lockForSync(
              ["label"],
              [m],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                yield o("WAWebDBLabelDatabaseApi").addOrEditLabel(p);
              }),
            ),
            o("WAWebLabelCollection").LabelCollection.add(
              babelHelpers.extends({}, p),
            ),
            i
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r, o, a) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            var c = o("WATimeUtils").unixTime(),
              m = r("WAWebLabelSync").getLabelMutation({
                color: i,
                deleted: !1,
                id: e,
                isActive: l,
                name: t,
                predefinedId: a != null ? a : d,
                timestamp: c,
                type: s,
              });
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[Label] labelEditAction: id ",
                  ", mutation generated",
                ])),
              e,
            );
            var p = {
              id: e,
              name: t,
              colorIndex: i,
              predefinedId: a != null ? a : null,
              isActive: l != null ? l : void 0,
              type: s != null ? s : void 0,
            };
            (yield o("WAWebSyncdCoreApi").lockForSync(
              ["label"],
              [m],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                yield o("WAWebDBLabelDatabaseApi").addOrEditLabel(p);
              }),
            ),
              o("WAWebLabelCollection").LabelCollection.add(
                babelHelpers.extends({}, p),
                { merge: !0 },
              ));
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.color,
            a = e.labelId,
            i = e.name,
            l = yield o(
              "WAWebDBLabelAssociationDatabaseApi",
            ).queryLabelAssociationsForLabelIds([a]),
            s = o("WATimeUtils").unixTime(),
            u = r("WAWebLabelSync").getLabelMutation({
              color: t,
              deleted: !0,
              id: a,
              isActive: void 0,
              name: i,
              predefinedId: d,
              timestamp: s,
              type: void 0,
            }),
            m = [],
            p = l.filter(function (e) {
              return (
                e.type ===
                o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
              );
            });
          (p.length > 0 &&
            (m = yield r("WAWebLabelJidSync").createLabelAssociationMutations(
              [{ id: a, type: "remove" }],
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
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[Label] labelDeleteAction: id ",
                  ", mutation generated",
                ])),
              a,
            ),
            yield o("WAWebSyncdCoreApi").lockForSync(
              ["label", "label-association", "chat"],
              [u].concat(m),
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (yield o("WAWebDBLabelDatabaseApi").removeLabel(a),
                  l.length > 0 &&
                    (yield o(
                      "WAWebDBLabelAssociationDatabaseApi",
                    ).removeLabelAssociations(
                      l.map(function (e) {
                        return o(
                          "WAWebSchemaLabelAssociation",
                        ).createLabelAssociationPrimaryKey(e);
                      }),
                    )));
              }),
            ),
            o("WAWebLabelCollection").LabelCollection.remove(a));
        })),
        h.apply(this, arguments)
      );
    }
    ((l.labelAddAction = m),
      (l.labelEditAction = _),
      (l.labelDeleteAction = g));
  },
  98,
);
