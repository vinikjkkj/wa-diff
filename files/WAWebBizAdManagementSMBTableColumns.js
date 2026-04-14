__d(
  "WAWebBizAdManagementSMBTableColumns",
  [
    "fbt",
    "WAWebBizAdManagementActionsCell.react",
    "WAWebBizAdManagementAmountSpentCell.react",
    "WAWebBizAdManagementColumnWidths",
    "WAWebBizAdManagementConversationsCell.react",
    "WAWebBizAdManagementCostPerConversationCell.react",
    "WAWebBizAdManagementDraftActionsCell.react",
    "WAWebBizAdManagementDraftYourAdsCell.react",
    "WAWebBizAdManagementLogger",
    "WAWebBizAdManagementReachCell.react",
    "WAWebBizAdManagementStatusCell.react",
    "WAWebBizAdManagementYourAdsCell.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "Amount spent");
    }
    function d() {
      return s._(/*BTDS*/ "Conversations");
    }
    function m() {
      return s._(/*BTDS*/ "Cost per conversation");
    }
    function p() {
      return s._(/*BTDS*/ "Reach");
    }
    function _() {
      return s._(/*BTDS*/ "Status");
    }
    function f() {
      return s._(/*BTDS*/ "Your ads");
    }
    var g = "\u2014";
    function h() {
      return u.jsx(r("WDSText.react"), {
        type: "Body1",
        colorName: "contentDefault",
        maxLines: 1,
        children: g,
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = [
      {
        key: "yourAds",
        header: f(),
        width: o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths
          .yourAds,
        cell: function (t) {
          var e = t.item;
          return e.isDraft
            ? u.jsx(r("WAWebBizAdManagementDraftYourAdsCell.react"), {
                description: e.description,
                isLoadingThumbnail: e.isLoadingThumbnail,
                thumbnailUrl: e.thumbnailUrl,
              })
            : u.jsx(r("WAWebBizAdManagementYourAdsCell.react"), {
                boostId: e.boostId,
                boostingStatus: e.boostingStatus,
                durationInDays: e.durationInDays,
                thumbnailUrl: e.thumbnailUrl,
                startTime: e.startTime,
              });
        },
      },
      {
        key: "status",
        header: _(),
        width: o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths
          .status,
        cell: function (t) {
          var e = t.item;
          return e.isDraft
            ? u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDeemphasized",
                maxLines: 1,
                children: s._(/*BTDS*/ "Draft"),
              })
            : u.jsx(r("WAWebBizAdManagementStatusCell.react"), {
                boostingStatus: e.boostingStatus,
                boostingStatusDisplayText: e.boostingStatusDisplayText,
              });
        },
      },
      {
        key: "reach",
        header: p(),
        width: o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths
          .reach,
        cell: function (t) {
          var e = t.item;
          return e.isDraft
            ? u.jsx(h, {})
            : u.jsx(r("WAWebBizAdManagementReachCell.react"), {
                reach: e.reach,
              });
        },
      },
      {
        key: "conversations",
        header: d(),
        width: o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths
          .conversations,
        cell: function (t) {
          var e = t.item;
          return e.isDraft
            ? u.jsx(h, {})
            : u.jsx(r("WAWebBizAdManagementConversationsCell.react"), {
                conversations: e.conversations,
              });
        },
      },
      {
        key: "costPerConversation",
        header: m(),
        width: o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths
          .costPerConversation,
        cell: function (t) {
          var e = t.item;
          return e.isDraft
            ? u.jsx(h, {})
            : u.jsx(r("WAWebBizAdManagementCostPerConversationCell.react"), {
                formattedSpent: e.formattedSpent,
                conversations: e.conversations,
              });
        },
      },
      {
        key: "amountSpent",
        header: c(),
        width: o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths
          .amountSpent,
        cell: function (t) {
          var e = t.item;
          return e.isDraft
            ? u.jsx(h, {})
            : u.jsx(r("WAWebBizAdManagementAmountSpentCell.react"), {
                budgetType: e.budgetType,
                formattedBudget: e.formattedBudget,
                formattedSpent: e.formattedSpent,
              });
        },
      },
      {
        key: "actions",
        width: o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths
          .actions,
        cell: function (t) {
          var e = t.isRowHovered,
            n = t.item;
          return n.isDraft
            ? u.jsx(r("WAWebBizAdManagementDraftActionsCell.react"), {
                isRowHovered: e,
                onDelete: n.onDeleteDraft,
              })
            : u.jsx(r("WAWebBizAdManagementActionsCell.react"), {
                boostId: n.boostId,
                boostingStatus: n.boostingStatus,
                onRecreatePress: function () {
                  return n.onRecreateAd(
                    o("WAWebBizAdManagementLogger").LWI_ENTRY_POINT
                      .SMB_ADVERTISE_FROM_MANAGE_ADS_OVERFLOW_MENU_ITEM_RECREATE_AD_BUTTON,
                    "whatsapp_smb_manage_ads_listing_overflow_menu_recreate_ad_option",
                  );
                },
                onViewResults: n.onViewResults,
              });
        },
      },
    ];
    ((l.adManagementColumnWidths = o(
      "WAWebBizAdManagementColumnWidths",
    ).adManagementColumnWidths),
      (l.adManagementColumns = y));
  },
  226,
);
