__d(
  "WAWebDebugLabyrinthRangeQuery",
  [
    "WABase64",
    "WAWebDebugLabyrinthRangeQuery.graphql",
    "WAWebDecodeLabyrinthEncryptedMessagePayload",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebRelayClient",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebDebugLabyrinthRangeQuery.graphql"));
    function u(e) {
      var t, n, a;
      r("vulture")("KrHW4i3Xal7aeXnF4Zq8JHNCiGQ=");
      var i = e == null ? void 0 : e.get_WAMessagingViewerThreadByORF;
      if (i == null || i.id == null) return null;
      var l = i.id,
        s = [];
      for (var u of (c = (d = i.messages) == null ? void 0 : d.edges) != null
        ? c
        : []) {
        var c, d;
        if (!(u == null || u.cursor == null)) {
          var m = u.node;
          if (!(m == null || m.id == null)) {
            var p = m.id;
            s.push({
              encryptedPayload: o(
                "WAWebDecodeLabyrinthEncryptedMessagePayload",
              ).decodeLabyrinthEncryptedMessagePayload(m.encrypted_payload),
              encryptionVersion:
                m.encryption_version == null
                  ? m.encryption_version
                  : o("WAWebLabyrinthOpaqueTypes").makeEncryptionVersion(
                      m.encryption_version,
                    ),
              epochAnonId: null,
              messageId: o("WAWebLabyrinthOpaqueTypes").makeMessageId(p),
            });
          }
        }
      }
      var _ = (t = i.messages) == null ? void 0 : t.page_info;
      return [
        {
          threadId: o("WAWebLabyrinthOpaqueTypes").makeServerThreadId(l),
          messages: s,
          pageInfo: {
            hasNextPage:
              (n = _ == null ? void 0 : _.has_next_page) != null ? n : !1,
            hasPreviousPage:
              (a = _ == null ? void 0 : _.has_previous_page) != null ? a : !1,
          },
        },
      ];
    }
    async function c(e) {
      r("vulture")("tPFbX06dhZedpfNTE94HahzKtqk=");
      var t = await o("WAWebRelayClient").fetchQuery(
        s,
        {
          device_id: e.ebDeviceId,
          message_count: e.messageCount,
          partial_thread_id: o("WABase64").encodeB64(e.partialThreadId),
        },
        { environmentType: "whatsapp_web" },
      );
      return u(t);
    }
    l.fetchLabyrinthRangeQuery = c;
  },
  98,
);
