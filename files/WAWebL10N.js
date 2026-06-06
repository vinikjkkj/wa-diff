__d(
  "WAWebL10N",
  [
    "WALogger",
    "WAWeb-moment",
    "WAWebBaseL10N",
    "WAWebDebounce",
    "WAWebEventsWaitForMainStreamReadyMd",
    "WAWebL10NCoerceToFBLocale",
    "WAWebL10NConstants",
    "WAWebL10NCookieUtils",
    "WAWebL10NHelpers",
    "WAWebL10nGetRenderedLocale",
    "WAWebLocaleToMomentResource",
    "WAWebMomentLocales",
    "WAWebUserPrefsLocales",
    "bcp-47",
    "gkx",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R = 5e3,
      L = o("WAWebL10NCoerceToFBLocale").DEFAULT_WA_WEB_LOCALE.replaceAll(
        "_",
        "-",
      ),
      E = (function (t) {
        function n() {
          var n;
          ((n = t.call(this, { l: "en", loc: "en" }) || this),
            (n.$L10n$p_4 = null),
            (n.setLocale = async function (t, r, a) {
              if (
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[l10n] setLocale called with locale ",
                      ", priority ",
                      ", reload ",
                      "",
                    ])),
                  t,
                  r,
                  a,
                ),
                t != null)
              ) {
                var i, l;
                ((i = a != null ? a : !1),
                  (l =
                    r != null
                      ? r
                      : o("WAWebL10NConstants").L10N_PRIORITY.PHONE));
                var _ = o("WAWebL10NHelpers").isLocalLanguageOverrideEnabled(),
                  f = _ && l >= o("WAWebL10NConstants").L10N_PRIORITY.SAVED,
                  g = n.normalizeLocaleToBcp47Compliant(t);
                if (
                  !(g == null || g === n.$L10n$p_2) &&
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[l10n] setLocale: before use user lang",
                      ])),
                  ),
                  f
                    ? o("WAWebUserPrefsLocales").setUserLangPref(t)
                    : o("WAWebUserPrefsLocales").setPhoneLangPref(t),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[l10n] setLocale: after use user lang",
                      ])),
                  ),
                  !(
                    _ &&
                    l === o("WAWebL10NConstants").L10N_PRIORITY.PHONE &&
                    o("WAWebUserPrefsLocales").getUserLangPref() != null
                  ))
                ) {
                  var h = n.$L10n$p_1;
                  n.$L10n$p_2 = g;
                  var y = o(
                    "WAWebL10NCoerceToFBLocale",
                  ).coerceWAWebL10nLocaleToFBLocale(g);
                  if (
                    (o("WAWebL10NCookieUtils").setWAWebLocalePrefCookieValue(y),
                    (n.$L10n$p_3 = g),
                    (n.$L10n$p_4 = y),
                    i === !0 &&
                      l === o("WAWebL10NConstants").L10N_PRIORITY.SAVED &&
                      o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[l10n] setLocale: user lang change ",
                            " -> ",
                            "",
                          ])),
                        h,
                        y,
                      ),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[l10n] setLocale: fullLocale:",
                          ", renderedLocale:",
                          ", newLocale:",
                          "",
                        ])),
                      g,
                      n.$L10n$p_1,
                      y,
                    ),
                    i !== !0)
                  )
                    n.trigger("locale_changed_on_phone", {
                      newLocale: y,
                      currentLocale: h,
                    });
                  else if (h === y)
                    (n.$L10n$p_9.cancel(),
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[l10n] setLocale: no lang change (",
                            "), skip reload",
                          ])),
                        h,
                      ),
                      await n.applyMomentLocale(g),
                      n.trigger("locale_change", { l: y, loc: g }));
                  else if (i === !0) {
                    if (
                      (o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[l10n] setLocale: lang change ",
                            " -> ",
                            ", reloading",
                          ])),
                        h,
                        y,
                      ),
                      (n.$L10n$p_1 = y),
                      l >= o("WAWebL10NConstants").L10N_PRIORITY.SAVED)
                    ) {
                      n.$L10n$p_10();
                      return;
                    }
                    n.$L10n$p_9();
                  }
                }
              }
            }),
            (n.$L10n$p_9 = r("WAWebDebounce")(async function () {
              return (
                await r("WAWebEventsWaitForMainStreamReadyMd")(),
                n.$L10n$p_10()
              );
            }, R)),
            (n.$L10n$p_1 = o(
              "WAWebL10nGetRenderedLocale",
            ).WAWebL10nGetRenderedLocale()),
            (n.$L10n$p_2 = n.$L10n$p_5(
              o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale(),
            )));
          var a = n.$L10n$p_6(),
            i = n.$L10n$p_7(),
            l = a != null ? a : i,
            f = a == null;
          if (l == null)
            return (
              o("WAWebUserPrefsLocales").setPhoneLangPref(n.$L10n$p_1),
              babelHelpers.assertThisInitialized(n)
            );
          var g = n.$L10n$p_5(l);
          if (((n.$L10n$p_3 = g), g == null))
            return (
              f
                ? o("WAWebUserPrefsLocales").setPhoneLangPref(n.$L10n$p_1)
                : o("WAWebUserPrefsLocales").setUserLangPref(n.$L10n$p_1),
              babelHelpers.assertThisInitialized(n)
            );
          var h = o(
            "WAWebL10NCoerceToFBLocale",
          ).coerceWAWebL10nLocaleToFBLocale(g);
          return (
            (n.$L10n$p_4 = h),
            h === n.$L10n$p_1 &&
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[l10n] using pref as full locale: ",
                    ", rendered: ",
                    "",
                  ])),
                l,
                n.$L10n$p_1,
              ),
              (n.$L10n$p_2 = g)),
            n.applyMomentLocale(g),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.init = function (t) {
            return (
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[l10n] init: with locale ",
                    "",
                  ])),
                t,
              ),
              this.setLocale(t, o("WAWebL10NConstants").L10N_PRIORITY.SAVED, !1)
            );
          }),
          (a.getLocale = function () {
            return this.$L10n$p_1;
          }),
          (a.getFullLocale = function () {
            return r("gkx")("26258")
              ? this.$L10n$p_2
              : o("WAWebL10NCoerceToFBLocale").isWAWebl10nDebugLocale(
                    this.$L10n$p_2,
                  )
                ? L
                : this.$L10n$p_2;
          }),
          (a.getNormalizedLocale = function () {
            var e;
            return (e = this.normalizeLocaleToWajsLocale(
              String(this.getLocale()),
            )) != null
              ? e
              : this.getLocale();
          }),
          (a.getLanguage = function () {
            return this.$L10n$p_8(this.getFullLocale());
          }),
          (a.$L10n$p_8 = function (t) {
            return o("bcp-47").parse(t).language;
          }),
          (a.getRegion = function () {
            var e,
              t,
              n =
                (e = o("bcp-47").parse(this.getFullLocale())) == null
                  ? void 0
                  : e.region;
            if (n != null) return n;
            var a = this.$L10n$p_1.replace(/_/g, "-");
            return r("nullthrows")(
              (t = o("bcp-47").parse(a)) == null ? void 0 : t.region,
            );
          }),
          (a.$L10n$p_6 = function () {
            return this.normalizeLocaleToBcp47Compliant(
              o("WAWebUserPrefsLocales").getUserLangPref(),
            );
          }),
          (a.$L10n$p_7 = function () {
            return this.normalizeLocaleToBcp47Compliant(
              o("WAWebUserPrefsLocales").getPhoneLangPref(),
            );
          }),
          (a.normalizeLocaleToBcp47Compliant = function (t) {
            if (t == null) return null;
            var e = this.$L10n$p_5(t);
            if (e !== t) {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    '[l10n] _cleanRawLocaleString: loc: "',
                    '", cleaned: "',
                    '"',
                  ])),
                t,
                e,
              );
              try {
                var n = new Intl.NumberFormat(e);
              } catch (t) {
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[l10n] _cleanRawLocaleString: ",
                      " incompatible, fallback: ",
                      "",
                    ])),
                  e,
                  o("WAWebL10NCoerceToFBLocale").DEFAULT_WA_WEB_LOCALE,
                ),
                  (e = o(
                    "WAWebL10NCoerceToFBLocale",
                  ).DEFAULT_WA_WEB_LOCALE.replaceAll("_", "-")));
              }
            }
            return e;
          }),
          (a.$L10n$p_5 = function (t) {
            return t.replace(/@.*/, "").replace(/_/g, "-");
          }),
          (a.$L10n$p_10 = function () {
            (o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload] reloadPageDueToLocaleChange",
                ])),
            ),
              self.setTimeout(function () {
                window.location.reload();
              }, 100));
          }),
          (a.applyMomentLocale = async function (t) {
            var e = t.toLocaleLowerCase("en"),
              n;
            if (
              e ===
              o("WAWebL10NConstants").DEFAULT_MOMENT_LOCALE.toLocaleLowerCase(
                "en",
              )
            )
              n = e;
            else {
              var a = [];
              if ((a.push(e), e.match(/en/i) == null)) {
                var i = e.replace(/_/g, "-");
                (a.push(i),
                  r("WAWebLocaleToMomentResource")[i] != null &&
                    a.push(r("WAWebLocaleToMomentResource")[i]));
              }
              (a.push(this.getLanguage()), a.push(L));
              for (var l = 0; l < a.length; ++l) {
                var s = await o("WAWebMomentLocales").downloadAndDefineLocale(
                  a[l],
                );
                if (s) {
                  n = a[l];
                  break;
                }
              }
            }
            (n == null &&
              (o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "Could not fetch moment locales, using default en-US",
                  ])),
              ),
              (n = o("WAWebL10NConstants").DEFAULT_MOMENT_LOCALE)),
              r("WAWeb-moment").locale(n),
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[l10n] moment locale updated to: ",
                    "",
                  ])),
                n,
              ),
              this.customizeMomentLocale(r("WAWeb-moment").locale()));
          }),
          (a.customizeMomentLocale = function (t) {
            var e = o("WAWebL10NConstants").LOCALE_CUSTOMIZATIONS[t];
            e && r("WAWeb-moment").updateLocale(t, e);
          }),
          (a.checkForLocaleMismatchBetweenCookieAndUserPref = function () {
            if (
              o("WAWebL10NCoerceToFBLocale").coerceWAWebL10nLocaleToFBLocale(
                this.$L10n$p_1,
              ) === this.$L10n$p_4
            ) {
              o(
                "WAWebUserPrefsLocales",
              ).setLangPrefCookieDidMismatchWithUserPref(!1);
              return;
            }
            o(
              "WAWebUserPrefsLocales",
            ).getLangPrefCookieDidMismatchWithUserPref()
              ? o("WALogger").WARN(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[l10n] locale mismatch: rendered=",
                      " pref=",
                      ", skip cookie",
                    ])),
                  this.$L10n$p_1,
                  this.$L10n$p_3,
                )
              : this.$L10n$p_4 &&
                (o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[l10n] locale mismatch, using pref: ",
                      ", cookie: ",
                      "",
                    ])),
                  this.$L10n$p_3,
                  this.$L10n$p_4,
                ),
                o("WAWebL10NCookieUtils").setWAWebLocalePrefCookieValue(
                  this.$L10n$p_4,
                ),
                o(
                  "WAWebUserPrefsLocales",
                ).setLangPrefCookieDidMismatchWithUserPref(!0),
                r("justknobx")._("2237") || this.$L10n$p_9());
          }),
          n
        );
      })(o("WAWebBaseL10N").WAWebBaseL10n),
      k = new E();
    l.default = k;
  },
  98,
);
