__d(
  "WAWebDownloadWebLogs",
  [
    "JSResourceForInteraction",
    "Promise",
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
    "asyncToGeneratorRuntime",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = 1e6,
      d = 100;
    function m() {
      return (e || (e = n("Promise")))
        .all([
          o("WAWebLoggerImpl").Logger.getLogs(),
          o("WAWebPrimaryVersion").getPrimaryCurrentVersion(),
        ])
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 && (e = {});
          var t = yield r("JSResourceForInteraction")("WAGzip")
            .__setRef("WAWebDownloadWebLogs")
            .load();
          return t.createDeflate(e);
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: "The download process has started. It might take longer for larger web log files.",
        }),
      );
      var t = new Date().toISOString().replace(/:/g, "-"),
        r = "web_client_log_" + t;
      (e || (e = n("Promise")))
        .all([p(), m()])
        .then(function (e) {
          var t = e[0],
            n = e[1],
            r = new Blob([n], { type: "text/plain" });
          if (r.size > 10 * c) {
            t.push(n, !0);
            var o = new Blob([t.result()], { type: "application/zip" });
            return o;
          }
          return r;
        })
        .then(function (e) {
          o("WAWebFileSaver").FileSaver.downloadData(
            e,
            e.type === "text/plain" ? r : r + ".txt",
            e.type === "text/plain"
              ? o("WAWebFileSaverTypes").AllowedFileExtensions.TXT
              : o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
          );
        });
    }
    function g() {
      var t,
        a,
        i,
        l =
          (t =
            (a = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : a.id) != null
            ? t
            : (i = r("WAWebCallCollection").lastActiveCall) == null
              ? void 0
              : i.id;
      if (l == null) {
        (o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, {
            msg: "No recent call found. Downloading all available logs instead.",
          }),
        ),
          f());
        return;
      }
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: "Downloading last call log...",
        }),
      );
      var s = new Date().toISOString().replace(/:/g, "-"),
        _ = l.slice(0, 8),
        g = "voip_call_log_" + _ + "_" + s;
      (e || (e = n("Promise"))).all([p(), m()]).then(function (e) {
        var t = e[0],
          n = e[1],
          r = h(n, l, d),
          a = r.callIdFound,
          i = r.filteredLog;
        a ||
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: "Call log entries not found in current logs. Downloading all available logs.",
            }),
          );
        var m = a ? g : "web_client_log_" + s,
          p = new Blob([i], { type: "text/plain" }),
          _ = p;
        (p.size > 10 * c &&
          (t.push(i, !0),
          (_ = new Blob([t.result()], { type: "application/zip" }))),
          o("WAWebFileSaver").FileSaver.downloadData(
            _,
            _.type === "text/plain" ? m : m + ".txt",
            _.type === "text/plain"
              ? o("WAWebFileSaverTypes").AllowedFileExtensions.TXT
              : o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
          ));
      });
    }
    function h(e, t, n) {
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
    ((l.getWebLogs = m),
      (l.createDownloadDataForMdWebLogs = f),
      (l.createDownloadDataForLastCallLog = g),
      (l.extractLogsForCall = h));
  },
  98,
);
