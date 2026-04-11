__d(
  "WAWebBusinessHoursModal.react",
  [
    "fbt",
    "WAWebBusinessHoursModeDropdownMenu.react",
    "WAWebBusinessHoursUtils",
    "WAWebBusinessProfileEdit",
    "WAWebBusinessProfileLabels",
    "WAWebBusinessProfileSMBUserJourneyLogger",
    "WAWebBusinessProfileTypes",
    "WAWebCloseRefreshedIcon.react",
    "WAWebDropdown.react",
    "WAWebIcChevronDownMenuIcon.react",
    "WAWebMenuBar.react",
    "WAWebMinusIcon.react",
    "WAWebModal.react",
    "WAWebSavePopup.react",
    "WAWebSmbUtilsTimeUtils",
    "WDSButton.react",
    "WDSIconIcAdd.react",
    "WDSSwitch.react",
    "WDSText.react",
    "WDSTextField.react",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useState,
      p = {
        menuBarItemContainerOverride: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        textFieldLikeButton: {
          backgroundColor: "xjbqb8w",
          borderStartStartRadius: "x1kev0bf",
          borderStartEndRadius: "x18pz1ep",
          borderEndEndRadius: "xqzujny",
          borderEndStartRadius: "x1gm2dcp",
          boxSizing: "x9f619",
          cursor: "x1ypdohk",
          flexDirection: "x15zctf7",
          height: "x1vqgdyp",
          justifyContent: "x1qughib",
          maxWidth: "x193iq5w",
          outlineColor: "xod3euw",
          outlineStyle: "xaatb59",
          outlineWidth: "x1qgsegg",
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          pointerEvents: "x67bb7w",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.businessHoursMode,
        a = e.day,
        i = e.onAddHours,
        l = e.onDayToggle,
        c = e.onRemoveHours,
        d = e.onTimeChange,
        m =
          n === "specific_hours" &&
          !a.closed &&
          a.hours != null &&
          a.hours.length > 0,
        p;
      t[0] !== a.dayKey || t[1] !== l
        ? ((p = function () {
            l(a.dayKey);
          }),
          (t[0] = a.dayKey),
          (t[1] = l),
          (t[2] = p))
        : (p = t[2]);
      var _ = p,
        f;
      t[3] !== a.dayKey || t[4] !== i
        ? ((f = function () {
            i(a.dayKey);
          }),
          (t[3] = a.dayKey),
          (t[4] = i),
          (t[5] = f))
        : (f = t[5]);
      var g = f,
        h;
      t[6] !== a.dayKey || t[7] !== c
        ? ((h = function (t) {
            c(a.dayKey, t);
          }),
          (t[6] = a.dayKey),
          (t[7] = c),
          (t[8] = h))
        : (h = t[8]);
      var y = h,
        C = a.dayKey,
        b;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { className: "x1xrf6ya xscbp6u" }), (t[9] = b))
        : (b = t[9]);
      var v;
      t[10] !== a.dayName
        ? ((v = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: a.dayName,
          })),
          (t[10] = a.dayName),
          (t[11] = v))
        : (v = t[11]);
      var S;
      if (
        t[12] !== n ||
        t[13] !== a ||
        t[14] !== g ||
        t[15] !== y ||
        t[16] !== _ ||
        t[17] !== m ||
        t[18] !== d
      ) {
        var R;
        ((S = m
          ? u.jsxs(u.Fragment, {
              children: [
                (R = a.hours) == null
                  ? void 0
                  : R.map(function (e, t) {
                      var n = t === 0;
                      return u.jsxs(
                        "div",
                        babelHelpers.extends(
                          {},
                          {
                            0: {
                              className:
                                "x6s0dn4 x78zum5 x1qughib x1380le5 xh8yej3",
                            },
                            1: {
                              className:
                                "x6s0dn4 x78zum5 x1qughib xh8yej3 x1380le5",
                            },
                          }[!n << 0],
                          {
                            children: [
                              u.jsxs("div", {
                                className: "x78zum5 x98rzlu xdt5ytf",
                                children: [
                                  u.jsxs("div", {
                                    className:
                                      "x6s0dn4 xs2akgl x78zum5 x193iq5w",
                                    children: [
                                      u.jsx("div", {
                                        className: "x13qkkhc xeuugli x1n2onr6",
                                        children: u.jsx(
                                          r("WDSTextField.react"),
                                          {
                                            label: s._(/*BTDS*/ "Open"),
                                            value: e[0],
                                            onValueChange: function (n) {
                                              return d(a.dayKey, t, "open", n);
                                            },
                                            error: !o(
                                              "WAWebBusinessHoursUtils",
                                            ).isValidTime(e[0]),
                                          },
                                        ),
                                      }),
                                      u.jsx("div", {
                                        className: "x6s0dn4 x78zum5 xl56j7k",
                                        children: u.jsx(
                                          o("WAWebMinusIcon.react").MinusIcon,
                                          {},
                                        ),
                                      }),
                                      u.jsx("div", {
                                        className: "x13qkkhc xeuugli x1n2onr6",
                                        children: u.jsx(
                                          r("WDSTextField.react"),
                                          {
                                            label: s._(/*BTDS*/ "Close"),
                                            value: e[1],
                                            onValueChange: function (n) {
                                              return d(a.dayKey, t, "close", n);
                                            },
                                            error: !o(
                                              "WAWebBusinessHoursUtils",
                                            ).isValidTime(e[1]),
                                          },
                                        ),
                                      }),
                                    ],
                                  }),
                                  (!o("WAWebBusinessHoursUtils").isValidTime(
                                    e[0],
                                  ) ||
                                    !o("WAWebBusinessHoursUtils").isValidTime(
                                      e[1],
                                    )) &&
                                    u.jsx("div", {
                                      className: "x1380le5",
                                      children: u.jsx(r("WDSText.react"), {
                                        type: "Body3",
                                        colorName:
                                          "secondaryNegativeEmphasized",
                                        children: o(
                                          "WAWebBusinessProfileLabels",
                                        ).getInvalidTimeErrorLabel(),
                                      }),
                                    }),
                                ],
                              }),
                              u.jsx("div", {
                                className: "x78zum5",
                                children: n
                                  ? u.jsx(r("WDSSwitch.react"), {
                                      value: !a.closed,
                                      onChange: _,
                                    })
                                  : u.jsx(r("WDSButton.react"), {
                                      size: "medium",
                                      variant: "borderless",
                                      Icon: o("WAWebCloseRefreshedIcon.react")
                                        .CloseRefreshedIcon,
                                      onPress: function () {
                                        return y(t);
                                      },
                                    }),
                              }),
                            ],
                          },
                        ),
                        t,
                      );
                    }),
                a.hours != null && a.hours.length < 2
                  ? u.jsx("div", {
                      className: "x6s0dn4 x78zum5 x1qughib xh8yej3 x1380le5",
                      children: u.jsx(r("WDSButton.react"), {
                        size: "medium",
                        variant: "borderless",
                        type: "default",
                        Icon: r("WDSIconIcAdd.react"),
                        label: s._(/*BTDS*/ "Add a set of hours"),
                        onPress: g,
                      }),
                    })
                  : null,
              ],
            })
          : u.jsxs("div", {
              className: "x6s0dn4 x78zum5 x1qughib",
              children: [
                (function () {
                  return n === "specific_hours" && !a.closed
                    ? u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        children: s._(/*BTDS*/ "No hours set"),
                      })
                    : u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        children: o("WAWebBusinessHoursUtils").getStatusText(
                          n,
                          a,
                        ),
                      });
                })(),
                u.jsx(r("WDSSwitch.react"), { value: !a.closed, onChange: _ }),
              ],
            })),
          (t[12] = n),
          (t[13] = a),
          (t[14] = g),
          (t[15] = y),
          (t[16] = _),
          (t[17] = m),
          (t[18] = d),
          (t[19] = S));
      } else S = t[19];
      var L;
      return (
        t[20] !== a.dayKey || t[21] !== v || t[22] !== S
          ? ((L = u.jsxs(
              "div",
              babelHelpers.extends({}, b, { children: [v, S] }),
              C,
            )),
            (t[20] = a.dayKey),
            (t[21] = v),
            (t[22] = S),
            (t[23] = L))
          : (L = t[23]),
        L
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.businessHoursMode,
        r = e.days,
        a = e.onAddHours,
        i = e.onDayToggle,
        l = e.onRemoveHours,
        s = e.onTimeChange;
      if (
        n === "specific_hours" ||
        n === "open_24h" ||
        n === "appointment_only"
      ) {
        var c;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = { className: "xb0esv5 xyo0t3i" }), (t[0] = c))
          : (c = t[0]);
        var d;
        if (
          t[1] !== n ||
          t[2] !== r ||
          t[3] !== a ||
          t[4] !== i ||
          t[5] !== l ||
          t[6] !== s
        ) {
          var m;
          (t[8] !== n || t[9] !== a || t[10] !== i || t[11] !== l || t[12] !== s
            ? ((m = function (t) {
                return u.jsx(
                  _,
                  {
                    businessHoursMode: n,
                    day: t,
                    onAddHours: a,
                    onDayToggle: i,
                    onRemoveHours: l,
                    onTimeChange: s,
                  },
                  t.dayKey,
                );
              }),
              (t[8] = n),
              (t[9] = a),
              (t[10] = i),
              (t[11] = l),
              (t[12] = s),
              (t[13] = m))
            : (m = t[13]),
            (d = r.map(m)),
            (t[1] = n),
            (t[2] = r),
            (t[3] = a),
            (t[4] = i),
            (t[5] = l),
            (t[6] = s),
            (t[7] = d));
        } else d = t[7];
        var p;
        return (
          t[14] !== d
            ? ((p = u.jsx("div", babelHelpers.extends({}, c, { children: d }))),
              (t[14] = d),
              (t[15] = p))
            : (p = t[15]),
          p
        );
      }
      return null;
    }
    function g(e, t) {
      return {
        dirX: o("WAWebDropdown.react").DirX.RIGHT,
        dirY: o("WAWebDropdown.react").DirY.BOTTOM,
        menu: u.jsx(r("WAWebBusinessHoursModeDropdownMenu.react"), {
          selectedMode: e,
          onModeChange: t,
        }),
        offsetX: 0,
        offsetY: 4,
        type: o("WAWebDropdown.react").MenuType.BusinessProfileDropdown,
      };
    }
    function h(e) {
      var t,
        a,
        i,
        l,
        c,
        d,
        _,
        h,
        v,
        R = o("react-compiler-runtime").c(47),
        L = m(
          (t = (a = e.businessHours) == null ? void 0 : a.mode) != null
            ? t
            : "specific_hours",
        ),
        E = L[0],
        k = L[1],
        I;
      if (R[0] !== ((i = e.businessHours) == null ? void 0 : i.days)) {
        var T, D, x;
        ((I =
          (T = (D = e.businessHours) == null ? void 0 : D.days) != null
            ? T
            : []),
          (R[0] = (x = e.businessHours) == null ? void 0 : x.days),
          (R[1] = I));
      } else I = R[1];
      var $ = m(I),
        P = $[0],
        N = $[1],
        M = (l = e.businessHours) == null ? void 0 : l.days,
        w = (c = e.businessHours) == null ? void 0 : c.mode,
        A = m(M),
        F = A[0],
        O = A[1],
        B = m(w),
        W = B[0],
        q = B[1];
      e.businessHours &&
        (M !== F || w !== W) &&
        (O(M),
        q(w),
        k(w != null ? w : "specific_hours"),
        N(M != null ? M : []));
      var U;
      if (
        R[2] !== P ||
        R[3] !== ((d = e.businessHours) == null ? void 0 : d.note) ||
        R[4] !== ((_ = e.businessHours) == null ? void 0 : _.timezone) ||
        R[5] !== e.saveBusinessProfile ||
        R[6] !== E
      ) {
        var V, H;
        ((U = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t,
              n,
              a,
              i,
              l = {};
            P.forEach(function (e) {
              var t = e.dayKey,
                n = e.closed,
                r = e.hours;
              if (
                !n &&
                o("WAWebBusinessProfileTypes").isBusinessHoursDayName(t)
              ) {
                var a = { mode: E };
                (E === "specific_hours" && r && (a.hours = r.map(S)),
                  (l[t] = a));
              }
            });
            var s = r("isStringNullOrEmpty")(
                (t = e.businessHours) == null ? void 0 : t.timezone,
              )
                ? Intl.DateTimeFormat().resolvedOptions().timeZone
                : (n = e.businessHours) == null
                  ? void 0
                  : n.timezone,
              u = {
                config: l,
                note: (a = e.businessHours) == null ? void 0 : a.note,
                timezone: s,
              },
              c =
                (i = e.saveBusinessProfile) != null
                  ? i
                  : o("WAWebBusinessProfileEdit").editBusinessProfile;
            try {
              return (yield c({ businessHours: u }), null);
            } catch (e) {
              return "Failed to save business hours";
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        })()),
          (R[2] = P),
          (R[3] = (V = e.businessHours) == null ? void 0 : V.note),
          (R[4] = (H = e.businessHours) == null ? void 0 : H.timezone),
          (R[5] = e.saveBusinessProfile),
          (R[6] = E),
          (R[7] = U));
      } else U = R[7];
      var G = U,
        z;
      R[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = function (t) {
            (k(t), t === "specific_hours" && N(b));
          }),
          (R[8] = z))
        : (z = R[8]);
      var j = z,
        K;
      R[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = function (t) {
            N(function (e) {
              return e.map(function (e) {
                if (e.dayKey === t) {
                  var n,
                    r = (n = e.hours) != null ? n : [];
                  return babelHelpers.extends({}, e, {
                    hours: [].concat(r, [["9:00am", "6:00pm"]]),
                  });
                }
                return e;
              });
            });
          }),
          (R[9] = K))
        : (K = R[9]);
      var Q = K,
        X;
      R[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = function (t, n) {
            N(function (e) {
              return e.map(function (e) {
                if (e.dayKey === t && e.hours != null) {
                  var r = e.hours.filter(function (e, t) {
                    return t !== n;
                  });
                  return babelHelpers.extends({}, e, { hours: r });
                }
                return e;
              });
            });
          }),
          (R[10] = X))
        : (X = R[10]);
      var Y = X,
        J;
      R[11] !== E
        ? ((J = function (t) {
            N(function (e) {
              return e.map(function (e) {
                if (e.dayKey === t) {
                  var n = !e.closed;
                  return E === "specific_hours" &&
                    e.closed &&
                    !n &&
                    (!e.hours || e.hours.length === 0)
                    ? babelHelpers.extends({}, e, {
                        closed: n,
                        hours: [
                          o("WAWebBusinessHoursUtils").getDefaultHoursPair(),
                        ],
                      })
                    : babelHelpers.extends({}, e, { closed: n });
                }
                return e;
              });
            });
          }),
          (R[11] = E),
          (R[12] = J))
        : (J = R[12]);
      var Z = J,
        ee;
      R[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = function (t, n, r, o) {
            N(function (e) {
              return e.map(function (e) {
                if (e.dayKey === t && e.hours != null) {
                  var a = e.hours.map(function (e, t) {
                    return t === n ? (r === "open" ? [o, e[1]] : [e[0], o]) : e;
                  });
                  return babelHelpers.extends({}, e, { hours: a });
                }
                return e;
              });
            });
          }),
          (R[13] = ee))
        : (ee = R[13]);
      var te = ee,
        ne;
      e: {
        var re,
          oe,
          ae,
          ie,
          le =
            (re = (oe = e.businessHours) == null ? void 0 : oe.mode) != null
              ? re
              : "specific_hours",
          se =
            (ae = (ie = e.businessHours) == null ? void 0 : ie.days) != null
              ? ae
              : [];
        if (E !== le) {
          ne = !0;
          break e;
        }
        if (P.length !== se.length) {
          ne = !0;
          break e;
        }
        for (var ue = 0; ue < P.length; ue++) {
          var ce,
            de,
            me = P[ue],
            pe = se[ue];
          if (me.dayKey !== pe.dayKey) {
            ne = !0;
            break e;
          }
          if (me.closed !== pe.closed) {
            ne = !0;
            break e;
          }
          var _e = (ce = me.hours) != null ? ce : [],
            fe = (de = pe.hours) != null ? de : [];
          if (_e.length !== fe.length) {
            ne = !0;
            break e;
          }
          for (var ge = 0; ge < _e.length; ge++)
            if (_e[ge][0] !== fe[ge][0] || _e[ge][1] !== fe[ge][1]) {
              ne = !0;
              break e;
            }
        }
        ne = !1;
      }
      var he = ne,
        ye;
      e: {
        if (E === "specific_hours")
          for (var Ce of P) {
            var be = Ce.closed,
              ve = Ce.hours;
            if (!be && ve)
              for (var Se of ve) {
                var Re = Se[0],
                  Le = Se[1];
                if (
                  !o("WAWebBusinessHoursUtils").isValidTime(Re) ||
                  !o("WAWebBusinessHoursUtils").isValidTime(Le)
                ) {
                  ye = !1;
                  break e;
                }
              }
          }
        ye = !0;
      }
      var Ee = ye,
        ke = C,
        Ie;
      if (
        R[14] !== P ||
        R[15] !== G ||
        R[16] !== ((h = e.businessHours) == null ? void 0 : h.days) ||
        R[17] !== ((v = e.businessHours) == null ? void 0 : v.mode)
      ) {
        var Te, De;
        ((Ie = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t,
              n,
              r = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
                .MODIFY,
              a =
                ((t = e.businessHours) == null ? void 0 : t.mode) != null &&
                ((n = e.businessHours) == null ? void 0 : n.days) != null;
            return (
              a
                ? P.every(y) &&
                  (r = o("WAWebBusinessProfileSMBUserJourneyLogger")
                    .OperationType.REMOVE)
                : (r = o("WAWebBusinessProfileSMBUserJourneyLogger")
                    .OperationType.ADD),
              o(
                "WAWebBusinessProfileSMBUserJourneyLogger",
              ).BusinessProfileUserJourneyLogger.saveBusinessHours(r),
              G()
            );
          });
          return function () {
            return t.apply(this, arguments);
          };
        })()),
          (R[14] = P),
          (R[15] = G),
          (R[16] = (Te = e.businessHours) == null ? void 0 : Te.days),
          (R[17] = (De = e.businessHours) == null ? void 0 : De.mode),
          (R[18] = Ie));
      } else Ie = R[18];
      var xe = Ie,
        $e;
      R[19] === Symbol.for("react.memo_cache_sentinel")
        ? (($e = s._(/*BTDS*/ "Edit business hours")), (R[19] = $e))
        : ($e = R[19]);
      var Pe = he && Ee,
        Ne,
        Me,
        we;
      R[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ne = { type: o("WAWebModal.react").ModalTheme.BusinessProfile }),
          (Me = function () {
            return ke(!1);
          }),
          (we = function () {
            return ke(!0);
          }),
          (R[20] = Ne),
          (R[21] = Me),
          (R[22] = we))
        : ((Ne = R[20]), (Me = R[21]), (we = R[22]));
      var Ae = e.tsNavigationData,
        Fe;
      R[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((Fe = { className: "x1aj3ljl xvpt6g3 x1phvje8 xcldk2z" }),
          (R[23] = Fe))
        : (Fe = R[23]);
      var Oe, Be;
      R[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((Oe = u.jsx(
            "div",
            babelHelpers.extends({}, Fe, {
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(
                  /*BTDS*/ "Let customers know when you are available.",
                ),
              }),
            }),
          )),
          (Be = { className: "x9f619 xb0esv5 xyo0t3i xh8yej3" }),
          (R[24] = Oe),
          (R[25] = Be))
        : ((Oe = R[24]), (Be = R[25]));
      var We;
      R[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((We = u.jsx(
            o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon,
            {},
          )),
          (R[26] = We))
        : (We = R[26]);
      var qe;
      R[27] !== E
        ? ((qe = o("WAWebBusinessHoursUtils").getModeDisplayName(E).toString()),
          (R[27] = E),
          (R[28] = qe))
        : (qe = R[28]);
      var Ue;
      R[29] !== E
        ? ((Ue = o("WAWebBusinessHoursUtils").getModeDisplayName(E)),
          (R[29] = E),
          (R[30] = Ue))
        : (Ue = R[30]);
      var Ve;
      R[31] !== E ? ((Ve = g(E, j)), (R[31] = E), (R[32] = Ve)) : (Ve = R[32]);
      var He;
      R[33] !== qe || R[34] !== Ue || R[35] !== Ve
        ? ((He = u.jsx(
            "div",
            babelHelpers.extends({}, Be, {
              children: u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
                icon: We,
                text: qe,
                title: Ue,
                xstyle: p.menuBarItemContainerOverride,
                buttonStyle: p.textFieldLikeButton,
                dropdownMenu: Ve,
              }),
            }),
          )),
          (R[33] = qe),
          (R[34] = Ue),
          (R[35] = Ve),
          (R[36] = He))
        : (He = R[36]);
      var Ge;
      R[37] !== P || R[38] !== Z || R[39] !== E
        ? ((Ge = u.jsx(f, {
            businessHoursMode: E,
            days: P,
            onAddHours: Q,
            onDayToggle: Z,
            onRemoveHours: Y,
            onTimeChange: te,
          })),
          (R[37] = P),
          (R[38] = Z),
          (R[39] = E),
          (R[40] = Ge))
        : (Ge = R[40]);
      var ze;
      return (
        R[41] !== xe ||
        R[42] !== e.tsNavigationData ||
        R[43] !== Pe ||
        R[44] !== He ||
        R[45] !== Ge
          ? ((ze = u.jsxs(r("WAWebSavePopup.react"), {
              title: $e,
              doSave: xe,
              isValid: Pe,
              modalConfig: Ne,
              onCancel: Me,
              afterSave: we,
              tsNavigationData: Ae,
              children: [Oe, He, Ge],
            })),
            (R[41] = xe),
            (R[42] = e.tsNavigationData),
            (R[43] = Pe),
            (R[44] = He),
            (R[45] = Ge),
            (R[46] = ze))
          : (ze = R[46]),
        ze
      );
    }
    function y(e) {
      return e.closed;
    }
    function C(e) {
      var t = e === void 0 ? !1 : e;
      t ||
        o(
          "WAWebBusinessProfileSMBUserJourneyLogger",
        ).BusinessProfileUserJourneyLogger.saveBusinessHours(
          o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.UNCHANGED,
        );
    }
    function b(e) {
      return e.map(v);
    }
    function v(e) {
      return !e.closed && (!e.hours || e.hours.length === 0)
        ? babelHelpers.extends({}, e, {
            hours: [o("WAWebBusinessHoursUtils").getDefaultHoursPair()],
          })
        : e;
    }
    function S(e) {
      var t = e[0],
        n = e[1];
      return [
        o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(t) || 0,
        o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(n) || 0,
      ];
    }
    l.default = h;
  },
  226,
);
