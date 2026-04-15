__d(
  "WAWebLinkedAccountsJob",
  [
    "WAPromiseRetryLoop",
    "WASmaxBizLinkingGetLinkedAccountsRPC",
    "WAWebLinkedAccountsGQL",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 250,
      u = 1e3,
      c = function (a) {
        var t = e,
          i = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (r("gkx")("20595"))
                  try {
                    var n = yield o(
                      "WAWebLinkedAccountsGQL",
                    ).queryLinkedAccountsGQL();
                    e(n);
                  } catch (e) {}
                else {
                  var i = yield o(
                      "WASmaxBizLinkingGetLinkedAccountsRPC",
                    ).sendGetLinkedAccountsRPC({}, a ? { signal: a } : void 0),
                    l = [];
                  e: {
                    if (i.name === "GetLinkedAccountsResponseForbidden") {
                      e(null);
                      return;
                    }
                    if (i.name === "GetLinkedAccountsResponseError") break e;
                    if (i.name === "GetLinkedAccountsResponseSuccess") {
                      if (i.value.linkedAccountsFbPage) {
                        var s, u, c;
                        l.push({
                          type: "facebook",
                          id:
                            (s = i.value.linkedAccountsFbPage) == null
                              ? void 0
                              : s.id,
                          hasActiveLinkedAd:
                            ((u = i.value.linkedAccountsFbPage) == null
                              ? void 0
                              : u.adStatusHasActiveCtwaAd) === "true",
                          hasCreatedAd:
                            ((c = i.value.linkedAccountsFbPage) == null
                              ? void 0
                              : c.adStatusHasCreatedAd) === "true",
                        });
                      }
                      if (i.value.linkedAccountsWhatsappAdIdentity) {
                        var d, m, p;
                        l.push({
                          type: "whatsapp",
                          id:
                            (d = i.value.linkedAccountsWhatsappAdIdentity) ==
                            null
                              ? void 0
                              : d.id,
                          hasActiveLinkedAd:
                            ((m = i.value.linkedAccountsWhatsappAdIdentity) ==
                            null
                              ? void 0
                              : m.adStatusHasActiveCtwaAd) === "true",
                          hasCreatedAd:
                            ((p = i.value.linkedAccountsWhatsappAdIdentity) ==
                            null
                              ? void 0
                              : p.adStatusHasCreatedAd) === "true",
                        });
                      }
                      e({ accounts: l });
                      return;
                    }
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        i.name,
                    );
                  }
                }
                --t === 0 && e(null);
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          l = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
            name: "queryLinkedAccounts",
            timer: { algo: { type: "exponential", first: s }, max: u },
            code: i,
          });
        return (l.start(), l.promise());
      },
      d = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield c(e);
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
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })();
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n = yield c();
          if (!n)
            return {
              fbPageId: null,
              waPageId: null,
              fbHasCreatedAd: !1,
              waaHasCreatedAd: !1,
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
            fbHasCreatedAd:
              (e = o == null ? void 0 : o.hasCreatedAd) != null ? e : !1,
            waaHasCreatedAd:
              (t = r == null ? void 0 : r.hasCreatedAd) != null ? t : !1,
          };
        })),
        p.apply(this, arguments)
      );
    }
    ((l.queryActiveLinkedAccountInfo = d), (l.queryLinkedPagesInfo = m));
  },
  98,
);
