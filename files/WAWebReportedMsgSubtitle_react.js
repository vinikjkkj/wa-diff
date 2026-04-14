__d(
  "WAWebReportedMsgSubtitle.react",
  ["fbt", "WAWebText.react", "WAWebUISpacing", "react", "stylex"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = { reportedBy: { fontSize: "x1f6kntn", color: "xhslqc4", $$css: !0 } };
    function m(t) {
      var n,
        a = t.msg,
        i = t.onMsgFooterClick,
        l = (n = a.reporterJidList) == null ? void 0 : n.length,
        u = s._(
          /*BTDS*/ '_j{"*":"{number_of_reporter} members","_1":"1 member"}',
          [s._plural(l, "number_of_reporter")],
        ),
        m = c.jsx(o("WAWebText.react").WAWebTextSmall, {
          as: "span",
          children: s._(/*BTDS*/ "Sent for review by {number_of_members_str}", [
            s._param(
              "number_of_members_str",
              c.jsx(o("WAWebText.react").WAWebClickableText, {
                color: "teal",
                onClick: function () {
                  return i == null ? void 0 : i(a);
                },
                children: u,
              }),
            ),
          ]),
        }),
        p = c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              d.reportedBy,
              o("WAWebUISpacing").uiMargin.start36,
              o("WAWebUISpacing").uiMargin.top8,
            ),
            { children: m },
          ),
        );
      return c.jsx(c.Fragment, { children: p });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
