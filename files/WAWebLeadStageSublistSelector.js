__d(
  "WAWebLeadStageSublistSelector",
  [
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLeadListConstants",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t,
        n = await o(
          "WAWebDBLabelAssociationDatabaseApi",
        ).queryLocalLabelAssociations([
          {
            associationId: e,
            type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
          },
        ]),
        r = await Promise.all(
          n.map(function (e) {
            return o("WAWebSchemaLabel").getLabelTable().get(e.labelId);
          }),
        ),
        a = r.some(function (e) {
          return o("WAWebLeadListConstants").isLeadListPredefinedId(
            e == null ? void 0 : e.predefinedId,
          );
        });
      if (!a) return null;
      var i = await o("WAWebDBLabelSublistDatabaseApi").getLabelSublistByChat(
        o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
        e,
      );
      return (t = i == null ? void 0 : i.subListId) != null ? t : null;
    }
    l.getLeadStageForChatFromSublist = e;
  },
  98,
);
