__d(
  "WAWebDebugLabyrinthInboxSnapshotQuery",
  [
    "WAWebDebugLabyrinthInboxSnapshotQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebDebugLabyrinthInboxSnapshotQuery.graphql"));
    function u(e) {
      var t = e == null ? void 0 : e.get_wa_mailbox;
      if (t == null) return null;
      var n = [];
      for (var r of (o = (a = t.threads) == null ? void 0 : a.nodes) != null
        ? o
        : []) {
        var o, a;
        if (r != null) {
          var i = [];
          for (var l of (s = (u = r.messages) == null ? void 0 : u.edges) !=
          null
            ? s
            : []) {
            var s,
              u,
              c = l == null ? void 0 : l.node;
            c != null &&
              i.push({
                encryptedPayload: c.encrypted_payload,
                encryptionVersion: c.encryption_version,
                messageId: c.id,
              });
          }
          n.push({ threadId: r.id, messages: i });
        }
      }
      return n;
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebRelayClient").fetchQuery(
            s,
            { messageFirst: e.messageFirst, threadFirst: e.threadFirst },
            { environmentType: "whatsapp_web" },
          );
          return u(t);
        })),
        d.apply(this, arguments)
      );
    }
    l.fetchLabyrinthInboxSnapshot = c;
  },
  98,
);
