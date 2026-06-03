__d(
  "WAFtsV3Finder",
  [
    "WAArrayBufferUtils",
    "WACustomError",
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WAFtsSearchResultComparator",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 200,
      s = function () {
        return { eof: !0, messages: [], status: 404 };
      },
      u = (function () {
        function t(e, t, n) {
          ((this.$1 = e),
            (this.tableAdapter = t),
            (this.blindIndexGenerator = n));
        }
        var a = t.prototype;
        return (
          (a.find = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                t === void 0 && (t = {});
                var n = Array.from(this.$1.tokenize(e))
                    .filter(function (e) {
                      return (
                        e.length > 1 ||
                        r("WAFtsIsSearchQueryEligibleForMessageSearch")(e)
                      );
                    })
                    .sort(function (e, t) {
                      return t.length - e.length;
                    }),
                  o = !1,
                  a = t.remote,
                  i = [];
                if (n.length === 0) o = !0;
                else {
                  var l = n[0];
                  if (a != null)
                    ((i = yield this.tableAdapter.bulkGetAnyOf(
                      ["prefixes"],
                      [yield this.blindIndexGenerator.generateForToken(l, a)],
                    )),
                      (i = i.filter(function (e) {
                        return e.chatId === a;
                      })));
                  else {
                    var u =
                        yield this.blindIndexGenerator.generateBoundsForToken(
                          l,
                        ),
                      c = u[0],
                      d = u[1];
                    i = yield this.tableAdapter.between(["prefixes"], c, d, {
                      lowerInclusive: !0,
                      upperInclusive: !0,
                    });
                  }
                  for (var m = 1; m < n.length; m++)
                    if (((i = yield this.$2(n[m], i, a)), i.length === 0)) {
                      o = !0;
                      break;
                    }
                  if (!o) {
                    for (var p = 0; p < n.length; p++)
                      if (
                        n[p].length > 2 &&
                        ((i = yield this.$2(
                          n[p].slice(0, n[p].length - 1),
                          i,
                          a,
                        )),
                        i.length === 0)
                      ) {
                        o = !0;
                        break;
                      }
                  }
                }
                if (o) return s();
                var _ = i
                  .map(function (e) {
                    var t = e.chatId,
                      n = e.id,
                      r = e.timestamp;
                    return { id: n, chatId: t, timestamp: r };
                  })
                  .sort(r("WAFtsSearchResultComparator"));
                return this.$3(_, t);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = this;
                if (n != null) {
                  var a = yield this.blindIndexGenerator.generateForToken(e, n);
                  return t.filter(function (e) {
                    return e.prefixes.some(function (e) {
                      return o("WAArrayBufferUtils").arrayBuffersEqualUNSAFE(
                        e,
                        a,
                      );
                    });
                  });
                } else {
                  var i = yield this.blindIndexGenerator.generateForToken(e);
                  return t.filter(function (e) {
                    return e.prefixes.some(function (e) {
                      return o("WAArrayBufferUtils").arrayBuffersEqualUNSAFE(
                        e.slice(0, r.blindIndexGenerator.blindIndexByteLength),
                        i,
                      );
                    });
                  });
                }
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$3 = function (n, r) {
            var t = r.page,
              o = t === void 0 ? 1 : t,
              a = r.limit,
              i = a === void 0 ? e : a,
              l = (o - 1) * i || 0,
              s = l + i,
              u = s >= n.length,
              c = n.slice(l, s);
            return { messages: c, eof: u, status: 200 };
          }),
          (a.invalidateCache = function () {
            throw new (o("WACustomError").UnimplementedMethod)(
              "invalidateCache",
            );
          }),
          (a.invalidateAllCaches = function () {
            throw new (o("WACustomError").UnimplementedMethod)(
              "invalidateAllCaches",
            );
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
