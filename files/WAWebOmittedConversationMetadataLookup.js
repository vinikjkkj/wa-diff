__d(
  "WAWebOmittedConversationMetadataLookup",
  [
    "Promise",
    "WAJids",
    "WAWebOmittedConversationMetadataCapabilities",
    "WAWebOmittedConversationMetadataIdentity",
    "WAWebOmittedConversationMetadataStore",
    "WAWebSchemaOmittedConversationMetadata",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield c(e);
          return t == null
            ? null
            : o(
                "WAWebOmittedConversationMetadataIdentity",
              ).getStoredOmittedMetadataIdentity(t);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !o(
              "WAWebOmittedConversationMetadataCapabilities",
            ).canReadOmittedMetadata()
          )
            return null;
          var r = yield o(
            "WAWebOmittedConversationMetadataStore",
          ).getCurrentOmittedMetadataSnapshot();
          if (r == null) return null;
          var a = o("WAJids").validateChatJid(
            o("WAWebWidFactory").createWid(t.id).toJid(),
          );
          if (a == null) return null;
          var i =
              t.historyChatId == null || t.historyChatId === ""
                ? null
                : o("WAJids").validateChatJid(
                    o("WAWebWidFactory").createWid(t.historyChatId).toJid(),
                  ),
            l =
              t.accountLid == null
                ? null
                : o("WAJids").validateLidUserJid(
                    o("WAWebWidFactory").createWid(t.accountLid).toJid(),
                  ),
            s = o(
              "WAWebSchemaOmittedConversationMetadata",
            ).getOmittedConversationMetadataTable(),
            u = yield (e || (e = n("Promise"))).all([
              s.bulkGet([a, i, l].filter(Boolean)),
              s.equals(["accountLid"], l != null ? l : a),
            ]),
            c = u[0],
            d = u[1];
          return o(
            "WAWebOmittedConversationMetadataIdentity",
          ).selectOmittedMetadataForChat(
            []
              .concat(c, d)
              .filter(Boolean)
              .filter(function (e) {
                return e.snapshotId === r.snapshotId;
              }),
            { id: a, historyId: i, accountLid: l },
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.getOmittedMetadataIdentityForChat = s;
  },
  98,
);
