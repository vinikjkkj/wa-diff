__d(
  "MpsMediaManagerV2",
  [
    "MAWCurrentUser",
    "MpsMediaEntryCache",
    "MpsMessageToBridgeWrapper",
    "MpsToBridgeMessageId",
    "WAJids",
    "WAMediaManager",
    "WAMediaStorageV2Gate",
    "WAMediaUtils",
    "WAStanzaUtils",
    "WebMps",
    "WmiChunkApi",
    "WmiMediaService",
    "cr:19391",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = n("cr:19391");
      return t == null
        ? o("WebMps")
            .mps()
            .loadMessage(e)
            .then(function (e) {
              var t = e.value;
              return t;
            })
        : t
            .runMps(
              {
                boundary: "load_message",
                code: "read_failed",
                subject: e.debug.purpose,
              },
              function (n) {
                return t.loadMessage(n, e);
              },
            )
            .then(function (e) {
              return e.getOrNull();
            });
    }
    var s = async function (n) {
      var t = o("MpsToBridgeMessageId").bridgeMsgIdToMps(n),
        r = t.messageId,
        a = t.threadId,
        i = await e({
          config: {
            shouldFetchSupplementals: !1,
            shouldFetchTags: !1,
            strategy: "local-first",
          },
          debug: { purpose: "mps_media_manager" },
          messageId: r,
          threadId: a,
        });
      if (i) {
        var l = o(
            "MpsMessageToBridgeWrapper",
          ).MpsMessageToBridgeWrapper.fromTopLevel(i.toplevelProtobuf),
          s = l.getAuthor();
        if (!o("WAJids").isAuthorSystem(s))
          return {
            protocolMsgId: {
              author: s,
              chat: l.getChatJid(),
              externalId: o("WAStanzaUtils").toStanzaId(l.getExternalId()),
            },
            sortOrderMs: l.message.timestampMs,
          };
      }
    };
    function u(e) {
      var t = e.mediaEntry,
        n = e.message,
        r = o("MpsToBridgeMessageId").mpsToBridgeMsgId(n.threadId, n.messageId);
      return new Map([[r, t]]);
    }
    async function c(t) {
      var n = o("MpsMediaEntryCache").getEntry(t);
      if (n != null) return u(n);
      var r = await o("WmiMediaService")
        .mediaService()
        .getMessageReferenceForMediaId(t);
      if (r == null) return null;
      var a = await e({
        config: {
          shouldFetchSupplementals: !1,
          shouldFetchTags: !1,
          strategy: "local-only",
        },
        debug: { purpose: "MpsMediaManagerV2-getMediaEntriesWithFallback" },
        messageId: r.messageId,
        threadId: r.threadId,
      });
      a != null && o("MpsMediaEntryCache").hydrateCache(a.toplevelProtobuf);
      var i = o("MpsMediaEntryCache").getEntry(t);
      return i != null ? u(i) : null;
    }
    var d = {
        getStoredMediaKey: async function (t) {
          var e = await o("WmiMediaService")
            .mediaService()
            .getMediaStorageKey(t);
          return e == null
            ? null
            : {
                mediaKey: o("WAMediaUtils").castToMediaKey(e.mediaKey),
                mediaTypeDetails: e.mediaTypeDetails,
              };
        },
        storeMediaKey: function (t, n) {
          return o("WmiMediaService")
            .mediaService()
            .putMediaStorageKey(
              babelHelpers.extends({}, n, { plaintextHash: t }),
            );
        },
      },
      m = null;
    function p() {
      if (m == null) {
        var e = o("WmiChunkApi").getChunkApi();
        m = o("WAMediaManager").createMediaManager({
          blobStorage:
            o("WAMediaStorageV2Gate").MediaStorageV2 == null
              ? void 0
              : o(
                  "WAMediaStorageV2Gate",
                ).MediaStorageV2.createCacheStorageMediaBlobStorage(
                  o("MAWCurrentUser").getID(),
                ),
          dbCallbacks: {
            deleteChunkByPlaintextHash: async function (n) {
              await e.delete([n]);
            },
            getChunkByPlaintextHash: async function (n) {
              var t = await e.get(n);
              return t == null ? void 0 : t.blobData;
            },
            getChunkWithPreviewFlagByPlaintextHash: async function (n) {
              var t = await e.get(n);
              return (t == null ? void 0 : t.blobData) == null
                ? null
                : {
                    blobData: t.blobData,
                    isProgressivePreview: t.isProgressivePreview,
                  };
            },
            getMediaEntries: c,
            getProtocolMsgIdAndSortOrderMs: s,
            storeChunkByPlaintextHash: async function (n) {
              var t = n.blobData,
                r = n.isProgressivePreview,
                o = n.mimetype,
                a = n.plaintextHash;
              await e.store(a, t, o, r != null ? r : !1);
            },
          },
          mediaKeyStore:
            o("WAMediaStorageV2Gate").MediaStorageV2 == null ? null : d,
        });
      }
      return m;
    }
    function _() {
      m = null;
    }
    ((l.mpsMediaManager = p), (l.reset__TEST_ONLY = _));
  },
  98,
);
