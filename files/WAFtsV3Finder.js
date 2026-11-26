__d(
  "WAFtsV3Finder",
  [
    "WAArrayBufferUtils",
    "WACustomError",
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WAFtsSearchResultComparator",
    "WAJids",
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
              a = !1,
              i = n.remote,
              l = [];
            if (e.length === 0) a = !0;
            else {
              var u = e[0];
              if (i != null)
                ((l = await this.tableAdapter.bulkGetAnyOf(
                  ["prefixes"],
                  [await this.blindIndexGenerator.generateForToken(u, i)],
                )),
                  (l = l.filter(function (e) {
                    return e.chatId === i;
                  })));
              else {
                var c =
                    await this.blindIndexGenerator.generateBoundsForToken(u),
                  d = c[0],
                  m = c[1];
                l = await this.tableAdapter.between(["prefixes"], d, m, {
                  lowerInclusive: !0,
                  upperInclusive: !0,
                });
              }
              for (var p = 1; p < e.length; p++)
                if (((l = await this.$2(e[p], l, i)), l.length === 0)) {
                  a = !0;
                  break;
                }
              if (!a) {
                for (var _ = 0; _ < e.length; _++)
                  if (
                    e[_].length > 2 &&
                    ((l = await this.$2(e[_].slice(0, e[_].length - 1), l, i)),
                    l.length === 0)
                  ) {
                    a = !0;
                    break;
                  }
              }
            }
            if (a) return s();
            n.excludeNewsletterChats === !0 &&
              (l = l.filter(function (e) {
                return !e.chatId.endsWith(o("WAJids").WA_NEWSLETTER_JID_DOMAIN);
              }));
            var f = l
              .map(function (e) {
                var t = e.chatId,
                  n = e.id,
                  r = e.timestamp;
                return { id: n, chatId: t, timestamp: r };
              })
              .sort(r("WAFtsSearchResultComparator"));
            return this.$3(f, n);
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
