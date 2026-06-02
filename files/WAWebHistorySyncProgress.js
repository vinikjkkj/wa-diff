__d(
  "WAWebHistorySyncProgress",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebProtobufsHistorySync.pb",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 3,
      d = [
        o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.RECEIVED,
        o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
          .NOTIFICATION_STORED,
        o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADING,
      ];
    async function m(t) {
      var n,
        r =
          (n = await o(
            "WAWebUserPrefsHistorySync",
          ).getRecentSyncSingleChunkStatus()) == null
            ? void 0
            : n[1];
      if (r == null || d.includes(r)) return null;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] computeProgress: first chunk downloaded",
          ])),
      );
      var a = Math.floor((1 / t / c) * 100);
      return Math.min(100, a);
    }
    async function p() {
      var e = await o(
        "WAWebUserPrefsHistorySync",
      ).getChunkCountForEndOfRecentHistorySync();
      if (
        !(
          e === 0 &&
          ((e = await o(
            "WAWebUserPrefsHistorySync",
          ).getEstimatedChunkCountForEndOfRecentHistorySync()),
          e === 0)
        )
      ) {
        var t = await o(
          "WAWebUserPrefsHistorySync",
        ).getLastHistorySyncedChunk();
        if (t != null) {
          var n = t.split("_").map(function (e) {
              return parseInt(e, 10);
            }),
            r = n[0],
            a = n[1];
          if (
            r ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT
          ) {
            var i = Math.floor((a / e) * 100);
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] computeProgress: last chunk done",
                  ])),
              ),
              Math.min(100, i)
            );
          }
        }
        return m(e);
      }
    }
    async function _() {
      try {
        var e = await Promise.all([
            p(),
            o("WAWebUserPrefsHistorySync").getHistorySyncStatus(),
          ]),
          t = e[0],
          n = e[1],
          r = (n == null ? void 0 : n.recentCompleted) !== !0;
        (o("WAWebBackendApi").frontendFireAndForget("setHistorySyncProgress", {
          incomplete: r,
        }),
          t != null &&
            o("WAWebBackendApi").frontendFireAndForget(
              "setHistorySyncProgress",
              { progress: t },
            ));
      } catch (e) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "updateProgressModel: error computing progress",
            ])),
        );
      }
    }
    var f = 120,
      g = null;
    function h() {
      g != null && self.clearTimeout(g);
    }
    function y() {
      (h(),
        (g = self.setTimeout(function () {
          v(!0);
        }, f * 1e3)));
    }
    var C = 0;
    function b(e) {
      ((C = e ? 0 : C + 1), C === 0 && y(), v(C >= 3));
    }
    function v(e) {
      o("WAWebBackendApi").frontendFireAndForget("setHistorySyncPaused", {
        paused: e,
      });
    }
    function S() {
      (o("WAWebBackendEventBusWorkerCompatible")
        .getBackendEventBus()
        .onCriticalSyncDone(function () {
          y();
        }),
        o("WAWebBackendEventBusWorkerCompatible")
          .getBackendEventBus()
          .onRecentChatHistorySynced(function () {
            (h(),
              v(!1),
              o("WAWebBackendApi").frontendFireAndForget(
                "setHistorySyncProgress",
                { progress: 100, incomplete: !1 },
              ));
          }));
    }
    ((l.updateHistorySyncProgressModel = _),
      (l.handleChunkProgress = b),
      (l.initHistorySyncProgressListeners = S));
  },
  98,
);
