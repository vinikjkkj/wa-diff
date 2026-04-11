__d(
  "WAWebBizAdCreationCreativeDescriptionTextField.react",
  [
    "fbt",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationMediaValidationUtils",
    "WAWebBizAdLogger",
    "WDSTextField.react",
    "getWAWebBizAdCreationCreativeCarouselReducer",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationSpecDispatcherContext",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = c.useRef;
    function _(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.adAccountID,
        a = e.description,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [r("getWAWebBizAdCreationCreativeCarouselReducer")]),
          (t[0] = i))
        : (i = t[0]);
      var l = r("useWAWebBizAdCreationSpecDispatcherContext")(i),
        c = m(r("WAWebBizAdCreationLoggerContext")),
        d = p(a != null ? a : ""),
        _;
      t[1] !== l
        ? ((_ = function (t) {
            var e =
              t.length >
              o("WAWebBizAdCreationMediaValidationUtils").MAX_DESCRIPTION_LENGTH
                ? t.slice(
                    0,
                    o("WAWebBizAdCreationMediaValidationUtils")
                      .MAX_DESCRIPTION_LENGTH,
                  )
                : t;
            l({
              bodyText: e,
              type: "creative_carousel_reducer.update_body_text",
            });
          }),
          (t[1] = l),
          (t[2] = _))
        : (_ = t[2]);
      var f = _,
        g;
      t[3] !== n || t[4] !== a || t[5] !== c
        ? ((g = function () {
            var e = a != null ? a : "",
              t = d.current;
            e !== t &&
              (c != null &&
                r("WAWebBizAdLogger").logCritical({
                  event: "change_body_text",
                  loggerContext: c,
                  adAccountID: n,
                  extra: { text_length: e.length },
                }),
              (d.current = e));
          }),
          (t[3] = n),
          (t[4] = a),
          (t[5] = c),
          (t[6] = g))
        : (g = t[6]);
      var h = g,
        y;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Description")), (t[7] = y))
        : (y = t[7]);
      var C = a != null ? a : "",
        b;
      return (
        t[8] !== h || t[9] !== f || t[10] !== C
          ? ((b = u.jsx(r("WDSTextField.react"), {
              label: y,
              onValueChange: f,
              onBlur: h,
              value: C,
              maxCharacterCount: o("WAWebBizAdCreationMediaValidationUtils")
                .MAX_DESCRIPTION_LENGTH,
            })),
            (t[8] = h),
            (t[9] = f),
            (t[10] = C),
            (t[11] = b))
          : (b = t[11]),
        b
      );
    }
    var f = r("withWAWebBizAdCreationSpecContext")(_, function (e) {
      var t,
        n,
        r,
        o = e.adgroupSpecs[e.selectedAdgroupID],
        a = o == null ? void 0 : o.assetFeedSpecPlus,
        i =
          (t =
            a == null || (n = a.bodies) == null || (n = n[0]) == null
              ? void 0
              : n.text) != null
            ? t
            : null;
      return {
        adAccountID: (r = e.adAccountData) == null ? void 0 : r.legacyAccountID,
        description: i,
      };
    });
    l.default = f;
  },
  226,
);
