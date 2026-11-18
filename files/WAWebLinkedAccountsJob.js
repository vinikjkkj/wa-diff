__d(
  "WAWebLinkedAccountsJob",
  ["WAPromiseRetryLoop", "WAWebLinkedAccountsGQL", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 250,
      u = 1e3;
    function c(t) {
      var r = e,
        a = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              var n = yield t();
              e(n);
            } catch (e) {}
            --r === 0 && e(null);
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        i = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "queryLinkedAccounts",
          timer: { algo: { type: "exponential", first: s }, max: u },
          code: a,
        });
      return (i.start(), i.promise());
    }
    function d() {
      return c(o("WAWebLinkedAccountsGQL").queryLinkedAccountsResultGQL);
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield c(o("WAWebLinkedAccountsGQL").queryLinkedAccountsGQL);
          if (!t) return null;
          if (t.accounts.length === 0) return "not-linked";
          var n = t.accounts.find(function (e) {
              return e.type === "whatsapp";
            }),
            r = t.accounts.find(function (e) {
              return e.type === "facebook";
            });
          return n
            ? {
                id: n.id,
                hasCreatedAd: n.hasCreatedAd,
                hasFacebookPage: r != null,
                type: n.type,
              }
            : r
              ? {
                  id: r.id,
                  hasCreatedAd: r.hasCreatedAd,
                  hasFacebookPage: !0,
                  type: r.type,
                }
              : "not-linked";
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield c(o("WAWebLinkedAccountsGQL").queryLinkedAccountsGQL);
          return e
            ? g(e.accounts)
            : {
                fbPageId: null,
                waPageId: null,
                fbPageHasCreatedAd: !1,
                waAdsIdentityPageHasCreatedAd: !1,
              };
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t,
        n,
        r = e.find(function (e) {
          return e.type === "whatsapp";
        }),
        o = e.find(function (e) {
          return e.type === "facebook";
        });
      return {
        fbPageHasCreatedAd:
          (t = o == null ? void 0 : o.hasCreatedAd) != null ? t : !1,
        fbPageId: o == null ? void 0 : o.id,
        waAdsIdentityPageHasCreatedAd:
          (n = r == null ? void 0 : r.hasCreatedAd) != null ? n : !1,
        waPageId: r == null ? void 0 : r.id,
      };
    }
    ((l.queryLinkedAccountsResult = d),
      (l.queryActiveLinkedAccountInfo = m),
      (l.queryLinkedPagesInfo = _),
      (l.getLinkedPagesInfo = g));
  },
  98,
);
