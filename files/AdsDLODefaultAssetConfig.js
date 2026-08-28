__d(
  "AdsDLODefaultAssetConfig",
  [
    "invariant",
    "AdsAPIObjectives",
    "AdsDLOAdgroupFieldUtils",
    "AdsDLOConstantUtils",
    "AdsDLOConstants",
    "AdsDLOLanguageUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a) {
      return o("AdsDLOConstantUtils").isSupportedOptionalLinksObjective(e)
        ? (t != null || s(0, 11384), t)
        : e === r("AdsAPIObjectives").APP_INSTALLS
          ? !0
          : !n && u.includes(e);
    }
    var u = [
        r("AdsAPIObjectives").LINK_CLICKS,
        r("AdsAPIObjectives").CONVERSIONS,
      ],
      c = new Map([
        [
          "bodies",
          {
            groupLabel: "body_label",
            pathToUpdate: "text",
            getDefaultValue: function (t) {
              return "";
            },
            isUsedForObjective: function (t, n, r, a) {
              return o("AdsDLOConstants").SUPPORTED_OBJECTIVES.includes(t);
            },
          },
        ],
        [
          "titles",
          {
            groupLabel: "title_label",
            pathToUpdate: "text",
            getDefaultValue: function (t) {
              return "";
            },
            isUsedForObjective: function (t, n, r, a) {
              return o("AdsDLOConstantUtils").isSupportedOptionalLinksObjective(
                t,
              )
                ? (n != null || s(0, 11384), n)
                : o("AdsDLOConstants").SUPPORTED_OBJECTIVES.includes(t);
            },
          },
        ],
        [
          "descriptions",
          {
            groupLabel: "description_label",
            pathToUpdate: "text",
            getDefaultValue: function (t) {
              return "";
            },
            isUsedForObjective: e,
          },
        ],
        [
          "link_urls",
          {
            groupLabel: "link_url_label",
            pathToUpdate: "website_url",
            getDefaultValue: function (t) {
              if (!t) return "";
              var e = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(t);
              return (
                o("AdsDLOAdgroupFieldUtils").getLinkUrlValue(
                  t,
                  e,
                  "website_url",
                ).fieldValue || ""
              );
            },
            isUsedForObjective: e,
          },
        ],
      ]),
      d = c;
    l.default = d;
  },
  98,
);
