__d(
  "BaseTypeaheadDataProvider",
  ["CometRelay", "Promise", "XPlatReactRelayErrorHandling"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          var t = e.onError,
            n = e.options,
            r = e.query,
            o = e.queryVariablesBuilder,
            a = e.relayEnvironment;
          ((this.$1 = t),
            (this.$2 = r),
            (this.$3 = o),
            (this.$4 = a),
            (this.$5 = n));
        }
        var r = t.prototype;
        return (
          (r.fetch = function (r) {
            var t = this,
              a = this.$3.build(),
              i = a(r);
            return new (e || (e = n("Promise")))(function (e, n) {
              var r,
                a = !1;
              o("CometRelay")
                .fetchQuery(t.$4, t.$2, i, {
                  fetchPolicy: (r = t.$5) == null ? void 0 : r.fetchPolicy,
                })
                .subscribe({
                  error: function (r) {
                    (o("XPlatReactRelayErrorHandling").markErrorAsHandled(r),
                      t.$1 != null && t.$1(r),
                      n(r));
                  },
                  next: function (n) {
                    a ||
                      ((a = !0), e({ requestQueryVariables: i, response: n }));
                  },
                });
            });
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
