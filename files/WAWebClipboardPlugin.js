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
    "react-compiler-runtime",
    "useWAWebLexicalEvent",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("Lexical").createCommand(),
      u = /\r?\n|\r/g;
    function c(t) {
      var a = o("react-compiler-runtime").c(14),
        i = t.ignoreLineBreakOnPaste,
        l = t.onFiles,
        c = t.onTextPaste,
        p = t.pasteFromHTML,
        _ = i === void 0 ? !1 : i,
        f = p === void 0 ? !1 : p,
        h = o("LexicalComposerContext").useLexicalComposerContext(),
        y = h[0],
        C;
      a[0] !== y || a[1] !== l || a[2] !== c || a[3] !== f
        ? ((C = (function () {
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
                    : d != null && f && n("cr:6842")
                      ? (p = n("cr:6842")(d))
                      : m != null && (p = m),
                    p != null &&
                      (c == null ? void 0 : c(p)) !== !0 &&
                      y.dispatchCommand(s, p));
                }
              },
            );
            return function (n) {
              return t.apply(this, arguments);
            };
          })()),
          (a[0] = y),
          (a[1] = l),
          (a[2] = c),
          (a[3] = f),
          (a[4] = C))
        : (C = a[4]);
      var b = r("useWAWebStableCallback")(C),
        v;
      a[5] !== y || a[6] !== _
        ? ((v = function (t) {
            var e;
            (_ ? (e = [t.replace(u, "")]) : (e = t.split(u)),
              y.update(function () {
                var t = o("WAWebLexicalUtils").$getRangeSelection();
                t &&
                  (t.isCollapsed() || t.removeText(),
                  e.forEach(function (e, n) {
                    var r = n === 0;
                    (r || t.insertParagraph(), t.insertText(e));
                  }));
              }));
          }),
          (a[5] = y),
          (a[6] = _),
          (a[7] = v))
        : (v = a[7]);
      var S = r("useWAWebStableCallback")(v),
        R;
      (a[8] !== y
        ? ((R = function (t) {
            return t instanceof ClipboardEvent
              ? (t.preventDefault(), t.stopPropagation(), d(t), m(y), !0)
              : !1;
          }),
          (a[8] = y),
          (a[9] = R))
        : (R = a[9]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          y,
          o("Lexical").CUT_COMMAND,
          R,
        ));
      var L;
      (a[10] !== b
        ? ((L = function (t) {
            return (b(t), !0);
          }),
          (a[10] = b),
          (a[11] = L))
        : (L = a[11]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          y,
          o("Lexical").PASTE_COMMAND,
          L,
        ));
      var E;
      return (
        a[12] !== S
          ? ((E = function (t) {
              return (S(t), !0);
            }),
            (a[12] = S),
            (a[13] = E))
          : (E = a[13]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(y, s, E),
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
