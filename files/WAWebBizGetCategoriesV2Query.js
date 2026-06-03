__d(
  "WAWebBizGetCategoriesV2Query",
  [
    "WALogger",
    "WAWebBizGetCategoriesV2Query.graphql",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = e !== void 0 ? e : (e = n("WAWebBizGetCategoriesV2Query.graphql"));
    function d(e, t) {
      var n = t.filter(function (t) {
          return t.id !== e;
        }),
        r = t.filter(function (t) {
          return t.id === e;
        });
      return [].concat(n, r);
    }
    function m(e, t) {
      var n,
        r,
        o,
        a = (n = e.id) != null ? n : "",
        i = (r = e.categories) != null ? r : [],
        l = i
          .map(function (e) {
            return m(e, t);
          })
          .filter(function (e) {
            return e.id.length > 0;
          }),
        s = d(a, l),
        u = {
          id: a,
          localized_display_name: (o = e.display_name) != null ? o : "",
        };
      return (
        t.length > 0 && a === t && (u.not_a_biz = !0),
        s.length > 0 && (u.children = s),
        u
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, a;
          yield r("WAWebNetworkStatus").waitIfOffline();
          var i = yield o("WAWebRelayClient")
            .fetchQuery(c, {
              query_params: {
                query: e,
                locale: t,
                operation: "PROFILE_TYPEAHEAD",
                version: "V_2",
              },
            })
            .catch(function (e) {
              throw (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "getBusinessCategoriesV2: failed with error",
                    ])),
                ),
                e
              );
            });
          if (i == null)
            throw r("err")("getBusinessCategoriesV2: empty response");
          var l = i.whatsapp_catkit_typeahead_proxy,
            d = l == null ? void 0 : l.not_a_biz,
            p = (n = d == null ? void 0 : d.id) != null ? n : "",
            _ = (a = l == null ? void 0 : l.categories) != null ? a : [],
            f = _.map(function (e) {
              return m(e, p);
            }).filter(function (e) {
              return e.id.length > 0;
            });
          if (d != null && p.length > 0) {
            var g = f.some(function (e) {
              return e.id === p;
            });
            if (!g) {
              var h;
              f.push({
                id: p,
                localized_display_name: (h = d.display_name) != null ? h : "",
                not_a_biz: !0,
              });
            }
          }
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "getBusinessCategoriesV2: success, ",
                  " categories",
                ])),
              String(f.length),
            ),
            { categories: f, notABizId: p }
          );
        })),
        _.apply(this, arguments)
      );
    }
    l.getBusinessCategoriesV2 = p;
  },
  98,
);
