__d(
  "AdsAdvertiserProfileGoToAdvertisingSettingsLinkUtils",
  [
    "AdsAdvertiserProfileAdvertisingSettingsLogger",
    "AdsManagerConstURIUtils",
    "GeoLink.react",
    "URI",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = "manage/advertising_settings";
    function d(t) {
      var n,
        a = t.adAccountID,
        i = t.businessID,
        l = t.gridWidgetGroup,
        s = t.navEntryPoint,
        u = t.shouldShowUpdateAdgroupBulkFixModal,
        d = o("AdsManagerConstURIUtils")
          .getAdsManagerURI("ads_manager", s, {
            act: a != null ? a : void 0,
            business_id: i != null ? i : void 0,
          })
          .stripTrailingSlash(),
        m = new (e || (e = r("URI")))(
          d == null
            ? void 0
            : d.setPath(
                d.getPath() +
                  "/" +
                  c +
                  "/" +
                  ((n = l == null ? void 0 : l.toLowerCase()) != null ? n : ""),
              ),
        ).setSubdomain(e.getRequestURI().getSubdomain());
      return u === !0
        ? m.addQueryData("should_show_update_adgroup_bulk_fix_modal", "true")
        : m;
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.adAccountID,
        a = e.entryPoint,
        i = e.eventCategory,
        l = e.gridWidgetGroup,
        s = e.isEnabled,
        c = e.linkText,
        m = e.navEntryPoint,
        p = e.objective,
        _;
      t[0] !== n || t[1] !== l || t[2] !== m
        ? ((_ = d({ adAccountID: n, gridWidgetGroup: l, navEntryPoint: m })),
          (t[0] = n),
          (t[1] = l),
          (t[2] = m),
          (t[3] = _))
        : (_ = t[3]);
      var f = _,
        g;
      t[4] !== a ||
      t[5] !== i ||
      t[6] !== l ||
      t[7] !== s ||
      t[8] !== m ||
      t[9] !== p
        ? ((g = function () {
            return o(
              "AdsAdvertiserProfileAdvertisingSettingsLogger",
            ).logAdvertisingSettingsDetailedPageEntry({
              navEntryPoint: m,
              eventCategory: i,
              gridWidgetGroup: l,
              entryPoint: a,
              isEnabled: s,
              objective: p,
            });
          }),
          (t[4] = a),
          (t[5] = i),
          (t[6] = l),
          (t[7] = s),
          (t[8] = m),
          (t[9] = p),
          (t[10] = g))
        : (g = t[10]);
      var h;
      return (
        t[11] !== c || t[12] !== g || t[13] !== f
          ? ((h = u.jsx(r("GeoLink.react"), {
              href: f,
              onClick: g,
              target: "_blank",
              children: c,
            })),
            (t[11] = c),
            (t[12] = g),
            (t[13] = f),
            (t[14] = h))
          : (h = t[14]),
        h
      );
    }
    ((l.getAdvertisingSettingsLink = d), (l.GoToAdvertisingSettingsLink = m));
  },
  98,
);
