__d(
  "WAWebDialerPhoneNumberInputPlugin",
  ["Lexical", "LexicalComposerContext", "react", "react-compiler-runtime"],
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
      var e = o("react-compiler-runtime").c(3),
        t = o("LexicalComposerContext").useLexicalComposerContext(),
        n = t[0],
        r,
        a;
      return (
        e[0] !== n
          ? ((r = function () {
              return n.registerNodeTransform(o("Lexical").TextNode, p);
            }),
            (a = [n]),
            (e[0] = n),
            (e[1] = r),
            (e[2] = a))
          : ((r = e[1]), (a = e[2])),
        s(r, a),
        null
      );
    }
    function p(e) {
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
    }
    ((l.sanitizePhoneInput = c),
      (l.sanitizedCaretOffset = d),
      (l.PhoneNumberInputPlugin = m));
  },
  98,
);
