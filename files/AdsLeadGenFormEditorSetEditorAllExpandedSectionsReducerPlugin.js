__d(
  "AdsLeadGenFormEditorSetEditorAllExpandedSectionsReducerPlugin",
  ["AdsLeadGenFormEditorConstants", "adsLeadGenFormEditorViewReducerWrapper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: r("adsLeadGenFormEditorViewReducerWrapper")(function (e, t) {
          var n = Object.values(
              o("AdsLeadGenFormEditorConstants").CONTENT_TAB.SECTIONS,
            ),
            r = Object.values(
              o("AdsLeadGenFormEditorConstants").SETTINGS_TAB.SECTIONS,
            ),
            a = t.expandedSections.filter(function (e) {
              return n.includes(e);
            }),
            i = t.expandedSections.filter(function (e) {
              return r.includes(e);
            }),
            l = e;
          if (
            (a.length > 0 &&
              (l = l.set(
                "singlePageEditorStatus",
                l
                  .get("singlePageEditorStatus")
                  .set(
                    o("AdsLeadGenFormEditorConstants").SINGLE_PAGE_EDITOR
                      .STATUS_KEY.EXPANDED_CONTENT_SECTION,
                    a,
                  ),
              )),
            i.length > 0 &&
              (l = l.set(
                "singlePageEditorStatus",
                l
                  .get("singlePageEditorStatus")
                  .set(
                    o("AdsLeadGenFormEditorConstants").SINGLE_PAGE_EDITOR
                      .STATUS_KEY.EXPANDED_SETTINGS_SECTION,
                    i,
                  ),
              )),
            t.latestUpdatedSection != null)
          ) {
            var s = l
                .get("singlePageEditorStatus")
                .get(
                  o("AdsLeadGenFormEditorConstants").SINGLE_PAGE_EDITOR
                    .STATUS_KEY.SELECTED_TAB,
                ),
              u = n.includes(t.latestUpdatedSection)
                ? o("AdsLeadGenFormEditorConstants").SINGLE_PAGE_EDITOR.UI_KEY
                    .CONTENT_TAB
                : r.includes(t.latestUpdatedSection)
                  ? o("AdsLeadGenFormEditorConstants").SINGLE_PAGE_EDITOR.UI_KEY
                      .SETTINGS_TAB
                  : null;
            u != null &&
              s !== u &&
              (l = l.set(
                "singlePageEditorStatus",
                l
                  .get("singlePageEditorStatus")
                  .set(
                    o("AdsLeadGenFormEditorConstants").SINGLE_PAGE_EDITOR
                      .STATUS_KEY.SELECTED_TAB,
                    u,
                  ),
              ));
          }
          return l;
        }),
      },
      s = e;
    l.default = s;
  },
  98,
);
