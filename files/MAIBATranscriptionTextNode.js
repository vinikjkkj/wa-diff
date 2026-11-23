__d(
  "MAIBATranscriptionTextNode",
  ["Lexical"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this, t, n) || this),
          r.isUnmergeable() || r.toggleUnmergeable(),
          r
        );
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.getType = function () {
          return "maiba-transcription-text";
        }),
        (t.clone = function (n) {
          return new t(n.__text, n.__key);
        }));
      var n = t.prototype;
      return (
        (n.canInsertTextBefore = function () {
          return !1;
        }),
        (n.canInsertTextAfter = function () {
          return !1;
        }),
        t
      );
    })(o("Lexical").TextNode);
    l.default = e;
  },
  98,
);
