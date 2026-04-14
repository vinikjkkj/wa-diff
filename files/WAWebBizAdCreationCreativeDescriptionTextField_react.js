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
      var t = e.adAccountID,
        n = e.description,
        a = r("useWAWebBizAdCreationSpecDispatcherContext")([
          r("getWAWebBizAdCreationCreativeCarouselReducer"),
        ]),
        i = m(r("WAWebBizAdCreationLoggerContext")),
        l = p(n != null ? n : ""),
        c = d(
          function (e) {
            var t =
              e.length >
              o("WAWebBizAdCreationMediaValidationUtils").MAX_DESCRIPTION_LENGTH
                ? e.slice(
                    0,
                    o("WAWebBizAdCreationMediaValidationUtils")
                      .MAX_DESCRIPTION_LENGTH,
                  )
                : e;
            a({
              bodyText: t,
              type: "creative_carousel_reducer.update_body_text",
            });
          },
          [a],
        ),
        _ = d(
          function () {
            var e = n != null ? n : "",
              o = l.current;
            e !== o &&
              (i != null &&
                r("WAWebBizAdLogger").logCritical({
                  event: "change_body_text",
                  loggerContext: i,
                  adAccountID: t,
                  extra: { text_length: e.length },
                }),
              (l.current = e));
          },
          [n, i, t],
        );
      return u.jsx(r("WDSTextField.react"), {
        label: s._(/*BTDS*/ "Description"),
        onValueChange: c,
        onBlur: _,
        value: n != null ? n : "",
        maxCharacterCount: o("WAWebBizAdCreationMediaValidationUtils")
          .MAX_DESCRIPTION_LENGTH,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
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
