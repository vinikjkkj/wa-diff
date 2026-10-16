__d(
  "WAWebHelpersFindPhoneNumbers",
  [
    "WALogger",
    "WAMemoizeCache",
    "WAPhoneFindCC",
    "WAWebPhoneUtils",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = /^[1-9]\d{1,14}$/;
    function m(t) {
      return (
        d.test(t) ||
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "toE164PhoneNumber: input is not 2-15 digits with a non-zero country code",
                ])),
            )
            .sendLogs("to-e164-phone-number-invalid-input"),
        "+" + t.replace(/\D/g, "")
      );
    }
    function p(e) {
      return {
        uniqueId: 0,
        text: e,
        openings: null,
        phoneNumber: "",
        phoneNumberStartsWithPlus: !1,
        phoneNumberLastSignificantCodePoint: -1,
        phoneNumberParenthesesDepth: 0,
        phoneNumberLeadingZeroes: 0,
        phoneNumberCurrentlyMatchingLeadingZeroes: !0,
        parsedPhoneNumbers: null,
      };
    }
    function _(e) {
      e.phoneNumberStartsWithPlus = !0;
    }
    function f(e) {
      e.phoneNumberLastSignificantCodePoint = 46;
    }
    function g(e) {
      e.phoneNumberLastSignificantCodePoint = 45;
    }
    function h(e) {
      e.phoneNumberLastSignificantCodePoint = 32;
    }
    function y(e, t) {
      ((e.phoneNumber += String.fromCodePoint(t)),
        (e.phoneNumberLastSignificantCodePoint = t),
        e.phoneNumberCurrentlyMatchingLeadingZeroes &&
          (t === 48
            ? e.phoneNumberLeadingZeroes++
            : (e.phoneNumberCurrentlyMatchingLeadingZeroes = !1)));
    }
    function C(e, t) {
      if (e.openings != null) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Msg formatting: cannot open a style before closing it",
            ])),
        );
        return;
      }
      ((e.openings = t),
        (e.phoneNumber = ""),
        (e.phoneNumberStartsWithPlus = !1),
        (e.phoneNumberLastSignificantCodePoint = -1),
        (e.phoneNumberParenthesesDepth = 0),
        (e.phoneNumberLeadingZeroes = 0),
        (e.phoneNumberCurrentlyMatchingLeadingZeroes = !0));
    }
    function b(e, t) {
      var n = e.openings;
      if (n == null) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Msg formatting: cannot close a style before opening it",
            ])),
        );
        return;
      }
      var r = 0;
      e.openings = null;
    }
    function v(e, t) {
      if (e.phoneNumberParenthesesDepth === 1) {
        b(e, t);
        return;
      }
      (e.phoneNumberParenthesesDepth++,
        (e.phoneNumberLastSignificantCodePoint = -1));
    }
    var S = o("WAMemoizeCache").memoizeWithArgs(
      function (e) {
        return o("WAPhoneFindCC").findCC(e);
      },
      function (e) {
        return e;
      },
    );
    function R(e) {
      return e != null && e.openings != null;
    }
    function L(e, t) {
      var n = E(e, t);
      return n == null
        ? !1
        : (b(e, t),
          e.parsedPhoneNumbers
            ? e.parsedPhoneNumbers.push(n)
            : (e.parsedPhoneNumbers = [n]),
          !0);
    }
    function E(e, t) {
      if (e.openings != null) {
        if (
          e.phoneNumberParenthesesDepth === 1 ||
          (t < e.text.length && e.text[t] === "@")
        )
          return null;
        var n = e.phoneNumber,
          r = n.slice(Math.min(2, e.phoneNumberLeadingZeroes));
        if (r.length === 0) return null;
        var a = !1,
          i = r,
          l = e.phoneNumberStartsWithPlus || e.phoneNumberLeadingZeroes >= 2;
        if (l) {
          var s = o("WAPhoneFindCC").findCC(r),
            u = r.slice(s.length);
          a = o("WAWebPhoneUtils").isPotentiallyValidInternational(s, u);
        } else {
          var c,
            d =
              ((c = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
                ? void 0
                : c.toString()) || "",
            m = S(d);
          if (((a = o("WAWebPhoneUtils").isPotentiallyValid(m, r)), a))
            i = "" + m + r;
          else {
            var p = o("WAPhoneFindCC").findCC(r);
            if (p === m) {
              var _ = r.slice(p.length);
              a = o("WAWebPhoneUtils").isPotentiallyValid(p, _);
            }
          }
        }
        if (a) {
          var f = e.openings;
          if (f == null) return null;
          var g =
              e.phoneNumberLastSignificantCodePoint === 45 ||
              e.phoneNumberLastSignificantCodePoint === 46
                ? t - 1
                : t,
            h = e.text.slice(f, g);
          return {
            start: f,
            end: g,
            id: "phone" + ++e.uniqueId,
            phoneNumber: i,
            matchedText: h,
          };
        }
        return null;
      }
    }
    function k(e, t) {
      L(e, t) || b(e, t);
    }
    function I(e, t) {
      if (
        e.phoneNumberParenthesesDepth === 0 ||
        e.phoneNumberLastSignificantCodePoint < 48 ||
        e.phoneNumberLastSignificantCodePoint > 57
      ) {
        b(e, t);
        return;
      }
      (e.phoneNumberParenthesesDepth--,
        (e.phoneNumberLastSignificantCodePoint = -1));
    }
    function T(e) {
      return e > 65535 ? 2 : 1;
    }
    function D(e) {
      var t = null,
        n = 0;
      try {
        for (var a, i = e.length; n < i; ) {
          var l,
            s = (l = e.codePointAt(n)) != null ? l : NaN,
            u = T(s);
          if (R(t) && (s < 48 || s > 57)) {
            if (s === 45)
              t.phoneNumberParenthesesDepth === 0
                ? t.phoneNumberLastSignificantCodePoint === 45
                  ? k(t, n)
                  : t.phoneNumber.length === 0
                    ? b(t, n)
                    : g(t)
                : b(t, n);
            else if (s === 46)
              t.phoneNumberParenthesesDepth === 0
                ? t.phoneNumberLastSignificantCodePoint === 46
                  ? k(t, n)
                  : t.phoneNumber.length === 0
                    ? b(t, n)
                    : f(t)
                : b(t, n);
            else if (s !== 40)
              if (s === 41) I(t, n);
              else if (s === 32)
                if (t.phoneNumberLastSignificantCodePoint === 32) b(t, n);
                else {
                  var d = L(t, n);
                  d || h(t);
                }
              else k(t, n);
          }
          switch (s) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57: {
              if (n !== 0) {
                var S,
                  E = (S = e.codePointAt(n - 1)) != null ? S : NaN;
                if ((E >= 65 && E <= 90) || (E >= 97 && E <= 122)) break;
              }
              (R(t) || (t || (t = p(e)), C(t, n)), y(t, s));
              break;
            }
            case 43:
              (t || (t = p(e)), C(t, n), _(t));
              break;
            case 40:
              (R(t) || (t || (t = p(e)), C(t, n)), v(t, n));
              break;
          }
          n += u;
        }
        return (
          t && t.openings != null && k(t, e.length),
          (a = t) != null &&
          a.parsedPhoneNumbers &&
          t.parsedPhoneNumbers.length > 0
            ? t.parsedPhoneNumbers.reduce(function (e, t) {
                return (
                  e.push({
                    phone: t.matchedText,
                    index: t.start,
                    canonicalPhone: m(t.phoneNumber),
                  }),
                  e
                );
              }, [])
            : []
        );
      } catch (e) {
        var D = e instanceof Error ? e : r("err")(String(e));
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "findPhoneNumbers parse error",
                ])),
            )
            .catching(D)
            .sendLogs("findPhoneNumbers-error"),
          []
        );
      }
    }
    ((l.toE164PhoneNumber = m), (l.findPhoneNumbers = D));
  },
  98,
);
