__d(
  "WAWebDownloadWebLogs",
  [
    "JSResourceForInteraction",
    "WAWebCallCollection",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "WAWebLid1X1MigrationGating",
    "WAWebLoggerImpl",
    "WAWebPrimaryVersion",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 1e6,
      c = 100;
    function d() {
      return Promise.all([
        o("WAWebLoggerImpl").Logger.getLogs(),
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
        l.unshift(
          "Lid migrated: " +
            o("WAWebLid1X1MigrationGating")
              .Lid1X1MigrationUtils.isLidMigrated()
              .toString(),
        );
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
    async function m(e) {
      e === void 0 && (e = {});
      var t = await r("JSResourceForInteraction")("WAGzip")
        .__setRef("WAWebDownloadWebLogs")
        .load();
      return t.createDeflate(e);
    }
    function p() {
      o("WAWebToastManager").ToastManager.open(
        s.jsx(o("WAWebToast.react").Toast, {
          msg: "The download process has started. It might take longer for larger web log files.",
        }),
      );
      var e = new Date().toISOString().replace(/:/g, "-"),
        t = "web_client_log_" + e;
      Promise.all([m(), d()])
        .then(function (e) {
          var t = e[0],
            n = e[1],
            r = new Blob([n], { type: "text/plain" });
          if (r.size > 10 * u) {
            t.push(n, !0);
            var o = new Blob([t.result()], { type: "application/zip" });
            return o;
          }
          return r;
        })
        .then(function (e) {
          return o("WAWebFileSaver").FileSaver.downloadData(
            e,
            e.type === "text/plain" ? t : t + ".txt",
            e.type === "text/plain"
              ? o("WAWebFileSaverTypes").AllowedFileExtensions.TXT
              : o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
          );
        });
    }
    function _() {
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
          s.jsx(o("WAWebToast.react").Toast, {
            msg: "No recent call found. Downloading all available logs instead.",
          }),
        ),
          p());
        return;
      }
      o("WAWebToastManager").ToastManager.open(
        s.jsx(o("WAWebToast.react").Toast, {
          msg: "Downloading last call log...",
        }),
      );
      var i = new Date().toISOString().replace(/:/g, "-"),
        l = a.slice(0, 8),
        _ = "voip_call_log_" + l + "_" + i;
      Promise.all([m(), d()]).then(function (e) {
        var t = e[0],
          n = e[1],
          r = f(n, a, c),
          l = r.callIdFound,
          d = r.filteredLog;
        l ||
          o("WAWebToastManager").ToastManager.open(
            s.jsx(o("WAWebToast.react").Toast, {
              msg: "Call log entries not found in current logs. Downloading all available logs.",
            }),
          );
        var m = l ? _ : "web_client_log_" + i,
          p = new Blob([d], { type: "text/plain" }),
          g = p;
        return (
          p.size > 10 * u &&
            (t.push(d, !0),
            (g = new Blob([t.result()], { type: "application/zip" }))),
          o("WAWebFileSaver").FileSaver.downloadData(
            g,
            g.type === "text/plain" ? m : m + ".txt",
            g.type === "text/plain"
              ? o("WAWebFileSaverTypes").AllowedFileExtensions.TXT
              : o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
          )
        );
      });
    }
    function f(e, t, n) {
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
    ((l.getWebLogs = d),
      (l.createDownloadDataForMdWebLogs = p),
      (l.createDownloadDataForLastCallLog = _),
      (l.extractLogsForCall = f));
  },
  98,
);
