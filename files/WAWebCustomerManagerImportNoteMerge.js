__d(
  "WAWebCustomerManagerImportNoteMerge",
  [
    "WAWebApiChatCommon",
    "WAWebApiContact",
    "WAWebCustomerManagerFindOrCreateChat",
    "WAWebNoteAction",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = (t = e.note) == null ? void 0 : t.trim();
          if (!(n == null || n === "")) {
            yield o(
              "WAWebCustomerManagerFindOrCreateChat",
            ).customerManagerFindOrCreateChat(e.profileWid);
            var r = o("WAWebApiContact").getPhoneNumber(
                o("WAWebWidFactory").asUserLidOrThrow(e.profileWid),
              ),
              a =
                r != null
                  ? yield o("WAWebApiChatCommon").getChatRecord(r)
                  : null,
              i =
                r != null &&
                (a == null ? void 0 : a.accountLid) === e.profileWid.toString()
                  ? r
                  : e.profileWid;
            yield o("WAWebNoteAction").noteAddIfAbsentAction({
              canonicalChatJid: o("WAWebWidToJid").widToChatJid(i),
              chatJid: e.chatJid,
              content: n,
              type: "unstructured",
            });
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.writeMissingImportedNote = e;
  },
  98,
);
