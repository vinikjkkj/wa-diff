__d(
  "WAWebL10NConstants",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        DEBUG: 99,
        SAVED: 6,
        PHONE: 5,
        PREVIOUS: 4,
        URL: 3,
        BROWSER: 2,
        DEFAULT: 1,
      },
      l = "en",
      s = "en-US",
      u = new Set(["ur"]),
      c = new Set([
        "af",
        "az",
        "ca",
        "cs",
        "da",
        "de",
        "el",
        "et",
        "fi",
        "fr",
        "he",
        "hr",
        "hu",
        "id",
        "it",
        "kk",
        "lt",
        "mk",
        "nb",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sk",
        "sl",
        "sr",
        "sv",
        "th",
        "tr",
        "uk",
      ]),
      d = {
        "zh-tw": {
          longDateFormat: {
            LT: "Ah:mm",
            LTS: "Ah:m:s",
            L: "YYYY\u5E74MMMD\u65E5",
            LL: "YYYY\u5E74MMMD\u65E5",
            LLL: "YYYY\u5E74MMMD\u65E5LT",
            LLLL: "YYYY\u5E74MMMD\u65E5ddddLT",
            l: "YYYY\u5E74MMMD\u65E5",
            ll: "YYYY\u5E74MMMD\u65E5",
            lll: "YYYY\u5E74MMMD\u65E5LT",
            llll: "YYYY\u5E74MMMD\u65E5ddddLT",
          },
        },
        "zh-cn": {
          longDateFormat: {
            LT: "Ah:mm",
            LTS: "Ah:m:s",
            L: "YYYY-MM-DD",
            LL: "YYYY\u5E74MMMD\u65E5",
            LLL: "YYYY\u5E74MMMD\u65E5LT",
            LLLL: "YYYY\u5E74MMMD\u65E5ddddLT",
            l: "YYYY\u5E74MMMD\u65E5",
            ll: "YYYY\u5E74MMMD\u65E5",
            lll: "YYYY\u5E74MMMD\u65E5LT",
            llll: "YYYY\u5E74MMMD\u65E5ddddLT",
          },
        },
        ar: {
          longDateFormat: {
            LT: "h:mm A",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT",
          },
        },
        ta: {
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY, h:mm A",
          },
          preparse: null,
          postformat: null,
          meridiem: null,
          meridiemHour: null,
        },
        nl: { longDateFormat: { l: "DD-MM-YYYY", L: "DD-MM-YYYY" } },
        "en-ie": { longDateFormat: { l: "DD/MM/YYYY", L: "DD/MM/YYYY" } },
        hi: {
          preparse: function (t) {
            return t;
          },
          postformat: function (t) {
            return t;
          },
          longDateFormat: {
            LT: "A h:mm \u092C\u091C\u0947",
            LTS: "A h:mm:ss \u092C\u091C\u0947",
            LLL: "D MMMM YYYY A h:mm \u092C\u091C\u0947",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u092C\u091C\u0947",
          },
          meridiem: function (t, n, r) {
            return t === 0 && n === 0
              ? "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F"
              : t >= 20 || t < 4
                ? "\u0930\u093E\u0924"
                : t >= 4 && t < 12
                  ? "\u0938\u0941\u092C\u0939"
                  : t >= 12 && t < 16
                    ? "\u0926\u094B\u092A\u0939\u0930"
                    : "\u0936\u093E\u092E";
          },
        },
      },
      m = {
        "pt-pt": {
          weekdays: [
            "Domingo",
            "Segunda-feira",
            "Ter\xE7a-feira",
            "Quarta-feira",
            "Quinta-feira",
            "Sexta-feira",
            "S\xE1bado",
          ],
        },
      },
      p = babelHelpers.extends({}, d, m);
    ((i.L10N_PRIORITY = e),
      (i.DEFAULT_LOCALE = l),
      (i.DEFAULT_MOMENT_LOCALE = s),
      (i.SHOULD_USE_MOMENT_LOCALE_FORMAT = u),
      (i.LOCALES_THAT_PREFER_24HOUR_TIME = c),
      (i.LOCALE_DATE_TIME_CUSTOMIZATIONS = d),
      (i.LOCALE_CUSTOMIZATIONS = p));
  },
  66,
);
