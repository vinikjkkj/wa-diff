__d(
  "AdsDraftAppendPublishErrorDataReducerPlugin",
  ["fbt", "AdsError", "adsFormatErrorMessage"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = r("AdsError").createError(
            "draft_append_error",
            s._(
              /*BTDS*/ "Unable to publish some campaigns, ad sets or ads: {error message}.",
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
