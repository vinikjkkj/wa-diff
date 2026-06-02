__d(
  "WAWebEmojiDownloadSuggestions",
  [
    "JSResource",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebL10nGetRenderedLocale",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      try {
        await o("WAWebABPropsCache").waitForABPropConfigsReady();
        var e = new Set([
            "en_GB",
            o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale(),
          ]),
          t = await Promise.all(Array.from(e, s));
        return t.filter(Boolean);
      } catch (e) {
        return [];
      }
    }
    function s(e) {
      return o("WAWebABProps").getABPropConfigValue("emoji_search_cldr")
        ? u(e)
        : e === "en_GB" ||
            e === "en_IN" ||
            e === "en_OP" ||
            e === "en_PI" ||
            e === "en_UD" ||
            e === "en_US" ||
            e === "en_XA"
          ? r("JSResource")("WAWebLocalesEmojiSuggestionEn")
              .__setRef("WAWebEmojiDownloadSuggestions")
              .load()
          : e === "pt_BR" || e === "pt_PT"
            ? r("JSResource")("WAWebLocalesEmojiSuggestionPt")
                .__setRef("WAWebEmojiDownloadSuggestions")
                .load()
            : e === "de_DE"
              ? r("JSResource")("WAWebLocalesEmojiSuggestionDe")
                  .__setRef("WAWebEmojiDownloadSuggestions")
                  .load()
              : e === "es_CL" ||
                  e === "es_CO" ||
                  e === "es_ES" ||
                  e === "es_LA" ||
                  e === "es_MX" ||
                  e === "es_VE"
                ? r("JSResource")("WAWebLocalesEmojiSuggestionEs")
                    .__setRef("WAWebEmojiDownloadSuggestions")
                    .load()
                : e === "it_IT"
                  ? r("JSResource")("WAWebLocalesEmojiSuggestionIt")
                      .__setRef("WAWebEmojiDownloadSuggestions")
                      .load()
                  : e === "ru_RU"
                    ? r("JSResource")("WAWebLocalesEmojiSuggestionRu")
                        .__setRef("WAWebEmojiDownloadSuggestions")
                        .load()
                    : e === "ar_AR"
                      ? r("JSResource")("WAWebLocalesEmojiSuggestionAr")
                          .__setRef("WAWebEmojiDownloadSuggestions")
                          .load()
                      : e === "tr_TR"
                        ? r("JSResource")("WAWebLocalesEmojiSuggestionTr")
                            .__setRef("WAWebEmojiDownloadSuggestions")
                            .load()
                        : e === "uk_UA"
                          ? r("JSResource")("WAWebLocalesEmojiSuggestionUk")
                              .__setRef("WAWebEmojiDownloadSuggestions")
                              .load()
                          : e === "bn_IN"
                            ? r("JSResource")("WAWebLocalesEmojiSuggestionBn")
                                .__setRef("WAWebEmojiDownloadSuggestions")
                                .load()
                            : e === "hi_IN" || e === "hi_FB"
                              ? r("JSResource")("WAWebLocalesEmojiSuggestionHi")
                                  .__setRef("WAWebEmojiDownloadSuggestions")
                                  .load()
                              : e === "hu_HU"
                                ? r("JSResource")(
                                    "WAWebLocalesEmojiSuggestionHu",
                                  )
                                    .__setRef("WAWebEmojiDownloadSuggestions")
                                    .load()
                                : e === "ms_MY"
                                  ? r("JSResource")(
                                      "WAWebLocalesEmojiSuggestionMs",
                                    )
                                      .__setRef("WAWebEmojiDownloadSuggestions")
                                      .load()
                                  : e === "pl_PL"
                                    ? r("JSResource")(
                                        "WAWebLocalesEmojiSuggestionPl",
                                      )
                                        .__setRef(
                                          "WAWebEmojiDownloadSuggestions",
                                        )
                                        .load()
                                    : e === "ro_RO"
                                      ? r("JSResource")(
                                          "WAWebLocalesEmojiSuggestionRo",
                                        )
                                          .__setRef(
                                            "WAWebEmojiDownloadSuggestions",
                                          )
                                          .load()
                                      : e === "th_TH"
                                        ? r("JSResource")(
                                            "WAWebLocalesEmojiSuggestionTh",
                                          )
                                            .__setRef(
                                              "WAWebEmojiDownloadSuggestions",
                                            )
                                            .load()
                                        : e === "ur_PK"
                                          ? r("JSResource")(
                                              "WAWebLocalesEmojiSuggestionUr",
                                            )
                                              .__setRef(
                                                "WAWebEmojiDownloadSuggestions",
                                              )
                                              .load()
                                          : e === "id_ID"
                                            ? r("JSResource")(
                                                "WAWebLocalesEmojiSuggestionId",
                                              )
                                                .__setRef(
                                                  "WAWebEmojiDownloadSuggestions",
                                                )
                                                .load()
                                            : e === "fa_IR"
                                              ? r("JSResource")(
                                                  "WAWebLocalesEmojiSuggestionFa",
                                                )
                                                  .__setRef(
                                                    "WAWebEmojiDownloadSuggestions",
                                                  )
                                                  .load()
                                              : e === "mr_IN"
                                                ? r("JSResource")(
                                                    "WAWebLocalesEmojiSuggestionMr",
                                                  )
                                                    .__setRef(
                                                      "WAWebEmojiDownloadSuggestions",
                                                    )
                                                    .load()
                                                : e === "gu_IN"
                                                  ? r("JSResource")(
                                                      "WAWebLocalesEmojiSuggestionGu",
                                                    )
                                                      .__setRef(
                                                        "WAWebEmojiDownloadSuggestions",
                                                      )
                                                      .load()
                                                  : e === "fr_FR" ||
                                                      e === "fr_CA"
                                                    ? r("JSResource")(
                                                        "WAWebLocalesEmojiSuggestionFr",
                                                      )
                                                        .__setRef(
                                                          "WAWebEmojiDownloadSuggestions",
                                                        )
                                                        .load()
                                                    : e === "zh_TW"
                                                      ? r("JSResource")(
                                                          "WAWebLocalesEmojiSuggestionZhTw",
                                                        )
                                                          .__setRef(
                                                            "WAWebEmojiDownloadSuggestions",
                                                          )
                                                          .load()
                                                      : e === "zh_CN"
                                                        ? r("JSResource")(
                                                            "WAWebLocalesEmojiSuggestionZhCn",
                                                          )
                                                            .__setRef(
                                                              "WAWebEmojiDownloadSuggestions",
                                                            )
                                                            .load()
                                                        : e === "zh_HK"
                                                          ? r("JSResource")(
                                                              "WAWebLocalesEmojiSuggestionZhHk",
                                                            )
                                                              .__setRef(
                                                                "WAWebEmojiDownloadSuggestions",
                                                              )
                                                              .load()
                                                          : e === "nl_NL" ||
                                                              e === "nl_BE"
                                                            ? r("JSResource")(
                                                                "WAWebLocalesEmojiSuggestionNl",
                                                              )
                                                                .__setRef(
                                                                  "WAWebEmojiDownloadSuggestions",
                                                                )
                                                                .load()
                                                            : e === "cs_CZ"
                                                              ? r("JSResource")(
                                                                  "WAWebLocalesEmojiSuggestionCs",
                                                                )
                                                                  .__setRef(
                                                                    "WAWebEmojiDownloadSuggestions",
                                                                  )
                                                                  .load()
                                                              : e === "sk_SK"
                                                                ? r(
                                                                    "JSResource",
                                                                  )(
                                                                    "WAWebLocalesEmojiSuggestionSk",
                                                                  )
                                                                    .__setRef(
                                                                      "WAWebEmojiDownloadSuggestions",
                                                                    )
                                                                    .load()
                                                                : Promise.resolve(
                                                                    null,
                                                                  );
    }
    function u(e) {
      return e === "en_GB" ||
        e === "en_IN" ||
        e === "en_OP" ||
        e === "en_PI" ||
        e === "en_UD" ||
        e === "en_US" ||
        e === "en_XA"
        ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionEn")
            .__setRef("WAWebEmojiDownloadSuggestions")
            .load()
        : e === "pt_BR" || e === "pt_PT"
          ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionPt")
              .__setRef("WAWebEmojiDownloadSuggestions")
              .load()
          : e === "de_DE"
            ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionDe")
                .__setRef("WAWebEmojiDownloadSuggestions")
                .load()
            : e === "es_CL" ||
                e === "es_CO" ||
                e === "es_ES" ||
                e === "es_LA" ||
                e === "es_MX" ||
                e === "es_VE"
              ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionEs")
                  .__setRef("WAWebEmojiDownloadSuggestions")
                  .load()
              : e === "it_IT"
                ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionIt")
                    .__setRef("WAWebEmojiDownloadSuggestions")
                    .load()
                : e === "ru_RU"
                  ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionRu")
                      .__setRef("WAWebEmojiDownloadSuggestions")
                      .load()
                  : e === "ar_AR"
                    ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionAr")
                        .__setRef("WAWebEmojiDownloadSuggestions")
                        .load()
                    : e === "tr_TR"
                      ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionTr")
                          .__setRef("WAWebEmojiDownloadSuggestions")
                          .load()
                      : e === "uk_UA"
                        ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionUk")
                            .__setRef("WAWebEmojiDownloadSuggestions")
                            .load()
                        : e === "bn_IN"
                          ? r("JSResource")("WAWebLocalesCldrEmojiSuggestionBn")
                              .__setRef("WAWebEmojiDownloadSuggestions")
                              .load()
                          : e === "hi_IN" || e === "hi_FB"
                            ? r("JSResource")(
                                "WAWebLocalesCldrEmojiSuggestionHi",
                              )
                                .__setRef("WAWebEmojiDownloadSuggestions")
                                .load()
                            : e === "hu_HU"
                              ? r("JSResource")(
                                  "WAWebLocalesCldrEmojiSuggestionHu",
                                )
                                  .__setRef("WAWebEmojiDownloadSuggestions")
                                  .load()
                              : e === "ms_MY"
                                ? r("JSResource")(
                                    "WAWebLocalesCldrEmojiSuggestionMs",
                                  )
                                    .__setRef("WAWebEmojiDownloadSuggestions")
                                    .load()
                                : e === "pl_PL"
                                  ? r("JSResource")(
                                      "WAWebLocalesCldrEmojiSuggestionPl",
                                    )
                                      .__setRef("WAWebEmojiDownloadSuggestions")
                                      .load()
                                  : e === "ro_RO"
                                    ? r("JSResource")(
                                        "WAWebLocalesCldrEmojiSuggestionRo",
                                      )
                                        .__setRef(
                                          "WAWebEmojiDownloadSuggestions",
                                        )
                                        .load()
                                    : e === "th_TH"
                                      ? r("JSResource")(
                                          "WAWebLocalesCldrEmojiSuggestionTh",
                                        )
                                          .__setRef(
                                            "WAWebEmojiDownloadSuggestions",
                                          )
                                          .load()
                                      : e === "ur_PK"
                                        ? r("JSResource")(
                                            "WAWebLocalesCldrEmojiSuggestionUr",
                                          )
                                            .__setRef(
                                              "WAWebEmojiDownloadSuggestions",
                                            )
                                            .load()
                                        : e === "id_ID"
                                          ? r("JSResource")(
                                              "WAWebLocalesCldrEmojiSuggestionId",
                                            )
                                              .__setRef(
                                                "WAWebEmojiDownloadSuggestions",
                                              )
                                              .load()
                                          : e === "fa_IR"
                                            ? r("JSResource")(
                                                "WAWebLocalesCldrEmojiSuggestionFa",
                                              )
                                                .__setRef(
                                                  "WAWebEmojiDownloadSuggestions",
                                                )
                                                .load()
                                            : e === "mr_IN"
                                              ? r("JSResource")(
                                                  "WAWebLocalesCldrEmojiSuggestionMr",
                                                )
                                                  .__setRef(
                                                    "WAWebEmojiDownloadSuggestions",
                                                  )
                                                  .load()
                                              : e === "gu_IN"
                                                ? r("JSResource")(
                                                    "WAWebLocalesCldrEmojiSuggestionGu",
                                                  )
                                                    .__setRef(
                                                      "WAWebEmojiDownloadSuggestions",
                                                    )
                                                    .load()
                                                : e === "fr_FR" || e === "fr_CA"
                                                  ? r("JSResource")(
                                                      "WAWebLocalesCldrEmojiSuggestionFr",
                                                    )
                                                      .__setRef(
                                                        "WAWebEmojiDownloadSuggestions",
                                                      )
                                                      .load()
                                                  : e === "zh_TW"
                                                    ? r("JSResource")(
                                                        "WAWebLocalesCldrEmojiSuggestionZhTw",
                                                      )
                                                        .__setRef(
                                                          "WAWebEmojiDownloadSuggestions",
                                                        )
                                                        .load()
                                                    : e === "zh_CN"
                                                      ? r("JSResource")(
                                                          "WAWebLocalesCldrEmojiSuggestionZhCn",
                                                        )
                                                          .__setRef(
                                                            "WAWebEmojiDownloadSuggestions",
                                                          )
                                                          .load()
                                                      : e === "zh_HK"
                                                        ? r("JSResource")(
                                                            "WAWebLocalesCldrEmojiSuggestionZhHk",
                                                          )
                                                            .__setRef(
                                                              "WAWebEmojiDownloadSuggestions",
                                                            )
                                                            .load()
                                                        : e === "nl_NL" ||
                                                            e === "nl_BE"
                                                          ? r("JSResource")(
                                                              "WAWebLocalesCldrEmojiSuggestionNl",
                                                            )
                                                              .__setRef(
                                                                "WAWebEmojiDownloadSuggestions",
                                                              )
                                                              .load()
                                                          : e === "cs_CZ"
                                                            ? r("JSResource")(
                                                                "WAWebLocalesCldrEmojiSuggestionCs",
                                                              )
                                                                .__setRef(
                                                                  "WAWebEmojiDownloadSuggestions",
                                                                )
                                                                .load()
                                                            : e === "sk_SK"
                                                              ? r("JSResource")(
                                                                  "WAWebLocalesCldrEmojiSuggestionSk",
                                                                )
                                                                  .__setRef(
                                                                    "WAWebEmojiDownloadSuggestions",
                                                                  )
                                                                  .load()
                                                              : Promise.resolve(
                                                                  null,
                                                                );
    }
    l.downloadEmojiSuggestions = e;
  },
  98,
);
