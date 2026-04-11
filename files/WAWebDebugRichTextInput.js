__d(
  "WAWebDebugRichTextInput",
  ["Lexical", "err"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t) {
      e = t;
    }
    function u() {
      if (!e)
        throw r("err")(
          "Could not find rich text input ref. Make sure to focus on a rich text input first.",
        );
      return e;
    }
    u.doc = "Return a ref to the currently active rich text input";
    function c() {
      return o("Lexical");
    }
    function d() {
      self.setTimeout(function () {
        var e,
          t = u();
        (e = t.editor) == null ||
          e.update(function () {
            var e = new (o("Lexical").TextNode)("");
            e.getParentOrThrow();
          });
      }, 1e3);
    }
    ((d.paramsToExecute = []),
      (d.doc =
        "Simulate Lexical error by deliberately making Lexical to throw an exception"));
    var m = {
      getActiveRichTextInputRef: u,
      getLexicalModule: c,
      triggerLexicalError: d,
    };
    ((l.setActiveRichTextInputRef = s), (l.WAWebDebugRichTextInput = m));
  },
  98,
);
