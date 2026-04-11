__d(
  "WAWebNuxCtwaSuggestionHelpers",
  [
    "WAWebBizGatingUtils",
    "WAWebCTWASuggestionCollection",
    "WAWebNewCTWASuggestionAction",
    "WAWebNux",
    "WAWebNuxCoolOff",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      COOL_OFF_START_STORAGE_KEY:
        o("WAWebNux").CoolOffPeriodKeys.CTWA_SUGGESTION,
      MAX_CLICKS: 1,
    };
    function s(e) {
      return {
        getNuxOptions: function () {
          var t;
          return (t = o(
            "WAWebCTWASuggestionCollection",
          ).CTWASuggestionCollection.get(e)) == null ||
            (t = t.suggestion) == null
            ? void 0
            : t.nuxData;
        },
        setNuxOptions: function (n, r) {
          o("WAWebNewCTWASuggestionAction").ctwaSuggestionNuxDataChanged(
            e,
            babelHelpers.extends({}, r, {
              lastViewedDay: r.lastViewedDay.toISOString(),
            }),
          );
        },
        getCoolOffData: function () {
          var t;
          return (t = o(
            "WAWebCTWASuggestionCollection",
          ).CTWASuggestionCollection.get(e)) == null ||
            (t = t.suggestion) == null
            ? void 0
            : t.coolOffData;
        },
        setCoolOffData: function (n, r) {
          o("WAWebNewCTWASuggestionAction").ctwaSuggestionCoolOffDataChanged(
            e,
            babelHelpers.extends({}, r, {
              startDate: r.startDate.toISOString(),
            }),
          );
        },
      };
    }
    function u(t) {
      var n = babelHelpers.extends({}, e, {
        storageAccessors: s(t),
        bannerId: t,
      });
      return (
        o("WAWebBizGatingUtils").adsActionBannersEnabled() &&
        o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.get(t) !=
          null &&
        o("WAWebNuxCoolOff").shouldShowNUX(
          o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.CTWA_SUGGESTION,
          n,
        )
      );
    }
    ((l.BANNER_TYPE = o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.CTWA_SUGGESTION),
      (l.BANNER_CONFIG = e),
      (l.getStorageAccessors = s),
      (l.shouldShowSuggestion = u));
  },
  98,
);
