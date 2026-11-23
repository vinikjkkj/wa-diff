__d(
  "adsMgmtCreateDuplicateButtonContainer",
  [
    "fbt",
    "AdsAIUtils",
    "AdsFluxHooks",
    "AdsMgmtDuplicationTriggerContextSelectors",
    "AdsPETooltipContainerDeferred.react",
    "AdsPerfInteractionsController",
    "AdsTopOfTableButtonVariantContext",
    "AdsTopOfTableIconContext",
    "GeoButton.react",
    "GeoDropdownMenu.react",
    "GeoMenuGroup.react",
    "GeoNextAMUtils",
    "GeoSplitButton.react",
    "adsMgmtToolbarStrings",
    "gkx",
    "meta-brand-vertical-rectangle-extra-lower-corner-filled-16",
    "meta-brand-vertical-rectangle-extra-lower-corner-outline-16",
    "react",
    "withAdsHeroTracing",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useContext,
      m = c.useRef,
      p = r("withAdsHeroTracing").root("am.table.duplicate_dropdown");
    function _(e, t, n, o) {
      return Object.values(e).map(function (e) {
        var t = e.items,
          n = Object.values(t);
        return u.jsx(
          r("GeoMenuGroup.react"),
          { label: r("gkx")("9666") ? null : e.groupLabel, children: n },
          e.groupLabel.toString(),
        );
      });
    }
    var f = function () {
      return s._(/*BTDS*/ "");
    };
    function g(e, t, n, a, l) {
      function c() {
        var t = o("AdsFluxHooks").useAdsSelector(n, e, e),
          r = t.duplicateMenu;
        return l == null
          ? { duplicateMenu: r }
          : babelHelpers.extends({ duplicateMenu: r }, l(e));
      }
      function g(e) {
        var t = c(),
          n = t.adObjectType,
          r = t.duplicateMenu,
          o = t.parentCampaignGroupID,
          a = t.selectedID,
          i = r ? u.jsx(p, { children: _(r, a, o, n) }) : [];
        return e.children(i);
      }
      g.displayName = g.name + " [from " + i.id + "]";
      var h = o("AdsFluxHooks").adsFluxContainer(g, null, {
        containerName: i.id,
      });
      function y(r) {
        var i,
          l,
          u,
          c = o("AdsFluxHooks").useAdsSelector(n, e, e),
          d = o("AdsFluxHooks").useAdsSelector(t),
          m = d.length === 0,
          p = a.onDuplicate,
          _ = c.canDuplicate,
          g = c.cannotDuplicateTooltipLabel,
          h = c.duplicateMenu,
          y = c.isLocked,
          C = Object.values(h).length > 0,
          b = _,
          v = g,
          S = p,
          R = y === !0 || b !== !0,
          L;
        if (m)
          L = o("adsMgmtToolbarStrings").getNoSelectionDuplicateDisabledTooltip(
            r.level,
          );
        else {
          var E = s._(/*BTDS*/ "");
          L = R
            ? v === "" && g !== ""
              ? g
              : v
            : s._(/*BTDS*/ "", [
                s._param("button label", f()),
                s._param("shortcut", E),
              ]);
        }
        var k;
        return (
          r.level === "campaign"
            ? (k = o(
                "AdsMgmtDuplicationTriggerContextSelectors",
              ).adsMgmtCampaignGroupDuplicationDialogEPContextSelector(e))
            : r.level === "ad_set" &&
              (k = o(
                "AdsMgmtDuplicationTriggerContextSelectors",
              ).adsMgmtCampaignDuplicationDialogEPContextSelector(e)),
          {
            isCompressed: r.isCompressed,
            isDisabled: R,
            onButtonClick: S,
            hasDropdown: C,
            tooltip: L,
            selectedID: (i = k) == null ? void 0 : i.selectedID,
            parentCampaignGroupID:
              (l = k) == null ? void 0 : l.parentCampaignGroupID,
            adObjectType: (u = k) == null ? void 0 : u.adObjectType,
          }
        );
      }
      function C(e) {
        var t,
          n,
          a = m(null),
          l = m(null),
          s = y(e),
          c = s.adObjectType,
          p = s.hasDropdown,
          _ = s.isCompressed,
          g = s.isDisabled,
          C = s.onButtonClick,
          b = s.parentCampaignGroupID,
          v = s.selectedID,
          S = s.tooltip,
          R = d(r("AdsTopOfTableIconContext")),
          L = d(r("AdsTopOfTableButtonVariantContext")),
          E = o("GeoNextAMUtils").isGeoNextEnabled()
            ? o("meta-brand-vertical-rectangle-extra-lower-corner-outline-16")
                .metaBrandVerticalRectangleExtraLowerCornerOutline16
            : o("meta-brand-vertical-rectangle-extra-lower-corner-filled-16")
                .metaBrandVerticalRectangleExtraLowerCornerFilled16,
          k = f(),
          I = "pe_duplicate_button",
          T = o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
            "adsMgmtCreateDuplicateButtonContainer",
          ),
          D = { surface: I };
        if (
          (T &&
            (D = babelHelpers.extends({}, D, {
              capability: {
                trackVisibilityThreshold: 0.5,
                nonInteractive: !1,
                trackMutation: !0,
              },
            })),
          !p || R != null)
        ) {
          var x;
          return u.jsxs(u.Fragment, {
            children: [
              u.jsx(r("GeoButton.react"), {
                containerRef: a,
                "data-testid": void 0,
                icon: (x = R == null ? void 0 : R.duplicate) != null ? x : E,
                isDisabled: g,
                isLabelHidden: _,
                label: k,
                logging: D,
                onClick: C,
                tooltip: S,
                variant: L != null ? L : e.buttonVariant,
              }),
              R == null
                ? u.jsx(r("AdsPETooltipContainerDeferred.react"), {
                    tooltipContent: S,
                    triggerRef: a,
                  })
                : null,
            ],
          });
        }
        var $ = "duplication_split_button";
        return (
          v != null && c != null && ($ = v + "-" + (b != null ? b : "")),
          u.jsxs(u.Fragment, {
            children: [
              u.jsx("div", {
                ref: l,
                children: u.jsx(
                  r("GeoSplitButton.react"),
                  {
                    "data-testid": void 0,
                    icon:
                      (t = R == null ? void 0 : R.duplicate) != null ? t : E,
                    isDisabled: g,
                    isLabelHidden: g || _,
                    label: k,
                    logging: D,
                    menu: u.jsx(h, {
                      children: function (t) {
                        return u.jsx(r("GeoDropdownMenu.react"), {
                          align: "right",
                          "data-testid": void 0,
                          dropdownWidth: 200,
                          maxHeight: 600,
                          onClose: function () {
                            var e = r(
                              "AdsPerfInteractionsController",
                            ).getActiveInteractionTraceAPIByInteractionComponent(
                              "am.table.duplicate_dropdown",
                            );
                            e != null &&
                              e.cancelTrace(
                                "[Manual Cancel] dropdown menu was closed",
                                !0,
                              );
                          },
                          onOpen: function () {
                            r("AdsPerfInteractionsController").startInteraction(
                              "am.table.load_duplication_dropdown_menu",
                              i.id,
                            );
                          },
                          children: t,
                        });
                      },
                    }),
                    onClick: C,
                    variant:
                      (n = L != null ? L : e.buttonVariant) != null
                        ? n
                        : "default",
                  },
                  $,
                ),
              }),
              u.jsx(r("AdsPETooltipContainerDeferred.react"), {
                tooltipContent: S,
                triggerRef: l,
              }),
            ],
          })
        );
      }
      return (
        (C.displayName = C.name + " [from " + i.id + "]"),
        o("AdsFluxHooks").adsFluxContainer(C, null, { containerName: i.id })
      );
    }
    l.default = g;
  },
  226,
);
