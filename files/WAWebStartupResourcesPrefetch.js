__d(
  "WAWebStartupResourcesPrefetch",
  ["WALogger", "WAWebWindowsQueryParams", "err", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [].concat(o("WAWebWindowsQueryParams").WINDOWS_QUERY_PARAMS, [
        "locale",
      ]),
      c = 3,
      d = null;
    function m(e, t) {
      return (
        d == null &&
          (d = p(e, t).finally(function () {
            d = null;
          })),
        d
      );
    }
    async function p(t, n) {
      if (!navigator.onLine || b()) return null;
      try {
        var a = await _(t, n),
          i = a.noCorsUrls,
          l = a.rev,
          u = a.urls,
          c = await h(u, n);
        return (
          await Promise.all(
            i.map(function (e) {
              return C(e, n);
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
            l,
            u.length,
            c,
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
    }
    async function _(e, t) {
      var n = new URL("/static_resources.json", self.location.origin);
      e != null && n.searchParams.set("rev", String(e));
      var o = new URLSearchParams(self.location.search);
      for (var a of u) {
        var i = o.get(a);
        i != null && n.searchParams.set(a, i);
      }
      var l = await self.fetch(n.toString(), { cache: "no-store", signal: t });
      if (!l.ok) throw r("err")("startup resources: HTTP " + l.status);
      return f(await l.json());
    }
    function f(e) {
      if (e == null || typeof e != "object")
        throw r("err")("startup resources: not an object");
      var t = e.noCorsUrls,
        n = e.rev,
        o = e.urls;
      if (typeof n != "number")
        throw r("err")("startup resources: unexpected rev");
      return { rev: n, urls: g(o), noCorsUrls: g(t) };
    }
    function g(e) {
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
    async function h(e, t) {
      var n = 0,
        r = 0,
        o = !1,
        a = async function () {
          if (!(o || n >= e.length)) {
            var i = e[n++];
            try {
              r += await y(i, t);
            } catch (e) {
              throw ((o = !0), e);
            }
            await a();
          }
        },
        i = Math.min(c, e.length);
      return (await Promise.all(Array.from({ length: i }, a)), r);
    }
    async function y(e, t) {
      var n = await self.fetch(e, { mode: "cors", priority: "low", signal: t });
      if (!n.ok) throw r("err")(e + ": HTTP " + n.status);
      return (await n.arrayBuffer()).byteLength;
    }
    async function C(e, t) {
      await self.fetch(e, {
        mode: "no-cors",
        credentials: "include",
        priority: "low",
        signal: t,
      });
    }
    function b() {
      var e = Reflect.get(navigator, "connection");
      return typeof e == "object" && (e == null ? void 0 : e.saveData) === !0;
    }
    l.prefetchStartupResources = m;
  },
  98,
);
