__d(
  "WAWebBizAdManagementCostPerConversationCell.react",
  ["WDSText.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.conversations,
        n = e.formattedSpent,
        o = n.replace(/[^0-9.,]/g, "");
      o.includes(",") && !o.includes(".")
        ? (o = o.replace(",", "."))
        : o.includes(",") && o.includes(".") && (o = o.replace(/,/g, ""));
      var a = parseFloat(o) || 0,
        i = "\u2014";
      if (t > 0 && a > 0) {
        var l = a / t,
          u = n.replace(/[0-9.,\s]/g, "").trim() || "$";
        i = "" + u + l.toFixed(2);
      }
      return s.jsx(r("WDSText.react"), {
        type: "Body1",
        colorName: "contentDefault",
        maxLines: 1,
        children: i,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
