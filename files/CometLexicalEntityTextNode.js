__d(
  "CometLexicalEntityTextNode",
  ["FBLogger", "Lexical"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getEntity = function () {
          throw r("FBLogger")("ufi2").mustfixThrow(
            "CometLexicalEntityTextNode does not implement getEntity",
          );
        }),
        t
      );
    })(o("Lexical").TextNode);
    function s(t) {
      return t instanceof e;
    }
    ((l.CometLexicalEntityTextNode = e), (l.isCometLexicalEntityTextNode = s));
  },
  98,
);
