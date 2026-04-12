__d(
  "WAWebAdsManagementFallback.react",
  ["fbt", "WAWebAdsManagementLoadError.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onClickRetry,
        n = s._(/*BTDS*/ "Something went wrong, try again.");
      return u.jsx(r("WAWebAdsManagementLoadError.react"), {
        onClickRetry: t,
        errorText: n,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
