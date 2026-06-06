__d(
  "WAWebBizLabelEditingAction",
  [
    "invariant",
    "WALogger",
    "WATimeUtils",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelDatabaseApi",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLabelJidSync",
    "WAWebLabelSync",
    "WAWebListsGatingUtils",
    "WAWebListsLabelGatingUtils",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = 0;
    async function p(t, n) {
      o("WAWebListsLabelGatingUtils").labelsEditingEnabled() || s(0, 75240);
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
        c,
        d;
      o("WAWebListsGatingUtils").isListsEnabled() &&
        ((c = !0), (d = o("WAWebSchemaLabel").ListType.CUSTOM));
      var m = r("WAWebLabelSync").getLabelMutation(
        String(a),
        t,
        n,
        !1,
        l,
        c,
        d,
        i,
      );
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[Label] labelAddAction: id ",
            ", mutation generated",
          ])),
        a,
      );
      var p = {
        id: String(a),
        name: t,
        colorIndex: n,
        predefinedId: l,
        isActive: c,
        type: d,
      };
      return (
        await o("WAWebSyncdCoreApi").lockForSync(
          ["label"],
          [m],
          async function () {
            await o("WAWebDBLabelDatabaseApi").addOrEditLabel(p);
          },
        ),
        o("WAWebLabelCollection").LabelCollection.add(
          babelHelpers.extends({}, p),
        ),
        a
      );
    }
    async function _(e, t, n, a, i, l) {
      o("WAWebListsLabelGatingUtils").labelsEditingEnabled() || s(0, 75241);
      var u = o("WATimeUtils").unixTime(),
        d = r("WAWebLabelSync").getLabelMutation(
          e,
          t,
          a,
          !1,
          n != null ? n : m,
          i,
          l,
          u,
        );
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[Label] labelEditAction: id ",
            ", mutation generated",
          ])),
        e,
      );
      var p = {
        id: e,
        name: t,
        colorIndex: a,
        predefinedId: n != null ? n : null,
        isActive: i != null ? i : void 0,
        type: l != null ? l : void 0,
      };
      (await o("WAWebSyncdCoreApi").lockForSync(
        ["label"],
        [d],
        async function () {
          await o("WAWebDBLabelDatabaseApi").addOrEditLabel(p);
        },
      ),
        o("WAWebLabelCollection").LabelCollection.add(
          babelHelpers.extends({}, p),
          { merge: !0 },
        ));
    }
    async function f(e, t, n) {
      o("WAWebListsLabelGatingUtils").labelsEditingEnabled() || s(0, 75242);
      var a = await o(
          "WAWebDBLabelAssociationDatabaseApi",
        ).queryLabelAssociationsForLabelIds([e]),
        i = o("WATimeUtils").unixTime(),
        l = r("WAWebLabelSync").getLabelMutation(
          e,
          t,
          n,
          !0,
          m,
          void 0,
          void 0,
          i,
        ),
        u = [],
        c = a.filter(function (e) {
          return (
            e.type === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
          );
        });
      (c.length > 0 &&
        (u = await r("WAWebLabelJidSync").createLabelAssociationMutations(
          [{ id: e, type: "remove" }],
          c.map(function (e) {
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
        await o("WAWebSyncdCoreApi").lockForSync(
          ["label", "label-association", "chat"],
          [l].concat(u),
          async function () {
            (await o("WAWebDBLabelDatabaseApi").removeLabel(e),
              a.length > 0 &&
                (await o(
                  "WAWebDBLabelAssociationDatabaseApi",
                ).removeLabelAssociations(
                  a.map(function (e) {
                    return o(
                      "WAWebSchemaLabelAssociation",
                    ).createLabelAssociationPrimaryKey(e);
                  }),
                )));
          },
        ),
        o("WAWebLabelCollection").LabelCollection.remove(e));
    }
    ((l.labelAddAction = p),
      (l.labelEditAction = _),
      (l.labelDeleteAction = f));
  },
  98,
);
