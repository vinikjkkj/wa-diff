__d(
  "WAWebClipboardPlugin",
  [
    "Lexical",
    "LexicalComposerContext",
    "Promise",
    "WAWebCopyPasteClipboard",
    "WAWebDataTransfer",
    "WAWebLexicalUtils",
    "asyncToGeneratorRuntime",
    "cr:6842",
    "useWAWebLexicalEvent",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("Lexical").createCommand(),
      u = /\r?\n|\r/g;
    function c(t) {
      var a = t.ignoreLineBreakOnPaste,
        i = a === void 0 ? !1 : a,
        l = t.onFiles,
        c = t.onTextPaste,
        p = t.pasteFromHTML,
        _ = p === void 0 ? !1 : p,
        f = o("LexicalComposerContext").useLexicalComposerContext(),
        h = f[0],
        y = r("useWAWebStableCallback")(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                if (
                  (t.preventDefault(), t.stopPropagation(), !!t.clipboardData)
                ) {
                  var a = new (r("WAWebDataTransfer"))(t.clipboardData);
                  if (g(a)) {
                    l == null || l(a);
                    return;
                  }
                  var i = yield (e || (e = n("Promise"))).all([
                      a.getText([
                        o("WAWebCopyPasteClipboard").APP_TEXT_MIMETYPE,
                      ]),
                      a.getText(["text/html"]),
                      a.getText(["text/plain"]),
                    ]),
                    u = i[0],
                    d = i[1],
                    m = i[2],
                    p;
                  (u != null
                    ? (p = u)
                    : d != null && _ && n("cr:6842")
                      ? (p = n("cr:6842")(d))
                      : m != null && (p = m),
                    p != null &&
                      (c == null ? void 0 : c(p)) !== !0 &&
                      h.dispatchCommand(s, p));
                }
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        ),
        C = r("useWAWebStableCallback")(function (e) {
          var t;
          (i ? (t = [e.replace(u, "")]) : (t = e.split(u)),
            h.update(function () {
              var e = o("WAWebLexicalUtils").$getRangeSelection();
              e &&
                (e.isCollapsed() || e.removeText(),
                t.forEach(function (t, n) {
                  var r = n === 0;
                  (r || e.insertParagraph(), e.insertText(t));
                }));
            }));
        });
      return (
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          h,
          o("Lexical").CUT_COMMAND,
          function (e) {
            return e instanceof ClipboardEvent
              ? (e.preventDefault(), e.stopPropagation(), d(e), m(h), !0)
              : !1;
          },
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          h,
          o("Lexical").PASTE_COMMAND,
          function (e) {
            return (y(e), !0);
          },
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(h, s, function (e) {
          return (C(e), !0);
        }),
        null
      );
    }
    function d(e) {
      var t = e.clipboardData,
        n = e.currentTarget;
      if (!(!(n instanceof HTMLElement) || !t)) {
        var r = o("WAWebCopyPasteClipboard").Clipboard.fromSelection(
          n,
          window.getSelection(),
        );
        t.setData("text/plain", r.toPlainString());
        try {
          t.setData(
            o("WAWebCopyPasteClipboard").APP_TEXT_MIMETYPE,
            r.toAppString(),
          );
        } catch (e) {}
      }
    }
    function m(e) {
      e.update(function (e) {
        var t = o("WAWebLexicalUtils").$getRangeSelection();
        t && t.removeText();
      });
    }
    var p = "urn:schemas-microsoft-com:office",
      _ = "urn:schemas-microsoft-com:office:excel",
      f = "<meta name=ProgId content=PowerPoint.Slide>";
    function g(e) {
      if (!e.hasFiles()) return !1;
      if (e.hasType("text/html")) {
        var t = e.getData("text/html");
        if (t) {
          var n = t.includes(f);
          if (n) return !1;
          var r = t.includes(p),
            o = t.includes(_);
          if (r && !o) return !1;
        }
      }
      return !0;
    }
    ((l.PASTE_TEXT_COMMAND = s), (l.ClipboardPlugin = c));
  },
  98,
);
