__d(
  "WAWebFetchImageBlobUrl",
  [
    "WAAbortError",
    "WAPromiseTimeout",
    "WAWebMimeTypes",
    "WAWebXHR",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3e4;
    async function s(t, n) {
      var a;
      try {
        a = await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebXHR").get({
            responseType: o("WAWebXHR").RESP_TYPE.ARRAY_BUFFER,
            signal: n,
            url: t,
          }),
          e,
          "FetchImageBlobUrlTimeout",
        );
      } catch (e) {
        throw u(e);
      }
      if (a.status < 200 || a.status >= 300)
        throw r("err")("image blob url fetch failed with status %s", a.status);
      var i = new Uint8Array(a.response),
        l = window.URL.createObjectURL(
          new Blob([i], {
            type: o("WAWebMimeTypes").getMediaMimeType("image", i),
          }),
        );
      try {
        if ((await c(l), n.aborted))
          throw new (o("WAAbortError").AbortError)("aborted after decode");
      } catch (e) {
        throw (window.URL.revokeObjectURL(l), e);
      }
      return l;
    }
    function u(e) {
      var t = r("getErrorSafe")(e);
      return t === e
        ? t
        : r("err")("image blob url request failed without a response");
    }
    async function c(e) {
      var t = new Image();
      ((t.src = e), await t.decode());
    }
    l.default = s;
  },
  98,
);
