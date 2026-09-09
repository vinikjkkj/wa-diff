__d(
  "WAWebDialerPadEdit",
  ["Lexical"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      e.update(function () {
        var e,
          n =
            (e = o("Lexical").$getSelection()) != null
              ? e
              : o("Lexical").$getRoot().selectEnd();
        o("Lexical").$isRangeSelection(n) &&
          (t === "backspace" ? n.deleteCharacter(!0) : n.insertText(t));
      });
    }
    l.applyDialerPadEdit = e;
  },
  98,
);
