__d(
  "AndromedaFieldTraceLogger",
  ["AdsTreeMatcher", "AndromedaJSONUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        var e = this;
        ((this.$1 = []),
          (this.$2 = []),
          (this.onMismatch = function (t, n, r) {
            var a = e.$1,
              i = e.$2,
              l = o("AdsTreeMatcher").fieldTraceToString(t);
            if (
              a.length === 0 ||
              a[a.length - 1].fieldTrace.substring(0, l.length) !== l
            ) {
              var s = { fieldTrace: l, testValue: n, controlValue: r };
              a.push(s);
              try {
                i.push(
                  JSON.stringify(
                    s,
                    o("AndromedaJSONUtils").replaceUndefinedForJSON,
                  ),
                );
              } catch (e) {
                i.push("[serialization error]");
              }
            }
          }));
      }
      var t = e.prototype;
      return (
        (t.getMismatchesString = function () {
          return this.$2;
        }),
        (t.getMismatches = function () {
          return this.$1;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
