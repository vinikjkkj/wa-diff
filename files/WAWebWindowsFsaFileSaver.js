__d(
  "WAWebWindowsFsaFileSaver",
  [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WAWebFileSaver",
    "WAWebFileSaverDownloadData",
    "WAWebFilenameManager",
    "WAWebMimeTypes",
    "WAWebODS",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWindowsGatingUtils",
    "WAWebWindowsMediaFilesMetrics",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(t) {
      return (
        o("WAWebWindowsGatingUtils").hasFsaSaveFilePickerSupport()
          ? r("WAWebODS").incr("web.windows.fsa_save_as.supported")
          : r("WAWebODS").incr("web.windows.fsa_save_as.unsupported"),
        o("WAWebWindowsGatingUtils").isFsaSaveAsEnabled()
          ? (o("WAWebWindowsMediaFilesMetrics").incrSaveAsFsaAttempt(),
            r("WAWebODS").incr("web.windows.fsa_save_as.started"),
            _(t).catch(function (t) {
              (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[fsa-save-as] Unexpected error in save flow",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("fsa-save-as-unexpected"),
                L());
            }),
            !0)
          : (o("WAWebWindowsMediaFilesMetrics").incrSaveAsLegacyAttempt(), !1)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield g(e);
          t != null && (yield y(e, t));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebFilenameManager").getDefaultName(e),
            n = S(e);
          try {
            return yield showSaveFilePicker(
              n != null ? { suggestedName: t, types: n } : { suggestedName: t },
            );
          } catch (t) {
            var a = r("getErrorSafe")(t);
            return a.name === o("WAAbortError").ABORT_ERROR
              ? (r("WAWebODS").incr("web.windows.fsa_save_as.cancelled"), null)
              : (o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[fsa-save-as] showSaveFilePicker unavailable, falling back to legacy download",
                      ])),
                  )
                  .catching(a)
                  .sendLogs("fsa-save-as-picker-failed"),
                r("WAWebODS").incr("web.windows.fsa_save_as.fallback"),
                o("WAWebFileSaver").FileSaver.initDownload(e),
                null);
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield o(
                "WAWebFileSaverDownloadData",
              ).getMultiMsgDownloadData(e, !0),
              a = n.blob;
            if (a == null) {
              var i = new Error("No blob available to save");
              throw (i.stack, i);
            }
            (yield b(t, a),
              r("WAWebODS").incr("web.windows.fsa_save_as.saved"),
              o("WAWebWindowsMediaFilesMetrics").incrSaveAsFsaSuccess(),
              R());
          } catch (e) {
            var l = r("getErrorSafe")(e);
            if (l.name === o("WAAbortError").ABORT_ERROR) {
              r("WAWebODS").incr("web.windows.fsa_save_as.cancelled");
              return;
            }
            (o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[fsa-save-as] Failed to write file after picker",
                  ])),
              )
              .catching(l)
              .sendLogs("fsa-save-as-write-failed"),
              r("WAWebODS").incr("web.windows.fsa_save_as.failed"),
              L());
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.createWritable();
          try {
            yield n.write(t);
          } finally {
            yield n.close();
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      var t,
        n = e.mimetype;
      if (n == null || n === "") return null;
      var r = o("WAWebMimeTypes").getExtension(n);
      return r === ""
        ? null
        : [{ accept: ((t = {}), (t[n] = [r]), t), description: n }];
    }
    function R() {
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "File saved") }),
      );
    }
    function L() {
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ "Couldn't save. Check your connection and try again.",
          ),
        }),
      );
    }
    ((l.trySaveAs = p), (l.saveAsWithPicker = _));
  },
  226,
);
