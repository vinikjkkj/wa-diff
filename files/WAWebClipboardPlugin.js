__d(
  "WAWebClipboardPlugin",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebCopyPasteClipboard",
    "WAWebDataTransfer",
    "WAWebLexicalUtils",
    "cr:6842",
    "useWAWebLexicalEvent",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("Lexical").createCommand(),
      s = /\r?\n|\r/g;
    function u(t) {
      var a = t.ignoreLineBreakOnPaste,
        i = a === void 0 ? !1 : a,
        l = t.onFiles,
        u = t.onTextPaste,
        m = t.pasteFromHTML,
        p = m === void 0 ? !1 : m,
        _ = o("LexicalComposerContext").useLexicalComposerContext(),
        g = _[0],
        h = r("useWAWebStableCallback")(async function (t) {
          if ((t.preventDefault(), t.stopPropagation(), !!t.clipboardData)) {
            var a = new (r("WAWebDataTransfer"))(t.clipboardData);
            if (f(a)) {
              l == null || l(a);
              return;
            }
            var i = await Promise.all([
                a.getText([o("WAWebCopyPasteClipboard").APP_TEXT_MIMETYPE]),
                a.getText(["text/html"]),
                a.getText(["text/plain"]),
              ]),
              s = i[0],
              c = i[1],
              d = i[2],
              m;
            (s != null
              ? (m = s)
              : c != null && p && n("cr:6842")
                ? (m = n("cr:6842")(c))
                : d != null && (m = d),
              m != null &&
                (u == null ? void 0 : u(m)) !== !0 &&
                g.dispatchCommand(e, m));
          }
        }),
        y = r("useWAWebStableCallback")(function (e) {
          var t;
          (i ? (t = [e.replace(s, "")]) : (t = e.split(s)),
            g.update(function () {
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
          g,
          o("Lexical").CUT_COMMAND,
          function (e) {
            return e instanceof ClipboardEvent
              ? (e.preventDefault(), e.stopPropagation(), c(e), d(g), !0)
              : !1;
          },
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          g,
          o("Lexical").PASTE_COMMAND,
          function (e) {
            return (h(e), !0);
          },
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(g, e, function (e) {
          return (y(e), !0);
        }),
        null
      );
    }
    function c(e) {
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
    function d(e) {
      e.update(function (e) {
        var t = o("WAWebLexicalUtils").$getRangeSelection();
        t && t.removeText();
      });
    }
    var m = "urn:schemas-microsoft-com:office",
      p = "urn:schemas-microsoft-com:office:excel",
      _ = "<meta name=ProgId content=PowerPoint.Slide>";
    function f(e) {
      if (!e.hasFiles()) return !1;
      if (e.hasType("text/html")) {
        var t = e.getData("text/html");
        if (t) {
          var n = t.includes(_);
          if (n) return !1;
          var r = t.includes(m),
            o = t.includes(p);
          if (r && !o) return !1;
        }
      }
      return !0;
    }
    ((l.PASTE_TEXT_COMMAND = e), (l.ClipboardPlugin = u));
  },
  98,
);
