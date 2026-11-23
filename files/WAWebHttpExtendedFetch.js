__d(
  "WAWebHttpExtendedFetch",
  [
    "$InternalEnum",
    "WAAbortError",
    "WAArrayBufferUtils",
    "WAWebHttpErrors",
    "WAWebHttpParseHeaders",
    "WAWebNoop",
    "WAWebPonyfillsHeaders",
    "err",
    "getErrorSafe",
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
        return await u(e, t);
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
            i(new DOMException("The operation was aborted.", "AbortError"));
            return;
          }
          var s = new XMLHttpRequest();
          if (n.signal) {
            var u = n.signal;
            u.addEventListener("abort", function e() {
              (u.removeEventListener("abort", e),
                (s.onreadystatechange = r("WAWebNoop")),
                s.abort(),
                i(
                  new DOMException("The operation was aborted.", "AbortError"),
                ));
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
              a(v());
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
            n.timeout != null && (s.timeout = n.timeout));
          var g = n.method;
          s.open(g != null && g !== "" ? g : "get", t.toString(), !0);
          var h = new (r("WAWebPonyfillsHeaders"))(n.headers || {});
          for (var y of h.keys()) {
            var C = h.get(y);
            C != null && s.setRequestHeader(y, C);
          }
          d
            ? s.overrideMimeType("text/plain; charset=x-user-defined")
            : (s.responseType = "arraybuffer");
          var b = n.body;
          s.send(b != null && b !== "" ? b : null);
          function v() {
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
              S(),
              {
                blob: function () {
                  return Promise.resolve(
                    new Blob([s.response], {
                      type: e.get("content-type") || "",
                    }),
                  );
                },
                clone: v,
                headers: e,
              },
            );
          }
          function S() {
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
                    return R();
                  },
                  json: async function () {
                    var e = await R();
                    return JSON.parse(e);
                  },
                  arrayBuffer: function () {
                    return s.response;
                  },
                };
          }
          function R() {
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
