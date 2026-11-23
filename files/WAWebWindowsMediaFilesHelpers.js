__d(
  "WAWebWindowsMediaFilesHelpers",
  [
    "WAAbortError",
    "WALogger",
    "WAStreamAsyncIterator",
    "WAWebActiveIntegrityHoldout",
    "WAWebDualUploadsPreferredMsg",
    "WAWebFileSaver",
    "WAWebFileSaverDownloadData",
    "WAWebFilenameManager",
    "WAWebHarmfulFileWarningGate",
    "WAWebMediaCleanFileName",
    "WAWebODS",
    "WAWebWindowsGatingUtils",
    "WAWebWindowsHybridBridgeCommon",
    "WAWebWindowsHybridBridgeInitiator",
    "WAWebWindowsHybridBridgeMediaFiles",
    "WAWebWindowsMediaFileExistsCache",
    "WAWebWindowsMediaFilesMetrics",
    "cr:17219",
    "getErrorSafe",
    "justknobx",
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
      U,
      V,
      H,
      G = 2147483648,
      z = 0;
    function j() {
      return z++;
    }
    function K(e, t) {
      var n = t === void 0 ? {} : t,
        r = n.isPreResolved,
        a = r === void 0 ? !1 : r,
        i = a ? e : o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(e),
        l = i.mediaData;
      if (l == null) return null;
      var s = l.filehash;
      if (s == null) return null;
      var u = o("WAWebFilenameManager").getDefaultName(i);
      return {
        mediaData: l,
        mediaFileHash: s,
        suggestedFileName: u,
        target: i,
      };
    }
    function Q(e) {
      return !o("WAWebMediaCleanFileName").hasExecutableExtension(
        o("WAWebFilenameManager").getDefaultName(
          o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(e),
        ),
      );
    }
    async function X(t) {
      var a;
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
      var i =
          n("cr:17219") == null ||
          (a = n("cr:17219").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebWindowsMediaFilesHelpers,
          )) == null
            ? void 0
            : a.mediaFiles,
        l = K(t);
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
      if (o("WAWebMediaCleanFileName").hasExecutableExtension(h)) {
        var y = new Error("Unsafe file type cannot be opened");
        throw (y.stack, y);
      }
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[openMediaFile] Ensuring media file is saved for msg ",
            "",
          ])),
        t.id.toString(),
      ),
        await oe(l.target, { isPreResolved: !0 }),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[openMediaFile] opening cached file for msg ",
              "",
            ])),
          t.id.toString(),
        ));
      var C = await i.tryOpenCachedMediaFile(g, h);
      if (!C) {
        (o("WAWebWindowsMediaFileExistsCache").forgetCachedMediaFile(g, h),
          o("WALogger").ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[openMediaFile] Failed to open cached media file for msg ",
                "",
              ])),
            t.id.toString(),
          ));
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
    }
    async function Y(e) {
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
        i = K(e, { isPreResolved: !0 });
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
      return (
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[saveAsMediaFile] Ensuring media file is cached for msg ",
              "",
            ])),
          e.id.toString(),
        ),
        await oe(e, {
          isPreResolved: !0,
          isSharedBufferEnabled: o(
            "WAWebWindowsGatingUtils",
          ).isSaveAsSharedBufferEnabled(),
          shouldThrowAbortError: !0,
        }),
        J(a, u, c)
      );
    }
    async function J(e, t, n) {
      var a;
      try {
        a = await (e.saveCachedMediaFileAs == null
          ? void 0
          : e.saveCachedMediaFileAs(t, n));
      } catch (e) {
        var i = r("getErrorSafe")(e);
        if (o("WAAbortError").isAbortError(i)) throw i;
        return (
          o("WALogger")
            .ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[save-as-shared-buffer] Native Save As bridge call rejected after caching; falling back",
                ])),
            )
            .catching(i)
            .sendLogs("save-as-shared-buffer-failed"),
          "failed"
        );
      }
      if (
        (o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[save-as-shared-buffer] Native Save As result after caching: ",
              "",
            ])),
          a,
        ),
        a == null)
      )
        return "unsupported";
      var l =
        a === o("WAWebWindowsHybridBridgeMediaFiles").SAVE_AS_SAVED
          ? "saved"
          : a === o("WAWebWindowsHybridBridgeMediaFiles").SAVE_AS_CANCELLED
            ? "cancelled"
            : "failed";
      return (
        l === "failed" &&
          o("WAWebWindowsMediaFileExistsCache").forgetCachedMediaFile(t, n),
        l
      );
    }
    function Z() {
      var e;
      return (
        ((e = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge()) ==
          null || (e = e.mediaFiles) == null
          ? void 0
          : e.allowDragOutDownload) != null
      );
    }
    async function ee(e) {
      var t,
        a =
          n("cr:17219") == null ||
          (t = n("cr:17219").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebWindowsMediaFilesHelpers,
          )) == null
            ? void 0
            : t.mediaFiles;
      try {
        await (a == null || a.allowDragOutDownload == null
          ? void 0
          : a.allowDragOutDownload(e));
      } catch (e) {
        o("WALogger")
          .WARN(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[allowDragOutDownload] native did not register the drag-out download",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    async function te(e) {
      var t,
        o =
          n("cr:17219") == null ||
          (t = n("cr:17219").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebWindowsMediaFilesHelpers,
          )) == null
            ? void 0
            : t.mediaFiles,
        a = ne(e);
      if (a == null) return null;
      var i = await (o == null || o.registerCachedMediaFileForDragOut == null
        ? void 0
        : o.registerCachedMediaFileForDragOut(
            a.mediaFileHash,
            a.suggestedFileName,
          ));
      if (i == null || i === "") return null;
      var l = new URL(i, window.location.origin);
      return l.origin === window.location.origin ? l.href : null;
    }
    function ne(e) {
      var t = K(e);
      return r("justknobx")._("8497") &&
        t != null &&
        o("WAWebHarmfulFileWarningGate").shouldShowHarmfulFileWarning(
          t.target,
        ) &&
        !o("WAWebActiveIntegrityHoldout").isSuppressedByActiveIntegrityHoldout()
        ? null
        : t;
    }
    async function re(e) {
      var t,
        a =
          n("cr:17219") == null ||
          (t = n("cr:17219").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebWindowsMediaFilesHelpers,
          )) == null
            ? void 0
            : t.mediaFiles,
        i = K(e);
      if (i == null || a == null) return !1;
      var l = i.mediaFileHash,
        s = i.suggestedFileName,
        u = await o(
          "WAWebWindowsMediaFileExistsCache",
        ).checkCachedMediaFileExists(a, l, s);
      return (
        o("WALogger").LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "[isMediaFileSaved] File existence check result for msg ",
              ": ",
              "",
            ])),
          e.id.toString(),
          u ? "exists" : "does not exist",
        ),
        u
      );
    }
    async function oe(e, t) {
      var a,
        i = t === void 0 ? {} : t,
        l = i.isPreResolved,
        s = l === void 0 ? !1 : l,
        u = i.isSharedBufferEnabled,
        c =
          u === void 0
            ? o("WAWebWindowsGatingUtils").isOpenWithSharedBufferEnabled()
            : u,
        d = i.shouldThrowAbortError,
        m = d === void 0 ? !1 : d;
      o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "[saveMediaFile] Starting to save media file for msg ",
            "",
          ])),
        e.id.toString(),
      );
      var p =
          n("cr:17219") == null ||
          (a = n("cr:17219").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebWindowsMediaFilesHelpers,
          )) == null
            ? void 0
            : a.mediaFiles,
        _ = K(e, { isPreResolved: s });
      if (_ == null) {
        o("WALogger").ERROR(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "[saveMediaFile] Failed to get media info for msg ",
              "",
            ])),
          e.id.toString(),
        );
        var f = new Error("Failed to get media info or media files bridge");
        throw (f.stack, f);
      }
      if (p == null) {
        o("WALogger").ERROR(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "[saveMediaFile] Media files bridge is null for msg ",
              "",
            ])),
          e.id.toString(),
        );
        var g = new Error("Failed to get media info or media files bridge");
        throw (g.stack, g);
      }
      var h = _.mediaData,
        y = _.mediaFileHash,
        C = _.suggestedFileName,
        b = _.target;
      o("WALogger").LOG(
        E ||
          (E = babelHelpers.taggedTemplateLiteralLoose([
            "[saveMediaFile] checking cached file for msg ",
            "",
          ])),
        e.id.toString(),
      );
      var v = await o(
        "WAWebWindowsMediaFileExistsCache",
      ).recheckCachedMediaFileExists(p, y, C);
      o("WALogger").LOG(
        k ||
          (k = babelHelpers.taggedTemplateLiteralLoose([
            "[saveMediaFile] Cached file existence check for msg ",
            ": ",
            "",
          ])),
        e.id.toString(),
        v ? "exists" : "does not exist",
      );
      var w = async function () {
        o("WALogger").LOG(
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
              "[saveMediaFile] file missing, downloading msg ",
              "",
            ])),
          e.id.toString(),
        );
        var t = null,
          n = !1;
        if (
          (await o("WAWebFileSaver").FileSaver.downloadAsync({
            isPreResolved: !0,
            msg: b,
            onBeforeDownload: async function (n, r, o) {
              ((t = n), await p.prepareForMediaFileSaving(n, r, o));
            },
            onWarningDeclined: function () {
              n = !0;
            },
            shouldThrowAbortError: m,
          }),
          n)
        )
          throw new (o("WAAbortError").AbortError)();
        o("WALogger").LOG(
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
              "[saveMediaFile] Download preparation completed for msg ",
              "",
            ])),
          e.id.toString(),
        );
        var r = t;
        r != null &&
          r !== "" &&
          (o("WALogger").LOG(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "[saveMediaFile] waiting for download for msg ",
                "",
              ])),
            e.id.toString(),
          ),
          await p.waitTillMediaDownloadCompletes(r, C, y),
          o("WALogger").LOG(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "[saveMediaFile] Media download completed for msg ",
                "",
              ])),
            e.id.toString(),
          ));
      };
      h.trigger("mediaFileSavingStarted");
      var A = async function () {
          var e = await o("WAWebFileSaverDownloadData").getMsgDownloadData(
              b,
              m,
            ),
            t = e.blob;
          if (
            (await o("WAWebHarmfulFileWarningGate").confirmHarmfulFileIfNeeded(
              b,
            ),
            t.size > G)
          )
            return "oversize";
          var n = j(),
            r = await (p.requestSharedBufferForMediaFile == null
              ? void 0
              : p.requestSharedBufferForMediaFile(n, t.size));
          if (r == null) return "unsupported";
          await ae(r, t);
          var a = await (p.saveMediaFileFromSharedBuffer == null
            ? void 0
            : p.saveMediaFileFromSharedBuffer(n, y, C));
          if (a !== !0) {
            var i = new Error("saveMediaFileFromSharedBuffer did not succeed");
            throw (i.stack, i);
          }
          return "ok";
        },
        F = async function () {
          try {
            e: {
              var t = await A();
              if (t === "oversize") {
                (r("WAWebODS").incr(
                  "web.hybrid.bridge.media_files.open_with.oversize_routed_post_fetch",
                ),
                  await w());
                break e;
              }
              if (t === "unsupported") {
                (r("WAWebODS").incr(
                  "web.hybrid.bridge.media_files.open_with.unsupported_routed",
                ),
                  await w());
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
            if (o("WAAbortError").isAbortError(n)) throw n;
            (o("WALogger")
              .ERROR(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
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
              await w();
            } catch (e) {
              throw (
                r("WAWebODS").incr(
                  "web.hybrid.bridge.media_files.open_with.fallback_failed",
                ),
                e
              );
            }
          }
        };
      if (v)
        await o("WAWebHarmfulFileWarningGate").confirmHarmfulFileIfNeeded(b);
      else {
        o("WAWebWindowsMediaFilesMetrics").incrMediaActionAttempt(
          "download",
          c,
        );
        var O = h.size != null && h.size <= G;
        c && O
          ? await F()
          : (c &&
              r("WAWebODS").incr(
                "web.hybrid.bridge.media_files.open_with.oversize_routed_pre_fetch",
              ),
            await w());
      }
      o("WALogger").LOG(
        P ||
          (P = babelHelpers.taggedTemplateLiteralLoose([
            "[saveMediaFile] verifying file after save for msg ",
            "",
          ])),
        e.id.toString(),
      );
      var B = await o(
        "WAWebWindowsMediaFileExistsCache",
      ).recheckCachedMediaFileExists(p, y, C);
      if (!B) {
        (o("WALogger").ERROR(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "[saveMediaFile] file missing after save for msg ",
              "",
            ])),
          e.id.toString(),
        ),
          h.trigger("mediaFileSavingFailed"));
        var W = new Error("Failed to save media file");
        throw (W.stack, W);
      }
      (v ||
        o("WAWebWindowsMediaFilesMetrics").incrMediaActionSuccess(
          "download",
          c,
        ),
        h.trigger("mediaFileSavedOnFileSystem"),
        o("WALogger").LOG(
          M ||
            (M = babelHelpers.taggedTemplateLiteralLoose([
              "[saveMediaFile] Successfully saved media file for msg ",
              "",
            ])),
          e.id.toString(),
        ));
    }
    async function ae(e, t) {
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
          (i = !(c = await u.next()).done);
          i = !1
        ) {
          var d = c.value;
          d != null && (r.set(d, a), (a += d.byteLength));
        }
      } catch (e) {
        ((l = !0), (s = e));
      } finally {
        try {
          i && u.return != null && (await u.return());
        } finally {
          if (l) throw s;
        }
      }
    }
    function ie() {
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
    async function le(e) {
      var t;
      if (e.length === 0) {
        o("WALogger").LOG(
          w ||
            (w = babelHelpers.taggedTemplateLiteralLoose([
              "[selectFolderAndSaveFiles] No media infos to save",
            ])),
        );
        return;
      }
      var a =
        n("cr:17219") == null ||
        (t = n("cr:17219").getWindowsBridge(
          r("WAWebWindowsHybridBridgeInitiator").WAWebWindowsMediaFilesHelpers,
        )) == null
          ? void 0
          : t.mediaFiles;
      if (a == null) {
        o("WALogger").ERROR(
          A ||
            (A = babelHelpers.taggedTemplateLiteralLoose([
              "[selectFolderAndSaveFiles] Media files bridge is null",
            ])),
        );
        var i = new Error("Failed to get media files bridge");
        throw (i.stack, i);
      }
      var l = await a.selectFolderForBulkMediaSaving();
      if (l == null || l === "") {
        o("WALogger").LOG(
          F ||
            (F = babelHelpers.taggedTemplateLiteralLoose([
              "[selectFolderAndSaveFiles] no folder selected, cancelled",
            ])),
        );
        return;
      }
      await o("WAWebFileSaver").FileSaver.downloadAsync({
        msg: e,
        onBeforeDownload: async function (t, n, r) {
          await a.prepareForZipArchiveSavingAndUnarchiveToFolder(t, l, n, r);
        },
      });
    }
    function se() {
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
    async function ue(e) {
      var t;
      o("WALogger").LOG(
        O ||
          (O = babelHelpers.taggedTemplateLiteralLoose([
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
        i = K(e);
      if (i == null) {
        o("WALogger").ERROR(
          B ||
            (B = babelHelpers.taggedTemplateLiteralLoose([
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
          W ||
            (W = babelHelpers.taggedTemplateLiteralLoose([
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
        q ||
          (q = babelHelpers.taggedTemplateLiteralLoose([
            "[copyMediaFile] Ensuring media file is saved for msg ",
            "",
          ])),
        e.id.toString(),
      ),
        await oe(i.target, { isPreResolved: !0 }),
        o("WALogger").LOG(
          U ||
            (U = babelHelpers.taggedTemplateLiteralLoose([
              "[copyMediaFile] copying cached file for msg ",
              "",
            ])),
          e.id.toString(),
        ));
      var d = await a.tryCopyCachedMediaFile(u);
      if (!d) {
        (o("WAWebWindowsMediaFileExistsCache").forgetCachedMediaFile(u, c),
          o("WALogger").ERROR(
            V ||
              (V = babelHelpers.taggedTemplateLiteralLoose([
                "[copyMediaFile] Failed to copy cached media file for msg ",
                "",
              ])),
            e.id.toString(),
          ));
        var m = new Error("Failed to copy cached media file");
        throw (m.stack, m);
      }
      return (
        o("WALogger").LOG(
          H ||
            (H = babelHelpers.taggedTemplateLiteralLoose([
              "[copyMediaFile] Successfully copied media file for msg ",
              "",
            ])),
          e.id.toString(),
        ),
        c
      );
    }
    ((l.getMediaFileInfo = K),
      (l.canOpenMediaFile = Q),
      (l.openMediaFile = X),
      (l.saveAsMediaFile = Y),
      (l.canAllowDragOutDownload = Z),
      (l.allowDragOutDownload = ee),
      (l.registerSavedMediaFileForDragOut = te),
      (l.isMediaFileSaved = re),
      (l.saveMediaFile = oe),
      (l.copyBlobIntoSharedBuffer = ae),
      (l.supportsBulkMediaSaving = ie),
      (l.selectFolderAndSaveFiles = le),
      (l.supportsMediaFileCopy = se),
      (l.copyMediaFile = ue));
  },
  98,
);
