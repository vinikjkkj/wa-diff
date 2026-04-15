__d(
  "WAWebBizProfileDrawer.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBusinessIcon.react",
    "WAWebBusinessProfileCoverPhoto.react",
    "WAWebBusinessProfileIconSection.react",
    "WAWebBusinessProfileUtils",
    "WAWebButton.react",
    "WAWebCatalogLoadError.react",
    "WAWebCatalogLoadErrorLoadable",
    "WAWebChevronIcon.react",
    "WAWebContactInfoLinkedSocialAccounts.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebDrawerSection.react",
    "WAWebEditForm.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebInfoRefreshedIcon.react",
    "WAWebMiscGatingUtils",
    "WAWebPhoneIcon.react",
    "WAWebProductCatalogDrawerSection",
    "WAWebProductCatalogMetaLinkingGatingUtils",
    "WAWebProfileDrawerUsername.react",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusSection",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebWidFormat",
    "WDSIconIcInfo.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebCatalogRecovery",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        businessComplianceIconWrapper: {
          paddingInlineEnd: "x1djn7hi",
          color: "xhslqc4",
          $$css: !0,
        },
        businessComplianceText: {
          flexGrow: "x1iyjqo2",
          color: "x14ug900",
          $$css: !0,
        },
        businessComplianceRightAltIcon: { color: "xhslqc4", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onTitleClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: c.businessComplianceIconWrapper,
            children: u.jsx(o("WAWebBusinessIcon.react").BusinessIcon, {}),
          })),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: c.businessComplianceText,
            children: s._(/*BTDS*/ "Business details"),
          })),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [
              a,
              i,
              u.jsx(r("WAWebFlexItem.react"), {
                children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                  xstyle: c.businessComplianceRightAltIcon,
                  directional: !0,
                  height: 21,
                }),
              }),
            ],
          })),
          (t[2] = l))
        : (l = t[2]);
      var d;
      return (
        t[3] !== n
          ? ((d = u.jsx(r("WAWebDrawerSection.react"), {
              title: l,
              theme: "refresh-padding-title",
              titleOnClick: n,
              animation: !1,
            })),
            (t[3] = n),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.contact,
        a = e.profilePicThumb,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = n.businessProfile
            ? u.jsx(r("WAWebBusinessProfileCoverPhoto.react"), {
                contact: n,
                businessProfile: n.businessProfile,
                editable: !0,
                profilePicThumb: a,
              })
            : null),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        s;
      return (
        t[3] !== l
          ? ((s = u.jsx(r("WAWebDrawerSection.react"), {
              theme: "padding-no-margin",
              animation: !1,
              children: l,
            })),
            (t[3] = l),
            (t[4] = s))
          : (s = t[4]),
        s
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.contact;
      if (
        !o("WAWebBizGatingUtils").bizLinkedAccountsEnabled() ||
        !n.businessProfile
      )
        return null;
      var a;
      return (
        t[0] !== n.businessProfile
          ? ((a = u.jsx(r("WAWebContactInfoLinkedSocialAccounts.react"), {
              businessProfile: n.businessProfile,
              sectionTheme: "refresh-padding-title",
              showEditHint: !0,
            })),
            (t[0] = n.businessProfile),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.businessProfile,
        a = e.catalogResult,
        i = e.openCatalogDetailsForm,
        l = o("useWAWebCatalogRecovery").useCatalogRecovery(),
        c;
      t[0] !== n
        ? ((c = function () {
            o("WAWebBizGatingUtils").bannedShopsEnabled() &&
              o("WAWebBusinessProfileUtils").goToCommerceManager(n);
          }),
          (t[0] = n),
          (t[1] = c))
        : (c = t[1]);
      var d = c,
        m =
          o("WAWebBizGatingUtils").bannedShopsEnabled() &&
          o("WAWebBusinessProfileUtils").hasShop(n) &&
          o("WAWebBusinessProfileUtils").isShopBanned(n);
      if (m) {
        var p, _;
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = { className: "x2b8uid" }),
            (_ = u.jsx("div", {
              className:
                "x1sgpng x14z9mp x91k8ka x1lziwak x1pg5gke x37zpob xhslqc4",
              children: s._(
                /*BTDS*/ "This shop has been disabled for not complying with our Business or Commerce policies.",
              ),
            })),
            (t[2] = p),
            (t[3] = _))
          : ((p = t[2]), (_ = t[3]));
        var f;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = s._(/*BTDS*/ "Commerce Manager")), (t[4] = f))
          : (f = t[4]);
        var g;
        return (
          t[5] !== d
            ? ((g = u.jsx(r("WAWebDrawerSection.react"), {
                theme: "padding-large",
                animation: !1,
                children: u.jsxs(
                  "div",
                  babelHelpers.extends({}, p, {
                    children: [
                      _,
                      u.jsx(o("WAWebButton.react").Button, {
                        type: "primary",
                        onClick: d,
                        children: f,
                      }),
                    ],
                  }),
                ),
              })),
              (t[5] = d),
              (t[6] = g))
            : (g = t[6]),
          g
        );
      }
      if (l) {
        var h;
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = s._(/*BTDS*/ "Products")), (t[7] = h))
          : (h = t[7]);
        var y;
        return (
          t[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = u.jsx(r("WAWebDrawerSection.react"), {
                title: h,
                theme: "refresh",
                animation: !0,
                children: u.jsx(
                  o("WAWebCatalogLoadError.react").CatalogLoadError,
                  {
                    ctaDisplayType: o("WAWebCatalogLoadErrorLoadable")
                      .CTADisplayType.BUTTON,
                  },
                ),
              })),
              (t[8] = y))
            : (y = t[8]),
          y
        );
      }
      if ((a == null ? void 0 : a.catalogError) === !0) {
        var C;
        t[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = s._(/*BTDS*/ "Products")), (t[9] = C))
          : (C = t[9]);
        var b;
        return (
          t[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = u.jsx(r("WAWebDrawerSection.react"), {
                title: C,
                theme: "refresh",
                animation: !0,
                children: u.jsx(
                  o("WAWebCatalogLoadError.react").CatalogLoadError,
                  {
                    ctaDisplayType: o("WAWebCatalogLoadErrorLoadable")
                      .CTADisplayType.NONE,
                    shouldShowHeader: !1,
                  },
                ),
              })),
              (t[10] = b))
            : (b = t[10]),
          b
        );
      }
      var v = a == null ? void 0 : a.catalog,
        S;
      return (
        t[11] !== n || t[12] !== i || t[13] !== v
          ? ((S = u.jsx(r("WAWebProductCatalogDrawerSection"), {
              businessProfile: n,
              catalog: v,
              openCatalog: i,
              animation: !1,
            })),
            (t[11] = n),
            (t[12] = i),
            (t[13] = v),
            (t[14] = S))
          : (S = t[14]),
        S
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = o("WAWebMiscGatingUtils").isBlueLockingEnabled()
              ? u.jsx(y, babelHelpers.extends({}, e))
              : u.jsx(h, babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function g(e) {
      return !(
        o("WAWebBizGatingUtils").blockCatalogCreationECommerceComplianceIndia(
          e.businessProfile,
        ) ||
        o(
          "WAWebProductCatalogMetaLinkingGatingUtils",
        ).shouldDisableCatalogDueToMetaLinkingForSelf()
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(32),
        n = e.aboutInput,
        a = e.businessProfile,
        i = e.catalogResult,
        l = e.contact,
        c = e.isRefreshed,
        m = e.openCatalogDetailsForm,
        f = e.openCreateUsernameDrawer,
        h = e.openEditUsernameDrawer,
        y = e.openMerchantDetailsForm,
        C;
      t[0] !== n
        ? ((C = u.jsx(o("WAWebBusinessProfileIconSection.react").IconSection, {
            Icon: r("WDSIconIcInfo.react"),
            content: n,
          })),
          (t[0] = n),
          (t[1] = C))
        : (C = t[1]);
      var b = C,
        v;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = "xdod15v"), (t[2] = v))
        : (v = t[2]);
      var S;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx(o("WAWebBusinessProfileIconSection.react").IconSection, {
            Icon: o("WAWebPhoneIcon.react").PhoneIcon,
            type: "container",
            content: u.jsxs("div", {
              children: [
                u.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
                  className: v,
                  selectable: !0,
                  children: o("WAWebWidFormat").widToFormattedUser(
                    o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
                  ),
                }),
                u.jsx("div", {
                  className: "x1sgpng x1pg5gke x37zpob xhslqc4",
                  children: s._(
                    /*BTDS*/ "Your phone number can be edited from the app on your mobile device.",
                  ),
                }),
              ],
            }),
          })),
          (t[3] = S))
        : (S = t[3]);
      var R = S,
        L;
      if (t[4] !== b || t[5] !== e.aboutValue) {
        var E;
        ((L =
          !o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() &&
          !r("isStringNullOrEmpty")(
            (E = e.aboutValue) == null ? void 0 : E.trim(),
          ) &&
          (o("WAWebMiscGatingUtils").isBlueLockingEnabled()
            ? u.jsx(r("WAWebDrawerSection.react"), {
                title: s._(/*BTDS*/ "About"),
                theme: "refresh",
                animation: !1,
                children: b,
              })
            : u.jsxs(r("WAWebDrawerSection.react"), {
                title: s._(/*BTDS*/ "About and phone number"),
                theme: "refresh",
                animation: !1,
                children: [b, R],
              }))),
          (t[4] = b),
          (t[5] = e.aboutValue),
          (t[6] = L));
      } else L = t[6];
      var k = L,
        I;
      t[7] !== l.username || t[8] !== f || t[9] !== h
        ? ((I =
            o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).usernameCreationOrReservationEnabled() &&
            u.jsx(r("WAWebProfileDrawerUsername.react"), {
              onClick: (l == null ? void 0 : l.username) != null ? h : f,
            })),
          (t[7] = l.username),
          (t[8] = f),
          (t[9] = h),
          (t[10] = I))
        : (I = t[10]);
      var T = I,
        D;
      t[11] !== c || t[12] !== e.entryPoint
        ? ((D = u.jsx(r("WAWebEditForm.react"), {
            isRefreshed: c,
            entryPoint: e.entryPoint,
          })),
          (t[11] = c),
          (t[12] = e.entryPoint),
          (t[13] = D))
        : (D = t[13]);
      var x;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((x =
            o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() &&
            u.jsx(r("WAWebTextStatusSection"), {})),
          (t[14] = x))
        : (x = t[14]);
      var $;
      t[15] !== l.id || t[16] !== y
        ? (($ =
            o(
              "WAWebBizGatingUtils",
            ).canSeeECommerceComplianceIndiaSoftEnforcement(l.id) &&
            u.jsx(d, { onTitleClick: y })),
          (t[15] = l.id),
          (t[16] = y),
          (t[17] = $))
        : ($ = t[17]);
      var P;
      t[18] !== a || t[19] !== i || t[20] !== l || t[21] !== m
        ? ((P =
            g(l) &&
            u.jsx(_, {
              businessProfile: a,
              openCatalogDetailsForm: m,
              catalogResult: i,
            })),
          (t[18] = a),
          (t[19] = i),
          (t[20] = l),
          (t[21] = m),
          (t[22] = P))
        : (P = t[22]);
      var N;
      t[23] !== l
        ? ((N = u.jsx(p, { contact: l })), (t[23] = l), (t[24] = N))
        : (N = t[24]);
      var M;
      return (
        t[25] !== k ||
        t[26] !== D ||
        t[27] !== $ ||
        t[28] !== P ||
        t[29] !== N ||
        t[30] !== T
          ? ((M = u.jsxs("div", { children: [D, x, $, P, N, k, T] })),
            (t[25] = k),
            (t[26] = D),
            (t[27] = $),
            (t[28] = P),
            (t[29] = N),
            (t[30] = T),
            (t[31] = M))
          : (M = t[31]),
        M
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.aboutInput,
        a = e.businessProfile,
        i = e.catalogResult,
        l = e.contact,
        c = e.isRefreshed,
        m = e.openCatalogDetailsForm,
        f = e.openCreateUsernameDrawer,
        h = e.openEditUsernameDrawer,
        y = e.openMerchantDetailsForm,
        C = c
          ? o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon
          : r("WDSIconIcInfo.react"),
        b;
      t[0] !== n || t[1] !== C
        ? ((b = u.jsx(o("WAWebBusinessProfileIconSection.react").IconSection, {
            Icon: C,
            content: n,
          })),
          (t[0] = n),
          (t[1] = C),
          (t[2] = b))
        : (b = t[2]);
      var v = b,
        S;
      if (t[3] !== v || t[4] !== e.aboutValue) {
        var R;
        ((S =
          !o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() &&
          !r("isStringNullOrEmpty")(
            (R = e.aboutValue) == null ? void 0 : R.trim(),
          ) &&
          u.jsx(r("WAWebDrawerSection.react"), {
            title: s._(/*BTDS*/ "About"),
            theme: "refresh",
            animation: !1,
            children: v,
          })),
          (t[3] = v),
          (t[4] = e.aboutValue),
          (t[5] = S));
      } else S = t[5];
      var L = S,
        E;
      t[6] !== l.username || t[7] !== f || t[8] !== h
        ? ((E =
            o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).usernameCreationOrReservationEnabled() &&
            u.jsx(r("WAWebProfileDrawerUsername.react"), {
              onClick: (l == null ? void 0 : l.username) != null ? h : f,
            })),
          (t[6] = l.username),
          (t[7] = f),
          (t[8] = h),
          (t[9] = E))
        : (E = t[9]);
      var k = E,
        I;
      t[10] !== c || t[11] !== e.entryPoint
        ? ((I = u.jsx(r("WAWebEditForm.react"), {
            isRefreshed: c,
            entryPoint: e.entryPoint,
          })),
          (t[10] = c),
          (t[11] = e.entryPoint),
          (t[12] = I))
        : (I = t[12]);
      var T;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((T =
            o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() &&
            u.jsx(r("WAWebTextStatusSection"), {})),
          (t[13] = T))
        : (T = t[13]);
      var D;
      t[14] !== l.id || t[15] !== y
        ? ((D =
            o(
              "WAWebBizGatingUtils",
            ).canSeeECommerceComplianceIndiaSoftEnforcement(l.id) &&
            u.jsx(d, { onTitleClick: y })),
          (t[14] = l.id),
          (t[15] = y),
          (t[16] = D))
        : (D = t[16]);
      var x;
      t[17] !== a || t[18] !== i || t[19] !== l || t[20] !== m
        ? ((x =
            g(l) &&
            u.jsx(_, {
              businessProfile: a,
              openCatalogDetailsForm: m,
              catalogResult: i,
            })),
          (t[17] = a),
          (t[18] = i),
          (t[19] = l),
          (t[20] = m),
          (t[21] = x))
        : (x = t[21]);
      var $;
      t[22] !== l
        ? (($ = u.jsx(p, { contact: l })), (t[22] = l), (t[23] = $))
        : ($ = t[23]);
      var P;
      return (
        t[24] !== L ||
        t[25] !== I ||
        t[26] !== D ||
        t[27] !== x ||
        t[28] !== $ ||
        t[29] !== k
          ? ((P = u.jsxs("div", { children: [I, T, D, x, $, L, k] })),
            (t[24] = L),
            (t[25] = I),
            (t[26] = D),
            (t[27] = x),
            (t[28] = $),
            (t[29] = k),
            (t[30] = P))
          : (P = t[30]),
        P
      );
    }
    ((l.CoverPhotoDrawerSection = m), (l.EditBizProfileEditSection = f));
  },
  226,
);
