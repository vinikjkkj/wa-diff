__d(
  "WAWebBroadcastInfoDrawer.react",
  [
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebBroadcastInfoLabelsRecipientsSection.react",
    "WAWebBroadcastInfoLabelsSection.react",
    "WAWebBroadcastInfoOverflowMenu.react",
    "WAWebBroadcastInfoRecipientsSection.react",
    "WAWebBroadcastInfoTopCard.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCmd",
    "WAWebDivider.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlex.react",
    "WAWebLabelCollection",
    "WAWebStateUtils",
    "WAWebUnstyledButton.react",
    "WAWebWidToJid",
    "WDSIconIcDelete.react",
    "WDSText.react",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState;
    function p(t) {
      "use no forget";
      var n,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = l.entryPoint,
        c = l.onAudienceUpdate,
        p = l.onClose,
        _ = l.onCloseFullScreen,
        f = l.onEditAudience,
        g = l.onNewBroadcast,
        h = l.shouldUseDrawer,
        y = h === void 0 ? !0 : h,
        C = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        b = o("useWAWebModelValues").useModelValues(l.chat, [
          "id",
          "broadcastMetadata",
        ]),
        v = o("WAWebWidToJid").widToBroadcastJid(b.id);
      d(
        function () {
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.audienceInfoDrawerViewed(s, v);
        },
        [s, v],
      );
      var S = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.audienceInfoDrawerCloseClicked(
            s,
            v,
          ),
            p());
        },
        R = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.audienceInfoDrawerDeleteClicked(
            s,
            v,
          ),
            o("WAWebCmd").Cmd.deleteOrExitChat(b),
            p());
        };
      o("useWAWebListener").useListener(
        (n = b.broadcastMetadata) == null ? void 0 : n.recipients,
        ["add", "remove", "sort", "reset"],
        C,
      );
      var L = (a = b.broadcastMetadata) == null ? void 0 : a.audienceExpression,
        E =
          L != null
            ? o("WAWebAudienceExpressionTypes").getLabelIdsFromExpression(L)
            : [],
        k = E.length > 0,
        I = m(null),
        T = I[0],
        D = I[1],
        x = T != null ? o("WAWebLabelCollection").LabelCollection.get(T) : null,
        $ =
          x != null
            ? u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                rtlFixIfOnDarwin: y,
                onBack: function () {
                  return D(null);
                },
                title: x.name,
              })
            : u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                rtlFixIfOnDarwin: y,
                onCancel: S,
                title: o(
                  "WAWebBizBroadcastsHomeStrings",
                ).getAudienceInfoPanelTitle(),
                menu: u.jsx(r("WAWebBroadcastInfoOverflowMenu.react"), {
                  chat: o("WAWebStateUtils").unproxy(b),
                  entryPoint: s,
                  onClose: p,
                  onCloseFullScreen: _,
                  onAudienceUpdate: c,
                  showOpenThread: !y,
                }),
              }),
        P = u.jsx(r("WAWebDrawerBody.react"), {
          children: u.jsx("div", {
            className: "xdl72j9 x1c4vz4f x2lah0s xvpt6g3",
            children:
              x != null
                ? u.jsx(r("WAWebBroadcastInfoLabelsRecipientsSection.react"), {
                    label: x,
                  })
                : u.jsxs(u.Fragment, {
                    children: [
                      u.jsx(r("WAWebBroadcastInfoTopCard.react"), {
                        chat: o("WAWebStateUtils").unproxy(b),
                        entryPoint: s,
                        onAudienceUpdate: c,
                        onEditAudience: f,
                        onNewBroadcast: g,
                      }),
                      k
                        ? u.jsx(r("WAWebBroadcastInfoLabelsSection.react"), {
                            chat: o("WAWebStateUtils").unproxy(b),
                            onLabelSelect: D,
                          })
                        : u.jsx(
                            r("WAWebBroadcastInfoRecipientsSection.react"),
                            { chat: o("WAWebStateUtils").unproxy(b) },
                          ),
                      u.jsxs("div", {
                        className: "x1p57kb1",
                        children: [
                          u.jsx(r("WAWebDivider.react"), {
                            direction: "horizontal",
                          }),
                          u.jsx("div", {
                            className: "x1p57kb1 xdx6fka",
                            children: u.jsx(r("WAWebUnstyledButton.react"), {
                              onClick: R,
                              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                                align: "center",
                                gap: 12,
                                children: [
                                  u.jsx(r("WDSIconIcDelete.react"), {
                                    colorName: "secondaryNegative",
                                  }),
                                  u.jsx(r("WDSText.react"), {
                                    type: "Body1",
                                    colorName: "secondaryNegative",
                                    children: o(
                                      "WAWebBizBroadcastsHomeStrings",
                                    ).getDeleteAudienceLabel(),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
          }),
        });
      return y
        ? u.jsxs(r("WAWebDrawer.react"), {
            ref: i,
            theme: "striped",
            tsNavigationData: {
              surface: "unknown",
              viewName: "broadcast-info",
            },
            children: [$, P],
          })
        : u.jsxs("div", {
            className:
              "x1280gxy x78zum5 xdt5ytf x5yr21d x6ikm8r x10wlt62 xh8yej3",
            children: [$, P],
          });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
