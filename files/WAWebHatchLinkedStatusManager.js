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
          ((this.$1 = null), (this.$2 = !1), (this.$3 = []), (this.$4 = null));
        }
        var n = t.prototype;
        return (
          (n.registerFetcher = function (t) {
            this.$4 = t;
          }),
          (n.subscribeToLinkedStatus = function (t) {
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
          (n.getLinkedStatus = function () {
            return this.$1;
          }),
          (n.isLinked = function () {
            var e = this.$1;
            return e == null
              ? !0
              : e.hasChannel && e.status === "ACTIVE" && e.isPaired;
          }),
          (n.isKnownLinked = function () {
            return this.$1 != null && this.isLinked();
          }),
          (n.isOptimisticallyUnlinked = function () {
            return this.$2;
          }),
          (n.markUnlinked = function () {
            ((this.$2 = !0), this.$5(this.$1));
          }),
          (n.fetchAndUpdateStatus = function () {
            var t = this;
            if (this.$4 == null) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchLinkedStatusManager] no fetcher registered, skipping",
                  ])),
              );
              return;
            }
            this.$4()
              .then(function (e) {
                ((t.$1 = e),
                  (t.$2 = !1),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[HatchLinkedStatusManager] fetched linked status",
                      ])),
                  ),
                  t.$5(e));
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
                  t.$5(t.$1));
              });
          }),
          (n.__resetForTesting = function () {
            ((this.$1 = null),
              (this.$2 = !1),
              (this.$3 = []),
              (this.$4 = null));
          }),
          (n.$5 = function (t) {
            for (var e of [].concat(this.$3)) e(t);
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
