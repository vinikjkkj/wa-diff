__d(
  "WAWebClipboardPlugin",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebCopyPasteClipboard",
    "WAWebDataTransfer",
    "WAWebLexicalUtils",
    "cr:6842",
    "react-compiler-runtime",
    "useWAWebLexicalEvent",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("Lexical").createCommand(),
      s = /\r?\n|\r/g;
    function u(t) {
      var a = o("react-compiler-runtime").c(14),
        i = t.ignoreLineBreakOnPaste,
        l = t.onFiles,
        u = t.onTextPaste,
        m = t.pasteFromHTML,
        p = i === void 0 ? !1 : i,
        _ = m === void 0 ? !1 : m,
        g = o("LexicalComposerContext").useLexicalComposerContext(),
        h = g[0],
        y;
      a[0] !== h || a[1] !== l || a[2] !== u || a[3] !== _
        ? ((y = async function (a) {
            if ((a.preventDefault(), a.stopPropagation(), !!a.clipboardData)) {
              var t = new (r("WAWebDataTransfer"))(a.clipboardData);
              if (f(t)) {
                l == null || l(t);
                return;
              }
              var i = await Promise.all([
                  t.getText([o("WAWebCopyPasteClipboard").APP_TEXT_MIMETYPE]),
                  t.getText(["text/html"]),
                  t.getText(["text/plain"]),
                ]),
                s = i[0],
                c = i[1],
                d = i[2],
                m;
              (s != null
                ? (m = s)
                : c != null && _ && n("cr:6842")
                  ? (m = n("cr:6842")(c))
                  : d != null && (m = d),
                m != null &&
                  (u == null ? void 0 : u(m)) !== !0 &&
                  h.dispatchCommand(e, m));
            }
          }),
          (a[0] = h),
          (a[1] = l),
          (a[2] = u),
          (a[3] = _),
          (a[4] = y))
        : (y = a[4]);
      var C = r("useWAWebStableCallback")(y),
        b;
      a[5] !== h || a[6] !== p
        ? ((b = function (t) {
            var e;
            (p ? (e = [t.replace(s, "")]) : (e = t.split(s)),
              h.update(function () {
                var t = o("WAWebLexicalUtils").$getRangeSelection();
                t &&
                  (t.isCollapsed() || t.removeText(),
                  e.forEach(function (e, n) {
                    var r = n === 0;
                    (r || t.insertParagraph(), t.insertText(e));
                  }));
              }));
          }),
          (a[5] = h),
          (a[6] = p),
          (a[7] = b))
        : (b = a[7]);
      var v = r("useWAWebStableCallback")(b),
        S;
      (a[8] !== h
        ? ((S = function (t) {
            return t instanceof ClipboardEvent
              ? (t.preventDefault(), t.stopPropagation(), c(t), d(h), !0)
              : !1;
          }),
          (a[8] = h),
          (a[9] = S))
        : (S = a[9]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          h,
          o("Lexical").CUT_COMMAND,
          S,
        ));
      var R;
      (a[10] !== C
        ? ((R = function (t) {
            return (C(t), !0);
          }),
          (a[10] = C),
          (a[11] = R))
        : (R = a[11]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          h,
          o("Lexical").PASTE_COMMAND,
          R,
        ));
      var L;
      return (
        a[12] !== v
          ? ((L = function (t) {
              return (v(t), !0);
            }),
            (a[12] = v),
            (a[13] = L))
          : (L = a[13]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(h, e, L),
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
