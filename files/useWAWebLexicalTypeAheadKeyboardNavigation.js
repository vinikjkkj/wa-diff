__d(
  "useWAWebLexicalTypeAheadKeyboardNavigation",
  ["Lexical", "LexicalComposerContext", "LexicalUtils", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e, t, n, r) {
      var a = r.onCancel,
        i = r.onSelect,
        l = o("LexicalComposerContext").useLexicalComposerContext(),
        s = l[0],
        d = c(t),
        m = d[0],
        p = d[1];
      return (
        u(
          function () {
            var t;
            return o("LexicalUtils").mergeRegister(
              s.registerCommand(
                (t = o("Lexical")).KEY_ENTER_COMMAND,
                function (t) {
                  return e.length === 0
                    ? !1
                    : (t != null &&
                        (t.preventDefault(), t.stopImmediatePropagation()),
                      i(e[m]),
                      !0);
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
              s.registerCommand(
                t.KEY_TAB_COMMAND,
                function (t) {
                  return e.length === 0
                    ? !1
                    : (t != null &&
                        (t.preventDefault(), t.stopImmediatePropagation()),
                      i(e[m]),
                      !0);
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
              s.registerCommand(
                t.KEY_ESCAPE_COMMAND,
                function (t) {
                  return e.length === 0
                    ? !1
                    : (t.preventDefault(),
                      t.stopImmediatePropagation(),
                      a(),
                      !0);
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
              s.registerCommand(
                t.KEY_ARROW_LEFT_COMMAND,
                function (t) {
                  return n !== "row" || e.length === 0
                    ? !1
                    : (t.preventDefault(),
                      t.stopImmediatePropagation(),
                      p(m === 0 ? e.length - 1 : m - 1),
                      !0);
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
              s.registerCommand(
                t.KEY_ARROW_RIGHT_COMMAND,
                function (t) {
                  return n !== "row" || e.length === 0
                    ? !1
                    : (t.preventDefault(),
                      t.stopImmediatePropagation(),
                      p((m + 1) % e.length),
                      !0);
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
              s.registerCommand(
                t.KEY_ARROW_UP_COMMAND,
                function (t) {
                  if (n !== "column" || e.length === 0) return !1;
                  for (
                    var r = m === 0 ? e.length - 1 : m - 1, o = e[r];
                    ((a = o) == null ? void 0 : a.skipKeyboardNav) === !0;
                  ) {
                    var a;
                    (r--, r < 0 && (r = e.length - 1), (o = e[r]));
                  }
                  return (
                    t.preventDefault(),
                    t.stopImmediatePropagation(),
                    p(r),
                    !0
                  );
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
              s.registerCommand(
                t.KEY_ARROW_DOWN_COMMAND,
                function (t) {
                  if (n !== "column" || e.length === 0) return !1;
                  (t.preventDefault(), t.stopImmediatePropagation());
                  for (
                    var r = (m + 1) % e.length, o = e[r];
                    ((a = o) == null ? void 0 : a.skipKeyboardNav) === !0;
                  ) {
                    var a;
                    (r++, (o = e[r]));
                  }
                  return (p(r), !0);
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
            );
          },
          void 0,
        ),
        u(
          function () {
            p(t);
          },
          [t],
        ),
        { activeIndex: m, setActiveIndex: p }
      );
    }
    l.useLexicalTypeAheadKeyboardNavigation = d;
  },
  98,
);
