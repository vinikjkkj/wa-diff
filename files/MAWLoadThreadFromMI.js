__d(
  "MAWLoadThreadFromMI",
  [
    "LSAuthorityLevel",
    "LSFactory",
    "LSIntEnum",
    "MAWThreadMappingQPL",
    "MAWVerifyThreadExistsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a, i, l) {
      var s = r("LSAuthorityLevel").AUTHORITATIVE;
      return (
        i != null &&
          o("MAWThreadMappingQPL").addAnnotations(
            { int: { sprocAuthLevel: s, sprocThreadType: a } },
            i,
          ),
        o("MAWThreadMappingQPL").measurePerformanceForNullableInstanceKey(
          "verify_thread_exists",
          i,
          function () {
            return o("MAWVerifyThreadExistsUtils")
              .runVerifyThreadExistsSproc(
                r("LSFactory")(t),
                {
                  authorityLevel: (e || (e = o("LSIntEnum"))).ofNumber(s),
                  threadKey: n,
                  threadType: e.ofNumber(a),
                },
                l,
              )
              .then(function (e) {
                var t = e[0];
                return t;
              });
          },
        )
      );
    }
    l.default = s;
  },
  98,
);
