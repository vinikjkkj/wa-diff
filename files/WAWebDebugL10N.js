__d(
  "WAWebDebugL10N",
  ["WAWebL10N", "WAWebL10NConstants"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      (t === void 0 && (t = o("WAWebL10NConstants").L10N_PRIORITY.DEBUG),
        n === void 0 && (n = !0),
        await r("WAWebL10N").setLocale(e, t, n));
    }
    e.doc =
      "Sets the locale for debug, saved, or phone priority. Defaults to debug priority.";
    function s(e) {
      var t =
          r("WAWebL10N").getLocale() === "fb_AR" ||
          r("WAWebL10N").getLocale() === "ar-XB",
        n = e != null ? e : !t;
      n
        ? r("WAWebL10N").setLocale(
            "fb_AR",
            o("WAWebL10NConstants").L10N_PRIORITY.DEBUG,
            !0,
          )
        : r("WAWebL10N").setLocale(
            "en",
            o("WAWebL10NConstants").L10N_PRIORITY.DEBUG,
            !0,
          );
    }
    ((s.doc = "Toggles between RTL (the ar-XB pseudolocale) and LTR (English)"),
      (s.paramsToExecute = []));
    var u = { debugSetLocale: e, toggleRTL: s, l10n: r("WAWebL10N") };
    l.default = u;
  },
  98,
);
