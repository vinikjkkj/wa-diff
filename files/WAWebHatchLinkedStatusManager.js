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
          ((this.$1 = null),
            (this.$2 = "not_loaded"),
            (this.$3 = null),
            (this.$4 = []),
            (this.$5 = null),
            (this.$6 = 0),
            (this.$7 = null),
            (this.$8 = !1));
        }
        var n = t.prototype;
        return (
          (n.registerFetcher = function (t) {
            var e = this.$7 != null;
            ((this.$5 = t), this.$9(), e && this.fetchAndUpdateStatus());
          }),
          (n.subscribeToLinkedStatus = function (t) {
            var e = this;
            return (
              this.$4.push(t),
              function () {
                e.$4 = e.$4.filter(function (e) {
                  return e !== t;
                });
              }
            );
          }),
          (n.getLinkedStatus = function () {
            return this.$1;
          }),
          (n.getLinkedStatusState = function () {
            return this.$2;
          }),
          (n.getLastConfirmedLinkedStatusState = function () {
            return this.$3;
          }),
          (n.isLinked = function () {
            return this.$3 === "linked";
          }),
          (n.isUnlinked = function () {
            return this.$3 === "unlinked";
          }),
          (n.markUnlinked = function () {
            ((this.$1 = null),
              (this.$2 = "unlinked"),
              (this.$3 = "unlinked"),
              this.$9(),
              this.$10());
          }),
          (n.fetchAndUpdateStatus = function () {
            var t = this;
            if (this.$7 != null) {
              this.$8 = !0;
              return;
            }
            var n = this.$5;
            if (n == null) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchLinkedStatusManager] no fetcher registered, skipping",
                  ])),
              );
              return;
            }
            var a = this.$6,
              i = n()
                .then(function (e) {
                  a === t.$6 && t.$11(e);
                })
                .catch(function (e) {
                  a === t.$6 &&
                    (o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[HatchLinkedStatusManager] fetch failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("hatch-linked-status-fetch-fail"),
                    t.$12());
                });
            ((this.$7 = i),
              i.then(function () {
                t.$7 === i &&
                  ((t.$7 = null),
                  t.$8 && ((t.$8 = !1), t.fetchAndUpdateStatus()));
              }));
          }),
          (n.__resetForTesting = function () {
            ((this.$1 = null),
              (this.$2 = "not_loaded"),
              (this.$3 = null),
              (this.$4 = []),
              (this.$5 = null),
              this.$9());
          }),
          (n.$11 = function (t) {
            var e = t != null && d(t) ? "linked" : "unlinked";
            ((this.$1 = t),
              (this.$2 = e),
              (this.$3 = e),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchLinkedStatusManager] fetched linked status",
                  ])),
              ),
              this.$10());
          }),
          (n.$12 = function () {
            ((this.$2 = "failed"), this.$10());
          }),
          (n.$9 = function () {
            ((this.$6 += 1), (this.$7 = null), (this.$8 = !1));
          }),
          (n.$10 = function () {
            for (var e of [].concat(this.$4)) e(this.$1);
          }),
          t
        );
      })();
    function d(e) {
      return e.hasChannel && e.status === "ACTIVE" && e.isPaired;
    }
    var m = new c(),
      p = m;
    l.default = p;
  },
  98,
);
