__d(
  "WAWebChatThreadLoggingEventUploader",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebChatThreadLoggingUtils",
    "WAWebThreadLoggingAi",
    "WAWebThreadLoggingBiz",
    "WAWebThreadLoggingCoreConsumer",
    "WAWebThreadLoggingIntegrity",
    "WAWebThreadLoggingNotification",
    "WAWebThreadLoggingVoip",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function () {
        function t(e, t) {
          ((this.eventStore = t), (this.metadataStore = e));
        }
        var a = t.prototype;
        return (
          (a.uploadEvents = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n,
                  a,
                  i = (n = t == null ? void 0 : t.purgeAfter) != null ? n : !0,
                  l = yield this.metadataStore.getOffset();
                if (l == null)
                  return (
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "ChatThreadLoggingBatchEventUploader: offset not in store!",
                        ])),
                    ),
                    -1
                  );
                var d =
                  (a = t == null ? void 0 : t.lastStartTs) != null
                    ? a
                    : o("WAWebChatThreadLoggingUtils").computeStartTs(
                        l,
                        o("WATimeUtils").unixTime() -
                          o("WATimeUtils").DAY_SECONDS,
                      );
                if (this.secret == null) {
                  var m = yield this.metadataStore.getSecret();
                  if (m == null)
                    return (
                      o("WALogger").WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "ChatThreadLoggingBatchEventUploader: secret not in store!",
                          ])),
                      ),
                      -1
                    );
                  this.secret = m;
                }
                var _ = yield this.eventStore.getBeforeInclusive(d);
                try {
                  yield p(_, r("WANullthrows")(this.secret));
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "CTLV2: Error uploading all events",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("ctlv2-upload-failure");
                }
                if (i) {
                  var f = yield this.eventStore.deleteBeforeInclusive(d);
                  f !== _.length &&
                    o("WALogger").ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "uploadEvents: uploaded=",
                          " deleted=",
                          " mismatch!",
                        ])),
                      _.length,
                      f,
                    );
                }
                return (
                  yield this.metadataStore.setLastUploadedStartTs(d),
                  _.length
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          t
        );
      })();
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield (d || (d = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = o("WAWebChatThreadLoggingUtils").getThreadDsForDb(
                        e.startTs,
                      ),
                      r = yield o(
                        "WAWebChatThreadLoggingUtils",
                      ).generateThreadID(
                        t,
                        e.chatId,
                        o("WAWebChatThreadLoggingUtils").getThreadMonthDs(
                          e.startTs,
                        ),
                      );
                    return { event: e, threadDs: n, threadId: r };
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          (o(
            "WAWebThreadLoggingCoreConsumer",
          ).ThreadInteractionCoreConsumerWamTrigger(r),
            o("WAWebThreadLoggingVoip").ThreadInteractionVoipWamTrigger(r),
            o("WAWebThreadLoggingBiz").ThreadInteractionBizWamTrigger(r),
            o("WAWebThreadLoggingAi").ThreadInteractionAiWamTrigger(r),
            o(
              "WAWebThreadLoggingNotification",
            ).ThreadInteractionNotificationWamTrigger(r),
            o(
              "WAWebThreadLoggingIntegrity",
            ).ThreadInteractionIntegrityWamTrigger(r));
        })),
        _.apply(this, arguments)
      );
    }
    l.ChatThreadLoggingEventUploaderImpl = m;
  },
  98,
);
