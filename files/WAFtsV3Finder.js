__d(
  "WAFtsV3Finder",
  [
    "WAArrayBufferUtils",
    "WACustomError",
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WAFtsSearchResultComparator",
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
        var n = t.prototype;
        return (
          (n.find = async function (t, n) {
            n === void 0 && (n = {});
            var e = Array.from(this.$1.tokenize(t))
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
              a = n.remote,
              i = [];
            if (e.length === 0) o = !0;
            else {
              var l = e[0];
              if (a != null)
                ((i = await this.tableAdapter.bulkGetAnyOf(
                  ["prefixes"],
                  [await this.blindIndexGenerator.generateForToken(l, a)],
                )),
                  (i = i.filter(function (e) {
                    return e.chatId === a;
                  })));
              else {
                var u =
                    await this.blindIndexGenerator.generateBoundsForToken(l),
                  c = u[0],
                  d = u[1];
                i = await this.tableAdapter.between(["prefixes"], c, d, {
                  lowerInclusive: !0,
                  upperInclusive: !0,
                });
              }
              for (var m = 1; m < e.length; m++)
                if (((i = await this.$2(e[m], i, a)), i.length === 0)) {
                  o = !0;
                  break;
                }
              if (!o) {
                for (var p = 0; p < e.length; p++)
                  if (
                    e[p].length > 2 &&
                    ((i = await this.$2(e[p].slice(0, e[p].length - 1), i, a)),
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
            return this.$3(_, n);
          }),
          (n.$2 = async function (t, n, r) {
            var e = this;
            if (r != null) {
              var a = await this.blindIndexGenerator.generateForToken(t, r);
              return n.filter(function (e) {
                return e.prefixes.some(function (e) {
                  return o("WAArrayBufferUtils").arrayBuffersEqualUNSAFE(e, a);
                });
              });
            } else {
              var i = await this.blindIndexGenerator.generateForToken(t);
              return n.filter(function (t) {
                return t.prefixes.some(function (t) {
                  return o("WAArrayBufferUtils").arrayBuffersEqualUNSAFE(
                    t.slice(0, e.blindIndexGenerator.blindIndexByteLength),
                    i,
                  );
                });
              });
            }
          }),
          (n.$3 = function (n, r) {
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
          (n.invalidateCache = function () {
            throw new (o("WACustomError").UnimplementedMethod)(
              "invalidateCache",
            );
          }),
          (n.invalidateAllCaches = function () {
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
