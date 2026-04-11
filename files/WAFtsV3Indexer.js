__d(
  "WAFtsV3Indexer",
  [
    "Promise",
    "WAArrayChunk",
    "WAFtsBaseIndexer",
    "WAFtsV3BlindIndexGenerator",
    "WAFtsV3Finder",
    "WAFtsV3IndexEntry",
    "WALogger",
    "WAPromiseDelays",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 1e3,
      d = 1e3,
      m = 8,
      p = 1e3,
      _ = (function (t) {
        function a(e, n, o, a, i, l, s, u) {
          var _;
          (a === void 0 && (a = m),
            i === void 0 && (i = d),
            l === void 0 && (l = c),
            s === void 0 && (s = p));
          var f = new (r("WAFtsV3BlindIndexGenerator"))(function () {
              return o.getKey();
            }, a),
            g = new (r("WAFtsV3Finder"))(e, o, f);
          return (
            (_ = t.call(this, g, n, o, i, u) || this),
            (_.$BlindIndicesBasedIndexer$p_3 = 0),
            (_.$BlindIndicesBasedIndexer$p_1 = e),
            (_.$BlindIndicesBasedIndexer$p_2 = f),
            (_.$BlindIndicesBasedIndexer$p_4 = l),
            (_.$BlindIndicesBasedIndexer$p_5 = s),
            _
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.$BlindIndicesBasedIndexer$p_6 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                try {
                  (yield this.tableAdapter.bulkPut(t.flat()),
                    (this.$BlindIndicesBasedIndexer$p_3 += t.length));
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
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i.$BlindIndicesBasedIndexer$p_7 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                try {
                  (yield this.tableAdapter.bulkPut(e),
                    this.$BlindIndicesBasedIndexer$p_3++);
                } catch (t) {
                  throw (
                    o("WALogger").ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to write message with id ",
                          " to FTS index",
                        ])),
                      e[0].id,
                    ),
                    t
                  );
                } finally {
                  this.$BlindIndicesBasedIndexer$p_3 > 0 &&
                    this.$BlindIndicesBasedIndexer$p_3 % 20 === 0 &&
                    (yield o("WAPromiseDelays").delayMs(
                      this.$BlindIndicesBasedIndexer$p_5,
                    ));
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.__processBatch = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                if (this.scheduler != null) {
                  var r = [],
                    a = function* () {
                      var e = i.chatId,
                        a = i.id,
                        l = i.textFragments,
                        s = i.timestamp,
                        c = Array.from(
                          t.$BlindIndicesBasedIndexer$p_1.tokenize(l.join(" ")),
                        );
                      r.push(
                        (u || (u = n("Promise")))
                          .all(
                            c.map(function (n) {
                              return t.$BlindIndicesBasedIndexer$p_2.generatePrefixes(
                                n,
                                e,
                              );
                            }),
                          )
                          .then(function (n) {
                            var r = o("WAArrayChunk").chunk(
                              n.flat(),
                              t.$BlindIndicesBasedIndexer$p_4,
                            );
                            return r.map(function (t) {
                              return o("WAFtsV3IndexEntry").buildEntry(
                                a,
                                e,
                                s,
                                t,
                              );
                            });
                          }),
                      );
                    };
                  for (var i of e) yield* a();
                  var l = yield (u || (u = n("Promise"))).all(r);
                  yield this.$BlindIndicesBasedIndexer$p_6(l);
                } else {
                  var s = function* () {
                    var e = c.chatId,
                      r = c.id,
                      a = c.textFragments,
                      i = c.timestamp;
                    {
                      var l = Array.from(
                          t.$BlindIndicesBasedIndexer$p_1.tokenize(a.join(" ")),
                        ),
                        s = yield (u || (u = n("Promise"))).all(
                          l.map(function (n) {
                            return t.$BlindIndicesBasedIndexer$p_2.generatePrefixes(
                              n,
                              e,
                            );
                          }),
                        ),
                        d = o("WAArrayChunk").chunk(
                          s.flat(),
                          t.$BlindIndicesBasedIndexer$p_4,
                        ),
                        m = d.map(function (t) {
                          return o("WAFtsV3IndexEntry").buildEntry(r, e, i, t);
                        });
                      yield t.$BlindIndicesBasedIndexer$p_7(m);
                    }
                  };
                  for (var c of e) yield* s();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.purge = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  yield this.tableAdapter.bulkRemoveByIndex(["id"], e),
                  !0
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.purgeChat = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  yield this.tableAdapter.bulkRemoveByIndex(["chatId"], [e]),
                  !0
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.purge__DEPRECATED_DO_NOT_USE = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                return (
                  yield this.tableAdapter.bulkRemoveByIndex(["chatId"], [e]),
                  !0
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(r("WAFtsBaseIndexer"));
    l.default = _;
  },
  98,
);
