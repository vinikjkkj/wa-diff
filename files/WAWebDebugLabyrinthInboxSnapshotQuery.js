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
      for (var r of (o =
        (a = t.snapshot_threads_with_messages) == null
          ? void 0
          : a.items_with_messages) != null
        ? o
        : []) {
        var o,
          a,
          i = r.item;
        if (!(i == null || i.id == null)) {
          var l = [];
          for (var s of (u = r.messages) != null ? u : []) {
            var u;
            l.push({
              encryptedPayload: s.encrypted_payload,
              encryptionVersion: s.encryption_version,
              messageId: s.id,
            });
          }
          n.push({ threadId: i.id, messages: l });
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
            {
              params: {
                lower_timestamp: e.lowerTimestamp,
                num_msgs: e.numMsgs,
                num_threads: e.numThreads,
                upper_timestamp: e.upperTimestamp,
              },
            },
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
