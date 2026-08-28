__d(
  "AdsUEditorUtils",
  ["createObjectFrom", "filterNulls", "immutable", "isFalsey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^[1-9]\d*$/;
    function s(e, t) {
      if (e.length !== t.length) return !1;
      var n = e.toSorted(),
        r = t.toSorted();
      return n.every(function (e, t) {
        return e === r[t];
      });
    }
    function u(e) {
      return r("immutable").Set.fromKeys(
        e.filter(function (e) {
          return e;
        }),
      );
    }
    function c(e) {
      var t = e.getValues().filter(Boolean);
      return r("createObjectFrom")(t, t);
    }
    function d(e) {
      var t = e.getValues();
      return r("filterNulls")(t).map(function (e) {
        return { message: e };
      });
    }
    function m(e, t) {
      return e.hostID == null || e.hostID === t;
    }
    function p(t) {
      return r("isFalsey")(t) ? !1 : e.test(t);
    }
    ((l.arraysAreEqual = s),
      (l.boolMapToSet = u),
      (l.bulkErrorMessageToErrorObject = c),
      (l.bulkErrorsToErrorMessageObjects = d),
      (l.shouldHostHandleAction = m),
      (l.isMaybeFBID = p));
  },
  98,
);
