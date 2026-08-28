__d(
  "adsFormatDuplicationErrorMessage",
  ["fbt", "GeoLink.react", "adsFormatErrorMessage", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return (e == null ? void 0 : e.code) === 1 &&
        (e == null ? void 0 : e.error_subcode) === 1357045
        ? s._(
            /*BTDS*/ "Try duplicating fewer items or use Marketing API to {=m2}.",
            [
              s._implicitParam(
                "=m2",
                u.jsx(r("GeoLink.react"), {
                  href: "https://developers.facebook.com/docs/graph-api/asynchronous-batch-requests",
                  target: "_blank",
                  children: s._(/*BTDS*/ "batch your duplications"),
                }),
              ),
            ],
          )
        : (e == null ? void 0 : e.error_subcode) == null
          ? r("adsFormatErrorMessage")(e, !0)
          : r("adsFormatErrorMessage")(e);
    }
    l.default = c;
  },
  226,
);
