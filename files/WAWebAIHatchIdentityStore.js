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
      _,
      f,
      g = "hatch-identity",
      h = /^https:\/\/[a-z0-9.-]+\.whatsapp\.net\//,
      y = null,
      C = null,
      b = new Set(),
      v = null,
      S = 0;
    function R(e) {
      v = e;
    }
    function L(e) {
      return (
        b.add(e),
        function () {
          b.delete(e);
        }
      );
    }
    function E(e) {
      b.forEach(function (t) {
        t(e);
      });
    }
    function k(t, n) {
      if (t == null || t === "") return null;
      if (!h.test(t)) {
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
    function I(e) {
      try {
        r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").setItem(g, JSON.stringify(e));
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
    function T() {
      try {
        var e =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(g);
        if (e == null) return null;
        var t = JSON.parse(e);
        if (
          t != null &&
          typeof t.name == "string" &&
          typeof t.fetchedAt == "number"
        )
          return {
            name: t.name,
            avatarUrl: typeof t.avatarUrl == "string" ? k(t.avatarUrl) : null,
            videoVariants: x(t.videoVariants),
            fetchedAt: t.fetchedAt,
          };
      } catch (e) {}
      return null;
    }
    function D(e) {
      if (e == null) return null;
      var t = {},
        n = !1;
      for (var r of Object.keys(e)) {
        var o = k(e[r], "video variant");
        o != null && ((t[r] = o), (n = !0));
      }
      return n ? t : null;
    }
    function x(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = {};
      for (var r of Object.keys(t)) {
        var o = t[r];
        typeof o == "string" && (n[r] = o);
      }
      return D(n);
    }
    function $() {
      var e = y;
      return e == null
        ? !0
        : o("WATimeUtils").unixTime() - e.fetchedAt >=
            o("WATimeUtils").DAY_MILLISECONDS;
    }
    function P() {
      return {
        name: o("WAWebHatchGating").getHatchBotName(),
        avatarUrl: o("WAWebHatchGating").getHatchBotProfileThumb() || null,
        videoVariants: null,
        fetchedAt: o("WATimeUtils").unixTime(),
      };
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t;
          if (v == null)
            throw (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "AIHatchIdentityStore: no fetcher registered",
                    ])),
                )
                .sendLogs("hatch-identity-no-fetcher", { sampling: 0.01 }),
              r("err")("No fetcher registered")
            );
          var n = yield v(),
            a = k(n.avatarUrl);
          return {
            name: (e = n.name) != null ? e : "",
            avatarUrl: a,
            videoVariants: D((t = n.videoVariants) != null ? t : null),
            fetchedAt: o("WATimeUtils").unixTime(),
          };
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e !== !0 && !$() && y != null)
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "AIHatchIdentityStore: cache hit",
                  ])),
              ),
              y
            );
          if (
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "AIHatchIdentityStore: cache miss, fetching",
                ])),
            ),
            C != null)
          )
            return C;
          var t = S;
          return (
            (C = N()
              .then(function (e) {
                return S !== t
                  ? (o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "AIHatchIdentityStore: fetch superseded by push",
                        ])),
                    ),
                    y != null ? y : e)
                  : ((y = e),
                    I(e),
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "AIHatchIdentityStore: fetch success",
                        ])),
                    ),
                    E(e),
                    e);
              })
              .catch(function (e) {
                var t;
                o("WALogger")
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "AIHatchIdentityStore: fetch failed, using ABProp fallback",
                      ])),
                  )
                  .sendLogs("hatch-identity-fetch-failed", { sampling: 0.01 });
                var n = (t = y != null ? y : T()) != null ? t : P();
                return ((y = n), n);
              })
              .finally(function () {
                C = null;
              })),
            C
          );
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      var t,
        n,
        r = {
          name: (t = e.name) != null ? t : "",
          avatarUrl: k(e.avatarUrl),
          videoVariants: D((n = e.videoVariants) != null ? n : null),
          fetchedAt: o("WATimeUtils").unixTime(),
        };
      (S++,
        (y = r),
        I(r),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "AIHatchIdentityStore: identity applied from push",
            ])),
        ),
        E(r));
    }
    function O() {
      return (y == null && (y = T()), y);
    }
    function B() {
      var e,
        t = O();
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
    function W() {
      ((y = null), (C = null), (S = 0), (b = new Set()), (v = null));
      try {
        r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(g);
      } catch (e) {}
    }
    ((l.registerIdentityFetcher = R),
      (l.subscribeToIdentityChanges = L),
      (l.validateWhatsAppNetUrl = k),
      (l.getHatchIdentity = w),
      (l.applyHatchIdentity = F),
      (l.getCachedHatchIdentity = O),
      (l.getHatchInitialIdentity = B),
      (l.__resetCacheForTesting = W));
  },
  98,
);
