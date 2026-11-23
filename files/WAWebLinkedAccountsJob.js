__d(
  "WAWebLinkedAccountsJob",
  ["WAPromiseRetryLoop", "WAWebLinkedAccountsGQL"],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 250,
      u = 1e3;
    function c(t) {
      var n = e,
        r = async function (r) {
          try {
            var e = await t();
            r(e);
          } catch (e) {}
          --n === 0 && r(null);
        },
        a = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "queryLinkedAccounts",
          timer: { algo: { type: "exponential", first: s }, max: u },
          code: r,
        });
      return (a.start(), a.promise());
    }
    function d() {
      return c(o("WAWebLinkedAccountsGQL").queryLinkedAccountsResultGQL);
    }
    async function m(e) {
      var t = await c(o("WAWebLinkedAccountsGQL").queryLinkedAccountsGQL);
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
    }
    async function p() {
      return _(await c(o("WAWebLinkedAccountsGQL").queryLinkedAccountsGQL));
    }
    function _(e) {
      return e == null
        ? {
            fbPageId: null,
            waPageId: null,
            fbPageHasCreatedAd: !1,
            waAdsIdentityPageHasCreatedAd: !1,
          }
        : f(e.accounts);
    }
    function f(e) {
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
      (l.queryLinkedPagesInfo = p),
      (l.toLinkedPagesInfo = _),
      (l.getLinkedPagesInfo = f));
  },
  98,
);
