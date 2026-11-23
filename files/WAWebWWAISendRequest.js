__d(
  "WAWebWWAISendRequest",
  [
    "WAWebWWAIConstants",
    "WAWebWWAILogging",
    "WAWebWWAIRequestBuilder",
    "WAWebWWAITransportRegistry",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var a = o("WAWebWWAITransportRegistry").getTransport();
      if (a == null) throw r("err")("WWAI transport not available");
      var i = o("WAWebWWAIRequestBuilder").buildRewriteRequest(e, t, n),
        l = i.request;
      o("WAWebWWAILogging").logRequestSent(t, l.requestId);
      try {
        return await u(
          a.sendRequest(l),
          o("WAWebWWAIConstants").DEFAULT_REQUEST_TIMEOUT_MS,
        );
      } catch (e) {
        var c = s(e);
        throw (o("WAWebWWAILogging").logRequestError(c, l.requestId), e);
      }
    }
    function s(e) {
      return e instanceof Error
        ? e.name === "TimeoutError"
          ? "timeout"
          : e.name === "WWAIServerError"
            ? "server"
            : "unknown"
        : "unknown";
    }
    function u(e, t) {
      return new Promise(function (n, o) {
        var a = window.setTimeout(function () {
          var e = r("err")("timeout");
          ((e.name = "TimeoutError"), o(e));
        }, t);
        e.then(
          function (e) {
            (window.clearTimeout(a), n(e));
          },
          function (e) {
            (window.clearTimeout(a), o(e));
          },
        );
      });
    }
    l.sendWWAIRequest = e;
  },
  98,
);
