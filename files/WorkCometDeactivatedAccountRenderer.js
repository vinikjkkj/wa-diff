__d(
  "WorkCometDeactivatedAccountRenderer",
  [
    "fbt",
    "ix",
    "FDSIcon.react",
    "WorkCometDeactivatedAccountRenderer_user.graphql",
    "fbicon",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = c || (c = o("react"));
    e !== void 0 || (e = n("WorkCometDeactivatedAccountRenderer_user.graphql"));
    function m(e, t) {
      var n;
      return ((n = t.work_info) == null ? void 0 : n.is_active_account) === !1
        ? d.jsxs(d.Fragment, {
            children: [
              d.jsx("span", { className: "xi81zsa", children: e }),
              d.jsx("span", {
                className: "x3nfvp2 xaso8d8 x1n2onr6 x11njtxf",
                children: d.jsx(r("FDSIcon.react"), {
                  alt: s._(/*BTDS*/ "Deactivated account"),
                  color: "secondary",
                  icon: o("fbicon")._(u("648667"), 12),
                }),
              }),
            ],
          })
        : e;
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
