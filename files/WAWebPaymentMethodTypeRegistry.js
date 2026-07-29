__d(
  "WAWebPaymentMethodTypeRegistry",
  [
    "WALogger",
    "WAWebPaymentMethodPIX",
    "WAWebUprConstants",
    "WAWebUserPrefsTypes",
    "WAWebUserPrefsValidators",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b = new Set(["bank_account", "wallet"]),
      v = new Map([
        ["MX", "MXN"],
        ["ID", "IDR"],
        ["HK", "HKD"],
        ["TW", "TWD"],
        ["TR", "TRY"],
        ["AE", "AED"],
        ["EG", "EGP"],
      ]),
      S = new Map();
    function R(e, t) {
      S.set(e, t);
    }
    function L() {
      for (var e of S.values()) e();
    }
    function E(e, t) {
      var n,
        r = t.out;
      ((n = r.pix) == null ? void 0 : n.credentialId) === e && delete r.pix;
    }
    var k = {
      type: (C = o("WAWebUserPrefsTypes")).WACustomPaymentMethodType.PIX_KEY,
      country: "BR",
      extract: o("WAWebPaymentMethodPIX").extractAndStorePix,
      flushErrors: o("WAWebPaymentMethodPIX").flushPixErrors,
      isStoredValid: o("WAWebPaymentMethodPIX").isStoredPIXValid,
      removeEntry: E,
    };
    function I(e, t, n, r) {
      var a = o("WAWebPaymentMethodPIX").findMetadataValue(e, t);
      return a == null || !o("WAWebUserPrefsValidators").isStringFieldValid(a)
        ? (o("WAWebPaymentMethodPIX").recordError(r, n), null)
        : a;
    }
    function T(e, t) {
      var n = e.findIndex(function (e) {
        return e.credentialId === t.credentialId;
      });
      n >= 0 ? (e[n] = t) : e.push(t);
    }
    function D(e, t, n) {
      var r,
        o,
        a,
        i,
        l,
        s,
        u = I(e, "key", "clabe_key_null", n);
      if (u == null) return !1;
      var c = I(e, "institution_name", "clabe_institution_name_null", n);
      if (c == null) return !1;
      var d = I(
        e,
        "full_name_on_account",
        "clabe_full_name_on_account_null",
        n,
      );
      if (d == null) return !1;
      var m =
          (r =
            (o = t.existingMethods) == null || (o = o.methods) == null
              ? void 0
              : o.clabe) != null
            ? r
            : [],
        p = m.find(function (t) {
          return t.credentialId === e.credentialId;
        }),
        _ = (a = p == null ? void 0 : p.time_added) != null ? a : Date.now(),
        f = (i = p == null ? void 0 : p.time_last_used) != null ? i : null,
        g = {
          credentialId: e.credentialId,
          country: e.country,
          key: u,
          institution_name: c,
          full_name_on_account: d,
          time_added: _,
          time_last_used: f,
        },
        h = t.out,
        y = (l = h.methods) != null ? l : {};
      h.methods = y;
      var C = (s = y.clabe) != null ? s : [];
      return (T(C, g), (y.clabe = C), !0);
    }
    function x(t) {
      var n,
        r,
        a,
        i = (n = t.counts.get("clabe_key_null")) != null ? n : 0;
      i > 0 &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " CLABE key values are null",
              ])),
            i,
          )
          .sendLogs("monitor-errors");
      var l = (r = t.counts.get("clabe_institution_name_null")) != null ? r : 0;
      l > 0 &&
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " CLABE institution_name values are null",
              ])),
            l,
          )
          .sendLogs("monitor-errors");
      var c =
        (a = t.counts.get("clabe_full_name_on_account_null")) != null ? a : 0;
      c > 0 &&
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " CLABE full_name_on_account values are null",
              ])),
            c,
          )
          .sendLogs("monitor-errors");
    }
    function $(e) {
      return (
        o("WAWebUserPrefsValidators").isStringFieldValid(e.credentialId) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.country) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.key) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.institution_name) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.full_name_on_account)
      );
    }
    function P(e) {
      var t,
        n = e == null || (t = e.methods) == null ? void 0 : t.clabe;
      return n == null || n.length === 0 ? !1 : n.every($);
    }
    function N(e, t) {
      var n = t.out.methods,
        r = n == null ? void 0 : n.clabe;
      if (!(n == null || r == null)) {
        var o = r.filter(function (t) {
          return t.credentialId !== e;
        });
        o.length === 0 ? delete n.clabe : (n.clabe = o);
      }
    }
    var M = {
      type: C.WACustomPaymentMethodType.CLABE,
      country: "MX",
      extract: D,
      flushErrors: x,
      isStoredValid: P,
      removeEntry: N,
    };
    function w(e) {
      return (
        o("WAWebUserPrefsValidators").isStringFieldValid(e.credentialId) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.country) &&
        o("WAWebUprConstants").UprPaymentAccountType.cast(e.accountType) !=
          null &&
        o("WAWebUprConstants").UprIdentifierType.cast(e.identifierType) !=
          null &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.currency) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.key) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.institution_name) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.full_name_on_account)
      );
    }
    function A(e) {
      return {
        accountType: o("WAWebPaymentMethodPIX").findMetadataValue(
          e,
          "account_type",
        ),
        identifierType: o("WAWebPaymentMethodPIX").findMetadataValue(
          e,
          "identifier_type",
        ),
      };
    }
    function F(e, t, n, r) {
      var a,
        i,
        l,
        s =
          (a = t.existingMethods) == null ||
          (a = a.methods) == null ||
          (a = a.uprKeys) == null
            ? void 0
            : a.find(function (t) {
                return t.credentialId === e;
              }),
        u =
          n === o("WAWebUprConstants").UprPaymentAccountType.BANK_ACCOUNT &&
          r === o("WAWebUprConstants").UprIdentifierType.CLABE
            ? (i = t.existingMethods) == null ||
              (i = i.methods) == null ||
              (i = i.clabe) == null
              ? void 0
              : i.find(function (t) {
                  return t.credentialId === e;
                })
            : null;
      return (l = s != null ? s : u) != null ? l : null;
    }
    function O(e, t, n) {
      var r,
        o,
        a,
        i,
        l = F(e.credentialId, t, n.accountType, n.identifierType),
        s = {
          credentialId: e.credentialId,
          country: e.country,
          accountType: n.accountType,
          identifierType: n.identifierType,
          currency: n.currency,
          key: n.key,
          institution_name: n.institutionName,
          full_name_on_account: n.fullNameOnAccount,
          time_added:
            (r = l == null ? void 0 : l.time_added) != null ? r : Date.now(),
          time_last_used:
            (o = l == null ? void 0 : l.time_last_used) != null ? o : null,
        },
        u = t.out,
        c = (a = u.methods) != null ? a : {};
      u.methods = c;
      var d = (i = c.uprKeys) != null ? i : [];
      (T(d, s), (c.uprKeys = d));
    }
    function B(e, t, n) {
      var r,
        a = A(e),
        i = a.accountType,
        l = a.identifierType;
      if (i == null || l == null) return !1;
      var s = o("WAWebUprConstants").UprPaymentAccountType.cast(i),
        u = o("WAWebUprConstants").UprIdentifierType.cast(l);
      if (s == null || u == null) return !0;
      var c =
          (r = o("WAWebPaymentMethodPIX").findMetadataValue(e, "currency")) !=
          null
            ? r
            : v.get(e.country),
        d = I(e, "key", "upr_key_null", n),
        m = I(e, "institution_name", "upr_institution_name_null", n),
        p = I(e, "full_name_on_account", "upr_full_name_on_account_null", n);
      return c == null || !o("WAWebUserPrefsValidators").isStringFieldValid(c)
        ? (o("WAWebPaymentMethodPIX").recordError(n, "upr_currency_null"), !0)
        : (d == null ||
            m == null ||
            p == null ||
            O(e, t, {
              accountType: s,
              identifierType: u,
              currency: c,
              key: d,
              institutionName: m,
              fullNameOnAccount: p,
            }),
          !0);
    }
    function W(e) {
      var t,
        n,
        r,
        a,
        i = (t = e.counts.get("upr_key_null")) != null ? t : 0;
      i > 0 &&
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " UPR key values are null",
              ])),
            i,
          )
          .sendLogs("monitor-errors");
      var l = (n = e.counts.get("upr_institution_name_null")) != null ? n : 0;
      l > 0 &&
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " UPR institution_name values are null",
              ])),
            l,
          )
          .sendLogs("monitor-errors");
      var s =
        (r = e.counts.get("upr_full_name_on_account_null")) != null ? r : 0;
      s > 0 &&
        o("WALogger")
          .ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " UPR full_name_on_account values are null",
              ])),
            s,
          )
          .sendLogs("monitor-errors");
      var u = (a = e.counts.get("upr_currency_null")) != null ? a : 0;
      u > 0 &&
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " UPR currency values are null",
              ])),
            u,
          )
          .sendLogs("monitor-errors");
    }
    function q(e, t, n) {
      var r,
        a,
        i,
        l,
        s,
        u,
        c = I(e, "key", "id_key_null", n);
      if (c == null) return !1;
      var d = I(e, "institution_name", "id_institution_name_null", n);
      if (d == null) return !1;
      var m = I(e, "full_name_on_account", "id_full_name_on_account_null", n);
      if (m == null) return !1;
      var p = o("WAWebPaymentMethodPIX").findMetadataValue(e, "account_type");
      if (p == null)
        return (
          o("WAWebPaymentMethodPIX").recordError(n, "id_account_type_null"),
          !1
        );
      var _ =
        p === "bank_account"
          ? "bank_account"
          : p === "wallet"
            ? "wallet"
            : null;
      if (_ == null)
        return (
          o("WAWebPaymentMethodPIX").recordError(
            n,
            "id_account_type_invalid",
            p,
          ),
          !1
        );
      var f =
          (r =
            (a = t.existingMethods) == null || (a = a.methods) == null
              ? void 0
              : a.idPaymentAccount) != null
            ? r
            : [],
        g = f.find(function (t) {
          return t.credentialId === e.credentialId;
        }),
        h = (i = g == null ? void 0 : g.time_added) != null ? i : Date.now(),
        y = (l = g == null ? void 0 : g.time_last_used) != null ? l : null,
        C = {
          credentialId: e.credentialId,
          country: e.country,
          key: c,
          institution_name: d,
          full_name_on_account: m,
          account_type: _,
          time_added: h,
          time_last_used: y,
        },
        b = t.out,
        v = (s = b.methods) != null ? s : {};
      b.methods = v;
      var S = (u = v.idPaymentAccount) != null ? u : [];
      return (T(S, C), (v.idPaymentAccount = S), !0);
    }
    function U(e) {
      var t,
        n,
        r,
        a,
        i,
        l = (t = e.counts.get("id_key_null")) != null ? t : 0;
      l > 0 &&
        o("WALogger")
          .ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " ID Payment Account key values are null",
              ])),
            l,
          )
          .sendLogs("monitor-errors");
      var s = (n = e.counts.get("id_institution_name_null")) != null ? n : 0;
      s > 0 &&
        o("WALogger")
          .ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " ID Payment Account institution_name values are null",
              ])),
            s,
          )
          .sendLogs("monitor-errors");
      var u =
        (r = e.counts.get("id_full_name_on_account_null")) != null ? r : 0;
      u > 0 &&
        o("WALogger")
          .ERROR(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " ID Payment Account full_name_on_account values are null",
              ])),
            u,
          )
          .sendLogs("monitor-errors");
      var c = (a = e.counts.get("id_account_type_null")) != null ? a : 0;
      c > 0 &&
        o("WALogger")
          .ERROR(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " ID Payment Account account_type values are null",
              ])),
            c,
          )
          .sendLogs("monitor-errors");
      var d = (i = e.counts.get("id_account_type_invalid")) != null ? i : 0;
      if (d > 0) {
        var m,
          p = (m = e.samples.get("id_account_type_invalid")) != null ? m : [];
        o("WALogger")
          .ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " ID Payment Account account_type values are invalid: ",
                "",
              ])),
            d,
            p,
          )
          .sendLogs("monitor-errors");
      }
    }
    function V(e) {
      return (
        o("WAWebUserPrefsValidators").isStringFieldValid(e.credentialId) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.country) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.key) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.institution_name) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(
          e.full_name_on_account,
        ) &&
        b.has(e.account_type)
      );
    }
    function H(e) {
      var t,
        n = e == null || (t = e.methods) == null ? void 0 : t.idPaymentAccount;
      return n == null || n.length === 0 ? !1 : n.every(V);
    }
    function G(e, t) {
      var n = t.out.methods,
        r = n == null ? void 0 : n.idPaymentAccount;
      if (!(n == null || r == null)) {
        var o = r.filter(function (t) {
          return t.credentialId !== e;
        });
        o.length === 0 ? delete n.idPaymentAccount : (n.idPaymentAccount = o);
      }
    }
    var z = {
        type: C.WACustomPaymentMethodType.ID_PAYMENT_ACCOUNT,
        country: "ID",
        extract: q,
        flushErrors: U,
        isStoredValid: H,
        removeEntry: G,
      },
      j = new Map([
        [C.WACustomPaymentMethodType.PIX_KEY, k],
        [C.WACustomPaymentMethodType.CLABE, M],
        [C.WACustomPaymentMethodType.ID_PAYMENT_ACCOUNT, z],
      ]);
    ((l.registerPaymentMethodSmartDefault = R),
      (l.runAllPaymentMethodSmartDefaults = L),
      (l.isStoredClabeEntryValid = $),
      (l.isStoredUprKeyValid = w),
      (l.tryExtractUprKey = B),
      (l.flushUprKeyErrors = W),
      (l.PaymentMethodTypeRegistry = j));
  },
  98,
);
