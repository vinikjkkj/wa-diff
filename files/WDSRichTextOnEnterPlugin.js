__d(
  "WDSRichTextOnEnterPlugin",
  ["Lexical", "LexicalComposerContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = e.onEnter,
        n = o("LexicalComposerContext").useLexicalComposerContext(),
        r = n[0];
      return (
        s(
          function () {
            return r.registerCommand(
              o("Lexical").KEY_ENTER_COMMAND,
              function (e) {
                return e == null || e.ctrlKey || e.altKey || e.shiftKey
                  ? !1
                  : (e.preventDefault(), t(), !0);
              },
              o("Lexical").COMMAND_PRIORITY_NORMAL,
            );
          },
          [r, t],
        ),
        null
      );
    }
    l.default = u;
  },
  98,
);
