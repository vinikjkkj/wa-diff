__d(
  "WAWebBizCustomUrlGetUserGraphql",
  [
    "WAWebBizCustomUrlGetUserGraphqlQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return o("WAWebRelayClient")
            .fetchQuery(
              e !== void 0
                ? e
                : (e = n("WAWebBizCustomUrlGetUserGraphqlQuery.graphql")),
              { data: { custom_url: { path: t } } },
            )
            .then(u)
            .catch(function (e) {
              if (
                e instanceof o("WAWebGraphQLServerError").GraphQLServerError
              ) {
                var t, n, r, a;
                return {
                  type: "graphql-error",
                  errorCode:
                    (t =
                      (n = e.source) == null ||
                      (n = n.errors) == null ||
                      (n = n[0]) == null
                        ? void 0
                        : n.code) != null
                      ? t
                      : 0,
                  errorText:
                    (r =
                      (a = e.source) == null ||
                      (a = a.errors) == null ||
                      (a = a[0]) == null
                        ? void 0
                        : a.message) != null
                      ? r
                      : "",
                };
              }
              return {
                type: "graphql-error",
                errorCode: 0,
                errorText: "unknown error",
              };
            });
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })();
    function u(e) {
      var t, n;
      if (
        (e == null || (t = e.xwa_custom_url_get_user) == null
          ? void 0
          : t.success) !== !0
      ) {
        var r,
          o,
          a =
            e == null || (r = e.xwa_custom_url_get_user) == null
              ? void 0
              : r.error_code,
          i =
            e == null || (o = e.xwa_custom_url_get_user) == null
              ? void 0
              : o.error_text;
        return {
          type: "error",
          errorCode: c(a),
          errorText: i != null ? i : "",
        };
      }
      return {
        type: "success",
        lid:
          e == null || (n = e.xwa_custom_url_get_user) == null ? void 0 : n.lid,
      };
    }
    function c(e) {
      return e === "CODE_404"
        ? 404
        : e === "CODE_400"
          ? 400
          : e === "CODE_403"
            ? 403
            : e === "CODE_500"
              ? 500
              : 0;
    }
    l.queryCustomUrlGetUser = s;
  },
  98,
);
