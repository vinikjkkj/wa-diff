__d(
  "WmiMediaService",
  [
    "MAWCurrentUser",
    "MpsErrors",
    "MpsTypes",
    "WAHashUtils",
    "WAMediaStorageV2Gate",
    "WATimeUtils",
    "WmiChunkApi",
    "WmiErrorReport",
    "WmiMediaServiceDb",
    "WmiMediaServiceDownloadQueue",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.enqueueMediaDownload = async function (t) {
          await o("WmiMediaServiceDownloadQueue").MEDIA_DOWNLOAD_QUEUE.put(
            t.map(function (e) {
              return {
                attemptCount: 0,
                e2eePlatform: e.e2eePlatform,
                queueId: o(
                  "WmiMediaServiceDownloadQueue",
                ).generateDownloadQueueId(e.plaintextHash),
              };
            }),
          );
        }),
        (t.getMessageReferenceForMediaId = function (t) {
          return this.$1.runInTransaction(
            ["mediaReferences"],
            "readonly",
            async function (e) {
              var n = await e.stores.mediaReferences.readIndexRange(
                "[mediaId+updatedAtMs]",
                { only: [t] },
                { limit: 1, order: "desc" },
              );
              return n.at(0);
            },
            "WmiGetMessageReferenceForMediaId",
          );
        }),
        (t.getMediaStorageKey = function (t) {
          return this.$1.runInTransaction(
            ["mediaStorageKeys"],
            "readonly",
            function (e) {
              return e.stores.mediaStorageKeys.get(t);
            },
            "WmiMediaServiceGetMediaStorageKey",
          );
        }),
        (t.getReceiverFetchInfo = function (t) {
          return this.$1.runInTransaction(
            ["receiverFetchInfo"],
            "readonly",
            function (e) {
              return e.stores.receiverFetchInfo.get(t);
            },
            "WmiMediaServiceGetReceiverFetchInfo",
          );
        }),
        (t.handleMessageDeletion = function (t, n) {
          return this.$2(t, n);
        }),
        (t.handleThreadDeletion = function (t) {
          return this.$2(t);
        }),
        (t.storeMessageReferences = function (t) {
          return this.$1.runInTransaction(
            ["mediaReferences"],
            "readwrite",
            async function (e) {
              await e.stores.mediaReferences.bulkUpsert(
                "[threadId+messageId+mediaId]",
                t.map(function (e) {
                  return {
                    item: {
                      mediaId: e.mediaId,
                      messageId: e.messageId,
                      threadId: e.threadId,
                      updatedAtMs: o("MpsTypes").toTimestamp(
                        o("WATimeUtils").unixTimeMs(),
                      ),
                    },
                    selector: [e.threadId, e.messageId, e.mediaId],
                  };
                }),
              );
            },
            "WmiMediaServiceStoreMessageReferences",
          );
        }),
        (t.putMediaStorageKey = function (t) {
          return this.$1.runInTransaction(
            ["mediaStorageKeys"],
            "readwrite",
            async function (e) {
              await e.stores.mediaStorageKeys.bulkPut([t]);
            },
            "WmiMediaServicePutMediaStorageKey",
          );
        }),
        (t.upsertReceiverFetchInfo = function (t) {
          return this.$1.runInTransaction(
            ["receiverFetchInfo"],
            "readwrite",
            async function (e) {
              await e.stores.receiverFetchInfo.bulkPut([t]);
            },
            "WmiMediaServiceUpsertReceiverFetchInfo",
          );
        }),
        (t.$2 = async function (t, n) {
          var e = await this.$1.runInTransaction(
            ["mediaReferences", "mediaStorageKeys"],
            "readwrite",
            async function (e) {
              var r = n != null ? [t, n] : [t],
                a = await e.stores.mediaReferences.readIndexRange(
                  "[threadId+messageId+mediaId]",
                  { only: r },
                );
              await e.stores.mediaReferences.bulkDelete(
                a.map(function (e) {
                  return e.pk;
                }),
              );
              var i = new Set(
                  a.map(function (e) {
                    return e.mediaId;
                  }),
                ),
                l = await e.stores.mediaReferences.readIndexAnyOf(
                  "[mediaId+updatedAtMs]",
                  Array.from(i).map(function (e) {
                    return [e];
                  }),
                );
              return (
                l.forEach(function (e) {
                  return i.delete(e.mediaId);
                }),
                await e.stores.mediaStorageKeys.bulkDelete(
                  Array.from(i).map(function (e) {
                    return o("WAHashUtils").stringToPlaintextHash(e);
                  }),
                ),
                Array.from(i)
              );
            },
            "WmiMediaServiceDeleteMediaReferenceEntries",
          );
          e.length > 0 &&
            (await o("WmiChunkApi")
              .getChunkApi()
              .delete(
                Array.from(e).map(function (e) {
                  return o("WAHashUtils").stringToPlaintextHash(e);
                }),
              ),
            o("WAMediaStorageV2Gate").MediaStorageV2 != null &&
              (await s(
                o(
                  "WAMediaStorageV2Gate",
                ).MediaStorageV2.createCacheStorageMediaBlobStorage(
                  o("MAWCurrentUser").getID(),
                ),
                e.map(function (e) {
                  return o("WAHashUtils").stringToPlaintextHash(e);
                }),
              )));
        }),
        e
      );
    })();
    async function s(e, t) {
      var n = await Promise.allSettled(
        t.map(function (t) {
          return e.deleteBlobByPlaintextHash(t);
        }),
      );
      for (var r of n)
        r.status === "rejected" &&
          o("WmiErrorReport").reportWmiError(
            o("MpsErrors").MpsErrors.classify(
              r.reason,
              "delete_cache_storage",
              "purge_failed",
            ),
          );
    }
    var u = null;
    async function c(t) {
      if (u != null)
        throw o("MpsErrors").MpsErrors.error(
          "initialised_twice",
          "Media Service already initialised",
        );
      var n = await o("WmiMediaServiceDb").makeMediaServiceDb(t);
      u = new e(n);
    }
    function d() {
      return r("nullthrows")(u, "Media Service not initialised");
    }
    function m() {
      ((u = null), o("WmiChunkApi").clearChunkApi__TESTONLY());
    }
    ((l.MediaService = e),
      (l.wmiMediaServiceSetup = c),
      (l.mediaService = d),
      (l.wmiMediaServiceClear__TESTONLY = m));
  },
  98,
);
