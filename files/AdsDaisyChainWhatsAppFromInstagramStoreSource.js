__d(
  "AdsDaisyChainWhatsAppFromInstagramStoreSource",
  [
    "AdsDaisyChainWhatsAppFromInstagramStoreSourceFragment.graphql",
    "AdsDaisyChainWhatsAppFromInstagramStoreSourceServerLoadedQuery.graphql",
    "AdsDaisyChainWhatsAppFromInstagramStoreSourceServerQuery.graphql",
    "ReverseInteropStoreSourceBase",
    "amFetchPreloadedQuery",
    "promiseDone",
    "readClientFragment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n(
              "AdsDaisyChainWhatsAppFromInstagramStoreSourceServerQuery.graphql",
            )),
      d =
        s !== void 0
          ? s
          : (s = n(
              "AdsDaisyChainWhatsAppFromInstagramStoreSourceServerLoadedQuery.graphql",
            )),
      m =
        u !== void 0
          ? u
          : (u = n(
              "AdsDaisyChainWhatsAppFromInstagramStoreSourceFragment.graphql",
            )),
      p = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return d;
          }),
          (n.__getVariables = function () {
            return { passCountryCodeGK: !0 };
          }),
          (n.getGQLParams = function (t) {
            return { selectedPageID: t, passCountryCodeGK: !0 };
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              o = t[0],
              a = o.toString(),
              i = "loaded_pages",
              l = "Page";
            this.updateRecords([a], i, l);
            var s = this.getGQLParams(o),
              u = r("amFetchPreloadedQuery")(this.__environment, c, s, {
                fetchPolicy: "store-or-network",
              })
                .toPromise()
                .then(function (t) {
                  return {
                    page: e.$AdsDaisyChainWhatsAppFromInstagramStoreSource$p_1(
                      t == null ? void 0 : t.page,
                    ),
                  };
                })
                .catch(function (r) {
                  return e.handleFetchQueryError(t, n, r);
                });
            r("promiseDone")(u, function () {
              e.notifyDataChange();
            });
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = t,
                  o = e.getGQLParams(t);
                return {
                  key: t,
                  value: r("readClientFragment")(
                    e.__environment,
                    c,
                    m,
                    o,
                    { passCountryCodeGK: !0 },
                    n,
                    function (t) {
                      return e.$AdsDaisyChainWhatsAppFromInstagramStoreSource$p_1(
                        t,
                      );
                    },
                  ),
                };
              });
            return o;
          }),
          (n.$AdsDaisyChainWhatsAppFromInstagramStoreSource$p_1 = function (t) {
            var e, n, r, o, a, i, l;
            if (t == null)
              return {
                id: "",
                whatsAppNumber: "",
                whatsAppNumberFormatted: "",
              };
            var s =
              t == null ||
              (e = t.ctwa_business_account_daisy_chain_from_ig) == null ||
              (e = e.phone_number_status) == null
                ? void 0
                : e.formatted_phone_number;
            return {
              id:
                (n =
                  t == null ||
                  (r = t.ctwa_business_account_daisy_chain_from_ig) == null ||
                  (r = r.phone_number_status) == null
                    ? void 0
                    : r.id) != null
                  ? n
                  : "",
              whatsAppNumberFormatted: s != null ? s : "",
              whatsAppNumber:
                ((o =
                  t == null ||
                  (a = t.ctwa_business_account_daisy_chain_from_ig) == null ||
                  (a = a.phone_number_status) == null
                    ? void 0
                    : a.country_code) != null
                  ? o
                  : "") +
                ((i =
                  t == null ||
                  (l = t.ctwa_business_account_daisy_chain_from_ig) == null ||
                  (l = l.phone_number_status) == null
                    ? void 0
                    : l.national_phone_number) != null
                  ? i
                  : ""),
            };
          }),
          t
        );
      })(r("ReverseInteropStoreSourceBase"));
    l.default = p;
  },
  98,
);
