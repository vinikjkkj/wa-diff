__d(
  "WAWebChatThreadLoggingEventUploader",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatThreadLoggingUtils",
    "WAWebThreadLoggingAi",
    "WAWebThreadLoggingBiz",
    "WAWebThreadLoggingCoreConsumer",
    "WAWebThreadLoggingFalco",
    "WAWebThreadLoggingIntegrity",
    "WAWebThreadLoggingNotification",
    "WAWebThreadLoggingVoip",
    "getErrorSafe",
    "nullthrows",
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
            n == null || n.onStage == null || n.onStage("read-events");
            var _ = await this.eventStore.getBeforeInclusive(d),
              f = !0;
            try {
              f = await m(_, r("nullthrows")(this.secret));
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "CTLV2: Error uploading all events",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("ctlv2-upload-failure"),
                (f = !1));
            }
            if (i && f) {
              n == null || n.onStage == null || n.onStage("purge");
              var g = await this.eventStore.deleteBeforeInclusive(d);
              g !== _.length &&
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "uploadEvents: uploaded=",
                      " deleted=",
                      " mismatch!",
                    ])),
                  _.length,
                  g,
                );
            }
            return (
              n == null || n.onStage == null || n.onStage("save-progress"),
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
      if (n.length === 0) return !0;
      var r = o("WAWebABProps").getABPropConfigValue(
        "thread_interactions_falco_native_logging_enabled",
      );
      return r &&
        !(await o(
          "WAWebThreadLoggingFalco",
        ).canLoadThreadLoggingFalcoCanonicals())
        ? !1
        : (await Promise.all([
            o(
              "WAWebThreadLoggingCoreConsumer",
            ).ThreadInteractionCoreConsumerWamTrigger(n, r),
            o("WAWebThreadLoggingVoip").ThreadInteractionVoipWamTrigger(n, r),
            o("WAWebThreadLoggingBiz").ThreadInteractionBizWamTrigger(n, r),
            o("WAWebThreadLoggingAi").ThreadInteractionAiWamTrigger(n, r),
            o(
              "WAWebThreadLoggingNotification",
            ).ThreadInteractionNotificationWamTrigger(n, r),
            o(
              "WAWebThreadLoggingIntegrity",
            ).ThreadInteractionIntegrityWamTrigger(n, r),
          ]),
          !0);
    }
    l.ChatThreadLoggingEventUploaderImpl = d;
  },
  98,
);
