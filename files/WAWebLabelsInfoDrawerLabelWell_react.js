__d(
  "WAWebLabelsInfoDrawerLabelWell.react",
  [
    "WAWebBizGatingUtils",
    "WAWebLabels.react",
    "WAWebListsGatingUtils",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(11),
        a = t.isListsFeatureEnabled,
        i = t.isStandalone,
        l = t.labelId,
        s;
      n[0] !== i
        ? ((s = (e || (e = r("stylex"))).props(
            c.labelRow,
            o("WAWebUISpacing").uiPadding.top5,
            o("WAWebUISpacing").uiPadding.end5,
            o("WAWebUISpacing").uiPadding.bottom5,
            o("WAWebUISpacing").uiPadding.start0,
            o("WAWebUISpacing").uiMargin.end10,
            i && c.standaloneLabelRow,
            i && o("WAWebUISpacing").uiPadding.top8,
            i && o("WAWebUISpacing").uiPadding.end14,
            i && o("WAWebUISpacing").uiPadding.bottom8,
            i && o("WAWebUISpacing").uiPadding.start0,
          )),
          (n[0] = i),
          (n[1] = s))
        : (s = n[1]);
      var d;
      n[2] !== l ? ((d = [l]), (n[2] = l), (n[3] = d)) : (d = n[3]);
      var m;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [c.standaloneLabelRowIcon, o("WAWebUISpacing").uiPadding.top1]),
          (n[4] = m))
        : (m = n[4]);
      var p;
      n[5] !== a || n[6] !== d
        ? ((p = u.jsx(o("WAWebLabels.react").Labels, {
            theme: "user-profile",
            labels: d,
            showName: !0,
            isListsFeatureEnabled: a,
            iconXstyle: m,
          })),
          (n[5] = a),
          (n[6] = d),
          (n[7] = p))
        : (p = n[7]);
      var _;
      return (
        n[8] !== s || n[9] !== p
          ? ((_ = u.jsx("div", babelHelpers.extends({}, s, { children: p }))),
            (n[8] = s),
            (n[9] = p),
            (n[10] = _))
          : (_ = n[10]),
        _
      );
    }
    function m(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.labels,
        i = t.theme,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebListsGatingUtils").isListsEnabled()), (n[0] = l))
        : (l = n[0]);
      var s = l;
      if (!a || !(o("WAWebBizGatingUtils").canDisplayLabel() || s)) return null;
      var m = i === "standalone",
        p;
      n[1] !== m
        ? ((p = (e || (e = r("stylex"))).props(
            c.labelContainer,
            o("WAWebUISpacing").uiMargin.top3,
            m && o("WAWebUISpacing").uiMargin.top0,
          )),
          (n[1] = m),
          (n[2] = p))
        : (p = n[2]);
      var _;
      if (n[3] !== m || n[4] !== a) {
        var f;
        (n[6] !== m
          ? ((f = function (t, n) {
              return u.jsx(
                d,
                { labelId: t, isStandalone: m, isListsFeatureEnabled: s },
                n,
              );
            }),
            (n[6] = m),
            (n[7] = f))
          : (f = n[7]),
          (_ = a.map(f)),
          (n[3] = m),
          (n[4] = a),
          (n[5] = _));
      } else _ = n[5];
      var g;
      return (
        n[8] !== p || n[9] !== _
          ? ((g = u.jsx("div", babelHelpers.extends({}, p, { children: _ }))),
            (n[8] = p),
            (n[9] = _),
            (n[10] = g))
          : (g = n[10]),
        g
      );
    }
    l.default = m;
  },
  98,
);
