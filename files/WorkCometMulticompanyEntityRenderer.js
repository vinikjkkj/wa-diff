__d(
  "WorkCometMulticompanyEntityRenderer",
  [
    "fbt",
    "ix",
    "FDSIcon.react",
    "GroupsGeminiGuestBadge.react",
    "GroupsGeminiMCGExternalMemberBadge.react",
    "WorkCometMulticompanyEntityRenderer_entity.graphql",
    "fbicon",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = c || (c = o("react")),
      m = { mcgIcon: { verticalAlign: "x11njtxf", $$css: !0 } };
    e !== void 0 ||
      (e = n("WorkCometMulticompanyEntityRenderer_entity.graphql"));
    function p(e) {
      var t,
        n = e.__typename === "Group",
        a = e.is_multi_company_group === !0;
      if (n && !a) return null;
      var i = e.__typename === "User";
      if (i) {
        var l;
        switch ((l = e.work_foreign_entity_info) == null ? void 0 : l.type) {
          case "LIMITED":
            return d.jsx(r("GroupsGeminiGuestBadge.react"), {});
          case "FOREIGN":
            return d.jsx(r("GroupsGeminiMCGExternalMemberBadge.react"), {});
        }
      }
      switch ((t = e.work_foreign_entity_info) == null ? void 0 : t.type) {
        case "LIMITED":
          return d.jsx(r("GroupsGeminiGuestBadge.react"), {});
        case "FOREIGN":
          return d.jsx(r("FDSIcon.react"), {
            alt: s._(/*BTDS*/ "Not part of your organization"),
            color: "primary",
            icon: o("fbicon")._(u("785426"), 12),
            xstyle: m.mcgIcon,
          });
        default:
          return null;
      }
    }
    function _(e, t) {
      var n = p(t);
      return d.jsxs(d.Fragment, {
        children: [
          e,
          n &&
            d.jsx("span", {
              className: "x1rg5ohu x1n2onr6 x11njtxf xdwrcjd",
              children: n,
            }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
