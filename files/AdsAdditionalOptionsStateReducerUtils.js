__d(
  "AdsAdditionalOptionsStateReducerUtils",
  ["invariant", "AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = e.data.changedParamKeys;
      return !!(
        t.selected_ad_ids ||
        t.selected_adset_ids ||
        t.selected_campaign_ids
      );
    }
    function u(e) {
      return e.map(function (e) {
        return { isEditable: e.isSticky, isSticky: e.isSticky, hasEdited: !1 };
      });
    }
    function c(e, t, n) {
      var r = e.get(t);
      return (
        r != null || s(0, 14128, t),
        e.set(t, {
          isEditable: n,
          isSticky: r.isSticky,
          hasEdited: r.hasEdited,
        })
      );
    }
    function d(e, t, n) {
      var r = e.get(t);
      return (
        r != null || s(0, 14128, t),
        e.set(t, {
          isEditable: r.isEditable,
          isSticky: r.isSticky,
          hasEdited: n,
        })
      );
    }
    function m(e, t, n) {
      return n === "advantage_audience"
        ? p(e, t)
        : e.withMutations(function (e) {
            return (
              t.forEach(function (t) {
                var o = e.get(t);
                if (o != null) {
                  if (n === "increment") {
                    var a =
                      o.isSticky === !1
                        ? "focus_framework_sticky_field_set"
                        : "focus_framework_sticky_field_refreshed";
                    r("AdsInterfacesLogger").log({
                      data: { field_names: [t] },
                      eventName: a,
                    });
                  }
                  e.set(t, {
                    isEditable: !0,
                    isSticky: !0,
                    hasEdited: o.hasEdited,
                  });
                }
              }),
              e
            );
          });
    }
    function p(e, t) {
      return e.withMutations(function (e) {
        return (
          t.forEach(function (t) {
            var n = e.get(t);
            n != null &&
              e.set(t, {
                isEditable: n.isEditable || !1,
                isSticky: !1,
                hasEdited: n.hasEdited,
              });
          }),
          e
        );
      });
    }
    ((l.hasAdObjectChanged = e),
      (l.resetDefaultState = u),
      (l.setFieldValue = c),
      (l.setHasEdited = d),
      (l.setSticky = m));
  },
  98,
);
