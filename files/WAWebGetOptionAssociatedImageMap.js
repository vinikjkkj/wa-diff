__d(
  "WAWebGetOptionAssociatedImageMap",
  [
    "Promise",
    "WANullthrows",
    "WAWebPollOptionHashUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield (e || (e = n("Promise"))).all(
            r.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = t.name,
                      r = e.mediaData.filehash,
                      a = yield o(
                        "WAWebPollOptionHashUtils",
                      ).generatePollOptionHash(n, r);
                    return [a, e];
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          return new Map(a);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o) {
          var a = yield (e || (e = n("Promise"))).all(
            t.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield s(e, o),
                      n = r("WANullthrows")(e.hash),
                      a = r("WANullthrows")(t.get(n));
                    return [e, a];
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          return new Map(a);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return t.length === 0 ? new Map() : c(e, t);
        })),
        p.apply(this, arguments)
      );
    }
    l.getOptionAssociatedMsgsMap = m;
  },
  98,
);
