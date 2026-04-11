__d(
  "WAWebBizBroadcastAudienceSectionButtonContextMenu.react",
  [
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WDSIconIcAdd.react",
    "WDSIconIcGroup.react",
    "WDSIconIcUpload.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect;
    function m(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.entryPoint,
        a = e.onExistingAudiences,
        i = e.onImportAudience,
        l = e.onNewAudience,
        u = e.showExistingAudienceRow,
        c = e.surface,
        m,
        p;
      (t[0] !== n || t[1] !== u
        ? ((m = function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.createBroadcastAudienceMenuViewed(
              u,
              n,
            );
          }),
          (p = [u, n]),
          (t[0] = n),
          (t[1] = u),
          (t[2] = m),
          (t[3] = p))
        : ((m = t[2]), (p = t[3])),
        d(m, p));
      var _;
      t[4] !== n || t[5] !== a
        ? ((_ = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.createBroadcastAudienceMenuExistingAudiencesClicked(
              n,
            ),
              a == null || a());
          }),
          (t[4] = n),
          (t[5] = a),
          (t[6] = _))
        : (_ = t[6]);
      var f = _,
        g;
      t[7] !== n || t[8] !== l || t[9] !== c
        ? ((g = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.createAudienceButtonClicked(
              n,
              c,
            ),
              l == null || l());
          }),
          (t[7] = n),
          (t[8] = l),
          (t[9] = c),
          (t[10] = g))
        : (g = t[10]);
      var h = g,
        y;
      t[11] !== n || t[12] !== i || t[13] !== c
        ? ((y = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.importAudienceButtonClicked(
              n,
              c,
            ),
              i == null || i());
          }),
          (t[11] = n),
          (t[12] = i),
          (t[13] = c),
          (t[14] = y))
        : (y = t[14]);
      var C = y,
        b;
      t[15] !== f || t[16] !== u
        ? ((b =
            u &&
            s.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcGroup.react"),
              title: o(
                "WAWebBizBroadcastsCreationStrings",
              ).getExistingAudiencesLabel(),
              onPress: f,
              testid: void 0,
            })),
          (t[15] = f),
          (t[16] = u),
          (t[17] = b))
        : (b = t[17]);
      var v;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getCreateAudienceLabel()),
          (t[18] = v))
        : (v = t[18]);
      var S;
      t[19] !== h
        ? ((S = s.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcAdd.react"),
            title: v,
            onPress: h,
            testid: void 0,
          })),
          (t[19] = h),
          (t[20] = S))
        : (S = t[20]);
      var R;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getImportAudienceLabel()),
          (t[21] = R))
        : (R = t[21]);
      var L;
      t[22] !== C
        ? ((L = s.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcUpload.react"),
            title: R,
            onPress: C,
            testid: void 0,
          })),
          (t[22] = C),
          (t[23] = L))
        : (L = t[23]);
      var E;
      return (
        t[24] !== L || t[25] !== b || t[26] !== S
          ? ((E = s.jsxs(r("WDSMenu.react"), { children: [b, S, L] })),
            (t[24] = L),
            (t[25] = b),
            (t[26] = S),
            (t[27] = E))
          : (E = t[27]),
        E
      );
    }
    l.default = m;
  },
  98,
);
