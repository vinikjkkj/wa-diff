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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 0;
    async function m(t, n) {
      var a;
      try {
        a = await o("WAWebDBLabelDatabaseApi").getNextLabelId();
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
      var i = o("WATimeUtils").unixTime(),
        l = o("WAWebLabelConstants").mapLabelNameToPredefinedId(t),
        u = !0,
        c = o("WAWebSchemaLabel").ListType.CUSTOM,
        d = r("WAWebLabelSync").getLabelMutation({
          color: n,
          deleted: !1,
          id: String(a),
          isActive: u,
          name: t,
          predefinedId: l,
          timestamp: i,
          type: c,
        });
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[Label] labelAddAction: id ",
            ", mutation generated",
          ])),
        a,
      );
      var m = {
        id: String(a),
        name: t,
        colorIndex: n,
        predefinedId: l,
        isActive: u,
        type: c,
      };
      return (
        await o("WAWebSyncdCoreApi").lockForSync(
          ["label"],
          [d],
          async function () {
            await o("WAWebDBLabelDatabaseApi").addOrEditLabel(m);
          },
        ),
        o("WAWebLabelCollection").LabelCollection.add(
          babelHelpers.extends({}, m),
        ),
        a
      );
    }
    async function p(e, t, n, a, i, l) {
      var s = o("WATimeUtils").unixTime(),
        c = r("WAWebLabelSync").getLabelMutation({
          color: a,
          deleted: !1,
          id: e,
          isActive: i,
          name: t,
          predefinedId: n != null ? n : d,
          timestamp: s,
          type: l,
        });
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[Label] labelEditAction: id ",
            ", mutation generated",
          ])),
        e,
      );
      var m = {
        id: e,
        name: t,
        colorIndex: a,
        predefinedId: n != null ? n : null,
        isActive: i != null ? i : void 0,
        type: l != null ? l : void 0,
      };
      (await o("WAWebSyncdCoreApi").lockForSync(
        ["label"],
        [c],
        async function () {
          await o("WAWebDBLabelDatabaseApi").addOrEditLabel(m);
        },
      ),
        o("WAWebLabelCollection").LabelCollection.add(
          babelHelpers.extends({}, m),
          { merge: !0 },
        ));
    }
    async function _(e) {
      var t = e.color,
        n = e.labelId,
        a = e.name,
        i = await o(
          "WAWebDBLabelAssociationDatabaseApi",
        ).queryLabelAssociationsForLabelIds([n]),
        l = o("WATimeUtils").unixTime(),
        s = r("WAWebLabelSync").getLabelMutation({
          color: t,
          deleted: !0,
          id: n,
          name: a,
          predefinedId: d,
          timestamp: l,
        }),
        u = [],
        m = i.filter(function (e) {
          return (
            e.type === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
          );
        });
      (m.length > 0 &&
        (u = await r("WAWebLabelJidSync").createLabelAssociationMutations(
          [{ id: n, type: "remove" }],
          m.map(function (e) {
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
          n,
        ),
        await o("WAWebSyncdCoreApi").lockForSync(
          ["label", "label-association", "chat"],
          [s].concat(u),
          async function () {
            (await o("WAWebDBLabelDatabaseApi").removeLabel(n),
              i.length > 0 &&
                (await o(
                  "WAWebDBLabelAssociationDatabaseApi",
                ).removeLabelAssociations(
                  i.map(function (e) {
                    return o(
                      "WAWebSchemaLabelAssociation",
                    ).createLabelAssociationPrimaryKey(e);
                  }),
                )));
          },
        ),
        o("WAWebLabelCollection").LabelCollection.remove(n));
    }
    ((l.labelAddAction = m),
      (l.labelEditAction = p),
      (l.labelDeleteAction = _));
  },
  98,
);
