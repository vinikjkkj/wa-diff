__d(
  "getMAIBADictationUsage",
  ["Lexical", "MAIBATranscriptionTextNode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.read(function () {
        var e = !1,
          t = !1;
        function n(a) {
          if (o("Lexical").$isElementNode(a))
            for (var i of a.getChildren()) n(i);
          else
            !o("Lexical").$isLineBreakNode(a) &&
              o("Lexical").$isLeafNode(a) &&
              a.getTextContent().trim() !== "" &&
              (a instanceof r("MAIBATranscriptionTextNode")
                ? (e = !0)
                : (t = !0));
        }
        return (
          n(o("Lexical").$getRoot()),
          { isDictationUsed: e, isOnlyDictation: e && !t }
        );
      });
    }
    l.default = e;
  },
  98,
);
