__d(
  "WAWebDebugL10N",
  ["WAWebL10N", "WAWebL10NConstants", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (t === void 0 && (t = o("WAWebL10NConstants").L10N_PRIORITY.DEBUG),
            n === void 0 && (n = !0),
            yield r("WAWebL10N").setLocale(e, t, n));
        })),
        s.apply(this, arguments)
      );
    }
    e.doc =
      "Sets the locale for debug, saved, or phone priority. Defaults to debug priority.";
    function u(e) {
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
    ((u.doc = "Toggles between RTL (the ar-XB pseudolocale) and LTR (English)"),
      (u.paramsToExecute = []));
    var c = { debugSetLocale: e, toggleRTL: u, l10n: r("WAWebL10N") };
    l.default = c;
  },
  98,
);
