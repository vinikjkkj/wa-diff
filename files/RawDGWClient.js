__d(
  "RawDGWClient",
  [
    "DGWAuth",
    "DGWLoggingContext",
    "DGWStream",
    "StreamGroup",
    "StreamGroupRegistry",
    "err",
    "isFastRefreshEnabledForCurrentDomain",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e.appId,
          n = e.appVersion,
          r = e.authToken,
          a = e.authType,
          i = e.dgwVersion,
          l = e.endpoint,
          s = e.fbId,
          u = e.isUserLoggedIn;
        ((this.$1 = t),
          (this.$2 = n),
          (this.$3 = a),
          (this.$5 = i),
          (this.$6 = l),
          (this.$7 = s),
          (this.$8 = new (o("StreamGroupRegistry").StreamGroupRegistry)()),
          (this.$4 = r),
          (this.$9 = u));
      }
      var t = e.prototype;
      return (
        (t.$10 = function (t, n) {
          var e = this.$5,
            r = this.$7;
          return function (a, i, l) {
            return new (o("DGWLoggingContext").DGWLoggingContext)(
              e,
              a,
              t,
              r,
              n != null ? n : null,
              i != null ? i : !1,
              l != null ? l : !1,
            );
          };
        }),
        (t.createStreamGroup = function (t, n) {
          var e, r;
          this.handleUserChecks((e = n.authType) != null ? e : this.$3);
          var a = (r = n.authToken) != null ? r : this.$4;
          a != null &&
            this.$3 === o("DGWAuth").DGWAuth.GUEST &&
            (n.authToken = a);
          var i = this.$10(n.serviceId, n.loggingId);
          return new (o("StreamGroup").StreamGroup)(
            this.$1,
            this.$2,
            this.$3,
            this.$5,
            this.$6,
            this.$7,
            n,
            t,
            this.$8,
            i,
          );
        }),
        (t.handleUserChecks = function (t) {
          if (
            !this.$9() &&
            o("DGWAuth").fromDGWAuthToString(t) !== "GUEST" &&
            !r("isFastRefreshEnabledForCurrentDomain")()
          )
            throw r("err")(o("DGWStream").StreamError.UNAUTHENTICATED);
        }),
        e
      );
    })();
    l.RawDGWClient = e;
  },
  98,
);
