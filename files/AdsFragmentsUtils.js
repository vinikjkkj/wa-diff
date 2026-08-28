__d(
  "AdsFragmentsUtils",
  ["getByPath", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null ? 0 : e.length;
    }
    function s(e) {
      return e.action === "add";
    }
    function u(e) {
      return e.action === "modify" && !c(e);
    }
    function c(e) {
      if (e.action === "archive" || e.action === "delete") return !0;
      var t = e.values
        ? e.values.find(function (e) {
            var t = e.field;
            return t === "status";
          })
        : null;
      return t ? JSON.parse(t.new_value) === "ARCHIVED" : !1;
    }
    function d(t) {
      return e(t) === 1;
    }
    function m(t) {
      return e(t) > 1;
    }
    function p(e) {
      return e ? e.every(s) : !1;
    }
    function _(e) {
      return e ? e.every(u) : !1;
    }
    function f(e) {
      return e ? e.every(c) : !1;
    }
    function g(e) {
      return e.ad_object_type;
    }
    function h(e) {
      var t;
      return r("immutable")
        .Map(
          ((t = {}),
          (t.campaign = y(e, "campaign").length),
          (t.ad_set = y(e, "ad_set").length),
          (t.ad = y(e, "ad").length),
          t),
        )
        .filter(function (e) {
          return e > 0;
        });
    }
    function y(e, t) {
      return e.filter(function (e) {
        return e.ad_object_type === t;
      });
    }
    function C(e) {
      var t = r("getByPath")(e, ["status"]);
      return t === "ARCHIVED" || t === "DELETED";
    }
    ((l.isSingleItem = d),
      (l.isMultipleItems = m),
      (l.areAllCreatingNew = p),
      (l.areAllEditing = _),
      (l.areAllDeleting = f),
      (l.getAdObjectLevel = g),
      (l.getAdObjectLevelCount = h),
      (l.filterFragmentsByObjectType = y),
      (l.isDeleted = C));
  },
  98,
);
