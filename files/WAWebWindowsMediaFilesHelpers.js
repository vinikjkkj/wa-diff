__d(
  "WAWebWindowsMediaFilesHelpers",
  [
    "WALogger",
    "WAWebFileSaver",
    "WAWebFilenameManager",
    "asyncToGeneratorRuntime",
    "cr:17219",
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
      A;
    function F(e) {
      var t = e.mediaData;
      if (t == null) return null;
      var n = t.filehash;
      if (n == null) return null;
      var r = o("WAWebFilenameManager").getDefaultName(e);
      return { mediaData: t, mediaFileHash: n, suggestedFileName: r };
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[openMediaFile] Starting to open media file for msg ",
                "",
              ])),
            t.id.toString(),
          );
          var i =
              n("cr:17219") == null ||
              (a = n("cr:17219").getWindowsBridge()) == null
                ? void 0
                : a.mediaFiles,
            l = F(t);
          if (l == null) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[openMediaFile] Failed to get media info for msg ",
                  "",
                ])),
              t.id.toString(),
            );
            var _ = new Error("Failed to get media info or media files bridge");
            throw (_.stack, _);
          }
          if (i == null) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[openMediaFile] Media files bridge is null for msg ",
                  "",
                ])),
              t.id.toString(),
            );
            var f = new Error("Failed to get media info or media files bridge");
            throw (f.stack, f);
          }
          var g = l.mediaFileHash,
            h = l.suggestedFileName;
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[openMediaFile] Ensuring media file is saved for msg ",
                "",
              ])),
            t.id.toString(),
          ),
            yield U(t),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[openMediaFile] opening cached file for msg ",
                  "",
                ])),
              t.id.toString(),
            ),
            r == null || r(t));
          var y = yield i.tryOpenCachedMediaFile(g, h);
          if (!y) {
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[openMediaFile] Failed to open cached media file for msg ",
                  "",
                ])),
              t.id.toString(),
            );
            var C = new Error("Failed to open cached media file");
            throw (C.stack, C);
          }
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[openMediaFile] Successfully opened media file for msg ",
                "",
              ])),
            t.id.toString(),
          );
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r =
              n("cr:17219") == null ||
              (t = n("cr:17219").getWindowsBridge()) == null
                ? void 0
                : t.mediaFiles,
            a = F(e);
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
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[saveMediaFile] Starting to save media file for msg ",
                "",
              ])),
            e.id.toString(),
          );
          var r =
              n("cr:17219") == null ||
              (t = n("cr:17219").getWindowsBridge()) == null
                ? void 0
                : t.mediaFiles,
            a = F(e);
          if (a == null) {
            o("WALogger").ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] Failed to get media info for msg ",
                  "",
                ])),
              e.id.toString(),
            );
            var i = new Error("Failed to get media info or media files bridge");
            throw (i.stack, i);
          }
          if (r == null) {
            o("WALogger").ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] Media files bridge is null for msg ",
                  "",
                ])),
              e.id.toString(),
            );
            var l = new Error("Failed to get media info or media files bridge");
            throw (l.stack, l);
          }
          var s = a.mediaData,
            u = a.mediaFileHash,
            c = a.suggestedFileName;
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[saveMediaFile] checking cached file for msg ",
                "",
              ])),
            e.id.toString(),
          );
          var d = yield r.isCachedMediaFileExist(u, c);
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[saveMediaFile] Cached file existence check for msg ",
                ": ",
                "",
              ])),
            e.id.toString(),
            d ? "exists" : "does not exist",
          );
          var m = null;
          (d ||
            (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] file missing, downloading msg ",
                  "",
                ])),
              e.id.toString(),
            ),
            yield o("WAWebFileSaver").FileSaver.downloadAsync(
              e,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t, n) {
                    ((m = e), yield r.prepareForMediaFileSaving(e, t, n));
                  },
                );
                return function (t, n, r) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] Download preparation completed for msg ",
                  "",
                ])),
              e.id.toString(),
            )),
            s.trigger("mediaFileSavingStarted"),
            m != null &&
              m !== "" &&
              (o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[saveMediaFile] waiting for download for msg ",
                    "",
                  ])),
                e.id.toString(),
              ),
              yield r.waitTillMediaDownloadCompletes(m != null ? m : "", c, u),
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[saveMediaFile] Media download completed for msg ",
                    "",
                  ])),
                e.id.toString(),
              )),
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] verifying file after save for msg ",
                  "",
                ])),
              e.id.toString(),
            ));
          var p = yield r.isCachedMediaFileExist(u, c);
          if (!p) {
            (o("WALogger").ERROR(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] file missing after save for msg ",
                  "",
                ])),
              e.id.toString(),
            ),
              s.trigger("mediaFileSavingFailed"));
            var _ = new Error("Failed to save media file");
            throw (_.stack, _);
          }
          (s.trigger("mediaFileSavedOnFileSystem"),
            o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "[saveMediaFile] Successfully saved media file for msg ",
                  "",
                ])),
              e.id.toString(),
            ));
        })),
        V.apply(this, arguments)
      );
    }
    function H() {
      var e,
        t =
          n("cr:17219") == null ||
          (e = n("cr:17219").getWindowsBridge()) == null
            ? void 0
            : e.mediaFiles;
      return t != null;
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (e.length === 0) {
            o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
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
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "[selectFolderAndSaveFiles] Media files bridge is null",
                ])),
            );
            var a = new Error("Failed to get media files bridge");
            throw (a.stack, a);
          }
          var i = yield r.selectFolderForBulkMediaSaving();
          if (i == null || i === "") {
            o("WALogger").LOG(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
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
        z.apply(this, arguments)
      );
    }
    function j() {
      var e,
        t =
          n("cr:17219") == null ||
          (e = n("cr:17219").getWindowsBridge()) == null
            ? void 0
            : e.mediaFiles;
      return t != null;
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          o("WALogger").LOG(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
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
            a = F(e);
          if (a == null) {
            o("WALogger").ERROR(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
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
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
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
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "[copyMediaFile] Ensuring media file is saved for msg ",
                "",
              ])),
            e.id.toString(),
          ),
            yield U(e),
            o("WALogger").LOG(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "[copyMediaFile] copying cached file for msg ",
                  "",
                ])),
              e.id.toString(),
            ));
          var c = yield r.tryCopyCachedMediaFile(s);
          if (!c) {
            o("WALogger").ERROR(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
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
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "[copyMediaFile] Successfully copied media file for msg ",
                  "",
                ])),
              e.id.toString(),
            ),
            u
          );
        })),
        Q.apply(this, arguments)
      );
    }
    ((l.getMediaFileInfo = F),
      (l.openMediaFile = O),
      (l.isMediaFileSaved = W),
      (l.saveMediaFile = U),
      (l.supportsBulkMediaSaving = H),
      (l.selectFolderAndSaveFiles = G),
      (l.supportsMediaFileCopy = j),
      (l.copyMediaFile = K));
  },
  98,
);
