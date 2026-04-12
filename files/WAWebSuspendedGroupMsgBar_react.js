__d(
  "WAWebSuspendedGroupMsgBar.react",
  ["fbt", "WAWebFlex.react", "WAWebMsgBarActions", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.entityId,
        n = u.jsx("span", {
          role: "button",
          onClick: function () {
            return o("WAWebMsgBarActions").handleContactUs(t);
          },
          className: "x1ph7ams",
          "data-testid": void 0,
          children: s._(/*BTDS*/ "WhatsApp Support"),
        });
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        children: u.jsx("span", {
          className: "x126k92a",
          children: s._(
            /*BTDS*/ "This group is no longer available. Please contact {support} for help.",
            [s._param("support", n)],
          ),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
