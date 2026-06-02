__d(
  "WAWebMediaEntry",
  [
    "WABase64Equal",
    "WAIsMediaKeyReusable",
    "WALogger",
    "WATimeUtils",
    "WAWebMediaHosts",
    "WAWebMmsClientFormatDownloadUrl",
    "WAWebMmsOperationsConst",
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
      d = {
        PROBABLY_ON_SERVER: "PROBABLY_ON_SERVER",
        PROBABLY_OFF_SERVER: "PROBABLY_OFF_SERVER",
        UNKNOWN: "UNKNOWN",
      },
      m = (function () {
        function e(t) {
          if (((this.useBackupUrl = !1), this.constructor === e))
            throw r("err")("AbstractMediaEntry is an abstract class");
          ((this.deprecatedMms3Url = t.deprecatedMms3Url),
            (this.serverStatus = d.UNKNOWN),
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
              ? d.PROBABLY_ON_SERVER
              : d.PROBABLY_OFF_SERVER;
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
            return this.serverStatus !== d.PROBABLY_OFF_SERVER;
          }),
          e
        );
      })(),
      p = (function (e) {
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
      })(m),
      _ = (function (e) {
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
        var n = t.prototype;
        return (
          (n.canReuseMediaKey = function () {
            if (this.directPath == null) return !1;
            var e = o("WATimeUtils").castToUnixTime(this.mediaKeyTimestamp);
            return o("WAIsMediaKeyReusable").isMediaKeyReusable(e);
          }),
          (n.getMediaKey = function () {
            return this.mediaKey;
          }),
          (n.getMediaKeyTimestamp = function () {
            return this.mediaKeyTimestamp;
          }),
          (n.getEncfilehash = function () {
            return this.encFilehash;
          }),
          (n.url = async function (t) {
            var e = t || {},
              n = e.forceHashUrl,
              a = e.useFallback,
              i = this.encFilehash;
            if (i == null || i === "")
              return Promise.reject(
                r("err")("media_entry: encFilehash does not exist"),
              );
            var l = await o("WAWebMediaHosts").mediaHosts.getHostsInfo({
                operation: r("WAWebMmsOperationsConst").DOWNLOAD,
                encFilehash: i,
                type: this.type,
              }),
              s = l.fallbackHost,
              u = l.selectedHost,
              c = a && s ? s : u;
            return r("WAWebMmsClientFormatDownloadUrl")({
              directPath: n ? null : this.directPath,
              encFilehash: i,
              hostname: c.hostname,
              type: this.type,
            });
          }),
          t
        );
      })(m),
      f = (function () {
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
              l instanceof _ &&
              s != null &&
              s !== "" &&
              !o("WABase64Equal").b64Equal(l.mediaKey, s)
            ) {
              var f = l.mediaKey.replace("=", "").split(`
`)[0],
                g = s.replace("=", "").split(`
`)[0];
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose(
                        [
                          "media-fault: mediaKey changed for the same MMS3 url. type:",
                          ". equal?:",
                          `. Debug:
`,
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
                    f === g,
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
              l instanceof _ && u != null && (l.mediaKeyTimestamp = u),
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
            var n = new p({
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
            return !e || !(e instanceof p)
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
              f = t.type;
            a == null &&
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Media type ",
                      " from ",
                      " is missing encFilehash",
                    ])),
                  f,
                  e,
                )
                .sendLogs("media-entry-missing-upload-hash-" + f + "-" + e);
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
            if (y instanceof _) return y;
            if (!l) return null;
            var C = new _({
              deprecatedMms3Url: n,
              mediaKey: l,
              mediaKeyTimestamp: u,
              encFilehash: a,
              type: f,
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
            return this.getEntryByEncFilehash(t) instanceof _;
          }),
          (n.hasUnencryptedEntry = function (t) {
            return t.filehash == null || t.directPath == null
              ? !1
              : this.getUnencryptedEntry(t.filehash, t.directPath) instanceof p;
          }),
          (n.getEntryByEncFilehash = function (t) {
            var e = this,
              n = this.$2(t);
            return this.entries.find(function (t) {
              return (
                t instanceof _ &&
                e.$2({
                  encFilehash: t.encFilehash,
                  deprecatedMms3Url: t.deprecatedMms3Url,
                }) === n
              );
            });
          }),
          (n.getUnencryptedEntry = function (t, n) {
            return this.entries.find(function (e) {
              return e instanceof p && e.filehash === t && e.directPath === n;
            });
          }),
          (n.$3 = function (t) {
            return this.entries.filter(function (e) {
              return t ? e instanceof _ : e instanceof p;
            });
          }),
          (n.getUploadEntry = function (t) {
            return (g(this), this.$3(t)[0]);
          }),
          (n.getDownloadEntry = function (t) {
            return (
              g(this),
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
    function g(e) {
      e.entries.sort(function (e, t) {
        var n = h(t) - h(e);
        if (n !== 0) return n;
        var r = e.getMediaKeyTimestamp(),
          o = t.getMediaKeyTimestamp();
        return r == null || o == null ? n : o - r;
      });
    }
    function h(e) {
      var t = 0;
      e: {
        if (e.serverStatus === d.PROBABLY_ON_SERVER) {
          t += 200;
          break e;
        }
        if (e.serverStatus === d.PROBABLY_OFF_SERVER) break e;
        if (e.serverStatus === d.UNKNOWN) {
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
    ((l.AbstractMediaEntry = m),
      (l.UnencryptedMediaEntry = p),
      (l.EncryptedMediaEntry = _),
      (l.MediaEntryList = f));
  },
  98,
);
