__d(
  "WAWebHistorySyncHandlePushname",
  [
    "WALogger",
    "WAWebApiHistorySyncNotification",
    "WAWebBackendApi",
    "WAWebHistorySyncNotificationUtils",
    "WAWebLidAwareContactsDB",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n, a, i, l) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] start processing initial pushname",
          ])),
      ),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
          chunkDownloadFinishTimestamp: l,
          historySyncDownloadMetric: a,
          isSuccess: !0,
          startTs: n.historySyncStepStartedTs,
        }));
      var u = t.pushnames.map(function (e) {
        return { id: e.id || "", pushname: e.pushname || "" };
      });
      (await r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
        u,
        "HistoryMsgHandlerAction.handlePushName",
      ),
        await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
          n.msgKey,
          n.syncType,
          n.chunkOrder,
        ));
      var c = [];
      (t.pushnames.forEach(function (e) {
        var t = o("WAWebWidFactory").createUserWidOrThrow(e.id || ""),
          n = e.pushname || "";
        c.push({ contactId: t, pushname: n });
      }),
        await o("WAWebBackendApi").frontendSendAndReceive(
          "bulkUpdateContactPushnames",
          { pushnameUpdates: c },
        ),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
          historySyncDataAppliedMetric: i,
          startTs: n.historySyncStepStartedTs,
          isSuccess: !0,
        }),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] initial pushname stored, ",
              " records",
            ])),
          t.pushnames.length,
        ));
    }
    l.handlePushName = u;
  },
  98,
);
