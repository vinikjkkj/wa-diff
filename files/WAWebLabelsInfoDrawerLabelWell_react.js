__d(
  "WAWebLabelsInfoDrawerLabelWell.react",
  [
    "WAWebBizGatingUtils",
    "WAWebLabels.react",
    "WAWebListsGatingUtils",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        labelRow: { display: "x1rg5ohu", fontSize: "x1f6kntn", $$css: !0 },
        standaloneLabelRow: {
          fontSize: "x1pg5gke",
          lineHeight: "x4ei82o",
          $$css: !0,
        },
        standaloneLabelRowIcon: {
          width: "xgd8bvy",
          height: "x17rw0jw",
          $$css: !0,
        },
        labelContainer: { flexWrap: "x1a02dak", $$css: !0 },
      };
    function d(t) {
      var n = t.isListsFeatureEnabled,
        a = t.isStandalone,
        i = t.labelId;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            c.labelRow,
            o("WAWebUISpacing").uiPadding.top5,
            o("WAWebUISpacing").uiPadding.end5,
            o("WAWebUISpacing").uiPadding.bottom5,
            o("WAWebUISpacing").uiPadding.start0,
            o("WAWebUISpacing").uiMargin.end10,
            a && c.standaloneLabelRow,
            a && o("WAWebUISpacing").uiPadding.top8,
            a && o("WAWebUISpacing").uiPadding.end14,
            a && o("WAWebUISpacing").uiPadding.bottom8,
            a && o("WAWebUISpacing").uiPadding.start0,
          ),
          {
            children: u.jsx(o("WAWebLabels.react").Labels, {
              theme: "user-profile",
              labels: [i],
              showName: !0,
              isListsFeatureEnabled: n,
              iconXstyle: [
                c.standaloneLabelRowIcon,
                o("WAWebUISpacing").uiPadding.top1,
              ],
            }),
          },
        ),
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(t) {
      var n = t.labels,
        a = t.theme,
        i = o("WAWebListsGatingUtils").isListsEnabled();
      if (!n || !(o("WAWebBizGatingUtils").canDisplayLabel() || i)) return null;
      var l = a === "standalone";
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            c.labelContainer,
            o("WAWebUISpacing").uiMargin.top3,
            l && o("WAWebUISpacing").uiMargin.top0,
          ),
          {
            children: n.map(function (e, t) {
              return u.jsx(
                d,
                { labelId: e, isStandalone: l, isListsFeatureEnabled: i },
                t,
              );
            }),
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
