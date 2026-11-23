__d(
  "WAWebDeveloperMenuUtils",
  [
    "WATypeUtils",
    "WAWebDebugCommandGetters",
    "WAWebLexicalUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.editor,
        n = e.isResult,
        r = n === void 0 ? !1 : n,
        a = e.successText,
        i = e.text;
      navigator.clipboard
        ? (navigator.clipboard.writeText(i),
          o("WAWebToastManager").ToastManager.open(
            s.jsx(o("WAWebToast.react").Toast, {
              msg: r === !0 ? "Result copied to clipboard." : a,
            }),
          ))
        : (o("WAWebToastManager").ToastManager.open(
            s.jsx(o("WAWebToast.react").Toast, {
              msg: "Clipboard API not supported.",
            }),
          ),
          t == null ||
            t.update(function (e) {
              var t = o("WAWebLexicalUtils").$getRangeSelection();
              i && t && t.insertText(i);
            }));
    }
    async function c(e, t) {
      var n = e.paramsToExecute,
        r,
        a = !1;
      if (n != null) {
        var i = await Promise.resolve(e.func.apply(e, n));
        ((r = o("WATypeUtils").isString(i) ? i : JSON.stringify(i, null, 2)),
          (a = !0),
          o("WAWebToastManager").ToastManager.open(
            s.jsx(o("WAWebToast.react").Toast, {
              msg: "Command was executed.",
            }),
          ));
      } else r = "Debug." + o("WAWebDebugCommandGetters").getName(e);
      r != null &&
        r !== "" &&
        u({
          editor: t,
          isResult: a,
          successText: "Command copied to clipboard",
          text: r,
        });
    }
    ((l.copyToClipboard = u), (l.executeDebugCommand = c));
  },
  98,
);
