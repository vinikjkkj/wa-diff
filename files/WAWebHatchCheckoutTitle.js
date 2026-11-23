__d(
  "WAWebHatchCheckoutTitle",
  [
    "fbt",
    "WAWebHatchAgentText.react",
    "WAWebHatchBotName.react",
    "WAWebHatchJsonReaders",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      var a,
        i =
          (a = o("WAWebHatchJsonReaders").trimToNull(e)) != null
            ? a
            : o("WAWebHatchJsonReaders").trimToNull(t);
      return i == null
        ? d(n)
        : s._(/*BTDS*/ "", [
            s._param(
              "headline",
              u.jsx(r("WAWebHatchAgentText.react"), { text: i }),
            ),
          ]);
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = u.jsx(r("WAWebHatchBotName.react"), {}),
        n = u.jsx("span", { className: "xfjzk2p", children: s._(/*BTDS*/ "") });
      if (e == null)
        return s._(/*BTDS*/ "", [s._param("name", t), s._param("action", n)]);
      var o = u.jsx("span", { className: "xfjzk2p", children: e });
      return s._(/*BTDS*/ "", [
        s._param("name", t),
        s._param("action", n),
        s._param("merchant", o),
      ]);
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
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
    ((l.hatchCheckoutHeadline = c),
      (l.hatchCheckoutTitle = d),
      (l.hatchBrowserCheckoutMerchant = m));
  },
  226,
);
