__d(
  "WADeprecatedWapParser",
  ["WAParsableWapNode", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.parse = function (t) {
          var e = new (o("WAParsableWapNode").ParsableWapNode)(this.$1, t);
          try {
            return { success: this.$2(e) };
          } catch (e) {
            if (e instanceof o("WAParsableWapNode").XmppParsingFailure)
              return { error: e };
            throw e;
          }
        }),
        (t.parseOrThrow = function (t) {
          var e = this.parse(t);
          if (e.error) throw r("err")(String(e.error));
          return e.success;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
