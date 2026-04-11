__d(
  "WAWebHistorySyncHandlePushname",
  [
    "WALogger",
    "WAWebApiHistorySyncNotification",
    "WAWebBackendApi",
    "WAWebHistorySyncNotificationUtils",
    "WAWebLidAwareContactsDB",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n, r, o) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] start processing initial pushname",
                ])),
            ),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric(
                a,
                n.historySyncStepStartedTs,
                !0,
                l,
              ));
            var u = t.pushnames.map(function (e) {
              return { id: e.id || "", pushname: e.pushname || "" };
            });
            (yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
              u,
              "HistoryMsgHandlerAction.handlePushName",
            ),
              yield o(
                "WAWebApiHistorySyncNotification",
              ).updateCurrentlyProcessed(n.msgKey, n.syncType, n.chunkOrder));
            var c = [];
            (t.pushnames.forEach(function (e) {
              var t = o("WAWebWidFactory").createWid(e.id || "");
              if (t != null) {
                var n = o("WAWebWidFactory").createUserWidOrThrow(e.id || ""),
                  r = e.pushname || "";
                c.push({ contactId: n, pushname: r });
              }
            }),
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "bulkUpdateContactPushnames",
                { pushnameUpdates: c },
              ),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
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
          },
        )),
        c.apply(this, arguments)
      );
    }
    l.handlePushName = u;
  },
  98,
);
