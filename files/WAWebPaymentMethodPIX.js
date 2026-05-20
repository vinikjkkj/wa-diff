__d(
  "WAWebPaymentMethodPIX",
  ["WALogger", "WAWebUserPrefsTypes", "WAWebUserPrefsValidators"],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d() {
      return { counts: new Map(), samples: new Map() };
    }
    function m(e, t, n) {
      var r;
      if (
        (e.counts.set(t, ((r = e.counts.get(t)) != null ? r : 0) + 1),
        n != null)
      ) {
        var o = e.samples.get(t);
        (o == null && ((o = []), e.samples.set(t, o)),
          o.length < 3 && o.push(n));
      }
    }
    function p(e, t) {
      var n;
      return (n = e.metadata.filter(function (e) {
        return e.key === t;
      })) == null || (n = n.at(0)) == null
        ? void 0
        : n.value;
    }
    function _(e) {
      var t = e == null ? void 0 : e.pix;
      return (
        t != null &&
        o("WAWebUserPrefsValidators").isStringFieldValid(t.display_name) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(t.credentialId) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(t.key) &&
        o("WAWebUserPrefsValidators").isStringFieldValid(t.key_type) &&
        o("WAWebUserPrefsTypes").PixKeyType.cast(t.key_type) != null &&
        o("WAWebUserPrefsValidators").isStringFieldValid(t.country)
      );
    }
    function f(e) {
      return _(e) ? (e == null ? void 0 : e.pix) : null;
    }
    function g(e, t, n) {
      var r,
        a,
        i = p(e, "pix_key");
      if (i == null) return (m(n, "pix_key_null"), !1);
      var l = p(e, "pix_key_type");
      if (l == null) return (m(n, "pix_key_type_null"), !1);
      var s = o("WAWebUserPrefsTypes").PixKeyType.cast(l.toUpperCase());
      if (s == null) return (m(n, "pix_key_type_invalid", l), !1);
      var u = p(e, "pix_display_name");
      if (u == null) return (m(n, "pix_display_name_null"), !1);
      var c = f(t.existingMethods),
        d = (r = c == null ? void 0 : c.time_added) != null ? r : Date.now(),
        _ = (a = c == null ? void 0 : c.time_last_used) != null ? a : null;
      return (
        (t.out.pix = {
          credentialId: e.credentialId,
          key: i,
          key_type: s,
          display_name: u,
          country: e.country,
          time_added: d,
          time_last_used: _,
        }),
        !0
      );
    }
    function h(t) {
      var n,
        r,
        a,
        i,
        l = (n = t.counts.get("pix_key_null")) != null ? n : 0;
      l > 0 &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " pix_key values are null",
              ])),
            l,
          )
          .sendLogs("monitor-errors");
      var d = (r = t.counts.get("pix_key_type_null")) != null ? r : 0;
      d > 0 &&
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " pix_key_type values are null",
              ])),
            d,
          )
          .sendLogs("monitor-errors");
      var m = (a = t.counts.get("pix_key_type_invalid")) != null ? a : 0;
      if (m > 0) {
        var p,
          _ = (p = t.samples.get("pix_key_type_invalid")) != null ? p : [];
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " pix_key_type values are invalid: ",
                "",
              ])),
            m,
            _,
          )
          .sendLogs("monitor-errors");
      }
      var f = (i = t.counts.get("pix_display_name_null")) != null ? i : 0;
      f > 0 &&
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " pix_display_name values are null",
              ])),
            f,
          )
          .sendLogs("monitor-errors");
    }
    ((l.newPaymentMethodTypeErrors = d),
      (l.recordError = m),
      (l.findMetadataValue = p),
      (l.isStoredPIXValid = _),
      (l.getValidStoredPix = f),
      (l.extractAndStorePix = g),
      (l.flushPixErrors = h));
  },
  98,
);
