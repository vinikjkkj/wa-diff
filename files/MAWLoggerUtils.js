__d(
  "MAWLoggerUtils",
  [
    "ErrorBrowserConsole",
    "ErrorPubSub",
    "MAWLeakDetection",
    "MAWLoggingSwitches",
    "MAWSaveLogToDisk",
    "Random",
    "ServerJsRuntimeEnvironment",
    "WADevToolsBridge",
    "WAJids",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1;
    function u(e, t) {
      var n = c.has(e == null ? void 0 : e.project);
      if (n) {
        var o, a, i;
        f(
          e.type === "error" || e.type === "fatal"
            ? "error"
            : e.type === "warn"
              ? "warn"
              : "log",
          e.message,
          (o = e.tags) != null ? o : [],
          (a =
            (i = e.metadata) == null
              ? void 0
              : i.includes("MESSENGER_E2EE_WEB:ENVIRONMENT:worker")) != null
            ? a
            : !1,
        );
      }
      t && r("ErrorBrowserConsole").errorListener(e);
    }
    var c = new Set([
        "messenger_web",
        "wmi_eb",
        "labyrinth_web",
        "messenger_web_media",
        "messenger_web_calling",
        "mps",
        "wmi",
        "MAWCacheService",
        "MAWUIPersistedDataServices",
        "fts_worker",
        "maw_threads",
      ]),
      d = {
        CleanerPurge: "CleanerPurge",
        CleanerStart: "CleanerStart",
        CleanerTimestamp: "CleanerTimestamp",
        CleanerUpdate: "CleanerUpdate",
        Countdown: "Countdown",
        Ephemeral: "Ephemeral",
        Incoming: "Incoming",
        MsgCleaner: "MsgCleaner",
        OnLoad: "OnLoad",
        OnRead: "OnRead",
        Outgoing: "Outgoing",
        PeerReceipt: "PeerReceipt",
        SettingChange: "SettingChange",
        SettingSync: "SettingSync",
        DeviceRegistration: "DeviceRegistration",
        MessageReceive: "MessageReceive",
        MediaDownload: "MediaDownload",
        WorkerSetup: "WorkerSetup",
        MAWWorker: "MAWWorker",
        MAWInit: "MAWInit",
        LogoutHandler: "LogoutHandler",
        MiActMapping: "MiActMapping",
        ThreadReady: "ThreadReady",
      };
    function m() {
      return o("Random").uint32();
    }
    function p(e) {
      var t = e.split("");
      return t.reduce(function (e, t) {
        var n = t.charCodeAt(0),
          r = (e << 5) - e + n;
        return ((r &= r), r);
      }, 0);
    }
    function _() {
      if (!s) {
        s = !0;
        var t = r("gkx")("2656");
        ((e || (e = r("ErrorPubSub"))).removeListener(
          r("ErrorBrowserConsole").errorListener,
        ),
          e.addListener(function (e) {
            return u(e, t);
          }));
      }
    }
    function f(e, t, n, a) {
      if (!o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime()) {
        var i = o("MAWLeakDetection").maybeReplaceVaultedString(
            o("WAJids").maybeSanitizeLogLineText(t),
          ),
          l = Date.now();
        if (
          (r("gkx")("3282") &&
            o("WADevToolsBridge")
              .getDevToolBridge()
              .fireAndForget(
                "devtool",
                "logLine",
                { logLevel: e, logString: g(i, n) },
                !0,
              ),
          !!o("MAWLoggingSwitches").removeLoggingFromBridge)
        ) {
          var s = i.replace(/\n/g, " ");
          e === "debug" ||
            typeof s != "string" ||
            o("MAWSaveLogToDisk").saveLogEntry(a ? "worker" : "browser", {
              args: s,
              date: l,
              event: o("MAWSaveLogToDisk").joinTags(n, "[unknown]"),
              level: e,
            });
        }
      }
    }
    function g(e, t) {
      return t.length > 0 ? o("MAWSaveLogToDisk").joinTags(t) + " " + e : e;
    }
    ((l.Tag = d),
      (l.createInstanceKey = m),
      (l.getInstanceKeyFromId = p),
      (l.initMessengerWebLogging = _),
      (l.logToHistory = f));
  },
  98,
);
