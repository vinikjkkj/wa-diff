__d(
  "AdsInsightsActionFieldTypes",
  [
    "AdsInsightsActionFieldType",
    "AdsInsightsActionFieldTypeConfig",
    "AdsInsightsResultsTypeField",
    "StrSet",
    "getObjectValues",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoize")(function () {
        return r("getObjectValues")(r("AdsInsightsActionFieldType"));
      }),
      s = r("memoize")(function () {
        return new (r("StrSet"))(e());
      }),
      u = r("memoize")(function () {
        return new (r("StrSet"))(
          r("getObjectValues")(r("AdsInsightsResultsTypeField")),
        );
      }),
      c = function (t) {
        return s().contains(t);
      },
      d = function (t) {
        return r("AdsInsightsActionFieldTypeConfig").actionTypes[t];
      },
      m = function (t) {
        return u().contains(t);
      },
      p = function (t) {
        return (
          t === "video_play_retention_0_to_15s_actions" ||
          t === "video_play_retention_20_to_60s_actions" ||
          t === "video_play_retention_graph_actions"
        );
      };
    ((l.getIDs = e),
      (l.getIDsSet = s),
      (l.getResultsTypeIDsSet = u),
      (l.isValid = c),
      (l.getActionTypes = d),
      (l.isResultsType = m),
      (l.isVideoRetentionType = p));
  },
  98,
);
