__d(
  "WAWebGalaxyFlowsResponseDownloadFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebABProps",
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebGalaxyFlowDownloadTracker",
    "WAWebGalaxyFlowWamLoggerUtils",
    "WAWebGalaxyFlowsResponseDownloadUtils",
    "WAWebIcAssignmentIcon.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebProtobufsE2E.pb",
    "WAWebRadio.react",
    "WAWebSendNonMessageDataRequest",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "react",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useState,
      _ = {
        popoverOptions: {
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xif0l9a",
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x6hs5rg",
          $$css: !0,
        },
        icon: { color: "xhslqc4", $$css: !0 },
        radioContainer: { width: "xh8yej3", alignItems: "x1qjc9v5", $$css: !0 },
        radioOption: { alignSelf: "xkh2ocl", $$css: !0 },
      },
      f = n("$InternalEnum").Mirrored([
        "ONLY_THIS_RESPONSE",
        "ALL_RESPONSES_TO_THIS_FORM",
      ]),
      g =
        ((e = {}),
        (e[f.ONLY_THIS_RESPONSE] = "DOWNLOAD_SINGLE_RESPONSE"),
        (e[f.ALL_RESPONSES_TO_THIS_FORM] = "DOWNLOAD_ALL_RESPONSES"),
        e),
      h = function () {
        var e = [
          {
            value: f.ONLY_THIS_RESPONSE,
            label: s._(/*BTDS*/ "Only this response"),
            secondaryLabel: "",
          },
        ];
        return (
          o("WAWebABProps").getABPropConfigValue(
            "flows_wa_web_responses_download",
          ) &&
            e.push({
              value: f.ALL_RESPONSES_TO_THIS_FORM,
              label: s._(/*BTDS*/ "All responses from the last 30 days"),
              secondaryLabel: "",
            }),
          e
        );
      };
    function y(e) {
      var t,
        n,
        a = e.bizPlatform,
        i = e.businessOwnerJid,
        l = e.flowId,
        u = e.flowName,
        d = e.flowResponseMessage,
        y = e.flowWAMMessageId,
        C = e.flowWAMSessionId,
        b = e.getFileDownloadRef,
        v = e.phoneNumber,
        S = e.timestamp,
        R = r("useWAWebFocusOnMount")(),
        L = p(),
        E = L[0],
        k = L[1],
        I = function () {
          if (
            (E != null &&
              o("WAWebGalaxyFlowWamLoggerUtils").logFlowsScreenActionWAMEvent({
                bizPlatform: a,
                businessOwnerJid: i,
                clickType: g[E],
                currentFlowId: l,
                flowsMessageId: y,
                flowsSessionId: C,
              }),
            E === f.ONLY_THIS_RESPONSE)
          )
            o("WAWebGalaxyFlowsResponseDownloadUtils").manageResponseDownload(
              l,
              u,
              d,
              v,
              S,
              b,
            );
          else if (E === f.ALL_RESPONSES_TO_THIS_FORM) {
            var e = r("WAWebPonyfillsCryptoRandomUUID")();
            (o(
              "WAWebGalaxyFlowDownloadTracker",
            ).GalaxyFlowDownloadTracker.registerRequest(e),
              o("WAWebSendNonMessageDataRequest")
                .sendPeerDataOperationRequest(
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .GALAXY_FLOW_ACTION,
                  { actionType: "DOWNLOAD_RESPONSES", flowId: l, requestId: e },
                )
                .catch(function () {
                  o(
                    "WAWebGalaxyFlowDownloadTracker",
                  ).GalaxyFlowDownloadTracker.failRequest(e);
                }));
          }
          o("WAWebModalManager").ModalManager.close();
        },
        T = m(
          function () {
            return u != null && (u == null ? void 0 : u.length) > 0 ? u : l;
          },
          [l, u],
        );
      return c.jsxs(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.GalaxyFlowResponsePopup,
        ref: R,
        actions: [
          c.jsx(
            o("WAWebButton.react").Button,
            {
              buttonType: "button",
              stretch: !0,
              type: "primary",
              disabled: E == null,
              onClick: I,
              children: s._(/*BTDS*/ "Confirm"),
            },
            "confirm_btn",
          ),
        ],
        children: [
          c.jsxs((t = o("WAWebFlex.react")).FlexRow, {
            align: "center",
            xstyle: [
              (n = o("WAWebUISpacing")).uiPadding.horiz30,
              n.uiPadding.vert20,
            ],
            children: [
              c.jsxs(t.FlexColumn, {
                grow: 1,
                children: [
                  c.jsx(o("WAWebText.react").WAWebTextTitle, {
                    children: s._(/*BTDS*/ "Download form response"),
                  }),
                  c.jsxs(t.FlexRow, {
                    justify: "center",
                    align: "center",
                    gap: 4,
                    children: [
                      c.jsx(o("WAWebIcAssignmentIcon.react").IcAssignmentIcon, {
                        width: 14,
                        height: 14,
                        viewBox: { height: 24, width: 24, x: 0, y: 0 },
                        xstyle: _.icon,
                      }),
                      c.jsx(o("WAWebText.react").WAWebTextMuted, {
                        children: T,
                      }),
                    ],
                  }),
                ],
              }),
              c.jsx(r("WDSButton.react"), {
                Icon: r("WDSIconIcClose.react"),
                variant: "borderless",
                size: "medium",
                "aria-label": r("WAWebFbtCommon")("Close"),
                onPress: o("WAWebModalManager").closeModalManager,
              }),
            ],
          }),
          c.jsx(t.FlexRow, {
            align: "center",
            xstyle: [n.uiPadding.horiz30, n.uiPadding.vert15, _.popoverOptions],
            children: c.jsxs(t.FlexColumn, {
              gap: 16,
              xstyle: _.radioContainer,
              children: [
                c.jsx(o("WAWebRadio.react").RadioGroup, {
                  name: "radio",
                  checkedValue: E != null ? E : null,
                  options: h().map(function (e) {
                    return {
                      value: e.value,
                      label: e.label,
                      secondaryLabel: e.secondaryLabel,
                      onChange: function () {
                        return k(e.value);
                      },
                      xstyle: _.radioOption,
                    };
                  }),
                }),
                !o("WAWebABProps").getABPropConfigValue(
                  "flows_wa_web_responses_download",
                ) &&
                  c.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(
                      /*BTDS*/ "To access 30 days of data, please use your primary device.",
                    ),
                  }),
              ],
            }),
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
