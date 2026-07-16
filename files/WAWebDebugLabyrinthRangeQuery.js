__d(
  "WAWebDebugLabyrinthRangeQuery",
  [
    "WAWebDebugLabyrinthRangeQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebDebugLabyrinthRangeQuery.graphql"));
    function u(e) {
      var t,
        n,
        r,
        o = e == null ? void 0 : e.get_WAMessagingViewerThreadByORF;
      if (o == null || o.id == null) return null;
      var a = [];
      for (var i of (l = (s = o.messages) == null ? void 0 : s.edges) != null
        ? l
        : []) {
        var l, s;
        if (!(i == null || i.cursor == null)) {
          var u = i.node;
          u == null ||
            u.id == null ||
            a.push({
              encryptedPayload: u.encrypted_payload,
              encryptionVersion: u.encryption_version,
              messageId: u.id,
            });
        }
      }
      var c = (t = o.messages) == null ? void 0 : t.page_info;
      return [
        {
          threadId: o.id,
          messages: a,
          pageInfo: {
            hasNextPage:
              (n = c == null ? void 0 : c.has_next_page) != null ? n : !1,
            hasPreviousPage:
              (r = c == null ? void 0 : c.has_previous_page) != null ? r : !1,
          },
        },
      ];
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
              device_id: e.ebDeviceId,
              message_count: e.messageCount,
              partial_thread_id: e.partialThreadId,
            },
            { environmentType: "whatsapp_web" },
          );
          return u(t);
        })),
        d.apply(this, arguments)
      );
    }
    l.fetchLabyrinthRangeQuery = c;
  },
  98,
);
