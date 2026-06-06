__d(
  "WAWebBizGetCategoriesQuery",
  [
    "WALogger",
    "WAWebBizGetCategoriesQuery.graphql",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = e !== void 0 ? e : (e = n("WAWebBizGetCategoriesQuery.graphql"));
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, a;
          yield r("WAWebNetworkStatus").waitIfOffline();
          var i = yield o("WAWebRelayClient")
            .fetchQuery(c, {
              query_params: {
                query: e,
                locale: t,
                operation: "PROFILE_TYPEAHEAD",
                version: "V_1",
              },
            })
            .catch(function (e) {
              throw (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "getBusinessCategories: failed with error",
                    ])),
                ),
                e
              );
            });
          if (i == null)
            throw r("err")("getBusinessCategories: empty response");
          var l = i.whatsapp_catkit_typeahead_proxy,
            d = l == null ? void 0 : l.not_a_biz,
            m = (n = d == null ? void 0 : d.id) != null ? n : "",
            p = (a = l == null ? void 0 : l.categories) != null ? a : [],
            _ = p.map(function (e) {
              var t,
                n,
                r = (t = e.id) != null ? t : "",
                o = {
                  id: r,
                  localized_display_name: (n = e.display_name) != null ? n : "",
                };
              return (m.length > 0 && r === m && (o.not_a_biz = !0), o);
            });
          if (d != null && m.length > 0) {
            var f = _.some(function (e) {
              return e.id === m;
            });
            if (!f) {
              var g;
              _.push({
                id: m,
                localized_display_name: (g = d.display_name) != null ? g : "",
                not_a_biz: !0,
              });
            }
          }
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "getBusinessCategories: success, ",
                  " categories",
                ])),
              String(_.length),
            ),
            { categories: _, notABizId: m }
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.getBusinessCategories = d;
  },
  98,
);
