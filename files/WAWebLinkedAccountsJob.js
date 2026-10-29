__d(
  "WAWebLinkedAccountsJob",
  ["WAPromiseRetryLoop", "WAWebLinkedAccountsGQL", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 250,
      u = 1e3,
      c = function () {
        var t = e,
          r = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                try {
                  var n = yield o(
                    "WAWebLinkedAccountsGQL",
                  ).queryLinkedAccountsGQL();
                  e(n);
                } catch (e) {}
                --t === 0 && e(null);
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          a = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
            name: "queryLinkedAccounts",
            timer: { algo: { type: "exponential", first: s }, max: u },
            code: r,
          });
        return (a.start(), a.promise());
      };
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield c();
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
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n = yield c();
          if (!n)
            return {
              fbPageId: null,
              waPageId: null,
              fbPageHasCreatedAd: !1,
              waAdsIdentityPageHasCreatedAd: !1,
            };
          var r = n.accounts.find(function (e) {
              return e.type === "whatsapp";
            }),
            o = n.accounts.find(function (e) {
              return e.type === "facebook";
            });
          return {
            fbPageId: o == null ? void 0 : o.id,
            waPageId: r == null ? void 0 : r.id,
            fbPageHasCreatedAd:
              (e = o == null ? void 0 : o.hasCreatedAd) != null ? e : !1,
            waAdsIdentityPageHasCreatedAd:
              (t = r == null ? void 0 : r.hasCreatedAd) != null ? t : !1,
          };
        })),
        _.apply(this, arguments)
      );
    }
    ((l.queryActiveLinkedAccountInfo = d), (l.queryLinkedPagesInfo = p));
  },
  98,
);
