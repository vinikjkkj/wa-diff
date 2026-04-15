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
    "react-compiler-runtime",
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
        n = o("react-compiler-runtime").c(66),
        a = e.bizProfileValues,
        i = e.businessHours,
        l = e.categories,
        u = e.isAgentProfileLocked,
        c = e.latitude,
        d = e.longitude,
        _ = e.onFieldChange,
        f = e.onLocationSelect,
        g = e.onLockedFieldClick,
        h = e.onSave,
        y;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = ["pushname"]), (n[0] = y))
        : (y = n[0]);
      var C = o("useWAWebModelValues").useModelValues(
          o("WAWebConnModel").Conn,
          y,
        ),
        b = o("WAWebContactCollection").ContactCollection.getMeContact(),
        v =
          b != null &&
          o("WAWebContactGetters").getShowBusinessCheckmarkInChatlist(b),
        S = null;
      if (v) {
        var R;
        (n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = o("WAWebMiscGatingUtils").isBlueEnabled()
              ? s.jsx(
                  o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon,
                  {},
                )
              : s.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {})),
            (n[1] = R))
          : (R = n[1]),
          (S = R));
      }
      var L;
      n[2] !== c || n[3] !== d
        ? ((L = c != null && d != null ? { latitude: c, longitude: d } : null),
          (n[2] = c),
          (n[3] = d),
          (n[4] = L))
        : (L = n[4]);
      var E = m(L),
        k = E[0],
        I = E[1],
        T;
      n[5] !== f
        ? ((T = function (t) {
            (I({ latitude: t.latitude, longitude: t.longitude }),
              f != null && f(t));
          }),
          (n[5] = f),
          (n[6] = T))
        : (T = n[6]);
      var D = T,
        x;
      n[7] !== _
        ? ((x = function (t, n) {
            (t === "address" && I(null), _ != null && _(t, n));
          }),
          (n[7] = _),
          (n[8] = x))
        : (x = n[8]);
      var $ = x,
        P;
      n[9] !== a.description
        ? ((P = function () {
            var e = a.description != null && a.description.trim() !== "";
            o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.clickDescription(e);
          }),
          (n[9] = a.description),
          (n[10] = P))
        : (P = n[10]);
      var N = P,
        M;
      n[11] !== a.address
        ? ((M = function () {
            var e = a.address != null && a.address.trim() !== "";
            o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.clickAddress(e);
          }),
          (n[11] = a.address),
          (n[12] = M))
        : (M = n[12]);
      var w = M,
        A;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = o("WAWebBizGatingUtils").businessProfileRefreshV2Enabled()),
          (n[13] = A))
        : (A = n[13]);
      var F = A,
        O;
      e: {
        if (k != null) {
          O = k;
          break e;
        }
        var B;
        (n[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = o("WAWebCountryCenterCoordinates").getDefaultCenter()),
            (n[14] = B))
          : (B = n[14]),
          (O = B));
      }
      var W = O,
        q = a.serviceAreaRadius != null ? Number(a.serviceAreaRadius) : void 0,
        U;
      n[15] !== a.address ||
      n[16] !== W.latitude ||
      n[17] !== W.longitude ||
      n[18] !== q
        ? ((U = s.jsx(r("WAWebBizProfileAddressFieldMap.react"), {
            value: a.address,
            latitude: W.latitude,
            longitude: W.longitude,
            serviceAreaRadius: q,
          })),
          (n[15] = a.address),
          (n[16] = W.latitude),
          (n[17] = W.longitude),
          (n[18] = q),
          (n[19] = U))
        : (U = n[19]);
      var V = U,
        H;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = o(
            "WAWebBusinessProfileLabels",
          ).getBusinessNameNotEditableLabel()),
          (n[20] = H))
        : (H = n[20]);
      var G;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = s.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            xstyle: p.iconContainer,
            children: s.jsx(o("WAWebStorefrontIcon.react").StorefrontIcon, {}),
          })),
          (n[21] = G))
        : (G = n[21]);
      var z;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = s.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            children: o("WAWebBusinessProfileLabels").getBusinessNameLabel(),
          })),
          (n[22] = z))
        : (z = n[22]);
      var j = (t = C.pushname) != null ? t : "",
        K;
      n[23] !== j
        ? ((K = s.jsx(r("WDSTooltip.react"), {
            label: H,
            position: "end",
            children: s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 12,
              xstyle: p.fieldContainer,
              children: [
                G,
                s.jsxs(o("WAWebFlex.react").FlexColumn, {
                  align: "start",
                  grow: 1,
                  children: [
                    z,
                    s.jsxs(o("WAWebFlex.react").FlexRow, {
                      align: "center",
                      xstyle: p.verifiedBadgeRow,
                      children: [
                        s.jsx(r("WDSText.react"), {
                          type: "Body2",
                          colorName: "contentDefault",
                          children: j,
                        }),
                        S,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })),
          (n[23] = j),
          (n[24] = K))
        : (K = n[24]);
      var Q, X;
      n[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = s.jsx(
            o("WAWebDescriptionRefreshedIcon.react").DescriptionRefreshedIcon,
            {},
          )),
          (X = o("WAWebBusinessProfileLabels").getDescriptionLabel()),
          (n[25] = Q),
          (n[26] = X))
        : ((Q = n[25]), (X = n[26]));
      var Y;
      n[27] !== u || n[28] !== g
        ? ((Y =
            u === !0 && g != null
              ? function () {
                  return g(
                    o("WAWebBusinessProfileLabels").getDescriptionLabel(),
                  );
                }
              : void 0),
          (n[27] = u),
          (n[28] = g),
          (n[29] = Y))
        : (Y = n[29]);
      var J;
      n[30] !== a.description ||
      n[31] !== N ||
      n[32] !== u ||
      n[33] !== _ ||
      n[34] !== Y
        ? ((J = s.jsx(r("WAWebBusinessProfileTextField.react"), {
            editable: !0,
            fieldName: "description",
            icon: Q,
            label: X,
            locked: u,
            value: a.description,
            onChange: _,
            onClick: N,
            onLockedClick: Y,
          })),
          (n[30] = a.description),
          (n[31] = N),
          (n[32] = u),
          (n[33] = _),
          (n[34] = Y),
          (n[35] = J))
        : (J = n[35]);
      var Z;
      n[36] !== a.address ||
      n[37] !== a.locationNotes ||
      n[38] !== a.serviceAreaRadius ||
      n[39] !== w ||
      n[40] !== $ ||
      n[41] !== D ||
      n[42] !== (k == null ? void 0 : k.latitude) ||
      n[43] !== (k == null ? void 0 : k.longitude)
        ? ((Z = F
            ? s.jsx(r("WAWebBizProfileAddressAutocomplete.react"), {
                defaultValue: a.address,
                fieldName: "address",
                initialLatitude: k == null ? void 0 : k.latitude,
                initialLongitude: k == null ? void 0 : k.longitude,
                label: o("WAWebBusinessProfileLabels").getLocationLabel(),
                locationNotesValue: a.locationNotes,
                onChange: $,
                onClick: w,
                onLocationSelect: D,
                serviceAreaRadiusValue: a.serviceAreaRadius,
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
                        children: a.address,
                      }),
                    ],
                  }),
                ],
              })),
          (n[36] = a.address),
          (n[37] = a.locationNotes),
          (n[38] = a.serviceAreaRadius),
          (n[39] = w),
          (n[40] = $),
          (n[41] = D),
          (n[42] = k == null ? void 0 : k.latitude),
          (n[43] = k == null ? void 0 : k.longitude),
          (n[44] = Z))
        : (Z = n[44]);
      var ee;
      n[45] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee =
            !F &&
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
            })),
          (n[45] = ee))
        : (ee = n[45]);
      var te;
      n[46] !== V || n[47] !== Z
        ? ((te = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: p.addressContainer,
            children: [Z, V, ee],
          })),
          (n[46] = V),
          (n[47] = Z),
          (n[48] = te))
        : (te = n[48]);
      var ne;
      n[49] !== i || n[50] !== h
        ? ((ne =
            i != null &&
            s.jsx(r("WAWebBusinessHoursField.react"), {
              businessHours: i,
              label: o("WAWebBusinessProfileLabels").getBusinessHoursLabel(),
              saveBusinessProfile: h,
            })),
          (n[49] = i),
          (n[50] = h),
          (n[51] = ne))
        : (ne = n[51]);
      var re;
      n[52] !== u || n[53] !== g
        ? ((re =
            u === !0 && g != null
              ? function () {
                  return g(o("WAWebBusinessProfileLabels").getCategoryLabel());
                }
              : void 0),
          (n[52] = u),
          (n[53] = g),
          (n[54] = re))
        : (re = n[54]);
      var oe;
      n[55] !== l || n[56] !== u || n[57] !== h || n[58] !== re
        ? ((oe = s.jsx(
            o("WAWebBusinessCategoryField.react").WAWebBusinessCategoryField,
            {
              categories: l,
              locked: u,
              onLockedClick: re,
              saveBusinessProfile: h,
            },
          )),
          (n[55] = l),
          (n[56] = u),
          (n[57] = h),
          (n[58] = re),
          (n[59] = oe))
        : (oe = n[59]);
      var ae;
      return (
        n[60] !== K ||
        n[61] !== J ||
        n[62] !== te ||
        n[63] !== ne ||
        n[64] !== oe
          ? ((ae = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              gap: 12,
              xstyle: p.container,
              children: [K, J, te, ne, oe],
            })),
            (n[60] = K),
            (n[61] = J),
            (n[62] = te),
            (n[63] = ne),
            (n[64] = oe),
            (n[65] = ae))
          : (ae = n[65]),
        ae
      );
    }
    l.default = _;
  },
  98,
);
