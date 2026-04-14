__d(
  "WAWebBizBroadcastHomeCreateAudienceButton.react",
  [
    "WAWebBizBroadcastAudienceSectionButtonContextMenu.react",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBizBroadcastsUploadModalLoadable.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebModalManager",
    "WAWebWamEnumSurfaceType",
    "WDSButton.react",
    "react",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useRef;
    function m(e) {
      var t = e.entryPoint,
        n = e.onCreateAudience,
        a = e.onUploadSuccess,
        i = d(null),
        l = c(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.importAudienceClicked(t),
              o("WAWebModalManager").ModalManager.open(
                s.jsx(
                  o("WAWebBizBroadcastsUploadModalLoadable.react")
                    .WAWebBizBroadcastsUploadModalLoadable,
                  {
                    entryPoint: t,
                    onCancel: function (n, r) {
                      (r === void 0 && (r = !1),
                        o("WAWebModalManager").ModalManager.close(),
                        r !== !0 &&
                          o(
                            "WAWebBusinessBroadcastUserJourneyLogger",
                          ).BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(
                            t,
                          ));
                    },
                    onUploadSuccess: a,
                  },
                ),
              ));
          },
          [t, a],
        ),
        u = s.jsx(
          r("WAWebBizBroadcastAudienceSectionButtonContextMenu.react"),
          {
            entryPoint: t,
            onImportAudience: l,
            onNewAudience: n,
            showExistingAudienceRow: !1,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
          },
        ),
        m = r("useWDSMenu")({ enableUIM: !1, menu: u, targetRef: i }),
        p = m.isMenuOpen,
        _ = m.menuPortal,
        f = m.openMenu;
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(r("WDSButton.react"), {
            ref: i,
            label: o("WAWebBizBroadcastsCreationStrings").getNewAudienceLabel(),
            variant: "outline",
            showEndDropdownIcon: !0,
            "aria-expanded": p,
            "aria-haspopup": "menu",
            onPress: function () {
              (o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.homeNewAudienceDropdownClicked(
                t,
              ),
                f());
            },
            testid: void 0,
          }),
          _,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
