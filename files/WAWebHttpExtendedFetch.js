__d(
  "WAWebHttpExtendedFetch",
  [
    "$InternalEnum",
    "Promise",
    "WAAbortError",
    "WAArrayBufferUtils",
    "WAWebHttpErrors",
    "WAWebHttpParseHeaders",
    "WAWebNoop",
    "WAWebPonyfillsHeaders",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        UNSENT: 0,
        OPENED: 1,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        DONE: 4,
      });
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = {});
          try {
            return yield d(e, t);
          } catch (e) {
            var n = r("getErrorSafe")(e);
            throw n.name === o("WAAbortError").ABORT_ERROR
              ? new (o("WAAbortError").AbortError)()
              : n instanceof o("WAWebHttpErrors").HttpNetworkError
                ? n
                : new (o("WAWebHttpErrors").HttpNetworkError)(n.message);
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(t, a) {
      return (
        a === void 0 && (a = {}),
        new (e || (e = n("Promise")))(function (i, l) {
          var u;
          if ((u = a.signal) != null && u.aborted) {
            l(new DOMException("The operation was aborted.", "AbortError"));
            return;
          }
          var c = new XMLHttpRequest();
          if (a.signal) {
            var d = a.signal;
            d.addEventListener("abort", function e() {
              (d.removeEventListener("abort", e),
                (c.onreadystatechange = r("WAWebNoop")),
                c.abort(),
                l(
                  new DOMException("The operation was aborted.", "AbortError"),
                ));
            });
          }
          var m = a,
            p = m.onData,
            _ = m.onProgress;
          if (_ != null || p) {
            var f;
            (((f = a.method) == null ? void 0 : f.toLowerCase()) === "post" &&
            c.upload != null
              ? c.upload
              : c
            ).onprogress = function (e) {
              (p && p(e, c.responseText), _ && _(e));
            };
          }
          var g = a,
            h = g.onHeadersReceived;
          ((c.onreadystatechange = function () {
            if (c.readyState === s.UNSENT) {
              l(r("err")("fetch error: not sent"));
              return;
            } else if (c.readyState === s.HEADERS_RECEIVED && h != null) {
              h(
                new (r("WAWebPonyfillsHeaders"))(
                  r("WAWebHttpParseHeaders")(c.getAllResponseHeaders()),
                ),
              );
              return;
            } else if (c.readyState === s.DONE) {
              if (c.status == null) {
                l(r("err")("fetch error: no status"));
                return;
              }
              if (c.status === 0 || c.status >= 12e3) {
                l(r("err")("fetch error: unexpected status " + c.status));
                return;
              }
              i(R());
            }
          }),
            (c.onerror = function () {
              return l(r("err")("fetch error: error"));
            }),
            (c.ontimeout = function () {
              l(
                new (o("WAWebHttpErrors").HttpTimedOutError)(
                  "fetch error: timedout",
                ),
              );
            }),
            (c.withCredentials = a.credentials === "include"),
            a.timeout != null && (c.timeout = a.timeout));
          var y = a.method;
          c.open(y != null && y !== "" ? y : "get", t.toString(), !0);
          var C = new (r("WAWebPonyfillsHeaders"))(a.headers || {});
          for (var b of C.keys()) {
            var v = C.get(b);
            v != null && c.setRequestHeader(b, v);
          }
          p
            ? c.overrideMimeType("text/plain; charset=x-user-defined")
            : (c.responseType = "arraybuffer");
          var S = a.body;
          c.send(S != null && S !== "" ? S : null);
          function R() {
            var t = new (r("WAWebPonyfillsHeaders"))(
              r("WAWebHttpParseHeaders")(c.getAllResponseHeaders()),
            );
            return babelHelpers.extends(
              {
                ok: 200 <= c.status && c.status < 300,
                statusText: c.statusText,
                status: c.status,
                url: c.responseURL,
              },
              L(),
              {
                blob: function () {
                  return (e || (e = n("Promise"))).resolve(
                    new Blob([c.response], {
                      type: t.get("content-type") || "",
                    }),
                  );
                },
                clone: R,
                headers: t,
              },
            );
          }
          function L() {
            return p
              ? {
                  text: function () {
                    return (e || (e = n("Promise"))).resolve(c.responseText);
                  },
                  json: function () {
                    return (e || (e = n("Promise"))).resolve(
                      JSON.parse(c.responseText),
                    );
                  },
                  arrayBuffer: function () {
                    return o("WAArrayBufferUtils").largeStringToArrayBuffer(
                      c.responseText,
                    );
                  },
                }
              : {
                  text: function () {
                    return E();
                  },
                  json: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        var e = yield E();
                        return JSON.parse(e);
                      },
                    );
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                  arrayBuffer: function () {
                    return c.response;
                  },
                };
          }
          function E() {
            return (e || (e = n("Promise"))).resolve(
              String.fromCharCode.apply(
                String,
                Array.from(new Uint8Array(c.response)),
              ),
            );
          }
        })
      );
    }
    ((l.extendedFetch = u), (l.sharedFetch = d));
  },
  98,
);
