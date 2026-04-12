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
      var t = e.contact,
        n = e.profilePicThumb,
        a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        i = o("WAWebTextStatusGatingUtils").sendTextStatusEnabled(),
        l = u(function () {
          return o("WAWebAboutPrompts").getRandomAboutPromptKey();
        }),
        c = l[0],
        d = function (t) {
          o("WAWebModalManager").ModalManager.open(
            s.jsx(
              o("WAWebTextStatusEditModalLoadable").TextStatusEditModalLoadable,
              {
                entrypoint: o("WAWebAboutWamLogger").ABOUT_ENTRYPOINT_TYPE
                  .ME_TAB,
                promptKey: t,
              },
            ),
          );
        },
        m = t.businessProfile
          ? s.jsx(r("WAWebBusinessProfileCoverPhotoRefreshed.react"), {
              contact: t,
              businessProfile: t.businessProfile,
              editable: !0,
              profilePicThumb: n,
            })
          : null;
      return s.jsxs(r("WAWebDrawerSection.react"), {
        animation: !1,
        children: [
          m,
          i &&
            s.jsx("div", {
              className:
                "x6s0dn4 x19q1oq6 x78zum5 xdt5ytf xbudbmw x10l6tqk xuuh30 xupqr0c",
              children: s.jsx(r("WAWebMeTabSpeechBubble.react"), {
                contactId: a,
                onClick: d,
                promptKey: c,
              }),
            }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t,
        n,
        a,
        i,
        l,
        c,
        p,
        _,
        f = e.about,
        g = e.bizProfileValues,
        h = e.onFieldChange,
        y = e.onLocationSelect,
        C = e.onSave,
        b = e.onValidationChange,
        v = e.selectedLocation,
        S = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        R = o(
          "WAWebProfilePicThumbCollection",
        ).ProfilePicThumbCollection.assertGet(S),
        L = o("WAWebContactCollection").ContactCollection.assertGet(S);
      o("useWAWebModelValues").useModelValues(L, [
        "businessProfile",
        "username",
        "usernameKey",
      ]);
      var E = u(!0),
        k = E[0],
        I = E[1],
        T = u(!0),
        D = T[0],
        x = T[1],
        $ = function (t) {
          I(t);
          var e = t && D;
          b && b(e);
        },
        P = function (t) {
          x(t);
          var e = k && t;
          b && b(e);
        };
      return s.jsx(r("WAWebDrawerBody.react"), {
        xstyle: d.mainContainer,
        id: "profile-drawer-body",
        children: s.jsx("div", {
          className:
            "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 xdt5ytf x2lah0s x5yr21d x6ikm8r x10wlt62 x1n2onr6 xh8yej3",
          children: s.jsx("div", {
            className:
              "xw6alqk x1iyjqo2 xs83m0k x15icp18 x1odjw0f x1tvm86q x1hqvyuz",
            children: s.jsxs("div", {
              className: "xvc5jky x11t971q xted6l9 xh8yej3",
              children: [
                s.jsx(m, { contact: L, profilePicThumb: R }),
                s.jsx(r("WAWebProfileSectionHeader.react"), {
                  showDivider: !1,
                  testId: "profile-business-information",
                  title: o(
                    "WAWebBusinessProfileLabels",
                  ).getBusinessInformationTitleLabel(),
                }),
                g != null &&
                  s.jsx(r("WAWebBusinessInfoProfile.react"), {
                    businessHours:
                      ((t = L.businessProfile) == null
                        ? void 0
                        : t.businessHours) != null
                        ? o("WAWebSmbUtils").getBusinessHoursForEdit(
                            L.businessProfile.businessHours,
                          )
                        : null,
                    categories:
                      (n = L.businessProfile) == null ? void 0 : n.categories,
                    latitude:
                      (a = v == null ? void 0 : v.latitude) != null
                        ? a
                        : (i = L.businessProfile) == null
                          ? void 0
                          : i.latitude,
                    longitude:
                      (l = v == null ? void 0 : v.longitude) != null
                        ? l
                        : (c = L.businessProfile) == null
                          ? void 0
                          : c.longitude,
                    onLocationSelect: y,
                    onFieldChange: h,
                    bizProfileValues: g,
                    onSave: C,
                  }),
                s.jsx("div", {
                  className: "x16ovd2e",
                  children: s.jsx(r("WAWebProfileSectionHeader.react"), {
                    showDivider: !0,
                    title: o(
                      "WAWebBusinessProfileLabels",
                    ).getProductsAndServicesTitleLabel(),
                  }),
                }),
                s.jsx(r("WAWebBusinessProductsAndServicesProfile.react"), {
                  businessProfile: L.businessProfile,
                  bizProfileValues: g,
                  isPriceTierEnabled: o(
                    "WAWebBizGatingUtils",
                  ).businessPriceTierEnabled(),
                  isV2Enabled: o(
                    "WAWebBizGatingUtils",
                  ).businessProfileRefreshV2Enabled(),
                  isServiceOfferingsEnabled: o(
                    "WAWebBizGatingUtils",
                  ).businessServiceOfferingsEnabled(),
                  onFieldChange: h,
                }),
                s.jsx("div", {
                  className: "x16ovd2e",
                  children: s.jsx(r("WAWebProfileSectionHeader.react"), {
                    showDivider: !0,
                    title: o("WAWebBusinessProfileLabels").getLinksTitleLabel(),
                  }),
                }),
                s.jsx(r("WAWebBusinessLinksProfile.react"), {
                  onChange: h,
                  onValidationChange: P,
                  primaryWebsite:
                    g != null
                      ? g.primaryWebsite
                      : (p = L.businessProfile) == null ||
                          (p = p.website) == null ||
                          (p = p[0]) == null
                        ? void 0
                        : p.url,
                  secondaryWebsite:
                    g != null
                      ? g.secondaryWebsite
                      : (_ = L.businessProfile) == null ||
                          (_ = _.website) == null ||
                          (_ = _[1]) == null
                        ? void 0
                        : _.url,
                }),
                s.jsx("div", {
                  className: "x16ovd2e",
                  children: s.jsx(r("WAWebProfileSectionHeader.react"), {
                    showDivider: !0,
                    title: o(
                      "WAWebBusinessProfileLabels",
                    ).getContactInformationTitleLabel(),
                  }),
                }),
                g != null &&
                  s.jsx(r("WAWebBusinessContactProfile.react"), {
                    about: f,
                    email: g.email,
                    hideAbout: o(
                      "WAWebTextStatusGatingUtils",
                    ).sendTextStatusEnabled(),
                    onChange: h,
                    onValidationChange: $,
                    phoneNumber: o("WAWebWidFormat").widToFormattedUser(
                      o(
                        "WAWebUserPrefsMeUser",
                      ).getMeDevicePnOrThrow_DO_NOT_USE(),
                    ),
                    username: L.username,
                    usernameKey: L.usernameKey,
                  }),
              ],
            }),
          }),
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
