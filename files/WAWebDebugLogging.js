__d(
  "WAWebDebugLogging",
  [
    "WALogger",
    "WANullthrows",
    "WAWebChatThreadLogging",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return o("WAWebCrashlog").upload({
        reason: o("WAWebCrashlog").MANUAL_UPLOAD,
        isHighPri: !0,
        immediate: !0,
      });
    }
    u.doc =
      "Upload Crashlogs with reason: " +
      o("WAWebCrashlog").MANUAL_UPLOAD +
      ", ignores sampling";
    function c(e) {
      return (
        e === void 0 && (e = "testing"),
        o("WAWebCrashlog").upload({ reason: e })
      );
    }
    c.doc =
      "Upload Crashlogs with reason: testing, or supply a reason. Dev env blocks all uploads but: testing";
    function d() {
      o("WAWebTasksDailyStatsTask").logDailyStats();
    }
    d.doc = "log wam daily stats";
    function m() {
      return r("WANullthrows")(
        o("WAWebChatThreadLogging").getChatThreadLoggingStateDebug(),
      );
    }
    m.doc = "thread logging internal API";
    function p(t) {
      for (var n = window.performance.now(), r = 0; r < t; r++)
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "logging test message from WAWebDebugLogging",
            ])),
        );
      "" + (window.performance.now() - n).toString();
    }
    p.doc = "test logging perf";
    function _() {
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
    _.doc = "toggle page load QPL mirrored performance markers";
    function f() {
      return o("WAWebWamGlobals").Global;
    }
    f.doc = "Get wam global fields";
    function g(e) {
      r("WAWebDebugABProps").overrideABProp("wa_web_console_log_level", e);
    }
    g.doc = "Set console log level. 1: All logs, 2: Log, 3: Warn, 4: Error";
    function h() {
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
    ((h.doc =
      "Send logs without employee separation (does not add -employee suffix for employees)"),
      (h.paramsToExecute = []));
    function y(e) {
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
    y.doc =
      "Set a filter pattern for logs (string or regex). Only matching logs will be shown. Pass null to clear the filter.";
    function C() {
      return r("WAWebLocalStorage") == null
        ? null
        : r("WAWebLocalStorage").getItem(
            o("WAWebLoggerDev").LOG_FILTER_STORAGE_KEY,
          );
    }
    C.doc = "Get the current log filter pattern, or null if not set";
    function b(e) {
      e < 0 ||
        (o("WAWebLoggerDev").setContextLinesCount(e),
        o("WAWebLoggerDev").clearContextBuffer(),
        e === 0 || "" + e);
    }
    b.doc =
      "Set number of context lines to show before/after matching logs. Pass 0 to disable context.";
    function v() {
      return o("WAWebLoggerDev").getContextLinesCount();
    }
    v.doc = "Get current context lines setting";
    var S = {
      Logger: o("WAWebLoggerImpl").Logger,
      getLogContext: v,
      getLogFilter: C,
      getOrInitTimeSpentSession: o("WAWebTimeSpentLoggingSession")
        .getOrInitTimeSpentSession,
      getThreadLogging: m,
      getWamGlobal: f,
      listenLog: y,
      logWamDailyStats: d,
      loggingPerfTest: p,
      markTimeSpentActivity: o("WAWebTimeSpentLoggingSession")
        .markTimeSpentActivity,
      sendLogsWithoutEmployeeSeparation: h,
      setLogContext: b,
      setLogLevel: g,
      togglePageLoadDebug: _,
      toggleTsNavigationDebug: o("WAWebTimeSpentLoggingNavigation")
        .toggleTsNavigationDebug,
      uploadLogs: u,
      uploadLogsTesting: c,
    };
    l.default = S;
  },
  98,
);
