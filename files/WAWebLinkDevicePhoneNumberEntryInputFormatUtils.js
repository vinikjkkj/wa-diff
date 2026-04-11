__d(
  "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
  ["WACcToIso", "WAIsoToCc", "WALogger", "WAPhoneFindCC", "WAWebPhoneUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.countryCodeIso,
        n = e.phoneNumberWithoutCountryCode;
      if (t == null) return u(n);
      var a = r("WAIsoToCc")[t],
        i = o("WAWebPhoneUtils").compileCountryRegexes(String(a));
      if (i == null) return null;
      var l = _("" + r("WAIsoToCc")[t] + n),
        s = l.phoneNumberWithoutCountryCode,
        p = c(i),
        f = Math.max.apply(Math, p);
      if (s.length > f) return u(s);
      var g = p
        .filter(function (e) {
          return e >= s.length;
        })
        .map(function (e) {
          return d(s, e);
        });
      for (var h of i.formats) {
        var y = h.testAndFormat(s);
        if (y != null) return { formattedInputValue: y, placeholder: "" };
        for (var C of g) {
          var b = h.testAndFormat(C);
          if (b != null)
            return m({
              phoneNumberWithoutCountryCode: s,
              formattedPaddedNumber: b,
            });
        }
      }
      return u(s);
    }
    function u(e) {
      return { formattedInputValue: e, placeholder: "" };
    }
    function c(e) {
      var t = e.lengths;
      return typeof t == "number"
        ? [t]
        : t.sort(function (e, t) {
            return e - t;
          });
    }
    function d(e, t) {
      return e + "_".repeat(t - e.length);
    }
    function m(e) {
      var t = e.formattedPaddedNumber,
        n = e.phoneNumberWithoutCountryCode;
      if (n === "") return { formattedInputValue: "", placeholder: t };
      var r = Array.from(t.matchAll(/\d/g)),
        o = r.pop().index,
        a = o + 1;
      return { formattedInputValue: t.substr(0, a), placeholder: t.substr(a) };
    }
    function p(e, t, n) {
      var r = o("WAWebPhoneUtils").compileCountryRegexes(String(e));
      return r == null
        ? !1
        : r.formats.some(function (e) {
            return e.testAndFormat(t) != null;
          }) ||
            o("WAWebPhoneUtils").isValidMobileForRegistration(String(e), t, n);
    }
    function _(e) {
      var t = e.replaceAll(/[^\d]/g, ""),
        n = f(t),
        o = t;
      if (n != null) {
        var a = r("WAIsoToCc")[n];
        o = o.replace(new RegExp("^" + a), "");
      }
      return {
        countryCodeIso: n,
        phoneNumberWithoutCountryCode: o,
        fullRawPhoneNumber: t,
      };
    }
    function f(e) {
      var t = o("WAPhoneFindCC").findCC(e);
      return r("WACcToIso")[parseInt(t, 10)];
    }
    function g(t, n, r) {
      var a = f(t);
      a !== n &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[compareCountryCodeOutput] Country code mismatch in ",
                "",
              ])),
            r,
          )
          .sendLogs("country-code-mismatch", { sampling: 0.01 });
    }
    function h(e, t, n) {
      if (t == null) {
        var r = e ? "+" : "";
        return "" + r + n;
      }
      return "+" + t + " " + n;
    }
    ((l.formatPhoneNumberInput = s),
      (l.isPhoneNumberValid = p),
      (l.cleanPhoneNumberInputValue = _),
      (l.getCountryCodeIso = f),
      (l.compareCountryCodeOutput = g),
      (l.getFullFormattedInputValue = h));
  },
  98,
);
