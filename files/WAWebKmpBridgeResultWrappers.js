__d(
  "WAWebKmpBridgeResultWrappers",
  ["getErrorSafe", "wa-kmp-syncd-engine-api"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e().then(
        function (e) {
          return o("wa-kmp-syncd-engine-api").KmpResult.success(e);
        },
        function (e) {
          return o("wa-kmp-syncd-engine-api").KmpResult.failure(
            t(r("getErrorSafe")(e)),
          );
        },
      );
    }
    function s(e) {
      return e instanceof o("wa-kmp-syncd-engine-api").KmpSyncdInterfaceError
        ? e
        : u(e);
    }
    function u(e) {
      if (
        e instanceof
        o("wa-kmp-syncd-engine-api").KmpSyncdInterfaceError
          .KmpSyncdUnexpectedError
      )
        return e;
      var t = r("getErrorSafe")(e);
      return new (o(
        "wa-kmp-syncd-engine-api",
      ).KmpSyncdInterfaceError.KmpSyncdUnexpectedError)(
        String(t.message),
        t.name,
        null,
        null,
        t.stackTrace,
      );
    }
    function c(t) {
      return e(t, s);
    }
    function d(t) {
      return e(t, u);
    }
    function m(e, t) {
      try {
        return o("wa-kmp-syncd-engine-api").KmpResult.success(e());
      } catch (e) {
        return o("wa-kmp-syncd-engine-api").KmpResult.failure(
          t(r("getErrorSafe")(e)),
        );
      }
    }
    function p(e) {
      return m(e, u);
    }
    ((l.wrapKmpSuccess = e),
      (l.wrapInterfaceKmpSuccess = c),
      (l.wrapUnexpectedKmpSuccess = d),
      (l.wrapUnexpectedKmpSuccessSync = p));
  },
  98,
);
