__d(
  "WAWebGraphQLServerError",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
        INVALID_ACCESS_TOKEN: 190,
        RATE_LIMIT_EXCEEDED: 1675004,
        CONTACT_MANAGER_SUBSCRIPTION_REQUIRED: 2494193,
        BUSINESS_BANHAMMERED: 2859017,
        AD_ACCOUNT_LINKING_DISABLED: 2859050,
      }),
      l = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this) || this),
            (n.name = "GraphQLServerError"),
            (n.source = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function s(t, n) {
      var r, o;
      return t instanceof l
        ? ((r = (o = t.source) == null ? void 0 : o.errors) != null
            ? r
            : []
          ).some(function (t) {
            var r = t.code;
            return e.cast(r) === n;
          })
        : !1;
    }
    function u(t) {
      return s(t, e.RATE_LIMIT_EXCEEDED);
    }
    function c(t) {
      return s(t, e.CONTACT_MANAGER_SUBSCRIPTION_REQUIRED);
    }
    function d(e) {
      var t,
        n,
        r = (t = (n = e.source) == null ? void 0 : n.errors) != null ? t : [];
      return r
        .map(function (e) {
          return (
            "code=" +
            e.code +
            (e.summary != null ? " summary=" + e.summary : "") +
            (e.description != null ? " description=" + e.description : "") +
            (e.message != null ? " message=" + e.message : "")
          );
        })
        .join("; ");
    }
    ((i.GraphQLErrorCode = e),
      (i.GraphQLServerError = l),
      (i.isRateLimitError = u),
      (i.isContactManagerSubscriptionRequiredError = c),
      (i.formatGraphQLServerError = d));
  },
  66,
);
