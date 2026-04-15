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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(11),
        n = e.index,
        a = e.onDelete,
        i = e.onPreview,
        l = "biz-broadcasts-campaign-table-preview-action-" + n,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = o("WAWebBizBroadcastsHomeStrings").getPreviewActionLabel()),
          (t[0] = u))
        : (u = t[0]);
      var c;
      t[1] !== i || t[2] !== l
        ? ((c = s.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcVisibility.react"),
            testid: void 0,
            title: u,
            onPress: i,
          })),
          (t[1] = i),
          (t[2] = l),
          (t[3] = c))
        : (c = t[3]);
      var d = "biz-broadcasts-campaign-table-delete-action-" + n,
        m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o("WAWebBizBroadcastsHomeStrings").getDeleteActionLabel()),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] !== a || t[6] !== d
        ? ((p = s.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcDelete.react"),
            testid: void 0,
            title: m,
            onPress: a,
            destructive: !0,
          })),
          (t[5] = a),
          (t[6] = d),
          (t[7] = p))
        : (p = t[7]);
      var _;
      return (
        t[8] !== c || t[9] !== p
          ? ((_ = s.jsxs(r("WDSMenu.react"), { children: [c, p] })),
            (t[8] = c),
            (t[9] = p),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.broadcastJid,
        a = e.entryPoint,
        i = e.index,
        l = e.item,
        u = e.onPreview,
        c = d(null),
        p;
      t[0] !== a || t[1] !== l || t[2] !== u
        ? ((p = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.broadcastPreviewClicked(
              a,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.OVERFLOW_MENU,
            ),
              u(l));
          }),
          (t[0] = a),
          (t[1] = l),
          (t[2] = u),
          (t[3] = p))
        : (p = t[3]);
      var _ = p,
        f;
      t[4] !== n || t[5] !== a || t[6] !== l.campaignId
        ? ((f = function () {
            o("WAWebModalManager").ModalManager.open(
              s.jsx(
                o("WAWebBizBroadcastDeleteConfirmationModalLoadable")
                  .WAWebBizBroadcastDeleteConfirmationModalLoadable,
                {
                  broadcastJid: n,
                  campaignId: l.campaignId,
                  entryPoint: a,
                  surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
                },
              ),
            );
          }),
          (t[4] = n),
          (t[5] = a),
          (t[6] = l.campaignId),
          (t[7] = f))
        : (f = t[7]);
      var g = f,
        h;
      t[8] !== g || t[9] !== _ || t[10] !== i
        ? ((h = {
            dismissable: !0,
            enableUIM: !1,
            menu: s.jsx(R, { index: i, onDelete: g, onPreview: _ }),
            targetRef: c,
          }),
          (t[8] = g),
          (t[9] = _),
          (t[10] = i),
          (t[11] = h))
        : (h = t[11]);
      var y = r("useWDSMenu")(h),
        C = y.closeMenu,
        b = y.isMenuOpen,
        v = y.menuPortal,
        S = y.openMenu,
        L;
      t[12] !== C || t[13] !== a || t[14] !== b || t[15] !== S
        ? ((L = function (t) {
            (t.stopPropagation(),
              b
                ? C()
                : (o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.broadcastItemOverflowClicked(
                    a,
                  ),
                  S()));
          }),
          (t[12] = C),
          (t[13] = a),
          (t[14] = b),
          (t[15] = S),
          (t[16] = L))
        : (L = t[16]);
      var E = L,
        k = "biz-broadcasts-campaign-table-actions-button-" + i,
        I;
      t[17] !== E || t[18] !== k
        ? ((I = s.jsx(r("WDSButton.react"), {
            ref: c,
            Icon: r("WDSIconIcMoreVert.react"),
            testid: void 0,
            variant: "borderless",
            size: "small",
            type: "default",
            onPress: E,
          })),
          (t[17] = E),
          (t[18] = k),
          (t[19] = I))
        : (I = t[19]);
      var T;
      return (
        t[20] !== v || t[21] !== I
          ? ((T = s.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: m.actionsContainer,
              children: [I, v],
            })),
            (t[20] = v),
            (t[21] = I),
            (t[22] = T))
          : (T = t[22]),
        T
      );
    }
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
      var t = o("react-compiler-runtime").c(11),
        n = e.index,
        a = e.onDelete,
        i = e.onRename,
        l = "biz-broadcasts-audience-table-rename-action-" + n,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = o(
            "WAWebBizBroadcastsHomeStrings",
          ).getRenameAudienceActionLabel()),
          (t[0] = u))
        : (u = t[0]);
      var c;
      t[1] !== i || t[2] !== l
        ? ((c = s.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcEdit.react"),
            testid: void 0,
            title: u,
            onPress: i,
          })),
          (t[1] = i),
          (t[2] = l),
          (t[3] = c))
        : (c = t[3]);
      var d = "biz-broadcasts-audience-table-delete-action-" + n,
        m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o("WAWebBizBroadcastsHomeStrings").getDeleteAudienceLabel()),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] !== a || t[6] !== d
        ? ((p = s.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcDelete.react"),
            testid: void 0,
            title: m,
            onPress: a,
            destructive: !0,
          })),
          (t[5] = a),
          (t[6] = d),
          (t[7] = p))
        : (p = t[7]);
      var _;
      return (
        t[8] !== c || t[9] !== p
          ? ((_ = s.jsxs(r("WDSMenu.react"), { children: [c, p] })),
            (t[8] = c),
            (t[9] = p),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.entryPoint,
        a = e.index,
        i = e.item,
        l = e.onDelete,
        u = e.onRename,
        c = d(null),
        p;
      t[0] !== n || t[1] !== i || t[2] !== u
        ? ((p = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.renameAudienceClicked(
              n,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
              i.broadcastJid,
            ),
              u(i));
          }),
          (t[0] = n),
          (t[1] = i),
          (t[2] = u),
          (t[3] = p))
        : (p = t[3]);
      var _ = p,
        f;
      t[4] !== n || t[5] !== i || t[6] !== l
        ? ((f = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.deleteAudienceClicked(
              n,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
              i.broadcastJid,
            ),
              l(i));
          }),
          (t[4] = n),
          (t[5] = i),
          (t[6] = l),
          (t[7] = f))
        : (f = t[7]);
      var g = f,
        h;
      t[8] !== g || t[9] !== _ || t[10] !== a
        ? ((h = {
            dismissable: !0,
            enableUIM: !1,
            menu: s.jsx(k, { index: a, onRename: _, onDelete: g }),
            targetRef: c,
          }),
          (t[8] = g),
          (t[9] = _),
          (t[10] = a),
          (t[11] = h))
        : (h = t[11]);
      var y = r("useWDSMenu")(h),
        C = y.closeMenu,
        b = y.isMenuOpen,
        v = y.menuPortal,
        S = y.openMenu,
        R;
      t[12] !== C || t[13] !== b || t[14] !== S
        ? ((R = function (t) {
            (t.stopPropagation(), b ? C() : S());
          }),
          (t[12] = C),
          (t[13] = b),
          (t[14] = S),
          (t[15] = R))
        : (R = t[15]);
      var L = R,
        E = "biz-broadcasts-audience-table-actions-button-" + a,
        I;
      t[16] !== L || t[17] !== E
        ? ((I = s.jsx(r("WDSButton.react"), {
            ref: c,
            Icon: r("WDSIconIcMoreVert.react"),
            testid: void 0,
            variant: "borderless",
            size: "small",
            type: "default",
            onPress: L,
          })),
          (t[16] = L),
          (t[17] = E),
          (t[18] = I))
        : (I = t[18]);
      var T;
      return (
        t[19] !== v || t[20] !== I
          ? ((T = s.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: m.actionsContainer,
              children: [I, v],
            })),
            (t[19] = v),
            (t[20] = I),
            (t[21] = T))
          : (T = t[21]),
        T
      );
    }
    ((l.formatDate = h),
      (l.getStatusDisplay = b),
      (l.getStatusDetailDisplay = v),
      (l.getBroadcastColumns = S),
      (l.getAudienceColumns = E));
  },
  98,
);
