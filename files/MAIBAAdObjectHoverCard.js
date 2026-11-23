__d(
  "MAIBAAdObjectHoverCard",
  [
    "fbt",
    "AdsALSubsurface",
    "AdsALSurface",
    "AdsALSurfaceMAIBAPlugin",
    "AdsDeliveryStatusInfoSubstatusPluginResolver",
    "AdsObjectTypes",
    "AdsPEDeliveryStatusCell.react",
    "AdsPEDeliveryStatusCellSourceConstants",
    "GeoBaseSpacingLayout.react",
    "GeoBaseText.react",
    "GeoButton.react",
    "GeoFlexbox.react",
    "GeoIcon.react",
    "GeoMediaItem.react",
    "GeoMediaItemGroup.react",
    "GeoToggleButton.react",
    "GeoToggleButtonGroup.react",
    "GeoVectorIcon.react",
    "IPB4BImage.react",
    "MAIBAAdObjectHideSelectContext",
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
      d = u.useContext,
      m = {
        container: {
          flexGrow: "x1iyjqo2",
          width: "xh8yej3",
          minWidth: "xeuugli",
          $$css: !0,
        },
        buttonGroup: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "x1r8uery",
          $$css: !0,
        },
      };
    function p(e) {
      switch (e) {
        case "Campaign":
          return s._(/*BTDS*/ "");
        case "Ad set":
          return s._(/*BTDS*/ "");
        case "Ad":
          return s._(/*BTDS*/ "");
      }
    }
    function _(t) {
      var n,
        a = t.adAccount,
        i = t.adObjectData,
        l = t.isSelected,
        u = t.onDeselect,
        _ = t.onSelect,
        f = t.onViewInTable,
        g = i.campaignGroupID,
        h = i.deliveryStatusInfo,
        y = i.id,
        C = i.level,
        b = i.name,
        v = i.thumbnailUrls,
        S = r("useGeoTheme")(),
        R = S.selectIconColor,
        L = S.selectTextColor,
        E = d(r("MAIBAAdObjectHideSelectContext"));
      return c.jsx(r("AdsALSurface"), {
        subsurface: o("AdsALSubsurface").getDynamicSubsurface(
          r("MAIBASubsurfaces").AD_OBJECT_HOVER_CARD,
        ),
        surface: r("AdsALSurfaceMAIBAPlugin"),
        uiEventMetadata: { click: { asset_name: b, asset_id: y } },
        children: c.jsxs(r("GeoFlexbox.react"), {
          direction: "column",
          gap: 12,
          xstyle: L({ color: "value" }),
          children: [
            c.jsxs(r("GeoFlexbox.react"), {
              alignItems: "center",
              gap: 18,
              grow: 1,
              children: [
                c.jsx(r("GeoBaseSpacingLayout.react"), {
                  children:
                    v == null
                      ? c.jsx(
                          o("MAIBAAdObjectHoverCardGlimmer.react")
                            .MAIBAAdObjectThumbnailGlimmer,
                          { adObjectLevel: C },
                        )
                      : v.length > 0
                        ? c.jsx(r("GeoMediaItemGroup.react"), {
                            size: 48,
                            children: v.map(function (e, t) {
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
                                    R({ color: "default", isDisabled: !0 }),
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
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      m.container,
                      L({ color: "value" }),
                    ),
                    {
                      children: c.jsx(r("GeoBaseText.react"), {
                        color: "inherit",
                        display: "block",
                        maxLines: 3,
                        overflowWrap: "break-word",
                        size: "interactive",
                        whiteSpace: "nowrap",
                        children: b,
                      }),
                    },
                  ),
                ),
              ],
            }),
            c.jsxs(r("GeoFlexbox.react"), {
              alignItems: "center",
              children: [
                a && h
                  ? c.jsx("div", {
                      className:
                        "x2aouup x2lah0s x6ikm8r x10wlt62 xlyipyv xuxw1ft xbmvrgn",
                      children: c.jsx(r("AdsPEDeliveryStatusCell.react"), {
                        accountID: a.account_id,
                        adAccount: a,
                        adObjectID: y,
                        adObjectLevel: r("AdsObjectTypes").CAMPAIGN,
                        deliveryStatusInfo: h,
                        isInteractive: !0,
                        linkTargetAdObjectIDSource: {
                          campaignGroupID:
                            C === "Campaign" ? i.id : g != null ? g : "",
                          campaignID:
                            C === "Ad set" || C === "Ad" ? i.id : void 0,
                        },
                        source: r("AdsPEDeliveryStatusCellSourceConstants")
                          .MAIN_TABLE_SOURCE,
                        substatusPlugins: ((n =
                          h == null ? void 0 : h.substatuses) != null
                          ? n
                          : []
                        ).map(function (e) {
                          return r(
                            "AdsDeliveryStatusInfoSubstatusPluginResolver",
                          ).resolve({ substatus: e });
                        }),
                      }),
                    })
                  : null,
                c.jsxs(r("GeoFlexbox.react"), {
                  alignItems: "center",
                  shrink: 0,
                  xstyle: L({ color: "value" }),
                  children: [
                    c.jsx(r("GeoVectorIcon.react"), {
                      color: "placeholder",
                      icon: o("MAIBAAssetUtils").getAssetIcon(C),
                      size: 12,
                    }),
                    c.jsx(r("GeoBaseText.react"), {
                      color: "inherit",
                      size: "value",
                      xstyle: r("geoMargin").start4,
                      children: p(C),
                    }),
                  ],
                }),
                c.jsx(r("GeoFlexbox.react"), {
                  alignItems: "center",
                  children: c.jsxs(r("GeoBaseText.react"), {
                    color: "placeholder",
                    display: "truncate",
                    size: "value",
                    xstyle: r("geoMargin").start4,
                    children: [": ", y],
                  }),
                }),
              ],
            }),
            c.jsxs(r("GeoFlexbox.react"), {
              gap: 12,
              grow: 1,
              children: [
                !E &&
                  c.jsx(r("GeoToggleButtonGroup.react"), {
                    onChange: r("emptyFunction"),
                    value: l ? y : null,
                    xstyle: m.buttonGroup,
                    children: c.jsx(r("GeoToggleButton.react"), {
                      "data-testid": void 0,
                      grow: "fill",
                      icon: l
                        ? o("meta-brand-checkmark-filled-16")
                            .metaBrandCheckmarkCheckmarkFilled16
                        : o("meta-brand-plus-filled-16")
                            .metaBrandPlusPlusFilled16,
                      label: l ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
                      onClick: function () {
                        l ? u() : _();
                      },
                      value: i.id,
                    }),
                  }),
                f != null &&
                  c.jsx(r("GeoButton.react"), {
                    "data-testid": void 0,
                    grow: "fill",
                    icon: o("meta-brand-eye-filled-16").metaBrandEyeEyeFilled16,
                    label: s._(/*BTDS*/ ""),
                    onClick: f,
                    variant: "default",
                    xstyle: m.buttonGroup,
                  }),
              ],
            }),
          ],
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
