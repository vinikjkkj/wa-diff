__d(
  "AdsCFDefaultingDataLoader",
  [
    "AdsDefaultPageLoadedDataAction",
    "AdsGraphAPI",
    "AdsPostFields",
    "GraphAPIFieldUtils",
    "adsPagePostResponseShaper",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "U",
      s = o("GraphAPIFieldUtils").getFieldWithParameterizedSubfields(
        "related_page_post",
        { date_format: e, fields: o("AdsPostFields").AdsPostFields },
      ),
      u = o("GraphAPIFieldUtils").getFieldWithParameterizedSubfields(
        "ad_group",
        {
          fields: [
            "created_time",
            "related_page_icon_uri",
            "related_page_id",
            "related_page_name",
            s,
          ],
        },
      );
    function c() {
      return o("GraphAPIFieldUtils").getFieldWithParameterizedSubfields(
        "default_values",
        { fields: u },
      );
    }
    function d(e) {
      r("promiseDone")(
        o("AdsGraphAPI")
          .get(i.id)
          .adaccount(e)
          .get({ fields: c() })
          .then(function (t) {
            var n,
              o,
              a,
              l,
              s,
              u =
                (n = t.default_values) == null || (n = n.ad_group) == null
                  ? void 0
                  : n.related_page_post,
              c = u != null ? r("adsPagePostResponseShaper")(u) : null;
            r("AdsDefaultPageLoadedDataAction").dispatch(
              {
                adAccountID: e,
                createdTime:
                  (o = t.default_values) == null || (o = o.ad_group) == null
                    ? void 0
                    : o.created_time,
                pageIconURI:
                  (a = t.default_values) == null || (a = a.ad_group) == null
                    ? void 0
                    : a.related_page_icon_uri,
                pageID:
                  (l = t.default_values) == null || (l = l.ad_group) == null
                    ? void 0
                    : l.related_page_id,
                pageName:
                  (s = t.default_values) == null || (s = s.ad_group) == null
                    ? void 0
                    : s.related_page_name,
                pagePost: c,
              },
              {
                line: "70",
                module: "AdsCFDefaultingDataLoader.js",
                moduleID: i.id,
              },
            );
          }),
      );
    }
    l.loadDefaultPageForAccountID = d;
  },
  98,
);
