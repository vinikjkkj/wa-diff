__d(
  "WAWebHatchAgentStatusManager",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (function () {
        function t() {
          ((this.$1 = null), (this.$2 = []), (this.$3 = null));
        }
        var n = t.prototype;
        return (
          (n.registerFetcher = function (t) {
            this.$3 = t;
          }),
          (n.subscribeToStatusText = function (t) {
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
          (n.getAgentStatus = function () {
            return this.$1;
          }),
          (n.setAgentStatus = function (t) {
            ((this.$1 = t), this.$4(t.activityText));
          }),
          (n.clearAgentStatus = function () {
            ((this.$1 = null), this.$4(null));
          }),
          (n.fetchAndUpdateStatus = function (n) {
            var t = this;
            if (this.$3 == null) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchAgentStatusManager] no fetcher registered, skipping",
                  ])),
              );
              return;
            }
            this.$3()
              .then(function (e) {
                e != null && e.activityText !== ""
                  ? (t.setAgentStatus(e),
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[HatchAgentStatusManager] fetched: ",
                          " for ",
                          "",
                        ])),
                      e.activityCode,
                      n,
                    ))
                  : (t.clearAgentStatus(),
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[HatchAgentStatusManager] no active status for ",
                          "",
                        ])),
                      n,
                    ));
              })
              .catch(function (e) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[HatchAgentStatusManager] fetch failed for ",
                      ": ",
                      "",
                    ])),
                  n,
                  String(e),
                );
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
      m = new d(),
      p = m;
    l.default = p;
  },
  98,
);
