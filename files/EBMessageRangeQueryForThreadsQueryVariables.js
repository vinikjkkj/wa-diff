__d(
  "EBMessageRangeQueryForThreadsQueryVariables",
  [
    "Base64Utils",
    "EBGraphQLTypeUtils",
    "EBMessageRangeQueryUtils",
    "EBSourceTypes",
    "LSEncryptedBackupsMessagesRangeQueryDirection",
    "WAJids",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c) {
      var d = e.map(function (e) {
        var t = e.direction,
          n = e.from,
          d = n[0],
          m = e.chatJid,
          p = e.numMessages,
          _ =
            t === "before"
              ? r("LSEncryptedBackupsMessagesRangeQueryDirection").BEFORE
              : r("LSEncryptedBackupsMessagesRangeQueryDirection").AFTER,
          f = o("WAJids").threadIdForChatJid(m);
        return JSON.stringify({
          restore_context: {
            act_thread_id: f,
            client_mek_fbids: c,
            site: "www",
            source: o("EBSourceTypes").castTaskCreationSourceToLSTaskSource(u),
            tam_thread_subtype: 0,
          },
          success: {
            device_context: {
              device_id: a,
              locally_available_epochs: i,
              raw_tokens: {
                mailbox_root_key: o("Base64Utils").fromArrayBuffer(l),
                ocmf_client_state_blob: o("Base64Utils").fromArrayBuffer(s),
              },
            },
            direction: _,
            query_num_messages: p != null ? p : void 0,
            reference_timestamp: o(
              "EBMessageRangeQueryUtils",
            ).safeTimestampMsString(d),
            server_thread_key: o("EBGraphQLTypeUtils").threadIdToThreadIdInt(f),
            source: o("EBSourceTypes").castTaskCreationSourceToLSTaskSource(u),
          },
        });
      });
      return {
        app_id: n,
        includeAttachmentData: r("gkx")("23960"),
        restore_payload_strings: d,
        restore_type:
          t === "initial" ? "INITIAL_RESTORE" : "RANGE_QUERY_RESTORE",
      };
    }
    l.messageRangeQueryForThreadsQueryVariables = e;
  },
  98,
);
