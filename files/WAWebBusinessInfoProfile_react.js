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
        n = o("react-compiler-runtime").c(56),
        a = e.bizProfileValues,
        i = e.businessHours,
        l = e.categories,
        u = e.latitude,
        c = e.longitude,
        d = e.onFieldChange,
        _ = e.onLocationSelect,
        f = e.onSave,
        g;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = ["pushname"]), (n[0] = g))
        : (g = n[0]);
      var h = o("useWAWebModelValues").useModelValues(
          o("WAWebConnModel").Conn,
          g,
        ),
        y = o("WAWebContactCollection").ContactCollection.getMeContact(),
        C =
          y != null &&
          o("WAWebContactGetters").getShowBusinessCheckmarkInChatlist(y),
        b = null;
      if (C) {
        var v;
        (n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = o("WAWebMiscGatingUtils").isBlueEnabled()
              ? s.jsx(
                  o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon,
                  {},
                )
              : s.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {})),
            (n[1] = v))
          : (v = n[1]),
          (b = v));
      }
      var S;
      n[2] !== u || n[3] !== c
        ? ((S = u != null && c != null ? { latitude: u, longitude: c } : null),
          (n[2] = u),
          (n[3] = c),
          (n[4] = S))
        : (S = n[4]);
      var R = m(S),
        L = R[0],
        E = R[1],
        k;
      n[5] !== _
        ? ((k = function (t) {
            (E({ latitude: t.latitude, longitude: t.longitude }),
              _ != null && _(t));
          }),
          (n[5] = _),
          (n[6] = k))
        : (k = n[6]);
      var I = k,
        T;
      n[7] !== d
        ? ((T = function (t, n) {
            (t === "address" && E(null), d != null && d(t, n));
          }),
          (n[7] = d),
          (n[8] = T))
        : (T = n[8]);
      var D = T,
        x;
      n[9] !== a.description
        ? ((x = function () {
            var e = a.description != null && a.description.trim() !== "";
            o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.clickDescription(e);
          }),
          (n[9] = a.description),
          (n[10] = x))
        : (x = n[10]);
      var $ = x,
        P;
      n[11] !== a.address
        ? ((P = function () {
            var e = a.address != null && a.address.trim() !== "";
            o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.clickAddress(e);
          }),
          (n[11] = a.address),
          (n[12] = P))
        : (P = n[12]);
      var N = P,
        M;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = o("WAWebBizGatingUtils").businessProfileRefreshV2Enabled()),
          (n[13] = M))
        : (M = n[13]);
      var w = M,
        A;
      e: {
        if (L != null) {
          A = L;
          break e;
        }
        var F;
        (n[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = o("WAWebCountryCenterCoordinates").getDefaultCenter()),
            (n[14] = F))
          : (F = n[14]),
          (A = F));
      }
      var O = A,
        B = a.serviceAreaRadius != null ? Number(a.serviceAreaRadius) : void 0,
        W;
      n[15] !== a.address ||
      n[16] !== O.latitude ||
      n[17] !== O.longitude ||
      n[18] !== B
        ? ((W = s.jsx(r("WAWebBizProfileAddressFieldMap.react"), {
            value: a.address,
            latitude: O.latitude,
            longitude: O.longitude,
            serviceAreaRadius: B,
          })),
          (n[15] = a.address),
          (n[16] = O.latitude),
          (n[17] = O.longitude),
          (n[18] = B),
          (n[19] = W))
        : (W = n[19]);
      var q = W,
        U;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = o(
            "WAWebBusinessProfileLabels",
          ).getBusinessNameNotEditableLabel()),
          (n[20] = U))
        : (U = n[20]);
      var V;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = s.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            xstyle: p.iconContainer,
            children: s.jsx(o("WAWebStorefrontIcon.react").StorefrontIcon, {}),
          })),
          (n[21] = V))
        : (V = n[21]);
      var H;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = s.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            children: o("WAWebBusinessProfileLabels").getBusinessNameLabel(),
          })),
          (n[22] = H))
        : (H = n[22]);
      var G = (t = h.pushname) != null ? t : "",
        z;
      n[23] !== G
        ? ((z = s.jsx(r("WDSTooltip.react"), {
            label: U,
            position: "end",
            children: s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 12,
              xstyle: p.fieldContainer,
              children: [
                V,
                s.jsxs(o("WAWebFlex.react").FlexColumn, {
                  align: "start",
                  grow: 1,
                  children: [
                    H,
                    s.jsxs(o("WAWebFlex.react").FlexRow, {
                      align: "center",
                      xstyle: p.verifiedBadgeRow,
                      children: [
                        s.jsx(r("WDSText.react"), {
                          type: "Body2",
                          colorName: "contentDefault",
                          children: G,
                        }),
                        b,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })),
          (n[23] = G),
          (n[24] = z))
        : (z = n[24]);
      var j, K;
      n[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = s.jsx(
            o("WAWebDescriptionRefreshedIcon.react").DescriptionRefreshedIcon,
            {},
          )),
          (K = o("WAWebBusinessProfileLabels").getDescriptionLabel()),
          (n[25] = j),
          (n[26] = K))
        : ((j = n[25]), (K = n[26]));
      var Q;
      n[27] !== a.description || n[28] !== $ || n[29] !== d
        ? ((Q = s.jsx(r("WAWebBusinessProfileTextField.react"), {
            editable: !0,
            fieldName: "description",
            icon: j,
            label: K,
            value: a.description,
            onChange: d,
            onClick: $,
          })),
          (n[27] = a.description),
          (n[28] = $),
          (n[29] = d),
          (n[30] = Q))
        : (Q = n[30]);
      var X;
      n[31] !== a.address ||
      n[32] !== a.locationNotes ||
      n[33] !== a.serviceAreaRadius ||
      n[34] !== N ||
      n[35] !== D ||
      n[36] !== I ||
      n[37] !== (L == null ? void 0 : L.latitude) ||
      n[38] !== (L == null ? void 0 : L.longitude)
        ? ((X = w
            ? s.jsx(r("WAWebBizProfileAddressAutocomplete.react"), {
                defaultValue: a.address,
                fieldName: "address",
                initialLatitude: L == null ? void 0 : L.latitude,
                initialLongitude: L == null ? void 0 : L.longitude,
                label: o("WAWebBusinessProfileLabels").getLocationLabel(),
                locationNotesValue: a.locationNotes,
                onChange: D,
                onClick: N,
                onLocationSelect: I,
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
          (n[31] = a.address),
          (n[32] = a.locationNotes),
          (n[33] = a.serviceAreaRadius),
          (n[34] = N),
          (n[35] = D),
          (n[36] = I),
          (n[37] = L == null ? void 0 : L.latitude),
          (n[38] = L == null ? void 0 : L.longitude),
          (n[39] = X))
        : (X = n[39]);
      var Y;
      n[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y =
            !w &&
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
          (n[40] = Y))
        : (Y = n[40]);
      var J;
      n[41] !== q || n[42] !== X
        ? ((J = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: p.addressContainer,
            children: [X, q, Y],
          })),
          (n[41] = q),
          (n[42] = X),
          (n[43] = J))
        : (J = n[43]);
      var Z;
      n[44] !== i || n[45] !== f
        ? ((Z =
            i != null &&
            s.jsx(r("WAWebBusinessHoursField.react"), {
              businessHours: i,
              label: o("WAWebBusinessProfileLabels").getBusinessHoursLabel(),
              saveBusinessProfile: f,
            })),
          (n[44] = i),
          (n[45] = f),
          (n[46] = Z))
        : (Z = n[46]);
      var ee;
      n[47] !== l || n[48] !== f
        ? ((ee = s.jsx(
            o("WAWebBusinessCategoryField.react").WAWebBusinessCategoryField,
            { categories: l, saveBusinessProfile: f },
          )),
          (n[47] = l),
          (n[48] = f),
          (n[49] = ee))
        : (ee = n[49]);
      var te;
      return (
        n[50] !== z || n[51] !== Q || n[52] !== J || n[53] !== Z || n[54] !== ee
          ? ((te = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              gap: 12,
              xstyle: p.container,
              children: [z, Q, J, Z, ee],
            })),
            (n[50] = z),
            (n[51] = Q),
            (n[52] = J),
            (n[53] = Z),
            (n[54] = ee),
            (n[55] = te))
          : (te = n[55]),
        te
      );
    }
    l.default = _;
  },
  98,
);
