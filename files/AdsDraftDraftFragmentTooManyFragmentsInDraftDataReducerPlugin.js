__d(
  "AdsDraftDraftFragmentTooManyFragmentsInDraftDataReducerPlugin",
  ["fbt", "AdsError", "adsFormatErrorMessage"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = r("AdsError").createError(
            "draft_fragment_creation",
            s._(
              /*BTDS*/ "Unable to create or modify your campaign, ad set or ad: {error message}.",
              [s._param("error message", r("adsFormatErrorMessage")(n.error))],
            ),
          );
          return t.remove(e.key).set(e.key, e);
        },
      },
      u = e;
    l.default = u;
  },
  226,
);
