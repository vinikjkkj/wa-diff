__d(
  "BizSiteIdentifier.brands",
  ["NullBusinessID", "URI", "isEmpty", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return (
        (e || (e = r("URI"))).getRequestURI(!1).getSubdomain() === "business"
      );
    }
    function c() {
      return (e || (e = r("URI"))).getRequestURI(!1).getQueryData().business_id;
    }
    function d() {
      return (e || (e = r("URI"))).getRequestURI(!1).getQueryData()
        .global_scope_id;
    }
    function m() {
      return (e || (e = r("URI"))).getRequestURI(!1).getQueryData().ad_account;
    }
    function p(t, n, o) {
      if ((s || (s = r("isEmpty")))(n) || n === r("NullBusinessID"))
        return new (e || (e = r("URI")))(t).setSubdomain("www");
      var a = r("nullthrows")(n),
        i =
          o == !0
            ? new (e || (e = r("URI")))(t)
            : new (e || (e = r("URI")))(t).setSubdomain("business");
      u() && i.setDomain((e || (e = r("URI"))).getRequestURI(!1).getDomain());
      var l = a || c();
      return (i.addQueryData("business_id", l), i);
    }
    ((l.isBizSite = u),
      (l.getBusinessID = c),
      (l.getGlobalScopeID = d),
      (l.getAdAccount = m),
      (l.createBusinessURL = p));
  },
  98,
);
