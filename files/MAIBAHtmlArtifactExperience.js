__d(
  "MAIBAHtmlArtifactExperience",
  [
    "fbt",
    "GeoButton.react",
    "GeoFlexbox.react",
    "GeoHeading.react",
    "MAIBAWorkspaceCanvasContext",
    "MAIBAWorkspaceTypes",
    "react",
    "useGeoTheme",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        root: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
        header: {
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          width: "xh8yej3",
          $$css: !0,
        },
        content: {
          flexGrow: "x1iyjqo2",
          minHeight: "x2lwn1j",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.html,
        n = e.title,
        a = o("MAIBAWorkspaceCanvasContext").useMAIBAWorkspaceCanvas(),
        i = a.closeCanvas,
        l = r("useGeoTheme")(),
        d = l.selectBorderColor,
        m = l.selectBorderWidth,
        p = l.selectSpacing;
      return u.jsxs(r("GeoFlexbox.react"), {
        direction: "column",
        xstyle: c.root,
        children: [
          u.jsxs(r("GeoFlexbox.react"), {
            alignItems: "center",
            direction: "row",
            justifyContent: "space-between",
            xstyle: [
              c.header,
              p({
                bounds: "internal",
                context: "component",
                positions: ["vertical"],
                target: "coarse",
              }),
              p({
                bounds: "internal",
                context: "container",
                positions: ["horizontal"],
                relation: "component",
              }),
              d({ color: "divider" }),
              m({ context: "divider" }),
            ],
            children: [
              u.jsx(r("GeoHeading.react"), {
                level: 4,
                children: n !== "" ? n : s._(/*BTDS*/ ""),
              }),
              u.jsx(r("GeoButton.react"), {
                label: s._(/*BTDS*/ ""),
                onClick: i,
                variant: "default",
              }),
            ],
          }),
          u.jsx(r("GeoFlexbox.react"), {
            direction: "column",
            xstyle: c.content,
            children: u.jsx("iframe", {
              className:
                "x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1lliihq x5yr21d xh8yej3",
              "data-testid": void 0,
              referrerPolicy: "no-referrer",
              sandbox: "allow-scripts allow-forms allow-popups",
              srcDoc: t,
              title: n !== "" ? n : String(s._(/*BTDS*/ "")),
            }),
          }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = {
        loadExperienceEntryPoint: function (t, n) {
          var e = o("MAIBAWorkspaceTypes").parseAttributesJSON(
            n.attributes_json,
          ).html;
          return e == null || e === ""
            ? null
            : {
                dispose: function () {},
                render: function (n) {
                  var t,
                    r,
                    a = n.entity,
                    i = o("MAIBAWorkspaceTypes").parseAttributesJSON(
                      a.attributes_json,
                    ),
                    l = (t = i.html) != null ? t : e;
                  return u.jsx(d, {
                    html: l,
                    title: (r = a.title) != null ? r : "",
                  });
                },
              };
        },
      },
      p = m;
    l.default = p;
  },
  226,
);
