__d(
  "WAWebWindowsMediaFilesHelpers",
  [
    "WAAbortError",
    "WALogger",
    "WAStreamAsyncIterator",
    "WAWebFileSaver",
    "WAWebFileSaverDownloadData",
    "WAWebFilenameManager",
    "WAWebODS",
    "WAWebWindowsGatingUtils",
    "WAWebWindowsHybridBridgeInitiator",
    "WAWebWindowsHybridBridgeMediaFiles",
    "WAWebWindowsMediaFilesMetrics",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q,
      U = 2147483648,
      V = 0;
    function H() {
      return V++;
    }
    function G(e) {
      var t = e.mediaData;
      if (t == null) return null;
      var n = t.filehash;
      if (n == null) return null;
      var r = o("WAWebFilenameManager").getDefaultName(e);
      return { mediaData: t, mediaFileHash: n, suggestedFileName: r };
    }
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i;
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[openMediaFile] Starting to open media file for msg ",
                "",
              ])),
            t.id.toString(),
          ),
            o("WAWebWindowsMediaFilesMetrics").incrMediaActionAttempt(
              "open_with",
              o("WAWebWindowsGatingUtils").isOpenWithSharedBufferEnabled(),
            ));
          var l =
              n("cr:17219") == null ||
              (i = n("cr:17219").getWindowsBridge(
                r("WAWebWindowsHybridBridgeInitiator")
                  .WAWebWindowsMediaFilesHelpers,
              )) == null
                ? void 0
                : i.mediaFiles,
            _ = G(t);
          if (_ == null) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[openMediaFile] Failed to get media info for msg ",
                  "",
                ])),
              t.id.toString(),
            );
            var f = new Error("Failed to get media info or media files bridge");
            throw (f.stack, f);
          }
          if (l == null) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[openMediaFile] Media files bridge is null for msg ",
                  "",
                ])),
              t.id.toString(),
            );
            var g = new Error("Failed to get media info or media files bridge");
            throw (g.stack, g);
          }
          var h = _.mediaFileHash,
            y = _.suggestedFileName;
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[openMediaFile] Ensuring media file is saved for msg ",
                "",
              ])),
            t.id.toString(),
          ),
            yield J(t),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[openMediaFile] opening cached file for msg ",
                  "",
                ])),
              t.id.toString(),
            ),
            a == null || a(t));
          var C = yield l.tryOpenCachedMediaFile(h, y);
          if (!C) {
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[openMediaFile] Failed to open cached media file for msg ",
                  "",
                ])),
              t.id.toString(),
            );
            var b = new Error("Failed to open cached media file");
            throw (b.stack, b);
          }
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[openMediaFile] Successfully opened media file for msg ",
                "",
              ])),
            t.id.toString(),
          ),
            o("WAWebWindowsMediaFilesMetrics").incrMediaActionSuccess(
              "open_with",
              o("WAWebWindowsGatingUtils").isOpenWithSharedBufferEnabled(),
            ));
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[saveAsMediaFile] Starting save as for msg ",
                "",
              ])),
            e.id.toString(),
          );
          var a =
              n("cr:17219") == null ||
              (t = n("cr:17219").getWindowsBridge(
                r("WAWebWindowsHybridBridgeInitiator")
                  .WAWebWindowsMediaFilesHelpers,
              )) == null
                ? void 0
                : t.mediaFiles,
            i = G(e);
          if (i == null) {
            o("WALogger").ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveAsMediaFile] Failed to get media info for msg ",
                  "",
                ])),
              e.id.toString(),
            );
            var l = new Error("Failed to get media info or media files bridge");
            throw (l.stack, l);
          }
          if (a == null) {
            o("WALogger").ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveAsMediaFile] Media files bridge is null for msg ",
                  "",
                ])),
              e.id.toString(),
            );
            var s = new Error("Failed to get media info or media files bridge");
            throw (s.stack, s);
          }
          var u = i.mediaFileHash,
            c = i.suggestedFileName;
          (o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[saveAsMediaFile] Ensuring media file is cached for msg ",
                "",
              ])),
            e.id.toString(),
          ),
            yield J(
              e,
              !0,
              o("WAWebWindowsGatingUtils").isSaveAsSharedBufferEnabled(),
            ));
          var d = yield a.saveCachedMediaFileAs == null
            ? void 0
            : a.saveCachedMediaFileAs(u, c);
          return d == null
            ? "unsupported"
            : d === o("WAWebWindowsHybridBridgeMediaFiles").SAVE_AS_SAVED
              ? "saved"
              : d === o("WAWebWindowsHybridBridgeMediaFiles").SAVE_AS_CANCELLED
                ? "cancelled"
                : "failed";
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a =
              n("cr:17219") == null ||
              (t = n("cr:17219").getWindowsBridge(
                r("WAWebWindowsHybridBridgeInitiator")
                  .WAWebWindowsMediaFilesHelpers,
              )) == null
                ? void 0
                : t.mediaFiles,
            i = G(e);
          if (i == null || a == null) return !1;
          var l = i.mediaFileHash,
            s = i.suggestedFileName,
            u = yield a.isCachedMediaFileExist(l, s);
          return (
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[isMediaFileSaved] File existence check result for msg ",
                  ": ",
                  "",
                ])),
              e.id.toString(),
              u ? "exists" : "does not exist",
            ),
            u
          );
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t, n) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i;
          (t === void 0 && (t = !1),
            a === void 0 &&
              (a = o(
                "WAWebWindowsGatingUtils",
              ).isOpenWithSharedBufferEnabled()),
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] Starting to save media file for msg ",
                  "",
                ])),
              e.id.toString(),
            ));
          var l =
              n("cr:17219") == null ||
              (i = n("cr:17219").getWindowsBridge(
                r("WAWebWindowsHybridBridgeInitiator")
                  .WAWebWindowsMediaFilesHelpers,
              )) == null
                ? void 0
                : i.mediaFiles,
            s = G(e);
          if (s == null) {
            o("WALogger").ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] Failed to get media info for msg ",
                  "",
                ])),
              e.id.toString(),
            );
            var u = new Error("Failed to get media info or media files bridge");
            throw (u.stack, u);
          }
          if (l == null) {
            o("WALogger").ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] Media files bridge is null for msg ",
                  "",
                ])),
              e.id.toString(),
            );
            var c = new Error("Failed to get media info or media files bridge");
            throw (c.stack, c);
          }
          var d = s.mediaData,
            m = s.mediaFileHash,
            p = s.suggestedFileName;
          o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "[saveMediaFile] checking cached file for msg ",
                "",
              ])),
            e.id.toString(),
          );
          var _ = yield l.isCachedMediaFileExist(m, p);
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "[saveMediaFile] Cached file existence check for msg ",
                ": ",
                "",
              ])),
            e.id.toString(),
            _ ? "exists" : "does not exist",
          );
          var f = (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[saveMediaFile] file missing, downloading msg ",
                    "",
                  ])),
                e.id.toString(),
              );
              var r = null;
              (yield o("WAWebFileSaver").FileSaver.downloadAsync(
                e,
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e, t, n) {
                      ((r = e), yield l.prepareForMediaFileSaving(e, t, n));
                    },
                  );
                  return function (t, n, r) {
                    return e.apply(this, arguments);
                  };
                })(),
                t,
              ),
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[saveMediaFile] Download preparation completed for msg ",
                      "",
                    ])),
                  e.id.toString(),
                ));
              var a = r;
              a != null &&
                a !== "" &&
                (o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "[saveMediaFile] waiting for download for msg ",
                      "",
                    ])),
                  e.id.toString(),
                ),
                yield l.waitTillMediaDownloadCompletes(a, p, m),
                o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "[saveMediaFile] Media download completed for msg ",
                      "",
                    ])),
                  e.id.toString(),
                ));
            });
            return function () {
              return r.apply(this, arguments);
            };
          })();
          d.trigger("mediaFileSavingStarted");
          var g = (function () {
              var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var n = yield o(
                      "WAWebFileSaverDownloadData",
                    ).getMsgDownloadData(e, t),
                    r = n.blob;
                  if (r.size > U) return "oversize";
                  var a = H(),
                    i = yield l.requestSharedBufferForMediaFile == null
                      ? void 0
                      : l.requestSharedBufferForMediaFile(a, r.size);
                  if (i == null) return "unsupported";
                  yield ee(i, r);
                  var s = yield l.saveMediaFileFromSharedBuffer == null
                    ? void 0
                    : l.saveMediaFileFromSharedBuffer(a, m, p);
                  if (s !== !0) {
                    var u = new Error(
                      "saveMediaFileFromSharedBuffer did not succeed",
                    );
                    throw (u.stack, u);
                  }
                  return "ok";
                },
              );
              return function () {
                return r.apply(this, arguments);
              };
            })(),
            h = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    e: {
                      var t = yield g();
                      if (t === "oversize") {
                        (r("WAWebODS").incr(
                          "web.hybrid.bridge.media_files.open_with.oversize_routed_post_fetch",
                        ),
                          yield f());
                        break e;
                      }
                      if (t === "unsupported") {
                        (r("WAWebODS").incr(
                          "web.hybrid.bridge.media_files.open_with.unsupported_routed",
                        ),
                          yield f());
                        break e;
                      }
                      if (t === "ok") {
                        r("WAWebODS").incr(
                          "web.hybrid.bridge.media_files.open_with.buffer_transfer_ok",
                        );
                        break e;
                      }
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    }
                  } catch (t) {
                    var n = r("getErrorSafe")(t);
                    if (n.name === o("WAAbortError").ABORT_ERROR) throw n;
                    (o("WALogger")
                      .ERROR(
                        T ||
                          (T = babelHelpers.taggedTemplateLiteralLoose([
                            "[saveMediaFile] shared-buffer open-with failed for msg ",
                            "",
                          ])),
                        e.id.toString(),
                      )
                      .catching(n)
                      .sendLogs("open-with-shared-buffer-failed"),
                      r("WAWebODS").incr(
                        "web.hybrid.bridge.media_files.open_with.fallback_used",
                      ));
                    try {
                      yield f();
                    } catch (e) {
                      throw (
                        r("WAWebODS").incr(
                          "web.hybrid.bridge.media_files.open_with.fallback_failed",
                        ),
                        e
                      );
                    }
                  }
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          if (!_) {
            o("WAWebWindowsMediaFilesMetrics").incrMediaActionAttempt(
              "download",
              a,
            );
            var y = d.size != null && d.size <= U;
            a && y
              ? yield h()
              : (a &&
                  r("WAWebODS").incr(
                    "web.hybrid.bridge.media_files.open_with.oversize_routed_pre_fetch",
                  ),
                yield f());
          }
          o("WALogger").LOG(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "[saveMediaFile] verifying file after save for msg ",
                "",
              ])),
            e.id.toString(),
          );
          var P = yield l.isCachedMediaFileExist(m, p);
          if (!P) {
            (o("WALogger").ERROR(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] file missing after save for msg ",
                  "",
                ])),
              e.id.toString(),
            ),
              d.trigger("mediaFileSavingFailed"));
            var N = new Error("Failed to save media file");
            throw (N.stack, N);
          }
          (_ ||
            o("WAWebWindowsMediaFilesMetrics").incrMediaActionSuccess(
              "download",
              a,
            ),
            d.trigger("mediaFileSavedOnFileSystem"),
            o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] Successfully saved media file for msg ",
                  "",
                ])),
              e.id.toString(),
            ));
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e, t) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.byteLength !== t.size) {
            var n = new Error(
              "Shared buffer size " +
                e.byteLength +
                " does not match blob size " +
                t.size,
            );
            throw (n.stack, n);
          }
          var r = new Uint8Array(e),
            a = 0,
            i = !1,
            l = !1,
            s;
          try {
            for (
              var u = babelHelpers.asyncIterator(
                  o("WAStreamAsyncIterator").streamAsyncIterator(t.stream()),
                ),
                c;
              (i = !(c = yield u.next()).done);
              i = !1
            ) {
              var d = c.value;
              d != null && (r.set(d, a), (a += d.byteLength));
            }
          } catch (e) {
            ((l = !0), (s = e));
          } finally {
            try {
              i && u.return != null && (yield u.return());
            } finally {
              if (l) throw s;
            }
          }
        })),
        te.apply(this, arguments)
      );
    }
    function ne() {
      var e,
        t =
          n("cr:17219") == null ||
          (e = n("cr:17219").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebWindowsMediaFilesHelpers,
          )) == null
            ? void 0
            : e.mediaFiles;
      return t != null;
    }
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (e.length === 0) {
            o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "[selectFolderAndSaveFiles] No media infos to save",
                ])),
            );
            return;
          }
          var a =
            n("cr:17219") == null ||
            (t = n("cr:17219").getWindowsBridge(
              r("WAWebWindowsHybridBridgeInitiator")
                .WAWebWindowsMediaFilesHelpers,
            )) == null
              ? void 0
              : t.mediaFiles;
          if (a == null) {
            o("WALogger").ERROR(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "[selectFolderAndSaveFiles] Media files bridge is null",
                ])),
            );
            var i = new Error("Failed to get media files bridge");
            throw (i.stack, i);
          }
          var l = yield a.selectFolderForBulkMediaSaving();
          if (l == null || l === "") {
            o("WALogger").LOG(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "[selectFolderAndSaveFiles] no folder selected, cancelled",
                ])),
            );
            return;
          }
          yield o("WAWebFileSaver").FileSaver.downloadAsync(
            e,
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t, n) {
                  yield a.prepareForZipArchiveSavingAndUnarchiveToFolder(
                    e,
                    l,
                    t,
                    n,
                  );
                },
              );
              return function (t, n, r) {
                return e.apply(this, arguments);
              };
            })(),
          );
        })),
        oe.apply(this, arguments)
      );
    }
    function ae() {
      var e,
        t =
          n("cr:17219") == null ||
          (e = n("cr:17219").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebWindowsMediaFilesHelpers,
          )) == null
            ? void 0
            : e.mediaFiles;
      return t != null;
    }
    function ie(e) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          o("WALogger").LOG(
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
                "[copyMediaFile] Starting to copy media file for msg ",
                "",
              ])),
            e.id.toString(),
          );
          var a =
              n("cr:17219") == null ||
              (t = n("cr:17219").getWindowsBridge(
                r("WAWebWindowsHybridBridgeInitiator")
                  .WAWebWindowsMediaFilesHelpers,
              )) == null
                ? void 0
                : t.mediaFiles,
            i = G(e);
          if (i == null) {
            o("WALogger").ERROR(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "[copyMediaFile] Failed to get media info for msg ",
                  "",
                ])),
              e.id.toString(),
            );
            var l = new Error("Failed to get media info or media files bridge");
            throw (l.stack, l);
          }
          if (a == null) {
            o("WALogger").ERROR(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "[copyMediaFile] Media files bridge is null for msg ",
                  "",
                ])),
              e.id.toString(),
            );
            var s = new Error("Failed to get media info or media files bridge");
            throw (s.stack, s);
          }
          var u = i.mediaFileHash,
            c = i.suggestedFileName;
          (o("WALogger").LOG(
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
                "[copyMediaFile] Ensuring media file is saved for msg ",
                "",
              ])),
            e.id.toString(),
          ),
            yield J(e),
            o("WALogger").LOG(
              B ||
                (B = babelHelpers.taggedTemplateLiteralLoose([
                  "[copyMediaFile] copying cached file for msg ",
                  "",
                ])),
              e.id.toString(),
            ));
          var d = yield a.tryCopyCachedMediaFile(u);
          if (!d) {
            o("WALogger").ERROR(
              W ||
                (W = babelHelpers.taggedTemplateLiteralLoose([
                  "[copyMediaFile] Failed to copy cached media file for msg ",
                  "",
                ])),
              e.id.toString(),
            );
            var m = new Error("Failed to copy cached media file");
            throw (m.stack, m);
          }
          return (
            o("WALogger").LOG(
              q ||
                (q = babelHelpers.taggedTemplateLiteralLoose([
                  "[copyMediaFile] Successfully copied media file for msg ",
                  "",
                ])),
              e.id.toString(),
            ),
            c
          );
        })),
        le.apply(this, arguments)
      );
    }
    ((l.getMediaFileInfo = G),
      (l.openMediaFile = z),
      (l.saveAsMediaFile = K),
      (l.isMediaFileSaved = X),
      (l.saveMediaFile = J),
      (l.copyBlobIntoSharedBuffer = ee),
      (l.supportsBulkMediaSaving = ne),
      (l.selectFolderAndSaveFiles = re),
      (l.supportsMediaFileCopy = ae),
      (l.copyMediaFile = ie));
  },
  98,
);
