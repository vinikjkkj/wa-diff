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
    async function g() {
      r("vulture")("lFIa0IZptKeqvNfxUzCYkL1DdLk=");
      var t = o("WAWebChatThreadLogging").getChatThreadLoggingStateDebug();
      if (t == null) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[uploadThreadLoggingEventsNow] CTL not initialized",
            ])),
        );
        return;
      }
      var n = await t.metadataStore.getOffset();
      if (n == null) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "uploadThreadLoggingEventsNow: thread logging offset unset",
            ])),
        );
        return;
      }
      var a = o("WAWebChatThreadLoggingUtils").computeStartTs(
          n,
          o("WATimeUtils").unixTime(),
        ),
        i = await t.metadataStore.getLastUploadedStartTs();
      (await o("WAWebChatThreadLogging").uploadChatThreadLoggingEvents({
        lastStartTs: a,
      }),
        await t.metadataStore.setLastUploadedStartTs(i),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[uploadThreadLoggingEventsNow] flushed CTL->WAM startTs=",
              "",
            ])),
          a,
        ));
    }
    ((g.doc =
      "Flush all pending Chat Thread Logging (CTL v2) events from IndexedDB to WAM now, including the current day bucket. Use to verify thread-interaction WAM events (e.g. After Read fields) in Scuba without waiting for the daily upload timer. Purges uploaded rows and restores the upload watermark so logging continues."),
      (g.paramsToExecute = []));
    function h(e) {
      r("vulture")("yReBm9pGDu7fiXRFLNYSH8jlRVU=");
      for (var t = window.performance.now(), n = 0; n < e; n++)
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "logging test message from WAWebDebugLogging",
            ])),
        );
      "" + (window.performance.now() - t).toString();
    }
    h.doc = "test logging perf";
    function y() {
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
    y.doc = "toggle page load QPL mirrored performance markers";
    function C() {
      return (
        r("vulture")("04m_4L2QTCpv5Q7xALL6QR-hOL8="),
        o("WAWebWamGlobals").Global
      );
    }
    C.doc = "Get wam global fields";
    function b(e) {
      r("WAWebDebugABProps").overrideABProp("wa_web_console_log_level", e);
    }
    b.doc = "Set console log level. 1: All logs, 2: Log, 3: Warn, 4: Error";
    function v() {
      (r("vulture")("OtY8NAsK_8FDZh9wOqzwg6aw2nw="),
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose(["some log error"])),
          )
          .sendLogs("some_error", {
            sampling: 1,
            separateEmployeeLog: !1,
            employeeSampling: 1,
          }));
    }
    ((v.doc =
      "Send logs without employee separation (does not add -employee suffix for employees)"),
      (v.paramsToExecute = []));
    function S(e) {
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
    S.doc =
      "Set a filter pattern for logs (string or regex). Only matching logs will be shown. Pass null to clear the filter.";
    function R() {
      return (
        r("vulture")("9qVWqcATgvuuoikcqsI0tEdJWMY="),
        r("WAWebLocalStorage") == null
          ? null
          : r("WAWebLocalStorage").getItem(
              o("WAWebLoggerDev").LOG_FILTER_STORAGE_KEY,
            )
      );
    }
    R.doc = "Get the current log filter pattern, or null if not set";
    function L(e) {
      (r("vulture")("hyunHJ7s6iX-dgYnCWrpY1vyTF0="),
        !(e < 0) &&
          (o("WAWebLoggerDev").setContextLinesCount(e),
          o("WAWebLoggerDev").clearContextBuffer(),
          e === 0 || "" + e));
    }
    L.doc =
      "Set number of context lines to show before/after matching logs. Pass 0 to disable context.";
    function E() {
      return (
        r("vulture")("k5AFmO6kOcaLea4O4eDtl5J2vWU="),
        o("WAWebLoggerDev").getContextLinesCount()
      );
    }
    E.doc = "Get current context lines setting";
    var k = {
      Logger: o("WAWebLoggerImpl").Logger,
      getLogContext: E,
      getLogFilter: R,
      getOrInitTimeSpentSession: o("WAWebTimeSpentLoggingSession")
        .getOrInitTimeSpentSession,
      getThreadLogging: f,
      getWamGlobal: C,
      listenLog: S,
      logWamDailyStats: _,
      loggingPerfTest: h,
      markTimeSpentActivity: o("WAWebTimeSpentLoggingSession")
        .markTimeSpentActivity,
      sendLogsWithoutEmployeeSeparation: v,
      setLogContext: L,
      setLogLevel: b,
      togglePageLoadDebug: y,
      uploadLogs: m,
      uploadLogsTesting: p,
      uploadThreadLoggingEventsNow: g,
    };
    l.default = k;
  },
  98,
);
