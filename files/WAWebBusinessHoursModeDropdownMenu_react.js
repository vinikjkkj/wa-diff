__d(
  "WAWebBusinessHoursModeDropdownMenu.react",
  ["fbt", "WAWebDropdownItem.react", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
            action: function () {
              return (e.onModeChange("specific_hours"), !0);
            },
            children: u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              children: s._(/*BTDS*/ "Specific hours"),
            }),
          }),
          u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
            action: function () {
              return (e.onModeChange("open_24h"), !0);
            },
            children: u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              children: s._(/*BTDS*/ "Open 24 hours"),
            }),
          }),
          u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
            action: function () {
              return (e.onModeChange("appointment_only"), !0);
            },
            children: u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              children: s._(/*BTDS*/ "By appointment only"),
            }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
