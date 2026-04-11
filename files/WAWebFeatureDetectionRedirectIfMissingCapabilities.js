__d(
  "WAWebFeatureDetectionRedirectIfMissingCapabilities",
  [
    "WAPromiseProps",
    "WAWebBuildConstants",
    "WAWebFeatureDetectionCryptoSupport",
    "WAWebLocalStorage",
    "WAWebSessionStorage",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebBuildConstants").DYN_ORIGIN + "browsers.html",
      s = {
        getRandomValues: !!self.crypto.getRandomValues,
        subtleCrypto: !!(
          self.crypto &&
          (self.crypto.subtle || self.crypto.webkitSubtle)
        ),
        localstorage: !!r("WAWebLocalStorage"),
        sessionstorage: !!r("WAWebSessionStorage"),
        url: !!self.URL,
        websocket: !!self.WebSocket,
        worker: !!self.Worker,
      };
    function u() {
      return c(s)
        ? !0
        : (o("WAPromiseProps")
            .promiseProps({
              cryptoSha256: o(
                "WAWebFeatureDetectionCryptoSupport",
              ).supportsHmacSha256(),
              cryptoAesCbc: o(
                "WAWebFeatureDetectionCryptoSupport",
              ).supportsAesCbc(),
            })
            .then(c),
          !1);
    }
    function c(t) {
      var n = [];
      for (var r in t) t[r] || n.push(r);
      if (n.length > 0) {
        var o = e + "?missing=" + n.join(",");
        return (
          window.location.replace
            ? window.location.replace(o)
            : (window.location.href = o),
          !0
        );
      }
      return !1;
    }
    l.default = u;
  },
  98,
);
