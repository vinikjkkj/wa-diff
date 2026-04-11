__d(
  "WAXmlParsingFailure",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.parser = e), (this.reason = t));
      }
      var t = e.prototype;
      return (
        (t.toString = function () {
          return "XmlParsingFailure: " + this.parser + ": " + this.reason;
        }),
        e
      );
    })();
    i.XmlParsingFailure = e;
  },
  66,
);
