__d(
  "WAWebEmojiDownloadSuggestions",
  [
    "JSResource",
    "Promise",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebL10nGetRenderedLocale",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o("WAWebABPropsCache").waitForABPropConfigsReady();
            var t = new Set([
                "en_GB",
                o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale(),
              ]),
              r = yield (e || (e = n("Promise"))).all(Array.from(t, c));
            return r.filter(Boolean);
          } catch (e) {
            return [];
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(t) {
      return o("WAWebABProps").getABPropConfigValue("emoji_search_cldr")
        ? d(t)
        : t === "en_GB" ||
            t === "en_IN" ||
            t === "en_OP" ||
            t === "en_PI" ||
            t === "en_UD" ||
            t === "en_US" ||
            t === "en_XA"
          ? r("JSResource")("WAWebLocalesEmojiSuggestionEn")
              .__setRef("WAWebEmojiDownloadSuggestions")
              .load()
          : t === "pt_BR" || t === "pt_PT"
            ? r("JSResource")("WAWebLocalesEmojiSuggestionPt")
                .__setRef("WAWebEmojiDownloadSuggestions")
                .load()
            : t === "de_DE"
              ? r("JSResource")("WAWebLocalesEmojiSuggestionDe")
                  .__setRef("WAWebEmojiDownloadSuggestions")
                  .load()
              : t === "es_CL" ||
                  t === "es_CO" ||
                  t === "es_ES" ||
                  t === "es_LA" ||
                  t === "es_MX" ||
                  t === "es_VE"
                ? r("JSResource")("WAWebLocalesEmojiSuggestionEs")
                    .__setRef("WAWebEmojiDownloadSuggestions")
                    .load()
                : t === "it_IT"
                  ? r("JSResource")("WAWebLocalesEmojiSuggestionIt")
                      .__setRef("WAWebEmojiDownloadSuggestions")
                      .load()
                  : t === "ru_RU"
                    ? r("JSResource")("WAWebLocalesEmojiSuggestionRu")
                        .__setRef("WAWebEmojiDownloadSuggestions")
                        .load()
                    : t === "ar_AR"
                      ? r("JSResource")("WAWebLocalesEmojiSuggestionAr")
                          .__setRef("WAWebEmojiDownloadSuggestions")
                          .load()
                      : t === "tr_TR"
                        ? r("JSResource")("WAWebLocalesEmojiSuggestionTr")
                            .__setRef("WAWebEmojiDownloadSuggestions")
                            .load()
                        : t === "uk_UA"
                          ? r("JSResource")("WAWebLocalesEmojiSuggestionUk")
                              .__setRef("WAWebEmojiDownloadSuggestions")
                              .load()
                          : t === "bn_IN"
                            ? r("JSResource")("WAWebLocalesEmojiSuggestionBn")
                                .__setRef("WAWebEmojiDownloadSuggestions")
                                .load()
                            : t === "hi_IN" || t === "hi_FB"
                              ? r("JSResource")("WAWebLocalesEmojiSuggestionHi")
                                  .__setRef("WAWebEmojiDownloadSuggestions")
                                  .load()
                              : t === "hu_HU"
                                ? r("JSResource")(
                                    "WAWebLocalesEmojiSuggestionHu",
                                  )
                                    .__setRef("WAWebEmojiDownloadSuggestions")
                                    .load()
                                : t === "ms_MY"
                                  ? r("JSResource")(
                                      "WAWebLocalesEmojiSuggestionMs",
                                    )
                                      .__setRef("WAWebEmojiDownloadSuggestions")
                                      .load()
                                  : t === "pl_PL"
                                    ? r("JSResource")(
                                        "WAWebLocalesEmojiSuggestionPl",
                                      )
                                        .__setRef(
                                          "WAWebEmojiDownloadSuggestions",
                                        )
                                        .load()
                                    : t === "ro_RO"
                                      ? r("JSResource")(
                                          "WAWebLocalesEmojiSuggestionRo",
                                        )
                                          .__setRef(
                                            "WAWebEmojiDownloadSuggestions",
                                          )
                                          .load()
                                      : t === "th_TH"
                                        ? r("JSResource")(
                                            "WAWebLocalesEmojiSuggestionTh",
                                          )
                                            .__setRef(
                                              "WAWebEmojiDownloadSuggestions",
                                            )
                                            .load()
                                        : t === "ur_PK"
                                          ? r("JSResource")(
                                              "WAWebLocalesEmojiSuggestionUr",
                                            )
                                              .__setRef(
                                                "WAWebEmojiDownloadSuggestions",
                                              )
                                              .load()
                                          : t === "id_ID"
                                            ? r("JSResource")(
                                                "WAWebLocalesEmojiSuggestionId",
                                              )
                                                .__setRef(
                                                  "WAWebEmojiDownloadSuggestions",
                                                )
                                                .load()
                                            : t === "fa_IR"
                                              ? r("JSResource")(
                                                  "WAWebLocalesEmojiSuggestionFa",
                                                )
                                                  .__setRef(
                                                    "WAWebEmojiDownloadSuggestions",
                                                  )
                                                  .load()
                                              : t === "mr_IN"
                                                ? r("JSResource")(
                                                    "WAWebLocalesEmojiSuggestionMr",
                                                  )
                                                    .__setRef(
                                                      "WAWebEmojiDownloadSuggestions",
                                                    )
                                                    .load()
                                                : t === "gu_IN"
                                                  ? r("JSResource")(
                                                      "WAWebLocalesEmojiSuggestionGu",
                                                    )
                                                      .__setRef(
                                                        "WAWebEmojiDownloadSuggestions",
                                                      )
                                                      .load()
                                                  : t === "fr_FR" ||
                                                      t === "fr_CA"
                                                    ? r("JSResource")(
                                                        "WAWebLocalesEmojiSuggestionFr",
                                                      )
                                                        .__setRef(
                                                          "WAWebEmojiDownloadSuggestions",
                                                        )
                                                        .load()
                                                    : t === "zh_TW"
                                                      ? r("JSResource")(
                                                          "WAWebLocalesEmojiSuggestionZhTw",
                                                        )
                                                          .__setRef(
                                                            "WAWebEmojiDownloadSuggestions",
                                                          )
                                                          .load()
                                                      : t === "zh_CN"
                                                        ? r("JSResource")(
                                                            "WAWebLocalesEmojiSuggestionZhCn",
                                                          )
                                                            .__setRef(
                                                              "WAWebEmojiDownloadSuggestions",
                                                            )
                                                            .load()
                                                        : t === "zh_HK"
                                                          ? r("JSResource")(
                                                              "WAWebLocalesEmojiSuggestionZhHk",
                                                            )
                                                              .__setRef(
                                                                "WAWebEmojiDownloadSuggestions",
                                                              )
                                                              .load()
                                                          : t === "nl_NL" ||
                                                              t === "nl_BE"
                                                            ? r("JSResource")(
                                                                "WAWebLocalesEmojiSuggestionNl",
                                                              )
                                                                .__setRef(
                                                                  "WAWebEmojiDownloadSuggestions",
                                                                )
                                                                .load()
                                                            : t === "cs_CZ"
                                                              ? r("JSResource")(
                                                                  "WAWebLocalesEmojiSuggestionCs",
                                                                )
                                                                  .__setRef(
                                                                    "WAWebEmojiDownloadSuggestions",
                                                                  )
                                                                  .load()
                                                              : t === "sk_SK"
                                                                ? r(
                                                                    "JSResource",
                                                                  )(
                                                                    "WAWebLocalesEmojiSuggestionSk",
                                                                  )
                                                                    .__setRef(
                                                                      "WAWebEmojiDownloadSuggestions",
                                                                    )
                                                                    .load()
                                                                : (
                                                                    e ||
                                                                    (e =
                                                                      n(
                                                                        "Promise",
                                                                      ))
                                                                  ).resolve(
                                                                    null,
                                                                  );
    }
    function d(t) {
      return t === "en_GB" ||
        t === "en_IN" ||
        t === "en_OP" ||
        t === "en_PI" ||
        t === "en_UD" ||
        t === "en_US" ||
        t === "en_XA"
        ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionEn")
            .__setRef("WAWebEmojiDownloadSuggestions")
            .load()
        : t === "pt_BR" || t === "pt_PT"
          ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionPt")
              .__setRef("WAWebEmojiDownloadSuggestions")
              .load()
          : t === "de_DE"
            ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionDe")
                .__setRef("WAWebEmojiDownloadSuggestions")
                .load()
            : t === "es_CL" ||
                t === "es_CO" ||
                t === "es_ES" ||
                t === "es_LA" ||
                t === "es_MX" ||
                t === "es_VE"
              ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionEs")
                  .__setRef("WAWebEmojiDownloadSuggestions")
                  .load()
              : t === "it_IT"
                ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionIt")
                    .__setRef("WAWebEmojiDownloadSuggestions")
                    .load()
                : t === "ru_RU"
                  ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionRu")
                      .__setRef("WAWebEmojiDownloadSuggestions")
                      .load()
                  : t === "ar_AR"
                    ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionAr")
                        .__setRef("WAWebEmojiDownloadSuggestions")
                        .load()
                    : t === "tr_TR"
                      ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionTr")
                          .__setRef("WAWebEmojiDownloadSuggestions")
                          .load()
                      : t === "uk_UA"
                        ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionUk")
                            .__setRef("WAWebEmojiDownloadSuggestions")
                            .load()
                        : t === "bn_IN"
                          ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionBn")
                              .__setRef("WAWebEmojiDownloadSuggestions")
                              .load()
                          : t === "hi_IN" || t === "hi_FB"
                            ? r("JSResource")(
                                "WAWebLocalesCldrEmojiSuggestionHi",
                              )
                                .__setRef("WAWebEmojiDownloadSuggestions")
                                .load()
                            : t === "hu_HU"
                              ? r("JSResource")(
                                  "WAWebLocalesCldrEmojiSuggestionHu",
                                )
                                  .__setRef("WAWebEmojiDownloadSuggestions")
                                  .load()
                              : t === "ms_MY"
                                ? r("JSResource")(
                                    "WAWebLocalesCldrEmojiSuggestionMs",
                                  )
                                    .__setRef("WAWebEmojiDownloadSuggestions")
                                    .load()
                                : t === "pl_PL"
                                  ? r("JSResource")(
                                      "WAWebLocalesCldrEmojiSuggestionPl",
                                    )
                                      .__setRef("WAWebEmojiDownloadSuggestions")
                                      .load()
                                  : t === "ro_RO"
                                    ? r("JSResource")(
                                        "WAWebLocalesCldrEmojiSuggestionRo",
                                      )
                                        .__setRef(
                                          "WAWebEmojiDownloadSuggestions",
                                        )
                                        .load()
                                    : t === "th_TH"
                                      ? r("JSResource")(
                                          "WAWebLocalesCldrEmojiSuggestionTh",
                                        )
                                          .__setRef(
                                            "WAWebEmojiDownloadSuggestions",
                                          )
                                          .load()
                                      : t === "ur_PK"
                                        ? r("JSResource")(
                                            "WAWebLocalesCldrEmojiSuggestionUr",
                                          )
                                            .__setRef(
                                              "WAWebEmojiDownloadSuggestions",
                                            )
                                            .load()
                                        : t === "id_ID"
                                          ? r("JSResource")(
                                              "WAWebLocalesCldrEmojiSuggestionId",
                                            )
                                              .__setRef(
                                                "WAWebEmojiDownloadSuggestions",
                                              )
                                              .load()
                                          : t === "fa_IR"
                                            ? r("JSResource")(
                                                "WAWebLocalesCldrEmojiSuggestionFa",
                                              )
                                                .__setRef(
                                                  "WAWebEmojiDownloadSuggestions",
                                                )
                                                .load()
                                            : t === "mr_IN"
                                              ? r("JSResource")(
                                                  "WAWebLocalesCldrEmojiSuggestionMr",
                                                )
                                                  .__setRef(
                                                    "WAWebEmojiDownloadSuggestions",
                                                  )
                                                  .load()
                                              : t === "gu_IN"
                                                ? r("JSResource")(
                                                    "WAWebLocalesCldrEmojiSuggestionGu",
                                                  )
                                                    .__setRef(
                                                      "WAWebEmojiDownloadSuggestions",
                                                    )
                                                    .load()
                                                : t === "fr_FR" || t === "fr_CA"
                                                  ? r("JSResource")(
                                                      "WAWebLocalesCldrEmojiSuggestionFr",
                                                    )
                                                      .__setRef(
                                                        "WAWebEmojiDownloadSuggestions",
                                                      )
                                                      .load()
                                                  : t === "zh_TW"
                                                    ? r("JSResource")(
                                                        "WAWebLocalesCldrEmojiSuggestionZhTw",
                                                      )
                                                        .__setRef(
                                                          "WAWebEmojiDownloadSuggestions",
                                                        )
                                                        .load()
                                                    : t === "zh_CN"
                                                      ? r("JSResource")(
                                                          "WAWebLocalesCldrEmojiSuggestionZhCn",
                                                        )
                                                          .__setRef(
                                                            "WAWebEmojiDownloadSuggestions",
                                                          )
                                                          .load()
                                                      : t === "zh_HK"
                                                        ? r("JSResource")(
                                                            "WAWebLocalesCldrEmojiSuggestionZhHk",
                                                          )
                                                            .__setRef(
                                                              "WAWebEmojiDownloadSuggestions",
                                                            )
                                                            .load()
                                                        : t === "nl_NL" ||
                                                            t === "nl_BE"
                                                          ? r("JSResource")(
                                                              "WAWebLocalesCldrEmojiSuggestionNl",
                                                            )
                                                              .__setRef(
                                                                "WAWebEmojiDownloadSuggestions",
                                                              )
                                                              .load()
                                                          : t === "cs_CZ"
                                                            ? r("JSResource")(
                                                                "WAWebLocalesCldrEmojiSuggestionCs",
                                                              )
                                                                .__setRef(
                                                                  "WAWebEmojiDownloadSuggestions",
                                                                )
                                                                .load()
                                                            : t === "sk_SK"
                                                              ? r("JSResource")(
                                                                  "WAWebLocalesCldrEmojiSuggestionSk",
                                                                )
                                                                  .__setRef(
                                                                    "WAWebEmojiDownloadSuggestions",
                                                                  )
                                                                  .load()
                                                              : (
                                                                  e ||
                                                                  (e =
                                                                    n(
                                                                      "Promise",
                                                                    ))
                                                                ).resolve(null);
    }
    l.downloadEmojiSuggestions = s;
  },
  98,
);
