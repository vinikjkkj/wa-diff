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
      var t = e.closed,
        n = e.hours,
        a = e.mode;
      if (t)
        return u.jsx(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDefault",
          children: s._(/*BTDS*/ "Closed"),
        });
      switch (a) {
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS:
          return u.jsx(o("WAWebFlex.react").FlexColumn, {
            gap: 4,
            align: "end",
            children:
              n &&
              n.map(function (e, t) {
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
              }),
          });
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
          .APPOINTMENT_ONLY:
          return u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "By appointment only"),
          });
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H:
          return u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Open 24 hours"),
          });
        default:
          return null;
      }
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.day,
        n = e.mode,
        a = t.closed,
        i = t.dayName,
        l = t.hours;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "start",
        gap: 12,
        xstyle: d.hoursRow,
        children: [
          u.jsx("div", {
            className: "x2lah0s xn80e1m",
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              children: i,
            }),
          }),
          u.jsx("div", {
            className: "x2lah0s xp4054r",
            children: u.jsx(m, { mode: n, closed: a, hours: l }),
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.businessHours,
        n = e.label,
        a = e.saveBusinessProfile,
        i = o("WAWebBizGatingUtils").businessProfileRefreshV2Enabled(),
        l = function () {
          var e =
            (t == null ? void 0 : t.mode) != null &&
            (t == null ? void 0 : t.days) != null;
          (o(
            "WAWebBusinessProfileSMBUserJourneyLogger",
          ).BusinessProfileUserJourneyLogger.clickBusinessHours(e),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(c, { businessHours: t, saveBusinessProfile: a }),
            ));
        };
      if (
        (t == null ? void 0 : t.mode) == null ||
        (t == null ? void 0 : t.days) == null
      )
        return u.jsx(r("WAWebBusinessProfileTextField.react"), {
          editable: !1,
          icon: u.jsx(r("WDSIconIcSchedule.react"), {}),
          label: "",
          onEditClick: l,
          value: "Business hours",
        });
      var s = t.days,
        m = t.mode;
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: [d.fieldContainer, i && d.fieldContainerHover],
        children: [
          u.jsx(r("WAWebBusinessProfileTextField.react"), {
            editable: !1,
            icon: u.jsx(r("WDSIconIcSchedule.react"), {}),
            label: n,
            onEditClick: l,
            value: o("WAWebBusinessHoursUtils")
              .getModeDisplayName(m)
              .toString(),
          }),
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            gap: 12,
            xstyle: d.hoursContainer,
            children: s.map(function (e) {
              return u.jsx(p, { day: e, mode: m }, e.dayKey);
            }),
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
