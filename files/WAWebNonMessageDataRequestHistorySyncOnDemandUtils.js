__d(
  "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
  [
    "WALogger",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiChatCommon",
    "WAWebBackendApi",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebHistorySyncLidChatGating",
    "WAWebSchemaMessage",
    "WAWebUserPrefsHistorySync",
    "WAWebWidFactory",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = new Map(),
      p = { disableRequestSending: !1, failureCount: 0 };
    async function _(e) {
      var t = o("WAWebDBMessageUtils").beginningOfChat(e),
        n = o("WAWebDBMessageUtils").endOfChat(e),
        r = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], t, n, {
            limit: 1,
            reverse: !1,
            shouldDecrypt: !1,
          });
      return r.length === 0 ? null : r[0];
    }
    async function f(e) {
      var t = await _(e);
      return t != null
        ? o("WAWebDBMessageSerialization").messageFromDbRow(t)
        : null;
    }
    function g(e) {
      (o("WAWebBackendApi").frontendFireAndForget("successHistorySyncOd", {
        chatId: e,
      }),
        y());
    }
    function h(t) {
      o("WAWebBackendApi").frontendFireAndForget("errorHistorySyncOd", {
        chatId: t,
      });
      var n = o("WATimeUtils").unixTime(),
        r = p.firstFailureRequestTimeStampSec;
      (r == null && (p.firstFailureRequestTimeStampSec = n),
        (p.failureCount += 1));
      var a = o("WAWebABProps").getABPropConfigValue(
          "history_sync_on_demand_failure_limit",
        ),
        i = o("WAWebABProps").getABPropConfigValue(
          "history_sync_on_demand_cooldown_sec",
        );
      if (p.failureCount >= a && r != null && n - r < i) {
        p.disableRequestSending = !0;
        var l = 1e3 * i;
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[rdu] disable history sync on demand for ",
              "ms.",
            ])),
          l,
        ),
          new (o("WAShiftTimer").ShiftTimer)(function () {
            p.disableRequestSending &&
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] re-enable history sync on demand.",
                  ])),
              ),
              y());
          }).onOrAfter(l));
      }
    }
    function y() {
      ((p.disableRequestSending = !1),
        (p.failureCount = 0),
        (p.firstFailureRequestTimeStampSec = void 0));
    }
    async function C(e) {
      var t = o("WAWebUserPrefsHistorySync").getHistoryInitialSyncBoundary();
      if (t == null || r("isEmptyObject")(t)) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[rdu] cannot delete chat ",
              " from initial sync boundary.",
            ])),
          e.toLogString(),
        );
        return;
      }
      var n = e.toJid();
      if (o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()) {
        var a = await o("WAWebApiChatCommon").getChatRecord(e);
        (a == null ? void 0 : a.historyChatId) != null &&
          (n = o("WAWebWidFactory").createWid(a.historyChatId).toJid());
      }
      if ((t == null ? void 0 : t[n]) == null) {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[rdu] cannot delete chat ",
              " from initial sync boundary.",
            ])),
          e.toLogString(),
        );
        return;
      }
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[rdu] delete chat ",
            " from initial sync boundary",
          ])),
        e.toLogString(),
      ),
        delete t[n],
        o("WAWebUserPrefsHistorySync").setHistoryInitialSyncBoundary(t));
    }
    ((l.inFlightHistorySyncOnDemandRequests = m),
      (l.historySyncOnDemandRequestsFailureRecord = p),
      (l.getOldestMsgInChatFromDB = f),
      (l.handleHistorySyncOnDemandSuccess = g),
      (l.handleHistorySyncOnDemandFailure = h),
      (l.deleteChatFromInitialSyncBoundary = C));
  },
  98,
);
