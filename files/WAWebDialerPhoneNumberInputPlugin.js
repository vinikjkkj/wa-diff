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
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t = o("LexicalComposerContext").useLexicalComposerContext(),
        n = t[0],
        r,
        a;
      return (
        e[0] !== n
          ? ((r = function () {
              return n.registerNodeTransform(o("Lexical").TextNode, m);
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
    function m(e) {
      var t = e.getTextContent(),
        n = c(t);
      n !== t && e.setTextContent(n);
    }
    ((l.sanitizePhoneInput = c), (l.PhoneNumberInputPlugin = d));
  },
  98,
);
