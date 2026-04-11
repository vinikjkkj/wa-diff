__d(
  "WAWebBizComplianceUtil",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileTypes",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebNonEmptyString",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = function () {
        var e, t;
        return (
          (e = {}),
          (e[
            (t = o(
              "WAWebBusinessProfileTypes",
            )).businessTypeOptions.limitedLiabilityPartnership
          ] = s._(/*BTDS*/ "Limited liability partnership")),
          (e[t.businessTypeOptions.soleProprietorship] = s._(
            /*BTDS*/ "Sole proprietorship",
          )),
          (e[t.businessTypeOptions.partnership] = s._(/*BTDS*/ "Partnership")),
          (e[t.businessTypeOptions.publicCompany] = s._(
            /*BTDS*/ "Public company",
          )),
          (e[t.businessTypeOptions.privateCompany] = s._(
            /*BTDS*/ "Private company",
          )),
          (e[t.businessTypeOptions.other] = s._(/*BTDS*/ "Other")),
          e
        );
      },
      u = function (n) {
        var t = n || {},
          r = t.entityType,
          a = t.entityTypeCustom,
          i = t.isRegistered,
          l = e(),
          u =
            o("WAWebNonEmptyString").asMaybeNonEmptyString(a) ||
            (r && l[r]) ||
            "";
        if (!u) return "";
        var c = "";
        return (
          [
            o("WAWebBusinessProfileTypes").businessTypeOptions.partnership,
            o("WAWebBusinessProfileTypes").businessTypeOptions.other,
          ].includes(r) &&
            (c =
              i != null && i
                ? s._(/*BTDS*/ "Registered business")
                : s._(/*BTDS*/ "Not registered business")),
          "" + u.toString() + (c ? " (" + c.toString() + ")" : "")
        );
      },
      c = function (t, n) {
        return !!(t || n);
      },
      d = function (t) {
        return !!(t != null && t.trim());
      },
      m = function (t, n) {
        return o(
          "WAWebBizGatingUtils",
        ).canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(n)
          ? d(t)
          : !0;
      },
      p = function (t, n, r, a, i) {
        return o(
          "WAWebBizGatingUtils",
        ).canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(n)
          ? r.some(function (e) {
              return d(e === a ? i : t == null ? void 0 : t[e]);
            })
          : !0;
      },
      _ = function () {
        return ["mobileNumber", "landlineNumber"];
      },
      f = function () {
        return [].concat(_());
      },
      g = function () {
        return [].concat(_(), ["email"]);
      },
      h = function (t, n, r, o) {
        return p(t, n, f(), r, o);
      },
      y = function (t, n, r, o) {
        return p(t, n, g(), r, o);
      },
      C = function (t, n, r) {
        if (
          (n === void 0 && (n = {}),
          !o(
            "WAWebBizGatingUtils",
          ).canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(r))
        )
          return !0;
        if (!n) return !1;
        var e = n,
          a = e.customerCareDetails,
          i = e.entityName,
          l = e.entityType,
          s = e.entityTypeCustom,
          u = e.grievanceOfficerDetails;
        return (
          [
            t,
            i,
            a == null ? void 0 : a.email,
            u == null ? void 0 : u.name,
          ].every(function (e) {
            return m(e, r);
          }) &&
          c(l, s) &&
          h(a, r) &&
          y(u, r)
        );
      },
      b = function (t, n, r, o, a) {
        return h(t, a, n, r) ? o : "";
      },
      v = function (t, n, r, o, a) {
        return y(t, a, n, r) ? o : "";
      };
    function S(e) {
      var t,
        n = (t = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : t.user;
      if (n != null)
        return o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(n);
    }
    ((l.getEntityTypeTextMapping = e),
      (l.getEntityTypeText = u),
      (l.existsFieldIgnoreHardEnforcement = d),
      (l.existsField = m),
      (l.existsCustomerCareDetailsContact = h),
      (l.existsGrievanceOfficerDetailsContact = y),
      (l.isBusinessCompliant = C),
      (l.getCustomerCareDetailsError = b),
      (l.getGrievanceOfficerDetailsError = v),
      (l.getCountryShortcodeByWid = S));
  },
  226,
);
