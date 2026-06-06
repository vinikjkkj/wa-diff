__d(
  "WAWebChatThreadLoggingEventUploader",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function () {
        function t(e, t) {
          ((this.eventStore = t), (this.metadataStore = e));
        }
        var n = t.prototype;
        return (
          (n.uploadEvents = async function (n) {
            var t,
              a,
              i = (t = n == null ? void 0 : n.purgeAfter) != null ? t : !0,
              l = await this.metadataStore.getOffset();
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
              (a = n == null ? void 0 : n.lastStartTs) != null
                ? a
                : o("WAWebChatThreadLoggingUtils").computeStartTs(
                    l,
                    o("WATimeUtils").unixTime() - o("WATimeUtils").DAY_SECONDS,
                  );
            if (this.secret == null) {
              var p = await this.metadataStore.getSecret();
              if (p == null)
                return (
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "ChatThreadLoggingBatchEventUploader: secret not in store!",
                      ])),
                  ),
                  -1
                );
              this.secret = p;
            }
            var _ = await this.eventStore.getBeforeInclusive(d);
            try {
              await m(_, r("WANullthrows")(this.secret));
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
              var f = await this.eventStore.deleteBeforeInclusive(d);
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
              await this.metadataStore.setLastUploadedStartTs(d),
              _.length
            );
          }),
          t
        );
      })();
    async function m(e, t) {
      var n = await Promise.all(
        e.map(async function (e) {
          var n = o("WAWebChatThreadLoggingUtils").getThreadDsForDb(e.startTs),
            r = await o("WAWebChatThreadLoggingUtils").generateThreadID(
              t,
              e.chatId,
              o("WAWebChatThreadLoggingUtils").getThreadMonthDs(e.startTs),
            );
          return { event: e, threadDs: n, threadId: r };
        }),
      );
      (o(
        "WAWebThreadLoggingCoreConsumer",
      ).ThreadInteractionCoreConsumerWamTrigger(n),
        o("WAWebThreadLoggingVoip").ThreadInteractionVoipWamTrigger(n),
        o("WAWebThreadLoggingBiz").ThreadInteractionBizWamTrigger(n),
        o("WAWebThreadLoggingAi").ThreadInteractionAiWamTrigger(n),
        o(
          "WAWebThreadLoggingNotification",
        ).ThreadInteractionNotificationWamTrigger(n),
        o("WAWebThreadLoggingIntegrity").ThreadInteractionIntegrityWamTrigger(
          n,
        ));
    }
    l.ChatThreadLoggingEventUploaderImpl = d;
  },
  98,
);
