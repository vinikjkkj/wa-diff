__d(
  "WAWebBizAdCreationTargetingModalAudienceNameComponent.react",
  ["fbt", "WDSTextField.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.audienceName,
        n = e.onAudienceNameChange,
        o = c(!1),
        a = o[0],
        i = o[1],
        l = t.trim(),
        d = a && l.length === 0,
        m = function () {
          i(!0);
        };
      return u.jsx("div", {
        className: "xh8yej3 xvpt6g3",
        children: u.jsx(r("WDSTextField.react"), {
          label: s._(/*BTDS*/ "Audience name"),
          value: t,
          onValueChange: n,
          onBlur: m,
          error: d,
          errorText: d ? s._(/*BTDS*/ "An audience name is required") : void 0,
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
