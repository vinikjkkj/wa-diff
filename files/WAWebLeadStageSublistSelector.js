__d(
  "WAWebLeadStageSublistSelector",
  [
    "Promise",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLeadListConstants",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a = yield o(
              "WAWebDBLabelAssociationDatabaseApi",
            ).queryLocalLabelAssociations([
              {
                associationId: t,
                type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
              },
            ]),
            i = yield (e || (e = n("Promise"))).all(
              a.map(function (e) {
                return o("WAWebSchemaLabel").getLabelTable().get(e.labelId);
              }),
            ),
            l = i.some(function (e) {
              return (
                (e == null ? void 0 : e.predefinedId) ===
                o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID
              );
            });
          if (!l) return null;
          var s = yield o(
            "WAWebDBLabelSublistDatabaseApi",
          ).getLabelSublistByChat(
            o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
            t,
          );
          return (r = s == null ? void 0 : s.subListId) != null ? r : null;
        })),
        u.apply(this, arguments)
      );
    }
    l.getLeadStageForChatFromSublist = s;
  },
  98,
);
