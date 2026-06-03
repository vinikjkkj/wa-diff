__d(
  "WAWebHistorySyncProgress",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebProtobufsHistorySync.pb",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 3,
      m = [
        o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.RECEIVED,
        o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
          .NOTIFICATION_STORED,
        o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADING,
      ];
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r =
              (n = yield o(
                "WAWebUserPrefsHistorySync",
              ).getRecentSyncSingleChunkStatus()) == null
                ? void 0
                : n[1];
          if (r == null || m.includes(r)) return null;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] computeProgress: first chunk downloaded",
              ])),
          );
          var a = Math.floor((1 / t / d) * 100);
          return Math.min(100, a);
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebUserPrefsHistorySync",
          ).getChunkCountForEndOfRecentHistorySync();
          if (
            !(
              e === 0 &&
              ((e = yield o(
                "WAWebUserPrefsHistorySync",
              ).getEstimatedChunkCountForEndOfRecentHistorySync()),
              e === 0)
            )
          ) {
            var t = yield o(
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
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .RECENT
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
            return p(e);
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield (c || (c = n("Promise"))).all([
                f(),
                o("WAWebUserPrefsHistorySync").getHistorySyncStatus(),
              ]),
              t = e[0],
              r = e[1],
              a = (r == null ? void 0 : r.recentCompleted) !== !0;
            (o("WAWebBackendApi").frontendFireAndForget(
              "setHistorySyncProgress",
              { incomplete: a },
            ),
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
        })),
        y.apply(this, arguments)
      );
    }
    var C = 120,
      b = null;
    function v() {
      b != null && self.clearTimeout(b);
    }
    function S() {
      (v(),
        (b = self.setTimeout(function () {
          E(!0);
        }, C * 1e3)));
    }
    var R = 0;
    function L(e) {
      ((R = e ? 0 : R + 1), R === 0 && S(), E(R >= 3));
    }
    function E(e) {
      o("WAWebBackendApi").frontendFireAndForget("setHistorySyncPaused", {
        paused: e,
      });
    }
    function k() {
      (o("WAWebBackendEventBusWorkerCompatible")
        .getBackendEventBus()
        .onCriticalSyncDone(function () {
          S();
        }),
        o("WAWebBackendEventBusWorkerCompatible")
          .getBackendEventBus()
          .onRecentChatHistorySynced(function () {
            (v(),
              E(!1),
              o("WAWebBackendApi").frontendFireAndForget(
                "setHistorySyncProgress",
                { progress: 100, incomplete: !1 },
              ));
          }));
    }
    ((l.updateHistorySyncProgressModel = h),
      (l.handleChunkProgress = L),
      (l.initHistorySyncProgressListeners = k));
  },
  98,
);
