__d(
  "WAWebLanguageDropdownUtils",
  ["WALogger", "WAWebL10N", "WAWebLocaleToLanguages"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c() {
      try {
        return await o("WAWebLocaleToLanguages").getLanguageNames();
      } catch (t) {
        throw (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[l10n] WAWebLanguageDropdownUtils: lang index load failed",
              ])),
          ),
          t
        );
      }
    }
    async function d() {
      try {
        return await o("WAWebLocaleToLanguages").getLanguageNames(
          r("WAWebL10N").getLocale(),
        );
      } catch (e) {
        throw (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[l10n] WAWebLanguageDropdownUtils: Failed to load languages",
              ])),
          ),
          e
        );
      }
    }
    async function m() {
      var e = await c(),
        t = await d(),
        n = [];
      return (
        t.forEach(function (t, r) {
          var o = e.get(r);
          o != null &&
            n.push({
              languageNameInOriginalLocale: o,
              languageNameTranslatedToUserLocale: t,
              locale: r,
            });
        }),
        n.length === 0 &&
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[l10n] WAWebLanguageDropdownUtils: no languages found",
              ])),
          ),
        n.sort(function (e, t) {
          return e.languageNameTranslatedToUserLocale.localeCompare(
            t.languageNameTranslatedToUserLocale,
          );
        }),
        n
      );
    }
    l.getLanguageDropdownItems = m;
  },
  98,
);
