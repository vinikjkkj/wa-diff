__d(
  "WAWebBizComplianceUtil",
  [
    "fbt",
    "WAWebBizCatalogGatingUtils",
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
    };
    function u(t) {
      var n = t || {},
        r = n.entityType,
        a = n.entityTypeCustom,
        i = n.isRegistered,
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
    }
    var c = function (t, n) {
      return !!(t || n);
    };
    function d(e) {
      return !!(e != null && e.trim());
    }
    function m(e, t) {
      return o(
        "WAWebBizCatalogGatingUtils",
      ).canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(t)
        ? d(e)
        : !0;
    }
    var p = function (t) {
        var e = t.contactId,
          n = t.field,
          r = t.fields,
          a = t.source,
          i = t.value;
        return o(
          "WAWebBizCatalogGatingUtils",
        ).canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(e)
          ? r.some(function (e) {
              return d(e === n ? i : a == null ? void 0 : a[e]);
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
      };
    function h(e, t, n, r) {
      return p({ contactId: t, field: n, fields: f(), source: e, value: r });
    }
    function y(e, t, n, r) {
      return p({ contactId: t, field: n, fields: g(), source: e, value: r });
    }
    function C(e, t, n) {
      if (
        (t === void 0 && (t = {}),
        !o(
          "WAWebBizCatalogGatingUtils",
        ).canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(n))
      )
        return !0;
      if (!t) return !1;
      var r = t,
        a = r.customerCareDetails,
        i = r.entityName,
        l = r.entityType,
        s = r.entityTypeCustom,
        u = r.grievanceOfficerDetails;
      return (
        [e, i, a == null ? void 0 : a.email, u == null ? void 0 : u.name].every(
          function (e) {
            return m(e, n);
          },
        ) &&
        c(l, s) &&
        h(a, n) &&
        y(u, n)
      );
    }
    function b(e, t, n, r, o) {
      return h(e, o, t, n) ? r : "";
    }
    function v(e, t, n, r, o) {
      return y(e, o, t, n) ? r : "";
    }
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
