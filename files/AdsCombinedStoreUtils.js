__d(
  "AdsCombinedStoreUtils",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {};
      return (
        e.values.forEach(function (e, n) {
          t[n] = s(e);
        }),
        t
      );
    }
    function s(e) {
      return e.newValue && e.newValue.toJS ? e.newValue.toJS() : e.newValue;
    }
    function u(t, n) {
      return t.map(function (t) {
        if (n.isLoading())
          return t
            ? r("LoadObject").withValue(t, { creatorModuleID: i.id }).loading()
            : r("LoadObject").loading({ creatorModuleID: i.id });
        var o = n.getValue();
        if (o == null || o.values.isEmpty())
          return t || r("LoadObject").empty({ creatorModuleID: i.id });
        var a = e(o);
        return t == null
          ? babelHelpers.extends({}, a, {
              account_id: o.accountID,
              id: o.objectID,
            })
          : babelHelpers.extends({}, t, a);
      });
    }
    function c(e, t, n) {
      return e.map(function (r) {
        if (t.isLoading()) return e.loading();
        var o = t.getValue();
        if (o == null || o.values.isEmpty()) return r;
        if (r == null)
          switch (n) {
            case "account_id":
              return o.accountID;
            case "id":
              return o.objectID;
          }
        return d(r, o.values.get(n));
      });
    }
    function d(e, t) {
      if (t != null) {
        var n = s(t);
        return n;
      }
      return e;
    }
    ((l.getDraftValueByKey = e),
      (l.getDraftValue = s),
      (l.combineData = u),
      (l.combineSingleFieldData = c));
  },
  98,
);
