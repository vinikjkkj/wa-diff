__d(
  "WAWebMediaDragOut",
  [
    "WALogger",
    "WAWebDragAndDropGatingUtils",
    "WAWebDualUploadsPreferredMsg",
    "WAWebFilenameManager",
    "WAWebMediaDragFiles",
    "WAWebMediaStore",
    "WAWebMsgType",
    "WAWebUA",
    "WAWebWamEnumWebcRmrReasonCode",
    "cr:7565",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "DownloadURL",
      u = 6e4,
      c = 10 * 6e4,
      d = 9 * 6e4,
      m = "application/octet-stream",
      p = null,
      _ = null,
      f = new Set();
    function g(e) {
      return h(e) && S(e) != null;
    }
    function h(e) {
      return (
        (e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
          e.type === o("WAWebMsgType").MSG_TYPE.VIDEO) &&
        y()
      );
    }
    function y() {
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
    function C(t) {
      var n,
        a = (n = t.mediaData) == null ? void 0 : n.filehash;
      return a == null ||
        f.has(a) ||
        !h(t) ||
        !o("WAWebMediaDragFiles").canTakeMediaOut(t) ||
        g(t)
        ? Promise.resolve()
        : (f.add(a),
          b(t, a)
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
              f.delete(a);
            }));
    }
    async function b(e, t) {
      var a;
      if (await o("WAWebMediaStore").LruMediaStore.has(t)) {
        await e.downloadMedia({
          downloadEvenIfExpensive: !1,
          isUserInitiated: !0,
          rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .DOCUMENT_DOWNLOAD,
        });
        return;
      }
      var i = r("justknobx")._("8497"),
        l = i
          ? n("cr:7565") == null ||
            (a = n("cr:7565").getMediaFileInfo(e)) == null
            ? void 0
            : a.target
          : null;
      if (!(i && l == null)) {
        var s = await (n("cr:7565") == null
          ? void 0
          : n("cr:7565").registerSavedMediaFileForDragOut(e));
        s != null && v(s, t, l);
      }
    }
    function v(e, t, n) {
      var r = { filehash: t, target: n, url: e };
      ((_ = r),
        self.setTimeout(function () {
          _ === r && (_ = null);
        }, d));
    }
    function S(e) {
      var t,
        n,
        r = o("WAWebMediaDragFiles").getCachedMediaFile(e);
      if (r != null) return { type: "page", file: r };
      var a = _;
      return a != null &&
        a.filehash === ((t = e.mediaData) == null ? void 0 : t.filehash) &&
        o("WAWebMediaDragFiles").canTakeMediaOut(e) &&
        [
          e,
          (n = a.target) != null
            ? n
            : o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(e),
        ].every(o("WAWebMediaDragFiles").isHarmfulFileAllowed)
        ? {
            type: "native",
            name: o("WAWebFilenameManager").getDefaultName(e),
            url: a.url,
          }
        : null;
    }
    function R(e, t) {
      var n = h(t) ? S(t) : null;
      if (n != null) {
        E();
        var r = (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.type === "page" &&
              "file" in e
            ) {
              var t = e.file;
              return { name: t.name, url: L(t) };
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
        e.setData(s, m + ":" + o + ":" + a);
      }
    }
    function L(e) {
      var t = window.URL.createObjectURL(e.slice(0, e.size, m));
      return (
        (p = t),
        n("cr:7565") == null || n("cr:7565").allowDragOutDownload(t),
        self.setTimeout(function () {
          return window.URL.revokeObjectURL(t);
        }, c),
        t
      );
    }
    function E() {
      var e = p;
      e != null &&
        ((p = null),
        self.setTimeout(function () {
          return window.URL.revokeObjectURL(e);
        }, u));
    }
    ((l.DOWNLOAD_URL_DRAG_TYPE = s),
      (l.DRAG_OUT_URL_LIFETIME_MS = u),
      (l.DRAG_OUT_URL_MAX_LIFETIME_MS = c),
      (l.NATIVE_DRAG_OUT_URL_LIFETIME_MS = d),
      (l.canDragMediaOut = g),
      (l.isDragOutMedia = h),
      (l.isDragFilesOutAvailable = y),
      (l.prepareMediaDragOut = C),
      (l.addMediaDragOut = R),
      (l.endMediaDragOut = E));
  },
  98,
);
