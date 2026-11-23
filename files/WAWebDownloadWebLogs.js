__d(
  "WAWebDownloadWebLogs",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCallCollection",
    "WAWebDownloadLogFile",
    "WAWebLoggerImpl",
    "WAWebPrimaryVersion",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = 100;
    function m(e, t) {
      var n = o("WAWebLoggerImpl").Logger.getLogs(!1, e, t);
      return Promise.all([
        n,
        o("WAWebPrimaryVersion").getPrimaryCurrentVersion(),
      ]).then(async function (e) {
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
        var c =
            "Web log for device : " +
            ((t =
              (n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()) == null
                ? void 0
                : n.toString()) != null
              ? t
              : "") +
            ", lid : " +
            ((a =
              (i = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid()) == null
                ? void 0
                : i.toString()) != null
              ? a
              : "") +
            ", time: " +
            new Date().toString(),
          d = await o(
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
        var p = l.join(`
`);
        return p;
      });
    }
    function p(e) {
      e: {
        if (e === "all") {
          f();
          break e;
        }
        if (e === "this_session") {
          C(
            o("WAWebLoggerImpl").Logger.getSessionStartTime(),
            "web_client_log_session",
            "Downloading logs since this page loaded...",
          );
          break e;
        }
        if (e === "previous_session") {
          y();
          break e;
        }
        if (e === "last_call") {
          g();
          break e;
        }
        if (e === "last_5_minutes") {
          h(5);
          break e;
        }
        if (e === "last_15_minutes") {
          h(15);
          break e;
        }
        if (e === "last_60_minutes") {
          h(60);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function _() {
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
              c.jsx(o("WAWebToast.react").Toast, { msg: "Logs cleared" }),
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
              c.jsx(o("WAWebToast.react").Toast, {
                msg: "Failed to clear logs. Please try again.",
              }),
            ));
        });
    }
    function f() {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          msg: "The download process has started. It might take longer for larger web log files.",
        }),
      );
      var e =
        "web_client_log_" + o("WAWebDownloadLogFile").getLogFileTimestamp();
      b(
        m().then(function (t) {
          return { filebase: e, contents: t };
        }),
        "Failed to download logs. Please try again.",
      );
    }
    function g() {
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
          c.jsx(o("WAWebToast.react").Toast, {
            msg: "No recent call found. Downloading all available logs instead.",
          }),
        ),
          f());
        return;
      }
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          msg: "Downloading last call log...",
        }),
      );
      var i = o("WAWebDownloadLogFile").getLogFileTimestamp();
      b(
        m().then(function (e) {
          var t = v(e, a, d),
            n = t.callIdFound,
            r = t.filteredLog;
          n ||
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, {
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
    function h(e) {
      C(
        Date.now() - e * o("WATimeUtils").MINUTE_MILLISECONDS,
        "web_client_log_last_" + e + "m",
        "Downloading logs from the last " + e + " minutes...",
      );
    }
    function y() {
      var e = o("WAWebLoggerImpl").Logger.getPreviousSessionTimeRange();
      if (e == null) {
        (o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, {
            msg: "No earlier session in this tab. Downloading all available logs instead.",
          }),
        ),
          f());
        return;
      }
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          msg: "Downloading logs from the previous session...",
        }),
      );
      var t =
        "web_client_log_previous_session_" +
        o("WAWebDownloadLogFile").getLogFileTimestamp();
      b(
        m(e.fromTimestamp, e.toTimestamp).then(function (e) {
          return { filebase: t, contents: e };
        }),
        "Failed to download logs. Please try again.",
      );
    }
    function C(e, t, n) {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: n }),
      );
      var r = t + "_" + o("WAWebDownloadLogFile").getLogFileTimestamp();
      b(
        m(e).then(function (e) {
          return { filebase: r, contents: e };
        }),
        "Failed to download logs. Please try again.",
      );
    }
    function b(e, t) {
      e.then(function (e) {
        var t = e.contents,
          n = e.filebase;
        return o("WAWebDownloadLogFile").downloadLogFile(t, n);
      }).catch(function () {
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, { msg: t }),
        );
      });
    }
    function v(e, t, n) {
      var r = e.indexOf(t),
        o = r !== -1,
        a = 0;
      if (o) {
        for (var i = 0, l = r - 1; l >= 0; l--)
          if (
            e[l] ===
              `
` &&
            (i++, i === n)
          ) {
            a = l + 1;
            break;
          }
      }
      return { filteredLog: e.substring(a), callIdFound: o };
    }
    ((l.getWebLogs = m),
      (l.downloadWebLogs = p),
      (l.clearWebLogs = _),
      (l.createDownloadDataForMdWebLogs = f),
      (l.createDownloadDataForLastCallLog = g),
      (l.extractLogsForCall = v));
  },
  98,
);
