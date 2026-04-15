__d(
  "WAWebBusinessBroadcastDetailsDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebBizBroadcastDeleteConfirmationModalLoadable",
    "WAWebBizBroadcastDeliveredToDrawer.react",
    "WAWebBizBroadcastInsightsPeerOps",
    "WAWebBizBroadcastPerformanceExplainedModalLoadable",
    "WAWebBizBroadcastPreviewMessageBubble.react",
    "WAWebBizBroadcastRateUtils",
    "WAWebBizBroadcastsAudienceStrings",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebBroadcastConsts",
    "WAWebBusinessBroadcastHomeTableColumns.react",
    "WAWebBusinessBroadcastInlineEditableText.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebClock",
    "WAWebDivider.react",
    "WAWebDrawerHeader.react",
    "WAWebDropdownItem.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebRenameBroadcastCampaignAction",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumSurfaceType",
    "WDSActionTile.react",
    "WDSIconIcDelete.react",
    "WDSIconIcEdit.react",
    "WDSIconIcGroup.react",
    "WDSIconIcInfo.react",
    "WDSIconIcMoreVert.react",
    "WDSIconIcReply.react",
    "WDSIconIcVisibility.react",
    "WDSIconWdsIcRead.react",
    "WDSMenuBarItem.react",
    "WDSSpinner.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBroadcastInsights",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = 1e4,
      h = {
        actionTilesContainer: {
          alignItems: "x6s0dn4",
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          width: "xh8yej3",
          $$css: !0,
        },
        clickableRow: { cursor: "x1ypdohk", $$css: !0 },
        dividerWrapper: {
          flexShrink: "x2lah0s",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
        drawerContainer: {
          backgroundColor: "x1280gxy",
          height: "x5yr21d",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          width: "xh8yej3",
          $$css: !0,
        },
        editNameInput: { fontSize: "x1aueamr", $$css: !0 },
        lastUpdatedRow: {
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        measureSpan: { fontSize: "x1aueamr", $$css: !0 },
        messageSection: {
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          paddingBottom: "xvpt6g3",
          paddingTop: "x1h678fw",
          width: "xh8yej3",
          $$css: !0,
        },
        metricIcon: { objectPosition: "xm9wsd5", width: "xvy4d1p", $$css: !0 },
        metricRight: { alignItems: "xuk3077", $$css: !0 },
        metricRow: {
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          width: "xh8yej3",
          $$css: !0,
        },
        previewContainer: {
          backgroundColor: "x1q80dvb",
          boxSizing: "x9f619",
          flex: "x98rzlu",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          width: "xh8yej3",
          $$css: !0,
        },
        scrollableContent: {
          flex: "x98rzlu",
          minHeight: "x2lwn1j",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          width: "xh8yej3",
          $$css: !0,
        },
        sectionDivider: {
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x1p57kb1",
          width: "xh8yej3",
          $$css: !0,
        },
        sectionDividerRow: { columnGap: "x1trrmfo", $$css: !0 },
        spinnerColor: { color: "xo1mcw5", stroke: "x7iy8sv", $$css: !0 },
        titleSection: {
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          minWidth: "xeuugli",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          textAlign: "x2b8uid",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function y(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.deemphasized,
        a = e.icon,
        i = e.label,
        l = e.onClick,
        s = e.sublabel,
        u = e.value,
        d = e.valueSublabel,
        m = n === void 0 ? !1 : n,
        p = m ? "contentDeemphasized" : "contentDefault",
        _;
      t[0] !== a
        ? ((_ = c.jsx(o("WAWebFlex.react").FlexItem, {
            shrink: 0,
            xstyle: h.metricIcon,
            children: a,
          })),
          (t[0] = a),
          (t[1] = _))
        : (_ = t[1]);
      var f;
      t[2] !== i
        ? ((f = c.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: i,
          })),
          (t[2] = i),
          (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] !== s
        ? ((g =
            s != null
              ? c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s,
                })
              : null),
          (t[4] = s),
          (t[5] = g))
        : (g = t[5]);
      var y;
      t[6] !== f || t[7] !== g
        ? ((y = c.jsxs(o("WAWebFlex.react").FlexColumn, { children: [f, g] })),
          (t[6] = f),
          (t[7] = g),
          (t[8] = y))
        : (y = t[8]);
      var C;
      t[9] !== u || t[10] !== p || t[11] !== d
        ? ((C =
            u != null
              ? c.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: h.metricRight,
                  children: [
                    c.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: p,
                      children: u,
                    }),
                    d != null
                      ? c.jsx(r("WDSText.react"), {
                          type: "Body2",
                          colorName: "contentDeemphasized",
                          children: d,
                        })
                      : null,
                  ],
                })
              : null),
          (t[9] = u),
          (t[10] = p),
          (t[11] = d),
          (t[12] = C))
        : (C = t[12]);
      var b;
      t[13] !== y || t[14] !== C
        ? ((b = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "all",
            grow: 1,
            children: [y, C],
          })),
          (t[13] = y),
          (t[14] = C),
          (t[15] = b))
        : (b = t[15]);
      var v;
      t[16] !== _ || t[17] !== b
        ? ((v = c.jsxs(o("WAWebFlex.react").FlexRow, {
            gap: 20,
            align: "center",
            xstyle: h.metricRow,
            children: [_, b],
          })),
          (t[16] = _),
          (t[17] = b),
          (t[18] = v))
        : (v = t[18]);
      var S = v;
      if (l != null) {
        var R;
        return (
          t[19] !== S || t[20] !== l
            ? ((R = c.jsx(r("WAWebUnstyledButton.react"), {
                onClick: l,
                xstyle: h.clickableRow,
                children: S,
              })),
              (t[19] = S),
              (t[20] = l),
              (t[21] = R))
            : (R = t[21]),
          R
        );
      }
      return S;
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.colorName,
        a = e.icon,
        i = e.label,
        l = e.onClick,
        s = e.sublabel,
        u = n === void 0 ? "contentDefault" : n,
        d;
      t[0] !== a
        ? ((d = c.jsx(o("WAWebFlex.react").FlexItem, {
            shrink: 0,
            xstyle: h.metricIcon,
            children: a,
          })),
          (t[0] = a),
          (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] !== u || t[3] !== i
        ? ((m = c.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: u,
            maxLines: 1,
            children: i,
          })),
          (t[2] = u),
          (t[3] = i),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] !== s
        ? ((p =
            s != null
              ? c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s,
                })
              : null),
          (t[5] = s),
          (t[6] = p))
        : (p = t[6]);
      var _;
      t[7] !== m || t[8] !== p
        ? ((_ = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            children: [m, p],
          })),
          (t[7] = m),
          (t[8] = p),
          (t[9] = _))
        : (_ = t[9]);
      var f;
      t[10] !== d || t[11] !== _
        ? ((f = c.jsxs(o("WAWebFlex.react").FlexRow, {
            gap: 20,
            align: "center",
            xstyle: h.metricRow,
            children: [d, _],
          })),
          (t[10] = d),
          (t[11] = _),
          (t[12] = f))
        : (f = t[12]);
      var g = f;
      if (l != null) {
        var y;
        return (
          t[13] !== g || t[14] !== l
            ? ((y = c.jsx(r("WAWebUnstyledButton.react"), {
                onClick: l,
                xstyle: h.clickableRow,
                children: g,
              })),
              (t[13] = g),
              (t[14] = l),
              (t[15] = y))
            : (y = t[15]),
          y
        );
      }
      return g;
    }
    function b(t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        d,
        b,
        S,
        R = t.entryPoint,
        L = t.initialShowPreview,
        E = L === void 0 ? !1 : L,
        k = t.item,
        I = t.onClose,
        T = t.onRenameSuccess;
      p(
        function () {
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.broadcastInfoDrawerViewed(
            R,
            k.campaignId,
          );
        },
        [R, k.campaignId],
      );
      var D = _(null),
        x = f(E),
        $ = x[0],
        P = x[1],
        N = f(!1),
        M = N[0],
        w = N[1],
        A = r("useWAWebBroadcastInsights")(k.campaignId),
        F = A.insights,
        O =
          (n = F == null ? void 0 : F.deliveredCount) != null
            ? n
            : k.deliveredCount,
        B =
          (a = F == null ? void 0 : F.readCount) != null ? a : k.readRate.count,
        W =
          ((i = F == null ? void 0 : F.repliedCount) != null ? i : 0) +
          ((l = F == null ? void 0 : F.quickReplyCount) != null ? l : 0),
        q = F != null ? W : k.replyRate.count,
        U =
          (s =
            (u = F == null ? void 0 : F.recipientCount) != null
              ? u
              : k.recipientCount) != null
            ? s
            : 0,
        V = o("WAWebBizBroadcastRateUtils").computeCampaignRates({
          deliveredCount: O,
          readCount: B,
          recipientCount: U,
          repliedCount: q,
        }),
        H = V.readRate,
        G = V.replyRate,
        z =
          (d = F == null ? void 0 : F.lastUpdatedTimestampMs) != null
            ? d
            : k.lastUpdatedTimestampMs,
        j = f(!1),
        K = j[0],
        Q = j[1],
        X = _(null),
        Y = _(null);
      (p(
        function () {
          K &&
            Y.current != null &&
            z != null &&
            z > Y.current &&
            (X.current != null &&
              (window.clearTimeout(X.current), (X.current = null)),
            (Y.current = null),
            Q(!1),
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, {
                msg: o(
                  "WAWebBizBroadcastsHomeStrings",
                ).getPerformanceMetricsUpdatedToast(),
              }),
            ));
        },
        [K, z],
      ),
        p(function () {
          return function () {
            X.current != null && window.clearTimeout(X.current);
          };
        }, []));
      var J = m(
          function () {
            K ||
              (o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.refreshInsightsClicked(R),
              (Y.current = z != null ? z : 0),
              Q(!0),
              o("WAWebBizBroadcastInsightsPeerOps")
                .sendInsightsRefreshPoke(k.campaignId)
                .catch(r("WAWebNoop")),
              (X.current = window.setTimeout(function () {
                (Q(!1),
                  (Y.current = null),
                  o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, {
                      msg: o(
                        "WAWebBizBroadcastsHomeStrings",
                      ).getPrimaryOfflineInsightsToast(),
                    }),
                  ));
              }, g)));
          },
          [R, K, k.campaignId, z],
        ),
        Z = m(
          function () {
            var e;
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.renameBroadcastClicked(R),
              (e = D.current) == null || e.startEdit());
          },
          [R],
        ),
        ee = m(
          function (e) {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.undoRenameBroadcastClicked(R),
              o("WAWebRenameBroadcastCampaignAction")
                .renameBroadcastCampaignAction(k.campaignId, e)
                .then(function (t) {
                  t && (T == null || T(e));
                })
                .catch(r("WAWebNoop")));
          },
          [R, k.campaignId, T],
        ),
        te = m(
          function (t) {
            var n = k.campaignName;
            return o("WAWebRenameBroadcastCampaignAction")
              .renameBroadcastCampaignAction(k.campaignId, t)
              .then(function (e) {
                e
                  ? (o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.renameBroadcastResult(
                      R,
                      "success",
                    ),
                    T == null || T(t),
                    o("WAWebToastManager").ToastManager.open(
                      c.jsx(o("WAWebToast.react").Toast, {
                        msg: o(
                          "WAWebBizBroadcastsHomeStrings",
                        ).getBroadcastRenamedToastMessage(),
                        action: {
                          actionText: r("WAWebFbtCommon")("Undo"),
                          onAction: function () {
                            return ee(n);
                          },
                        },
                      }),
                    ))
                  : (o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.renameBroadcastResult(
                      R,
                      "failure",
                    ),
                    o("WAWebToastManager").ToastManager.open(
                      c.jsx(o("WAWebToast.react").Toast, {
                        msg: o(
                          "WAWebBizBroadcastsHomeStrings",
                        ).getBroadcastRenameFailedToastMessage(),
                      }),
                    ));
              })
              .catch(function (t) {
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAWebBusinessBroadcastDetailsDrawer] Rename failed: ",
                      "",
                    ])),
                  t,
                ),
                  o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.renameBroadcastResult(
                    R,
                    "failure",
                  ),
                  o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, {
                      msg: o(
                        "WAWebBizBroadcastsHomeStrings",
                      ).getBroadcastRenameFailedToastMessage(),
                    }),
                  ));
              });
          },
          [R, ee, k.campaignId, k.campaignName, T],
        ),
        ne = m(
          function () {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(
                o("WAWebBizBroadcastDeleteConfirmationModalLoadable")
                  .WAWebBizBroadcastDeleteConfirmationModalLoadable,
                {
                  broadcastJid: k.broadcastJid,
                  campaignId: k.campaignId,
                  entryPoint: R,
                  surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                    .BB_BROADCAST_INFO_DRAWER,
                },
              ),
            );
          },
          [R, k.broadcastJid, k.campaignId],
        ),
        re = o(
          "WAWebBusinessBroadcastHomeTableColumns.react",
        ).getStatusDetailDisplay(k.status, k.sentAt, k.scheduledTimestamp),
        oe = c.jsx(r("WDSMenuBarItem.react"), {
          testid: void 0,
          icon: r("WDSIconIcMoreVert.react"),
          title: o("WAWebBizBroadcastsHomeStrings").getMenuButtonTitle(),
          dropdownMenu: {
            menu: [
              c.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: Z,
                  icon: c.jsx(r("WDSIconIcEdit.react"), {}),
                  children: o(
                    "WAWebBizBroadcastsHomeStrings",
                  ).getRenameBroadcastActionLabel(),
                },
                "rename-broadcast",
              ),
              c.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: ne,
                  icon: c.jsx(r("WDSIconIcDelete.react"), {}),
                  theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                    .Negative,
                  children: o(
                    "WAWebBizBroadcastsHomeStrings",
                  ).getDeleteActionLabel(),
                },
                "delete-broadcast",
              ),
            ],
          },
        });
      return M
        ? c.jsx(r("WAWebBizBroadcastDeliveredToDrawer.react"), {
            campaignId: k.campaignId,
            entryPoint: R,
            onClose: function () {
              return w(!1);
            },
          })
        : $
          ? c.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: h.drawerContainer,
              children: [
                c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  type: "small",
                  title: o(
                    "WAWebBizBroadcastsHomeStrings",
                  ).getBroadcastPreviewTitle(),
                  onBack: function () {
                    return P(!1);
                  },
                }),
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  align: "center",
                  grow: 1,
                  xstyle: h.previewContainer,
                  children: c.jsx(
                    r("WAWebBizBroadcastPreviewMessageBubble.react"),
                    {
                      attachmentData: k.attachmentData,
                      message: k.messageBody,
                      buttonData: k.ctaButtonData,
                    },
                  ),
                }),
              ],
            })
          : c.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: h.drawerContainer,
              children: [
                c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  type: "small",
                  title: o(
                    "WAWebBizBroadcastsHomeStrings",
                  ).getBroadcastDetailsTitle(),
                  onCancel: function () {
                    (o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.detailsPanelCloseClicked(
                      R,
                    ),
                      I());
                  },
                  menu: oe,
                }),
                c.jsxs(o("WAWebFlex.react").FlexColumn, {
                  align: "stretch",
                  xstyle: h.scrollableContent,
                  children: [
                    c.jsx(o("WAWebFlex.react").FlexColumn, {
                      align: "center",
                      xstyle: h.messageSection,
                      children: c.jsx("div", {
                        className:
                          "x6egj2d xlr9sxt xvvg52n xwd4zgb xq8v1ta x2lah0s x1wkxgih x6ikm8r x10wlt62 xygnafs",
                        children:
                          ((b = k.attachmentData) == null
                            ? void 0
                            : b.previewUrl) != null
                            ? c.jsx("img", {
                                src: k.attachmentData.previewUrl,
                                alt: "",
                                className: "x5yr21d xl1xv1r xh8yej3",
                              })
                            : null,
                      }),
                    }),
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: h.titleSection,
                      children: c.jsx(
                        r("WAWebBusinessBroadcastInlineEditableText.react"),
                        {
                          ref: D,
                          value: k.campaignName,
                          onSave: te,
                          inputTestId: "broadcast-campaign-name-input",
                          inputXstyle: h.editNameInput,
                          measureXstyle: h.measureSpan,
                        },
                      ),
                    }),
                    c.jsx(o("WAWebFlex.react").FlexColumn, {
                      xstyle: h.actionTilesContainer,
                      children: c.jsx(r("WDSActionTile.react"), {
                        Icon: r("WDSIconIcVisibility.react"),
                        label: o(
                          "WAWebBizBroadcastsHomeStrings",
                        ).getPreviewActionLabel(),
                        onPress: function () {
                          (o(
                            "WAWebBusinessBroadcastUserJourneyLogger",
                          ).BusinessBroadcastUserJourneyLogger.broadcastPreviewClicked(
                            R,
                            o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                              .BB_BROADCAST_INFO_DRAWER,
                          ),
                            P(!0));
                        },
                      }),
                    }),
                    c.jsxs(o("WAWebFlex.react").FlexRow, {
                      align: "center",
                      xstyle: [h.sectionDivider, h.sectionDividerRow],
                      children: [
                        c.jsx(r("WDSText.react"), {
                          type: "Body1Emphasized",
                          colorName: "contentDefault",
                          children: o(
                            "WAWebBizBroadcastsHomeStrings",
                          ).getPerformanceSectionTitle(),
                        }),
                        c.jsx(r("WAWebUnstyledButton.react"), {
                          onClick: function () {
                            (o(
                              "WAWebBusinessBroadcastUserJourneyLogger",
                            ).BusinessBroadcastUserJourneyLogger.performanceExplainedClicked(
                              R,
                            ),
                              v());
                          },
                          children: c.jsx(r("WDSIconIcInfo.react"), {
                            colorName: "contentDeemphasized",
                            height: 16,
                            width: 16,
                          }),
                        }),
                      ],
                    }),
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: h.lastUpdatedRow,
                      children: c.jsxs(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        children: [
                          o(
                            "WAWebBizBroadcastsHomeStrings",
                          ).getLastUpdatedLabel(
                            z != null
                              ? o("WAWebClock").Clock.lastUpdatedDateStr(
                                  z / o("WAWebBroadcastConsts").MS_PER_SEC,
                                )
                              : o(
                                  "WAWebBusinessBroadcastHomeTableColumns.react",
                                ).formatDate(k.sentAt),
                          ),
                          " ",
                          K
                            ? c.jsx("span", {
                                className: "x3nfvp2 xxymvpz",
                                children: c.jsx(r("WDSSpinner.react"), {
                                  size: 16,
                                  stroke: 3,
                                  xstyle: h.spinnerColor,
                                }),
                              })
                            : c.jsx(o("WAWebText.react").WAWebClickableText, {
                                color: "green",
                                onClick: J,
                                children: o(
                                  "WAWebBizBroadcastsHomeStrings",
                                ).getRefreshInsightsLabel(),
                              }),
                        ],
                      }),
                    }),
                    O > 0 &&
                      c.jsxs(c.Fragment, {
                        children: [
                          c.jsx(y, {
                            icon: c.jsx(r("WDSIconIcGroup.react"), {}),
                            label: o(
                              "WAWebBizBroadcastsHomeStrings",
                            ).getDeliveredLabel(),
                            onClick: function () {
                              return w(!0);
                            },
                            value: O,
                          }),
                          c.jsx(y, {
                            deemphasized: H.percentage === 0,
                            icon: c.jsx(r("WDSIconWdsIcRead.react"), {}),
                            label: o(
                              "WAWebBizBroadcastsHomeStrings",
                            ).getReadRateColumnHeader(),
                            sublabel: o(
                              "WAWebBizBroadcastsHomeStrings",
                            ).getReadSublabel(),
                            value:
                              H.percentage === 0
                                ? "\u2014"
                                : o(
                                    "WAWebBizBroadcastsHomeStrings",
                                  ).getPercentageLabel(H.percentage),
                            valueSublabel:
                              H.percentage === 0 ? void 0 : H.count,
                          }),
                          c.jsx(y, {
                            deemphasized: G.percentage === 0,
                            icon: c.jsx(r("WDSIconIcReply.react"), {}),
                            label: o(
                              "WAWebBizBroadcastsHomeStrings",
                            ).getReplyRateColumnHeader(),
                            sublabel: o(
                              "WAWebBizBroadcastsHomeStrings",
                            ).getRepliesSublabel(),
                            value:
                              G.percentage === 0
                                ? "\u2014"
                                : o(
                                    "WAWebBizBroadcastsHomeStrings",
                                  ).getPercentageLabel(G.percentage),
                            valueSublabel:
                              G.percentage === 0 ? void 0 : G.count,
                          }),
                        ],
                      }),
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: h.dividerWrapper,
                      children: c.jsx(r("WAWebDivider.react"), {
                        direction: "horizontal",
                      }),
                    }),
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: h.sectionDivider,
                      children: c.jsx(r("WDSText.react"), {
                        type: "Body1Emphasized",
                        colorName: "contentDefault",
                        children: o(
                          "WAWebBizBroadcastsHomeStrings",
                        ).getDetailsSectionTitle(),
                      }),
                    }),
                    c.jsx(C, {
                      icon: re.icon,
                      label: re.text,
                      sublabel: (S = re.sublabel) != null ? S : void 0,
                    }),
                    c.jsx(C, {
                      icon: c.jsx(r("WDSIconIcGroup.react"), {}),
                      label:
                        k.audienceName != null && k.audienceName.trim() !== ""
                          ? k.audienceName
                          : o(
                              "WAWebBizBroadcastsAudienceStrings",
                            ).getUntitledListName(),
                      sublabel:
                        k.recipientCount == null || k.recipientCount === 0
                          ? "\u2014"
                          : o(
                              "WAWebBizBroadcastsCreationStrings",
                            ).getExistingAudienceRecipientsLabel(
                              k.recipientCount,
                            ),
                    }),
                    null,
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: h.dividerWrapper,
                      children: c.jsx(r("WAWebDivider.react"), {
                        direction: "horizontal",
                      }),
                    }),
                    c.jsx(C, {
                      colorName: "secondaryNegative",
                      icon: c.jsx(r("WDSIconIcDelete.react"), {
                        colorName: "secondaryNegative",
                      }),
                      label: o(
                        "WAWebBizBroadcastsHomeStrings",
                      ).getDeleteBroadcastLabel(),
                      onClick: ne,
                    }),
                  ],
                }),
              ],
            });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(
          o("WAWebBizBroadcastPerformanceExplainedModalLoadable")
            .WAWebBizBroadcastPerformanceExplainedModalLoadable,
          { onClose: o("WAWebModalManager").closeModalManager },
        ),
      );
    }
    l.default = b;
  },
  226,
);
