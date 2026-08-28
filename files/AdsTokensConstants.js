__d(
  "AdsTokensConstants",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = { PRODUCT: "product", PAGE: "page", HOTEL: "hotel", TRIP: "trip" },
      u = {
        PROPERTY: "date_format_transformers",
        FORMATS: [
          { PROPERTY: "date_format:d/m/Y", TEXT: s._(/*BTDS*/ "DD\/MM\/YYYY") },
          { PROPERTY: "date_format:m/d/Y", TEXT: s._(/*BTDS*/ "MM\/DD\/YYYY") },
          { PROPERTY: "date_format:Ymd", TEXT: s._(/*BTDS*/ "YYYYMMDD") },
          { PROPERTY: "date_format:Y-m-d", TEXT: s._(/*BTDS*/ "YYYY-MM-DD") },
          { PROPERTY: "date_format:d-M-Y", TEXT: s._(/*BTDS*/ "DD-MM-YYYY") },
        ],
      },
      c = {
        PROPERTY: "currency_format_options",
        DEFAULT_PROPERTY: "",
        DEFAULT_TEXT: s._(/*BTDS*/ "Show currency symbol"),
        FORMATS: [
          {
            PROPERTY: "currency_code raw",
            TEXT: s._(/*BTDS*/ "Show currency code"),
          },
        ],
      },
      d = {
        PROPERTY: "url_encode_transformers",
        ENCODED: { PROPERTY: "urlencode", TEXT: s._(/*BTDS*/ "URL encode") },
      },
      m = {
        PROPERTY: "format_transformers",
        DEFAULT_PROPERTY: "",
        DEFAULT_FIELDS: new Map([
          ["product", s._(/*BTDS*/ "Use catalog format")],
          ["page", s._(/*BTDS*/ "Use page format")],
          ["hotel", s._(/*BTDS*/ "Use source format")],
          ["trip", s._(/*BTDS*/ "Use source format")],
        ]),
        TITLE_CASE: { PROPERTY: "titleize", TEXT: s._(/*BTDS*/ "Title case") },
      },
      p = {
        STRIP_ZEROS: {
          DEFAULT_PROPERTY: "strip_zeros",
          PROPERTY: "strip_zeros",
          TEXT: s._(/*BTDS*/ "Show as whole number"),
        },
        ROUND: {
          DEFAULT_PROPERTY: "round",
          PROPERTY: "round",
          TEXT: s._(/*BTDS*/ "Show as rounded number"),
        },
      },
      _ = {
        SIGNED: {
          DEFAULT_PROPERTY: "signed",
          PROPERTY: "signed",
          TEXT: s._(/*BTDS*/ "Show as signed number"),
        },
        DECIMAL: {
          DEFAULT_PROPERTY: "decimal",
          PROPERTY: "decimal",
          TEXT: s._(/*BTDS*/ "Show as decimal"),
        },
      },
      f = {
        ALLOW_EMPTY: {
          PROPERTY: "allow_empty",
          TEXT: s._(/*BTDS*/ "Allow empty"),
        },
      },
      g = {
        PROPERTY: "star_rating_options",
        THRESHOLDS: [
          {
            PROPERTY: "star_rating_threshold_two",
            TEXT: s._(/*BTDS*/ "Show ratings of 2 or more"),
          },
          {
            PROPERTY: "star_rating_threshold_three",
            TEXT: s._(/*BTDS*/ "Show ratings of 3 or more"),
          },
          {
            PROPERTY: "star_rating_threshold_four",
            TEXT: s._(/*BTDS*/ "Show ratings of 4 or more"),
          },
        ],
      },
      h = {
        PROPERTY: "user_review_options",
        THRESHOLDS: [
          {
            PROPERTY: "user_review_threshold_six",
            TEXT: s._(/*BTDS*/ "Show ratings of 6 or more"),
          },
          {
            PROPERTY: "user_review_threshold_seven",
            TEXT: s._(/*BTDS*/ "Show ratings of 7 or more"),
          },
          {
            PROPERTY: "user_review_threshold_eight",
            TEXT: s._(/*BTDS*/ "Show ratings of 8 or more"),
          },
          {
            PROPERTY: "user_review_threshold_nine",
            TEXT: s._(/*BTDS*/ "Show ratings of 9 or more"),
          },
        ],
      },
      y = {
        PROPERTY: "price_comparison_options",
        FORMATS: [
          {
            PROPERTY: "strike_original_price",
            TEXT: s._(/*BTDS*/ "Strikethrough original price"),
          },
        ],
      };
    ((l.NAMESPACES = e),
      (l.DATE_FORMAT_TRANSFORMERS = u),
      (l.CURRENCY_FORMAT_OPTIONS = c),
      (l.URL_ENCODE_TRANSFORMERS = d),
      (l.FORMAT_TRANSFORMERS = m),
      (l.NUMBER_OPTIONS = p),
      (l.CUSTOM_NUMBER_OPTIONS = _),
      (l.TEXT_OPTIONS = f),
      (l.STAR_RATING_OPTIONS = g),
      (l.USER_REVIEW_OPTIONS = h),
      (l.PRICE_COMPARISON_OPTIONS = y));
  },
  226,
);
