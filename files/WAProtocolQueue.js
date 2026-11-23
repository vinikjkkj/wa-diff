__d(
  "WAProtocolQueue",
  ["PersistedQueueApi", "WALogger", "WAPersistedQueue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5e3,
      u = null;
    function c(t) {
      if (u != null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Protocol Queue is already initialized",
              ])),
          ),
          u
        );
      var n = o("WAPersistedQueue").initPersistedQueue("stanzaQueue", t, {
        cacheSize: null,
        maxDelay: s,
      });
      return ((u = n), u);
    }
    function d() {
      return u || c(o("PersistedQueueApi").persistedQueueApi());
    }
    var m = (function () {
        function e() {
          ((this.$1 = []), (this.$2 = []), (this.$3 = []));
        }
        var t = e.prototype;
        return (
          (t.enqueue = function (t, n, r) {
            (this.$1.push(t), n && this.$2.push(n), r && this.$3.push(r));
          }),
          (t.flush = function (t, n, r, o) {
            var e = this.$1,
              a = this.$2,
              i = this.$3;
            return (
              (this.$1 = []),
              (this.$2 = []),
              (this.$3 = []),
              d()
                .addAndCommit(e)
                .then(function () {
                  return a.forEach(function (e) {
                    return e();
                  });
                })
                .catch(function (e) {
                  return i.forEach(function (t) {
                    return t(e);
                  });
                })
            );
          }),
          e
        );
      })(),
      p = new m(),
      _ = 7,
      f = 5,
      g = 2;
    function h(e) {
      return e;
    }
    ((l.protocolQueue = d),
      (l.pqFlushable = p),
      (l.WAProtocolQueuePriorityMid = _),
      (l.WAProtocolQueuePriorityLow = f),
      (l.WAProtocolQueuePriorityBackground = g),
      (l.numberToStanzaQueueId = h));
  },
  98,
);
