__d(
  "WACreateHandleInfoBulletin",
  [
    "Promise",
    "WACleanDirtyBitsProtocol",
    "WAHandleDirtyBitsProtocol",
    "WAHandleThreadMetadata",
    "WALogger",
    "WAResultOrError",
    "WASmaxDecisionTreeUtils",
    "WASmaxEdgeEdgeRoutingRPC",
    "WASmaxMessageRequestSpamMarkerRPC",
    "WASmaxOfflineCompletionRPC",
    "WASmaxOfflinePreviewRPC",
    "WASmaxOfflineThreadMetadataRPC",
    "WATimeUtils",
    "WAUnknownStanzaError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = n("Promise"))).resolve(
        o("WAResultOrError").makeResult("NO_ACK"),
      );
    function c(t) {
      return function (a) {
        var r = o("WASmaxDecisionTreeUtils").firstChild(a);
        if (r.success === !1)
          return (s || (s = n("Promise"))).resolve(
            o("WAUnknownStanzaError").unknownStanzaError,
          );
        var i = r.value.tag;
        switch (i) {
          case "edge_routing": {
            var l,
              c,
              d = o("WASmaxEdgeEdgeRoutingRPC").receiveEdgeRoutingRPC(
                a,
              ).parsedRequest,
              m = d.edgeRoutingRoutingInfoElementValue;
            return (l =
              (c = t.comms) == null
                ? void 0
                : c
                    .handleEdgeRoutingInfo({ edgeInfo: m })
                    .then(o("WAResultOrError").makeResult)) != null
              ? l
              : u;
          }
          case "offline_preview": {
            var p,
              _,
              f = o("WASmaxOfflinePreviewRPC").receivePreviewRPC(
                a,
              ).parsedRequest,
              g = {
                count: f.offlinePreviewCount,
                message: f.offlinePreviewMessage,
                receipt: f.offlinePreviewReceipt,
                notification: f.offlinePreviewNotification,
                appdata: f.offlinePreviewAppdata,
              };
            return (p =
              (_ = t.offline) == null
                ? void 0
                : _.handleOfflineStart(g).then(
                    o("WAResultOrError").makeResult,
                  )) != null
              ? p
              : u;
          }
          case "offline": {
            var h,
              y,
              C = o("WASmaxOfflineCompletionRPC").receiveCompletionRPC(a)
                .parsedRequest.offlineCount;
            return (h =
              (y = t.offline) == null
                ? void 0
                : y
                    .handleOfflineEnd({ offlineCount: C })
                    .then(o("WAResultOrError").makeResult)) != null
              ? h
              : u;
          }
          case "thread_metadata": {
            var b = o("WASmaxOfflineThreadMetadataRPC")
              .receiveThreadMetadataRPC(a)
              .parsedRequest.threadMetadataItem.map(function (e) {
                var t = e.from,
                  n = e.t;
                return { from: t, t: o("WATimeUtils").castToUnixTime(n) };
              });
            return o("WAHandleThreadMetadata")
              .handleThreadMetadata(b)
              .then(function () {
                var e,
                  n = (e = t.offline) == null ? void 0 : e.handleThreadMetadata;
                return n == null
                  ? u
                  : n(b).then(o("WAResultOrError").makeResult);
              });
          }
          case "spam": {
            var v,
              S = o("WASmaxMessageRequestSpamMarkerRPC").receiveSpamMarkerRPC(a)
                .parsedRequest.spamState,
              R = (v = t.spam) == null ? void 0 : v.handleSpam;
            return R == null
              ? u
              : R({ spamState: S }).then(o("WAResultOrError").makeResult);
          }
          case "dirty": {
            var L = o("WAHandleDirtyBitsProtocol").parseDirtyBit(a),
              E = L.dirtyBitTimestamp,
              k = L.dirtyBitType,
              I = function () {
                return o("WACleanDirtyBitsProtocol").cleanDirtyBitsProtocol({
                  timestamp: E,
                  type: k,
                });
              };
            switch (k) {
              case "groups": {
                var T, D;
                return (T =
                  (D = t.groupMessage) == null || D.handleGroupDirtyBit == null
                    ? void 0
                    : D.handleGroupDirtyBit({
                        dirtyBitTimestamp: E,
                        cleanDirtyBits: I,
                      }).then(o("WAResultOrError").makeResult)) != null
                  ? T
                  : u;
              }
              case "account_sync": {
                var x, $;
                return (x =
                  ($ = t.accountSync) == null
                    ? void 0
                    : $.handleAccountSyncDirtyBit({
                        dirtyBitTimestamp: E,
                        cleanDirtyBits: I,
                      }).then(o("WAResultOrError").makeResult)) != null
                  ? x
                  : u;
              }
              case "newsletter_metadata": {
                var P, N;
                return (P =
                  (N = t.newsletter) == null
                    ? void 0
                    : N.handleNewsletterDirtyBit({
                        dirtyBitTimestamp: E,
                        cleanDirtyBits: I,
                      }).then(o("WAResultOrError").makeResult)) != null
                  ? P
                  : u;
              }
              case "native_contact_restore":
                return u;
              default: {
                var M, w;
                return (M =
                  (w = t.syncd) == null
                    ? void 0
                    : w
                        .handleSyncdDirtyBit({
                          dirtyBitTimestamp: E,
                          cleanDirtyBits: I,
                        })
                        .then(o("WAResultOrError").makeResult)) != null
                  ? M
                  : u;
              }
            }
          }
          default:
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleInfoBulletin: unknown incoming <ib>: ",
                    "",
                  ])),
                a.toString(),
              ),
              (s || (s = n("Promise"))).resolve(
                o("WAUnknownStanzaError").unknownStanzaError,
              )
            );
        }
      };
    }
    l.createHandleInfoBulletin = c;
  },
  98,
);
