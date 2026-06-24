__d(
  "WAWebCustomerManagerExportData",
  [
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebLabelCollection",
    "WAWebListItemParentType",
    "WAWebNoteCollection",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.map(s);
    }
    function s(e) {
      var t,
        n = o("WAWebContactCollection").ContactCollection.get(e.chatJid),
        r = o("WAWebNoteCollection").NoteCollection.maybeGetNoteByChatJid(
          e.chatJid,
        ),
        a = o("WAWebLabelCollection").LabelCollection.getLabelsForModel(
          String(e.chatJid),
          o("WAWebListItemParentType").LabelItemParentType.Chat,
        ),
        i = [];
      for (var l of a) {
        var s,
          u =
            (s = o("WAWebLabelCollection").LabelCollection.get(l)) == null
              ? void 0
              : s.name;
        u != null && i.push(u);
      }
      return {
        displayName:
          n != null ? o("WAWebFrontendContactGetters").getDisplayName(n) : "",
        phone:
          n != null
            ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(n)
                .displayName
            : "",
        username:
          n != null
            ? o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(n)
            : "",
        email: e.email,
        leadStage: e.leadStage,
        acquisitionSource: e.acquisitionSource,
        notes: (t = r == null ? void 0 : r.content) != null ? t : null,
        birthday: e.birthday,
        lastOrder: e.lastOrder,
        address: e.address,
        altPhoneNumbers: e.altPhoneNumbers,
        lists: i,
        createdAt: e.createdAt,
        modifiedAt: e.modifiedAt,
      };
    }
    l.buildCustomerExportRecords = e;
  },
  98,
);
