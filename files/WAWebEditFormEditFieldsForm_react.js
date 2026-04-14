__d(
  "WAWebEditFormEditFieldsForm.react",
  [
    "fbt",
    "WAWebAccountBoxIcon.react",
    "WAWebBizBusinessComplianceAddressRequiredModal",
    "WAWebBizComplianceUtil",
    "WAWebBizGatingUtils",
    "WAWebBusinessAddressIcon.react",
    "WAWebBusinessCategoriesResultCollection",
    "WAWebBusinessCategoryIcon.react",
    "WAWebBusinessDescriptionIcon.react",
    "WAWebBusinessEmailIcon.react",
    "WAWebBusinessHours",
    "WAWebBusinessHoursIcon.react",
    "WAWebBusinessProfileIconSection.react",
    "WAWebBusinessProfileModel",
    "WAWebBusinessProfilePhoneSection.react",
    "WAWebBusinessProfileTypes",
    "WAWebBusinessWebsiteIcon.react",
    "WAWebCategories",
    "WAWebCheckmarkInfoModal.react",
    "WAWebCheckmarkInfoModalLogEvents",
    "WAWebConfirmPopup.react",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebDescriptionRefreshedIcon.react",
    "WAWebDrawerSection.react",
    "WAWebEditFormBusinessAddressField.react",
    "WAWebEditFormBusinessProfileFormField.react",
    "WAWebEditFormLogEvents",
    "WAWebEditFormParsers",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFbtIntlList",
    "WAWebFlex.react",
    "WAWebLocationRefreshedOutlineIcon.react",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebStorefrontIcon.react",
    "WAWebUISpacing",
    "WAWebURLUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUtilsLogQplEvents",
    "WAWebValidationUtils",
    "WAWebWamEnumBusinessProfileField",
    "WDSIconIcCategory.react",
    "WDSIconIcMail.react",
    "WDSIconIcPublic.react",
    "WDSIconIcSchedule.react",
    "react",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useState,
      f = {
        businessHoursSection: { display: "x78zum5", $$css: !0 },
        infoText: {
          color: "xhslqc4",
          fontSize: "x1pg5gke",
          lineHeight: "x37zpob",
          $$css: !0,
        },
        verifiedNameIcon: { marginTop: "x1kgmq87", $$css: !0 },
      };
    function g(t) {
      var n = t.hours,
        a = n.days,
        i = n.mode;
      return i == null
        ? null
        : c.jsx("div", {
            children: a.map(function (t, n) {
              var a = t.closed,
                l = t.dayKey,
                s = t.dayName,
                u = t.hours;
              return c.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    f.businessHoursSection,
                    n !== 0 && o("WAWebUISpacing").uiMargin.top28,
                  ),
                  {
                    "data-testid": void 0,
                    children: [
                      c.jsx("div", {
                        className: "x1r8uery x1ikap7u xs83m0k xn80e1m",
                        children: s,
                      }),
                      c.jsx("div", {
                        className: "x1r8uery x1bhwmg6 xs83m0k",
                        children: c.jsx(h, { mode: i, closed: a, hours: u }),
                      }),
                    ],
                  },
                ),
                l,
              );
            }),
          });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var n = t.closed,
        a = t.hours,
        i = t.mode;
      if (n) return s._(/*BTDS*/ "Closed");
      switch (i) {
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS:
          return c.jsx(c.Fragment, {
            children:
              a &&
              a.map(function (t, n) {
                var a = t[0],
                  i = t[1];
                return c.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      n !== 0 && o("WAWebUISpacing").uiMargin.top16,
                    ),
                    { "data-testid": void 0, children: [a, " - ", i] },
                  ),
                  n,
                );
              }),
          });
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
          .APPOINTMENT_ONLY:
          return s._(/*BTDS*/ "By appointment only");
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H:
          return s._(/*BTDS*/ "Open 24 hours");
        default:
          return null;
      }
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.categories;
      return t.length === 0
        ? null
        : c.jsx("div", {
            "data-testid": void 0,
            children: r("WAWebFbtIntlList")(
              t.map(function (e) {
                return e.localized_display_name;
              }),
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            ),
          });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.config;
      return c.jsx(
        o("WAWebBusinessProfileIconSection.react").IconSection,
        babelHelpers.extends({}, t),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(t) {
      var n = t.isRefreshed,
        a = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, [
          "pushname",
        ]),
        i = a.pushname;
      return i == null
        ? null
        : c.jsx(C, {
            config: {
              Icon: n
                ? o("WAWebStorefrontIcon.react").StorefrontIcon
                : o("WAWebAccountBoxIcon.react").AccountBoxIcon,
              content: c.jsxs("div", {
                children: [
                  c.jsx("div", { children: i }),
                  o("WAWebMiscGatingUtils").isBlueLockingEnabled() === !1 &&
                    c.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(
                          f.infoText,
                          o("WAWebUISpacing").uiMargin.top24,
                        ),
                        {
                          children: s._(
                            /*BTDS*/ "This name will be visible to your WhatsApp customers and can be edited from the app on your mobile device.",
                          ),
                        },
                      ),
                    ),
                ],
              }),
              testid: "biz-profile-name-input",
              theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme
                .NoMargin,
              xstyle: f.verifiedNameIcon,
            },
          });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.categories,
        n = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, [
          "pushname",
        ]),
        a = n.pushname,
        i = o("WAWebContactCollection").ContactCollection.getMeContact(),
        l = function () {
          o("WAWebMiscGatingUtils").isBlueEducationEnabled() &&
            (i && o("WAWebCheckmarkInfoModalLogEvents").logClickProfileBadge(i),
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebCheckmarkInfoModal.react"), {}),
            ));
        },
        s;
      if (i != null) {
        var u = o("WAWebContactGetters").getShowBusinessCheckmarkInChatlist(i);
        s = c.jsx(o("WAWebName.react").Name, {
          contact: i,
          useVerifiedName: !0,
          showBusinessCheckmark: u,
          makeCheckmarkClickable: !0,
          checkmarkLarge: !0,
          onClick:
            u && o("WAWebMiscGatingUtils").isBlueEducationEnabled() ? l : null,
        });
      } else s = a;
      return c.jsxs(o("WAWebFlex.react").FlexColumn, {
        justify: "center",
        align: "center",
        children: [
          c.jsx(o("WAWebFlex.react").FlexItem, {
            paddingBottom: 8,
            xstyle: o("WAWebUISpacing").uiMargin.bottom2,
            className: "xngnso2 x1o2sk6j",
            children: s,
          }),
          c.jsx(o("WAWebFlex.react").FlexItem, {
            className: "xhslqc4 x1jchvi3 x1o2sk6j",
            children: c.jsx(y, { categories: t }),
          }),
        ],
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.isProfileLocked,
        n = e.isRefreshed,
        a = e.url;
      return a == null
        ? null
        : c.jsx(C, {
            config: {
              Icon: n
                ? r("WDSIconIcPublic.react")
                : o("WAWebBusinessWebsiteIcon.react").BusinessWebsiteIcon,
              content: c.jsx("div", { className: "x1yn0g08", children: a }),
              fieldName: s._(/*BTDS*/ "Custom URL"),
              onEdit: t === !1 ? k : void 0,
              testid: "biz-profile-custom-url-input",
              xstyle: f.verifiedNameIcon,
            },
          });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      return e != null && e !== "";
    }
    function L(e) {
      var t = e.businessProfile,
        n = e.isRefreshed,
        a = e.saveBusinessProfile,
        i = e.sessionId,
        l = _(),
        u = l[0],
        d = l[1],
        f = _(),
        h = f[0],
        L = f[1],
        k = _(),
        I = k[0],
        T = k[1],
        D = _(),
        x = D[0],
        $ = D[1],
        P = _(),
        N = P[0],
        M = P[1],
        w = _(),
        A = w[0],
        F = w[1],
        O = _(),
        B = O[0],
        W = O[1],
        q = _(),
        U = q[0],
        V = q[1],
        H = _(),
        G = H[0],
        z = H[1],
        j = _(!1),
        K = j[0],
        Q = j[1],
        X = _(!1),
        Y = X[0],
        J = X[1],
        Z = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        ee = o(
          "WAWebBizGatingUtils",
        ).canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(Z),
        te = _(),
        ne = te[0],
        re = te[1];
      (p(
        function () {
          var e,
            n = o("WAWebEditFormParsers").convertRawBusinessProfile(t);
          (d(n.description),
            T(n.email),
            L(n.address),
            $(n.primaryWebsite),
            M(n.secondaryWebsite),
            F(R(n.primaryWebsite) && !n.secondaryWebsite),
            J(
              o("WAWebMiscGatingUtils").isBlueLockingEnabled() &&
                ((e = n.profileOptions) == null
                  ? void 0
                  : e.isProfileEditDisabled) === !0,
            ));
        },
        [t],
      ),
        p(
          function () {
            o("WAWebValidationUtils").validateEmail(I) && W(null);
          },
          [I],
        ),
        p(
          function () {
            o("WAWebValidationUtils").validateURL(x) && V(null);
          },
          [x],
        ),
        p(
          function () {
            o("WAWebValidationUtils").validateURL(N) && z(null);
          },
          [N],
        ));
      var oe = function () {
          var e = [];
          return (
            R(x) && e.push(x),
            R(N) && e.push(N),
            {
              website: e.map(function (e, t) {
                if (
                  !r("WAWebURLUtils").isHttps(e) &&
                  !r("WAWebURLUtils").isHttp(e)
                ) {
                  var n = "https://" + e;
                  return (t === 0 ? $(n) : M(n), { url: n });
                }
                return { url: e };
              }),
            }
          );
        },
        ae = m(
          function () {
            return ee
              ? r("WAWebBizBusinessComplianceAddressRequiredModal")()
              : void 0;
          },
          [ee],
        ),
        ie = o("WAWebEditFormParsers").convertRawBusinessProfile(t),
        le;
      t.customUrlPath != null &&
        (le = c.jsx(S, {
          url:
            "" +
            o("WAWebBusinessProfileModel").BUSINESS_URL_DOMAIN +
            t.customUrlPath,
          isProfileLocked: Y === !0,
          isRefreshed: n,
        }));
      var se = R(N) || !A,
        ue = Y
          ? c.jsx(v, { categories: ie.categories })
          : c.jsx(b, { isRefreshed: n }),
        ce = c.jsx(r("WAWebBusinessProfilePhoneSection.react"), {
          isProfileLocked: Y,
        }),
        de = c.jsx(C, {
          config: {
            Icon: n
              ? o("WAWebDescriptionRefreshedIcon.react")
                  .DescriptionRefreshedIcon
              : o("WAWebBusinessDescriptionIcon.react").BusinessDescriptionIcon,
            content: c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
              activeField: ne,
              fieldKey: "description",
              fieldMetric: o("WAWebWamEnumBusinessProfileField")
                .BUSINESS_PROFILE_FIELD.DESCRIPTION,
              formatForSave: function () {
                return { description: u == null ? void 0 : u.trim() };
              },
              lowProfile: !0,
              originalValue: ie.description,
              placeholder: s._(/*BTDS*/ "Business description"),
              rawBusinessProfile: t,
              sessionId: i,
              maxLength: o("WAWebBusinessProfileTypes")
                .BUSINESS_PROFILE_FIELDS_LENGTH.DESCRIPTION,
              emojiBtnPosition: "side",
              value: u,
              onActive: re,
              onChange: d,
              onSaveBusinessProfile: a,
              blockFocusOnLock: !0,
            }),
            testid: "biz-profile-description-input",
          },
        }),
        me = c.jsx(C, {
          config: {
            Icon: n
              ? r("WDSIconIcCategory.react")
              : o("WAWebBusinessCategoryIcon.react").BusinessCategoryIcon,
            content:
              ie.categories.length === 0
                ? null
                : c.jsx(y, { categories: ie.categories }),
            emptyText: s._(/*BTDS*/ "Categories"),
            fieldName: s._(/*BTDS*/ "Categories"),
            onEdit: function () {
              (o("WAWebUtilsLogQplEvents").qplStartProfileCatsView("Profile"),
                o("WAWebEditFormLogEvents").logProfileFieldOpen(
                  o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD
                    .CATEGORY,
                  t,
                  i,
                ),
                o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("WAWebCategories"), {
                    initialCategories: ie.categories,
                    saveBusinessProfile: a,
                    searchCategories: function (t) {
                      return o(
                        "WAWebBusinessCategoriesResultCollection",
                      ).BusinessCategoriesResultCollection.find(t);
                    },
                    afterSave: function () {
                      return o("WAWebEditFormLogEvents").logProfileFieldSave(
                        o("WAWebWamEnumBusinessProfileField")
                          .BUSINESS_PROFILE_FIELD.CATEGORY,
                        t,
                        i,
                      );
                    },
                    onCancel: function () {
                      o("WAWebEditFormLogEvents").logProfileFieldDiscard(
                        o("WAWebWamEnumBusinessProfileField")
                          .BUSINESS_PROFILE_FIELD.CATEGORY,
                        t,
                        i,
                      );
                    },
                  }),
                ));
            },
            testid: "biz-profile-category-input",
            type: "container",
          },
        }),
        pe = c.jsx(C, {
          config: {
            Icon: n
              ? o("WAWebLocationRefreshedOutlineIcon.react")
                  .LocationRefreshedOutlineIcon
              : o("WAWebBusinessAddressIcon.react").BusinessAddressIcon,
            content: c.jsx(r("WAWebEditFormBusinessAddressField.react"), {
              businessProfile: ie,
              activeField: ne,
              rawBusinessProfile: t,
              sessionId: i,
              value: h,
              onActive: re,
              onChange: L,
              onSaveBusinessProfile: a,
              validate: function (t) {
                return o("WAWebBizComplianceUtil").existsField(t, Z);
              },
              onError: ae,
              disabled: Y,
            }),
            disabled: Y,
            testid: "biz-profile-address-input",
          },
        }),
        _e = c.jsx(C, {
          config: {
            Icon: n
              ? r("WDSIconIcSchedule.react")
              : o("WAWebBusinessHoursIcon.react").BusinessHoursIcon,
            content:
              ie.hours.mode == null ? null : c.jsx(g, { hours: ie.hours }),
            emptyText: s._(/*BTDS*/ "Business hours"),
            fieldName: s._(/*BTDS*/ "Business hours"),
            onEdit: function () {
              (o("WAWebEditFormLogEvents").logProfileFieldOpen(
                o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD
                  .HOURS,
                t,
                i,
              ),
                o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("WAWebBusinessHours"), {
                    businessHours: ie.hours,
                    saveBusinessProfile: a,
                    onCancel: function () {
                      o("WAWebEditFormLogEvents").logProfileFieldDiscard(
                        o("WAWebWamEnumBusinessProfileField")
                          .BUSINESS_PROFILE_FIELD.HOURS,
                        t,
                        i,
                      );
                    },
                    afterSave: function () {
                      return o("WAWebEditFormLogEvents").logProfileFieldSave(
                        o("WAWebWamEnumBusinessProfileField")
                          .BUSINESS_PROFILE_FIELD.HOURS,
                        t,
                        i,
                      );
                    },
                  }),
                ));
            },
            testid: "biz-profile-hours-input",
            type: "container",
          },
        }),
        fe = c.jsx(C, {
          config: {
            Icon: n
              ? r("WDSIconIcMail.react")
              : o("WAWebBusinessEmailIcon.react").BusinessEmailIcon,
            content: c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
              activeField: ne,
              error: B,
              fieldKey: "email",
              fieldMetric: o("WAWebWamEnumBusinessProfileField")
                .BUSINESS_PROFILE_FIELD.EMAIL,
              formatForSave: function () {
                return { email: I };
              },
              lowProfile: !1,
              originalValue: ie.email,
              placeholder: s._(/*BTDS*/ "Email address"),
              rawBusinessProfile: t,
              sessionId: i,
              maxLength: o("WAWebBusinessProfileTypes")
                .BUSINESS_PROFILE_FIELDS_LENGTH.EMAIL,
              validate: E,
              value: I,
              onActive: re,
              onChange: T,
              onError: function () {
                W(s._(/*BTDS*/ "Incorrect email address format"));
              },
              onSaveBusinessProfile: a,
              disabled: Y,
            }),
            disabled: Y,
            testid: "biz-profile-email-input",
          },
        }),
        ge = n
          ? r("WDSIconIcPublic.react")
          : o("WAWebBusinessWebsiteIcon.react").BusinessWebsiteIcon,
        he = c.jsx(C, {
          config: {
            Icon: ge,
            content: c.jsx("div", {
              children: c.jsx(
                r("WAWebEditFormBusinessProfileFormField.react"),
                {
                  activeField: ne,
                  error: U,
                  fieldKey: "primaryWebsite",
                  fieldMetric: o("WAWebWamEnumBusinessProfileField")
                    .BUSINESS_PROFILE_FIELD.WEBSITE,
                  formatForSave: oe,
                  lowProfile: !1,
                  originalValue: ie.primaryWebsite,
                  placeholder: s._(/*BTDS*/ "Website"),
                  rawBusinessProfile: t,
                  sessionId: i,
                  maxLength: o("WAWebBusinessProfileTypes")
                    .BUSINESS_PROFILE_FIELDS_LENGTH.WEBSITE,
                  validate: o("WAWebValidationUtils").validateURL,
                  value: x,
                  onActive: re,
                  onChange: $,
                  onError: function () {
                    V(s._(/*BTDS*/ "URL is incorrect"));
                  },
                  onSaveBusinessProfile: a,
                  disabled: Y,
                },
              ),
            }),
            disabled: Y,
            testid: "biz-profile-website-input",
            theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme
              .SmallMargin,
          },
        }),
        ye;
      ie.primaryWebsite !== void 0 &&
        (se
          ? (ye = c.jsx(C, {
              config: {
                Icon: ge,
                content: c.jsx("div", {
                  children: c.jsx(
                    r("WAWebEditFormBusinessProfileFormField.react"),
                    {
                      activeField: ne,
                      error: G,
                      fieldKey: "secondaryWebsite",
                      fieldMetric: o("WAWebWamEnumBusinessProfileField")
                        .BUSINESS_PROFILE_FIELD.WEBSITE,
                      formatForSave: oe,
                      lowProfile: !1,
                      originalValue: ie.secondaryWebsite,
                      placeholder: s._(/*BTDS*/ "Website"),
                      rawBusinessProfile: t,
                      sessionId: i,
                      startActive: K,
                      maxLength: o("WAWebBusinessProfileTypes")
                        .BUSINESS_PROFILE_FIELDS_LENGTH.WEBSITE,
                      validate: o("WAWebValidationUtils").validateURL,
                      value: N,
                      onActive: re,
                      onChange: M,
                      onError: function () {
                        z(s._(/*BTDS*/ "URL is incorrect"));
                      },
                      onSaveBusinessProfile: a,
                      disabled: Y,
                    },
                  ),
                }),
                disabled: Y,
                testid: "biz-profile-secondary-website-input",
                theme: o("WAWebBusinessProfileIconSection.react")
                  .IconSectionTheme.NoMargin,
              },
            }))
          : (!o("WAWebMiscGatingUtils").isBlueLockingEnabled() || !Y) &&
            (ye = c.jsx(C, {
              config: {
                Icon: ge,
                content: c.jsx("div", {
                  children: c.jsx("button", {
                    className: "xo1mcw5 x1f6kntn xtvhhri",
                    onClick: function () {
                      (F(!1), Q(!0));
                    },
                    children: s._(/*BTDS*/ "Add another website"),
                  }),
                }),
                testid: "biz-profile-secondary-website-input",
                theme: o("WAWebBusinessProfileIconSection.react")
                  .IconSectionTheme.NoMargin,
              },
            })));
      var Ce;
      if (o("WAWebMiscGatingUtils").isBlueLockingEnabled()) {
        var be;
        if (Y) {
          o("WAWebBizGatingUtils").isMetaVerifiedLockedProfileEditingV1Enabled()
            ? (be = s._(
                /*BTDS*/ "To make changes to verified business details, log into the WhatsApp mobile app. {=m2}",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getBlueFaqUrl(),
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  ),
                ],
              ))
            : (be = s._(
                /*BTDS*/ "Verified business details cannot be edited. {=m2}",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getBlueFaqUrl(),
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  ),
                ],
              ));
          var ve = c.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: o("WAWebUISpacing").uiMargin.top10,
            className: "xhslqc4 x1nxh6w3 x37zpob",
            children: c.jsx(o("WAWebFlex.react").FlexItem, { children: be }),
          });
          Ce = c.jsxs(c.Fragment, {
            children: [ue, ce, pe, fe, he, ye, ve, _e, de],
          });
        } else
          Ce = c.jsxs(c.Fragment, {
            children: [ue, ce, me, pe, fe, he, ye, _e, de],
          });
      } else
        Ce = c.jsxs(c.Fragment, {
          children: [ue, le, de, me, pe, _e, fe, he, ye],
        });
      return c.jsx(r("WAWebDrawerSection.react"), {
        theme: "refresh",
        xstyle: o("WAWebUISpacing").uiPadding.top0,
        animation: !1,
        children: Ce,
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      return o("WAWebValidationUtils").validateEmail(e);
    }
    function k() {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          okText: r("WAWebFbtCommon")("OK"),
          onOK: function () {
            return o("WAWebModalManager").ModalManager.close();
          },
          children: s._(
            /*BTDS*/ "This URL will be visible to your WhatsApp customers and can be edited from the app on your mobile device.",
          ),
        }),
      );
    }
    l.default = L;
  },
  226,
);
