__d(
  "WAWebBroadcastAudienceNameFieldCard.react",
  [
    "WAWebBizAdCard.react",
    "WAWebBizBroadcastsAudienceSelectionStrings",
    "WAWebBroadcastAudienceNameField.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return s.jsx(r("WAWebBizAdCard.react"), {
        header: o(
          "WAWebBizBroadcastsAudienceSelectionStrings",
        ).getAudienceNameHeader(),
        headerTestid: "biz-broadcasts-upsert-audience-name-card-header",
        children: s.jsx(
          r("WAWebBroadcastAudienceNameField.react"),
          babelHelpers.extends({}, e),
        ),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
