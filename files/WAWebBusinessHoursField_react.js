__d(
  "WAWebBusinessHoursField.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBusinessHoursUtils",
    "WAWebBusinessProfileSMBUserJourneyLogger",
    "WAWebBusinessProfileTextField.react",
    "WAWebBusinessProfileTypes",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WDSIconIcSchedule.react",
    "WDSText.react",
    "deferredLoadComponent",
    "react",
    "react-compiler-runtime",
    "requireDeferredForDisplay",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")(
          "WAWebBusinessHoursModal.react",
        ).__setRef("WAWebBusinessHoursField.react"),
      ),
      d = {
        fieldContainer: {
          alignSelf: "xkh2ocl",
          paddingTop: "x16ovd2e",
          $$css: !0,
        },
        fieldContainerHover: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          ":hover_backgroundColor": "x1n67ipk",
          $$css: !0,
        },
        hoursContainer: {
          paddingBottom: "xscbp6u",
          paddingInlineStart: "xm0p2th",
          $$css: !0,
        },
        hoursRow: {
          alignItems: "x1cy8zhl",
          justifyContent: "x1qughib",
          width: "x16xo58l",
          $$css: !0,
        },
        timeSlot: { marginTop: "xav9cv8", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.closed,
        a = e.hours,
        i = e.mode;
      if (n) {
        var l;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Closed"),
              })),
              (t[0] = l))
            : (l = t[0]),
          l
        );
      }
      switch (i) {
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
          .SPECIFIC_HOURS: {
          var c;
          t[1] !== a
            ? ((c = a && a.map(p)), (t[1] = a), (t[2] = c))
            : (c = t[2]);
          var d;
          return (
            t[3] !== c
              ? ((d = u.jsx(o("WAWebFlex.react").FlexColumn, {
                  gap: 4,
                  align: "end",
                  children: c,
                })),
                (t[3] = c),
                (t[4] = d))
              : (d = t[4]),
            d
          );
        }
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
          .APPOINTMENT_ONLY: {
          var m;
          return (
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDefault",
                  children: s._(/*BTDS*/ "By appointment only"),
                })),
                (t[5] = m))
              : (m = t[5]),
            m
          );
        }
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H: {
          var _;
          return (
            t[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDefault",
                  children: s._(/*BTDS*/ "Open 24 hours"),
                })),
                (t[6] = _))
              : (_ = t[6]),
            _
          );
        }
        default:
          return null;
      }
    }
    function p(e, t) {
      var n = e[0],
        o = e[1];
      return u.jsxs(
        r("WDSText.react"),
        {
          type: "Body2",
          colorName: "contentDefault",
          xstyle: t !== 0 && d.timeSlot,
          children: [n, " - ", o],
        },
        t,
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.day,
        a = e.mode,
        i = n.closed,
        l = n.dayName,
        s = n.hours,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { className: "x2lah0s xn80e1m" }), (t[0] = c))
        : (c = t[0]);
      var p;
      t[1] !== l
        ? ((p = u.jsx(
            "div",
            babelHelpers.extends({}, c, {
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children: l,
              }),
            }),
          )),
          (t[1] = l),
          (t[2] = p))
        : (p = t[2]);
      var _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { className: "x2lah0s xp4054r" }), (t[3] = _))
        : (_ = t[3]);
      var f;
      t[4] !== i || t[5] !== s || t[6] !== a
        ? ((f = u.jsx(
            "div",
            babelHelpers.extends({}, _, {
              children: u.jsx(m, { mode: a, closed: i, hours: s }),
            }),
          )),
          (t[4] = i),
          (t[5] = s),
          (t[6] = a),
          (t[7] = f))
        : (f = t[7]);
      var g;
      return (
        t[8] !== p || t[9] !== f
          ? ((g = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "start",
              gap: 12,
              xstyle: d.hoursRow,
              children: [p, f],
            })),
            (t[8] = p),
            (t[9] = f),
            (t[10] = g))
          : (g = t[10]),
        g
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.businessHours,
        a = e.label,
        i = e.saveBusinessProfile,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebBizGatingUtils").businessProfileRefreshV2Enabled()),
          (t[0] = l))
        : (l = t[0]);
      var s = l,
        m;
      t[1] !== n || t[2] !== i
        ? ((m = function () {
            var e =
              (n == null ? void 0 : n.mode) != null &&
              (n == null ? void 0 : n.days) != null;
            (o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.clickBusinessHours(e),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(c, { businessHours: n, saveBusinessProfile: i }),
              ));
          }),
          (t[1] = n),
          (t[2] = i),
          (t[3] = m))
        : (m = t[3]);
      var p = m;
      if (
        (n == null ? void 0 : n.mode) == null ||
        (n == null ? void 0 : n.days) == null
      ) {
        var f;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = u.jsx(r("WDSIconIcSchedule.react"), {})), (t[4] = f))
          : (f = t[4]);
        var g;
        return (
          t[5] !== p
            ? ((g = u.jsx(r("WAWebBusinessProfileTextField.react"), {
                editable: !1,
                icon: f,
                label: "",
                onEditClick: p,
                value: "Business hours",
              })),
              (t[5] = p),
              (t[6] = g))
            : (g = t[6]),
          g
        );
      }
      var h = n.days,
        y = n.mode,
        C;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = [d.fieldContainer, s && d.fieldContainerHover]), (t[7] = C))
        : (C = t[7]);
      var b;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(r("WDSIconIcSchedule.react"), {})), (t[8] = b))
        : (b = t[8]);
      var v;
      t[9] !== y
        ? ((v = o("WAWebBusinessHoursUtils").getModeDisplayName(y).toString()),
          (t[9] = y),
          (t[10] = v))
        : (v = t[10]);
      var S;
      t[11] !== p || t[12] !== a || t[13] !== v
        ? ((S = u.jsx(r("WAWebBusinessProfileTextField.react"), {
            editable: !1,
            icon: b,
            label: a,
            onEditClick: p,
            value: v,
          })),
          (t[11] = p),
          (t[12] = a),
          (t[13] = v),
          (t[14] = S))
        : (S = t[14]);
      var R;
      if (t[15] !== h || t[16] !== y) {
        var L;
        (t[18] !== y
          ? ((L = function (t) {
              return u.jsx(_, { day: t, mode: y }, t.dayKey);
            }),
            (t[18] = y),
            (t[19] = L))
          : (L = t[19]),
          (R = h.map(L)),
          (t[15] = h),
          (t[16] = y),
          (t[17] = R));
      } else R = t[17];
      var E;
      t[20] !== R
        ? ((E = u.jsx(o("WAWebFlex.react").FlexColumn, {
            gap: 12,
            xstyle: d.hoursContainer,
            children: R,
          })),
          (t[20] = R),
          (t[21] = E))
        : (E = t[21]);
      var k;
      return (
        t[22] !== S || t[23] !== E
          ? ((k = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: C,
              children: [S, E],
            })),
            (t[22] = S),
            (t[23] = E),
            (t[24] = k))
          : (k = t[24]),
        k
      );
    }
    l.default = f;
  },
  226,
);
