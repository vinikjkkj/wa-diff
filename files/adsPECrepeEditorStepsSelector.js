__d(
  "adsPECrepeEditorStepsSelector",
  [
    "AdsCrepeEditorStepUtils",
    "AdsFluxHooks",
    "AdsObjectTypes",
    "AdsPECrepeEditorStructureTypes",
    "AdsUEditorHooks",
    "adsCreateSelector",
    "adsMgmtGetChildrenAdgroupIDsForCampaignIDsSelector",
    "adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsSelector",
    "adsUEditorCrepeEditorStructureDataSelector",
    "adsUEditorSelectedCampaignGroupIDsSelector",
    "gkx",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e == null
        ? null
        : e.length === 1
          ? o("AdsPECrepeEditorStructureTypes").EditorAppearance.FULLY_MERGED
          : e.length === 2 && e[0].length === 2
            ? o("AdsPECrepeEditorStructureTypes").EditorAppearance.UPPER_MERGED
            : e.length === 2 && e[1].length === 2
              ? o("AdsPECrepeEditorStructureTypes").EditorAppearance
                  .LOWER_MERGED
              : e.length === 3
                ? o("AdsPECrepeEditorStructureTypes").EditorAppearance.UNMERGED
                : null;
    }
    var s = function (t) {
        return t ===
          o("AdsPECrepeEditorStructureTypes").EditorAppearance.FULLY_MERGED
          ? [
              [
                r("AdsObjectTypes").CAMPAIGN_GROUP,
                r("AdsObjectTypes").CAMPAIGN,
                r("AdsObjectTypes").ADGROUP,
              ],
            ]
          : t ===
              o("AdsPECrepeEditorStructureTypes").EditorAppearance.UPPER_MERGED
            ? [
                [
                  r("AdsObjectTypes").CAMPAIGN_GROUP,
                  r("AdsObjectTypes").CAMPAIGN,
                ],
                [r("AdsObjectTypes").ADGROUP],
              ]
            : t ===
                o("AdsPECrepeEditorStructureTypes").EditorAppearance
                  .LOWER_MERGED
              ? [
                  [r("AdsObjectTypes").CAMPAIGN_GROUP],
                  [r("AdsObjectTypes").CAMPAIGN, r("AdsObjectTypes").ADGROUP],
                ]
              : t ===
                  o("AdsPECrepeEditorStructureTypes").EditorAppearance.UNMERGED
                ? [
                    [r("AdsObjectTypes").CAMPAIGN_GROUP],
                    [r("AdsObjectTypes").CAMPAIGN],
                    [r("AdsObjectTypes").ADGROUP],
                  ]
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
      },
      u = function (t, n, r) {
        return t ===
          o("AdsPECrepeEditorStructureTypes").EditorAppearance.FULLY_MERGED
          ? !n && !r
          : t ===
              o("AdsPECrepeEditorStructureTypes").EditorAppearance.UPPER_MERGED
            ? !n
            : t ===
                o("AdsPECrepeEditorStructureTypes").EditorAppearance
                  .LOWER_MERGED
              ? !r
              : t ===
                  o("AdsPECrepeEditorStructureTypes").EditorAppearance.UNMERGED
                ? !0
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
      },
      c = r("adsCreateSelector")(
        [
          o("adsUEditorCrepeEditorStructureDataSelector")
            .adsUEditorCrepeEditorStructureDataSelector,
          o("adsUEditorSelectedCampaignGroupIDsSelector")
            .adsUEditorSelectedCampaignGroupIDsSelector,
          o("adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsSelector")
            .adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsMapSelector,
          o("adsMgmtGetChildrenAdgroupIDsForCampaignIDsSelector")
            .adsMgmtGetChildrenAdgroupIDsForCampaignIDsMapSelector,
        ],
        function (t, n, o, a) {
          var e, i;
          if (
            r("gkx")("21590") &&
            (t == null ? void 0 : t.getValue()) != null &&
            n.length > 0
          ) {
            e = o(n);
            var l = Array.from(e.keys());
            i = a(l);
          }
          return d(t, n, e, i);
        },
        { name: i.id + ".adsPECrepeEditorStepsSelector" },
      ),
      d = function (t, n, a, i) {
        var e = t == null ? void 0 : t.getValue(),
          l = e == null ? void 0 : e.editorAppearances;
        if (
          r("gkx")("21590") &&
          l != null &&
          n.length > 0 &&
          a != null &&
          i != null
        ) {
          var c = a,
            d = i,
            m = function (t) {
              for (var e of t.values()) if (e.list.length > 1) return !0;
              return !1;
            },
            p = m(c),
            _ = m(d);
          for (var f of l.slice(0, -1)) if (u(f, p, _)) return s(f);
          return s(l[l.length - 1]);
        } else {
          var g,
            h = (g = e == null ? void 0 : e.editorLevels) != null ? g : [];
          return o(
            "AdsCrepeEditorStepUtils",
          ).getEditorStepsFromEditorLevelsConfig(h);
        }
      };
    function m() {
      var e = o("react-compiler-runtime").c(5),
        t =
          o(
            "AdsUEditorHooks",
          ).useUEditorCampaignGroupContextWithFallback_ONLY_FOR_CONTEXT_MIGRATION(),
        n = o(
          "adsUEditorCrepeEditorStructureDataSelector",
        ).useGetAdsUEditorCrepeEditorStructureDataSelector(),
        r = o("AdsFluxHooks").useAdsSelector(
          o("adsUEditorSelectedCampaignGroupIDsSelector")
            .adsUEditorSelectedCampaignGroupIDsSelector,
          t,
          t,
        ),
        a = o("AdsFluxHooks").useAdsSelector(
          o("adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsSelector")
            .adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsMapSelector,
        ),
        i = o("AdsFluxHooks").useAdsSelector(
          o("adsMgmtGetChildrenAdgroupIDsForCampaignIDsSelector")
            .adsMgmtGetChildrenAdgroupIDsForCampaignIDsMapSelector,
        ),
        l;
      if (e[0] !== r || e[1] !== n || e[2] !== i || e[3] !== a) {
        var s = a(r),
          u = Array.from(s.keys()),
          c = i(u);
        ((l = d(n, r, s, c)),
          (e[0] = r),
          (e[1] = n),
          (e[2] = i),
          (e[3] = a),
          (e[4] = l));
      } else l = e[4];
      return l;
    }
    ((l.getEditorAppearanceFromEditorSteps = e),
      (l.adsPECrepeEditorStepsSelector = c),
      (l.adsPECrepeEditorStepsSelectorLogic = d),
      (l.useGetAdsPECrepeEditorStepsSelector = m));
  },
  98,
);
