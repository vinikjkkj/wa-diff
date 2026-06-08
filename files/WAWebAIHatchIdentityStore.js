__d(
  "WAWebAIHatchIdentityStore",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebHatchGating",
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
    function R(t, n) {
      if (t == null || t === "") return null;
      if (!f.test(t)) {
        var r = n != null ? n : "avatar";
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[AIHatchIdentityStore] invalid ",
                " URL, not whatsapp.net",
              ])),
            r,
          ),
          null
        );
      }
      return t;
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
            videoVariants: I(t.videoVariants),
            fetchedAt: t.fetchedAt,
          };
      } catch (e) {}
      return null;
    }
    function k(e) {
      if (e == null) return null;
      var t = {},
        n = !1;
      for (var r of Object.keys(e)) {
        var o = R(e[r], "video variant");
        o != null && ((t[r] = o), (n = !0));
      }
      return n ? t : null;
    }
    function I(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = {};
      for (var r of Object.keys(t)) {
        var o = t[r];
        typeof o == "string" && (n[r] = o);
      }
      return k(n);
    }
    function T() {
      var e = g;
      return e == null
        ? !0
        : o("WATimeUtils").unixTime() - e.fetchedAt >=
            o("WATimeUtils").DAY_MILLISECONDS;
    }
    function D() {
      return {
        name: o("WAWebHatchGating").getHatchBotName(),
        avatarUrl: o("WAWebHatchGating").getHatchBotProfileThumb() || null,
        videoVariants: null,
        fetchedAt: o("WATimeUtils").unixTime(),
      };
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t;
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
          var n = yield C(),
            a = R(n.avatarUrl);
          return {
            name: (e = n.name) != null ? e : "",
            avatarUrl: a,
            videoVariants: k((t = n.videoVariants) != null ? t : null),
            fetchedAt: o("WATimeUtils").unixTime(),
          };
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e !== !0 && !T() && g != null
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
                (h = x()
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
                    var n = (t = g != null ? g : E()) != null ? t : D();
                    return ((g = n), n);
                  })
                  .finally(function () {
                    h = null;
                  })),
              h);
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return (g == null && (g = E()), g);
    }
    function w() {
      var e,
        t = M();
      return {
        name:
          (t == null ? void 0 : t.name) ||
          o("WAWebHatchGating").getHatchBotName(),
        profileThumb:
          (e = t == null ? void 0 : t.avatarUrl) != null
            ? e
            : o("WAWebHatchGating").getHatchBotProfileThumb() || "",
      };
    }
    function A() {
      ((g = null), (h = null), (y = new Set()), (C = null));
      try {
        r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(_);
      } catch (e) {}
    }
    ((l.registerIdentityFetcher = b),
      (l.subscribeToIdentityChanges = v),
      (l.validateWhatsAppNetUrl = R),
      (l.getHatchIdentity = P),
      (l.getCachedHatchIdentity = M),
      (l.getHatchInitialIdentity = w),
      (l.__resetCacheForTesting = A));
  },
  98,
);
