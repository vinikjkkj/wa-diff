__d(
  "WAWebDownloadWebLogs",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebCallCollection",
    "WAWebDownloadLogFile",
    "WAWebLid1X1MigrationGating",
    "WAWebLoggerImpl",
    "WAWebPrimaryVersion",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = 100;
    function p(e, t) {
      var a = o("WAWebLoggerImpl").Logger.getLogs(!1, e, t);
      return (u || (u = n("Promise")))
        .all([a, o("WAWebPrimaryVersion").getPrimaryCurrentVersion()])
        .then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n,
                  a,
                  i,
                  l = e[0],
                  s = e[1];
                if (s != null) {
                  var u = "Primary app version: " + s;
                  l.unshift(u);
                }
                l.unshift(
                  "Lid migrated: " +
                    o("WAWebLid1X1MigrationGating")
                      .Lid1X1MigrationUtils.isLidMigrated()
                      .toString(),
                );
                var c =
                    "Web log for device : " +
                    ((t =
                      (n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()) ==
                      null
                        ? void 0
                        : n.toString()) != null
                      ? t
                      : "") +
                    ", lid : " +
                    ((a =
                      (i = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid()) ==
                      null
                        ? void 0
                        : i.toString()) != null
                      ? a
                      : "") +
                    ", time: " +
                    new Date().toString(),
                  d = yield o(
                    "WAWebUserPrefsGeneral",
                  ).getWhatsAppWebExternalBetaJoinedIdb(),
                  m = "";
                (r("gkx")("26259")
                  ? (m =
                      "Environment : INTERN " +
                      (d ? ", AB Props : DEBUG (joined beta)" : ""))
                  : (m =
                      "Environment : DEV " +
                      (d ? ", AB Props : RELEASE (joined beta)" : "")),
                  l.unshift(c, m));
                var p = l.join("\n");
                return p;
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function _(e) {
      e: {
        if (e === "all") {
          g();
          break e;
        }
        if (e === "this_session") {
          b(
            o("WAWebLoggerImpl").Logger.getSessionStartTime(),
            "web_client_log_session",
            "Downloading logs since this page loaded...",
          );
          break e;
        }
        if (e === "previous_session") {
          C();
          break e;
        }
        if (e === "last_call") {
          h();
          break e;
        }
        if (e === "last_5_minutes") {
          y(5);
          break e;
        }
        if (e === "last_15_minutes") {
          y(15);
          break e;
        }
        if (e === "last_60_minutes") {
          y(60);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function f() {
      o("WAWebLoggerImpl")
        .Logger.clearLogs()
        .then(function () {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Logs cleared from the download logs dialog",
              ])),
          ),
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebToast.react").Toast, { msg: "Logs cleared" }),
            ));
        })
        .catch(function (e) {
          (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to clear logs from the download logs dialog",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("download-logs-clear-failed"),
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebToast.react").Toast, {
                msg: "Failed to clear logs. Please try again.",
              }),
            ));
        });
    }
    function g() {
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebToast.react").Toast, {
          msg: "The download process has started. It might take longer for larger web log files.",
        }),
      );
      var e =
        "web_client_log_" + o("WAWebDownloadLogFile").getLogFileTimestamp();
      v(
        p().then(function (t) {
          return { filebase: e, contents: t };
        }),
        "Failed to download logs. Please try again.",
      );
    }
    function h() {
      var e,
        t,
        n,
        a =
          (e =
            (t = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : t.id) != null
            ? e
            : (n = r("WAWebCallCollection").lastActiveCall) == null
              ? void 0
              : n.id;
      if (a == null) {
        (o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, {
            msg: "No recent call found. Downloading all available logs instead.",
          }),
        ),
          g());
        return;
      }
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebToast.react").Toast, {
          msg: "Downloading last call log...",
        }),
      );
      var i = o("WAWebDownloadLogFile").getLogFileTimestamp();
      v(
        p().then(function (e) {
          var t = S(e, a, m),
            n = t.callIdFound,
            r = t.filteredLog;
          n ||
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebToast.react").Toast, {
                msg: "Call log entries not found in current logs. Downloading all available logs.",
              }),
            );
          var l = n
            ? "voip_call_log_" + a.slice(0, 8) + "_" + i
            : "web_client_log_" + i;
          return { filebase: l, contents: r };
        }),
        "Failed to download call log. Please try again.",
      );
    }
    function y(e) {
      b(
        Date.now() - e * o("WATimeUtils").MINUTE_MILLISECONDS,
        "web_client_log_last_" + e + "m",
        "Downloading logs from the last " + e + " minutes...",
      );
    }
    function C() {
      var e = o("WAWebLoggerImpl").Logger.getPreviousSessionTimeRange();
      if (e == null) {
        (o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, {
            msg: "No earlier session in this tab. Downloading all available logs instead.",
          }),
        ),
          g());
        return;
      }
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebToast.react").Toast, {
          msg: "Downloading logs from the previous session...",
        }),
      );
      var t =
        "web_client_log_previous_session_" +
        o("WAWebDownloadLogFile").getLogFileTimestamp();
      v(
        p(e.fromTimestamp, e.toTimestamp).then(function (e) {
          return { filebase: t, contents: e };
        }),
        "Failed to download logs. Please try again.",
      );
    }
    function b(e, t, n) {
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebToast.react").Toast, { msg: n }),
      );
      var r = t + "_" + o("WAWebDownloadLogFile").getLogFileTimestamp();
      v(
        p(e).then(function (e) {
          return { filebase: r, contents: e };
        }),
        "Failed to download logs. Please try again.",
      );
    }
    function v(e, t) {
      e.then(function (e) {
        var t = e.contents,
          n = e.filebase;
        return o("WAWebDownloadLogFile").downloadLogFile(t, n);
      }).catch(function () {
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, { msg: t }),
        );
      });
    }
    function S(e, t, n) {
      var r = e.indexOf(t),
        o = r !== -1,
        a = 0;
      if (o) {
        for (var i = 0, l = r - 1; l >= 0; l--)
          if (e[l] === "\n" && (i++, i === n)) {
            a = l + 1;
            break;
          }
      }
      return { filteredLog: e.substring(a), callIdFound: o };
    }
    ((l.getWebLogs = p),
      (l.downloadWebLogs = _),
      (l.clearWebLogs = f),
      (l.createDownloadDataForMdWebLogs = g),
      (l.createDownloadDataForLastCallLog = h),
      (l.extractLogsForCall = S));
  },
  98,
);
