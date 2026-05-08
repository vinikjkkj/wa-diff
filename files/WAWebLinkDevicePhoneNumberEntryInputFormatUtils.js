__d(
  "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
  [
    "WACcToIso",
    "WAIsoToCc",
    "WALogger",
    "WAPhoneFindCC",
    "WAWebPhoneUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.countryCodeIso,
        n = e.phoneNumberWithoutCountryCode;
      if (t == null) return u(n);
      var a = r("WAIsoToCc")[t],
        i = o("WAWebPhoneUtils").compileCountryRegexes(String(a));
      if (i == null) return null;
      var l = v("" + r("WAIsoToCc")[t] + n),
        s = l.phoneNumberWithoutCountryCode,
        d = c(i),
        m = Math.max.apply(Math, d);
      if (s.length > m) return u(s);
      var p = d
        .filter(function (e) {
          return e >= s.length;
        })
        .map(function (e) {
          return y(s, e);
        });
      for (var _ of i.formats) {
        var f = _.testAndFormat(s);
        if (f != null) return { formattedInputValue: f, placeholder: "" };
        for (var g of p) {
          var h = _.testAndFormat(g);
          if (h != null)
            return C({
              phoneNumberWithoutCountryCode: s,
              formattedPaddedNumber: h,
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
    function d(e) {
      if (e == null) return null;
      var t = r("WAIsoToCc")[e],
        n = o("WAWebPhoneUtils").compileCountryRegexes(String(t));
      return n == null ? null : Math.max.apply(Math, c(n));
    }
    var m = new Map();
    function p(e) {
      if (e == null) return null;
      var t = m.get(e);
      if (t !== void 0) return t;
      var n = _(e);
      return (m.set(e, n), n);
    }
    function _(e) {
      var t = r("WAIsoToCc")[e];
      if (t == null) return null;
      var n = o("WAWebPhoneUtils").compileCountryRegexes(String(t));
      if (n == null) return null;
      var a = Array.from(new Set(c(n))),
        i = a.sort(function (e, t) {
          return t - e;
        });
      if (i.length === 0) return null;
      var l = n.validMobileRegex;
      if (l == null) return i[0];
      for (var s of i) if (h(l, s)) return s;
      return i[0];
    }
    var f = 4,
      g = ["0", "1", "5", "9"];
    function h(e, t) {
      if (t <= 0) return !1;
      for (var n = Math.min(t, f), r = Math.pow(10, n), o = 0; o < r; o++) {
        var a = String(o).padStart(n, "0");
        if (a.length === t) {
          if (e.test(a)) return !0;
          continue;
        }
        for (var i of g) {
          var l = a + i.repeat(t - a.length);
          if (e.test(l)) return !0;
        }
      }
      return !1;
    }
    function y(e, t) {
      return e + "_".repeat(t - e.length);
    }
    function C(e) {
      var t = e.formattedPaddedNumber,
        n = e.phoneNumberWithoutCountryCode;
      if (n === "") return { formattedInputValue: "", placeholder: t };
      var r = Array.from(t.matchAll(/\d/g)),
        o = r.pop().index,
        a = o + 1;
      return { formattedInputValue: t.substr(0, a), placeholder: t.substr(a) };
    }
    function b(e, t, n) {
      var r = o("WAWebPhoneUtils").compileCountryRegexes(String(e));
      return r == null
        ? !1
        : r.formats.some(function (e) {
            return e.testAndFormat(t) != null;
          }) ||
            o("WAWebPhoneUtils").isValidMobileForRegistration(String(e), t, n);
    }
    function v(e) {
      var t = e.replaceAll(/[^\d]/g, ""),
        n = S(t),
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
    function S(e) {
      var t = o("WAPhoneFindCC").findCC(e);
      return r("WACcToIso")[parseInt(t, 10)];
    }
    function R() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user;
      return t != null ? S(t) : "";
    }
    function L(t, n, r) {
      var a = S(t);
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
    function E(e, t, n) {
      if (t == null) {
        var r = e ? "+" : "";
        return "" + r + n;
      }
      return "+" + t + " " + n;
    }
    ((l.formatPhoneNumberInput = s),
      (l.getMaxPhoneNumberLength = d),
      (l.getMaxValidMobileNumberLength = p),
      (l.isPhoneNumberValid = b),
      (l.cleanPhoneNumberInputValue = v),
      (l.getCountryCodeIso = S),
      (l.getMaybeMyCountryCodeIso = R),
      (l.compareCountryCodeOutput = L),
      (l.getFullFormattedInputValue = E));
  },
  98,
);
