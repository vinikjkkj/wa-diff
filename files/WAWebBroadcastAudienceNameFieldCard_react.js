__d(
  "WAWebBroadcastAudienceNameFieldCard.react",
  [
    "WAWebBizAdCard.react",
    "WAWebBizBroadcastsAudienceSelectionStrings",
    "WAWebBroadcastAudienceNameField.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = o(
            "WAWebBizBroadcastsAudienceSelectionStrings",
          ).getAudienceNameHeader()),
          (t[0] = n))
        : (n = t[0]);
      var a;
      return (
        t[1] !== e
          ? ((a = s.jsx(r("WAWebBizAdCard.react"), {
              header: n,
              headerTestid: "biz-broadcasts-upsert-audience-name-card-header",
              children: s.jsx(
                r("WAWebBroadcastAudienceNameField.react"),
                babelHelpers.extends({}, e),
              ),
            })),
            (t[1] = e),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    l.default = u;
  },
  98,
);
