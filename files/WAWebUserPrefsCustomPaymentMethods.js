__d(
  "WAWebUserPrefsCustomPaymentMethods",
  [
    "WALogger",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage",
    "WAWebUserPrefsTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return (
        e != null &&
        h(e.display_name) &&
        h(e.credentialId) &&
        h(e.key) &&
        h(e.key_type) &&
        o("WAWebUserPrefsTypes").PixKeyType.cast(e.key_type) != null &&
        h(e.country)
      );
    }
    function p() {
      var e,
        t = (e = _()) == null ? void 0 : e.pix;
      return m(t) && t ? t : null;
    }
    function _() {
      var e = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
        o("WAWebUserPrefsKeys").KEYS.CUSTOM_PAYMENT_METHODS,
      );
      return e;
    }
    function f(t) {
      var n = {},
        a = p(),
        i = 0,
        l = [],
        m = 0,
        _ = 0,
        f = 0,
        g = [],
        h = 0;
      (t.forEach(function (e) {
        var t = o("WAWebUserPrefsTypes").WACustomPaymentMethodType.cast(e.type);
        if (t == null) {
          (i++, l.length < 3 && l.push(e.type));
          return;
        }
        e: {
          if (
            t === o("WAWebUserPrefsTypes").WACustomPaymentMethodType.PIX_KEY
          ) {
            var r,
              s,
              u,
              c,
              d,
              p =
                (r = e.metadata.filter(function (e) {
                  return e.key === "pix_key";
                })) == null || (r = r.at(0)) == null
                  ? void 0
                  : r.value;
            if (p == null) {
              m++;
              return;
            }
            var y =
              (s = e.metadata.filter(function (e) {
                return e.key === "pix_key_type";
              })) == null || (s = s.at(0)) == null
                ? void 0
                : s.value;
            if (y == null) {
              _++;
              return;
            }
            var C = o("WAWebUserPrefsTypes").PixKeyType.cast(y.toUpperCase());
            if (C == null) {
              (f++, g.length < 3 && g.push(y));
              return;
            }
            var b =
              (u = e.metadata.filter(function (e) {
                return e.key === "pix_display_name";
              })) == null || (u = u.at(0)) == null
                ? void 0
                : u.value;
            if (b == null) {
              h++;
              return;
            }
            var v =
                (c = a == null ? void 0 : a.time_added) != null
                  ? c
                  : Date.now(),
              S =
                (d = a == null ? void 0 : a.time_last_used) != null ? d : null,
              R = {
                credentialId: e.credentialId,
                key: p,
                key_type: C,
                display_name: b,
                country: e.country,
                time_added: v,
                time_last_used: S,
              };
            n.pix = R;
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              t,
          );
        }
      }),
        i > 0 &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " invalid custom payment method types: ",
                  "",
                ])),
              i,
              l,
            )
            .sendLogs("monitor-errors"),
        m > 0 &&
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " pix_key values are null",
                ])),
              m,
            )
            .sendLogs("monitor-errors"),
        _ > 0 &&
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " pix_key_type values are null",
                ])),
              _,
            )
            .sendLogs("monitor-errors"),
        f > 0 &&
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " pix_key_type values are invalid: ",
                  "",
                ])),
              f,
              g,
            )
            .sendLogs("monitor-errors"),
        h > 0 &&
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " pix_display_name values are null",
                ])),
              h,
            )
            .sendLogs("monitor-errors"),
        r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(
          o("WAWebUserPrefsKeys").KEYS.CUSTOM_PAYMENT_METHODS,
          n,
        ));
    }
    function g() {
      var e,
        t = (e = _()) == null ? void 0 : e.pix;
      return m(t);
    }
    function h(e, t) {
      return (
        t === void 0 && (t = !1),
        t && e == null ? !0 : typeof e == "string" && e.trim().length > 0
      );
    }
    ((l.getPIX = p),
      (l.isPIXValid = g),
      (l.isStringFieldValid = h),
      (l.setCustomPaymentMethods = f));
  },
  98,
);
