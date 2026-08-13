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
      O = 2147483648,
      B = 0;
    function W() {
      return B++;
    }
    function q(e) {
      var t = e.mediaData;
      if (t == null) return null;
      var n = t.filehash;
      if (n == null) return null;
      var r = o("WAWebFilenameManager").getDefaultName(e);
      return { mediaData: t, mediaFileHash: n, suggestedFileName: r };
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
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
            ));
          var l =
              n("cr:17219") == null ||
              (i = n("cr:17219").getWindowsBridge(
                r("WAWebWindowsHybridBridgeInitiator")
                  .WAWebWindowsMediaFilesHelpers,
              )) == null
                ? void 0
                : i.mediaFiles,
            _ = q(t);
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
            yield z(t),
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
            ));
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a =
              n("cr:17219") == null ||
              (t = n("cr:17219").getWindowsBridge(
                r("WAWebWindowsHybridBridgeInitiator")
                  .WAWebWindowsMediaFilesHelpers,
              )) == null
                ? void 0
                : t.mediaFiles,
            i = q(e);
          if (i == null || a == null) return !1;
          var l = i.mediaFileHash,
            s = i.suggestedFileName,
            u = yield a.isCachedMediaFileExist(l, s);
          return (
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a;
          (t === void 0 && (t = !1),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] Starting to save media file for msg ",
                  "",
                ])),
              e.id.toString(),
            ));
          var i =
              n("cr:17219") == null ||
              (a = n("cr:17219").getWindowsBridge(
                r("WAWebWindowsHybridBridgeInitiator")
                  .WAWebWindowsMediaFilesHelpers,
              )) == null
                ? void 0
                : a.mediaFiles,
            l = q(e);
          if (l == null) {
            o("WALogger").ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] Failed to get media info for msg ",
                  "",
                ])),
              e.id.toString(),
            );
            var s = new Error("Failed to get media info or media files bridge");
            throw (s.stack, s);
          }
          if (i == null) {
            o("WALogger").ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] Media files bridge is null for msg ",
                  "",
                ])),
              e.id.toString(),
            );
            var u = new Error("Failed to get media info or media files bridge");
            throw (u.stack, u);
          }
          var c = l.mediaData,
            d = l.mediaFileHash,
            m = l.suggestedFileName;
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[saveMediaFile] checking cached file for msg ",
                "",
              ])),
            e.id.toString(),
          );
          var p = yield i.isCachedMediaFileExist(d, m);
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[saveMediaFile] Cached file existence check for msg ",
                ": ",
                "",
              ])),
            e.id.toString(),
            p ? "exists" : "does not exist",
          );
          var _ = (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
                      ((r = e), yield i.prepareForMediaFileSaving(e, t, n));
                    },
                  );
                  return function (t, n, r) {
                    return e.apply(this, arguments);
                  };
                })(),
                t,
              ),
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[saveMediaFile] Download preparation completed for msg ",
                      "",
                    ])),
                  e.id.toString(),
                ));
              var a = r;
              a != null &&
                a !== "" &&
                (o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[saveMediaFile] waiting for download for msg ",
                      "",
                    ])),
                  e.id.toString(),
                ),
                yield i.waitTillMediaDownloadCompletes(a, m, d),
                o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
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
          c.trigger("mediaFileSavingStarted");
          var T = (function () {
              var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var n = yield o(
                      "WAWebFileSaverDownloadData",
                    ).getMsgDownloadData(e, t),
                    r = n.blob;
                  if (r.size > O) return "oversize";
                  var a = W(),
                    l = yield i.requestSharedBufferForMediaFile == null
                      ? void 0
                      : i.requestSharedBufferForMediaFile(a, r.size);
                  if (l == null) return "unsupported";
                  yield K(l, r);
                  var s = yield i.saveMediaFileFromSharedBuffer == null
                    ? void 0
                    : i.saveMediaFileFromSharedBuffer(a, d, m);
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
            D = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    e: {
                      var t = yield T();
                      if (t === "oversize") {
                        (r("WAWebODS").incr(
                          "web.hybrid.bridge.media_files.open_with.oversize_routed_post_fetch",
                        ),
                          yield _());
                        break e;
                      }
                      if (t === "unsupported") {
                        (r("WAWebODS").incr(
                          "web.hybrid.bridge.media_files.open_with.unsupported_routed",
                        ),
                          yield _());
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
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
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
                      yield _();
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
          if (!p) {
            o("WAWebWindowsMediaFilesMetrics").incrMediaActionAttempt(
              "download",
            );
            var x = o(
                "WAWebWindowsGatingUtils",
              ).isOpenWithSharedBufferEnabled(),
              $ = c.size != null && c.size <= O;
            x && $
              ? yield D()
              : (x &&
                  r("WAWebODS").incr(
                    "web.hybrid.bridge.media_files.open_with.oversize_routed_pre_fetch",
                  ),
                yield _());
          }
          o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "[saveMediaFile] verifying file after save for msg ",
                "",
              ])),
            e.id.toString(),
          );
          var P = yield i.isCachedMediaFileExist(d, m);
          if (!P) {
            (o("WALogger").ERROR(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] file missing after save for msg ",
                  "",
                ])),
              e.id.toString(),
            ),
              c.trigger("mediaFileSavingFailed"));
            var N = new Error("Failed to save media file");
            throw (N.stack, N);
          }
          (p ||
            o("WAWebWindowsMediaFilesMetrics").incrMediaActionSuccess(
              "download",
            ),
            c.trigger("mediaFileSavedOnFileSystem"),
            o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] Successfully saved media file for msg ",
                  "",
                ])),
              e.id.toString(),
            ));
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        Q.apply(this, arguments)
      );
    }
    function X() {
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
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (e.length === 0) {
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
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
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "[selectFolderAndSaveFiles] Media files bridge is null",
                ])),
            );
            var i = new Error("Failed to get media files bridge");
            throw (i.stack, i);
          }
          var l = yield a.selectFolderForBulkMediaSaving();
          if (l == null || l === "") {
            o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
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
        J.apply(this, arguments)
      );
    }
    function Z() {
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
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
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
            i = q(e);
          if (i == null) {
            o("WALogger").ERROR(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
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
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
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
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "[copyMediaFile] Ensuring media file is saved for msg ",
                "",
              ])),
            e.id.toString(),
          ),
            yield z(e),
            o("WALogger").LOG(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  "[copyMediaFile] copying cached file for msg ",
                  "",
                ])),
              e.id.toString(),
            ));
          var d = yield a.tryCopyCachedMediaFile(u);
          if (!d) {
            o("WALogger").ERROR(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
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
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "[copyMediaFile] Successfully copied media file for msg ",
                  "",
                ])),
              e.id.toString(),
            ),
            c
          );
        })),
        te.apply(this, arguments)
      );
    }
    ((l.getMediaFileInfo = q),
      (l.openMediaFile = U),
      (l.isMediaFileSaved = H),
      (l.saveMediaFile = z),
      (l.copyBlobIntoSharedBuffer = K),
      (l.supportsBulkMediaSaving = X),
      (l.selectFolderAndSaveFiles = Y),
      (l.supportsMediaFileCopy = Z),
      (l.copyMediaFile = ee));
  },
  98,
);
