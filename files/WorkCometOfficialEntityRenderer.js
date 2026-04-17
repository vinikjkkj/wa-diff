__d(
  "WorkCometOfficialEntityRenderer",
  [
    "GeminiOfficialGroupBage.react",
    "WorkCometOfficialEntityRenderer_entity.graphql",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    e !== void 0 || (e = n("WorkCometOfficialEntityRenderer_entity.graphql"));
    function c(e, t) {
      return t.work_official_status !== "OFFICIAL"
        ? e
        : u.jsxs(u.Fragment, {
            children: [
              e,
              u.jsx("span", {
                className: "x3nfvp2 xaso8d8 x1n2onr6 x11njtxf",
                children: u.jsx(r("GeminiOfficialGroupBage.react"), {
                  size: 12,
                }),
              }),
            ],
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
