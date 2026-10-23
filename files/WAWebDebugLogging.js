__d(
  "WAWebDebugLogging",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebChatThreadLogging",
    "WAWebChatThreadLoggingUtils",
    "WAWebCrashlog",
    "WAWebDebugABProps",
    "WAWebLocalStorage",
    "WAWebLoggerDev",
    "WAWebLoggerImpl",
    "WAWebTasksDailyStatsTask",
    "WAWebTimeSpentLoggingSession",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWamGlobals",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m() {
      return (
        r("vulture")("1sNLpD1bRU9pajP9ISKpUykv_8o="),
        o("WAWebCrashlog").upload({
          reason: o("WAWebCrashlog").MANUAL_UPLOAD,
          isHighPri: !0,
          immediate: !0,
        })
      );
    }
    m.doc =
      "Upload Crashlogs with reason: " +
      o("WAWebCrashlog").MANUAL_UPLOAD +
      ", ignores sampling";
    function p(e) {
      return (
        e === void 0 && (e = "testing"),
        r("vulture")("_OKjdNqa3vA_NwgpQnlEARIK7Uo="),
        o("WAWebCrashlog").upload({ reason: e })
      );
    }
    p.doc =
      "Upload Crashlogs with reason: testing, or supply a reason. Dev env blocks all uploads but: testing";
    function _() {
      (r("vulture")("_zLNjJc3ihneGYyNdA-FmjUp03I="),
        o("WAWebTasksDailyStatsTask").logDailyStats());
    }
    _.doc = "log wam daily stats";
    function f() {
      return (
        r("vulture")("d7fR7vnahnFoSljaaC2hhnsM5VY="),
        r("nullthrows")(
          o("WAWebChatThreadLogging").getChatThreadLoggingStateDebug(),
        )
      );
    }
    f.doc = "thread logging internal API";
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("lFIa0IZptKeqvNfxUzCYkL1DdLk=");
          var e = o("WAWebChatThreadLogging").getChatThreadLoggingStateDebug();
          if (e == null) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[uploadThreadLoggingEventsNow] CTL not initialized",
                ])),
            );
            return;
          }
          var t = yield e.metadataStore.getOffset();
          if (t == null) {
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "uploadThreadLoggingEventsNow: thread logging offset unset",
                ])),
            );
            return;
          }
          var n = o("WAWebChatThreadLoggingUtils").computeStartTs(
              t,
              o("WATimeUtils").unixTime(),
            ),
            a = yield e.metadataStore.getLastUploadedStartTs();
          (yield o("WAWebChatThreadLogging").uploadChatThreadLoggingEvents({
            lastStartTs: n,
          }),
            yield e.metadataStore.setLastUploadedStartTs(a),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[uploadThreadLoggingEventsNow] flushed CTL->WAM startTs=",
                  "",
                ])),
              n,
            ));
        })),
        h.apply(this, arguments)
      );
    }
    ((g.doc =
      "Flush all pending Chat Thread Logging (CTL v2) events from IndexedDB to WAM now, including the current day bucket. Use to verify thread-interaction WAM events (e.g. After Read fields) in Scuba without waiting for the daily upload timer. Purges uploaded rows and restores the upload watermark so logging continues."),
      (g.paramsToExecute = []));
    function y(t) {
      r("vulture")("yReBm9pGDu7fiXRFLNYSH8jlRVU=");
      for (var n = window.performance.now(), a = 0; a < t; a++)
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "logging test message from WAWebDebugLogging",
            ])),
        );
      "" + (window.performance.now() - n).toString();
    }
    y.doc = "test logging perf";
    function C() {
      r("vulture")("fHuOO7Wsrfs38vaIDNxL4Bm25eA=");
      var e =
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.PageLoadDebug,
        ) === !0;
      return e
        ? (r("WAWebUserPrefsStore").set(
            o("WAWebUserPrefsKeys").UserPrefs.PageLoadDebug,
            !1,
          ),
          !1)
        : (r("WAWebUserPrefsStore").set(
            o("WAWebUserPrefsKeys").UserPrefs.PageLoadDebug,
            !0,
          ),
          !0);
    }
    C.doc = "toggle page load QPL mirrored performance markers";
    function b() {
      return (
        r("vulture")("04m_4L2QTCpv5Q7xALL6QR-hOL8="),
        o("WAWebWamGlobals").Global
      );
    }
    b.doc = "Get wam global fields";
    function v(e) {
      (r("vulture")("z8nZqfpLXYltMcH4PxEzIqa5D2w="),
        r("WAWebDebugABProps").overrideABProp("wa_web_console_log_level", e));
    }
    v.doc = "Set console log level. 1: All logs, 2: Log, 3: Warn, 4: Error";
    function S() {
      (r("vulture")("OtY8NAsK_8FDZh9wOqzwg6aw2nw="),
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose(["some log error"])),
          )
          .sendLogs("some_error", {
            sampling: 1,
            separateEmployeeLog: !1,
            employeeSampling: 1,
          }));
    }
    ((S.doc =
      "Send logs without employee separation (does not add -employee suffix for employees)"),
      (S.paramsToExecute = []));
    function R(e) {
      (r("vulture")("igoDMUUWnZDMblkJwzbOtuv_FJ8="),
        r("WAWebLocalStorage") != null &&
          (o("WAWebLoggerDev").clearContextBuffer(),
          e == null
            ? r("WAWebLocalStorage").removeItem(
                o("WAWebLoggerDev").LOG_FILTER_STORAGE_KEY,
              )
            : (r("WAWebLocalStorage").setItem(
                o("WAWebLoggerDev").LOG_FILTER_STORAGE_KEY,
                e,
              ),
              "" + e)));
    }
    R.doc =
      "Set a filter pattern for logs (string or regex). Only matching logs will be shown. Pass null to clear the filter.";
    function L() {
      return (
        r("vulture")("9qVWqcATgvuuoikcqsI0tEdJWMY="),
        r("WAWebLocalStorage") == null
          ? null
          : r("WAWebLocalStorage").getItem(
              o("WAWebLoggerDev").LOG_FILTER_STORAGE_KEY,
            )
      );
    }
    L.doc = "Get the current log filter pattern, or null if not set";
    function E(e) {
      (r("vulture")("hyunHJ7s6iX-dgYnCWrpY1vyTF0="),
        !(e < 0) &&
          (o("WAWebLoggerDev").setContextLinesCount(e),
          o("WAWebLoggerDev").clearContextBuffer(),
          e === 0 || "" + e));
    }
    E.doc =
      "Set number of context lines to show before/after matching logs. Pass 0 to disable context.";
    function k() {
      return (
        r("vulture")("k5AFmO6kOcaLea4O4eDtl5J2vWU="),
        o("WAWebLoggerDev").getContextLinesCount()
      );
    }
    k.doc = "Get current context lines setting";
    var I = {
      Logger: o("WAWebLoggerImpl").Logger,
      getLogContext: k,
      getLogFilter: L,
      getOrInitTimeSpentSession: o("WAWebTimeSpentLoggingSession")
        .getOrInitTimeSpentSession,
      getThreadLogging: f,
      getWamGlobal: b,
      listenLog: R,
      logWamDailyStats: _,
      loggingPerfTest: y,
      markTimeSpentActivity: o("WAWebTimeSpentLoggingSession")
        .markTimeSpentActivity,
      sendLogsWithoutEmployeeSeparation: S,
      setLogContext: E,
      setLogLevel: v,
      togglePageLoadDebug: C,
      uploadLogs: m,
      uploadLogsTesting: p,
      uploadThreadLoggingEventsNow: g,
    };
    l.default = I;
  },
  98,
);
