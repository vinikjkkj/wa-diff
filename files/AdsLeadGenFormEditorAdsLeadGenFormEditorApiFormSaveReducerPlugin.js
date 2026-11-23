__d(
  "AdsLeadGenFormEditorAdsLeadGenFormEditorApiFormSaveReducerPlugin",
  ["AdsLeadGenFormEditorDataManager", "AdsLeadGenFormEditorProviderUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return o("AdsLeadGenFormEditorProviderUtils").updateForm(
            t,
            n.formID,
            function (e) {
              var t = e.set("status", "DRAFT");
              return (
                r("AdsLeadGenFormEditorDataManager").saveForm(
                  n.draftFormID,
                  t,
                  n.pageID,
                ),
                t
              );
            },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
