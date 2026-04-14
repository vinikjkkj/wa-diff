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
      var t = e.onTitleClick;
      return u.jsx(r("WAWebDrawerSection.react"), {
        title: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          children: [
            u.jsx(r("WAWebFlexItem.react"), {
              xstyle: c.businessComplianceIconWrapper,
              children: u.jsx(o("WAWebBusinessIcon.react").BusinessIcon, {}),
            }),
            u.jsx(r("WAWebFlexItem.react"), {
              xstyle: c.businessComplianceText,
              children: s._(/*BTDS*/ "Business details"),
            }),
            u.jsx(r("WAWebFlexItem.react"), {
              children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                xstyle: c.businessComplianceRightAltIcon,
                directional: !0,
                height: 21,
              }),
            }),
          ],
        }),
        theme: "refresh-padding-title",
        titleOnClick: t,
        animation: !1,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.contact,
        n = e.profilePicThumb,
        o = t.businessProfile
          ? u.jsx(r("WAWebBusinessProfileCoverPhoto.react"), {
              contact: t,
              businessProfile: t.businessProfile,
              editable: !0,
              profilePicThumb: n,
            })
          : null;
      return u.jsx(r("WAWebDrawerSection.react"), {
        theme: "padding-no-margin",
        animation: !1,
        children: o,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.contact;
      return !o("WAWebBizGatingUtils").bizLinkedAccountsEnabled() ||
        !t.businessProfile
        ? null
        : u.jsx(r("WAWebContactInfoLinkedSocialAccounts.react"), {
            businessProfile: t.businessProfile,
            sectionTheme: "refresh-padding-title",
            showEditHint: !0,
          });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.businessProfile,
        n = e.catalogResult,
        a = e.openCatalogDetailsForm,
        i = o("useWAWebCatalogRecovery").useCatalogRecovery();
      function l() {
        o("WAWebBizGatingUtils").bannedShopsEnabled() &&
          o("WAWebBusinessProfileUtils").goToCommerceManager(t);
      }
      var c =
        o("WAWebBizGatingUtils").bannedShopsEnabled() &&
        o("WAWebBusinessProfileUtils").hasShop(t) &&
        o("WAWebBusinessProfileUtils").isShopBanned(t);
      return c
        ? u.jsx(r("WAWebDrawerSection.react"), {
            theme: "padding-large",
            animation: !1,
            children: u.jsxs("div", {
              className: "x2b8uid",
              children: [
                u.jsx("div", {
                  className:
                    "x1sgpng x14z9mp x91k8ka x1lziwak x1pg5gke x37zpob xhslqc4",
                  children: s._(
                    /*BTDS*/ "This shop has been disabled for not complying with our Business or Commerce policies.",
                  ),
                }),
                u.jsx(o("WAWebButton.react").Button, {
                  type: "primary",
                  onClick: l,
                  children: s._(/*BTDS*/ "Commerce Manager"),
                }),
              ],
            }),
          })
        : i
          ? u.jsx(r("WAWebDrawerSection.react"), {
              title: s._(/*BTDS*/ "Products"),
              theme: "refresh",
              animation: !0,
              children: u.jsx(
                o("WAWebCatalogLoadError.react").CatalogLoadError,
                {
                  ctaDisplayType: o("WAWebCatalogLoadErrorLoadable")
                    .CTADisplayType.BUTTON,
                },
              ),
            })
          : (n == null ? void 0 : n.catalogError) === !0
            ? u.jsx(r("WAWebDrawerSection.react"), {
                title: s._(/*BTDS*/ "Products"),
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
              })
            : u.jsx(r("WAWebProductCatalogDrawerSection"), {
                businessProfile: t,
                catalog: n == null ? void 0 : n.catalog,
                openCatalog: a,
                animation: !1,
              });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      return o("WAWebMiscGatingUtils").isBlueLockingEnabled()
        ? u.jsx(y, babelHelpers.extends({}, e))
        : u.jsx(h, babelHelpers.extends({}, e));
    }
    f.displayName = f.name + " [from " + i.id + "]";
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
      var t,
        n = e.aboutInput,
        a = e.businessProfile,
        i = e.catalogResult,
        l = e.contact,
        c = e.isRefreshed,
        m = e.openCatalogDetailsForm,
        f = e.openCreateUsernameDrawer,
        h = e.openEditUsernameDrawer,
        y = e.openMerchantDetailsForm,
        C = u.jsx(o("WAWebBusinessProfileIconSection.react").IconSection, {
          Icon: r("WDSIconIcInfo.react"),
          content: n,
        }),
        b = u.jsx(o("WAWebBusinessProfileIconSection.react").IconSection, {
          Icon: o("WAWebPhoneIcon.react").PhoneIcon,
          type: "container",
          content: u.jsxs("div", {
            children: [
              u.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
                className: "xdod15v",
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
        }),
        v =
          !o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() &&
          !r("isStringNullOrEmpty")(
            (t = e.aboutValue) == null ? void 0 : t.trim(),
          ) &&
          (o("WAWebMiscGatingUtils").isBlueLockingEnabled()
            ? u.jsx(r("WAWebDrawerSection.react"), {
                title: s._(/*BTDS*/ "About"),
                theme: "refresh",
                animation: !1,
                children: C,
              })
            : u.jsxs(r("WAWebDrawerSection.react"), {
                title: s._(/*BTDS*/ "About and phone number"),
                theme: "refresh",
                animation: !1,
                children: [C, b],
              })),
        S =
          o(
            "WAWebUsernameWorkerCompatibleGatingUtils",
          ).usernameCreationOrReservationEnabled() &&
          u.jsx(r("WAWebProfileDrawerUsername.react"), {
            onClick: (l == null ? void 0 : l.username) != null ? h : f,
          });
      return u.jsxs("div", {
        children: [
          u.jsx(r("WAWebEditForm.react"), {
            isRefreshed: c,
            entryPoint: e.entryPoint,
          }),
          o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() &&
            u.jsx(r("WAWebTextStatusSection"), {}),
          o(
            "WAWebBizGatingUtils",
          ).canSeeECommerceComplianceIndiaSoftEnforcement(l.id) &&
            u.jsx(d, { onTitleClick: y }),
          g(l) &&
            u.jsx(_, {
              businessProfile: a,
              openCatalogDetailsForm: m,
              catalogResult: i,
            }),
          u.jsx(p, { contact: l }),
          v,
          S,
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t,
        n = e.aboutInput,
        a = e.businessProfile,
        i = e.catalogResult,
        l = e.contact,
        c = e.isRefreshed,
        m = e.openCatalogDetailsForm,
        f = e.openCreateUsernameDrawer,
        h = e.openEditUsernameDrawer,
        y = e.openMerchantDetailsForm,
        C = u.jsx(o("WAWebBusinessProfileIconSection.react").IconSection, {
          Icon: c
            ? o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon
            : r("WDSIconIcInfo.react"),
          content: n,
        }),
        b =
          !o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() &&
          !r("isStringNullOrEmpty")(
            (t = e.aboutValue) == null ? void 0 : t.trim(),
          ) &&
          u.jsx(r("WAWebDrawerSection.react"), {
            title: s._(/*BTDS*/ "About"),
            theme: "refresh",
            animation: !1,
            children: C,
          }),
        v =
          o(
            "WAWebUsernameWorkerCompatibleGatingUtils",
          ).usernameCreationOrReservationEnabled() &&
          u.jsx(r("WAWebProfileDrawerUsername.react"), {
            onClick: (l == null ? void 0 : l.username) != null ? h : f,
          });
      return u.jsxs("div", {
        children: [
          u.jsx(r("WAWebEditForm.react"), {
            isRefreshed: c,
            entryPoint: e.entryPoint,
          }),
          o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() &&
            u.jsx(r("WAWebTextStatusSection"), {}),
          o(
            "WAWebBizGatingUtils",
          ).canSeeECommerceComplianceIndiaSoftEnforcement(l.id) &&
            u.jsx(d, { onTitleClick: y }),
          g(l) &&
            u.jsx(_, {
              businessProfile: a,
              openCatalogDetailsForm: m,
              catalogResult: i,
            }),
          u.jsx(p, { contact: l }),
          b,
          v,
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.CoverPhotoDrawerSection = m),
      (l.EditBizProfileEditSection = f));
  },
  226,
);
