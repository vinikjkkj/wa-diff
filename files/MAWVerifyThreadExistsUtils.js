__d(
  "MAWVerifyThreadExistsUtils",
  [
    "FBLogger",
    "I64",
    "LSAuthorityLevel",
    "LSIntEnum",
    "LSVerifyE2EEMetadataThreadExistsV2StoredProcedure",
    "isOfflineThreadingId",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Map(),
      c = 6e4,
      d = 1e4;
    function m(e) {
      if (u.size > d) {
        r("FBLogger")("messenger_web").mustfix(
          "MAWVerifyThreadExistsUtils: requestedThreadKeys size exceeded limit",
        );
        return;
      }
      (u.has(e) && (window.clearTimeout(u.get(e)), u.delete(e)),
        u.set(
          e,
          window.setTimeout(function () {
            u.delete(e);
          }, c),
        ));
    }
    function p(e) {
      return u.has(e);
    }
    function _(t, n, a) {
      var i = n.threadKey;
      return (
        i != null && m((e || (e = o("I64"))).to_string(i)),
        i != null &&
          r("isOfflineThreadingId")(i) &&
          (e || (e = o("I64"))).equal(
            n.authorityLevel,
            (s || (s = o("LSIntEnum"))).ofNumber(
              r("LSAuthorityLevel").AUTHORITATIVE,
            ),
          ) &&
          r("FBLogger")("messenger_web").warn(
            "MAWVerifyThreadExistsUtils: runVerifyThreadExistsSproc called with offline thread key - callsite: %s",
            a,
          ),
        r("LSVerifyE2EEMetadataThreadExistsV2StoredProcedure")(t, n)
      );
    }
    ((l.isThreadRequested = p), (l.runVerifyThreadExistsSproc = _));
  },
  98,
);
