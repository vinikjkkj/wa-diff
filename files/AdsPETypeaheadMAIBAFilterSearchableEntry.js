__d(
  "AdsPETypeaheadMAIBAFilterSearchableEntry",
  [
    "AISearchPresetID",
    "AdsPETypeaheadAIFilterUtils",
    "AdsPETypeaheadAbstractSearchableEntry",
    "AdsPETypeaheadFilterHighlightedText.react",
    "AdsPETypeaheadSearchableEntryApplyBehaviors",
    "AdsPETypeaheadSearchableEntryTypes",
    "AdsUniversalComposerViewSpecPayload",
    "GeoIcon.react",
    "GeoTooltip.react",
    "PositionEnum",
    "geoMargin",
    "meta-brand-funnel-outline-16",
    "react",
    "stylex",
    "useIsInAiSearchV2",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useRef,
      p = c.useState,
      _ = { iconContainer: { display: "x78zum5", $$css: !0 } };
    function f(t) {
      var n = t.action,
        a = t.children,
        i = t.queryString,
        l = r("useIsInAiSearchV2")(),
        s =
          o("AdsUniversalComposerViewSpecPayload").parseViewSpecAction(n) !=
          null,
        c = m(null),
        f = p(!1),
        g = f[0],
        h = f[1],
        y = d(function () {
          h(c.current != null && c.current.scrollWidth > c.current.offsetWidth);
        }, []),
        C = d(function () {
          h(!1);
        }, []);
      return u.jsxs("span", {
        className: "x6s0dn4 x78zum5",
        onMouseEnter: y,
        onMouseLeave: C,
        children: [
          l
            ? null
            : u.jsx(
                "span",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    _.iconContainer,
                    r("geoMargin").end8,
                  ),
                  {
                    children: s
                      ? u.jsx(r("GeoIcon.react"), {
                          icon: o("meta-brand-funnel-outline-16")
                            .metaBrandFunnelOutline16,
                        })
                      : o("AdsPETypeaheadAIFilterUtils").getAISuggestionIcon(l),
                  },
                ),
              ),
          u.jsx("span", {
            className: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli x13faqbe",
            ref: c,
            children: a,
          }),
          g &&
            u.jsx(r("GeoTooltip.react"), {
              align: "middle",
              content: i,
              position: r("PositionEnum").right,
              triggerRef: c,
            }),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = (function (e) {
      function t(t) {
        var n, r, a, i, l;
        l = e.call(this, t) || this;
        var s = t.auxiliaryData;
        return (
          (s == null ? void 0 : s.filters) != null && (l.filterSet = s.filters),
          (l.$AdsPETypeaheadMAIBAFilterSearchableEntry$p_1 =
            (n = s == null ? void 0 : s.sortCriteria) != null ? n : []),
          (l.$AdsPETypeaheadMAIBAFilterSearchableEntry$p_2 =
            (r = s == null ? void 0 : s.label) != null ? r : ""),
          (l.$AdsPETypeaheadMAIBAFilterSearchableEntry$p_3 =
            (a = s == null ? void 0 : s.presetFilters) != null
              ? a
              : {
                  id: o("AISearchPresetID").AISearchPresetID.FREEFORM,
                  filters: null,
                  label: "",
                  prompt: "",
                  sortCriteria: [],
                }),
          (l.$AdsPETypeaheadMAIBAFilterSearchableEntry$p_4 =
            (i = s == null ? void 0 : s.isFreeform) != null ? i : !1),
          (l.$AdsPETypeaheadMAIBAFilterSearchableEntry$p_5 =
            s == null ? void 0 : s.action),
          (l.$AdsPETypeaheadMAIBAFilterSearchableEntry$p_6 =
            s == null ? void 0 : s.impressionSessionId),
          l
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getAction = function () {
          return this.$AdsPETypeaheadMAIBAFilterSearchableEntry$p_5;
        }),
        (n.getApplyBehavior = function () {
          return r("AdsPETypeaheadSearchableEntryApplyBehaviors").REPLACE;
        }),
        (n.isFreeform = function () {
          return this.$AdsPETypeaheadMAIBAFilterSearchableEntry$p_4;
        }),
        (n.getLabelTextToSearch = function (t) {
          return this.getUniqueID() !==
            o("AdsPETypeaheadAIFilterUtils").MAIBA_FREEFORM_UNIQUE_ID
            ? this.getTitle()
            : (this.getTitle() === "" ? t : this.getTitle()) + "...";
        }),
        (n.getViewLabel = function (t) {
          return u.jsx(f, {
            action: this.$AdsPETypeaheadMAIBAFilterSearchableEntry$p_5,
            queryString: t,
            children: u.jsx(r("AdsPETypeaheadFilterHighlightedText.react"), {
              textToHighlight: t,
              textToSearch: this.getLabelTextToSearch(t),
            }),
          });
        }),
        (n.getEntryType = function () {
          return o("AdsPETypeaheadSearchableEntryTypes").MAIBA_FILTER;
        }),
        (n.getSortCriteria = function () {
          return this.$AdsPETypeaheadMAIBAFilterSearchableEntry$p_1;
        }),
        (n.getMAIBALabel = function () {
          return this.$AdsPETypeaheadMAIBAFilterSearchableEntry$p_2;
        }),
        (n.getPresetFilters = function () {
          return this.$AdsPETypeaheadMAIBAFilterSearchableEntry$p_3;
        }),
        (n.getImpressionSessionId = function () {
          return this.$AdsPETypeaheadMAIBAFilterSearchableEntry$p_6;
        }),
        (t.createFromPreset = function (n, r) {
          var e, a;
          return new t({
            auxiliaryData: {
              filters: n.filters,
              impressionSessionId: r,
              label: n.label,
              presetFilters: n,
              sortCriteria: n.sortCriteria,
            },
            keywordString:
              (e = (a = n.searchAliases) == null ? void 0 : a.join(" ")) != null
                ? e
                : "",
            title: n.label,
            uniqueID: n.id,
            type: o("AdsPETypeaheadSearchableEntryTypes").MAIBA_FILTER,
          });
        }),
        (t.createFreeformTemplate = function () {
          return t.createFreeform("");
        }),
        (t.createFreeform = function (n) {
          return new t({
            auxiliaryData: {
              filters: null,
              isFreeform: !0,
              label: n,
              presetFilters: {
                id: o("AISearchPresetID").AISearchPresetID.FREEFORM,
                filters: null,
                label: n,
                prompt: n,
                sortCriteria: [],
              },
              sortCriteria: [],
            },
            title: n,
            uniqueID: o("AdsPETypeaheadAIFilterUtils").MAIBA_FREEFORM_UNIQUE_ID,
            type: o("AdsPETypeaheadSearchableEntryTypes").MAIBA_FILTER,
          });
        }),
        (t.createUCSuggestion = function (n, r, a, i) {
          return new t({
            order: r,
            auxiliaryData: {
              action: i,
              filters: null,
              isFreeform: !0,
              label: n,
              presetFilters: {
                id: o("AISearchPresetID").AISearchPresetID.FREEFORM,
                filters: null,
                label: n,
                prompt: n,
                sortCriteria: [],
              },
              sortCriteria: [],
            },
            title: n,
            uniqueID: "uc_suggestion_" + a + "_" + n,
            type: o("AdsPETypeaheadSearchableEntryTypes").MAIBA_FILTER,
          });
        }),
        t
      );
    })(r("AdsPETypeaheadAbstractSearchableEntry"));
    l.default = g;
  },
  98,
);
