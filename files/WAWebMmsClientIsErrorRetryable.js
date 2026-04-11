__d(
  "WAWebMmsClientIsErrorRetryable",
  ["WAWebHttpErrors", "WAWebMediaHostsErrors", "WAWebMmsClientErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === 408 ? !0 : e === 507 ? !1 : e >= 500;
    }
    function s(e) {
      return e instanceof o("WAWebMmsClientErrors").MMSThrottleError
        ? !1
        : e instanceof o("WAWebMediaHostsErrors").NoMediaHostsError ||
            e instanceof o("WAWebHttpErrors").HttpNetworkError ||
            e instanceof o("WAWebMmsClientErrors").MMSUnauthorizedError ||
            (e instanceof o("WAWebHttpErrors").HttpStatusCodeError &&
              e.status >= 500);
    }
    ((l.isRetriableStatusCode = e), (l.isErrorRetryable = s));
  },
  98,
);
