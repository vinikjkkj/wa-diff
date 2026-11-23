__d(
  "AdsPECampaignGroupToolbarStateSelector",
  [
    "fbt",
    "AdDraftFragmentSource",
    "AdsAccountCreationUtils",
    "AdsAccountStore",
    "AdsActionEligibilitySelectors",
    "AdsAutomatedAdsUtils",
    "AdsCampaignGroupBulkStore",
    "AdsClipboardActionSources",
    "AdsClipboardStrings",
    "AdsClipboardUtils",
    "AdsCopyQuickDuplicateDataAction",
    "AdsCopyToClipboardAction",
    "AdsDeprecationSelectors",
    "AdsDeprecationUtils",
    "AdsDraftSelectionStore",
    "AdsDuplicationUpgradePasteMenuItemWrapper.react",
    "AdsDuplicationUpgradeQuickDuplicateMenuItemWrapper.react",
    "AdsEditingCampaignGroupEditorContext",
    "AdsManagerPersonalizedViewLoggingDeferred",
    "AdsObjectTypes",
    "AdsPECrepeUnsupportedFeatureContent",
    "AdsPEMenuItemShortcut.react",
    "AdsPEShortcuts",
    "AdsPEToolbarActionTypes",
    "AdsPasteFromClipboardAction",
    "AdsProgressiveDisclosureUtils",
    "AdsQuickDuplicateDisabledReasonStrings",
    "AdsReservationDisabledCreationMessages",
    "AdsTargetingPGDIndividualSettingConstants",
    "AdsUEditorCampaignGroupsArePreUnificationASCSelectors",
    "CometPlaceholder.react",
    "GeoGlimmer.react",
    "GeoMenuItem.react",
    "GeoText.react",
    "GeoTooltip.react",
    "adsClipboardCopiedDataSelector",
    "adsClipboardLevelSelector",
    "adsCreateSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsPECreationStartDuplicatingCampaignGroups",
    "adsPECrepeUnsupportedToolbarActionMessageSelector",
    "adsUEditorRollbackPGDExp5And6ForE2EEligibilitySelector",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ ""),
      d = s._(/*BTDS*/ ""),
      m = r("adsCreateSelector")(
        [r("AdsCampaignGroupBulkStore").getBulkSpec],
        function (t) {
          return o("AdsAutomatedAdsUtils").isAutomatedAdsCampaignGroupBulkSpec(
            t,
          );
        },
        { name: i.id + ".hasRestrictedAutomatedAdsSelector" },
      );
    function p() {
      o("AdsManagerPersonalizedViewLoggingDeferred").logTableValueAction(
        "duplicate_ad_object",
        "campaign",
      );
    }
    function _() {
      p();
      var e = o(
          "adsMgmtCampaignGroupSelectedIdsSelector",
        ).adsMgmtCampaignGroupSelectedIdsSelector(),
        t = r("AdsAccountStore").getSelectedAccountIDX(),
        n = r("AdsObjectTypes").CAMPAIGN_GROUP,
        a = !1,
        l = o(
          "AdsActionEligibilitySelectors",
        ).campaignGroupMMDuplicationUpsellEligibleIDsSelector(
          r("AdsEditingCampaignGroupEditorContext"),
        );
      r("AdsCopyQuickDuplicateDataAction").dispatch(
        {
          accountID: t,
          draftID: r("AdsDraftSelectionStore").getOrThrow(t),
          ids: e,
          objectType: n,
          extraData: {
            isEligibleForBAUToPGDStandardDuplication: a,
            campaignIDsEligibleForMMDuplicationUpsell: l,
          },
          requestID: 0,
          source: r("AdDraftFragmentSource").QUICK_DUPLICATE_FROM_TOOLBAR,
        },
        {
          line: "117",
          module: "AdsPECampaignGroupToolbarStateSelector.js",
          moduleID: i.id,
        },
      );
    }
    function f() {
      r("AdsCopyToClipboardAction").dispatch(
        {
          actionSource: r("AdsClipboardActionSources").TOOLBAR,
          copiedIDs: o(
            "adsMgmtCampaignGroupSelectedIdsSelector",
          ).adsMgmtCampaignGroupSelectedIdsSelector(),
          level: "campaign",
        },
        {
          line: "133",
          module: "AdsPECampaignGroupToolbarStateSelector.js",
          moduleID: i.id,
        },
      );
    }
    function g() {
      (p(),
        r("AdsPasteFromClipboardAction").dispatch(
          {
            actionSource: r("AdsClipboardActionSources").TOOLBAR,
            level: "campaign",
            newParentIDs: o(
              "adsMgmtCampaignGroupSelectedIdsSelector",
            ).adsMgmtCampaignGroupSelectedIdsSelector(),
          },
          {
            line: "142",
            module: "AdsPECampaignGroupToolbarStateSelector.js",
            moduleID: i.id,
          },
        ));
    }
    var h = r("adsCreateSelector")(
        [
          o("AdsActionEligibilitySelectors")
            .campaignGroupActionEligibilitySelector,
          m,
          r("AdsAccountStore").getSelectedAccount,
          o("AdsDeprecationSelectors")
            .shouldDisableDuplicateL3ForDeprecatedObjectiveSelector,
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
          r("adsPECrepeUnsupportedToolbarActionMessageSelector"),
          o("adsUEditorRollbackPGDExp5And6ForE2EEligibilitySelector")
            .shouldDisableDuplicateForE2EExp5And6RollbackEligibleSelector,
          o("AdsUEditorCampaignGroupsArePreUnificationASCSelectors")
            .AdsUEditorAreCampaignGroupsBulkPreUnificationASCSelector,
        ],
        function (t, n, a, i, l, s, u, m) {
          var e = t.canDuplicate,
            p = t.hasRF,
            _ = t.isMetaMomentMaker,
            f = s({ toolbarAction: r("AdsPEToolbarActionTypes").DUPLICATE });
          if (f != null) return f;
          if (n === !0) return d;
          if (_ === !0)
            return o("AdsReservationDisabledCreationMessages")
              .MMM_CANNOT_DUPLICATE_IN_ADS_MANAGER;
          if (p === !0) return c;
          if (i === !0)
            return l.length > 1
              ? o("AdsDeprecationUtils")
                  .BLOCK_BULK_DUPLICATE_DEPRECATED_OBJECTIVE_TOOLTIP
              : o("AdsDeprecationUtils")
                  .BLOCK_DUPLICATE_DEPRECATED_OBJECTIVE_TOOLTIP;
          if (u)
            return o(
              "AdsTargetingPGDIndividualSettingConstants",
            ).campaignGroupDuplicateDisabledReasonForPGDExp5And6Rollback();
          if (
            o(
              "AdsProgressiveDisclosureUtils",
            ).getIsPGDVariationEligibleForUnificationPackage(
              o(
                "AdsProgressiveDisclosureUtils",
              ).getProgressiveDisclosureUnifiedAppSalesVariationWithoutLog(),
            ) &&
            m
          )
            return o(
              "AdsPECrepeUnsupportedFeatureContent",
            ).getUnsupportedMessage(
              "campaign",
              r("AdsPEToolbarActionTypes").DUPLICATE,
            );
          if (!e)
            return o(
              "AdsAccountCreationUtils",
            ).getAccountHasNoPublishPermissionDisabledReason(a.getValue());
        },
        { name: i.id + ".cannotDuplicateTooltipLabelSelector" },
      ),
      y = r("adsCreateSelector")(
        [
          o("AdsActionEligibilitySelectors")
            .campaignGroupActionEligibilitySelector,
          r("adsClipboardLevelSelector"),
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
          r("adsClipboardCopiedDataSelector"),
        ],
        function (t, n, a, l) {
          var e = t.hasRF;
          if (e) return {};
          var c = { duplicate: { groupLabel: s._(/*BTDS*/ ""), items: {} } },
            d = null;
          t.canQuickDuplicate ||
            (d = o(
              "AdsQuickDuplicateDisabledReasonStrings",
            ).getQuickDuplicateDisabledReasonText(
              t.disableQuickDuplicateReasonCode,
              "campaign",
            ));
          var m = s._(/*BTDS*/ "");
          t.hasLegacyObjective ||
          (t.odaxCompatibleObjectives != null &&
            t.odaxCompatibleObjectives.length > 0)
            ? (c.duplicate.items.quickDuplicate = u.jsx(
                r("GeoMenuItem.react"),
                {
                  "data-testid": void 0,
                  isDisabled: d != null && d !== "",
                  label:
                    d != null && d !== ""
                      ? u.jsx(r("GeoTooltip.react"), {
                          content: d,
                          position: "right",
                          children: m,
                        })
                      : m,
                  logging: { surface: "pe_duplicate_quick_duplicate_button" },
                  onClick: function () {
                    (p(),
                      r("adsPECreationStartDuplicatingCampaignGroups")(
                        r("AdDraftFragmentSource").QUICK_DUPLICATE_REDIRECT,
                      ));
                  },
                  rightContent: u.jsx(r("AdsPEMenuItemShortcut.react"), {
                    shortcut:
                      r("AdsPEShortcuts").getShortcutByName("quick_duplicate"),
                  }),
                },
                String(m),
              ))
            : (c.duplicate.items.quickDuplicate = u.jsx(
                r("CometPlaceholder.react"),
                {
                  fallback: u.jsx(r("GeoGlimmer.react"), {
                    height: 36,
                    loggingName: i.id,
                  }),
                  name: i.id,
                  children: u.jsx(
                    r(
                      "AdsDuplicationUpgradeQuickDuplicateMenuItemWrapper.react",
                    ),
                    {
                      duplicationEntrypointSource: r("AdDraftFragmentSource")
                        .QUICK_DUPLICATE_UPGRADE_FROM_TOOLBAR,
                      hasReservationBuyingType: t.hasRF,
                      isDisabled: d != null && d !== "",
                      label:
                        d != null && d !== ""
                          ? u.jsx(r("GeoTooltip.react"), {
                              content: d,
                              position: "right",
                              children: m,
                            })
                          : u.jsx(r("GeoText.react"), { children: m }),
                      onClick: _,
                      onClickBeforeDUModalRender: p,
                      rightContent: u.jsx(r("AdsPEMenuItemShortcut.react"), {
                        shortcut:
                          r("AdsPEShortcuts").getShortcutByName(
                            "quick_duplicate",
                          ),
                      }),
                    },
                  ),
                },
                String(m),
              ));
          var h = {},
            y = o("AdsClipboardStrings").getCopyDisabledReasonText(
              t.disableCopyReasonCode,
              "campaign",
              a.length,
              "inverted",
            ),
            C = s._(/*BTDS*/ "");
          h.copy = u.jsx(
            r("GeoMenuItem.react"),
            {
              "data-testid": void 0,
              isDisabled: y != null && y !== "",
              label:
                y != null && y !== ""
                  ? u.jsx(r("GeoTooltip.react"), {
                      content: y,
                      position: "right",
                      children: C,
                    })
                  : C,
              logging: { surface: "pe_clipboard_copy_button" },
              onClick: f,
              rightContent: u.jsx(r("AdsPEMenuItemShortcut.react"), {
                shortcut: r("AdsPEShortcuts").getShortcutByName("copy"),
              }),
            },
            String(C),
          );
          var b = o("AdsClipboardStrings").getPasteDisabledReasonText(
              t.disablePasteReasonCode,
              t.disableQuickDuplicateReasonCode,
              "campaign",
              n,
              a.length,
              "inverted",
            ),
            v = s._(/*BTDS*/ ""),
            S = {
              "data-testid": "pe_clipboard_paste_button",
              isDisabled: b != null && b !== "",
              label:
                b != null && b !== ""
                  ? u.jsx(r("GeoTooltip.react"), {
                      content: b,
                      position: "right",
                      children: v,
                    })
                  : u.jsx(r("GeoText.react"), { children: v }),
              rightContent: u.jsx(r("AdsPEMenuItemShortcut.react"), {
                shortcut: r("AdsPEShortcuts").getShortcutByName("paste"),
              }),
              onClick: g,
            };
          return (
            t.disablePasteReasonCode ===
              o("AdsClipboardStrings").PasteDisabledReasons.UseQuickDuplicate &&
            l != null &&
            l.hasLegacyObjective
              ? ((S.onClick = function () {
                  (p(),
                    r("adsPECreationStartDuplicatingCampaignGroups")(
                      r("AdDraftFragmentSource").COPY_PASTE_REDIRECT,
                    ));
                }),
                (h.paste = u.jsx(
                  r("GeoMenuItem.react"),
                  babelHelpers.extends({}, S, {
                    logging: { surface: "pe_clipboard_paste_button" },
                  }),
                  String(v),
                )))
              : t.isPasteToOriginalParent
                ? (h.paste = u.jsx(
                    r("CometPlaceholder.react"),
                    {
                      fallback: u.jsx(r("GeoGlimmer.react"), {
                        height: 36,
                        loggingName: i.id,
                      }),
                      name: i.id,
                      children: u.jsx(
                        r("AdsDuplicationUpgradePasteMenuItemWrapper.react"),
                        babelHelpers.extends(
                          {
                            duplicationEntrypointSource: r(
                              "AdDraftFragmentSource",
                            ).DUPLICATE_UPGRADE_CAMPAIGN_GROUP_FROM_CLIPBOARD,
                            onClickBeforeDUModalRender: p,
                          },
                          S,
                        ),
                        String(v),
                      ),
                    },
                    String(v),
                  ))
                : (h.paste = u.jsx(
                    r("GeoMenuItem.react"),
                    babelHelpers.extends({}, S, {
                      logging: { surface: "pe_clipboard_paste_button" },
                    }),
                    String(v),
                  )),
            (h.viewClipboard = o("AdsClipboardUtils").getViewClipboardMenuItem(
              t.disableViewClipboardReason,
            )),
            (c.clipboard = { groupLabel: s._(/*BTDS*/ ""), items: h }),
            c
          );
        },
        { name: i.id + ".duplicateMenuSelector" },
      ),
      C = r("adsCreateSelector")(
        [
          o("AdsActionEligibilitySelectors")
            .campaignGroupToolbarActionEligibilitySelector,
          y,
          r("AdsAccountStore").getSelectedAccount,
          h,
        ],
        function (t, n, r, a) {
          var e = t.auto2PlaceholderSelectedIDs,
            i = t.canDelete,
            l = t.canDuplicate,
            s = t.canQuickDuplicate,
            u = t.canRevert,
            c = t.hasOnlyDrafts,
            d = t.hasRF,
            m = t.isLocked,
            p = t.isProcessingSlideshow,
            _ = t.isUploadingVideo,
            f = null;
          s ||
            (f = o(
              "AdsQuickDuplicateDisabledReasonStrings",
            ).getQuickDuplicateDisabledReasonText(null, "campaign"));
          var g = o(
              "AdsAccountCreationUtils",
            ).getAccountHasNoPublishPermissionDisabledReason(r.getValue()),
            h = l;
          return (
            d && (h = !1),
            {
              canDelete: i,
              canDuplicate: h,
              canQuickDuplicate: s,
              canRevert: u,
              cannotDuplicateTooltipLabel: a,
              cannotQuickDuplicateTooltipLabel: f,
              cannotDeleteTooltipLabel: g,
              duplicateMenu: n,
              isLocked: m,
              isProcessingSlideshow: p,
              isUploadingVideo: _,
              auto2PlaceholderSelectedIDs: e,
              hasOnlyDrafts: c,
            }
          );
        },
        { name: i.id + ".AdsPECampaignGroupToolbarStateSelector" },
      ),
      b = C;
    l.default = b;
  },
  226,
);
