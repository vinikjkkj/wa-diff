__d(
  "WAWebBizAdDetailsInfo.react",
  [
    "fbt",
    "FBLogger",
    "WAWebBizAdTargetingSpecUtils",
    "WAWebBizBoostingStatusUtils",
    "WAWebCopyPasteSelectable.react",
    "WAWebFlex.react",
    "WAWebL10nGetRenderedLocale",
    "WDSIconIcCalendarMonth.react",
    "WDSIconIcGroup.react",
    "WDSIconIcLabel.react",
    "WDSIconIcPayments.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = {
        row: {
          paddingInlineStart: "xdylf7x",
          paddingInlineEnd: "xde1mab",
          boxSizing: "x9f619",
          $$css: !0,
        },
        textContainer: {
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.Icon,
        r = e.children,
        a = e.iconColorName,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = u.jsx(n, { height: 20, width: 20, colorName: a })),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== r || t[4] !== i
          ? ((l = u.jsxs(o("WAWebFlex.react").FlexRow, {
              gap: 16,
              align: "center",
              xstyle: d.row,
              children: [i, r],
            })),
            (t[3] = r),
            (t[4] = i),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    function p(e) {
      var t,
        n = e.item,
        a = n.adgroupId,
        i = n.audience,
        l = n.boostingStatus,
        p = n.boostingStatusDisplayText,
        _ = n.durationInDays,
        f = n.formattedBudget,
        g = n.startTime,
        h = o("WAWebBizBoostingStatusUtils").getBoostingStatusDisplayText(l, p),
        y = o("WAWebBizBoostingStatusUtils").getBoostingStatusColorName(l),
        C = o("WAWebBizBoostingStatusUtils").getStatusIconConfig(l),
        b = o("WAWebL10nGetRenderedLocale")
          .WAWebL10nGetRenderedLocale()
          .replace("_", "-"),
        v = c(
          function () {
            return new Intl.DateTimeFormat(b, {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: !0,
            });
          },
          [b],
        ),
        S = c(
          function () {
            return g == null
              ? null
              : v
                  .format(g * 1e3)
                  .replace(" AM", "am")
                  .replace(" PM", "pm");
          },
          [g, v],
        ),
        R = c(
          function () {
            if (g == null || _ == null || _ === 0) return null;
            var e = g * 1e3 + _ * 24 * 60 * 60 * 1e3;
            return v.format(e).replace(" AM", "am").replace(" PM", "pm");
          },
          [g, _, v],
        ),
        L = _ == null || _ === 0,
        E = c(
          function () {
            var e = i == null ? void 0 : i.targetSpecStringWithoutPlacements;
            if (e == null) return null;
            try {
              return JSON.parse(e);
            } catch (e) {
              return (
                r("FBLogger")("wa_ctwa_web").warn(
                  "Failed to parse targeting spec JSON",
                ),
                null
              );
            }
          },
          [i == null ? void 0 : i.targetSpecStringWithoutPlacements],
        ),
        k = o("WAWebBizAdTargetingSpecUtils").getLocationString(E),
        I = o("WAWebBizAdTargetingSpecUtils").getInterestsString(E),
        T = [k, I].filter(Boolean).join(" \xB7 "),
        D = E == null ? void 0 : E.age_min,
        x = E == null ? void 0 : E.age_max,
        $ = o("WAWebBizAdTargetingSpecUtils").getGenderLabel(
          E == null || (t = E.genders) == null ? void 0 : t[0],
        ),
        P = 65,
        N = null;
      if (D != null && x != null) {
        var M = x >= P ? x + "+" : "" + x;
        D === x ? (N = M) : (N = D + "-" + M);
      }
      var w = [N, $].filter(Boolean).join(" \xB7 ");
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        children: [
          u.jsx(m, {
            Icon: C.Icon,
            iconColorName: C.colorName,
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: d.textContainer,
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: y,
                  children: h,
                }),
                u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s._(/*BTDS*/ "Status"),
                }),
              ],
            }),
          }),
          i != null &&
            u.jsx(m, {
              Icon: r("WDSIconIcGroup.react"),
              iconColorName: "contentDeemphasized",
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: d.textContainer,
                children: [
                  T !== "" &&
                    u.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDefault",
                      children: T,
                    }),
                  w !== "" &&
                    u.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDefault",
                      children: w,
                    }),
                  u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: s._(/*BTDS*/ "Audience"),
                  }),
                ],
              }),
            }),
          u.jsx(m, {
            Icon: r("WDSIconIcPayments.react"),
            iconColorName: "contentDeemphasized",
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: d.textContainer,
              children: [
                f != null &&
                  u.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    children: L
                      ? s._(/*BTDS*/ "{budget} per day until you pause it", [
                          s._param("budget", f),
                        ])
                      : s._(
                          /*BTDS*/ '_j{"*":"{budget} a day over {number} days","_1":"{budget} a day over 1 day"}',
                          [
                            s._plural(
                              _ != null ? _ : 0,
                              "number",
                              _ != null ? _ : 0,
                            ),
                            s._param("budget", f),
                          ],
                        ),
                  }),
                u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s._(/*BTDS*/ "Budget & duration"),
                }),
              ],
            }),
          }),
          u.jsx(m, {
            Icon: r("WDSIconIcCalendarMonth.react"),
            iconColorName: "contentDeemphasized",
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: d.textContainer,
              children: [
                S != null &&
                  u.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    children: S,
                  }),
                u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s._(/*BTDS*/ "Start date"),
                }),
              ],
            }),
          }),
          u.jsx(m, {
            Icon: r("WDSIconIcCalendarMonth.react"),
            iconColorName: "contentDeemphasized",
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: d.textContainer,
              children: [
                L
                  ? u.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDefault",
                      children: s._(/*BTDS*/ "Until you pause it"),
                    })
                  : R != null &&
                    u.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDefault",
                      children: R,
                    }),
                u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s._(/*BTDS*/ "End date"),
                }),
              ],
            }),
          }),
          u.jsx(m, {
            Icon: r("WDSIconIcLabel.react"),
            iconColorName: "contentDeemphasized",
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: d.textContainer,
              children: [
                u.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
                  selectable: !0,
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    children: a,
                  }),
                }),
                u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s._(/*BTDS*/ "Ad ID"),
                }),
              ],
            }),
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
