__d(
  "WAWebHatchLinkedStatusManager",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (function () {
        function t() {
          ((this.$1 = null), (this.$2 = []), (this.$3 = null));
        }
        var n = t.prototype;
        return (
          (n.registerFetcher = function (t) {
            this.$3 = t;
          }),
          (n.subscribeToLinkedStatus = function (t) {
            var e = this;
            return (
              this.$2.push(t),
              function () {
                e.$2 = e.$2.filter(function (e) {
                  return e !== t;
                });
              }
            );
          }),
          (n.getLinkedStatus = function () {
            return this.$1;
          }),
          (n.isLinked = function () {
            var e = this.$1;
            return e == null
              ? !0
              : e.hasChannel && e.status === "ACTIVE" && e.isPaired;
          }),
          (n.fetchAndUpdateStatus = function () {
            var t = this;
            if (this.$3 == null) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchLinkedStatusManager] no fetcher registered, skipping",
                  ])),
              );
              return;
            }
            this.$3()
              .then(function (e) {
                ((t.$1 = e),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[HatchLinkedStatusManager] fetched linked status",
                      ])),
                  ),
                  t.$4(e));
              })
              .catch(function (e) {
                (o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[HatchLinkedStatusManager] fetch failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("hatch-linked-status-fetch-fail"),
                  t.$4(t.$1));
              });
          }),
          (n.__resetForTesting = function () {
            ((this.$1 = null), (this.$2 = []), (this.$3 = null));
          }),
          (n.$4 = function (t) {
            for (var e of [].concat(this.$2)) e(t);
          }),
          t
        );
      })(),
      d = new c(),
      m = d;
    l.default = m;
  },
  98,
);
