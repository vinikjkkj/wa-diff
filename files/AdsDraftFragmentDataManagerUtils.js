__d(
  "AdsDraftFragmentDataManagerUtils",
  ["FBLogger", "adsDraftEncodeFragmentValues", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o;
      return babelHelpers.extends(
        {},
        r("adsDraftEncodeFragmentValues")(t),
        ((o = { active_errors: e.active_errors, adsApplicationID: n }),
        (o.validation_status = e.validation_status),
        (o.fragment_version = e.fragment_version),
        (o.time_updated = e.time_updated),
        o),
      );
    }
    function s(e, t, n, o, a) {
      var i;
      return babelHelpers.extends(
        {},
        r("adsDraftEncodeFragmentValues")(t),
        e,
        ((i = { adsApplicationID: a }), (i.ad_draft_id = n), (i.tempID = o), i),
      );
    }
    function u(e, t, n, r, o, a) {
      return (
        a === void 0 && (a = null),
        babelHelpers.extends({}, e, {
          ad_object_id: t,
          id: n,
          parent_ad_object_id: a,
          values: r,
          draft_version: o.draft_version,
          time_updated: o.time_updated,
          time_created: o.time_created,
          active_errors: o.active_errors,
          status: o.status,
          validation_status: o.validation_status,
          fragment_version: o.fragment_version,
        })
      );
    }
    function c(e, t) {
      var n = new Map();
      (e.forEach(function (e, t) {
        var r = e.adsApplicationID;
        delete e.adsApplicationID;
        var o = n.get(r) || new Map();
        (o.set(t, e), n.set(r, o));
      }),
        n.size > 1 &&
          r("FBLogger")("ads").warn(
            "Should not have received responses from multiple applications at the same time",
          ),
        n.forEach(function (e, n) {
          t(e, n);
        }));
    }
    function d(e) {
      var t = e.filter(function (e) {
          return e.action === "DELETE_NEW";
        }),
        n = t
          .map(function (e) {
            return e.objectID;
          })
          .toSet();
      return r("immutable")
        .Map()
        .withMutations(function (e) {
          t.forEach(function (t) {
            var o = t.fragment.getIn(["values", "campaign_id", "newValue"]),
              a = t.fragment.getIn(["values", "adset_id", "newValue"]);
            (o &&
              n.has(o) &&
              e.update(o, r("immutable").List(), function (e) {
                return e.push(t);
              }),
              a &&
                n.has(a) &&
                e.update(a, r("immutable").List(), function (e) {
                  return e.push(t);
                }));
          });
        });
    }
    ((l.transformUpdateResponse = e),
      (l.transformCreateResponse = s),
      (l.createResponseForMultiFragment = u),
      (l.groupResponsesByAppAndDispatch = c),
      (l.findDescendantDeletedItems = d));
  },
  98,
);
