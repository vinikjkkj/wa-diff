__d(
  "BusinessURI.brands",
  ["BizSiteIdentifier.brands", "URI", "isFacebookURI", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (e) {
        function t(t, n, a) {
          var i;
          if (
            ((i = e.call(this, t) || this),
            o("BizSiteIdentifier.brands").isBizSite())
          ) {
            var l = r("isStringNullOrEmpty")(n)
                ? o("BizSiteIdentifier.brands").getBusinessID()
                : n,
              s = r("isStringNullOrEmpty")(a)
                ? o("BizSiteIdentifier.brands").getGlobalScopeID()
                : a;
            (r("isStringNullOrEmpty")(l) || i.addQueryData("business_id", l),
              r("isStringNullOrEmpty")(s) ||
                i.addQueryData("global_scope_id", s),
              i.$BusinessURI$p_1(i.getSubdomain()) ||
                i.setSubdomain("business"));
          }
          if (!r("isFacebookURI")(i)) {
            var u = new Error("Business URI must be FB URI");
            throw (u.stack, u);
          }
          return i;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.$BusinessURI$p_1 = function (t) {
            return t === "developers";
          }),
          t
        );
      })(e || (e = r("URI"))),
      u = function (t, n, r) {
        return new s(t, n, r);
      };
    u.BusinessURI = s;
    var c = u;
    l.default = c;
  },
  98,
);
