__d(
  "MessageMarketingClientAdPreviewOverlay",
  [
    "fbt",
    "CenteredContainer.react",
    "CurrentUser",
    "GeoHeading.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { root: { width: "x1m258z3", $$css: !0 } };
    function d() {
      return r("CurrentUser").isEmployee()
        ? u.jsxs(r("CenteredContainer.react"), {
            horizontal: !0,
            vertical: !0,
            xstyle: c.root,
            children: [
              u.jsx(r("GeoHeading.react"), {
                level: 4,
                textAlign: "center",
                children: s._(/*BTDS*/ ""),
              }),
              u.jsx("span", { children: s._(/*BTDS*/ "") }),
              u.jsx("span", {
                children: s._(/*BTDS*/ "", [
                  s._param(
                    "link",
                    u.jsx("a", {
                      href: "https://fb.workplace.com/groups/872742301123954/",
                      target: "_blank",
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                ]),
              }),
            ],
          })
        : null;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
