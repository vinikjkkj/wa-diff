__d(
  "useWAWebLexicalTypeAheadKeyboardNavigation",
  [
    "Lexical",
    "LexicalComposerContext",
    "LexicalUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e, t, n, r) {
      var a = o("react-compiler-runtime").c(12),
        i = r.onCancel,
        l = r.onSelect,
        s = o("LexicalComposerContext").useLexicalComposerContext(),
        d = s[0],
        m = c(t),
        p = m[0],
        _ = m[1],
        f;
      (a[0] !== p ||
      a[1] !== n ||
      a[2] !== d ||
      a[3] !== e ||
      a[4] !== i ||
      a[5] !== l
        ? ((f = function () {
            var t;
            return o("LexicalUtils").mergeRegister(
              d.registerCommand(
                (t = o("Lexical")).KEY_ENTER_COMMAND,
                function (t) {
                  return e.length === 0
                    ? !1
                    : (t != null &&
                        (t.preventDefault(), t.stopImmediatePropagation()),
                      l(e[p]),
                      !0);
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
              d.registerCommand(
                t.KEY_TAB_COMMAND,
                function (t) {
                  return e.length === 0
                    ? !1
                    : (t != null &&
                        (t.preventDefault(), t.stopImmediatePropagation()),
                      l(e[p]),
                      !0);
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
              d.registerCommand(
                t.KEY_ESCAPE_COMMAND,
                function (t) {
                  return e.length === 0
                    ? !1
                    : (t.preventDefault(),
                      t.stopImmediatePropagation(),
                      i(),
                      !0);
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
              d.registerCommand(
                t.KEY_ARROW_LEFT_COMMAND,
                function (t) {
                  return n !== "row" || e.length === 0
                    ? !1
                    : (t.preventDefault(),
                      t.stopImmediatePropagation(),
                      _(p === 0 ? e.length - 1 : p - 1),
                      !0);
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
              d.registerCommand(
                t.KEY_ARROW_RIGHT_COMMAND,
                function (t) {
                  return n !== "row" || e.length === 0
                    ? !1
                    : (t.preventDefault(),
                      t.stopImmediatePropagation(),
                      _((p + 1) % e.length),
                      !0);
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
              d.registerCommand(
                t.KEY_ARROW_UP_COMMAND,
                function (t) {
                  if (n !== "column" || e.length === 0) return !1;
                  for (
                    var r = p === 0 ? e.length - 1 : p - 1, o = e[r];
                    ((a = o) == null ? void 0 : a.skipKeyboardNav) === !0;
                  ) {
                    var a;
                    (r--, r < 0 && (r = e.length - 1), (o = e[r]));
                  }
                  return (
                    t.preventDefault(),
                    t.stopImmediatePropagation(),
                    _(r),
                    !0
                  );
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
              d.registerCommand(
                t.KEY_ARROW_DOWN_COMMAND,
                function (t) {
                  if (n !== "column" || e.length === 0) return !1;
                  (t.preventDefault(), t.stopImmediatePropagation());
                  for (
                    var r = (p + 1) % e.length, o = e[r];
                    ((a = o) == null ? void 0 : a.skipKeyboardNav) === !0;
                  ) {
                    var a;
                    (r++, (o = e[r]));
                  }
                  return (_(r), !0);
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
            );
          }),
          (a[0] = p),
          (a[1] = n),
          (a[2] = d),
          (a[3] = e),
          (a[4] = i),
          (a[5] = l),
          (a[6] = f))
        : (f = a[6]),
        u(f, void 0));
      var g, h;
      (a[7] !== t
        ? ((g = function () {
            _(t);
          }),
          (h = [t]),
          (a[7] = t),
          (a[8] = g),
          (a[9] = h))
        : ((g = a[8]), (h = a[9])),
        u(g, h));
      var y;
      return (
        a[10] !== p
          ? ((y = { activeIndex: p, setActiveIndex: _ }),
            (a[10] = p),
            (a[11] = y))
          : (y = a[11]),
        y
      );
    }
    l.useLexicalTypeAheadKeyboardNavigation = d;
  },
  98,
);
