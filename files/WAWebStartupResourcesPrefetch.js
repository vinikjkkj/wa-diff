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
    function p(e) {
      return (
        m == null &&
          (m = _(e).finally(function () {
            m = null;
          })),
        m
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!navigator.onLine) return null;
          try {
            var a = yield g(t),
              i = a.noCorsUrls,
              l = a.rev,
              c = a.urls,
              d = yield b(c);
            return (
              yield (u || (u = n("Promise"))).all(i.map(L)),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[startup-resources-prefetch] rev ",
                    ": ",
                    " files (",
                    " bytes), ",
                    " without CORS",
                  ])),
                l,
                c.length,
                d,
                i.length,
              ),
              l
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new URL("/static_resources.json", self.location.origin);
          e != null && t.searchParams.set("rev", String(e));
          var n = new URLSearchParams(self.location.search);
          for (var o of c) {
            var a = n.get(o);
            a != null && t.searchParams.set(o, a);
          }
          var i = yield self.fetch(t.toString(), { cache: "no-store" });
          if (!i.ok) throw r("err")("startup resources: HTTP " + i.status);
          return y(yield i.json());
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
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = 0,
            r = 0,
            o = !1,
            a = (function () {
              var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  if (!(o || t >= e.length)) {
                    var n = e[t++];
                    try {
                      r += yield S(n);
                    } catch (e) {
                      throw ((o = !0), e);
                    }
                    yield a();
                  }
                },
              );
              return function () {
                return i.apply(this, arguments);
              };
            })(),
            i = Math.min(d, e.length);
          return (
            yield (u || (u = n("Promise"))).all(Array.from({ length: i }, a)),
            r
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.fetch(e, { mode: "cors", priority: "low" });
          if (!t.ok) throw r("err")(e + ": HTTP " + t.status);
          return (yield t.arrayBuffer()).byteLength;
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield self.fetch(e, {
            mode: "no-cors",
            credentials: "include",
            priority: "low",
          });
        })),
        E.apply(this, arguments)
      );
    }
    l.prefetchStartupResources = p;
  },
  98,
);
