__d(
  "WAWebMetaAiWaffleAuthTokenCache",
  ["WALogger", "WAWebMetaAiWaffleAuthToken", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 9e5,
      u = 2 * s,
      c = null,
      d = 0,
      m = 0,
      p = !1,
      _ = 0,
      f = null,
      g = 0;
    function h() {
      return Date.now() - m >= s;
    }
    function y() {
      return ((!p || h()) && f == null && C(), c);
    }
    function C() {
      if (f != null) return f;
      var t = g;
      return (
        (f = o("WAWebMetaAiWaffleAuthToken")
          .buildMetaAiWaffleAuthTokenBlob()
          .then(function (e) {
            t === g &&
              ((m = Date.now()),
              (p = !0),
              !(e == null && c != null && Date.now() - d < u) &&
                ((c = e), (d = m), e != null && _++));
          })
          .catch(function (n) {
            (t === g && ((m = Date.now()), (p = !0)),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Meta AI auth-token cache refresh failed",
                    ])),
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("waffle-metaai-auth-token-cache-refresh-failed", {
                  sampling: 0.01,
                }));
          })
          .finally(function () {
            f = null;
          })),
        f
      );
    }
    function b() {
      var e;
      return {
        ageMs: c != null ? Date.now() - d : null,
        blobLength: (e = c) == null ? void 0 : e.length,
        buildCount: _,
        hasAttemptedBuild: p,
        isStale: c != null && h(),
        lastAttemptAgeMs: p ? Date.now() - m : null,
        refreshInFlight: f != null,
        ttlMs: s,
      };
    }
    function v() {
      ((c = null), (d = 0), (m = 0), (p = !1), g++);
    }
    ((l.getCachedMetaAiWaffleAuthTokenBlob = y),
      (l.refreshMetaAiWaffleAuthTokenBlob = C),
      (l.getMetaAiWaffleAuthTokenBlobCacheStateForDebug = b),
      (l.clearMetaAiWaffleAuthTokenBlobCache = v));
  },
  98,
);
