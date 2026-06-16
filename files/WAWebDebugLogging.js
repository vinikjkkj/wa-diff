__d(
  "WAWebDebugLogging",
  [
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebChatThreadLogging",
    "WAWebChatThreadLoggingUtils",
    "WAWebCrashlog",
    "WAWebDebugABProps",
    "WAWebLocalStorage",
    "WAWebLoggerDev",
    "WAWebLoggerImpl",
    "WAWebTasksDailyStatsTask",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebTimeSpentLoggingSession",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWamGlobals",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m() {
      return o("WAWebCrashlog").upload({
        reason: o("WAWebCrashlog").MANUAL_UPLOAD,
        isHighPri: !0,
        immediate: !0,
      });
    }
    m.doc =
      "Upload Crashlogs with reason: " +
      o("WAWebCrashlog").MANUAL_UPLOAD +
      ", ignores sampling";
    function p(e) {
      return (
        e === void 0 && (e = "testing"),
        o("WAWebCrashlog").upload({ reason: e })
      );
    }
    p.doc =
      "Upload Crashlogs with reason: testing, or supply a reason. Dev env blocks all uploads but: testing";
    function _() {
      o("WAWebTasksDailyStatsTask").logDailyStats();
    }
    _.doc = "log wam daily stats";
    function f() {
      return r("WANullthrows")(
        o("WAWebChatThreadLogging").getChatThreadLoggingStateDebug(),
      );
    }
    f.doc = "thread logging internal API";
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            r = yield e.metadataStore.getLastUploadedStartTs();
          (yield o("WAWebChatThreadLogging").uploadChatThreadLoggingEvents({
            lastStartTs: n,
          }),
            yield e.metadataStore.setLastUploadedStartTs(r),
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
      for (var n = window.performance.now(), r = 0; r < t; r++)
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
      return o("WAWebWamGlobals").Global;
    }
    b.doc = "Get wam global fields";
    function v(e) {
      r("WAWebDebugABProps").overrideABProp("wa_web_console_log_level", e);
    }
    v.doc = "Set console log level. 1: All logs, 2: Log, 3: Warn, 4: Error";
    function S() {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose(["some log error"])),
        )
        .sendLogs("some_error", {
          sampling: 1,
          separateEmployeeLog: !1,
          employeeSampling: 1,
        });
    }
    ((S.doc =
      "Send logs without employee separation (does not add -employee suffix for employees)"),
      (S.paramsToExecute = []));
    function R(e) {
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
            "" + e));
    }
    R.doc =
      "Set a filter pattern for logs (string or regex). Only matching logs will be shown. Pass null to clear the filter.";
    function L() {
      return r("WAWebLocalStorage") == null
        ? null
        : r("WAWebLocalStorage").getItem(
            o("WAWebLoggerDev").LOG_FILTER_STORAGE_KEY,
          );
    }
    L.doc = "Get the current log filter pattern, or null if not set";
    function E(e) {
      e < 0 ||
        (o("WAWebLoggerDev").setContextLinesCount(e),
        o("WAWebLoggerDev").clearContextBuffer(),
        e === 0 || "" + e);
    }
    E.doc =
      "Set number of context lines to show before/after matching logs. Pass 0 to disable context.";
    function k() {
      return o("WAWebLoggerDev").getContextLinesCount();
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
      toggleTsNavigationDebug: o("WAWebTimeSpentLoggingNavigation")
        .toggleTsNavigationDebug,
      uploadLogs: m,
      uploadLogsTesting: p,
      uploadThreadLoggingEventsNow: g,
    };
    l.default = I;
  },
  98,
);
