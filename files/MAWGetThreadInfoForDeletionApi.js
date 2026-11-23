__d(
  "MAWGetThreadInfoForDeletionApi",
  [
    "FBLogger",
    "MAWInMemoryThreadStore",
    "MpsMessageToBridgeWrapper",
    "MpsTypes",
    "WALogger",
    "WAMsg",
    "WAResultOrError",
    "WAStanzaUtils",
    "WebMps",
    "cr:19391",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t = n("cr:19391");
      return t == null
        ? o("WebMps").mps().loadMessages(e)
        : t
            .runMps(
              {
                boundary: "load_messages",
                code: "read_failed",
                subject: e.debug.purpose,
              },
              function (n) {
                return t.loadMessages(n, e);
              },
            )
            .then(function (e) {
              return e.match({
                err: o("WAResultOrError").makeError,
                ok: o("WAResultOrError").makeResult,
              });
            });
    }
    function c(t) {
      var n = o("MAWInMemoryThreadStore")
        .getNonTxReadonlyInMemoryThreadStore()
        .get(t);
      if (n == null) {
        var a = "Thread was null when getting thread for deletion";
        throw (
          o("WALogger").ERROR(
            e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            a,
          ),
          r("FBLogger")("messenger_web").mustfixThrow(a)
        );
      }
      return n.jid;
    }
    var d = async function (t) {
      var e,
        n = c(t),
        r = await u({
          config: {
            persistToReverb: "no-persist",
            shouldFetchSupplementals: !1,
            shouldFetchTags: !1,
            shouldIgnoreLocalOnly: !1,
            strategy: "local-only",
            tagsFilter: "all",
            useMessageVisibility: !1,
          },
          debug: { purpose: "getThreadInfoForDeletion" },
          direction: "desc",
          from: [o("MpsTypes").toTimestamp(Number.MAX_SAFE_INTEGER), null],
          numMessages: Number.MAX_SAFE_INTEGER,
          threadId: o("MpsTypes").toThreadId(n),
        });
      if (r.success === !1)
        throw (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to load MPS messages for thread deletion",
              ])),
          ),
          r.error
        );
      var a = r.value.messages,
        i = a.map(function (e) {
          var t = o(
            "MpsMessageToBridgeWrapper",
          ).MpsMessageToBridgeWrapper.fromTopLevel(e.toplevelProtobuf);
          return o("WAMsg").craftWAMsgIdString({
            author: t.getAuthor(),
            chat: t.getChatJid(),
            externalId: o("WAStanzaUtils").toStanzaId(t.getExternalId()),
          });
        }),
        l = (e = a[0]) == null ? void 0 : e.toplevelProtobuf;
      return {
        chatJid: n,
        deletedMessages: i,
        newestMsgTs:
          l != null
            ? o("MpsMessageToBridgeWrapper")
                .MpsMessageToBridgeWrapper.fromTopLevel(l)
                .getUnixTs()
            : void 0,
      };
    };
    l.getThreadInfoForDeletion = d;
  },
  98,
);
