__d(
  "WAWebMusicGraphQLRequest",
  [
    "WALogger",
    "WAWebACSNetwork",
    "WAWebMobilePlatforms",
    "WAWebMusicOnChatsAcsProject",
    "WAWebOHAIClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new URL("https://acs.whatsapp.com/graphql"),
      c = 401,
      d = (656096963291760).toString(),
      m = (0x97e965c4439a).toString();
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebMusicOnChatsAcsProject").getMusicOnChatsAcsProject(
            t.project,
          );
          try {
            var r,
              a = yield f(t, n);
            return (
              ((r = a) == null ? void 0 : r.status) === c &&
                (yield o("WAWebACSNetwork").invalidateACSCredential(n),
                (a = yield f(t, n))),
              yield g(a)
            );
          } catch (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] graphql request failed",
                  ])),
              ),
              { ok: !1, error: { type: "network" } }
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      var n = e.docId,
        r = e.variables,
        a = e.viaOhai,
        i = new FormData();
      if (
        (i.append("app_id", o("WAWebMobilePlatforms").isSMB() ? d : m),
        i.append("doc_id", n),
        i.append("variables", JSON.stringify(r)),
        !a)
      )
        return o("WAWebACSNetwork").fetchWithACSCredential({
          url: u.toString(),
          project: t,
          data: i,
        });
      var l = new Headers();
      return (
        l.append("X-FB-Friendly-Name", n),
        o("WAWebOHAIClient").fetchOHAI({
          url: u,
          project: t,
          payload: i,
          headers: l,
        })
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null) return { ok: !1, error: { type: "network" } };
          if (!e.ok)
            return { ok: !1, error: { type: "http", status: e.status } };
          var t;
          try {
            t = yield e.json();
          } catch (e) {
            return { ok: !1, error: { type: "invalid_response" } };
          }
          var n = y(C(t, "errors")),
            r = C(t, "data");
          return r == null || typeof r != "object" || Array.isArray(r)
            ? {
                ok: !1,
                error:
                  n.length > 0
                    ? { type: "graphql", code: n[0].code }
                    : { type: "invalid_response" },
              }
            : (n.length > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[music] graphql data with ",
                      " errors, first code ",
                      "",
                    ])),
                  n.length,
                  String(n[0].code),
                ),
              { ok: !0, data: r, errors: n });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return (Array.isArray(e) ? e : []).map(function (e) {
        var t = C(e, "code");
        return { code: typeof t == "number" ? t : null };
      });
    }
    function C(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : void 0;
    }
    l.fetchMusicGraphQL = p;
  },
  98,
);
