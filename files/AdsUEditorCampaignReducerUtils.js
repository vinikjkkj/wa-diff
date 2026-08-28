__d(
  "AdsUEditorCampaignReducerUtils",
  ["ifRequired", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "flex_schedule_match_cta";
    function s(e, t, n) {
      var o = function (o, a) {
          var n = o;
          return (
            r("ifRequired")(
              "AdsCFCampaignDataReducerUtils",
              function (r) {
                n = r.callReduce(t, o, a, e);
              },
              function () {},
            ),
            n
          );
        },
        a = function (a, i) {
          if (Array.isArray(n) ? !n.includes(i.actionType) : n !== i.actionType)
            return a;
          var o = a;
          return (
            r("ifRequired")(
              "AdsEditingCampaignDataReducerUtils",
              function (n) {
                o = n.callReduce(t, a, i, e);
              },
              function () {
                r("vulture")("kV-1o4fgFgDOC2tuVYggJ4Ub_eg=");
              },
            ),
            o
          );
        };
      return ((o.actionType = n), (o.editingReducer = a), (o.reduceFn = t), o);
    }
    ((l.FLEX_SCHEDULE_MATCH_CTA_SROUCE = e), (l.createReducer = s));
  },
  98,
);
