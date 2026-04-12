__d(
  "WAWebBusinessInfoProfile.react",
  [
    "WAWebBizGatingUtils",
    "WAWebBizProfileAddressAutocomplete.react",
    "WAWebBizProfileAddressFieldMap.react",
    "WAWebBusinessCategoryField.react",
    "WAWebBusinessHoursField.react",
    "WAWebBusinessProfileLabels",
    "WAWebBusinessProfileSMBUserJourneyLogger",
    "WAWebBusinessProfileTextField.react",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebCountryCenterCoordinates",
    "WAWebDescriptionRefreshedIcon.react",
    "WAWebFlex.react",
    "WAWebMiscGatingUtils",
    "WAWebPsaVerifiedBlueIcon.react",
    "WAWebPsaVerifiedIcon.react",
    "WAWebStorefrontIcon.react",
    "WDSText.react",
    "WDSTooltip.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo,
      m = u.useState,
      p = {
        addressContainer: { alignSelf: "xkh2ocl", $$css: !0 },
        container: {
          paddingInlineStart: "xdx6fka",
          position: "x1n2onr6",
          $$css: !0,
        },
        fieldContainer: {
          alignSelf: "xkh2ocl",
          paddingBottom: "x12xbjc7",
          paddingInlineEnd: "xvtqlqk",
          paddingInlineStart: "x12w63v0",
          paddingTop: "x16ovd2e",
          $$css: !0,
        },
        iconContainer: {
          color: "xhslqc4",
          height: "x1nqnulx",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          width: "x1xvr5cs",
          $$css: !0,
        },
        mapEditText: { paddingInlineStart: "x17smslp", $$css: !0 },
        verifiedBadgeRow: { rowGap: "x1r0jzty", $$css: !0 },
      };
    function _(e) {
      var t,
        n = e.bizProfileValues,
        a = e.businessHours,
        i = e.categories,
        l = e.latitude,
        u = e.longitude,
        _ = e.onFieldChange,
        f = e.onLocationSelect,
        g = e.onSave,
        h = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, [
          "pushname",
        ]),
        y = o("WAWebContactCollection").ContactCollection.getMeContact(),
        C =
          y != null &&
          o("WAWebContactGetters").getShowBusinessCheckmarkInChatlist(y),
        b = null;
      C &&
        (b = o("WAWebMiscGatingUtils").isBlueEnabled()
          ? s.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {})
          : s.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {}));
      var v = m(l != null && u != null ? { latitude: l, longitude: u } : null),
        S = v[0],
        R = v[1],
        L = c(
          function (e) {
            (R({ latitude: e.latitude, longitude: e.longitude }),
              f != null && f(e));
          },
          [f],
        ),
        E = c(
          function (e, t) {
            (e === "address" && R(null), _ != null && _(e, t));
          },
          [_],
        ),
        k = function () {
          var e = n.description != null && n.description.trim() !== "";
          o(
            "WAWebBusinessProfileSMBUserJourneyLogger",
          ).BusinessProfileUserJourneyLogger.clickDescription(e);
        },
        I = function () {
          var e = n.address != null && n.address.trim() !== "";
          o(
            "WAWebBusinessProfileSMBUserJourneyLogger",
          ).BusinessProfileUserJourneyLogger.clickAddress(e);
        },
        T = o("WAWebBizGatingUtils").businessProfileRefreshV2Enabled(),
        D = d(
          function () {
            return S != null
              ? S
              : o("WAWebCountryCenterCoordinates").getDefaultCenter();
          },
          [S],
        ),
        x = s.jsx(r("WAWebBizProfileAddressFieldMap.react"), {
          value: n.address,
          latitude: D.latitude,
          longitude: D.longitude,
          serviceAreaRadius:
            n.serviceAreaRadius != null ? Number(n.serviceAreaRadius) : void 0,
        });
      return s.jsxs(o("WAWebFlex.react").FlexColumn, {
        gap: 12,
        xstyle: p.container,
        children: [
          s.jsx(r("WDSTooltip.react"), {
            label: o(
              "WAWebBusinessProfileLabels",
            ).getBusinessNameNotEditableLabel(),
            position: "end",
            children: s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 12,
              xstyle: p.fieldContainer,
              children: [
                s.jsx(o("WAWebFlex.react").FlexItem, {
                  align: "center",
                  justify: "center",
                  xstyle: p.iconContainer,
                  children: s.jsx(
                    o("WAWebStorefrontIcon.react").StorefrontIcon,
                    {},
                  ),
                }),
                s.jsxs(o("WAWebFlex.react").FlexColumn, {
                  align: "start",
                  grow: 1,
                  children: [
                    s.jsx(r("WDSText.react"), {
                      type: "Body3",
                      colorName: "contentDeemphasized",
                      children: o(
                        "WAWebBusinessProfileLabels",
                      ).getBusinessNameLabel(),
                    }),
                    s.jsxs(o("WAWebFlex.react").FlexRow, {
                      align: "center",
                      xstyle: p.verifiedBadgeRow,
                      children: [
                        s.jsx(r("WDSText.react"), {
                          type: "Body2",
                          colorName: "contentDefault",
                          children: (t = h.pushname) != null ? t : "",
                        }),
                        b,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          s.jsx(r("WAWebBusinessProfileTextField.react"), {
            editable: !0,
            fieldName: "description",
            icon: s.jsx(
              o("WAWebDescriptionRefreshedIcon.react").DescriptionRefreshedIcon,
              {},
            ),
            label: o("WAWebBusinessProfileLabels").getDescriptionLabel(),
            value: n.description,
            onChange: _,
            onClick: k,
          }),
          s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: p.addressContainer,
            children: [
              T
                ? s.jsx(r("WAWebBizProfileAddressAutocomplete.react"), {
                    defaultValue: n.address,
                    fieldName: "address",
                    initialLatitude: S == null ? void 0 : S.latitude,
                    initialLongitude: S == null ? void 0 : S.longitude,
                    label: o("WAWebBusinessProfileLabels").getLocationLabel(),
                    locationNotesValue: n.locationNotes,
                    onChange: E,
                    onClick: I,
                    onLocationSelect: L,
                    serviceAreaRadiusValue: n.serviceAreaRadius,
                  })
                : s.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    gap: 12,
                    xstyle: p.fieldContainer,
                    children: [
                      s.jsx(o("WAWebFlex.react").FlexItem, {
                        align: "center",
                        justify: "center",
                        xstyle: p.iconContainer,
                        children: s.jsx(
                          o("WAWebStorefrontIcon.react").StorefrontIcon,
                          {},
                        ),
                      }),
                      s.jsxs(o("WAWebFlex.react").FlexColumn, {
                        align: "start",
                        grow: 1,
                        children: [
                          s.jsx(r("WDSText.react"), {
                            type: "Body3",
                            colorName: "contentDeemphasized",
                            children: o(
                              "WAWebBusinessProfileLabels",
                            ).getLocationLabel(),
                          }),
                          s.jsx(r("WDSText.react"), {
                            type: "Body2",
                            colorName: "contentDefault",
                            children: n.address,
                          }),
                        ],
                      }),
                    ],
                  }),
              x,
              !T &&
                s.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  gap: 12,
                  xstyle: [p.fieldContainer, p.mapEditText],
                  children: s.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: o(
                      "WAWebBusinessProfileLabels",
                    ).getAddressEditMobileLabel(),
                  }),
                }),
            ],
          }),
          a != null &&
            s.jsx(r("WAWebBusinessHoursField.react"), {
              businessHours: a,
              label: o("WAWebBusinessProfileLabels").getBusinessHoursLabel(),
              saveBusinessProfile: g,
            }),
          s.jsx(
            o("WAWebBusinessCategoryField.react").WAWebBusinessCategoryField,
            { categories: i, saveBusinessProfile: g },
          ),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
