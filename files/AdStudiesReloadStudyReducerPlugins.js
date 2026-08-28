__d(
  "AdStudiesReloadStudyReducerPlugins",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.adAccount,
            r = n.studyID,
            o = t.delete({ adAccountID: e.account_id, studyID: r });
          return (o.get({ adAccountID: e.account_id, studyID: r }), o);
        },
      },
      l = {
        reduce: function (t, n) {
          var e = n.adAccount,
            r = n.studyID,
            o = t.delete({ adAccountID: e.account_id, studyID: r });
          return (o.get({ adAccountID: e.account_id, studyID: r }), o);
        },
      },
      s = {
        reduce: function (t, n) {
          var e = n.adAccount,
            r = n.studyID,
            o = n.successToastType;
          return o !== "CANCEL_SUCCESS" || e == null
            ? t
            : t.delete({ adAccountID: e.account_id, studyID: r });
        },
      },
      u = {
        reduce: function (t, n) {
          var e = n.adAccountID,
            r = n.studyID;
          return (
            t.get({
              adAccountID: e,
              studyID: r,
              updateExisting: !0,
              justCreated: !0,
            }),
            t
          );
        },
      },
      c = {
        reduce: function (t, n) {
          var e = t;
          return (
            n.keys.forEach(function (t) {
              ((e = e.setKeyStale(t)), e.get(t));
            }),
            e
          );
        },
      },
      d = {
        reduce: function (t, n) {
          var e = n.adAccountID,
            r = n.studyID;
          return (t.get({ adAccountID: e, studyID: r, updateExisting: !0 }), t);
        },
      };
    ((i.AdStudiesDeleteAndReloadStudyReducerPlugin = e),
      (i.AdStudiesEndAndReloadStudyReducerPlugin = l),
      (i.AdStudiesCancelABTestStudyReducerPlugin = s),
      (i.AdStudiesCreateStudyReducerPlugin = u),
      (i.AdStudiesReloadStudiesReducerPlugin = c),
      (i.AdStudiesUpdateStudyReducerPlugin = d));
  },
  66,
);
