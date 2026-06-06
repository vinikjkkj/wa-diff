__d(
  "WAWebMediaEntry",
  [
    "Promise",
    "WABase64Equal",
    "WAIsMediaKeyReusable",
    "WALogger",
    "WATimeUtils",
    "WAWebMediaHosts",
    "WAWebMmsClientFormatDownloadUrl",
    "WAWebMmsOperationsConst",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [
        "fbid",
        "filehash",
        "handle",
        "metadataUrl",
        "thumbnailDirectPath",
        "thumbnailSha256",
      ],
      c = ["encFilehash", "mediaKey", "mediaKeyTimestamp"],
      d,
      m = {
        PROBABLY_ON_SERVER: "PROBABLY_ON_SERVER",
        PROBABLY_OFF_SERVER: "PROBABLY_OFF_SERVER",
        UNKNOWN: "UNKNOWN",
      },
      p = (function () {
        function e(t) {
          if (((this.useBackupUrl = !1), this.constructor === e))
            throw r("err")("AbstractMediaEntry is an abstract class");
          ((this.deprecatedMms3Url = t.deprecatedMms3Url),
            (this.serverStatus = m.UNKNOWN),
            (this.sidecar = t.sidecar),
            (this.directPath = t.directPath),
            (this.firstFrameSidecar = t.firstFrameSidecar),
            (this.type = t.type),
            (this.scansSidecar = t.scansSidecar),
            (this.scanLengths = t.scanLengths),
            (this.staticUrl = t.staticUrl));
        }
        var t = e.prototype;
        return (
          (t.markWhetherOnServer = function (t) {
            this.serverStatus = t
              ? m.PROBABLY_ON_SERVER
              : m.PROBABLY_OFF_SERVER;
          }),
          (t.getMediaKey = function () {
            return null;
          }),
          (t.getMediaKeyTimestamp = function () {
            return null;
          }),
          (t.getEncfilehash = function () {
            return null;
          }),
          (t.getFilehash = function () {
            return null;
          }),
          (t.getThumbnailDirectPath = function () {
            return null;
          }),
          (t.getThumbnailSha256 = function () {
            return null;
          }),
          (t.validateForDownloads = function () {
            return this.serverStatus !== m.PROBABLY_OFF_SERVER;
          }),
          e
        );
      })(),
      _ = (function (e) {
        function t(t) {
          var n,
            r = t.fbid,
            o = t.filehash,
            a = t.handle,
            i = t.metadataUrl,
            l = t.thumbnailDirectPath,
            s = t.thumbnailSha256,
            c = babelHelpers.objectWithoutPropertiesLoose(t, u);
          return (
            (n = e.call(this, c) || this),
            (n.filehash = o),
            (n.handle = a),
            (n.metadataUrl = i),
            (n.fbid = r),
            (n.thumbnailDirectPath = l),
            (n.thumbnailSha256 = s),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getFilehash = function () {
            return this.filehash;
          }),
          (n.getThumbnailDirectPath = function () {
            return this.thumbnailDirectPath;
          }),
          (n.getThumbnailSha256 = function () {
            return this.thumbnailSha256;
          }),
          t
        );
      })(p),
      f = (function (e) {
        function t(t) {
          var n,
            r = t.encFilehash,
            o = t.mediaKey,
            a = t.mediaKeyTimestamp,
            i = babelHelpers.objectWithoutPropertiesLoose(t, c);
          return (
            (n = e.call(this, i) || this),
            (n.mediaKey = o),
            (n.mediaKeyTimestamp = a),
            (n.encFilehash = r),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.canReuseMediaKey = function () {
            if (this.directPath == null) return !1;
            var e = o("WATimeUtils").castToUnixTime(this.mediaKeyTimestamp);
            return o("WAIsMediaKeyReusable").isMediaKeyReusable(e);
          }),
          (a.getMediaKey = function () {
            return this.mediaKey;
          }),
          (a.getMediaKeyTimestamp = function () {
            return this.mediaKeyTimestamp;
          }),
          (a.getEncfilehash = function () {
            return this.encFilehash;
          }),
          (a.url = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e || {},
                  a = t.forceHashUrl,
                  i = t.useFallback,
                  l = this.encFilehash;
                if (l == null || l === "")
                  return (d || (d = n("Promise"))).reject(
                    r("err")("media_entry: encFilehash does not exist"),
                  );
                var s = yield o("WAWebMediaHosts").mediaHosts.getHostsInfo({
                    operation: r("WAWebMmsOperationsConst").DOWNLOAD,
                    encFilehash: l,
                    type: this.type,
                  }),
                  u = s.fallbackHost,
                  c = s.selectedHost,
                  m = i && u ? u : c;
                return r("WAWebMmsClientFormatDownloadUrl")({
                  directPath: a ? null : this.directPath,
                  encFilehash: l,
                  hostname: m.hostname,
                  type: this.type,
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(p),
      g = (function () {
        function t() {
          this.entries = [];
        }
        var n = t.prototype;
        return (
          (n.$1 = function (n) {
            var t = n.deprecatedMms3Url,
              r = n.directPath,
              a = n.encFilehash,
              i = n.firstFrameSidecar,
              l = n.foundEntry,
              s = n.mediaKey,
              u = n.mediaKeyTimestamp,
              c = n.scanLengths,
              d = n.scansSidecar,
              m = n.sidecar,
              p = n.staticUrl;
            if (
              l instanceof f &&
              s != null &&
              s !== "" &&
              !o("WABase64Equal").b64Equal(l.mediaKey, s)
            ) {
              var _ = l.mediaKey.replace("=", "").split("\n")[0],
                g = s.replace("=", "").split("\n")[0];
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose(
                        [
                          "media-fault: mediaKey changed for the same MMS3 url. type:",
                          ". equal?:",
                          ". Debug:\n",
                          "",
                        ],
                        [
                          "media-fault: mediaKey changed for the same MMS3 url. type:",
                          ". equal?:",
                          ". Debug:\\n",
                          "",
                        ],
                      )),
                    l.type,
                    _ === g,
                    JSON.stringify(
                      {
                        before: {
                          hasDirectPath: !!l.directPath,
                          hasEncFilehash: !!l.encFilehash,
                          hasMediaKey: !!l.mediaKey,
                          hasDeprecatedMms3Url: !!l.deprecatedMms3Url,
                        },
                        after: {
                          hasDirectPath: !!r,
                          hasEncFilehash: !!a,
                          hasDeprecatedMms3Url: !!t,
                        },
                      },
                      null,
                      2,
                    ),
                  )
                  .sendLogs("media-key-mismatch-same-mms3-url"),
                null
              );
            }
            return (
              l instanceof f && u != null && (l.mediaKeyTimestamp = u),
              m && (l.sidecar = m),
              i && (l.firstFrameSidecar = i),
              d && (l.scansSidecar = d),
              c != null && c.length && (l.scanLengths = c),
              p && (l.staticUrl = p),
              (l.directPath = r),
              l
            );
          }),
          (n.updateEntry = function (t) {
            var e = t.deprecatedMms3Url,
              n = t.directPath,
              r = t.encFilehash,
              o = t.firstFrameSidecar,
              a = t.mediaKey,
              i = t.mediaKeyTimestamp,
              l = t.scanLengths,
              s = t.scansSidecar,
              u = t.sidecar,
              c = t.staticUrl,
              d = t.type,
              m = this.getEntryByEncFilehash({
                encFilehash: r,
                deprecatedMms3Url: e,
              });
            if (m)
              return this.$1({
                foundEntry: m,
                mediaKey: a,
                mediaKeyTimestamp: i,
                encFilehash: r,
                sidecar: u,
                directPath: n,
                firstFrameSidecar: o,
                scansSidecar: s,
                scanLengths: l,
                deprecatedMms3Url: e,
                staticUrl: c,
              });
          }),
          (n.addUnencryptedEntry = function (t) {
            var e = this.updateUnencryptedEntry({
              filehash: t.filehash,
              directPath: t.directPath,
            });
            if (e)
              return (
                (e.handle = t.handle),
                (e.metadataUrl = t.metadataUrl),
                (e.fbid = t.fbid),
                e
              );
            var n = new _({
              deprecatedMms3Url: t.directPath,
              filehash: t.filehash,
              type: t.type,
              directPath: t.directPath,
              handle: t.handle,
              metadataUrl: t.metadataUrl,
              thumbnailDirectPath: t.thumbnailDirectPath,
              thumbnailSha256: t.thumbnailSha256,
              fbid: t.fbid,
            });
            return (this.entries.push(n), n);
          }),
          (n.updateUnencryptedEntry = function (t) {
            var e =
              t.directPath != null
                ? this.getUnencryptedEntry(t.filehash, t.directPath)
                : null;
            return !e || !(e instanceof _)
              ? null
              : (t.directPath != null && (e.directPath = t.directPath), e);
          }),
          (n.addEntry = function (t) {
            var e = t.debugHint,
              n = t.deprecatedMms3Url,
              r = t.directPath,
              a = t.encFilehash,
              i = t.firstFrameSidecar,
              l = t.mediaKey,
              u = t.mediaKeyTimestamp,
              c = t.scanLengths,
              d = t.scansSidecar,
              m = t.sidecar,
              p = t.staticUrl,
              _ = t.type;
            a == null &&
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Media type ",
                      " from ",
                      " is missing encFilehash",
                    ])),
                  _,
                  e,
                )
                .sendLogs("media-entry-missing-upload-hash-" + _ + "-" + e);
            var g = this.entries,
              h = this.getEntryByEncFilehash({
                encFilehash: a,
                deprecatedMms3Url: n,
              }),
              y = h
                ? this.$1({
                    foundEntry: h,
                    mediaKey: l,
                    mediaKeyTimestamp: u,
                    encFilehash: a,
                    sidecar: m,
                    directPath: r,
                    firstFrameSidecar: i,
                    scansSidecar: d,
                    scanLengths: c,
                    deprecatedMms3Url: n,
                    staticUrl: p,
                  })
                : null;
            if (y instanceof f) return y;
            if (!l) return null;
            var C = new f({
              deprecatedMms3Url: n,
              mediaKey: l,
              mediaKeyTimestamp: u,
              encFilehash: a,
              type: _,
              sidecar: m,
              directPath: r,
              firstFrameSidecar: i,
              scansSidecar: d,
              scanLengths: c,
              staticUrl: p,
            });
            return (g.push(C), C);
          }),
          (n.$2 = function (t) {
            var e = t.deprecatedMms3Url,
              n = t.encFilehash;
            return n == null ? "mms3:" + e : n;
          }),
          (n.has = function (t) {
            return this.getEntryByEncFilehash(t) instanceof f;
          }),
          (n.hasUnencryptedEntry = function (t) {
            return t.filehash == null || t.directPath == null
              ? !1
              : this.getUnencryptedEntry(t.filehash, t.directPath) instanceof _;
          }),
          (n.getEntryByEncFilehash = function (t) {
            var e = this,
              n = this.$2(t);
            return this.entries.find(function (t) {
              return (
                t instanceof f &&
                e.$2({
                  encFilehash: t.encFilehash,
                  deprecatedMms3Url: t.deprecatedMms3Url,
                }) === n
              );
            });
          }),
          (n.getUnencryptedEntry = function (t, n) {
            return this.entries.find(function (e) {
              return e instanceof _ && e.filehash === t && e.directPath === n;
            });
          }),
          (n.$3 = function (t) {
            return this.entries.filter(function (e) {
              return t ? e instanceof f : e instanceof _;
            });
          }),
          (n.getUploadEntry = function (t) {
            return (h(this), this.$3(t)[0]);
          }),
          (n.getDownloadEntry = function (t) {
            return (
              h(this),
              this.$3(t).find(function (e) {
                return e.validateForDownloads();
              })
            );
          }),
          (n.clearEntries = function () {
            this.entries = [];
          }),
          t
        );
      })();
    function h(e) {
      e.entries.sort(function (e, t) {
        var n = y(t) - y(e);
        if (n !== 0) return n;
        var r = e.getMediaKeyTimestamp(),
          o = t.getMediaKeyTimestamp();
        return r == null || o == null ? n : o - r;
      });
    }
    function y(e) {
      var t = 0;
      e: {
        if (e.serverStatus === m.PROBABLY_ON_SERVER) {
          t += 200;
          break e;
        }
        if (e.serverStatus === m.PROBABLY_OFF_SERVER) break e;
        if (e.serverStatus === m.UNKNOWN) {
          t += 100;
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e.serverStatus,
        );
      }
      return (e.getEncfilehash() != null && (t += 20), t);
    }
    ((l.AbstractMediaEntry = p),
      (l.UnencryptedMediaEntry = _),
      (l.EncryptedMediaEntry = f),
      (l.MediaEntryList = g));
  },
  98,
);
