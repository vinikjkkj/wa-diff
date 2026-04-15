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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(7),
        a = t.hours,
        i = a.days,
        l = a.mode;
      if (l == null) return null;
      var s;
      if (n[0] !== i || n[1] !== l) {
        var u;
        (n[3] !== l
          ? ((u = function (n, a) {
              var t = n.closed,
                i = n.dayKey,
                s = n.dayName,
                u = n.hours;
              return c.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    f.businessHoursSection,
                    a !== 0 && o("WAWebUISpacing").uiMargin.top28,
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
                        children: c.jsx(h, { mode: l, closed: t, hours: u }),
                      }),
                    ],
                  },
                ),
                i,
              );
            }),
            (n[3] = l),
            (n[4] = u))
          : (u = n[4]),
          (s = i.map(u)),
          (n[0] = i),
          (n[1] = l),
          (n[2] = s));
      } else s = n[2];
      var d;
      return (
        n[5] !== s
          ? ((d = c.jsx("div", { children: s })), (n[5] = s), (n[6] = d))
          : (d = n[6]),
        d
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.closed,
        r = e.hours,
        a = e.mode;
      if (n) {
        var i;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = s._(/*BTDS*/ "Closed")), (t[0] = i))
            : (i = t[0]),
          i
        );
      }
      switch (a) {
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
          .SPECIFIC_HOURS: {
          var l;
          t[1] !== r
            ? ((l = r && r.map(y)), (t[1] = r), (t[2] = l))
            : (l = t[2]);
          var u;
          return (
            t[3] !== l
              ? ((u = c.jsx(c.Fragment, { children: l })),
                (t[3] = l),
                (t[4] = u))
              : (u = t[4]),
            u
          );
        }
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
          .APPOINTMENT_ONLY: {
          var d;
          return (
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = s._(/*BTDS*/ "By appointment only")), (t[5] = d))
              : (d = t[5]),
            d
          );
        }
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H: {
          var m;
          return (
            t[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = s._(/*BTDS*/ "Open 24 hours")), (t[6] = m))
              : (m = t[6]),
            m
          );
        }
        default:
          return null;
      }
    }
    function y(t, n) {
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
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
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
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.config,
        r;
      return (
        t[0] !== n
          ? ((r = c.jsx(
              o("WAWebBusinessProfileIconSection.react").IconSection,
              babelHelpers.extends({}, n),
            )),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function v(t) {
      var n = o("react-compiler-runtime").c(9),
        a = t.isRefreshed,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["pushname"]), (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebModelValues").useModelValues(
          o("WAWebConnModel").Conn,
          i,
        ),
        u = l.pushname;
      if (u == null) return null;
      var d = a
          ? o("WAWebStorefrontIcon.react").StorefrontIcon
          : o("WAWebAccountBoxIcon.react").AccountBoxIcon,
        m;
      n[1] !== u
        ? ((m = c.jsx("div", { children: u })), (n[1] = u), (n[2] = m))
        : (m = n[2]);
      var p;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p =
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
            )),
          (n[3] = p))
        : (p = n[3]);
      var _;
      n[4] !== m
        ? ((_ = c.jsxs("div", { children: [m, p] })), (n[4] = m), (n[5] = _))
        : (_ = n[5]);
      var g;
      return (
        n[6] !== d || n[7] !== _
          ? ((g = c.jsx(b, {
              config: {
                Icon: d,
                content: _,
                testid: "biz-profile-name-input",
                theme: o("WAWebBusinessProfileIconSection.react")
                  .IconSectionTheme.NoMargin,
                xstyle: f.verifiedNameIcon,
              },
            })),
            (n[6] = d),
            (n[7] = _),
            (n[8] = g))
          : (g = n[8]),
        g
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.categories,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["pushname"]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useModelValues(
          o("WAWebConnModel").Conn,
          a,
        ),
        l = i.pushname,
        s;
      if (t[1] !== l) {
        var u = o("WAWebContactCollection").ContactCollection.getMeContact(),
          d = function () {
            o("WAWebMiscGatingUtils").isBlueEducationEnabled() &&
              (u &&
                o("WAWebCheckmarkInfoModalLogEvents").logClickProfileBadge(u),
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebCheckmarkInfoModal.react"), {}),
              ));
          };
        if (u != null) {
          var m = o("WAWebContactGetters").getShowBusinessCheckmarkInChatlist(
              u,
            ),
            p;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = c.jsx(o("WAWebName.react").Name, {
                contact: u,
                useVerifiedName: !0,
                showBusinessCheckmark: m,
                makeCheckmarkClickable: !0,
                checkmarkLarge: !0,
                onClick:
                  m && o("WAWebMiscGatingUtils").isBlueEducationEnabled()
                    ? d
                    : null,
              })),
              (t[3] = p))
            : (p = t[3]),
            (s = p));
        } else s = l;
        ((t[1] = l), (t[2] = s));
      } else s = t[2];
      var _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = "xngnso2 x1o2sk6j"), (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] !== s
        ? ((f = c.jsx(o("WAWebFlex.react").FlexItem, {
            paddingBottom: 8,
            xstyle: o("WAWebUISpacing").uiMargin.bottom2,
            className: _,
            children: s,
          })),
          (t[5] = s),
          (t[6] = f))
        : (f = t[6]);
      var g;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = "xhslqc4 x1jchvi3 x1o2sk6j"), (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] !== n
        ? ((h = c.jsx(o("WAWebFlex.react").FlexItem, {
            className: g,
            children: c.jsx(C, { categories: n }),
          })),
          (t[8] = n),
          (t[9] = h))
        : (h = t[9]);
      var y;
      return (
        t[10] !== f || t[11] !== h
          ? ((y = c.jsxs(o("WAWebFlex.react").FlexColumn, {
              justify: "center",
              align: "center",
              children: [f, h],
            })),
            (t[10] = f),
            (t[11] = h),
            (t[12] = y))
          : (y = t[12]),
        y
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.isProfileLocked,
        a = e.isRefreshed,
        i = e.url;
      if (i == null) return null;
      var l = a
          ? r("WDSIconIcPublic.react")
          : o("WAWebBusinessWebsiteIcon.react").BusinessWebsiteIcon,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { className: "x1yn0g08" }), (t[0] = u))
        : (u = t[0]);
      var d;
      t[1] !== i
        ? ((d = c.jsx("div", babelHelpers.extends({}, u, { children: i }))),
          (t[1] = i),
          (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Custom URL")), (t[3] = m))
        : (m = t[3]);
      var p = n === !1 ? T : void 0,
        _;
      return (
        t[4] !== l || t[5] !== d || t[6] !== p
          ? ((_ = c.jsx(b, {
              config: {
                Icon: l,
                content: d,
                fieldName: m,
                onEdit: p,
                testid: "biz-profile-custom-url-input",
                xstyle: f.verifiedNameIcon,
              },
            })),
            (t[4] = l),
            (t[5] = d),
            (t[6] = p),
            (t[7] = _))
          : (_ = t[7]),
        _
      );
    }
    function L(e) {
      return e != null && e !== "";
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(171),
        n = e.businessProfile,
        a = e.isRefreshed,
        i = e.saveBusinessProfile,
        l = e.sessionId,
        u = _(),
        d = u[0],
        m = u[1],
        f = _(),
        h = f[0],
        y = f[1],
        E = _(),
        T = E[0],
        D = E[1],
        x = _(),
        $ = x[0],
        P = x[1],
        N = _(),
        M = N[0],
        w = N[1],
        A = _(),
        F = A[0],
        O = A[1],
        B = _(),
        W = B[0],
        q = B[1],
        U = _(),
        V = U[0],
        H = U[1],
        G = _(),
        z = G[0],
        j = G[1],
        K = _(!1),
        Q = K[0],
        X = K[1],
        Y = _(!1),
        J = Y[0],
        Z = Y[1],
        ee,
        te;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()),
          (te = o(
            "WAWebBizGatingUtils",
          ).canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(ee)),
          (t[0] = ee),
          (t[1] = te))
        : ((ee = t[0]), (te = t[1]));
      var ne = te,
        re = _(),
        oe = re[0],
        ae = re[1],
        ie,
        le;
      (t[2] !== n
        ? ((ie = function () {
            var e,
              t = o("WAWebEditFormParsers").convertRawBusinessProfile(n);
            (m(t.description),
              D(t.email),
              y(t.address),
              P(t.primaryWebsite),
              w(t.secondaryWebsite),
              O(L(t.primaryWebsite) && !t.secondaryWebsite),
              Z(
                o("WAWebMiscGatingUtils").isBlueLockingEnabled() &&
                  ((e = t.profileOptions) == null
                    ? void 0
                    : e.isProfileEditDisabled) === !0,
              ));
          }),
          (le = [n]),
          (t[2] = n),
          (t[3] = ie),
          (t[4] = le))
        : ((ie = t[3]), (le = t[4])),
        p(ie, le));
      var se, ue;
      (t[5] !== T
        ? ((se = function () {
            o("WAWebValidationUtils").validateEmail(T) && q(null);
          }),
          (ue = [T]),
          (t[5] = T),
          (t[6] = se),
          (t[7] = ue))
        : ((se = t[6]), (ue = t[7])),
        p(se, ue));
      var ce, de;
      (t[8] !== $
        ? ((ce = function () {
            o("WAWebValidationUtils").validateURL($) && H(null);
          }),
          (de = [$]),
          (t[8] = $),
          (t[9] = ce),
          (t[10] = de))
        : ((ce = t[9]), (de = t[10])),
        p(ce, de));
      var me, pe;
      (t[11] !== M
        ? ((me = function () {
            o("WAWebValidationUtils").validateURL(M) && j(null);
          }),
          (pe = [M]),
          (t[11] = M),
          (t[12] = me),
          (t[13] = pe))
        : ((me = t[12]), (pe = t[13])),
        p(me, pe));
      var _e;
      t[14] !== $ || t[15] !== M
        ? ((_e = function () {
            var e = [];
            return (
              L($) && e.push($),
              L(M) && e.push(M),
              {
                website: e.map(function (e, t) {
                  if (
                    !r("WAWebURLUtils").isHttps(e) &&
                    !r("WAWebURLUtils").isHttp(e)
                  ) {
                    var n = "https://" + e;
                    return (t === 0 ? P(n) : w(n), { url: n });
                  }
                  return { url: e };
                }),
              }
            );
          }),
          (t[14] = $),
          (t[15] = M),
          (t[16] = _e))
        : (_e = t[16]);
      var fe = _e,
        ge;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((ge = function () {
            return ne
              ? r("WAWebBizBusinessComplianceAddressRequiredModal")()
              : void 0;
          }),
          (t[17] = ge))
        : (ge = t[17]);
      var he = ge,
        ye;
      t[18] !== n
        ? ((ye = o("WAWebEditFormParsers").convertRawBusinessProfile(n)),
          (t[18] = n),
          (t[19] = ye))
        : (ye = t[19]);
      var Ce = ye,
        be;
      if (n.customUrlPath != null) {
        var ve =
            "" +
            o("WAWebBusinessProfileModel").BUSINESS_URL_DOMAIN +
            n.customUrlPath,
          Se = J === !0,
          Re;
        (t[20] !== a || t[21] !== ve || t[22] !== Se
          ? ((Re = c.jsx(R, { url: ve, isProfileLocked: Se, isRefreshed: a })),
            (t[20] = a),
            (t[21] = ve),
            (t[22] = Se),
            (t[23] = Re))
          : (Re = t[23]),
          (be = Re));
      }
      var Le = L(M) || !F,
        Ee;
      t[24] !== Ce.categories || t[25] !== J || t[26] !== a
        ? ((Ee = J
            ? c.jsx(S, { categories: Ce.categories })
            : c.jsx(v, { isRefreshed: a })),
          (t[24] = Ce.categories),
          (t[25] = J),
          (t[26] = a),
          (t[27] = Ee))
        : (Ee = t[27]);
      var ke = Ee,
        Ie;
      t[28] !== J
        ? ((Ie = c.jsx(r("WAWebBusinessProfilePhoneSection.react"), {
            isProfileLocked: J,
          })),
          (t[28] = J),
          (t[29] = Ie))
        : (Ie = t[29]);
      var Te = Ie,
        De = a
          ? o("WAWebDescriptionRefreshedIcon.react").DescriptionRefreshedIcon
          : o("WAWebBusinessDescriptionIcon.react").BusinessDescriptionIcon,
        xe;
      t[30] !== d
        ? ((xe = function () {
            return { description: d == null ? void 0 : d.trim() };
          }),
          (t[30] = d),
          (t[31] = xe))
        : (xe = t[31]);
      var $e = Ce.description,
        Pe;
      t[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((Pe = s._(/*BTDS*/ "Business description")), (t[32] = Pe))
        : (Pe = t[32]);
      var Ne;
      t[33] !== oe ||
      t[34] !== Ce.description ||
      t[35] !== d ||
      t[36] !== n ||
      t[37] !== i ||
      t[38] !== l ||
      t[39] !== xe
        ? ((Ne = c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
            activeField: oe,
            fieldKey: "description",
            fieldMetric: o("WAWebWamEnumBusinessProfileField")
              .BUSINESS_PROFILE_FIELD.DESCRIPTION,
            formatForSave: xe,
            lowProfile: !0,
            originalValue: $e,
            placeholder: Pe,
            rawBusinessProfile: n,
            sessionId: l,
            maxLength: o("WAWebBusinessProfileTypes")
              .BUSINESS_PROFILE_FIELDS_LENGTH.DESCRIPTION,
            emojiBtnPosition: "side",
            value: d,
            onActive: ae,
            onChange: m,
            onSaveBusinessProfile: i,
            blockFocusOnLock: !0,
          })),
          (t[33] = oe),
          (t[34] = Ce.description),
          (t[35] = d),
          (t[36] = n),
          (t[37] = i),
          (t[38] = l),
          (t[39] = xe),
          (t[40] = Ne))
        : (Ne = t[40]);
      var Me;
      t[41] !== De || t[42] !== Ne
        ? ((Me = c.jsx(b, {
            config: {
              Icon: De,
              content: Ne,
              testid: "biz-profile-description-input",
            },
          })),
          (t[41] = De),
          (t[42] = Ne),
          (t[43] = Me))
        : (Me = t[43]);
      var we = Me,
        Ae = a
          ? r("WDSIconIcCategory.react")
          : o("WAWebBusinessCategoryIcon.react").BusinessCategoryIcon,
        Fe;
      t[44] !== Ce.categories
        ? ((Fe =
            Ce.categories.length === 0
              ? null
              : c.jsx(C, { categories: Ce.categories })),
          (t[44] = Ce.categories),
          (t[45] = Fe))
        : (Fe = t[45]);
      var Oe, Be;
      t[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((Oe = s._(/*BTDS*/ "Categories")),
          (Be = s._(/*BTDS*/ "Categories")),
          (t[46] = Oe),
          (t[47] = Be))
        : ((Oe = t[46]), (Be = t[47]));
      var We;
      t[48] !== Ce.categories || t[49] !== n || t[50] !== i || t[51] !== l
        ? ((We = function () {
            (o("WAWebUtilsLogQplEvents").qplStartProfileCatsView("Profile"),
              o("WAWebEditFormLogEvents").logProfileFieldOpen(
                o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD
                  .CATEGORY,
                n,
                l,
              ),
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebCategories"), {
                  initialCategories: Ce.categories,
                  saveBusinessProfile: i,
                  searchCategories: k,
                  afterSave: function () {
                    return o("WAWebEditFormLogEvents").logProfileFieldSave(
                      o("WAWebWamEnumBusinessProfileField")
                        .BUSINESS_PROFILE_FIELD.CATEGORY,
                      n,
                      l,
                    );
                  },
                  onCancel: function () {
                    o("WAWebEditFormLogEvents").logProfileFieldDiscard(
                      o("WAWebWamEnumBusinessProfileField")
                        .BUSINESS_PROFILE_FIELD.CATEGORY,
                      n,
                      l,
                    );
                  },
                }),
              ));
          }),
          (t[48] = Ce.categories),
          (t[49] = n),
          (t[50] = i),
          (t[51] = l),
          (t[52] = We))
        : (We = t[52]);
      var qe;
      t[53] !== Ae || t[54] !== Fe || t[55] !== We
        ? ((qe = c.jsx(b, {
            config: {
              Icon: Ae,
              content: Fe,
              emptyText: Oe,
              fieldName: Be,
              onEdit: We,
              testid: "biz-profile-category-input",
              type: "container",
            },
          })),
          (t[53] = Ae),
          (t[54] = Fe),
          (t[55] = We),
          (t[56] = qe))
        : (qe = t[56]);
      var Ue = qe,
        Ve = a
          ? o("WAWebLocationRefreshedOutlineIcon.react")
              .LocationRefreshedOutlineIcon
          : o("WAWebBusinessAddressIcon.react").BusinessAddressIcon,
        He;
      t[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((He = function (t) {
            return o("WAWebBizComplianceUtil").existsField(t, ee);
          }),
          (t[57] = He))
        : (He = t[57]);
      var Ge;
      t[58] !== oe ||
      t[59] !== h ||
      t[60] !== Ce ||
      t[61] !== J ||
      t[62] !== n ||
      t[63] !== i ||
      t[64] !== l
        ? ((Ge = c.jsx(r("WAWebEditFormBusinessAddressField.react"), {
            businessProfile: Ce,
            activeField: oe,
            rawBusinessProfile: n,
            sessionId: l,
            value: h,
            onActive: ae,
            onChange: y,
            onSaveBusinessProfile: i,
            validate: He,
            onError: he,
            disabled: J,
          })),
          (t[58] = oe),
          (t[59] = h),
          (t[60] = Ce),
          (t[61] = J),
          (t[62] = n),
          (t[63] = i),
          (t[64] = l),
          (t[65] = Ge))
        : (Ge = t[65]);
      var ze;
      t[66] !== J || t[67] !== Ve || t[68] !== Ge
        ? ((ze = c.jsx(b, {
            config: {
              Icon: Ve,
              content: Ge,
              disabled: J,
              testid: "biz-profile-address-input",
            },
          })),
          (t[66] = J),
          (t[67] = Ve),
          (t[68] = Ge),
          (t[69] = ze))
        : (ze = t[69]);
      var je = ze,
        Ke = a
          ? r("WDSIconIcSchedule.react")
          : o("WAWebBusinessHoursIcon.react").BusinessHoursIcon,
        Qe;
      t[70] !== Ce.hours
        ? ((Qe = Ce.hours.mode == null ? null : c.jsx(g, { hours: Ce.hours })),
          (t[70] = Ce.hours),
          (t[71] = Qe))
        : (Qe = t[71]);
      var Xe, Ye;
      t[72] === Symbol.for("react.memo_cache_sentinel")
        ? ((Xe = s._(/*BTDS*/ "Business hours")),
          (Ye = s._(/*BTDS*/ "Business hours")),
          (t[72] = Xe),
          (t[73] = Ye))
        : ((Xe = t[72]), (Ye = t[73]));
      var Je;
      t[74] !== Ce.hours || t[75] !== n || t[76] !== i || t[77] !== l
        ? ((Je = function () {
            (o("WAWebEditFormLogEvents").logProfileFieldOpen(
              o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD
                .HOURS,
              n,
              l,
            ),
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebBusinessHours"), {
                  businessHours: Ce.hours,
                  saveBusinessProfile: i,
                  onCancel: function () {
                    o("WAWebEditFormLogEvents").logProfileFieldDiscard(
                      o("WAWebWamEnumBusinessProfileField")
                        .BUSINESS_PROFILE_FIELD.HOURS,
                      n,
                      l,
                    );
                  },
                  afterSave: function () {
                    return o("WAWebEditFormLogEvents").logProfileFieldSave(
                      o("WAWebWamEnumBusinessProfileField")
                        .BUSINESS_PROFILE_FIELD.HOURS,
                      n,
                      l,
                    );
                  },
                }),
              ));
          }),
          (t[74] = Ce.hours),
          (t[75] = n),
          (t[76] = i),
          (t[77] = l),
          (t[78] = Je))
        : (Je = t[78]);
      var Ze;
      t[79] !== Ke || t[80] !== Qe || t[81] !== Je
        ? ((Ze = c.jsx(b, {
            config: {
              Icon: Ke,
              content: Qe,
              emptyText: Xe,
              fieldName: Ye,
              onEdit: Je,
              testid: "biz-profile-hours-input",
              type: "container",
            },
          })),
          (t[79] = Ke),
          (t[80] = Qe),
          (t[81] = Je),
          (t[82] = Ze))
        : (Ze = t[82]);
      var et = Ze,
        tt = a
          ? r("WDSIconIcMail.react")
          : o("WAWebBusinessEmailIcon.react").BusinessEmailIcon,
        nt;
      t[83] !== T
        ? ((nt = function () {
            return { email: T };
          }),
          (t[83] = T),
          (t[84] = nt))
        : (nt = t[84]);
      var rt = Ce.email,
        ot;
      t[85] === Symbol.for("react.memo_cache_sentinel")
        ? ((ot = s._(/*BTDS*/ "Email address")), (t[85] = ot))
        : (ot = t[85]);
      var at;
      t[86] === Symbol.for("react.memo_cache_sentinel")
        ? ((at = function () {
            q(s._(/*BTDS*/ "Incorrect email address format"));
          }),
          (t[86] = at))
        : (at = t[86]);
      var it;
      t[87] !== oe ||
      t[88] !== Ce.email ||
      t[89] !== T ||
      t[90] !== W ||
      t[91] !== J ||
      t[92] !== n ||
      t[93] !== i ||
      t[94] !== l ||
      t[95] !== nt
        ? ((it = c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
            activeField: oe,
            error: W,
            fieldKey: "email",
            fieldMetric: o("WAWebWamEnumBusinessProfileField")
              .BUSINESS_PROFILE_FIELD.EMAIL,
            formatForSave: nt,
            lowProfile: !1,
            originalValue: rt,
            placeholder: ot,
            rawBusinessProfile: n,
            sessionId: l,
            maxLength: o("WAWebBusinessProfileTypes")
              .BUSINESS_PROFILE_FIELDS_LENGTH.EMAIL,
            validate: I,
            value: T,
            onActive: ae,
            onChange: D,
            onError: at,
            onSaveBusinessProfile: i,
            disabled: J,
          })),
          (t[87] = oe),
          (t[88] = Ce.email),
          (t[89] = T),
          (t[90] = W),
          (t[91] = J),
          (t[92] = n),
          (t[93] = i),
          (t[94] = l),
          (t[95] = nt),
          (t[96] = it))
        : (it = t[96]);
      var lt;
      t[97] !== J || t[98] !== tt || t[99] !== it
        ? ((lt = c.jsx(b, {
            config: {
              Icon: tt,
              content: it,
              disabled: J,
              testid: "biz-profile-email-input",
            },
          })),
          (t[97] = J),
          (t[98] = tt),
          (t[99] = it),
          (t[100] = lt))
        : (lt = t[100]);
      var st = lt,
        ut = a
          ? r("WDSIconIcPublic.react")
          : o("WAWebBusinessWebsiteIcon.react").BusinessWebsiteIcon,
        ct = Ce.primaryWebsite,
        dt;
      t[101] === Symbol.for("react.memo_cache_sentinel")
        ? ((dt = s._(/*BTDS*/ "Website")), (t[101] = dt))
        : (dt = t[101]);
      var mt;
      t[102] === Symbol.for("react.memo_cache_sentinel")
        ? ((mt = function () {
            H(s._(/*BTDS*/ "URL is incorrect"));
          }),
          (t[102] = mt))
        : (mt = t[102]);
      var pt;
      t[103] !== oe ||
      t[104] !== Ce.primaryWebsite ||
      t[105] !== fe ||
      t[106] !== J ||
      t[107] !== $ ||
      t[108] !== V ||
      t[109] !== n ||
      t[110] !== i ||
      t[111] !== l
        ? ((pt = c.jsx("div", {
            children: c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
              activeField: oe,
              error: V,
              fieldKey: "primaryWebsite",
              fieldMetric: o("WAWebWamEnumBusinessProfileField")
                .BUSINESS_PROFILE_FIELD.WEBSITE,
              formatForSave: fe,
              lowProfile: !1,
              originalValue: ct,
              placeholder: dt,
              rawBusinessProfile: n,
              sessionId: l,
              maxLength: o("WAWebBusinessProfileTypes")
                .BUSINESS_PROFILE_FIELDS_LENGTH.WEBSITE,
              validate: o("WAWebValidationUtils").validateURL,
              value: $,
              onActive: ae,
              onChange: P,
              onError: mt,
              onSaveBusinessProfile: i,
              disabled: J,
            }),
          })),
          (t[103] = oe),
          (t[104] = Ce.primaryWebsite),
          (t[105] = fe),
          (t[106] = J),
          (t[107] = $),
          (t[108] = V),
          (t[109] = n),
          (t[110] = i),
          (t[111] = l),
          (t[112] = pt))
        : (pt = t[112]);
      var _t;
      t[113] !== ut || t[114] !== J || t[115] !== pt
        ? ((_t = c.jsx(b, {
            config: {
              Icon: ut,
              content: pt,
              disabled: J,
              testid: "biz-profile-website-input",
              theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme
                .SmallMargin,
            },
          })),
          (t[113] = ut),
          (t[114] = J),
          (t[115] = pt),
          (t[116] = _t))
        : (_t = t[116]);
      var ft = _t,
        gt;
      if (Ce.primaryWebsite !== void 0) {
        if (Le) {
          var ht = Ce.secondaryWebsite,
            yt;
          t[117] === Symbol.for("react.memo_cache_sentinel")
            ? ((yt = s._(/*BTDS*/ "Website")), (t[117] = yt))
            : (yt = t[117]);
          var Ct;
          t[118] === Symbol.for("react.memo_cache_sentinel")
            ? ((Ct = function () {
                j(s._(/*BTDS*/ "URL is incorrect"));
              }),
              (t[118] = Ct))
            : (Ct = t[118]);
          var bt;
          t[119] !== oe ||
          t[120] !== Q ||
          t[121] !== Ce.secondaryWebsite ||
          t[122] !== fe ||
          t[123] !== J ||
          t[124] !== n ||
          t[125] !== i ||
          t[126] !== M ||
          t[127] !== z ||
          t[128] !== l
            ? ((bt = c.jsx("div", {
                children: c.jsx(
                  r("WAWebEditFormBusinessProfileFormField.react"),
                  {
                    activeField: oe,
                    error: z,
                    fieldKey: "secondaryWebsite",
                    fieldMetric: o("WAWebWamEnumBusinessProfileField")
                      .BUSINESS_PROFILE_FIELD.WEBSITE,
                    formatForSave: fe,
                    lowProfile: !1,
                    originalValue: ht,
                    placeholder: yt,
                    rawBusinessProfile: n,
                    sessionId: l,
                    startActive: Q,
                    maxLength: o("WAWebBusinessProfileTypes")
                      .BUSINESS_PROFILE_FIELDS_LENGTH.WEBSITE,
                    validate: o("WAWebValidationUtils").validateURL,
                    value: M,
                    onActive: ae,
                    onChange: w,
                    onError: Ct,
                    onSaveBusinessProfile: i,
                    disabled: J,
                  },
                ),
              })),
              (t[119] = oe),
              (t[120] = Q),
              (t[121] = Ce.secondaryWebsite),
              (t[122] = fe),
              (t[123] = J),
              (t[124] = n),
              (t[125] = i),
              (t[126] = M),
              (t[127] = z),
              (t[128] = l),
              (t[129] = bt))
            : (bt = t[129]);
          var vt;
          (t[130] !== ut || t[131] !== J || t[132] !== bt
            ? ((vt = c.jsx(b, {
                config: {
                  Icon: ut,
                  content: bt,
                  disabled: J,
                  testid: "biz-profile-secondary-website-input",
                  theme: o("WAWebBusinessProfileIconSection.react")
                    .IconSectionTheme.NoMargin,
                },
              })),
              (t[130] = ut),
              (t[131] = J),
              (t[132] = bt),
              (t[133] = vt))
            : (vt = t[133]),
            (gt = vt));
        } else if (!o("WAWebMiscGatingUtils").isBlueLockingEnabled() || !J) {
          var St;
          t[134] === Symbol.for("react.memo_cache_sentinel")
            ? ((St = c.jsx("div", {
                children: c.jsx("button", {
                  className: "xo1mcw5 x1f6kntn xtvhhri",
                  onClick: function () {
                    (O(!1), X(!0));
                  },
                  children: s._(/*BTDS*/ "Add another website"),
                }),
              })),
              (t[134] = St))
            : (St = t[134]);
          var Rt;
          (t[135] !== ut
            ? ((Rt = c.jsx(b, {
                config: {
                  Icon: ut,
                  content: St,
                  testid: "biz-profile-secondary-website-input",
                  theme: o("WAWebBusinessProfileIconSection.react")
                    .IconSectionTheme.NoMargin,
                },
              })),
              (t[135] = ut),
              (t[136] = Rt))
            : (Rt = t[136]),
            (gt = Rt));
        }
      }
      var Lt;
      if (o("WAWebMiscGatingUtils").isBlueLockingEnabled()) {
        var Et;
        if (J) {
          if (
            o(
              "WAWebBizGatingUtils",
            ).isMetaVerifiedLockedProfileEditingV1Enabled()
          ) {
            var kt;
            (t[137] === Symbol.for("react.memo_cache_sentinel")
              ? ((kt = s._(
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
                )),
                (t[137] = kt))
              : (kt = t[137]),
              (Et = kt));
          } else {
            var It;
            (t[138] === Symbol.for("react.memo_cache_sentinel")
              ? ((It = s._(
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
                )),
                (t[138] = It))
              : (It = t[138]),
              (Et = It));
          }
          var Tt;
          t[139] === Symbol.for("react.memo_cache_sentinel")
            ? ((Tt = c.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: o("WAWebUISpacing").uiMargin.top10,
                className: "xhslqc4 x1nxh6w3 x37zpob",
                children: c.jsx(o("WAWebFlex.react").FlexItem, {
                  children: Et,
                }),
              })),
              (t[139] = Tt))
            : (Tt = t[139]);
          var Dt = Tt,
            xt;
          (t[140] !== je ||
          t[141] !== we ||
          t[142] !== st ||
          t[143] !== et ||
          t[144] !== gt ||
          t[145] !== ft ||
          t[146] !== ke ||
          t[147] !== Te
            ? ((xt = c.jsxs(c.Fragment, {
                children: [ke, Te, je, st, ft, gt, Dt, et, we],
              })),
              (t[140] = je),
              (t[141] = we),
              (t[142] = st),
              (t[143] = et),
              (t[144] = gt),
              (t[145] = ft),
              (t[146] = ke),
              (t[147] = Te),
              (t[148] = xt))
            : (xt = t[148]),
            (Lt = xt));
        } else {
          var $t;
          (t[149] !== je ||
          t[150] !== Ue ||
          t[151] !== we ||
          t[152] !== st ||
          t[153] !== et ||
          t[154] !== gt ||
          t[155] !== ft ||
          t[156] !== ke ||
          t[157] !== Te
            ? (($t = c.jsxs(c.Fragment, {
                children: [ke, Te, Ue, je, st, ft, gt, et, we],
              })),
              (t[149] = je),
              (t[150] = Ue),
              (t[151] = we),
              (t[152] = st),
              (t[153] = et),
              (t[154] = gt),
              (t[155] = ft),
              (t[156] = ke),
              (t[157] = Te),
              (t[158] = $t))
            : ($t = t[158]),
            (Lt = $t));
        }
      } else {
        var Pt;
        (t[159] !== je ||
        t[160] !== Ue ||
        t[161] !== we ||
        t[162] !== st ||
        t[163] !== et ||
        t[164] !== gt ||
        t[165] !== ft ||
        t[166] !== be ||
        t[167] !== ke
          ? ((Pt = c.jsxs(c.Fragment, {
              children: [ke, be, we, Ue, je, et, st, ft, gt],
            })),
            (t[159] = je),
            (t[160] = Ue),
            (t[161] = we),
            (t[162] = st),
            (t[163] = et),
            (t[164] = gt),
            (t[165] = ft),
            (t[166] = be),
            (t[167] = ke),
            (t[168] = Pt))
          : (Pt = t[168]),
          (Lt = Pt));
      }
      var Nt;
      return (
        t[169] !== Lt
          ? ((Nt = c.jsx(r("WAWebDrawerSection.react"), {
              theme: "refresh",
              xstyle: o("WAWebUISpacing").uiPadding.top0,
              animation: !1,
              children: Lt,
            })),
            (t[169] = Lt),
            (t[170] = Nt))
          : (Nt = t[170]),
        Nt
      );
    }
    function k(e) {
      return o(
        "WAWebBusinessCategoriesResultCollection",
      ).BusinessCategoriesResultCollection.find(e);
    }
    function I(e) {
      return o("WAWebValidationUtils").validateEmail(e);
    }
    function T() {
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
    l.default = E;
  },
  226,
);
