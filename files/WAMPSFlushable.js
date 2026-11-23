__d(
  "WAMPSFlushable",
  ["MpsTypes", "WebMps", "cr:19391", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = []), (this.$2 = new Map()), (this.$3 = new Set()));
        }
        var t = e.prototype;
        return (
          (t.enqueue = function (t, n, r) {
            t != null &&
              (this.$1.push(t), this.$2.set(t.messageId, n), this.$3.add(r));
          }),
          (t.flush = async function (t, a, i, l) {
            if (this.$1.length !== 0) {
              var e = this.$1,
                s = Array.from(this.$3).join(", "),
                u = this.$2;
              ((this.$1 = []), (this.$2 = new Map()), (this.$3 = new Set()));
              try {
                var c = new Map(),
                  d = e.map(function (e) {
                    return {
                      message: e,
                      insertionSource: o("MpsTypes").InsertionSource.Receive,
                    };
                  }),
                  m = n("cr:19391");
                (m == null
                  ? await o("WebMps")
                      .mps()
                      .saveNewMessages(d, { source: s }, function (e) {
                        c = e;
                      })
                  : (c = (
                      await m.runMps(
                        { boundary: "save", code: "write_failed", subject: s },
                        function (e) {
                          return m.saveMessages(e, d, "wa-delivery", {
                            source: s,
                          });
                        },
                      )
                    ).getOrThrow()),
                  u.forEach(function (e, t) {
                    e(c.get(t));
                  }));
              } catch (e) {
                var p = r("getErrorSafe")(e);
                u.forEach(function (e) {
                  e(p);
                });
              }
            }
          }),
          e
        );
      })(),
      s = new e();
    l.mpsFlushable = s;
  },
  98,
);
