__d(
  "WAWebFetchImageBlobUrl",
  [
    "WAAbortError",
    "WAPromiseTimeout",
    "WAWebMimeTypes",
    "WAWebXHR",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3e4;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a;
          try {
            a = yield o("WAPromiseTimeout").promiseTimeout(
              r("WAWebXHR").get({
                responseType: r("WAWebXHR").RESP_TYPE.ARRAY_BUFFER,
                signal: n,
                url: t,
              }),
              e,
              "FetchImageBlobUrlTimeout",
            );
          } catch (e) {
            throw c(e);
          }
          if (a.status < 200 || a.status >= 300)
            throw r("err")(
              "image blob url fetch failed with status %s",
              a.status,
            );
          var i = new Uint8Array(a.response),
            l = window.URL.createObjectURL(
              new Blob([i], {
                type: o("WAWebMimeTypes").getMediaMimeType("image", i),
              }),
            );
          try {
            if ((yield d(l), n.aborted))
              throw new (o("WAAbortError").AbortError)("aborted after decode");
          } catch (e) {
            throw (window.URL.revokeObjectURL(l), e);
          }
          return l;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      var t = r("getErrorSafe")(e);
      return t === e
        ? t
        : r("err")("image blob url request failed without a response");
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Image();
          ((t.src = e), yield t.decode());
        })),
        m.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
