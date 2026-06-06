__d(
  "WAWebWWAISendRequest",
  [
    "Promise",
    "WAWebWWAIConstants",
    "WAWebWWAILogging",
    "WAWebWWAIRequestBuilder",
    "WAWebWWAITransportRegistry",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("WAWebWWAITransportRegistry").getTransport();
          if (a == null) throw r("err")("WWAI transport not available");
          var i = o("WAWebWWAIRequestBuilder").buildRewriteRequest(e, t, n),
            l = i.request;
          o("WAWebWWAILogging").logRequestSent(t, l.requestId);
          try {
            return yield d(
              a.sendRequest(l),
              o("WAWebWWAIConstants").DEFAULT_REQUEST_TIMEOUT_MS,
            );
          } catch (e) {
            var s = c(e);
            throw (o("WAWebWWAILogging").logRequestError(s, l.requestId), e);
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return e instanceof Error
        ? e.name === "TimeoutError"
          ? "timeout"
          : e.name === "WWAIServerError"
            ? "server"
            : "unknown"
        : "unknown";
    }
    function d(t, o) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var a = window.setTimeout(function () {
          var e = r("err")("timeout");
          ((e.name = "TimeoutError"), n(e));
        }, o);
        t.then(
          function (t) {
            (window.clearTimeout(a), e(t));
          },
          function (e) {
            (window.clearTimeout(a), n(e));
          },
        );
      });
    }
    l.sendWWAIRequest = s;
  },
  98,
);
