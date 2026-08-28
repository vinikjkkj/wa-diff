__d(
  "AdsAIVisibilityUtils",
  ["AdsInterfacesRouter", "URI", "isFacebookURI", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "adsai_actionability_adobj",
      u = "from_ads_ai";
    function c(e) {
      return (
        /^\d+$/.test(e) && Number(e) > 0 && Number(e) <= Math.pow(2, 63) - 1
      );
    }
    function d(e) {
      var t = e.getQueryData();
      return t[u] === "1";
    }
    function m(t) {
      var n,
        o = t,
        a = (e || (e = r("URI"))).tryParseURI(o);
      if (a == null || !r("isFacebookURI")(a)) return !1;
      a.setDomain("").setProtocol("");
      var i =
        (n = r("AdsInterfacesRouter").getOrNull()) == null
          ? void 0
          : n.getNavigatableByURI(a);
      if (i == null || !d(a)) return !1;
      var l = p(t);
      return l.length > 0;
    }
    function p(t) {
      var n = [],
        o = t,
        a = (e || (e = r("URI"))).tryParseURI(o);
      if (a != null && r("isFacebookURI")(a)) {
        var i,
          l = a.getQueryData(),
          u = (i = l[s]) != null ? i : "",
          d = u != null ? u.split(",") : [];
        d.length > 0 &&
          (n = d.filter(function (e) {
            return !r("isStringNullOrEmpty")(e) && c(e);
          }));
      }
      var m = Array.from(new Set(n));
      return m;
    }
    function _() {
      var t = new (e || (e = r("URI")))(window.location.href),
        n = e.tryParseURI(t),
        o = n == null ? void 0 : n.getQueryData();
      (t.removeQueryData(s),
        o && o[u] === "1" && t.removeQueryData(u),
        window.history.replaceState({}, "", t.toString()));
    }
    ((l.isURIFromAdsAI = d),
      (l.shouldShowViewChangesModalOnLoad = m),
      (l.getAdObjectsFromURI = p),
      (l.cleanAdsAIObjectsFromURI = _));
  },
  98,
);
