__d(
  "WAWebHttpExtendedFetch",
  [
    "$InternalEnum",
    "WAAbortError",
    "WAArrayBufferUtils",
    "WAWebHttpErrors",
    "WAWebHttpExtendedFetchWithStreams",
    "WAWebHttpParseHeaders",
    "WAWebNoop",
    "WAWebPonyfillsHeaders",
    "err",
    "getErrorSafe",
    "w3c-domcore-errors",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      UNSENT: 0,
      OPENED: 1,
      HEADERS_RECEIVED: 2,
      LOADING: 3,
      DONE: 4,
    });
    async function s(e, t) {
      t === void 0 && (t = {});
      try {
        return o(
          "WAWebHttpExtendedFetchWithStreams",
        ).canUseExtendedFetchWithStreams(t.method)
          ? await o(
              "WAWebHttpExtendedFetchWithStreams",
            ).extendedFetchWithStreams(e, t)
          : await u(e, t);
      } catch (e) {
        var n = r("getErrorSafe")(e);
        throw n.name === o("WAAbortError").ABORT_ERROR
          ? new (o("WAAbortError").AbortError)()
          : n instanceof o("WAWebHttpErrors").HttpNetworkError
            ? n
            : new (o("WAWebHttpErrors").HttpNetworkError)(n.message);
      }
    }
    function u(t, n) {
      return (
        n === void 0 && (n = {}),
        new Promise(function (a, i) {
          var l;
          if ((l = n.signal) != null && l.aborted) {
            i(new (o("w3c-domcore-errors").DOMException)("AbortError"));
            return;
          }
          var s = new XMLHttpRequest();
          if (n.signal) {
            var u = n.signal;
            u.addEventListener("abort", function e() {
              (u.removeEventListener("abort", e),
                (s.onreadystatechange = r("WAWebNoop")),
                s.abort(),
                i(new (o("w3c-domcore-errors").DOMException)("AbortError")));
            });
          }
          var c = n,
            d = c.onData,
            m = c.onProgress;
          if (m != null || d) {
            var p;
            (((p = n.method) == null ? void 0 : p.toLowerCase()) === "post" &&
            s.upload != null
              ? s.upload
              : s
            ).onprogress = function (e) {
              (d && d(e, s.responseText), m && m(e));
            };
          }
          var _ = n,
            f = _.onHeadersReceived;
          ((s.onreadystatechange = function () {
            if (s.readyState === e.UNSENT) {
              i(r("err")("fetch error: not sent"));
              return;
            } else if (s.readyState === e.HEADERS_RECEIVED && f != null) {
              f(
                new (r("WAWebPonyfillsHeaders"))(
                  r("WAWebHttpParseHeaders")(s.getAllResponseHeaders()),
                ),
              );
              return;
            } else if (s.readyState === e.DONE) {
              if (s.status == null) {
                i(r("err")("fetch error: no status"));
                return;
              }
              if (s.status === 0 || s.status >= 12e3) {
                i(r("err")("fetch error: unexpected status " + s.status));
                return;
              }
              a(C());
            }
          }),
            (s.onerror = function () {
              return i(r("err")("fetch error: error"));
            }),
            (s.ontimeout = function () {
              i(
                new (o("WAWebHttpErrors").HttpTimedOutError)(
                  "fetch error: timedout",
                ),
              );
            }),
            (s.withCredentials = n.credentials === "include"),
            n.timeout != null && (s.timeout = n.timeout),
            s.open(n.method || "get", t.toString(), !0));
          var g = new (r("WAWebPonyfillsHeaders"))(n.headers || {});
          for (var h of g.keys()) {
            var y = g.get(h);
            y != null && s.setRequestHeader(h, y);
          }
          (d
            ? s.overrideMimeType("text/plain; charset=x-user-defined")
            : (s.responseType = "arraybuffer"),
            s.send(n.body || null));
          function C() {
            var e = new (r("WAWebPonyfillsHeaders"))(
              r("WAWebHttpParseHeaders")(s.getAllResponseHeaders()),
            );
            return babelHelpers.extends(
              {
                ok: 200 <= s.status && s.status < 300,
                statusText: s.statusText,
                status: s.status,
                url: s.responseURL,
              },
              b(),
              {
                blob: function () {
                  return Promise.resolve(
                    new Blob([s.response], {
                      type: e.get("content-type") || "",
                    }),
                  );
                },
                clone: C,
                headers: e,
              },
            );
          }
          function b() {
            return d
              ? {
                  text: function () {
                    return Promise.resolve(s.responseText);
                  },
                  json: function () {
                    return Promise.resolve(JSON.parse(s.responseText));
                  },
                  arrayBuffer: function () {
                    return o("WAArrayBufferUtils").largeStringToArrayBuffer(
                      s.responseText,
                    );
                  },
                }
              : {
                  text: function () {
                    return v();
                  },
                  json: async function () {
                    var e = await v();
                    return JSON.parse(e);
                  },
                  arrayBuffer: function () {
                    return s.response;
                  },
                };
          }
          function v() {
            return Promise.resolve(
              String.fromCharCode.apply(
                String,
                Array.from(new Uint8Array(s.response)),
              ),
            );
          }
        })
      );
    }
    ((l.extendedFetch = s), (l.sharedFetch = u));
  },
  98,
);
