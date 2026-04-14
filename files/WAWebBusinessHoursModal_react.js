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
      var t,
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
        p = function () {
          l(a.dayKey);
        },
        _ = function () {
          i(a.dayKey);
        },
        f = function (t) {
          c(a.dayKey, t);
        };
      return u.jsxs(
        "div",
        {
          className: "x1xrf6ya xscbp6u",
          children: [
            u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              children: a.dayName,
            }),
            m
              ? u.jsxs(u.Fragment, {
                  children: [
                    (t = a.hours) == null
                      ? void 0
                      : t.map(function (e, t) {
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
                                            className:
                                              "x13qkkhc xeuugli x1n2onr6",
                                            children: u.jsx(
                                              r("WDSTextField.react"),
                                              {
                                                label: s._(/*BTDS*/ "Open"),
                                                value: e[0],
                                                onValueChange: function (n) {
                                                  return d(
                                                    a.dayKey,
                                                    t,
                                                    "open",
                                                    n,
                                                  );
                                                },
                                                error: !o(
                                                  "WAWebBusinessHoursUtils",
                                                ).isValidTime(e[0]),
                                              },
                                            ),
                                          }),
                                          u.jsx("div", {
                                            className:
                                              "x6s0dn4 x78zum5 xl56j7k",
                                            children: u.jsx(
                                              o("WAWebMinusIcon.react")
                                                .MinusIcon,
                                              {},
                                            ),
                                          }),
                                          u.jsx("div", {
                                            className:
                                              "x13qkkhc xeuugli x1n2onr6",
                                            children: u.jsx(
                                              r("WDSTextField.react"),
                                              {
                                                label: s._(/*BTDS*/ "Close"),
                                                value: e[1],
                                                onValueChange: function (n) {
                                                  return d(
                                                    a.dayKey,
                                                    t,
                                                    "close",
                                                    n,
                                                  );
                                                },
                                                error: !o(
                                                  "WAWebBusinessHoursUtils",
                                                ).isValidTime(e[1]),
                                              },
                                            ),
                                          }),
                                        ],
                                      }),
                                      (!o(
                                        "WAWebBusinessHoursUtils",
                                      ).isValidTime(e[0]) ||
                                        !o(
                                          "WAWebBusinessHoursUtils",
                                        ).isValidTime(e[1])) &&
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
                                          onChange: p,
                                        })
                                      : u.jsx(r("WDSButton.react"), {
                                          size: "medium",
                                          variant: "borderless",
                                          Icon: o(
                                            "WAWebCloseRefreshedIcon.react",
                                          ).CloseRefreshedIcon,
                                          onPress: function () {
                                            return f(t);
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
                          className:
                            "x6s0dn4 x78zum5 x1qughib xh8yej3 x1380le5",
                          children: u.jsx(r("WDSButton.react"), {
                            size: "medium",
                            variant: "borderless",
                            type: "default",
                            Icon: r("WDSIconIcAdd.react"),
                            label: s._(/*BTDS*/ "Add a set of hours"),
                            onPress: _,
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
                            children: o(
                              "WAWebBusinessHoursUtils",
                            ).getStatusText(n, a),
                          });
                    })(),
                    u.jsx(r("WDSSwitch.react"), {
                      value: !a.closed,
                      onChange: p,
                    }),
                  ],
                }),
          ],
        },
        a.dayKey,
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.businessHoursMode,
        n = e.days,
        r = e.onAddHours,
        o = e.onDayToggle,
        a = e.onRemoveHours,
        i = e.onTimeChange;
      return t === "specific_hours" ||
        t === "open_24h" ||
        t === "appointment_only"
        ? u.jsx("div", {
            className: "xb0esv5 xyo0t3i",
            children: n.map(function (e) {
              return u.jsx(
                _,
                {
                  businessHoursMode: t,
                  day: e,
                  onAddHours: r,
                  onDayToggle: o,
                  onRemoveHours: a,
                  onTimeChange: i,
                },
                e.dayKey,
              );
            }),
          })
        : null;
    }
    f.displayName = f.name + " [from " + i.id + "]";
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
        _,
        h = m(
          (t = (a = e.businessHours) == null ? void 0 : a.mode) != null
            ? t
            : "specific_hours",
        ),
        y = h[0],
        C = h[1],
        b = m(
          (i = (l = e.businessHours) == null ? void 0 : l.days) != null
            ? i
            : [],
        ),
        v = b[0],
        S = b[1],
        R = (c = e.businessHours) == null ? void 0 : c.days,
        L = (_ = e.businessHours) == null ? void 0 : _.mode,
        E = m(R),
        k = E[0],
        I = E[1],
        T = m(L),
        D = T[0],
        x = T[1];
      e.businessHours &&
        (R !== k || L !== D) &&
        (I(R),
        x(L),
        C(L != null ? L : "specific_hours"),
        S(R != null ? R : []));
      var $ = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t,
              n,
              a,
              i,
              l = {};
            v.forEach(function (e) {
              var t = e.dayKey,
                n = e.closed,
                r = e.hours;
              if (
                !n &&
                o("WAWebBusinessProfileTypes").isBusinessHoursDayName(t)
              ) {
                var a = { mode: y };
                (y === "specific_hours" &&
                  r &&
                  (a.hours = r.map(function (e) {
                    var t = e[0],
                      n = e[1];
                    return [
                      o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(t) || 0,
                      o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(n) || 0,
                    ];
                  })),
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
        })(),
        P = function (t) {
          (C(t),
            t === "specific_hours" &&
              S(function (e) {
                return e.map(function (e) {
                  return !e.closed && (!e.hours || e.hours.length === 0)
                    ? babelHelpers.extends({}, e, {
                        hours: [
                          o("WAWebBusinessHoursUtils").getDefaultHoursPair(),
                        ],
                      })
                    : e;
                });
              }));
        },
        N = function (t) {
          S(function (e) {
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
        },
        M = function (t, n) {
          S(function (e) {
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
        },
        w = function (t) {
          S(function (e) {
            return e.map(function (e) {
              if (e.dayKey === t) {
                var n = !e.closed;
                return y === "specific_hours" &&
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
        },
        A = function (t, n, r, o) {
          S(function (e) {
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
        },
        F = d(
          function () {
            var t,
              n,
              r,
              o,
              a =
                (t = (n = e.businessHours) == null ? void 0 : n.mode) != null
                  ? t
                  : "specific_hours",
              i =
                (r = (o = e.businessHours) == null ? void 0 : o.days) != null
                  ? r
                  : [];
            if (y !== a || v.length !== i.length) return !0;
            for (var l = 0; l < v.length; l++) {
              var s,
                u,
                c = v[l],
                d = i[l];
              if (c.dayKey !== d.dayKey || c.closed !== d.closed) return !0;
              var m = (s = c.hours) != null ? s : [],
                p = (u = d.hours) != null ? u : [];
              if (m.length !== p.length) return !0;
              for (var _ = 0; _ < m.length; _++)
                if (m[_][0] !== p[_][0] || m[_][1] !== p[_][1]) return !0;
            }
            return !1;
          },
          [y, v, e.businessHours],
        ),
        O = d(
          function () {
            if (y === "specific_hours")
              for (var e of v) {
                var t = e.closed,
                  n = e.hours;
                if (!t && n)
                  for (var r of n) {
                    var a = r[0],
                      i = r[1];
                    if (
                      !o("WAWebBusinessHoursUtils").isValidTime(a) ||
                      !o("WAWebBusinessHoursUtils").isValidTime(i)
                    )
                      return !1;
                  }
              }
            return !0;
          },
          [y, v],
        ),
        B = function (t) {
          (t === void 0 && (t = !1),
            t ||
              o(
                "WAWebBusinessProfileSMBUserJourneyLogger",
              ).BusinessProfileUserJourneyLogger.saveBusinessHours(
                o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
                  .UNCHANGED,
              ));
        },
        W = (function () {
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
                ? v.every(function (e) {
                    return e.closed;
                  }) &&
                  (r = o("WAWebBusinessProfileSMBUserJourneyLogger")
                    .OperationType.REMOVE)
                : (r = o("WAWebBusinessProfileSMBUserJourneyLogger")
                    .OperationType.ADD),
              o(
                "WAWebBusinessProfileSMBUserJourneyLogger",
              ).BusinessProfileUserJourneyLogger.saveBusinessHours(r),
              $()
            );
          });
          return function () {
            return t.apply(this, arguments);
          };
        })();
      return u.jsxs(r("WAWebSavePopup.react"), {
        title: s._(/*BTDS*/ "Edit business hours"),
        doSave: W,
        isValid: F && O,
        modalConfig: { type: o("WAWebModal.react").ModalTheme.BusinessProfile },
        onCancel: function () {
          return B(!1);
        },
        afterSave: function () {
          return B(!0);
        },
        tsNavigationData: e.tsNavigationData,
        children: [
          u.jsx("div", {
            className: "x1aj3ljl xvpt6g3 x1phvje8 xcldk2z",
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: s._(
                /*BTDS*/ "Let customers know when you are available.",
              ),
            }),
          }),
          u.jsx("div", {
            className: "x9f619 xb0esv5 xyo0t3i xh8yej3",
            children: u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
              icon: u.jsx(
                o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon,
                {},
              ),
              text: o("WAWebBusinessHoursUtils")
                .getModeDisplayName(y)
                .toString(),
              title: o("WAWebBusinessHoursUtils").getModeDisplayName(y),
              xstyle: p.menuBarItemContainerOverride,
              buttonStyle: p.textFieldLikeButton,
              dropdownMenu: g(y, P),
            }),
          }),
          u.jsx(f, {
            businessHoursMode: y,
            days: v,
            onAddHours: N,
            onDayToggle: w,
            onRemoveHours: M,
            onTimeChange: A,
          }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
