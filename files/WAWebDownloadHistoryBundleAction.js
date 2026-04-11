__d(
  "WAWebDownloadHistoryBundleAction",
  [
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebGroupHistoryBundleProcessor",
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
          if (o("WAWebGroupHistoryUtils").isValidHistoryBundleToProcess(t, n)) {
            var i = t.id.remote.toJid();
            try {
              (o(
                "WAWebGroupHistoryReceiverUserJourneyLogger",
              ).GroupHistoryReceiverUserJourneyLogger.downloadStarted(
                i,
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
                ).GroupHistoryReceiverUserJourneyLogger.downloadSucceeded(i));
            } catch (n) {
              (o(
                "WAWebGroupHistoryReceiverUserJourneyLogger",
              ).GroupHistoryReceiverUserJourneyLogger.downloadFailed(i),
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
              var l = o("WAWebFrontendMsgGetters").getMediaData(t.unsafe()),
                u = l == null ? void 0 : l.mediaBlob,
                c;
              if (
                (u instanceof Blob
                  ? (c = u)
                  : (c = u == null ? void 0 : u.getBlob()),
                !c)
              )
                throw r("err")("group history blob is null");
              var d = yield c.arrayBuffer();
              yield o(
                "WAWebGroupHistoryBundleProcessor",
              ).processMessageHistoryBundle(t, d, t.id.remote);
            } catch (e) {
              (o(
                "WAWebGroupHistoryReceiverUserJourneyLogger",
              ).GroupHistoryReceiverUserJourneyLogger.parseHistoryProtoFailed(
                i,
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
