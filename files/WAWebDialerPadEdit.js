__d(
  "WAWebDialerPadEdit",
  ["Lexical"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      (n === void 0 && (n = !1),
        e.update(
          function () {
            var e,
              n =
                (e = o("Lexical").$getSelection()) != null
                  ? e
                  : o("Lexical").$getRoot().selectEnd();
            o("Lexical").$isRangeSelection(n) &&
              (t === "backspace" ? n.deleteCharacter(!0) : n.insertText(t));
          },
          n ? { tag: o("Lexical").SKIP_DOM_SELECTION_TAG } : void 0,
        ));
    }
    l.applyDialerPadEdit = e;
  },
  98,
);
