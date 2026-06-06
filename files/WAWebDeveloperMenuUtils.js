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
    function u(e, t, n, r) {
      (r === void 0 && (r = !1),
        navigator.clipboard
          ? (navigator.clipboard.writeText(e),
            o("WAWebToastManager").ToastManager.open(
              s.jsx(o("WAWebToast.react").Toast, {
                msg: r === !0 ? "Result copied to clipboard." : t,
              }),
            ))
          : (o("WAWebToastManager").ToastManager.open(
              s.jsx(o("WAWebToast.react").Toast, {
                msg: "Clipboard API not supported.",
              }),
            ),
            n == null ||
              n.update(function (t) {
                var n = o("WAWebLexicalUtils").$getRangeSelection();
                e && n && n.insertText(e);
              })));
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
      r && u(r, "Command copied to clipboard", t, a);
    }
    var d = { copyToClipboard: u, executeDebugCommand: c };
    l.default = d;
  },
  98,
);
