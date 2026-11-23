__d(
  "MAIBABusinessSetupDirtyFields",
  ["fbt", "AdsTimezone", "BizKitBusinessNameUtils", "isEmail"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "PORTFOLIO_NAME",
      u = "CONTACT_FIRST_NAME",
      c = "CONTACT_LAST_NAME",
      d = "CONTACT_EMAIL",
      m = "AD_ACCOUNT_MODE",
      p = "EXISTING_AD_ACCOUNT_ID",
      _ = "AD_ACCOUNT_NAME",
      f = "AD_ACCOUNT_TIMEZONE",
      g = "AD_ACCOUNT_CURRENCY",
      h = "SELECTED_PAGE_IDS",
      y = "PAGE_NAME",
      C = "PAGE_CATEGORY",
      b = "PAGE_CATEGORY_LABELS",
      v = "PORTFOLIO_NAME_SUGGESTED",
      S = "maiba_pending_page";
    function R(e) {
      var t;
      return {
        accountName: (t = e.account_name) != null ? t : "",
        currency: L(e, "currency"),
        existingID: L(e, "existing_ad_account_id"),
        mode: e.ad_account_mode === "existing" ? "existing" : "new",
        timezone: L(e, "timezone"),
      };
    }
    function L(e, t) {
      var n = e[t];
      return n != null && n !== "" ? n : null;
    }
    function E(e) {
      return s._(/*BTDS*/ "", [s._param("businessName", e)]).toString();
    }
    function k(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _ = R(t),
        f =
          (n = (r = L(t, "business_name")) != null ? r : e.businessName) != null
            ? n
            : "";
      return {
        accountName:
          _.accountName !== "" ? _.accountName : f !== "" ? E(f) : "",
        adAccountMode: _.mode,
        contactEmail:
          (o = (a = L(t, "contact_email")) != null ? a : e.viewerEmail) != null
            ? o
            : "",
        contactFirstName:
          (i = L(t, "contact_first_name")) != null ? i : e.firstName,
        contactLastName:
          (l = L(t, "contact_last_name")) != null ? l : e.lastName,
        currency:
          (s = (u = _.currency) != null ? u : e.viewerCurrencyEstimate) != null
            ? s
            : null,
        existingAccountID:
          (c = (d = _.existingID) != null ? d : e.adAccountIDs[0]) != null
            ? c
            : null,
        portfolioName: f,
        selectedPageIDs: e.selectedPageIDs,
        timezoneID:
          (m = (p = _.timezone) != null ? p : e.viewerTimezoneEstimate) != null
            ? m
            : null,
      };
    }
    function I(e, t) {
      var n = e[t];
      return typeof n == "string" ? n : null;
    }
    function T(e, t) {
      var n = e[t];
      if (!Array.isArray(n)) return null;
      var r = [];
      for (var o of n) {
        if (typeof o != "string") return null;
        r.push(o);
      }
      return r;
    }
    var D = "PENDING_PAGES";
    function x(e) {
      var t = e[D];
      if (t == null || typeof t != "object" || Array.isArray(t))
        return { categoryIDs: [], name: "" };
      for (var n = Object.keys(t), r = n.length - 1; r >= 0; r--) {
        var o = t[n[r]];
        if (!(o == null || typeof o != "object")) {
          var a = o.NAME;
          if (!(typeof a != "string" || a === "")) {
            var i = o.CATEGORY_IDS,
              l = [];
            if (Array.isArray(i))
              for (var s of i) typeof s == "string" && l.push(s);
            return { categoryIDs: l, name: a };
          }
        }
      }
      return { categoryIDs: [], name: "" };
    }
    function $(e) {
      var t = I(e, y),
        n = T(e, C);
      return t != null || n != null
        ? { categoryIDs: n != null ? n : [], name: t != null ? t : "" }
        : x(e);
    }
    function P(e) {
      var t;
      return (t = T(e, b)) != null ? t : [];
    }
    function N(e) {
      for (
        var t = $(e).categoryIDs, n = P(e), r = [], o = 0;
        o < t.length;
        o++
      ) {
        var a = n[o];
        a != null && a !== "" && r.push({ id: t[o], label: a });
      }
      return r;
    }
    function M(e) {
      var t = e.categoryIDs;
      return (
        e.name.trim() !== "" &&
        t.length > 0 &&
        t.length <= 3 &&
        t.every(function (e) {
          return e.trim() !== "";
        }) &&
        new Set(t).size === t.length
      );
    }
    function w(e) {
      return (e.name.trim() === "" && e.categoryIDs.length === 0) || M(e);
    }
    function A(t, n) {
      var r,
        o,
        a,
        i,
        l,
        s,
        y,
        C,
        b,
        v = I(t, m),
        S = v === "existing" || v === "new" ? v : n.adAccountMode;
      return {
        accountName: (r = I(t, _)) != null ? r : n.accountName,
        adAccountMode: S,
        contactEmail: (o = I(t, d)) != null ? o : n.contactEmail,
        contactFirstName: (a = I(t, u)) != null ? a : n.contactFirstName,
        contactLastName: (i = I(t, c)) != null ? i : n.contactLastName,
        currency: (l = I(t, g)) != null ? l : n.currency,
        existingAccountID: (s = I(t, p)) != null ? s : n.existingAccountID,
        pageIDs: (y = T(t, h)) != null ? y : n.selectedPageIDs,
        portfolioName: (C = I(t, e)) != null ? C : n.portfolioName,
        timezoneID: (b = I(t, f)) != null ? b : n.timezoneID,
      };
    }
    function F(t, n) {
      var r = A(t, n),
        o = new Map(),
        a = function (n, r) {
          t[n] === void 0 && r != null && r !== "" && o.set(n, r);
        };
      return (
        a(e, r.portfolioName),
        a(v, n.portfolioName),
        a(u, r.contactFirstName),
        a(c, r.contactLastName),
        a(d, r.contactEmail),
        a(m, r.adAccountMode),
        t[h] === void 0 && r.pageIDs.length > 0 && o.set(h, r.pageIDs),
        r.adAccountMode === "existing" && a(p, r.existingAccountID),
        o
      );
    }
    function O(e, t) {
      var n = A(e, t),
        r = new Map();
      for (var o of [
        [_, n.accountName],
        [f, n.timezoneID],
        [g, n.currency],
      ]) {
        var a = o[0],
          i = o[1];
        e[a] === void 0 && i != null && i !== "" && r.set(a, i);
      }
      return r;
    }
    var B = new Map(
      o("AdsTimezone").sortedTimezones.map(function (e) {
        return [e.name, e.displayName];
      }),
    );
    function W(e) {
      var t;
      return (t = B.get(e)) != null ? t : e;
    }
    function q(e, t, n, r) {
      if (e === "existing" && t != null && t !== "") {
        var o;
        return (o = r.get(t)) != null ? o : t;
      }
      return n !== "" ? n : null;
    }
    var U = 50,
      V = s._(/*BTDS*/ ""),
      H = s._(/*BTDS*/ ""),
      G = s._(/*BTDS*/ ""),
      z = s._(/*BTDS*/ ""),
      j = s._(/*BTDS*/ "");
    function K(e) {
      return e.trim().length === 0
        ? H
        : o("BizKitBusinessNameUtils").SPECIAL_CHAR_REGEX.test(e)
          ? V
          : null;
    }
    function Q(e) {
      var t = e.trim();
      return t.length > U ? z : t.length === 0 ? G : null;
    }
    function X(e) {
      return e === "" || r("isEmail")(e) ? null : j;
    }
    function Y(e) {
      return {
        contactEmail: X(e.contactEmail),
        contactFirstName: Q(e.contactFirstName),
        contactLastName: Q(e.contactLastName),
        portfolioName: K(e.portfolioName),
      };
    }
    function J(e) {
      return (
        e.contactEmail != null ||
        e.contactFirstName != null ||
        e.contactLastName != null ||
        e.portfolioName != null
      );
    }
    var Z = s._(/*BTDS*/ "");
    function ee(e) {
      return e == null || e === "";
    }
    function te(e) {
      return e.adAccountMode === "existing"
        ? {
            accountName: null,
            currency: null,
            existingAccountID: ee(e.existingAccountID) ? Z : null,
            timezoneID: null,
          }
        : {
            accountName: e.accountName.trim() === "" ? Z : null,
            currency: ee(e.currency) ? Z : null,
            existingAccountID: null,
            timezoneID: ee(e.timezoneID) ? Z : null,
          };
    }
    function ne(e) {
      var t = te(e);
      return (
        t.accountName == null &&
        t.currency == null &&
        t.existingAccountID == null &&
        t.timezoneID == null
      );
    }
    function re(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.fieldName;
        r != null && t.set(r, n);
      }
      return t;
    }
    ((l.PORTFOLIO_NAME_FIELD = e),
      (l.FIRST_NAME_FIELD = u),
      (l.LAST_NAME_FIELD = c),
      (l.EMAIL_FIELD = d),
      (l.AD_ACCOUNT_MODE_FIELD = m),
      (l.EXISTING_ACCOUNT_ID_FIELD = p),
      (l.ACCOUNT_NAME_FIELD = _),
      (l.TIMEZONE_FIELD = f),
      (l.CURRENCY_FIELD = g),
      (l.SELECTED_PAGE_IDS_FIELD = h),
      (l.PAGE_NAME_FIELD = y),
      (l.PAGE_CATEGORY_FIELD = C),
      (l.PAGE_CATEGORY_LABELS_FIELD = b),
      (l.PORTFOLIO_NAME_SUGGESTED_FIELD = v),
      (l.PENDING_PAGE_PROFILE_ID = S),
      (l.getBusinessSetupBases = k),
      (l.readBusinessSetupPendingPage = $),
      (l.readBusinessSetupPendingPageCategoryLabels = P),
      (l.readBusinessSetupPendingPageCategories = N),
      (l.isBusinessSetupPendingPageComplete = M),
      (l.isBusinessSetupPendingPageAbsentOrComplete = w),
      (l.resolveBusinessSetupValuesFromAppState = A),
      (l.getMissingBusinessSetupAppStateDefaults = F),
      (l.getMissingNewAdAccountDefaults = O),
      (l.getTimezoneDisplayName = W),
      (l.getAdAccountHeading = q),
      (l.validateBusinessSetupFields = Y),
      (l.hasBusinessSetupFieldErrors = J),
      (l.validateBusinessSetupAdAccountFields = te),
      (l.isBusinessSetupAdAccountComplete = ne),
      (l.getBusinessSetupServerFieldErrors = re));
  },
  226,
);
