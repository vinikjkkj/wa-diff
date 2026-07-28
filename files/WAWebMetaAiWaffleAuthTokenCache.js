__d(
  "WAWebMetaAiWaffleAuthTokenCache",
  ["WALogger", "WAWebMetaAiWaffleAuthToken", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = !1,
      c = null,
      d = 0;
    function m() {
      return (!u && c == null && p(), s);
    }
    function p() {
      if (c != null) return c;
      var t = d;
      return (
        (c = o("WAWebMetaAiWaffleAuthToken")
          .buildMetaAiWaffleAuthTokenBlob()
          .then(function (e) {
            t === d && ((s = e), (u = !0));
          })
          .catch(function (n) {
            (t === d && (u = !0),
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
            c = null;
          })),
        c
      );
    }
    function _() {
      ((s = null), (u = !1), d++);
    }
    ((l.getCachedMetaAiWaffleAuthTokenBlob = m),
      (l.refreshMetaAiWaffleAuthTokenBlob = p),
      (l.clearMetaAiWaffleAuthTokenBlobCache = _));
  },
  98,
);
