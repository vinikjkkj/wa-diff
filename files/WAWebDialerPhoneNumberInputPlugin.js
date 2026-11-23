__d(
  "WAWebDialerPhoneNumberInputPlugin",
  ["Lexical", "LexicalComposerContext", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect,
      u = /[^0-9+()\- ]/g;
    function c(e) {
      return e.replace(u, "");
    }
    function d(e, t) {
      return c(e.slice(0, t)).length;
    }
    function m() {
      var e = o("LexicalComposerContext").useLexicalComposerContext(),
        t = e[0];
      return (
        s(
          function () {
            return t.registerNodeTransform(o("Lexical").TextNode, function (e) {
              var t = e.getTextContent(),
                n = c(t);
              if (n !== t) {
                var r = o("Lexical").$getSelection(),
                  a =
                    o("Lexical").$isRangeSelection(r) &&
                    r.isCollapsed() &&
                    r.anchor.key === e.getKey()
                      ? d(t, r.anchor.offset)
                      : null;
                (e.setTextContent(n), a != null && e.select(a, a));
              }
            });
          },
          [t],
        ),
        null
      );
    }
    ((l.sanitizePhoneInput = c),
      (l.sanitizedCaretOffset = d),
      (l.PhoneNumberInputPlugin = m));
  },
  98,
);
