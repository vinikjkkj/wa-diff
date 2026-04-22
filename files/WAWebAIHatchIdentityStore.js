__d(
  "WAWebAIHatchIdentityStore",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBotGating",
    "WAWebLocalStorage",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = "hatch-identity",
      f = /^https:\/\/[a-z0-9.-]+\.whatsapp\.net\//,
      g = null,
      h = null,
      y = new Set(),
      C = null;
    function b(e) {
      C = e;
    }
    function v(e) {
      return (
        y.add(e),
        function () {
          y.delete(e);
        }
      );
    }
    function S(e) {
      y.forEach(function (t) {
        t(e);
      });
    }
    function R(t) {
      return t == null || t === ""
        ? null
        : f.test(t)
          ? t
          : (o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[AIHatchIdentityStore] invalid avatar URL, not whatsapp.net",
                ])),
            ),
            null);
    }
    function L(e) {
      try {
        r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").setItem(_, JSON.stringify(e));
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "AIHatchIdentityStore: localStorage persist failed",
              ])),
          )
          .sendLogs("hatch-identity-storage-persist-failed", {
            sampling: 0.01,
          });
      }
    }
    function E() {
      try {
        var e =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(_);
        if (e == null) return null;
        var t = JSON.parse(e);
        if (
          t != null &&
          typeof t.name == "string" &&
          typeof t.fetchedAt == "number"
        )
          return {
            name: t.name,
            avatarUrl: typeof t.avatarUrl == "string" ? R(t.avatarUrl) : null,
            fetchedAt: t.fetchedAt,
          };
      } catch (e) {}
      return null;
    }
    function k() {
      var e = g;
      return e == null
        ? !0
        : o("WATimeUtils").unixTime() - e.fetchedAt >=
            o("WATimeUtils").DAY_MILLISECONDS;
    }
    function I() {
      return {
        name: o("WAWebBotGating").getHatchBotName(),
        avatarUrl: o("WAWebBotGating").getHatchBotProfileThumb() || null,
        fetchedAt: o("WATimeUtils").unixTime(),
      };
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if (C == null)
            throw (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "AIHatchIdentityStore: no fetcher registered",
                    ])),
                )
                .sendLogs("hatch-identity-no-fetcher", { sampling: 0.01 }),
              r("err")("No fetcher registered")
            );
          var t = yield C(),
            n = R(t.avatarUrl);
          return {
            name: (e = t.name) != null ? e : "",
            avatarUrl: n,
            fetchedAt: o("WATimeUtils").unixTime(),
          };
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e !== !0 && !k() && g != null
            ? (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "AIHatchIdentityStore: cache hit",
                  ])),
              ),
              g)
            : (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "AIHatchIdentityStore: cache miss, fetching",
                  ])),
              ),
              h != null ||
                (h = T()
                  .then(function (e) {
                    return (
                      (g = e),
                      L(e),
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "AIHatchIdentityStore: fetch success",
                          ])),
                      ),
                      S(e),
                      e
                    );
                  })
                  .catch(function (e) {
                    var t;
                    o("WALogger")
                      .WARN(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "AIHatchIdentityStore: fetch failed, using ABProp fallback",
                          ])),
                      )
                      .sendLogs("hatch-identity-fetch-failed", {
                        sampling: 0.01,
                      });
                    var n = (t = g != null ? g : E()) != null ? t : I();
                    return ((g = n), n);
                  })
                  .finally(function () {
                    h = null;
                  })),
              h);
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return (g == null && (g = E()), g);
    }
    function N() {
      var e,
        t = P();
      return {
        name:
          (t == null ? void 0 : t.name) ||
          o("WAWebBotGating").getHatchBotName(),
        profileThumb:
          (e = t == null ? void 0 : t.avatarUrl) != null
            ? e
            : o("WAWebBotGating").getHatchBotProfileThumb() || "",
      };
    }
    function M() {
      ((g = null), (h = null), (y = new Set()), (C = null));
      try {
        r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(_);
      } catch (e) {}
    }
    ((l.registerIdentityFetcher = b),
      (l.subscribeToIdentityChanges = v),
      (l.validateAvatarUrl = R),
      (l.getHatchIdentity = x),
      (l.getCachedHatchIdentity = P),
      (l.getHatchInitialIdentity = N),
      (l.__resetCacheForTesting = M));
  },
  98,
);
