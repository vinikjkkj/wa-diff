__d(
  "WAWebContactManagerExportData",
  [
    "WAWebChatCollection",
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
        n,
        r,
        a = o("WAWebContactCollection").ContactCollection.get(e.chatJid),
        i = o("WAWebNoteCollection").NoteCollection.maybeGetNoteByChatJid(
          e.chatJid,
        ),
        l = o("WAWebLabelCollection").LabelCollection.getLabelsForModel(
          String(e.chatJid),
          o("WAWebListItemParentType").LabelItemParentType.Chat,
        ),
        s = [];
      for (var u of l) {
        var c,
          d =
            (c = o("WAWebLabelCollection").LabelCollection.get(u)) == null
              ? void 0
              : c.name;
        d != null && s.push(d);
      }
      return {
        displayName:
          a != null ? o("WAWebFrontendContactGetters").getDisplayName(a) : "",
        phone:
          a != null
            ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(a)
                .displayName
            : "",
        username:
          a != null
            ? o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(a)
            : "",
        email: e.email,
        leadStage: e.leadStage,
        acquisitionSource: e.acquisitionSource,
        notes: (t = i == null ? void 0 : i.content) != null ? t : null,
        birthday: e.birthday,
        lastOrder: e.lastOrder,
        lastMessage:
          (n =
            (r = o("WAWebChatCollection").ChatCollection.get(e.chatJid)) == null
              ? void 0
              : r.t) != null
            ? n
            : null,
        address: e.address,
        altPhoneNumbers: e.altPhoneNumbers,
        lists: s,
        createdAt: e.createdAt,
        modifiedAt: e.modifiedAt,
      };
    }
    l.buildCustomerExportRecords = e;
  },
  98,
);
