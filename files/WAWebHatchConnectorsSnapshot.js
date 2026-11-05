__d(
  "WAWebHatchConnectorsSnapshot",
  ["WAWebHatchLinkedStatusManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = null), (this.$2 = null), (this.$3 = []));
        }
        var t = e.prototype;
        return (
          (t.getSnapshot = function () {
            return this.$1;
          }),
          (t.getChannelFbid = function () {
            return this.$2;
          }),
          (t.findConnector = function (t) {
            var e, n, o, a;
            return ((e =
              (n = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
                ? void 0
                : n.channelFbid) != null
              ? e
              : null) !== this.$2
              ? null
              : (o =
                    (a = this.$1) == null
                      ? void 0
                      : a.find(function (e) {
                          return e.id === t;
                        })) != null
                ? o
                : null;
          }),
          (t.replace = function (t) {
            var e, n;
            ((this.$1 = t),
              (this.$2 =
                (e =
                  (n = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) ==
                  null
                    ? void 0
                    : n.channelFbid) != null
                  ? e
                  : null));
            for (var o of [].concat(this.$3)) o();
          }),
          (t.subscribe = function (t) {
            var e = this;
            return (
              this.$3.push(t),
              function () {
                e.$3 = e.$3.filter(function (e) {
                  return e !== t;
                });
              }
            );
          }),
          e
        );
      })(),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
