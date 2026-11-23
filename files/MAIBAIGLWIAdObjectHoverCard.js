__d(
  "MAIBAIGLWIAdObjectHoverCard",
  [
    "fbt",
    "AdsALSubsurface",
    "AdsALSurface",
    "AdsALSurfaceMAIBAPlugin",
    "GeoBaseSpacingLayout.react",
    "GeoBaseText.react",
    "GeoFlexbox.react",
    "GeoIcon.react",
    "GeoMediaItem.react",
    "GeoMediaItemGroup.react",
    "GeoStatusIndicator.react",
    "GeoToggleButton.react",
    "GeoToggleButtonGroup.react",
    "IPB4BImage.react",
    "MAIBAAdObjectHoverCardGlimmer.react",
    "MAIBASubsurfaces",
    "emptyFunction",
    "geoMargin",
    "meta-brand-checkmark-filled-16",
    "meta-brand-mountain-square-filled-24",
    "meta-brand-plus-filled-16",
    "meta-brand-us-dollar-circle-filled-12",
    "react",
    "stylex",
    "useGeoTheme",
    "vulture",
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
      return e === "ACTIVE"
        ? { label: s._(/*BTDS*/ ""), indicatorStatus: "active" }
        : e === "COMPLETED"
          ? { label: s._(/*BTDS*/ ""), indicatorStatus: "inactive" }
          : e === "INACTIVE" || e === "OFF"
            ? { label: s._(/*BTDS*/ ""), indicatorStatus: "inactive" }
            : e === "PENDING"
              ? { label: s._(/*BTDS*/ ""), indicatorStatus: "warning" }
              : e === "ERROR" || e === "WARNING"
                ? { label: s._(/*BTDS*/ ""), indicatorStatus: "warning" }
                : { label: s._(/*BTDS*/ ""), indicatorStatus: "inactive" };
    }
    function p(t) {
      var n = t.adObjectData,
        a = t.isSelected,
        i = t.onDeselect,
        l = t.onSelect;
      r("vulture")("tsqPRDu1fjLTxbgvPvOx23f_cwI=");
      var u = n.bodyText,
        p = n.datetimeText,
        _ = n.deliveryStatus,
        f = n.id,
        g = n.name,
        h = n.spendMetaText,
        y = n.spendTitleText,
        C = n.thumbnailUrls,
        b = r("useGeoTheme")(),
        v = b.selectIconColor,
        S = b.selectTextColor,
        R = _ != null ? m(_) : null;
      return c.jsx(r("AdsALSurface"), {
        subsurface: o("AdsALSubsurface").getDynamicSubsurface(
          r("MAIBASubsurfaces").AD_OBJECT_HOVER_CARD,
        ),
        surface: r("AdsALSurfaceMAIBAPlugin"),
        uiEventMetadata: { click: { asset_name: g, asset_id: f } },
        children: c.jsxs(r("GeoFlexbox.react"), {
          direction: "column",
          gap: 12,
          xstyle: S({ color: "value" }),
          children: [
            c.jsxs(r("GeoFlexbox.react"), {
              alignItems: "center",
              gap: 18,
              grow: 1,
              children: [
                c.jsx(r("GeoBaseSpacingLayout.react"), {
                  children:
                    C == null
                      ? c.jsx(
                          o("MAIBAAdObjectHoverCardGlimmer.react")
                            .MAIBAAdObjectThumbnailGlimmer,
                          { adObjectLevel: "Ad" },
                        )
                      : C.length > 0
                        ? c.jsx(r("GeoMediaItemGroup.react"), {
                            size: 48,
                            children: c.jsx(r("GeoMediaItem.react"), {
                              fit: "cover",
                              media: c.jsx(r("IPB4BImage.react"), {
                                src: C[0],
                              }),
                              size: 48,
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
                                    v({ color: "default", isDisabled: !0 }),
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
                      S({ color: "value" }),
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
                          children: u != null && u !== "" ? u : g,
                        }),
                        p != null &&
                          c.jsxs(r("GeoBaseText.react"), {
                            color: "placeholder",
                            display: "block",
                            size: "value",
                            children: [
                              c.jsx(r("GeoBaseText.react"), {
                                color: "placeholder",
                                size: "value",
                                weight: "bold",
                                children: s._(/*BTDS*/ ""),
                              }),
                              " ",
                              p,
                            ],
                          }),
                      ],
                    },
                  ),
                ),
              ],
            }),
            c.jsxs(r("GeoFlexbox.react"), {
              alignItems: "center",
              gap: 12,
              children: [
                R != null
                  ? c.jsxs(r("GeoFlexbox.react"), {
                      alignItems: "center",
                      gap: 6,
                      children: [
                        c.jsx(r("GeoStatusIndicator.react"), {
                          status: R.indicatorStatus,
                        }),
                        c.jsx(r("GeoBaseText.react"), {
                          color: "inherit",
                          size: "value",
                          weight: "bold",
                          children: R.label,
                        }),
                      ],
                    })
                  : null,
                y != null
                  ? c.jsxs(r("GeoFlexbox.react"), {
                      alignItems: "center",
                      shrink: 0,
                      xstyle: S({ color: "value" }),
                      children: [
                        c.jsx(r("GeoIcon.react"), {
                          color: "placeholder",
                          icon: o("meta-brand-us-dollar-circle-filled-12")
                            .metaBrandUsDollarCircleFilled12,
                        }),
                        c.jsx(r("GeoBaseText.react"), {
                          color: "inherit",
                          size: "value",
                          xstyle: r("geoMargin").start4,
                          children: h != null ? y + " " + h : y,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            c.jsx(r("GeoFlexbox.react"), {
              gap: 12,
              grow: 1,
              children: c.jsx(r("GeoToggleButtonGroup.react"), {
                onChange: r("emptyFunction"),
                value: a ? f : null,
                xstyle: d.buttonGroup,
                children: c.jsx(r("GeoToggleButton.react"), {
                  "data-testid": void 0,
                  grow: "fill",
                  icon: a
                    ? o("meta-brand-checkmark-filled-16")
                        .metaBrandCheckmarkCheckmarkFilled16
                    : o("meta-brand-plus-filled-16").metaBrandPlusPlusFilled16,
                  label: s._(/*BTDS*/ ""),
                  onClick: function () {
                    a ? i() : l();
                  },
                  value: f,
                }),
              }),
            }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
