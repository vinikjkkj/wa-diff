__d(
  "WAWebHatchCheckoutTitle",
  ["fbt", "WAWebHatchBotName.react", "WAWebHatchJsonReaders", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = u.jsx(r("WAWebHatchBotName.react"), {}),
        n = u.jsx("span", {
          className: "xfjzk2p",
          children: s._(/*BTDS*/ "place an order"),
        });
      if (e == null)
        return s._(/*BTDS*/ "{name} wants to {action}", [
          s._param("name", t),
          s._param("action", n),
        ]);
      var o = u.jsx("span", { className: "xfjzk2p", children: e });
      return s._(/*BTDS*/ "{name} wants to {action} at {merchant}", [
        s._param("name", t),
        s._param("action", n),
        s._param("merchant", o),
      ]);
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = o("WAWebHatchJsonReaders").trimToNull(e.tabDomain);
      if (t != null) return t;
      var n = o("WAWebHatchJsonReaders").trimToNull(e.merchantUrl);
      if (n == null) return null;
      try {
        return o("WAWebHatchJsonReaders").trimToNull(new URL(n).hostname);
      } catch (e) {
        return null;
      }
    }
    ((l.hatchCheckoutTitle = c), (l.hatchBrowserCheckoutMerchant = d));
  },
  226,
);
