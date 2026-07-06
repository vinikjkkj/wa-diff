__d(
  "WAWebDownloadHistoryBundleAction",
  [
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebGroupHistoryBundleProcessor",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryMessageManager",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebGroupHistoryReceiverUserJourneyLogger",
    "WAWebGroupHistoryUtils",
    "WAWebSerializeError",
    "WAWebUpdateGroupHistoryBundleStateAction",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (
            !o("WAWebGroupHistoryUtils").isValidHistoryBundleToProcess(t, n)
          ) {
            o("WAWebGroupHistoryUtils").isGroupHistoryBundleExpired(t) &&
              o(
                "WAWebGroupHistoryReceiverUserJourneyLogger",
              ).GroupHistoryReceiverUserJourneyLogger.downloadExpired(
                t.id.remote.toJid(),
              );
            return;
          }
          var i = yield o(
            "WAWebGroupHistoryMessageManager",
          ).findMostRecentJoinSystemMessage(t.id.remote, t.id);
          if (
            !(
              i != null &&
              !o("WAWebGroupHistoryUtils").isJoinMessageWithinReceiverWindow(i)
            )
          ) {
            if (
              !a.isUserInitiated &&
              o(
                "WAWebGroupHistoryGating",
              ).isGroupHistoryReceiverDedupEnabled() &&
              (yield o(
                "WAWebGroupHistoryMessageManager",
              ).hasReceivedBundleForJoinSession(t.id.remote, t.id, i))
            ) {
              yield o(
                "WAWebUpdateGroupHistoryBundleStateAction",
              ).updateGroupHistoryBundleState(
                t.id,
                o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.DEDUPED,
              );
              return;
            }
            var l = t.id.remote.toJid();
            try {
              (o(
                "WAWebGroupHistoryReceiverUserJourneyLogger",
              ).GroupHistoryReceiverUserJourneyLogger.downloadStarted(
                l,
                a.isUserInitiated,
              ),
                yield o(
                  "WAWebUpdateGroupHistoryBundleStateAction",
                ).updateGroupHistoryBundleState(
                  t.id,
                  o("WAWebGroupHistoryMsgData.flow")
                    .MessageHistoryBundleProcessState.DOWNLOADING,
                ),
                yield t.downloadMedia(a),
                o(
                  "WAWebGroupHistoryReceiverUserJourneyLogger",
                ).GroupHistoryReceiverUserJourneyLogger.downloadSucceeded(l));
            } catch (n) {
              (o(
                "WAWebGroupHistoryReceiverUserJourneyLogger",
              ).GroupHistoryReceiverUserJourneyLogger.downloadFailed(
                l,
                "download_failed",
              ),
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] download bundle failed - ",
                      "",
                    ])),
                  r("WAWebSerializeError")(n),
                ),
                yield o(
                  "WAWebUpdateGroupHistoryBundleStateAction",
                ).updateGroupHistoryBundleState(
                  t.id,
                  o("WAWebGroupHistoryMsgData.flow")
                    .MessageHistoryBundleProcessState.FAILED,
                ));
              return;
            }
            try {
              var u = o("WAWebFrontendMsgGetters").getMediaData(t.unsafe()),
                c = u == null ? void 0 : u.mediaBlob,
                d;
              if (
                (c instanceof Blob
                  ? (d = c)
                  : (d = c == null ? void 0 : c.getBlob()),
                !d)
              )
                throw r("err")("group history blob is null");
              var m = yield d.arrayBuffer();
              yield o(
                "WAWebGroupHistoryBundleProcessor",
              ).processMessageHistoryBundle(t, m, t.id.remote);
            } catch (e) {
              (o(
                "WAWebGroupHistoryReceiverUserJourneyLogger",
              ).GroupHistoryReceiverUserJourneyLogger.parseHistoryProtoFailed(
                l,
                0,
                void 0,
                "parse_failed",
              ),
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] Failed to process history bundle message - ",
                      "",
                    ])),
                  r("WAWebSerializeError")(e),
                ),
                yield o(
                  "WAWebUpdateGroupHistoryBundleStateAction",
                ).updateGroupHistoryBundleState(
                  t.id,
                  o("WAWebGroupHistoryMsgData.flow")
                    .MessageHistoryBundleProcessState.FAILED,
                ));
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
