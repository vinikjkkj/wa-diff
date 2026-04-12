__d(
  "WAWebBusinessBroadcastHomeTableColumns.react",
  [
    "WAWebBizAdManagementThumbnail.react",
    "WAWebBizBroadcastDeleteConfirmationModalLoadable",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebBroadcastHomeTypes",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebDefaultProfilePicture.react",
    "WAWebFlex.react",
    "WAWebL10nGetRenderedLocale",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebWamEnumSurfaceType",
    "WDSButton.react",
    "WDSIconIcCheckCircleFilled.react",
    "WDSIconIcDelete.react",
    "WDSIconIcEdit.react",
    "WDSIconIcErrorFilled.react",
    "WDSIconIcMoreVert.react",
    "WDSIconIcScheduleFilled.react",
    "WDSIconIcVisibility.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSText.react",
    "react",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useRef,
      m = {
        actionsContainer: {
          alignItems: "xuk3077",
          paddingInlineEnd: "xyri2b",
          width: "xh8yej3",
          $$css: !0,
        },
        broadcastThumbnail: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        rowContainer: { width: "xh8yej3", $$css: !0 },
        textContainer: {
          minWidth: "xeuugli",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      },
      p = { minWidth: 200 },
      _ = { minWidth: 120 },
      f = { minWidth: 100 },
      g = { minWidth: 80 },
      h = function (t) {
        var e = o("WAWebL10nGetRenderedLocale")
          .WAWebL10nGetRenderedLocale()
          .replace("_", "-");
        return new Intl.DateTimeFormat(e, {
          day: "numeric",
          hour: "numeric",
          hour12: !0,
          minute: "2-digit",
          month: "short",
        }).format(t);
      },
      y = function (t) {
        return s.jsx(r("WDSText.react"), {
          type: "Body1",
          colorName: t === 0 ? "contentDeemphasized" : "contentDefault",
          children:
            t === 0
              ? "\u2014"
              : o("WAWebBizBroadcastsHomeStrings").getPercentageLabel(t),
        });
      },
      C = function (t) {
        return t === "PROCESSING"
          ? o("WAWebBizBroadcastsHomeStrings").getProcessingStatusLabel()
          : t === "SCHEDULED"
            ? o("WAWebBizBroadcastsHomeStrings").getScheduledTableStatusLabel()
            : t === "SENT"
              ? o("WAWebBizBroadcastsHomeStrings").getSentStatusLabel()
              : t === "FAILED"
                ? o("WAWebBizBroadcastsHomeStrings").getFailedTableStatusLabel()
                : t === "DRAFT"
                  ? o("WAWebBizBroadcastsHomeStrings").getDraftStatusLabel()
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })();
      },
      b = function (t) {
        return t === "PROCESSING"
          ? {
              icon: s.jsx(r("WDSIconIcScheduleFilled.react"), {
                colorName: "secondaryWarning",
                height: 24,
                width: 24,
              }),
              text: o(
                "WAWebBizBroadcastsHomeStrings",
              ).getProcessingStatusLabel(),
            }
          : t === "SCHEDULED"
            ? {
                icon: s.jsx(r("WDSIconIcScheduleFilled.react"), {
                  colorName: "contentDeemphasized",
                  height: 24,
                  width: 24,
                }),
                text: o(
                  "WAWebBizBroadcastsHomeStrings",
                ).getScheduledStatusLabel(),
              }
            : t === "SENT"
              ? {
                  icon: s.jsx(r("WDSIconIcCheckCircleFilled.react"), {
                    colorName: "secondaryPositive",
                    height: 24,
                    width: 24,
                  }),
                  text: o("WAWebBizBroadcastsHomeStrings").getSentStatusLabel(),
                }
              : t === "FAILED"
                ? {
                    icon: s.jsx(r("WDSIconIcErrorFilled.react"), {
                      colorName: "secondaryNegative",
                      height: 24,
                      width: 24,
                    }),
                    text: o(
                      "WAWebBizBroadcastsHomeStrings",
                    ).getFailedStatusLabel(),
                  }
                : t === "DRAFT"
                  ? {
                      icon: s.jsx(r("WDSIconIcEdit.react"), {
                        colorName: "contentDeemphasized",
                        height: 24,
                        width: 24,
                      }),
                      text: o(
                        "WAWebBizBroadcastsHomeStrings",
                      ).getDraftStatusLabel(),
                    }
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })();
      },
      v = function (t, n, a) {
        return t === "PROCESSING"
          ? {
              icon: s.jsx(r("WDSIconIcScheduleFilled.react"), {
                colorName: "secondaryWarning",
                height: 24,
                width: 24,
              }),
              sublabel: o(
                "WAWebBizBroadcastsHomeStrings",
              ).getProcessingStatusSublabel(),
              text: o(
                "WAWebBizBroadcastsHomeStrings",
              ).getProcessingStatusLabel(),
            }
          : t === "SCHEDULED"
            ? {
                icon: s.jsx(r("WDSIconIcScheduleFilled.react"), {
                  colorName: "contentDeemphasized",
                  height: 24,
                  width: 24,
                }),
                sublabel: a != null ? h(a) : null,
                text: o(
                  "WAWebBizBroadcastsHomeStrings",
                ).getScheduledStatusLabel(),
              }
            : t === "SENT"
              ? {
                  icon: s.jsx(r("WDSIconIcCheckCircleFilled.react"), {
                    colorName: "secondaryPositive",
                    height: 24,
                    width: 24,
                  }),
                  sublabel: o(
                    "WAWebBizBroadcastsHomeStrings",
                  ).getCompletedStatusSublabel(h(n)),
                  text: o("WAWebBizBroadcastsHomeStrings").getSentStatusLabel(),
                }
              : t === "FAILED"
                ? {
                    icon: s.jsx(r("WDSIconIcErrorFilled.react"), {
                      colorName: "secondaryNegative",
                      height: 24,
                      width: 24,
                    }),
                    sublabel: o(
                      "WAWebBizBroadcastsHomeStrings",
                    ).getFailedStatusSublabel(),
                    text: o(
                      "WAWebBizBroadcastsHomeStrings",
                    ).getFailedStatusLabel(),
                  }
                : t === "DRAFT"
                  ? {
                      icon: s.jsx(r("WDSIconIcEdit.react"), {
                        colorName: "contentDeemphasized",
                        height: 24,
                        width: 24,
                      }),
                      sublabel: null,
                      text: o(
                        "WAWebBizBroadcastsHomeStrings",
                      ).getDraftStatusLabel(),
                    }
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })();
      };
    function S(e, t) {
      var n;
      return [
        {
          cell: function (t) {
            var e;
            return s.jsxs(o("WAWebFlex.react").FlexRow, {
              gap: 12,
              align: "center",
              xstyle: m.rowContainer,
              testid: void 0,
              children: [
                s.jsx(o("WAWebFlex.react").FlexItem, {
                  shrink: 0,
                  children: s.jsx(r("WAWebBizAdManagementThumbnail.react"), {
                    thumbnailUrl:
                      (e = t.item.attachmentData) == null
                        ? void 0
                        : e.previewUrl,
                    boostingStatus: null,
                    size: 40,
                    thumbnailXStyle: m.broadcastThumbnail,
                  }),
                }),
                s.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: m.textContainer,
                  children: [
                    s.jsx("div", {
                      className: "x193iq5w",
                      children: s.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDefault",
                        maxLines: 1,
                        children: t.item.messageBody || t.item.campaignName,
                      }),
                    }),
                    s.jsx("div", {
                      className: "x193iq5w",
                      children: s.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        maxLines: 1,
                        children: o(
                          "WAWebBizBroadcastsHomeStrings",
                        ).getSentDateText(h(t.item.sentAt)),
                      }),
                    }),
                  ],
                }),
              ],
            });
          },
          header: (n = o(
            "WAWebBizBroadcastsHomeStrings",
          )).getBroadcastColumnHeader(),
          key: "broadcast",
          width: { options: p, type: "proportional", value: 35 },
        },
        {
          cell: function (t) {
            return s.jsx("div", {
              className: "x193iq5w",
              "data-testid": void 0,
              children: s.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                maxLines: 1,
                children: t.item.audienceName,
              }),
            });
          },
          header: n.getAudienceColumnHeader(),
          key: "audience",
          width: { options: _, type: "proportional", value: 25 },
        },
        {
          cell: function (t) {
            var e = C(t.item.status),
              n =
                t.item.status ===
                o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.FAILED
                  ? "secondaryNegative"
                  : "contentDefault";
            return s.jsx("div", {
              className: "xzl6hoh",
              "data-testid": void 0,
              children: s.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: n,
                maxLines: 1,
                children: e,
              }),
            });
          },
          header: n.getStatusColumnHeader(),
          key: "status",
          width: { options: f, type: "proportional", value: 15 },
        },
        {
          cell: function (t) {
            return s.jsx("div", {
              "data-testid": void 0,
              children: y(t.item.readRate.percentage),
            });
          },
          header: n.getReadRateColumnHeader(),
          key: "readRate",
          width: { options: g, type: "proportional", value: 10 },
        },
        {
          cell: function (t) {
            return s.jsx("div", {
              "data-testid": void 0,
              children: y(t.item.replyRate.percentage),
            });
          },
          header: n.getReplyRateColumnHeader(),
          key: "replyRate",
          width: { options: g, type: "proportional", value: 10 },
        },
        {
          cell: function (o) {
            return s.jsx(L, {
              entryPoint: e,
              index: o.rowIndex,
              item: o.item,
              broadcastJid: o.item.broadcastJid,
              onPreview: t != null ? t : r("WAWebNoop"),
            });
          },
          header: "",
          key: "actions",
          width: {
            options: { maxWidth: 60, minWidth: 40 },
            type: "proportional",
            value: 5,
          },
        },
      ];
    }
    function R(e) {
      var t = e.index,
        n = e.onDelete,
        a = e.onPreview;
      return s.jsxs(r("WDSMenu.react"), {
        children: [
          s.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcVisibility.react"),
            testid: void 0,
            title: o("WAWebBizBroadcastsHomeStrings").getPreviewActionLabel(),
            onPress: a,
          }),
          s.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcDelete.react"),
            testid: void 0,
            title: o("WAWebBizBroadcastsHomeStrings").getDeleteActionLabel(),
            onPress: n,
            destructive: !0,
          }),
        ],
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.broadcastJid,
        n = e.entryPoint,
        a = e.index,
        i = e.item,
        l = e.onPreview,
        u = d(null),
        p = c(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.broadcastPreviewClicked(
              n,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.OVERFLOW_MENU,
            ),
              l(i));
          },
          [n, l, i],
        ),
        _ = c(
          function () {
            o("WAWebModalManager").ModalManager.open(
              s.jsx(
                o("WAWebBizBroadcastDeleteConfirmationModalLoadable")
                  .WAWebBizBroadcastDeleteConfirmationModalLoadable,
                {
                  broadcastJid: t,
                  campaignId: i.campaignId,
                  entryPoint: n,
                  surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
                },
              ),
            );
          },
          [t, n, i.campaignId],
        ),
        f = r("useWDSMenu")({
          dismissable: !0,
          enableUIM: !1,
          menu: s.jsx(R, { index: a, onDelete: _, onPreview: p }),
          targetRef: u,
        }),
        g = f.closeMenu,
        h = f.isMenuOpen,
        y = f.menuPortal,
        C = f.openMenu,
        b = c(
          function (e) {
            (e.stopPropagation(),
              h
                ? g()
                : (o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.broadcastItemOverflowClicked(
                    n,
                  ),
                  C()));
          },
          [n, h, g, C],
        );
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: m.actionsContainer,
        children: [
          s.jsx(r("WDSButton.react"), {
            ref: u,
            Icon: r("WDSIconIcMoreVert.react"),
            testid: void 0,
            variant: "borderless",
            size: "small",
            type: "default",
            onPress: b,
          }),
          y,
        ],
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e, t) {
      return [
        {
          cell: function (t) {
            return s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 12,
              xstyle: m.rowContainer,
              testid: void 0,
              children: [
                s.jsx(o("WAWebFlex.react").FlexItem, {
                  shrink: 0,
                  children: s.jsx(r("WAWebDefaultProfilePicture.react"), {
                    type: "business-broadcast",
                    size: 40,
                  }),
                }),
                s.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: m.textContainer,
                  children: s.jsx("div", {
                    className: "x193iq5w",
                    children: s.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDefault",
                      maxLines: 1,
                      children: t.item.name,
                    }),
                  }),
                }),
              ],
            });
          },
          header: o(
            "WAWebBizBroadcastsHomeStrings",
          ).getAudienceNameColumnHeader(),
          key: "name",
          width: { options: p, type: "proportional", value: 50 },
        },
        {
          cell: function (t) {
            return s.jsx("div", {
              className: "x193iq5w",
              "data-testid": void 0,
              children: s.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                maxLines: 1,
                children: t.item.recipientCount,
              }),
            });
          },
          header: o(
            "WAWebBizBroadcastsHomeStrings",
          ).getRecipientsColumnHeader(),
          key: "recipients",
          width: { options: _, type: "proportional", value: 25 },
        },
        {
          cell: function (t) {
            return s.jsx("div", {
              className: "x193iq5w",
              "data-testid": void 0,
              children: s.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName:
                  t.item.lastBroadcastTimestamp != null
                    ? "contentDefault"
                    : "contentDeemphasized",
                maxLines: 1,
                children:
                  t.item.lastBroadcastTimestamp != null
                    ? h(t.item.lastBroadcastTimestamp)
                    : "\u2014",
              }),
            });
          },
          header: o(
            "WAWebBizBroadcastsHomeStrings",
          ).getLastBroadcastColumnHeader(),
          key: "lastBroadcast",
          width: { options: _, type: "proportional", value: 25 },
        },
        {
          cell: function (o) {
            var n, a;
            return s.jsx(I, {
              entryPoint: e,
              index: o.rowIndex,
              item: o.item,
              onRename:
                (n = t == null ? void 0 : t.onRename) != null
                  ? n
                  : r("WAWebNoop"),
              onDelete:
                (a = t == null ? void 0 : t.onDelete) != null
                  ? a
                  : r("WAWebNoop"),
            });
          },
          header: "",
          key: "actions",
          width: {
            options: { maxWidth: 60, minWidth: 40 },
            type: "proportional",
            value: 5,
          },
        },
      ];
    }
    function k(e) {
      var t = e.index,
        n = e.onDelete,
        a = e.onRename;
      return s.jsxs(r("WDSMenu.react"), {
        children: [
          s.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcEdit.react"),
            testid: void 0,
            title: o(
              "WAWebBizBroadcastsHomeStrings",
            ).getRenameAudienceActionLabel(),
            onPress: a,
          }),
          s.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcDelete.react"),
            testid: void 0,
            title: o("WAWebBizBroadcastsHomeStrings").getDeleteAudienceLabel(),
            onPress: n,
            destructive: !0,
          }),
        ],
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = e.entryPoint,
        n = e.index,
        a = e.item,
        i = e.onDelete,
        l = e.onRename,
        u = d(null),
        p = c(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.renameAudienceClicked(
              t,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
              a.broadcastJid,
            ),
              l(a));
          },
          [t, l, a],
        ),
        _ = c(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.deleteAudienceClicked(
              t,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
              a.broadcastJid,
            ),
              i(a));
          },
          [t, i, a],
        ),
        f = r("useWDSMenu")({
          dismissable: !0,
          enableUIM: !1,
          menu: s.jsx(k, { index: n, onRename: p, onDelete: _ }),
          targetRef: u,
        }),
        g = f.closeMenu,
        h = f.isMenuOpen,
        y = f.menuPortal,
        C = f.openMenu,
        b = c(
          function (e) {
            (e.stopPropagation(), h ? g() : C());
          },
          [h, g, C],
        );
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: m.actionsContainer,
        children: [
          s.jsx(r("WDSButton.react"), {
            ref: u,
            Icon: r("WDSIconIcMoreVert.react"),
            testid: void 0,
            variant: "borderless",
            size: "small",
            type: "default",
            onPress: b,
          }),
          y,
        ],
      });
    }
    ((I.displayName = I.name + " [from " + i.id + "]"),
      (l.formatDate = h),
      (l.getStatusDisplay = b),
      (l.getStatusDetailDisplay = v),
      (l.getBroadcastColumns = S),
      (l.getAudienceColumns = E));
  },
  98,
);
