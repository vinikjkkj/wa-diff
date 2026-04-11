__d(
  "WAWebMmsDownloadUploadCrashLogger",
  ["$InternalEnum", "WALogger", "WAWebLocalStorage", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored([
        "DOWNLOAD_STARTED",
        "DOWNLOAD_FINISHED",
        "DOWNLOAD_DECRYPTION_STARTED",
        "DOWNLOAD_DECRYPTION_FINISHED",
        "DOWNLOAD_ERROR",
        "UPLOAD_STARTED",
        "UPLOAD_FINISHED",
        "UPLOAD_BLOB_TO_ARRAY_BUFFER_STARTED",
        "UPLOAD_BLOB_TO_ARRAY_BUFFER_FINISHED",
        "UPLOAD_ENCRYPTION_STARTED",
        "UPLOAD_ENCRYPTION_FINISHED",
        "UPLOAD_ERROR",
      ]),
      u = "DownloadUploadCrashLoggerLikelyCrashed",
      c = new Set([
        s.DOWNLOAD_DECRYPTION_FINISHED,
        s.DOWNLOAD_ERROR,
        s.UPLOAD_FINISHED,
        s.UPLOAD_ERROR,
      ]);
    function d(e) {
      return e.toLowerCase().replace(/(?:^|_)(\w)/g, function (e, t) {
        return t.toLocaleUpperCase();
      });
    }
    function m(e) {
      return Object.entries(e)
        .map(function (e) {
          var t = e[0],
            n = e[1];
          return t + ": " + String(n);
        })
        .join(", ");
    }
    var p = (function () {
        function t() {
          ((this.hasPerformedInit = !1),
            (this.$3 = function () {
              r("WAWebLocalStorage") == null ||
                r("WAWebLocalStorage").removeItem(u);
            }));
        }
        var n = t.prototype;
        return (
          (n.$1 = function () {
            var e =
              r("WAWebLocalStorage") == null
                ? void 0
                : r("WAWebLocalStorage").getItem(u);
            return e ? JSON.parse(e) : {};
          }),
          (n.$2 = function () {
            r("WAWebLocalStorage") == null ||
              r("WAWebLocalStorage").setItem(u, JSON.stringify(this.storage));
          }),
          (n.$4 = function () {
            return r("justknobx")._("3944");
          }),
          (n.init = function () {
            this.hasPerformedInit ||
              !this.$4() ||
              (window.addEventListener("beforeunload", this.$3),
              (this.storage = this.$1()),
              Object.entries(this.storage).forEach(function (t) {
                var n = t[0],
                  r = t[1],
                  a = r.metadata,
                  i = r.progressType;
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "downloadUploadCrashLogger.likelyCrashedDuring",
                        "WithID",
                        "",
                        "",
                      ])),
                    d(i),
                    n,
                    a ? "AndData => " + m(a) : "",
                  )
                  .sendLogs("download-upload-manager-likely-crashed");
              }),
              this.$3(),
              (this.hasPerformedInit = !0));
          }),
          (n.reset = function () {
            this.$4() &&
              (window.removeEventListener("beforeunload", this.$3),
              this.$3(),
              (this.hasPerformedInit = !1));
          }),
          (n.mark = function (t, n, r) {
            this.$4() &&
              (c.has(n)
                ? delete this.storage[String(t)]
                : (this.storage[String(t)] = { progressType: n, metadata: r }),
              this.$2());
          }),
          t
        );
      })(),
      _ = new p();
    ((l.ProgressType = s), (l.downloadUploadCrashLogger = _));
  },
  98,
);
