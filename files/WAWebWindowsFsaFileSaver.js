__d(
  "WAWebWindowsFsaFileSaver",
  [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WAPromiseEach",
    "WAWebFileSaver",
    "WAWebFileSaverDownloadData",
    "WAWebFilenameManager",
    "WAWebHarmfulFileWarningGate",
    "WAWebMimeTypes",
    "WAWebODS",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWindowsGatingUtils",
    "WAWebWindowsMediaFilesMetrics",
    "getErrorSafe",
    "justknobx",
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
                b());
            }),
            !0)
          : (o("WAWebWindowsMediaFilesMetrics").incrSaveAsLegacyAttempt(), !1)
      );
    }
    async function _(e) {
      var t = await f(e);
      t != null && (await g(e, t));
    }
    async function f(e) {
      var t = o("WAWebFilenameManager").getDefaultName(e),
        n = y(e);
      try {
        return await showSaveFilePicker(
          n != null ? { suggestedName: t, types: n } : { suggestedName: t },
        );
      } catch (t) {
        var a = r("getErrorSafe")(t);
        return o("WAAbortError").isAbortError(a)
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
    }
    async function g(e, t) {
      try {
        var n = await o("WAWebFileSaverDownloadData").getMultiMsgDownloadData(
            e,
            !0,
          ),
          a = n.blob,
          i = n.messages;
        if (
          (r("justknobx")._("8497") &&
            (await o("WAPromiseEach").promiseEach(
              i,
              o("WAWebHarmfulFileWarningGate").confirmHarmfulFileIfNeeded,
            )),
          a == null)
        ) {
          var l = new Error("No blob available to save");
          throw (l.stack, l);
        }
        (await h(t, a),
          r("WAWebODS").incr("web.windows.fsa_save_as.saved"),
          o("WAWebWindowsMediaFilesMetrics").incrSaveAsFsaSuccess(),
          C());
      } catch (e) {
        var s = r("getErrorSafe")(e);
        if (o("WAAbortError").isAbortError(s)) {
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
          .catching(s)
          .sendLogs("fsa-save-as-write-failed"),
          r("WAWebODS").incr("web.windows.fsa_save_as.failed"),
          b());
      }
    }
    async function h(e, t) {
      var n = await e.createWritable();
      try {
        await n.write(t);
      } finally {
        await n.close();
      }
    }
    function y(e) {
      var t,
        n = e.mimetype;
      if (n == null || n === "") return null;
      var r = o("WAWebMimeTypes").getExtension(n);
      return r === ""
        ? null
        : [{ accept: ((t = {}), (t[n] = [r]), t), description: n }];
    }
    function C() {
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
      );
    }
    function b() {
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
      );
    }
    ((l.trySaveAs = p), (l.saveAsWithPicker = _));
  },
  226,
);
