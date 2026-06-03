__d(
  "WAWebPollsCreateOptionLocalIdMap",
  [
    "Promise",
    "WAHex",
    "WANullthrows",
    "WAWebPollOptionHashUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = yield (e || (e = n("Promise"))).all(
              t.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield c(e),
                        n = o("WAHex").toHex(new Uint8Array(t));
                      return { hash: t, hexHash: n, localId: e.localId };
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            i = new Map(),
            l = new Map();
          for (var s of a) {
            var u = s.hash,
              d = s.hexHash,
              m = s.localId;
            (i.set(d, m), l.set(m, u));
          }
          return {
            getLocalIdForHexHash: function (t) {
              return r("WANullthrows")(i.get(t));
            },
            getLocalIdForHash: function (t) {
              return r("WANullthrows")(
                i.get(o("WAHex").toHex(new Uint8Array(t))),
              );
            },
            getHashForLocalId: function (t) {
              return r("WANullthrows")(l.get(t));
            },
            includesHashes: function (t) {
              return t.every(function (e) {
                return i.has(o("WAHex").toHex(new Uint8Array(e)));
              });
            },
          };
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return o("WAWebPollOptionHashUtils").getHashBufferForString(e.name);
    }
    l.createOptionLocalIdMap = s;
  },
  98,
);
