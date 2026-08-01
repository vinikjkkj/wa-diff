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
      O = 0,
      B = 2 * 1024 * 1024 * 1024,
      W = 0;
    function q() {
      return W++;
    }
    function U(e) {
      var t = e.mediaData;
      if (t == null) return null;
      var n = t.filehash;
      if (n == null) return null;
      var r = o("WAWebFilenameManager").getDefaultName(e);
      return { mediaData: t, mediaFileHash: n, suggestedFileName: r };
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i;
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[openMediaFile] Starting to open media file for msg ",
                "",
              ])),
            t.id.toString(),
          ),
            (O += 1));
          var l = O > 1;
          l
            ? r("WAWebODS").incr(
                "web.hybrid.bridge.media_files.open_with.attempt.repeat",
              )
            : r("WAWebODS").incr(
                "web.hybrid.bridge.media_files.open_with.attempt.first",
              );
          var _ =
              n("cr:17219") == null ||
              (i = n("cr:17219").getWindowsBridge()) == null
                ? void 0
                : i.mediaFiles,
            f = U(t);
          if (f == null) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[openMediaFile] Failed to get media info for msg ",
                  "",
                ])),
              t.id.toString(),
            );
            var g = new Error("Failed to get media info or media files bridge");
            throw (g.stack, g);
          }
          if (_ == null) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[openMediaFile] Media files bridge is null for msg ",
                  "",
                ])),
              t.id.toString(),
            );
            var h = new Error("Failed to get media info or media files bridge");
            throw (h.stack, h);
          }
          var y = f.mediaFileHash,
            C = f.suggestedFileName;
          try {
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[openMediaFile] Ensuring media file is saved for msg ",
                  "",
                ])),
              t.id.toString(),
            ),
              yield j(t),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[openMediaFile] opening cached file for msg ",
                    "",
                  ])),
                t.id.toString(),
              ),
              a == null || a(t));
            var b = yield _.tryOpenCachedMediaFile(y, C);
            if (!b) {
              o("WALogger").ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[openMediaFile] Failed to open cached media file for msg ",
                    "",
                  ])),
                t.id.toString(),
              );
              var v = new Error("Failed to open cached media file");
              throw (v.stack, v);
            }
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[openMediaFile] Successfully opened media file for msg ",
                  "",
                ])),
              t.id.toString(),
            ),
              l &&
                r("WAWebODS").incr(
                  "web.hybrid.bridge.media_files.open_with.repeat_ok",
                ));
          } catch (e) {
            throw (
              l &&
                r("WAWebODS").incr(
                  "web.hybrid.bridge.media_files.open_with.repeat_fail",
                ),
              e
            );
          }
        })),
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r =
              n("cr:17219") == null ||
              (t = n("cr:17219").getWindowsBridge()) == null
                ? void 0
                : t.mediaFiles,
            a = U(e);
          if (a == null || r == null) return !1;
          var i = a.mediaFileHash,
            l = a.suggestedFileName,
            s = yield r.isCachedMediaFileExist(i, l);
          return (
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[isMediaFileSaved] File existence check result for msg ",
                  ": ",
                  "",
                ])),
              e.id.toString(),
              s ? "exists" : "does not exist",
            ),
            s
          );
        })),
        z.apply(this, arguments)
      );
    }
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              (a = n("cr:17219").getWindowsBridge()) == null
                ? void 0
                : a.mediaFiles,
            l = U(e);
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
                  if (r.size > B) return "oversize";
                  var a = q(),
                    l = yield i.requestSharedBufferForMediaFile == null
                      ? void 0
                      : i.requestSharedBufferForMediaFile(a, r.size);
                  if (l == null) return "unsupported";
                  yield Q(l, r);
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
            var x = o(
                "WAWebWindowsGatingUtils",
              ).isOpenWithSharedBufferEnabled(),
              $ = c.size != null && c.size <= B;
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
          (c.trigger("mediaFileSavedOnFileSystem"),
            o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] Successfully saved media file for msg ",
                  "",
                ])),
              e.id.toString(),
            ));
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e, t) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        X.apply(this, arguments)
      );
    }
    function Y() {
      var e,
        t =
          n("cr:17219") == null ||
          (e = n("cr:17219").getWindowsBridge()) == null
            ? void 0
            : e.mediaFiles;
      return t != null;
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var r =
            n("cr:17219") == null ||
            (t = n("cr:17219").getWindowsBridge()) == null
              ? void 0
              : t.mediaFiles;
          if (r == null) {
            o("WALogger").ERROR(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "[selectFolderAndSaveFiles] Media files bridge is null",
                ])),
            );
            var a = new Error("Failed to get media files bridge");
            throw (a.stack, a);
          }
          var i = yield r.selectFolderForBulkMediaSaving();
          if (i == null || i === "") {
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
                  yield r.prepareForZipArchiveSavingAndUnarchiveToFolder(
                    e,
                    i,
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
        Z.apply(this, arguments)
      );
    }
    function ee() {
      var e,
        t =
          n("cr:17219") == null ||
          (e = n("cr:17219").getWindowsBridge()) == null
            ? void 0
            : e.mediaFiles;
      return t != null;
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
                "[copyMediaFile] Starting to copy media file for msg ",
                "",
              ])),
            e.id.toString(),
          );
          var r =
              n("cr:17219") == null ||
              (t = n("cr:17219").getWindowsBridge()) == null
                ? void 0
                : t.mediaFiles,
            a = U(e);
          if (a == null) {
            o("WALogger").ERROR(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "[copyMediaFile] Failed to get media info for msg ",
                  "",
                ])),
              e.id.toString(),
            );
            var i = new Error("Failed to get media info or media files bridge");
            throw (i.stack, i);
          }
          if (r == null) {
            o("WALogger").ERROR(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "[copyMediaFile] Media files bridge is null for msg ",
                  "",
                ])),
              e.id.toString(),
            );
            var l = new Error("Failed to get media info or media files bridge");
            throw (l.stack, l);
          }
          var s = a.mediaFileHash,
            u = a.suggestedFileName;
          (o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "[copyMediaFile] Ensuring media file is saved for msg ",
                "",
              ])),
            e.id.toString(),
          ),
            yield j(e),
            o("WALogger").LOG(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  "[copyMediaFile] copying cached file for msg ",
                  "",
                ])),
              e.id.toString(),
            ));
          var c = yield r.tryCopyCachedMediaFile(s);
          if (!c) {
            o("WALogger").ERROR(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "[copyMediaFile] Failed to copy cached media file for msg ",
                  "",
                ])),
              e.id.toString(),
            );
            var d = new Error("Failed to copy cached media file");
            throw (d.stack, d);
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
            u
          );
        })),
        ne.apply(this, arguments)
      );
    }
    ((l.getMediaFileInfo = U),
      (l.openMediaFile = V),
      (l.isMediaFileSaved = G),
      (l.saveMediaFile = j),
      (l.copyBlobIntoSharedBuffer = Q),
      (l.supportsBulkMediaSaving = Y),
      (l.selectFolderAndSaveFiles = J),
      (l.supportsMediaFileCopy = ee),
      (l.copyMediaFile = te));
  },
  98,
);
