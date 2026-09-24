__d(
  "WAWebWamFalcoBatchLoggerLoader",
  [
    "Promise",
    "WAWebUserPrefsGeneral",
    "cr:11720",
    "cr:14159",
    "cr:14161",
    "cr:14162",
    "cr:14184",
    "cr:14187",
    "cr:14256",
    "cr:14258",
    "cr:15900",
    "cr:15906",
    "cr:15909",
    "cr:15911",
    "cr:15912",
    "cr:15913",
    "cr:15914",
    "cr:15915",
    "cr:15916",
    "cr:15919",
    "cr:15924",
    "cr:15925",
    "cr:15927",
    "cr:15930",
    "cr:15946",
    "cr:15954",
    "cr:15990",
    "cr:15993",
    "cr:15994",
    "cr:16006",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        3: (s = r("unsafeCast"))(n("cr:14159")),
        4: s(n("cr:14161")),
        5: s(n("cr:14162")),
        6: s(n("cr:14184")),
        7: s(n("cr:14187")),
        8: s(n("cr:14256")),
        9: s(n("cr:14258")),
        10: s(n("cr:15900")),
        11: s(n("cr:15906")),
        12: s(n("cr:15909")),
        13: s(n("cr:15911")),
        14: s(n("cr:15912")),
        15: s(n("cr:15913")),
        16: s(n("cr:15914")),
      },
      c = {
        3: s(n("cr:11720")),
        4: s(n("cr:15915")),
        5: s(n("cr:15916")),
        6: s(n("cr:15919")),
        7: s(n("cr:15924")),
        8: s(n("cr:15925")),
        9: s(n("cr:15927")),
        10: s(n("cr:15930")),
        11: s(n("cr:15946")),
        12: s(n("cr:15954")),
        13: s(n("cr:15990")),
        14: s(n("cr:15993")),
        15: s(n("cr:15994")),
        16: s(n("cr:16006")),
      };
    function d(e) {
      return o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb()
        ? u[e]
        : c[e];
    }
    function m(e) {
      return d(e) != null;
    }
    function p(e) {
      var t;
      return (t = d(e)) == null ? void 0 : t.getModuleIfRequired();
    }
    function _(t) {
      var r = d(t);
      return r == null ? (e || (e = n("Promise"))).resolve(null) : r.load();
    }
    ((l.hasWamFalcoBatchLogger = m),
      (l.getWamFalcoBatchLoggerIfLoaded = p),
      (l.loadWamFalcoBatchLogger = _));
  },
  98,
);
