__d(
  "AdsCopyCopyErrorDataReducerPlugin",
  [
    "fbt",
    "AdsDuplicationLargeCopyUsabilityGKUtils",
    "AdsError",
    "adsFormatDuplicationErrorMessage",
    "adsFormatErrorMessage",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = o(
              "AdsDuplicationLargeCopyUsabilityGKUtils",
            ).shouldEnableDuplicationFailureUsability({
              exposure_source: "FAILURE_TABLE_BANNER",
            }),
            a = e
              ? r("adsFormatDuplicationErrorMessage")(n.error)
              : r("adsFormatErrorMessage")(n.error),
            i = r("AdsError").createError(
              "copy",
              s._(/*BTDS*/ "Failed to duplicate items: {error message}", [
                s._param("error message", a),
              ]),
            );
          return (
            e && (i.statusOverride = "error"),
            t.remove(i.key).set(i.key, i)
          );
        },
      },
      u = e;
    l.default = u;
  },
  226,
);
