__d(
  "AdStudyGraphAPIUtils",
  ["AdsGraphAPI", "AdsLiftGraphAPIConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return o("AdsGraphAPI").get(i.id).me().edge("ad_studies").post(t);
      },
      s = function (t) {
        return o("AdsGraphAPI")
          .get(i.id)
          .object(o("AdsLiftGraphAPIConstants").GRAPH_API_NAMES.AD_STUDY, t)
          .remove({ id: t });
      },
      u = function (t) {
        return o("AdsGraphAPI")
          .get(i.id)
          .object(o("AdsLiftGraphAPIConstants").GRAPH_API_NAMES.AD_STUDY, t.id)
          .post(t);
      };
    ((l.createAdStudy = e), (l.deleteAdStudy = s), (l.updateStudy = u));
  },
  98,
);
