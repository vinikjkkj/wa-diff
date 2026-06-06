__d(
  "WAWebDeveloperMenuUtils",
  [
    "Promise",
    "WATypeUtils",
    "WAWebDebugCommandGetters",
    "WAWebLexicalUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e, t, n, r) {
      (r === void 0 && (r = !1),
        navigator.clipboard
          ? (navigator.clipboard.writeText(e),
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: r === !0 ? "Result copied to clipboard." : t,
              }),
            ))
          : (o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: "Clipboard API not supported.",
              }),
            ),
            n == null ||
              n.update(function (t) {
                var n = o("WAWebLexicalUtils").$getRangeSelection();
                e && n && n.insertText(e);
              })));
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = t.paramsToExecute,
            i,
            l = !1;
          if (a != null) {
            var s = yield (e || (e = n("Promise"))).resolve(t.func.apply(t, a));
            ((i = o("WATypeUtils").isString(s)
              ? s
              : JSON.stringify(s, null, 2)),
              (l = !0),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: "Command was executed.",
                }),
              ));
          } else i = "Debug." + o("WAWebDebugCommandGetters").getName(t);
          i && c(i, "Command copied to clipboard", r, l);
        })),
        m.apply(this, arguments)
      );
    }
    var p = { copyToClipboard: c, executeDebugCommand: d };
    l.default = p;
  },
  98,
);
