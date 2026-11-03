__d(
  "WAFtsV3Indexer",
  [
    "WAArrayChunk",
    "WAFtsBaseIndexer",
    "WAFtsV3BlindIndexGenerator",
    "WAFtsV3Finder",
    "WAFtsV3IndexEntry",
    "WALogger",
    "WAPromiseDelays",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1e3,
      c = 1e3,
      d = 8,
      m = 1e3,
      p = (function (t) {
        function n(e, n, o, a, i, l, s, p) {
          var _;
          (a === void 0 && (a = d),
            i === void 0 && (i = c),
            l === void 0 && (l = u),
            s === void 0 && (s = m));
          var f = new (r("WAFtsV3BlindIndexGenerator"))(function () {
              return o.getKey();
            }, a),
            g = new (r("WAFtsV3Finder"))(e, o, f);
          return (
            (_ = t.call(this, g, n, o, i, p) || this),
            (_.$BlindIndicesBasedIndexer$p_3 = 0),
            (_.$BlindIndicesBasedIndexer$p_1 = e),
            (_.$BlindIndicesBasedIndexer$p_2 = f),
            (_.$BlindIndicesBasedIndexer$p_4 = l),
            (_.$BlindIndicesBasedIndexer$p_5 = s),
            _
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$BlindIndicesBasedIndexer$p_6 = async function (n) {
            try {
              (await this.tableAdapter.bulkPut(n.flat()),
                (this.$BlindIndicesBasedIndexer$p_3 += n.length));
            } catch (t) {
              throw (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to write message to FTS index. ",
                      "",
                    ])),
                  t,
                ),
                t
              );
            }
          }),
          (a.$BlindIndicesBasedIndexer$p_7 = async function (t) {
            try {
              (await this.tableAdapter.bulkPut(t),
                this.$BlindIndicesBasedIndexer$p_3++);
            } catch (e) {
              throw (
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to write message with id ",
                      " to FTS index",
                    ])),
                  t[0].id,
                ),
                e
              );
            } finally {
              this.$BlindIndicesBasedIndexer$p_3 > 0 &&
                this.$BlindIndicesBasedIndexer$p_3 % 20 === 0 &&
                (await o("WAPromiseDelays").delayMs(
                  this.$BlindIndicesBasedIndexer$p_5,
                ));
            }
          }),
          (a.__processBatch = async function (t) {
            var e = this;
            if (this.scheduler != null) {
              var n = [],
                r = async function () {
                  var t = a.chatId,
                    r = a.id,
                    i = a.textFragments,
                    l = a.timestamp,
                    s = Array.from(
                      e.$BlindIndicesBasedIndexer$p_1.tokenize(i.join(" ")),
                    );
                  n.push(
                    Promise.all(
                      s.map(function (n) {
                        return e.$BlindIndicesBasedIndexer$p_2.generatePrefixes(
                          n,
                          t,
                        );
                      }),
                    ).then(function (n) {
                      var a = o("WAArrayChunk").chunk(
                        n.flat(),
                        e.$BlindIndicesBasedIndexer$p_4,
                      );
                      return a.map(function (e) {
                        return o("WAFtsV3IndexEntry").buildEntry(r, t, l, e);
                      });
                    }),
                  );
                };
              for (var a of t) await r();
              var i = await Promise.all(n);
              await this.$BlindIndicesBasedIndexer$p_6(i);
            } else {
              var l = async function () {
                var t = s.chatId,
                  n = s.id,
                  r = s.textFragments,
                  a = s.timestamp;
                {
                  var i = Array.from(
                      e.$BlindIndicesBasedIndexer$p_1.tokenize(r.join(" ")),
                    ),
                    l = await Promise.all(
                      i.map(function (n) {
                        return e.$BlindIndicesBasedIndexer$p_2.generatePrefixes(
                          n,
                          t,
                        );
                      }),
                    ),
                    u = o("WAArrayChunk").chunk(
                      l.flat(),
                      e.$BlindIndicesBasedIndexer$p_4,
                    ),
                    c = u.map(function (e) {
                      return o("WAFtsV3IndexEntry").buildEntry(n, t, a, e);
                    });
                  await e.$BlindIndicesBasedIndexer$p_7(c);
                }
              };
              for (var s of t) await l();
            }
          }),
          (a.purge = async function (t) {
            return (await this.tableAdapter.bulkRemoveByIndex(["id"], t), !0);
          }),
          (a.purgeChat = async function (t) {
            return (
              await this.tableAdapter.bulkRemoveByIndex(["chatId"], [t]),
              !0
            );
          }),
          (a.purge__DEPRECATED_DO_NOT_USE = async function (t, n, r) {
            return (
              await this.tableAdapter.bulkRemoveByIndex(["chatId"], [t]),
              !0
            );
          }),
          n
        );
      })(r("WAFtsBaseIndexer"));
    l.default = p;
  },
  98,
);
