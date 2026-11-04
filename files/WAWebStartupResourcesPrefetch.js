__d(
  "WAWebStartupResourcesPrefetch",
  [
    "Promise",
    "WALogger",
    "WAWebWindowsQueryParams",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = [].concat(o("WAWebWindowsQueryParams").WINDOWS_QUERY_PARAMS, [
        "locale",
      ]),
      d = 3,
      m = null;
    function p(e, t) {
      return (
        m == null &&
          (m = _(e, t).finally(function () {
            m = null;
          })),
        m
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (!navigator.onLine || k()) return null;
          try {
            var i = yield g(t, a),
              l = i.noCorsUrls,
              c = i.rev,
              d = i.urls,
              m = yield b(d, a);
            return (
              yield (u || (u = n("Promise"))).all(
                l.map(function (e) {
                  return L(e, a);
                }),
              ),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[startup-resources-prefetch] rev ",
                    ": ",
                    " files (",
                    " bytes), ",
                    " without CORS",
                  ])),
                c,
                d.length,
                m,
                l.length,
              ),
              c
            );
          } catch (e) {
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[startup-resources-prefetch] failed: ",
                    "",
                  ])),
                r("getErrorSafe")(e).message,
              ),
              null
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new URL("/static_resources.json", self.location.origin);
          e != null && n.searchParams.set("rev", String(e));
          var o = new URLSearchParams(self.location.search);
          for (var a of c) {
            var i = o.get(a);
            i != null && n.searchParams.set(a, i);
          }
          var l = yield self.fetch(n.toString(), {
            cache: "no-store",
            signal: t,
          });
          if (!l.ok) throw r("err")("startup resources: HTTP " + l.status);
          return y(yield l.json());
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      if (e == null || typeof e != "object")
        throw r("err")("startup resources: not an object");
      var t = e.noCorsUrls,
        n = e.rev,
        o = e.urls;
      if (typeof n != "number")
        throw r("err")("startup resources: unexpected rev");
      return { rev: n, urls: C(o), noCorsUrls: C(t) };
    }
    function C(e) {
      if (!Array.isArray(e))
        throw r("err")("startup resources: unexpected urls");
      var t = [];
      for (var n of e) {
        if (typeof n != "string")
          throw r("err")("startup resources: unexpected url");
        t.push(n);
      }
      return t;
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = 0,
            o = 0,
            a = !1,
            i = (function () {
              var l = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  if (!(a || r >= e.length)) {
                    var n = e[r++];
                    try {
                      o += yield S(n, t);
                    } catch (e) {
                      throw ((a = !0), e);
                    }
                    yield i();
                  }
                },
              );
              return function () {
                return l.apply(this, arguments);
              };
            })(),
            l = Math.min(d, e.length);
          return (
            yield (u || (u = n("Promise"))).all(Array.from({ length: l }, i)),
            o
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield self.fetch(e, {
            mode: "cors",
            priority: "low",
            signal: t,
          });
          if (!n.ok) throw r("err")(e + ": HTTP " + n.status);
          return (yield n.arrayBuffer()).byteLength;
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield self.fetch(e, {
            mode: "no-cors",
            credentials: "include",
            priority: "low",
            signal: t,
          });
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      var e = Reflect.get(navigator, "connection");
      return typeof e == "object" && (e == null ? void 0 : e.saveData) === !0;
    }
    l.prefetchStartupResources = p;
  },
  98,
);
