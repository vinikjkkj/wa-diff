__d(
  "WAWebDebugRichTextInput",
  ["Lexical", "err", "vulture"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t) {
      e = t;
    }
    function u() {
      if ((r("vulture")("2D9mio1b0v4_zHQ_GTT2AA0m0xM="), !e))
        throw r("err")(
          "Could not find rich text input ref. Make sure to focus on a rich text input first.",
        );
      return e;
    }
    u.doc = "Return a ref to the currently active rich text input";
    function c() {
      return (r("vulture")("8F2A6r0trVClQ0vAyIZa6x_QkYA="), o("Lexical"));
    }
    function d() {
      (r("vulture")("a3tw_VH_qNWV2v5CCjmwcWelPA4="),
        self.setTimeout(function () {
          var e,
            t = u();
          (e = t.editor) == null ||
            e.update(function () {
              var e = new (o("Lexical").TextNode)("");
              e.getParentOrThrow();
            });
        }, 1e3));
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
