__d(
  "AdsPageStoreSource",
  [
    "AdsAccountStore",
    "AdsPageStoreSourceFragment.graphql",
    "AdsPageStoreSourceLoadedQuery.graphql",
    "AdsPageStoreSourceServerQuery",
    "FBLogger",
    "RelayHooks",
    "ReverseInteropStoreSourceBase",
    "justknobx",
    "promiseDone",
    "readClientFragment",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e !== void 0 ? e : (e = n("AdsPageStoreSourceLoadedQuery.graphql")),
      c = s !== void 0 ? s : (s = n("AdsPageStoreSourceFragment.graphql")),
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return u;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__fetchQuery = function (t, n, a) {
            var e = this;
            (a === void 0 && (a = !1),
              t.forEach(function (e) {
                m(e);
              }));
            var i = t.map(function (e) {
                return e == null ? void 0 : e.toString();
              }),
              l = "loaded_pages",
              s = "Page";
            this.updateRecords(i, l, s);
            var u = { ids: i };
            r("justknobx")._("4032") &&
              (u = {
                ad_account_id: r("AdsAccountStore").getSelectedAccountID(),
                ids: i,
              });
            var c = o("RelayHooks")
              .fetchQuery(
                this.__environment,
                r("AdsPageStoreSourceServerQuery"),
                u,
                { fetchPolicy: a ? "network-only" : "store-or-network" },
              )
              .toPromise()
              .catch(function (r) {
                return e.handleFetchQueryError(t, n, r);
              });
            r("promiseDone")(c);
          }),
          (n.__updateRelayCacheRecords = function (t) {
            var e = "loaded_pages",
              n = "Page";
            o("relay-runtime").commitLocalUpdate(
              this.__environment,
              function (r) {
                var o,
                  a = (o = r.getRoot().getLinkedRecords(e)) != null ? o : [];
                (Object.entries(t).forEach(function (e) {
                  var t = e[0],
                    o = e[1];
                  m(t);
                  var a = r.get(t == null ? void 0 : t.toString());
                  (a == null ? void 0 : a.getType()) === n &&
                    Object.entries(o).forEach(function (e) {
                      var t = e[0],
                        n = e[1];
                      a == null || a.setValue(n, t);
                    });
                }),
                  r.getRoot().setLinkedRecords(a, e));
              },
            );
          }),
          (n.updateLeadGenValueAccepted = function (t) {
            var e = t == null ? void 0 : t.toString(),
              n = "lead_gen_tos",
              r = "XFBLeadGenTOS";
            o("relay-runtime").commitLocalUpdate(
              this.__environment,
              function (t) {
                var o,
                  a,
                  i =
                    (o = t.get(e)) == null
                      ? void 0
                      : o.getOrCreateLinkedRecord("client:" + e + ":" + n, r);
                i != null &&
                  (i.setValue(null, "user"),
                  (a = t.get(e)) == null || a.setLinkedRecord(i, n));
              },
            );
          }),
          (n.updateRelayWhatsappRecords = function (t, n) {
            m(t);
            var e = "whatsapp_numbers_info",
              r = "XFBCTWAWhatsAppNumbersInfo",
              a = t == null ? void 0 : t.toString();
            (o("relay-runtime").commitLocalUpdate(
              this.__environment,
              function (t) {
                var o,
                  i,
                  l,
                  s =
                    (o =
                      (i = t.get(a)) == null
                        ? void 0
                        : i.getLinkedRecords(e)) != null
                      ? o
                      : [],
                  u = t
                    .getRoot()
                    .getOrCreateLinkedRecord(
                      "client:" + a + ":" + e + ":" + s.length,
                      r,
                    );
                (Object.entries(n).map(function (e) {
                  var t = e[0],
                    n = e[1];
                  u == null || u.setValue(n, t);
                }),
                  s.push(u),
                  (l = t.get(a)) == null || l.setLinkedRecords(s, e));
              },
            ),
              this.__fetchQuery([a], [e], !0));
          }),
          (n.refetchPage = function (t) {
            this.__fetchQuery(t, [], !0);
          }),
          (n.__getCached = function (t, n) {
            var e = this;
            t.forEach(function (e) {
              m(e);
            });
            var o = t.map(function (e) {
                return e == null ? void 0 : e.toString();
              }),
              a = o.map(function (t) {
                return {
                  key: t,
                  value: r("readClientFragment")(
                    e.__environment,
                    r("AdsPageStoreSourceServerQuery"),
                    c,
                    { ids: [t] },
                    {},
                    t,
                    function (e) {
                      return e == null ? void 0 : e.basepage_spec;
                    },
                  ),
                };
              });
            return a;
          }),
          t
        );
      })(r("ReverseInteropStoreSourceBase"));
    function m(e) {
      (e === null || typeof e == "number" || e === "0" || e === "") &&
        r("FBLogger")("relay_ads_manager").warn(
          "Invalid page id value, got %s",
          e,
        );
    }
    l.default = d;
  },
  98,
);
