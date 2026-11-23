__d(
  "toSiteLinksSpecToWrite",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("immutable").List(
        Array.from(e.values())
          .filter(function (e) {
            return e != null;
          })
          .map(function (e) {
            return r("immutable").Map({
              site_link_title: e.site_link_title,
              site_link_url: e.site_link_url,
              site_link_image_hash: e.site_link_image_hash,
              site_link_image_url: e.site_link_image_url,
              site_link_recommendation_type: e.site_link_recommendation_type,
              site_link_result_source: e.site_link_result_source,
              site_link_hash: e.site_link_hash,
              is_site_link_sticky: e.is_site_link_sticky,
              site_link_id: e.site_link_id,
              site_link_language: e.site_link_language,
              site_link_extra_metadata: e.site_link_extra_metadata,
              site_link_url_anchor: e.site_link_url_anchor,
              site_link_url_recommender_type: e.site_link_url_recommender_type,
              site_link_website_data_source: e.site_link_website_data_source,
              is_defaulting_eligible: e.is_defaulting_eligible,
            });
          }),
      );
    }
    l.default = e;
  },
  98,
);
