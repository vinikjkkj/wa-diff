__d(
  "WAWebBizAdsLocaleTag",
  ["WAWebL10nGetRenderedLocale"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([["es_LA", "es-419"]]);
    function s() {
      var t,
        n = o("WAWebL10nGetRenderedLocale")
          .WAWebL10nGetRenderedLocale()
          .valueOf();
      return (t = e.get(n)) != null ? t : n.replace(/_/g, "-");
    }
    l.getWAWebBizAdsLocaleTag = s;
  },
  98,
);
