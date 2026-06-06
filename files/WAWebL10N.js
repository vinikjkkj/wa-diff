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
    "asyncToGeneratorRuntime",
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
        function a() {
          var a;
          ((a = t.call(this, { l: "en", loc: "en" }) || this),
            (a.$L10n$p_4 = null),
            (a.setLocale = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t, n, r) {
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
                      n,
                      r,
                    ),
                    t != null)
                  ) {
                    var i, l;
                    ((i = r != null ? r : !1),
                      (l =
                        n != null
                          ? n
                          : o("WAWebL10NConstants").L10N_PRIORITY.PHONE));
                    var _ =
                        o("WAWebL10NHelpers").isLocalLanguageOverrideEnabled(),
                      f = _ && l >= o("WAWebL10NConstants").L10N_PRIORITY.SAVED,
                      g = a.normalizeLocaleToBcp47Compliant(t);
                    if (
                      !(g == null || g === a.$L10n$p_2) &&
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
                      var h = a.$L10n$p_1;
                      a.$L10n$p_2 = g;
                      var y = o(
                        "WAWebL10NCoerceToFBLocale",
                      ).coerceWAWebL10nLocaleToFBLocale(g);
                      if (
                        (o(
                          "WAWebL10NCookieUtils",
                        ).setWAWebLocalePrefCookieValue(y),
                        (a.$L10n$p_3 = g),
                        (a.$L10n$p_4 = y),
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
                          a.$L10n$p_1,
                          y,
                        ),
                        i !== !0)
                      )
                        a.trigger("locale_changed_on_phone", {
                          newLocale: y,
                          currentLocale: h,
                        });
                      else if (h === y)
                        (a.$L10n$p_9.cancel(),
                          o("WALogger").LOG(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "[l10n] setLocale: no lang change (",
                                "), skip reload",
                              ])),
                            h,
                          ),
                          yield a.applyMomentLocale(g),
                          a.trigger("locale_change", { l: y, loc: g }));
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
                          (a.$L10n$p_1 = y),
                          l >= o("WAWebL10NConstants").L10N_PRIORITY.SAVED)
                        ) {
                          a.$L10n$p_10();
                          return;
                        }
                        a.$L10n$p_9();
                      }
                    }
                  }
                },
              );
              return function (e, n, r) {
                return t.apply(this, arguments);
              };
            })()),
            (a.$L10n$p_9 = r("WAWebDebounce")(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                return (
                  yield r("WAWebEventsWaitForMainStreamReadyMd")(),
                  a.$L10n$p_10()
                );
              }),
              R,
            )),
            (a.$L10n$p_1 = o(
              "WAWebL10nGetRenderedLocale",
            ).WAWebL10nGetRenderedLocale()),
            (a.$L10n$p_2 = a.$L10n$p_5(
              o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale(),
            )));
          var i = a.$L10n$p_6(),
            l = a.$L10n$p_7(),
            f = i != null ? i : l,
            g = i == null;
          if (f == null)
            return (
              o("WAWebUserPrefsLocales").setPhoneLangPref(a.$L10n$p_1),
              babelHelpers.assertThisInitialized(a)
            );
          var h = a.$L10n$p_5(f);
          if (((a.$L10n$p_3 = h), h == null))
            return (
              g
                ? o("WAWebUserPrefsLocales").setPhoneLangPref(a.$L10n$p_1)
                : o("WAWebUserPrefsLocales").setUserLangPref(a.$L10n$p_1),
              babelHelpers.assertThisInitialized(a)
            );
          var y = o(
            "WAWebL10NCoerceToFBLocale",
          ).coerceWAWebL10nLocaleToFBLocale(h);
          return (
            (a.$L10n$p_4 = y),
            y === a.$L10n$p_1 &&
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[l10n] using pref as full locale: ",
                    ", rendered: ",
                    "",
                  ])),
                f,
                a.$L10n$p_1,
              ),
              (a.$L10n$p_2 = h)),
            a.applyMomentLocale(h),
            a
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.init = function (t) {
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
          (i.getLocale = function () {
            return this.$L10n$p_1;
          }),
          (i.getFullLocale = function () {
            return r("gkx")("26258")
              ? this.$L10n$p_2
              : o("WAWebL10NCoerceToFBLocale").isWAWebl10nDebugLocale(
                    this.$L10n$p_2,
                  )
                ? L
                : this.$L10n$p_2;
          }),
          (i.getNormalizedLocale = function () {
            var e;
            return (e = this.normalizeLocaleToWajsLocale(
              String(this.getLocale()),
            )) != null
              ? e
              : this.getLocale();
          }),
          (i.getLanguage = function () {
            return this.$L10n$p_8(this.getFullLocale());
          }),
          (i.$L10n$p_8 = function (t) {
            return o("bcp-47").parse(t).language;
          }),
          (i.getRegion = function () {
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
          (i.$L10n$p_6 = function () {
            return this.normalizeLocaleToBcp47Compliant(
              o("WAWebUserPrefsLocales").getUserLangPref(),
            );
          }),
          (i.$L10n$p_7 = function () {
            return this.normalizeLocaleToBcp47Compliant(
              o("WAWebUserPrefsLocales").getPhoneLangPref(),
            );
          }),
          (i.normalizeLocaleToBcp47Compliant = function (t) {
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
          (i.$L10n$p_5 = function (t) {
            return t.replace(/@.*/, "").replace(/_/g, "-");
          }),
          (i.$L10n$p_10 = function () {
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
          (i.applyMomentLocale = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.toLocaleLowerCase("en"),
                  n;
                if (
                  t ===
                  o(
                    "WAWebL10NConstants",
                  ).DEFAULT_MOMENT_LOCALE.toLocaleLowerCase("en")
                )
                  n = t;
                else {
                  var a = [];
                  if ((a.push(t), t.match(/en/i) == null)) {
                    var i = t.replace(/_/g, "-");
                    (a.push(i),
                      r("WAWebLocaleToMomentResource")[i] != null &&
                        a.push(r("WAWebLocaleToMomentResource")[i]));
                  }
                  (a.push(this.getLanguage()), a.push(L));
                  for (var l = 0; l < a.length; ++l) {
                    var s = yield o(
                      "WAWebMomentLocales",
                    ).downloadAndDefineLocale(a[l]);
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
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.customizeMomentLocale = function (t) {
            var e = o("WAWebL10NConstants").LOCALE_CUSTOMIZATIONS[t];
            e && r("WAWeb-moment").updateLocale(t, e);
          }),
          (i.checkForLocaleMismatchBetweenCookieAndUserPref = function () {
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
          a
        );
      })(o("WAWebBaseL10N").WAWebBaseL10n),
      k = new E();
    l.default = k;
  },
  98,
);
