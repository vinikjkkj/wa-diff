__d(
  "WAWebAIHatchIdentityStore",
  ["WALogger", "WATimeUtils", "WAWebBotGating", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = /^https:\/\/[a-z0-9.-]+\.whatsapp\.net\//,
      _ = null,
      f = null,
      g = new Set(),
      h = null;
    function y(e) {
      h = e;
    }
    function C(e) {
      return (
        g.add(e),
        function () {
          g.delete(e);
        }
      );
    }
    function b(e) {
      g.forEach(function (t) {
        t(e);
      });
    }
    function v(t) {
      return t == null || t === ""
        ? null
        : p.test(t)
          ? t
          : (o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[AIHatchIdentityStore] invalid avatar URL, not whatsapp.net",
                ])),
            ),
            null);
    }
    function S() {
      var e = _;
      return e == null
        ? !0
        : o("WATimeUtils").unixTime() - e.fetchedAt >=
            o("WATimeUtils").DAY_MILLISECONDS;
    }
    function R() {
      return {
        name: o("WAWebBotGating").getHatchBotName(),
        avatarUrl: o("WAWebBotGating").getHatchBotProfileThumb() || null,
        fetchedAt: o("WATimeUtils").unixTime(),
      };
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if (h == null)
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "AIHatchIdentityStore: no fetcher registered, using fallback",
                  ])),
              ),
              R()
            );
          var t = yield h(),
            n = v(t.avatarUrl);
          return {
            name: (e = t.name) != null ? e : "",
            avatarUrl: n,
            fetchedAt: o("WATimeUtils").unixTime(),
          };
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e !== !0 && !S() && _ != null
            ? (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "AIHatchIdentityStore: cache hit",
                  ])),
              ),
              _)
            : (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "AIHatchIdentityStore: cache miss, fetching",
                  ])),
              ),
              f != null ||
                (f = L()
                  .then(function (e) {
                    return (
                      (_ = e),
                      o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "AIHatchIdentityStore: fetch success",
                          ])),
                      ),
                      b(e),
                      e
                    );
                  })
                  .catch(function (e) {
                    o("WALogger")
                      .WARN(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "AIHatchIdentityStore: fetch failed, using ABProp fallback",
                          ])),
                      )
                      .sendLogs("hatch-identity-fetch-failed", {
                        sampling: 0.01,
                      });
                    var t = _ != null ? _ : R();
                    return ((_ = t), t);
                  })
                  .finally(function () {
                    f = null;
                  })),
              f);
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return _;
    }
    function D() {
      ((_ = null), (f = null), (g = new Set()), (h = null));
    }
    ((l.registerIdentityFetcher = y),
      (l.subscribeToIdentityChanges = C),
      (l.validateAvatarUrl = v),
      (l.getHatchIdentity = k),
      (l.getCachedHatchIdentity = T),
      (l.__resetCacheForTesting = D));
  },
  98,
);
