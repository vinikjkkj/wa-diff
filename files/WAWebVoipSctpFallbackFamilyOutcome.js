__d(
  "WAWebVoipSctpFallbackFamilyOutcome",
  ["WALogger", "WAWebCoreActionsODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e.includes(":");
    }
    var u = (function () {
        function e() {
          ((this.$1 = !1), (this.$2 = !1), (this.$3 = !1), (this.$4 = !1));
        }
        var t = e.prototype;
        return (
          (t.markEnteredViaWtFallback = function () {
            this.$1 = !0;
          }),
          (t.recordAttempt = function (t) {
            t !== "" && s(t) && (this.$3 = !0);
          }),
          (t.recordOpened = function (t) {
            t !== "" && (s(t) ? (this.$4 = !0) : (this.$2 = !0));
          }),
          (t.isIpv4OnlyRecovery = function () {
            return this.$1 && this.$2 && this.$3 && !this.$4;
          }),
          e
        );
      })(),
      c = new u();
    function d() {
      c.markEnteredViaWtFallback();
    }
    function m(e) {
      c.recordAttempt(e);
    }
    function p(e) {
      c.recordOpened(e);
    }
    function _() {
      c = new u();
    }
    function f() {
      c.isIpv4OnlyRecovery() &&
        (o("WAWebCoreActionsODS").logCallSctpFallbackIpv4OnlyIpv6Failed(),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] WT fallback recovered on IPv4 only; every IPv6 relay failed",
            ])),
        ));
    }
    ((l.markSctpEnteredViaWebTransportFallback = d),
      (l.recordSctpFallbackFamilyAttempt = m),
      (l.recordSctpFallbackFamilyOpened = p),
      (l.resetSctpFallbackFamilyOutcome = _),
      (l.reportSctpFallbackFamilyOutcome = f));
  },
  98,
);
