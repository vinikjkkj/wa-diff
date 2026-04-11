__d(
  "WAWebXHR",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebNoop",
    "WAWebURLUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = { GET: "GET", POST: "POST", HEAD: "HEAD", PUT: "PUT" },
      p = { ARRAY_BUFFER: "arraybuffer", BLOB: "blob", JSON: "json" };
    function _(e, t) {
      for (var n in t) e.setRequestHeader(n, t[n]);
    }
    function f(t, a, i, l, p, f, g) {
      var h = new XMLHttpRequest(),
        y = new (d || (d = n("Promise")))(function (n, l) {
          if (
            ((h.onload = function (t) {
              h.readyState === 4
                ? n(h)
                : (o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "xhr.request:onload",
                      ])),
                  ),
                  l(t));
            }),
            (h.onerror = function (e) {
              (o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "xhr.request:onerror",
                  ])),
              ),
                l(e));
            }),
            (h.ontimeout = function (e) {
              (o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "xhr.request:ontimeout",
                  ])),
              ),
                l(e));
            }),
            f && (h.onprogress = f),
            (h.onabort = function (e) {
              (o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "xhr.request:onabort",
                  ])),
              ),
                l(e));
            }),
            i instanceof FormData)
          )
            (h.open(a || m.POST, t, !0),
              p && (h.responseType = p),
              g && _(h, g),
              h.send(i));
          else if (i instanceof Object) {
            var d = r("WAWebURLUtils").build(t, i);
            (h.open(a || m.GET, d, !0),
              p && (h.responseType = p),
              g && _(h, g),
              h.send());
          } else
            (h.open(a || m.GET, t, !0),
              p && (h.responseType = p),
              g && _(h, g),
              h.send());
        }),
        C = r("WAPromiseRaceAbort")(y, l);
      return (
        C.catch(
          o("WAAbortError").catchAbort(function () {
            h.abort();
          }),
        ).catch(r("WAWebNoop")),
        C
      );
    }
    function g(e, t, n, r) {
      return (n === void 0 && (n = null), f(e, m.GET, null, r, t, void 0, n));
    }
    function h(e, t, n) {
      return f(e, m.POST, t, n);
    }
    function y(e, t) {
      return f(e, m.HEAD, null, t);
    }
    var C = { head: y, get: g, post: h, request: f, VERB: m, RESP_TYPE: p };
    l.default = C;
  },
  98,
);
