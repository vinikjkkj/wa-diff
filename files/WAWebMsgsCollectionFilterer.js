__d(
  "WAWebMsgsCollectionFilterer",
  [
    "WAAbortError",
    "WAAsyncSleep",
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WAFtsMultiLangTokenizer",
    "WAWebReleaseToEventLoop",
    "WAWebThreadMsgUtils",
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
        var n = t.prototype;
        return (
          (n.filter = async function (t) {
            var e = t.msgCollection,
              n = t.searchText,
              a = t.signal,
              i = t.threadId,
              l =
                i != null
                  ? e.filter(function (e) {
                      return o("WAWebThreadMsgUtils").isMsgInThread(e, i);
                    })
                  : e.toArray();
            if (n === "" || n == null) return l;
            var s = Array.from(this.tokenizer.tokenize(n))
              .filter(function (e) {
                return (
                  e.length > 1 ||
                  r("WAFtsIsSearchQueryEligibleForMessageSearch")(e)
                );
              })
              .sort(function (e, t) {
                return t.length - e.length;
              });
            if (s.length === 0) return l;
            var c = 0;
            for (var d of s) {
              var m = [];
              for (var p of l) {
                if ((a == null ? void 0 : a.aborted) === !0)
                  throw new (o("WAAbortError").AbortError)();
                var _ = p.id,
                  f = this.msgKeyToTokens.get(_);
                (f == null &&
                  ((f = this.$1(p)), this.msgKeyToTokens.set(p.id, f)),
                  this.$2(f, d) && m.push(p),
                  (c += 1),
                  await o("WAAsyncSleep").asyncSleepAfterGivenLoopIteration(
                    c,
                    u,
                    0,
                  ));
              }
              if (((l = m), l.length === 0)) break;
            }
            if (
              ((this.newMsgsToTokenize = []),
              (a == null ? void 0 : a.aborted) === !0)
            )
              throw new (o("WAAbortError").AbortError)();
            return l;
          }),
          (n.cacheMessageTokens = function (n) {
            var t = this;
            (this.newMsgsToTokenize.push(n),
              this.newMsgsToTokenize.length === e &&
                o("WAWebReleaseToEventLoop")
                  .releaseToEventLoop()
                  .then(function () {
                    return t.$3();
                  }));
          }),
          (n.removeMessageTokensFromCache = function (t) {
            this.msgKeyToTokens.delete(t.id);
          }),
          (n.clearTokensCache = function () {
            this.msgKeyToTokens.clear();
          }),
          (n.$3 = async function () {
            var t = this.newMsgsToTokenize;
            this.newMsgsToTokenize = [];
            for (var n of t.entries()) {
              var r = n[0],
                a = n[1],
                i = a.id;
              if (!this.msgKeyToTokens.has(i)) {
                var l = this.$1(a);
                (this.msgKeyToTokens.set(i, l),
                  await o("WAAsyncSleep").asyncSleepAfterGivenLoopIteration(
                    r,
                    e,
                    s,
                  ));
              }
            }
          }),
          (n.$2 = function (t, n) {
            for (var e of t) if (e.startsWith(n)) return !0;
            return !1;
          }),
          (n.$1 = function (t) {
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
