__d(
  "WAWebMediaDragOut",
  [
    "Promise",
    "WALogger",
    "WAWebDragAndDropGatingUtils",
    "WAWebFilenameManager",
    "WAWebMediaDragFiles",
    "WAWebMediaStore",
    "WAWebMsgType",
    "WAWebUA",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "cr:7565",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "DownloadURL",
      c = 6e4,
      d = 10 * 6e4,
      m = 9 * 6e4,
      p = "application/octet-stream",
      _ = null,
      f = null,
      g = new Set();
    function h(e) {
      return y(e) && L(e) != null;
    }
    function y(e) {
      return (
        (e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
          e.type === o("WAWebMsgType").MSG_TYPE.VIDEO) &&
        C()
      );
    }
    function C() {
      return (
        o("WAWebUA").UA.isBlink &&
        (o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.WINDOWS ||
          o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC) &&
        (n("cr:7565") == null || n("cr:7565").canAllowDragOutDownload()) &&
        o("WAWebDragAndDropGatingUtils").isDragAndDropCapabilityEnabled(
          o("WAWebDragAndDropGatingUtils").DragAndDropCapability.DragFilesOut,
        )
      );
    }
    function b(t) {
      var a,
        i = (a = t.mediaData) == null ? void 0 : a.filehash;
      return i == null ||
        g.has(i) ||
        !y(t) ||
        !o("WAWebMediaDragFiles").canTakeMediaOut(t) ||
        h(t)
        ? (s || (s = n("Promise"))).resolve()
        : (g.add(i),
          v(t, i)
            .catch(function (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "media drag-out: the stored media could not be read back",
                    ])),
                )
                .catching(r("getErrorSafe")(t));
            })
            .finally(function () {
              g.delete(i);
            }));
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (yield o("WAWebMediaStore").LruMediaStore.has(t)) {
            yield e.downloadMedia({
              downloadEvenIfExpensive: !1,
              isUserInitiated: !0,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .DOCUMENT_DOWNLOAD,
            });
            return;
          }
          var r = yield n("cr:7565") == null
            ? void 0
            : n("cr:7565").registerSavedMediaFileForDragOut(e);
          r != null && R(r, t);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      var n = { filehash: t, url: e };
      ((f = n),
        self.setTimeout(function () {
          f === n && (f = null);
        }, m));
    }
    function L(e) {
      var t,
        n = o("WAWebMediaDragFiles").getCachedMediaFile(e);
      if (n != null) return { type: "page", file: n };
      var r = f;
      return r != null &&
        r.filehash === ((t = e.mediaData) == null ? void 0 : t.filehash) &&
        o("WAWebMediaDragFiles").canTakeMediaOut(e)
        ? {
            type: "native",
            name: o("WAWebFilenameManager").getDefaultName(e),
            url: r.url,
          }
        : null;
    }
    function E(e, t) {
      var n = y(t) ? L(t) : null;
      if (n != null) {
        I();
        var r = (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.type === "page" &&
              "file" in e
            ) {
              var t = e.file;
              return { name: t.name, url: k(t) };
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.type === "native" &&
              "name" in e &&
              "url" in e
            ) {
              var n = e.name,
                r = e.url;
              return { name: n, url: r };
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(n),
          o = r.name,
          a = r.url;
        e.setData(u, p + ":" + o + ":" + a);
      }
    }
    function k(e) {
      var t = window.URL.createObjectURL(e.slice(0, e.size, p));
      return (
        (_ = t),
        n("cr:7565") == null || n("cr:7565").allowDragOutDownload(t),
        self.setTimeout(function () {
          return window.URL.revokeObjectURL(t);
        }, d),
        t
      );
    }
    function I() {
      var e = _;
      e != null &&
        ((_ = null),
        self.setTimeout(function () {
          return window.URL.revokeObjectURL(e);
        }, c));
    }
    ((l.DOWNLOAD_URL_DRAG_TYPE = u),
      (l.DRAG_OUT_URL_LIFETIME_MS = c),
      (l.DRAG_OUT_URL_MAX_LIFETIME_MS = d),
      (l.NATIVE_DRAG_OUT_URL_LIFETIME_MS = m),
      (l.canDragMediaOut = h),
      (l.isDragOutMedia = y),
      (l.isDragFilesOutAvailable = C),
      (l.prepareMediaDragOut = b),
      (l.addMediaDragOut = E),
      (l.endMediaDragOut = I));
  },
  98,
);
