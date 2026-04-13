__d(
  "WAWebProfileDrawerBody.react",
  [
    "WAWebAboutPrompts",
    "WAWebAboutWamLogger",
    "WAWebBizGatingUtils",
    "WAWebBusinessContactProfile.react",
    "WAWebBusinessInfoProfile.react",
    "WAWebBusinessLinksProfile.react",
    "WAWebBusinessProductsAndServicesProfile.react",
    "WAWebBusinessProfileCoverPhotoRefreshed.react",
    "WAWebBusinessProfileLabels",
    "WAWebContactCollection",
    "WAWebDrawerBody.react",
    "WAWebDrawerSection.react",
    "WAWebMeTabSpeechBubble.react",
    "WAWebModalManager",
    "WAWebProfilePicThumbCollection",
    "WAWebProfileSectionHeader.react",
    "WAWebSmbUtils",
    "WAWebTextStatusEditModalLoadable",
    "WAWebTextStatusGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFormat",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = 1e3,
      d = {
        mainContainer: {
          flexShrink: "x2lah0s",
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.contact,
        a = e.profilePicThumb,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()), (t[0] = i))
        : (i = t[0]);
      var l = i,
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = o("WAWebTextStatusGatingUtils").sendTextStatusEnabled()),
          (t[1] = c))
        : (c = t[1]);
      var d = c,
        m = u(_),
        f = m[0],
        g = p,
        h;
      t[2] !== n || t[3] !== a
        ? ((h = n.businessProfile
            ? s.jsx(r("WAWebBusinessProfileCoverPhotoRefreshed.react"), {
                contact: n,
                businessProfile: n.businessProfile,
                editable: !0,
                profilePicThumb: a,
              })
            : null),
          (t[2] = n),
          (t[3] = a),
          (t[4] = h))
        : (h = t[4]);
      var y = h,
        C;
      t[5] !== f
        ? ((C =
            d &&
            s.jsx("div", {
              className:
                "x6s0dn4 x19q1oq6 x78zum5 xdt5ytf xbudbmw x10l6tqk xuuh30 xupqr0c",
              children: s.jsx(r("WAWebMeTabSpeechBubble.react"), {
                contactId: l,
                onClick: g,
                promptKey: f,
              }),
            })),
          (t[5] = f),
          (t[6] = C))
        : (C = t[6]);
      var b;
      return (
        t[7] !== y || t[8] !== C
          ? ((b = s.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              children: [y, C],
            })),
            (t[7] = y),
            (t[8] = C),
            (t[9] = b))
          : (b = t[9]),
        b
      );
    }
    function p(e) {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(
          o("WAWebTextStatusEditModalLoadable").TextStatusEditModalLoadable,
          {
            entrypoint: o("WAWebAboutWamLogger").ABOUT_ENTRYPOINT_TYPE.ME_TAB,
            promptKey: e,
          },
        ),
      );
    }
    function _() {
      return o("WAWebAboutPrompts").getRandomAboutPromptKey();
    }
    function f(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(48),
        i = e.about,
        l = e.bizProfileValues,
        c = e.onFieldChange,
        p = e.onLocationSelect,
        _ = e.onSave,
        f = e.onValidationChange,
        g = e.selectedLocation,
        h,
        y;
      if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
        var C = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
        ((h = o(
          "WAWebProfilePicThumbCollection",
        ).ProfilePicThumbCollection.assertGet(C)),
          (y = o("WAWebContactCollection").ContactCollection.assertGet(C)),
          (a[0] = h),
          (a[1] = y));
      } else ((h = a[0]), (y = a[1]));
      var b = y,
        v;
      (a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = ["businessProfile", "username", "usernameKey"]), (a[2] = v))
        : (v = a[2]),
        o("useWAWebModelValues").useModelValues(b, v));
      var S = u(!0),
        R = S[0],
        L = S[1],
        E = u(!0),
        k = E[0],
        I = E[1],
        T;
      a[3] !== k || a[4] !== f
        ? ((T = function (t) {
            L(t);
            var e = t && k;
            f && f(e);
          }),
          (a[3] = k),
          (a[4] = f),
          (a[5] = T))
        : (T = a[5]);
      var D = T,
        x;
      a[6] !== R || a[7] !== f
        ? ((x = function (t) {
            I(t);
            var e = R && t;
            f && f(e);
          }),
          (a[6] = R),
          (a[7] = f),
          (a[8] = x))
        : (x = a[8]);
      var $ = x,
        P,
        N,
        M,
        w;
      a[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = {
            className:
              "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 xdt5ytf x2lah0s x5yr21d x6ikm8r x10wlt62 x1n2onr6 xh8yej3",
          }),
          (N = {
            className:
              "xw6alqk x1iyjqo2 xs83m0k x15icp18 x1odjw0f x1tvm86q x1hqvyuz",
          }),
          (M = { className: "xvc5jky x11t971q xted6l9 xh8yej3" }),
          (w = s.jsx(m, { contact: b, profilePicThumb: h })),
          (a[9] = P),
          (a[10] = N),
          (a[11] = M),
          (a[12] = w))
        : ((P = a[9]), (N = a[10]), (M = a[11]), (w = a[12]));
      var A;
      a[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s.jsx(r("WAWebProfileSectionHeader.react"), {
            showDivider: !1,
            testId: "profile-business-information",
            title: o(
              "WAWebBusinessProfileLabels",
            ).getBusinessInformationTitleLabel(),
          })),
          (a[13] = A))
        : (A = a[13]);
      var F;
      if (
        a[14] !== l ||
        a[15] !== c ||
        a[16] !== p ||
        a[17] !== _ ||
        a[18] !== (g == null ? void 0 : g.latitude) ||
        a[19] !== (g == null ? void 0 : g.longitude)
      ) {
        var O, B, W, q, U, V;
        ((F =
          l != null &&
          s.jsx(r("WAWebBusinessInfoProfile.react"), {
            businessHours:
              ((O = b.businessProfile) == null ? void 0 : O.businessHours) !=
              null
                ? o("WAWebSmbUtils").getBusinessHoursForEdit(
                    b.businessProfile.businessHours,
                  )
                : null,
            categories: (B = b.businessProfile) == null ? void 0 : B.categories,
            latitude:
              (W = g == null ? void 0 : g.latitude) != null
                ? W
                : (q = b.businessProfile) == null
                  ? void 0
                  : q.latitude,
            longitude:
              (U = g == null ? void 0 : g.longitude) != null
                ? U
                : (V = b.businessProfile) == null
                  ? void 0
                  : V.longitude,
            onLocationSelect: p,
            onFieldChange: c,
            bizProfileValues: l,
            onSave: _,
          })),
          (a[14] = l),
          (a[15] = c),
          (a[16] = p),
          (a[17] = _),
          (a[18] = g == null ? void 0 : g.latitude),
          (a[19] = g == null ? void 0 : g.longitude),
          (a[20] = F));
      } else F = a[20];
      var H;
      a[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = { className: "x16ovd2e" }), (a[21] = H))
        : (H = a[21]);
      var G;
      a[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = s.jsx(
            "div",
            babelHelpers.extends({}, H, {
              children: s.jsx(r("WAWebProfileSectionHeader.react"), {
                showDivider: !0,
                title: o(
                  "WAWebBusinessProfileLabels",
                ).getProductsAndServicesTitleLabel(),
              }),
            }),
          )),
          (a[22] = G))
        : (G = a[22]);
      var z = b.businessProfile,
        j,
        K,
        Q;
      a[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = o("WAWebBizGatingUtils").businessPriceTierEnabled()),
          (K = o("WAWebBizGatingUtils").businessProfileRefreshV2Enabled()),
          (Q = o("WAWebBizGatingUtils").businessServiceOfferingsEnabled()),
          (a[23] = j),
          (a[24] = K),
          (a[25] = Q))
        : ((j = a[23]), (K = a[24]), (Q = a[25]));
      var X;
      a[26] !== l || a[27] !== c
        ? ((X = s.jsx(r("WAWebBusinessProductsAndServicesProfile.react"), {
            businessProfile: z,
            bizProfileValues: l,
            isPriceTierEnabled: j,
            isV2Enabled: K,
            isServiceOfferingsEnabled: Q,
            onFieldChange: c,
          })),
          (a[26] = l),
          (a[27] = c),
          (a[28] = X))
        : (X = a[28]);
      var Y;
      a[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = { className: "x16ovd2e" }), (a[29] = Y))
        : (Y = a[29]);
      var J;
      a[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = s.jsx(
            "div",
            babelHelpers.extends({}, Y, {
              children: s.jsx(r("WAWebProfileSectionHeader.react"), {
                showDivider: !0,
                title: o("WAWebBusinessProfileLabels").getLinksTitleLabel(),
              }),
            }),
          )),
          (a[30] = J))
        : (J = a[30]);
      var Z =
          l != null
            ? l.primaryWebsite
            : (t = b.businessProfile) == null ||
                (t = t.website) == null ||
                (t = t[0]) == null
              ? void 0
              : t.url,
        ee =
          l != null
            ? l.secondaryWebsite
            : (n = b.businessProfile) == null ||
                (n = n.website) == null ||
                (n = n[1]) == null
              ? void 0
              : n.url,
        te;
      a[31] !== $ || a[32] !== c || a[33] !== Z || a[34] !== ee
        ? ((te = s.jsx(r("WAWebBusinessLinksProfile.react"), {
            onChange: c,
            onValidationChange: $,
            primaryWebsite: Z,
            secondaryWebsite: ee,
          })),
          (a[31] = $),
          (a[32] = c),
          (a[33] = Z),
          (a[34] = ee),
          (a[35] = te))
        : (te = a[35]);
      var ne;
      a[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = { className: "x16ovd2e" }), (a[36] = ne))
        : (ne = a[36]);
      var re;
      a[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = s.jsx(
            "div",
            babelHelpers.extends({}, ne, {
              children: s.jsx(r("WAWebProfileSectionHeader.react"), {
                showDivider: !0,
                title: o(
                  "WAWebBusinessProfileLabels",
                ).getContactInformationTitleLabel(),
              }),
            }),
          )),
          (a[37] = re))
        : (re = a[37]);
      var oe;
      a[38] !== i || a[39] !== l || a[40] !== D || a[41] !== c
        ? ((oe =
            l != null &&
            s.jsx(r("WAWebBusinessContactProfile.react"), {
              about: i,
              email: l.email,
              hideAbout: o(
                "WAWebTextStatusGatingUtils",
              ).sendTextStatusEnabled(),
              onChange: c,
              onValidationChange: D,
              phoneNumber: o("WAWebWidFormat").widToFormattedUser(
                o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
              ),
              username: b.username,
              usernameKey: b.usernameKey,
            })),
          (a[38] = i),
          (a[39] = l),
          (a[40] = D),
          (a[41] = c),
          (a[42] = oe))
        : (oe = a[42]);
      var ae;
      return (
        a[43] !== F || a[44] !== X || a[45] !== te || a[46] !== oe
          ? ((ae = s.jsx(r("WAWebDrawerBody.react"), {
              xstyle: d.mainContainer,
              id: "profile-drawer-body",
              children: s.jsx(
                "div",
                babelHelpers.extends({}, P, {
                  children: s.jsx(
                    "div",
                    babelHelpers.extends({}, N, {
                      children: s.jsxs(
                        "div",
                        babelHelpers.extends({}, M, {
                          children: [w, A, F, G, X, J, te, re, oe],
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            })),
            (a[43] = F),
            (a[44] = X),
            (a[45] = te),
            (a[46] = oe),
            (a[47] = ae))
          : (ae = a[47]),
        ae
      );
    }
    l.default = f;
  },
  98,
);
