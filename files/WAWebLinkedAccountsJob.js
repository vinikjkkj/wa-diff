__d(
  "WAWebLinkedAccountsJob",
  [
    "WAPromiseRetryLoop",
    "WASmaxBizLinkingGetLinkedAccountsRPC",
    "WAWebLinkedAccountsGQL",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 250,
      u = 1e3,
      c = function (n) {
        var t = e,
          a = async function (a) {
            if (r("gkx")("20595"))
              try {
                var e = await o(
                  "WAWebLinkedAccountsGQL",
                ).queryLinkedAccountsGQL();
                a(e);
              } catch (e) {}
            else {
              var i = await o(
                  "WASmaxBizLinkingGetLinkedAccountsRPC",
                ).sendGetLinkedAccountsRPC({}, n ? { signal: n } : void 0),
                l = [];
              e: {
                if (i.name === "GetLinkedAccountsResponseForbidden") {
                  a(null);
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
                        (d = i.value.linkedAccountsWhatsappAdIdentity) == null
                          ? void 0
                          : d.id,
                      hasActiveLinkedAd:
                        ((m = i.value.linkedAccountsWhatsappAdIdentity) == null
                          ? void 0
                          : m.adStatusHasActiveCtwaAd) === "true",
                      hasCreatedAd:
                        ((p = i.value.linkedAccountsWhatsappAdIdentity) == null
                          ? void 0
                          : p.adStatusHasCreatedAd) === "true",
                    });
                  }
                  a({ accounts: l });
                  return;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    i.name,
                );
              }
            }
            --t === 0 && a(null);
          },
          i = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
            name: "queryLinkedAccounts",
            timer: { algo: { type: "exponential", first: s }, max: u },
            code: a,
          });
        return (i.start(), i.promise());
      },
      d = async function (t) {
        var e = await c(t);
        if (!e) return null;
        if (e.accounts.length === 0) return "not-linked";
        var n = e.accounts.find(function (e) {
            return e.type === "whatsapp";
          }),
          r = e.accounts.find(function (e) {
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
      };
    async function m() {
      var e,
        t,
        n = await c();
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
    }
    ((l.queryActiveLinkedAccountInfo = d), (l.queryLinkedPagesInfo = m));
  },
  98,
);
