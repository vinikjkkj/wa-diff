__d(
  "WAWebCustomerManagerImportNoteMerge",
  [
    "WAWebApiChatCommon",
    "WAWebApiContact",
    "WAWebCustomerManagerFindOrCreateChat",
    "WAWebNoteAction",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t,
        n = (t = e.note) == null ? void 0 : t.trim();
      if (!(n == null || n === "")) {
        await o(
          "WAWebCustomerManagerFindOrCreateChat",
        ).customerManagerFindOrCreateChat(e.profileWid);
        var r = o("WAWebApiContact").getPhoneNumber(
            o("WAWebWidFactory").asUserLidOrThrow(e.profileWid),
          ),
          a = r != null ? await o("WAWebApiChatCommon").getChatRecord(r) : null,
          i =
            r != null &&
            (a == null ? void 0 : a.accountLid) === e.profileWid.toString()
              ? r
              : e.profileWid;
        await o("WAWebNoteAction").noteAddIfAbsentAction({
          canonicalChatJid: o("WAWebWidToJid").widToChatJid(i),
          chatJid: e.chatJid,
          content: n,
          type: "unstructured",
        });
      }
    }
    l.writeMissingImportedNote = e;
  },
  98,
);
