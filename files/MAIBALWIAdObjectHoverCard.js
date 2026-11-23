__d(
  "MAIBALWIAdObjectHoverCard",
  [
    "fbt",
    "AdsALSubsurface",
    "AdsALSurface",
    "AdsALSurfaceMAIBAPlugin",
    "BizKitAdStatusUtils",
    "GeoBaseSpacingLayout.react",
    "GeoBaseText.react",
    "GeoButton.react",
    "GeoFlexbox.react",
    "GeoIcon.react",
    "GeoMediaItem.react",
    "GeoMediaItemGroup.react",
    "GeoPill.react",
    "GeoToggleButton.react",
    "GeoToggleButtonGroup.react",
    "GeoVectorIcon.react",
    "IPB4BImage.react",
    "MAIBAAdObjectHoverCardGlimmer.react",
    "MAIBAAssetUtils",
    "MAIBASubsurfaces",
    "emptyFunction",
    "geoMargin",
    "meta-brand-checkmark-filled-16",
    "meta-brand-eye-filled-16",
    "meta-brand-mountain-square-filled-24",
    "meta-brand-plus-filled-16",
    "react",
    "stylex",
    "useGeoTheme",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        container: {
          flexGrow: "x1iyjqo2",
          width: "xh8yej3",
          minWidth: "x12rczxh",
          $$css: !0,
        },
        buttonGroup: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "x1r8uery",
          $$css: !0,
        },
      };
    function m(e) {
      return e === "Campaign"
        ? s._(/*BTDS*/ "")
        : e === "Ad set"
          ? s._(/*BTDS*/ "")
          : e === "Ad"
            ? s._(/*BTDS*/ "")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function p(t) {
      var n = t.adObjectData,
        a = t.isSelected,
        i = t.onDeselect,
        l = t.onSelect,
        u = t.onViewInTable,
        p = n.adStatus,
        _ = n.bodyText,
        f = n.id,
        g = n.level,
        h = n.name,
        y = n.thumbnailUrls,
        C = r("useGeoTheme")(),
        b = C.selectIconColor,
        v = C.selectTextColor,
        S = p != null ? o("BizKitAdStatusUtils").getAdStatusProps(p) : null;
      return c.jsx(r("AdsALSurface"), {
        subsurface: o("AdsALSubsurface").getDynamicSubsurface(
          r("MAIBASubsurfaces").AD_OBJECT_HOVER_CARD,
        ),
        surface: r("AdsALSurfaceMAIBAPlugin"),
        uiEventMetadata: { click: { asset_name: h, asset_id: f } },
        children: c.jsxs(r("GeoFlexbox.react"), {
          direction: "column",
          gap: 12,
          xstyle: v({ color: "value" }),
          children: [
            c.jsxs(r("GeoFlexbox.react"), {
              alignItems: "center",
              gap: 18,
              grow: 1,
              children: [
                c.jsx(r("GeoBaseSpacingLayout.react"), {
                  children:
                    y == null
                      ? c.jsx(
                          o("MAIBAAdObjectHoverCardGlimmer.react")
                            .MAIBAAdObjectThumbnailGlimmer,
                          { adObjectLevel: g },
                        )
                      : y.length > 0
                        ? c.jsx(r("GeoMediaItemGroup.react"), {
                            size: 48,
                            children: y.map(function (e, t) {
                              return c.jsx(
                                r("GeoMediaItem.react"),
                                {
                                  fit: "cover",
                                  media: c.jsx(r("IPB4BImage.react"), {
                                    src: e,
                                  }),
                                  size: 16,
                                },
                                t,
                              );
                            }),
                          })
                        : c.jsx(r("GeoMediaItemGroup.react"), {
                            size: 48,
                            children: c.jsx(r("GeoMediaItem.react"), {
                              fit: "cover",
                              media: c.jsx(
                                "div",
                                babelHelpers.extends(
                                  {},
                                  (e || (e = r("stylex"))).props(
                                    b({ color: "default", isDisabled: !0 }),
                                  ),
                                  {
                                    children: c.jsx(r("GeoIcon.react"), {
                                      color: "inherit",
                                      icon: o(
                                        "meta-brand-mountain-square-filled-24",
                                      )
                                        .metaBrandMountainSquarePhotoSquareFilled24,
                                    }),
                                  },
                                ),
                              ),
                              ratio: "square",
                              size: 32,
                              xstyle: r("geoMargin").top4,
                            }),
                          }),
                }),
                c.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      d.container,
                      v({ color: "value" }),
                    ),
                    {
                      children: [
                        c.jsx(r("GeoBaseText.react"), {
                          color: "inherit",
                          display: "block",
                          maxLines: 2,
                          overflowWrap: "break-word",
                          size: "interactive",
                          whiteSpace: "nowrap",
                          children: h,
                        }),
                        _ != null &&
                          _.length > 0 &&
                          c.jsx(r("GeoBaseText.react"), {
                            color: "placeholder",
                            display: "block",
                            maxLines: 2,
                            overflowWrap: "break-word",
                            size: "value",
                            children: _.join(" \xB7 "),
                          }),
                      ],
                    },
                  ),
                ),
              ],
            }),
            c.jsxs(r("GeoFlexbox.react"), {
              alignItems: "center",
              children: [
                S != null
                  ? c.jsx("div", {
                      className: "x2aouup x2lah0s xbmvrgn",
                      children: c.jsx(r("GeoPill.react"), {
                        label: S.label,
                        status: S.status,
                        value: S.label,
                      }),
                    })
                  : null,
                c.jsxs(r("GeoFlexbox.react"), {
                  alignItems: "center",
                  shrink: 0,
                  xstyle: v({ color: "value" }),
                  children: [
                    c.jsx(r("GeoVectorIcon.react"), {
                      color: "placeholder",
                      icon: o("MAIBAAssetUtils").getAssetIcon(g),
                      size: 12,
                    }),
                    c.jsx(r("GeoBaseText.react"), {
                      color: "inherit",
                      size: "value",
                      xstyle: r("geoMargin").start4,
                      children: m(g),
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs(r("GeoFlexbox.react"), {
              gap: 12,
              grow: 1,
              children: [
                c.jsx(r("GeoToggleButtonGroup.react"), {
                  onChange: r("emptyFunction"),
                  value: a ? f : null,
                  xstyle: d.buttonGroup,
                  children: c.jsx(r("GeoToggleButton.react"), {
                    "data-testid": void 0,
                    grow: "fill",
                    icon: a
                      ? o("meta-brand-checkmark-filled-16")
                          .metaBrandCheckmarkCheckmarkFilled16
                      : o("meta-brand-plus-filled-16")
                          .metaBrandPlusPlusFilled16,
                    label: a ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
                    onClick: function () {
                      a ? i() : l();
                    },
                    value: f,
                  }),
                }),
                u != null &&
                  c.jsx(r("GeoButton.react"), {
                    "data-testid": void 0,
                    grow: "fill",
                    icon: o("meta-brand-eye-filled-16").metaBrandEyeEyeFilled16,
                    label: s._(/*BTDS*/ ""),
                    onClick: u,
                    variant: "default",
                    xstyle: d.buttonGroup,
                  }),
              ],
            }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
