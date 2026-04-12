__d(
  "WAWebBizAdManagementConversationsCell.react",
  ["WAWebL10N", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.conversations;
      return s.jsx(r("WDSText.react"), {
        type: "Body1",
        colorName: "contentDefault",
        maxLines: 1,
        children: r("WAWebL10N").d(t),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
