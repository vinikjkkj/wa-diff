__d(
  "WAWebUserPrefsCustomPaymentMethods",
  [
    "WALogger",
    "WAWebPaymentMethodPIX",
    "WAWebPaymentMethodTypeRegistry",
    "WAWebUprConstants",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage",
    "WAWebUserPrefsTypes",
    "WAWebUserPrefsValidators",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
        o("WAWebUserPrefsKeys").KEYS.CUSTOM_PAYMENT_METHODS,
      );
    }
    function c() {
      var e;
      return (e = o("WAWebPaymentMethodPIX").getValidStoredPix(u())) != null
        ? e
        : null;
    }
    function d() {
      var e,
        t,
        n,
        r,
        a = u(),
        i = (
          (e = a == null || (t = a.methods) == null ? void 0 : t.uprKeys) !=
          null
            ? e
            : []
        ).filter(o("WAWebPaymentMethodTypeRegistry").isStoredUprKeyValid),
        l = (
          (n = a == null || (r = a.methods) == null ? void 0 : r.clabe) != null
            ? n
            : []
        )
          .filter(o("WAWebPaymentMethodTypeRegistry").isStoredClabeEntryValid)
          .map(function (e) {
            return {
              credentialId: e.credentialId,
              country: e.country,
              accountType:
                o("WAWebUprConstants").UprPaymentAccountType.BANK_ACCOUNT,
              identifierType: o("WAWebUprConstants").UprIdentifierType.CLABE,
              currency: "MXN",
              key: e.key,
              institution_name: e.institution_name,
              full_name_on_account: e.full_name_on_account,
              time_added: e.time_added,
              time_last_used: e.time_last_used,
            };
          });
      return [].concat(i, l);
    }
    function m(t) {
      var n = {},
        a = u(),
        i = o("WAWebPaymentMethodPIX").newPaymentMethodTypeErrors(),
        l = 0,
        c = [],
        d = new Map();
      (t.forEach(function (e) {
        var t;
        if (
          !o("WAWebPaymentMethodTypeRegistry").tryExtractUprKey(
            e,
            { out: n, existingMethods: a },
            i,
          )
        ) {
          var r = o("WAWebUserPrefsTypes").WACustomPaymentMethodType.cast(
            e.type,
          );
          if (r == null) {
            (l++, c.length < 3 && c.push(e.type));
            return;
          }
          var s = o(
            "WAWebPaymentMethodTypeRegistry",
          ).PaymentMethodTypeRegistry.get(r);
          if (s != null) {
            var u = (t = d.get(r)) != null ? t : { received: 0, wrote: 0 };
            u.received++;
            var m = s.extract(e, { out: n, existingMethods: a }, i);
            (m && u.wrote++, d.set(r, u));
          }
        }
      }),
        l > 0 &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " invalid custom payment method types: ",
                  "",
                ])),
              l,
              c,
            )
            .sendLogs("monitor-errors"));
      for (var m of d) {
        var p = m[0],
          _ = m[1],
          f = _.received,
          g = _.wrote;
        f > 0 &&
          g === 0 &&
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[customPaymentMethods] noRecognizedKeys type=",
                  " recv=",
                  " wrote=0",
                ])),
              p,
              f,
            )
            .sendLogs("monitor-errors");
      }
      for (var h of o(
        "WAWebPaymentMethodTypeRegistry",
      ).PaymentMethodTypeRegistry.values())
        h.flushErrors(i);
      (o("WAWebPaymentMethodTypeRegistry").flushUprKeyErrors(i),
        r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(
          o("WAWebUserPrefsKeys").KEYS.CUSTOM_PAYMENT_METHODS,
          n,
        ));
    }
    function p() {
      return o("WAWebPaymentMethodPIX").isStoredPIXValid(u());
    }
    function _(e, t) {
      var n = o("WAWebPaymentMethodTypeRegistry").PaymentMethodTypeRegistry.get(
        e,
      );
      if (n != null) {
        var a = u();
        a != null &&
          (n.removeEntry(t, {
            out: a,
            existingMethods: babelHelpers.extends({}, a),
          }),
          r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(
            o("WAWebUserPrefsKeys").KEYS.CUSTOM_PAYMENT_METHODS,
            a,
          ));
      }
    }
    ((l.getPIX = c),
      (l.getAllUprStoredKeys = d),
      (l.setCustomPaymentMethods = m),
      (l.isPIXValid = p),
      (l.removeCustomPaymentMethod = _),
      (l.isStringFieldValid = o(
        "WAWebUserPrefsValidators",
      ).isStringFieldValid));
  },
  98,
);
