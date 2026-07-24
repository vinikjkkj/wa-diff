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
      g = new Set(["bank_account", "wallet"]),
      h = new Map();
    function y(e, t) {
      h.set(e, t);
    }
    function C() {
      for (var e of h.values()) e();
    }
    function b(e, t) {
      var n,
        r = t.out;
      ((n = r.pix) == null ? void 0 : n.credentialId) === e && delete r.pix;
    }
    var v = {
      type: (f = o("WAWebUserPrefsTypes")).WACustomPaymentMethodType.PIX_KEY,
      country: "BR",
      extract: o("WAWebPaymentMethodPIX").extractAndStorePix,
      flushErrors: o("WAWebPaymentMethodPIX").flushPixErrors,
      isStoredValid: o("WAWebPaymentMethodPIX").isStoredPIXValid,
      removeEntry: b,
    };
    function S(e, t, n, r) {
      var a = o("WAWebPaymentMethodPIX").findMetadataValue(e, t);
      return a == null || !o("WAWebUserPrefsValidators").isStringFieldValid(a)
        ? (o("WAWebPaymentMethodPIX").recordError(r, n), null)
        : a;
    }
    function R(e, t) {
      var n = e.findIndex(function (e) {
        return e.credentialId === t.credentialId;
      });
      n >= 0 ? (e[n] = t) : e.push(t);
    }
    function L(e, t, n) {
      var r,
        o,
        a,
        i,
        l,
        s,
        u = S(e, "key", "clabe_key_null", n);
      if (u == null) return !1;
      var c = S(e, "institution_name", "clabe_institution_name_null", n);
      if (c == null) return !1;
      var d = S(
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
      return (R(C, g), (y.clabe = C), !0);
    }
    function E(t) {
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
    function k(e) {
      return (
        o("WAWebUserPrefsValidators").isStringFieldValid(e.credentialId) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.country) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.key) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.institution_name) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.full_name_on_account)
      );
    }
    function I(e) {
      var t,
        n = e == null || (t = e.methods) == null ? void 0 : t.clabe;
      return n == null || n.length === 0 ? !1 : n.every(k);
    }
    function T(e, t) {
      var n = t.out.methods,
        r = n == null ? void 0 : n.clabe;
      if (!(n == null || r == null)) {
        var o = r.filter(function (t) {
          return t.credentialId !== e;
        });
        o.length === 0 ? delete n.clabe : (n.clabe = o);
      }
    }
    var D = {
      type: f.WACustomPaymentMethodType.CLABE,
      country: "MX",
      extract: L,
      flushErrors: E,
      isStoredValid: I,
      removeEntry: T,
      uprAttachment: {
        accountType: o("WAWebUprConstants").UprPaymentAccountType.BANK_ACCOUNT,
        identifierType: o("WAWebUprConstants").UprIdentifierType.CLABE,
        currency: "MXN",
        getStoredKeys: function (t) {
          var e, n;
          return (
            (e = t == null || (n = t.methods) == null ? void 0 : n.clabe) !=
            null
              ? e
              : []
          ).filter(k);
        },
      },
    };
    function x(e, t, n) {
      var r,
        a,
        i,
        l,
        s,
        u,
        c = S(e, "key", "id_key_null", n);
      if (c == null) return !1;
      var d = S(e, "institution_name", "id_institution_name_null", n);
      if (d == null) return !1;
      var m = S(e, "full_name_on_account", "id_full_name_on_account_null", n);
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
      var L = (u = v.idPaymentAccount) != null ? u : [];
      return (R(L, C), (v.idPaymentAccount = L), !0);
    }
    function $(e) {
      var t,
        n,
        r,
        a,
        i,
        l = (t = e.counts.get("id_key_null")) != null ? t : 0;
      l > 0 &&
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " ID Payment Account full_name_on_account values are null",
              ])),
            u,
          )
          .sendLogs("monitor-errors");
      var f = (a = e.counts.get("id_account_type_null")) != null ? a : 0;
      f > 0 &&
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " ID Payment Account account_type values are null",
              ])),
            f,
          )
          .sendLogs("monitor-errors");
      var g = (i = e.counts.get("id_account_type_invalid")) != null ? i : 0;
      if (g > 0) {
        var h,
          y = (h = e.samples.get("id_account_type_invalid")) != null ? h : [];
        o("WALogger")
          .ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " ID Payment Account account_type values are invalid: ",
                "",
              ])),
            g,
            y,
          )
          .sendLogs("monitor-errors");
      }
    }
    function P(e) {
      return (
        o("WAWebUserPrefsValidators").isStringFieldValid(e.credentialId) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.country) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.key) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(e.institution_name) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(
          e.full_name_on_account,
        ) &&
        g.has(e.account_type)
      );
    }
    function N(e) {
      var t,
        n = e == null || (t = e.methods) == null ? void 0 : t.idPaymentAccount;
      return n == null || n.length === 0 ? !1 : n.every(P);
    }
    function M(e, t) {
      var n = t.out.methods,
        r = n == null ? void 0 : n.idPaymentAccount;
      if (!(n == null || r == null)) {
        var o = r.filter(function (t) {
          return t.credentialId !== e;
        });
        o.length === 0 ? delete n.idPaymentAccount : (n.idPaymentAccount = o);
      }
    }
    var w = {
        type: f.WACustomPaymentMethodType.ID_PAYMENT_ACCOUNT,
        country: "ID",
        extract: x,
        flushErrors: $,
        isStoredValid: N,
        removeEntry: M,
      },
      A = new Map([
        [f.WACustomPaymentMethodType.PIX_KEY, v],
        [f.WACustomPaymentMethodType.CLABE, D],
        [f.WACustomPaymentMethodType.ID_PAYMENT_ACCOUNT, w],
      ]);
    ((l.registerPaymentMethodSmartDefault = y),
      (l.runAllPaymentMethodSmartDefaults = C),
      (l.isStoredClabeEntryValid = k),
      (l.PaymentMethodTypeRegistry = A));
  },
  98,
);
