__d(
  "WAWebMsgsCollectionFilterer",
  [
    "WAAbortError",
    "WAAsyncSleep",
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WAFtsMultiLangTokenizer",
    "WAWebThreadMsgUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 100,
      s = 40,
      u = 100,
      c = (function () {
        function t(e) {
          ((this.getMsgText = e),
            (this.tokenizer = new (r("WAFtsMultiLangTokenizer"))()),
            (this.msgKeyToTokens = new Map()),
            (this.newMsgsToTokenize = []));
        }
        var a = t.prototype;
        return (
          (a.filter = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a) {
                var i =
                  a != null
                    ? e.filter(function (e) {
                        return o("WAWebThreadMsgUtils").isMsgInThread(e, a);
                      })
                    : e.toArray();
                if (t === "" || t == null) return i;
                var l = Array.from(this.tokenizer.tokenize(t))
                  .filter(function (e) {
                    return (
                      e.length > 1 ||
                      r("WAFtsIsSearchQueryEligibleForMessageSearch")(e)
                    );
                  })
                  .sort(function (e, t) {
                    return t.length - e.length;
                  });
                if (l.length === 0) return i;
                var s = 0;
                for (var c of l) {
                  var d = [];
                  for (var m of i) {
                    if ((n == null ? void 0 : n.aborted) === !0)
                      throw new (o("WAAbortError").AbortError)();
                    var p = m.id,
                      _ = this.msgKeyToTokens.get(p);
                    (_ == null &&
                      ((_ = this.$1(m)), this.msgKeyToTokens.set(m.id, _)),
                      this.$2(_, c) && d.push(m),
                      (s += 1),
                      yield o("WAAsyncSleep").asyncSleepAfterGivenLoopIteration(
                        s,
                        u,
                        0,
                      ));
                  }
                  if (((i = d), i.length === 0)) break;
                }
                if (
                  ((this.newMsgsToTokenize = []),
                  (n == null ? void 0 : n.aborted) === !0)
                )
                  throw new (o("WAAbortError").AbortError)();
                return i;
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.cacheMessageTokens = function (n) {
            var t = this;
            (this.newMsgsToTokenize.push(n),
              this.newMsgsToTokenize.length === e &&
                self.setTimeout(function () {
                  return t.$3();
                }, 0));
          }),
          (a.removeMessageTokensFromCache = function (t) {
            this.msgKeyToTokens.delete(t.id);
          }),
          (a.clearTokensCache = function () {
            this.msgKeyToTokens.clear();
          }),
          (a.$3 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this.newMsgsToTokenize;
              this.newMsgsToTokenize = [];
              for (var n of t.entries()) {
                var r = n[0],
                  a = n[1],
                  i = a.id;
                if (!this.msgKeyToTokens.has(i)) {
                  var l = this.$1(a);
                  (this.msgKeyToTokens.set(i, l),
                    yield o("WAAsyncSleep").asyncSleepAfterGivenLoopIteration(
                      r,
                      e,
                      s,
                    ));
                }
              }
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.$2 = function (t, n) {
            for (var e of t) if (e.startsWith(n)) return !0;
            return !1;
          }),
          (a.$1 = function (t) {
            var e = this.getMsgText(t);
            if (e == null) return [];
            var n = Array.from(this.tokenizer.tokenize(e)).filter(function (e) {
              return (
                e.length > 1 ||
                r("WAFtsIsSearchQueryEligibleForMessageSearch")(e)
              );
            });
            return n;
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
