__d(
  "WAWebPollNameHashUtils",
  ["WACryptoSha256", "WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WACryptoSha256").sha256(new TextEncoder().encode(e));
          return new Uint8Array(t);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return yield s(t);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[polls/tc] failed to compute poll name hash",
                    ])),
                )
                .sendLogs("poll-name-hash-compute-failed"),
              null
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.computePollNameHash = s), (l.tryComputePollNameHash = c));
  },
  98,
);
