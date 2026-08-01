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
    function c(e) {
      var t = e.editor,
        n = e.isResult,
        r = n === void 0 ? !1 : n,
        a = e.successText,
        i = e.text;
      navigator.clipboard
        ? (navigator.clipboard.writeText(i),
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: r === !0 ? "Result copied to clipboard." : a,
            }),
          ))
        : (o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: "Clipboard API not supported.",
            }),
          ),
          t == null ||
            t.update(function (e) {
              var t = o("WAWebLexicalUtils").$getRangeSelection();
              i && t && t.insertText(i);
            }));
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
          i &&
            c({
              editor: r,
              isResult: l,
              successText: "Command copied to clipboard",
              text: i,
            });
        })),
        m.apply(this, arguments)
      );
    }
    ((l.copyToClipboard = c), (l.executeDebugCommand = d));
  },
  98,
);
