__d(
  "MpsReceiverFetchHydration",
  [
    "MpsErrors",
    "MpsMessageToBridgeWrapper",
    "MpsReceiverFetchCache",
    "MpsReceiverFetchInfoToBridge",
    "WAArmadilloXMA.pb",
    "WmiErrorReport",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      try {
        var t,
          n = o(
            "MpsMessageToBridgeWrapper",
          ).MpsMessageToBridgeWrapper.fromTopLevel(e),
          r = n.deserialize().encryptedTransportMessage(),
          a = r == null ? void 0 : r.consumerMessage(),
          i =
            a != null
              ? o(
                  "MpsReceiverFetchInfoToBridge",
                ).getReceiverFetchInfoFromConsumerMessage(a, n)
              : null,
          l =
            r == null || (t = r.armadillo()) == null
              ? void 0
              : t.extendedContentMessage(),
          s =
            l != null &&
            l.payload.targetType ===
              o("WAArmadilloXMA.pb")
                .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
                .MSG_RECEIVER_FETCH
              ? l.payload.contentRef
              : null;
        await Promise.all([
          i != null
            ? o("MpsReceiverFetchCache").getOrFetchStickerReceiverFetchInfo(
                i.receiverFetchId,
              )
            : Promise.resolve(null),
          s != null
            ? o("MpsReceiverFetchCache").getOrFetchXMAReceiverFetchInfo(s)
            : Promise.resolve(null),
        ]);
      } catch (e) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.classify(
            e,
            "hydrate_receiver_fetch_cache",
            "infra",
          ),
          { loggerProject: "maw_receiver_fetch" },
        );
      }
    }
    l.hydrateReceiverFetchInfoFromMessage = e;
  },
  98,
);
