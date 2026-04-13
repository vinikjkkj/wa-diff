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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(19),
        n = e.entryPoint,
        a = e.onCreateAudience,
        i = e.onUploadSuccess,
        l = d(null),
        u;
      t[0] !== n || t[1] !== i
        ? ((u = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.importAudienceClicked(n),
              o("WAWebModalManager").ModalManager.open(
                s.jsx(
                  o("WAWebBizBroadcastsUploadModalLoadable.react")
                    .WAWebBizBroadcastsUploadModalLoadable,
                  {
                    entryPoint: n,
                    onCancel: function (t, r) {
                      var e = r === void 0 ? !1 : r;
                      (o("WAWebModalManager").ModalManager.close(),
                        e !== !0 &&
                          o(
                            "WAWebBusinessBroadcastUserJourneyLogger",
                          ).BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(
                            n,
                          ));
                    },
                    onUploadSuccess: i,
                  },
                ),
              ));
          }),
          (t[0] = n),
          (t[1] = i),
          (t[2] = u))
        : (u = t[2]);
      var c = u,
        m;
      t[3] !== n || t[4] !== a || t[5] !== c
        ? ((m = s.jsx(
            r("WAWebBizBroadcastAudienceSectionButtonContextMenu.react"),
            {
              entryPoint: n,
              onImportAudience: c,
              onNewAudience: a,
              showExistingAudienceRow: !1,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
            },
          )),
          (t[3] = n),
          (t[4] = a),
          (t[5] = c),
          (t[6] = m))
        : (m = t[6]);
      var p = m,
        _;
      t[7] !== p
        ? ((_ = { enableUIM: !1, menu: p, targetRef: l }),
          (t[7] = p),
          (t[8] = _))
        : (_ = t[8]);
      var f = r("useWDSMenu")(_),
        g = f.isMenuOpen,
        h = f.menuPortal,
        y = f.openMenu,
        C;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = o("WAWebBizBroadcastsCreationStrings").getNewAudienceLabel()),
          (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] !== n || t[11] !== y
        ? ((b = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.homeNewAudienceDropdownClicked(
              n,
            ),
              y());
          }),
          (t[10] = n),
          (t[11] = y),
          (t[12] = b))
        : (b = t[12]);
      var v;
      t[13] !== g || t[14] !== b
        ? ((v = s.jsx(r("WDSButton.react"), {
            ref: l,
            label: C,
            variant: "outline",
            showEndDropdownIcon: !0,
            "aria-expanded": g,
            "aria-haspopup": "menu",
            onPress: b,
            testid: void 0,
          })),
          (t[13] = g),
          (t[14] = b),
          (t[15] = v))
        : (v = t[15]);
      var S;
      return (
        t[16] !== h || t[17] !== v
          ? ((S = s.jsxs(s.Fragment, { children: [v, h] })),
            (t[16] = h),
            (t[17] = v),
            (t[18] = S))
          : (S = t[18]),
        S
      );
    }
    l.default = m;
  },
  98,
);
