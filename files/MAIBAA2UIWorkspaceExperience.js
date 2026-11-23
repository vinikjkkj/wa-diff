__d(
  "MAIBAA2UIWorkspaceExperience",
  [
    "fbt",
    "GeoButton.react",
    "GeoFlexbox.react",
    "GeoHeading.react",
    "MAIBAA2UIActionSerializer",
    "MAIBAA2UIComponentRegistry",
    "MAIBAA2UIGeodesicComponents",
    "MAIBAA2UIParser",
    "MAIBAA2UIRenderer.react",
    "MAIBAA2UIv09ActionSerializer",
    "MAIBAA2UIv09ComponentRegistry",
    "MAIBAA2UIv09GeodesicComponents",
    "MAIBAWorkspaceCanvasContext",
    "MAIBAWorkspaceTypes",
    "react",
    "useGeoTheme",
    "useMAIBASendMessageFromInsideChat",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useMemo,
      p = {
        content: {
          flexGrow: "x1iyjqo2",
          minHeight: "x2lwn1j",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
        header: {
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          width: "xh8yej3",
          $$css: !0,
        },
        root: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
      };
    function _(e) {
      var t = e.isStreaming,
        n = e.rawJson,
        a = e.title,
        i = r("useMAIBASendMessageFromInsideChat")(),
        l = o("MAIBAWorkspaceCanvasContext").useMAIBAWorkspaceCanvas(),
        c = l.closeCanvas,
        _ = r("useGeoTheme")(),
        f = _.selectBorderColor,
        g = _.selectBorderWidth,
        h = _.selectSpacing,
        y = m(
          function () {
            return o("MAIBAA2UIParser").parseA2UIPayload(n, t);
          },
          [n, t],
        ),
        C = d(
          function (e) {
            if (y != null) {
              var t;
              if (y.kind === "v09") {
                if ("name" in e) return;
                t = o("MAIBAA2UIv09ActionSerializer").serializeA2UIv09Action(
                  e,
                  y.state.dataModel,
                  y.state.surfaceId,
                );
              } else {
                if (!("name" in e)) return;
                t = o("MAIBAA2UIActionSerializer").serializeA2UIAction(
                  e,
                  y.state.dataModel,
                  y.state.surfaceId,
                );
              }
              i({
                hideUserMessage: !0,
                isSentFromOutOfChat: !1,
                message: "[System: A2UI] " + t,
                originComponent: "MAIBAA2UIWorkspaceExperience",
              });
            }
          },
          [y, i],
        );
      return y == null
        ? null
        : u.jsxs(r("GeoFlexbox.react"), {
            direction: "column",
            xstyle: p.root,
            children: [
              u.jsxs(r("GeoFlexbox.react"), {
                alignItems: "center",
                direction: "row",
                justifyContent: "space-between",
                xstyle: [
                  p.header,
                  h({
                    bounds: "internal",
                    context: "component",
                    positions: ["vertical"],
                    target: "coarse",
                  }),
                  h({
                    bounds: "internal",
                    context: "container",
                    positions: ["horizontal"],
                    relation: "component",
                  }),
                  f({ color: "divider" }),
                  g({ context: "divider" }),
                ],
                children: [
                  u.jsx(r("GeoHeading.react"), {
                    level: 4,
                    children: a !== "" ? a : s._(/*BTDS*/ ""),
                  }),
                  u.jsx(r("GeoButton.react"), {
                    label: s._(/*BTDS*/ ""),
                    onClick: c,
                    variant: "default",
                  }),
                ],
              }),
              u.jsx(r("GeoFlexbox.react"), {
                direction: "column",
                xstyle: [
                  p.content,
                  h({
                    bounds: "internal",
                    context: "container",
                    relation: "component",
                  }),
                ],
                children: u.jsx(
                  o("MAIBAA2UIComponentRegistry")
                    .MAIBAA2UIComponentRegistryProvider,
                  {
                    components: r("MAIBAA2UIGeodesicComponents"),
                    children: u.jsx(
                      o("MAIBAA2UIv09ComponentRegistry")
                        .MAIBAA2UIv09ComponentRegistryProvider,
                      {
                        components: r("MAIBAA2UIv09GeodesicComponents"),
                        children: u.jsx(
                          o("MAIBAA2UIRenderer.react").MAIBAA2UIRenderer,
                          {
                            isDisabled: !1,
                            isStreaming: t,
                            onAction: C,
                            state: y,
                          },
                        ),
                      },
                    ),
                  },
                ),
              }),
            ],
          });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = {
        loadExperienceEntryPoint: function (t, n) {
          var e = o("MAIBAWorkspaceTypes").parseAttributesJSON(
            n.attributes_json,
          ).a2ui_json;
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
                    l = (t = i.a2ui_json) != null ? t : e,
                    s = i.is_streaming === "true";
                  return u.jsx(_, {
                    isStreaming: s,
                    rawJson: l,
                    title: (r = a.title) != null ? r : "",
                  });
                },
              };
        },
      },
      g = f;
    l.default = g;
  },
  226,
);
