__d(
  "WAWebSuspiciousLinkCacheRefresh",
  [
    "WALogger",
    "WAUrlSpoofChecksWasmInstance",
    "WAWebMsgCollection",
    "WAWebMsgLinks",
    "WAWebSuspiciousLinkChecksState",
    "WAWebSuspiciousLinkMetrics",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = !1;
    function u() {
      s ||
        ((s = !0),
        o("WAUrlSpoofChecksWasmInstance")
          .whenSuspiciousHostChecksInitialized()
          .then(function () {
            try {
              for (var e of o(
                "WAWebMsgCollection",
              ).MsgCollection.getModelsArray())
                try {
                  o("WAWebMsgLinks").refreshSuspiciousLinkClassification(e);
                } catch (e) {
                  c(e);
                }
            } finally {
              o(
                "WAWebSuspiciousLinkChecksState",
              ).publishSuspiciousLinkChecksReadiness();
            }
          })
          .catch(c));
    }
    function c(t) {
      (o("WAWebSuspiciousLinkMetrics").recordSuspiciousLinkMetric(
        "cache-exception",
      ),
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Link classification refresh failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("suspicious-link-cache-refresh-failed"));
    }
    l.initSuspiciousLinkCacheRefresh = u;
  },
  98,
);
