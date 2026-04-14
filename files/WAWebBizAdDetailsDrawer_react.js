__d(
  "WAWebBizAdDetailsDrawer.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCreationSectionDivider.react",
    "WAWebBizAdDetailsContent.react",
    "WAWebBizAdDetailsDrawer_asyncRequest.graphql",
    "WAWebBizAdDetailsDrawer_boostedComponent.graphql",
    "WAWebBizAdDetailsInfo.react",
    "WAWebBizAdDetailsPerformance.react",
    "WAWebBizAdManagementLogger",
    "WAWebBizAdPreviewDrawer.react",
    "WAWebFlex.react",
    "WAWebFlexBox.react",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSText.react",
    "react",
    "useWAWebNativeAdsFlowIDContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useRef,
      f = m.useState,
      g = {
        rightDrawerHeader: {
          height: "x1peatla",
          width: "xh8yej3",
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        sectionDivider: {
          height: "xsdox4t",
          paddingTop: "x1p57kb1",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        drawerContainer: { height: "x5yr21d", $$css: !0 },
        scrollableContent: {
          flex: "x98rzlu",
          minHeight: "x2lwn1j",
          overflowY: "x1odjw0f",
          paddingBottom: "x1ci70gm",
          $$css: !0,
        },
      },
      h =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdDetailsDrawer_boostedComponent.graphql")),
      y =
        u !== void 0
          ? u
          : (u = n("WAWebBizAdDetailsDrawer_asyncRequest.graphql"));
    function C(e) {
      var t,
        n,
        a = e.item,
        i = e.onClose,
        l = o("CometRelay").useFragment(h, a.boostedComponentRef),
        u = o("CometRelay").useFragment(y, a.asyncRequestRef),
        c = l != null ? l : u,
        m =
          (t =
            c == null || (n = c.spec) == null ? void 0 : n.boosting_status) !=
          null
            ? t
            : a.boostingStatus,
        C = babelHelpers.extends({}, a, { boostingStatus: m }),
        b = f(!1),
        v = b[0],
        S = b[1],
        R = r("useWAWebNativeAdsFlowIDContext")(),
        L = _(!1);
      p(
        function () {
          if (!L.current) {
            var e;
            ((L.current = !0),
              (e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
                e.LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS,
                e.LWI_SCREEN_ACTION.LWI_ACTION_SEE_DETAILS_VIEW,
                e.LWI_ADS_IDENTITY_TYPE.PAGE,
                R.manageAdsFlowID,
                a.boostId,
              ));
          }
        },
        [R.manageAdsFlowID, a.boostId],
      );
      var E = function () {
          S(!0);
        },
        k = function () {
          S(!1);
        };
      return v
        ? d.jsx(o("WAWebFlexBox.react").FlexColumn, {
            xstyle: g.drawerContainer,
            children: d.jsx(r("WAWebBizAdPreviewDrawer.react"), {
              item: C,
              onClose: k,
            }),
          })
        : d.jsxs(o("WAWebFlexBox.react").FlexColumn, {
            xstyle: g.drawerContainer,
            children: [
              d.jsxs(o("WAWebFlex.react").FlexRow, {
                gap: 12,
                align: "center",
                xstyle: g.rightDrawerHeader,
                children: [
                  d.jsx(r("WDSButton.react"), {
                    variant: "borderless",
                    Icon: r("WDSIconIcClose.react"),
                    onPress: i,
                  }),
                  d.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    children: s._(/*BTDS*/ "Ad details"),
                  }),
                ],
              }),
              d.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                xstyle: g.scrollableContent,
                children: [
                  d.jsx("div", {
                    className: "x2lah0s",
                    children: d.jsx(r("WAWebBizAdDetailsContent.react"), {
                      item: C,
                      onDelete: i,
                      onViewPreview: E,
                    }),
                  }),
                  d.jsx(r("WAWebBizAdCreationSectionDivider.react"), {
                    title: s._(/*BTDS*/ "Performance"),
                    xstyle: g.sectionDivider,
                  }),
                  d.jsx("div", {
                    className: "x2lah0s",
                    children: d.jsx(r("WAWebBizAdDetailsPerformance.react"), {
                      item: C,
                    }),
                  }),
                  d.jsx(r("WAWebBizAdCreationSectionDivider.react"), {
                    title: s._(/*BTDS*/ "Details"),
                    xstyle: g.sectionDivider,
                  }),
                  d.jsx("div", {
                    className: "x2lah0s",
                    children: d.jsx(r("WAWebBizAdDetailsInfo.react"), {
                      item: C,
                    }),
                  }),
                ],
              }),
            ],
          });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
