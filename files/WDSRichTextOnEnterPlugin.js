__d(
  "WDSRichTextOnEnterPlugin",
  ["Lexical", "LexicalComposerContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = e.isMultiLine,
        n = e.onEnter,
        r = o("LexicalComposerContext").useLexicalComposerContext(),
        a = r[0];
      return (
        s(
          function () {
            var e = [];
            if (
              (n != null &&
                e.push(
                  a.registerCommand(
                    o("Lexical").KEY_ENTER_COMMAND,
                    function (e) {
                      return e == null || e.ctrlKey || e.altKey || e.shiftKey
                        ? !1
                        : (e.preventDefault(), n(), !0);
                    },
                    o("Lexical").COMMAND_PRIORITY_NORMAL,
                  ),
                ),
              !t)
            ) {
              var r,
                i = function () {
                  return !0;
                };
              e.push(
                a.registerCommand(
                  (r = o("Lexical")).INSERT_LINE_BREAK_COMMAND,
                  i,
                  r.COMMAND_PRIORITY_NORMAL,
                ),
                a.registerCommand(
                  r.INSERT_PARAGRAPH_COMMAND,
                  i,
                  r.COMMAND_PRIORITY_NORMAL,
                ),
              );
            }
            return function () {
              for (var t of e) t();
            };
          },
          [a, t, n],
        ),
        null
      );
    }
    l.default = u;
  },
  98,
);
