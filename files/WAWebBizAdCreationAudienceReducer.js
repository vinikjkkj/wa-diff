__d(
  "WAWebBizAdCreationAudienceReducer",
  [
    "FBImmer",
    "WAWebBizAdCreationTargetingModalApplyTargetingAutomation",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("FBImmer").produce(e, function (n) {
        var o = n.audienceData.audienceOption,
          a = n.lwiAudiences,
          i = a ? a[o] : null;
        switch (t.type) {
          case "audience_reducer.load_lwi_audiences":
            if (o !== "SAVED_AUDIENCE" && t.lwiAudiences[o] != null) {
              if (t.keepSelectedTargeting === !0) {
                s(n, t);
                break;
              }
              if (e.lwiAudiences == null)
                n.audienceData.targetSpec = t.lwiAudiences[o].targetSpec;
              else {
                var l = babelHelpers.extends({}, t.lwiAudiences);
                ((n.audienceData = t.lwiAudiences[o]),
                  (n.lwiAudiences = l),
                  (n.savedAudiences = t.savedAudiences));
                break;
              }
            }
            ((n.lwiAudiences = t.lwiAudiences),
              (n.savedAudiences = t.savedAudiences));
            break;
          case "audience_reducer.select_audience":
            if (
              ((n.audienceData = t.audienceData),
              t.audienceData.audienceOption === "SAVED_AUDIENCE")
            ) {
              var u,
                c = (u = n.savedAudiences) != null ? u : [],
                d = c.some(function (e) {
                  return e.audienceID === t.audienceData.audienceID;
                });
              d || (n.savedAudiences = [t.audienceData].concat(c));
            }
            break;
          case "audience_reducer.set_lwi_audience_name":
            if (a == null) {
              r("err")(
                "lwiAudiences is null in audience_reducer.set_lwi_audience_name",
              );
              return;
            }
            n.audienceData.name = t.name;
            break;
          case "audience_reducer.set_lwi_audience_subject_to_dsa":
            n.audienceData.subjectToDSA = t.subjectToDSA;
            break;
          case "audience_reducer.set_lwi_audience_targeting_spec":
            if (a == null) {
              r("err")(
                "lwiAudiences is null in audience_reducer.set_lwi_audience_targeting_spec",
              );
              return;
            }
            ((n.audienceData.targetSpec = t.targetingSpec),
              i != null
                ? (i.targetSpec = t.targetingSpec)
                : o !== "HEC_AUDIENCE" &&
                  o !== "SAVED_AUDIENCE" &&
                  r("err")("unknown audience option in audience data"));
            break;
        }
      });
      return [n];
    }
    function s(e, t) {
      var n,
        r = e.audienceData.audienceOption,
        o = babelHelpers.extends({}, t.lwiAudiences[r], {
          subjectToDSA: e.audienceData.subjectToDSA,
          targetSpec: u(r, e.audienceData.targetSpec),
        });
      ((e.audienceData = o),
        (e.lwiAudiences = babelHelpers.extends(
          {},
          t.lwiAudiences,
          ((n = {}), (n[r] = o), n),
        )),
        (e.savedAudiences = t.savedAudiences));
    }
    function u(e, t) {
      var n;
      if (
        e !== "NCPP" ||
        ((n = t.targeting_automation) == null
          ? void 0
          : n.advantage_audience) === 1
      )
        return t;
      var o = t.age_range,
        a = babelHelpers.extends({}, t);
      return (
        r("WAWebBizAdCreationTargetingModalApplyTargetingAutomation")(a, !0),
        o != null && (a.age_range = o),
        a
      );
    }
    l.default = e;
  },
  98,
);
