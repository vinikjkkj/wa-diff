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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(t, n, a) {
      if (o("WAWebGroupHistoryUtils").isValidHistoryBundleToProcess(t, n)) {
        var i = await o(
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
            o("WAWebGroupHistoryGating").isGroupHistoryReceiverDedupEnabled() &&
            (await o(
              "WAWebGroupHistoryMessageManager",
            ).hasReceivedBundleForJoinSession(t.id.remote, t.id, i))
          ) {
            await o(
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
              await o(
                "WAWebUpdateGroupHistoryBundleStateAction",
              ).updateGroupHistoryBundleState(
                t.id,
                o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.DOWNLOADING,
              ),
              await t.downloadMedia(a),
              o(
                "WAWebGroupHistoryReceiverUserJourneyLogger",
              ).GroupHistoryReceiverUserJourneyLogger.downloadSucceeded(l));
          } catch (n) {
            (o(
              "WAWebGroupHistoryReceiverUserJourneyLogger",
            ).GroupHistoryReceiverUserJourneyLogger.downloadFailed(l),
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] download bundle failed - ",
                    "",
                  ])),
                r("WAWebSerializeError")(n),
              ),
              await o(
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
            var m = await d.arrayBuffer();
            await o(
              "WAWebGroupHistoryBundleProcessor",
            ).processMessageHistoryBundle(t, m, t.id.remote);
          } catch (e) {
            (o(
              "WAWebGroupHistoryReceiverUserJourneyLogger",
            ).GroupHistoryReceiverUserJourneyLogger.parseHistoryProtoFailed(
              l,
              0,
            ),
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Failed to process history bundle message - ",
                    "",
                  ])),
                r("WAWebSerializeError")(e),
              ),
              await o(
                "WAWebUpdateGroupHistoryBundleStateAction",
              ).updateGroupHistoryBundleState(
                t.id,
                o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.FAILED,
              ));
          }
        }
      }
    }
    l.default = u;
  },
  98,
);
