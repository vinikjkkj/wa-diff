__d(
  "WAWebHelpersFindPhoneNumbers",
  [
    "WALogger",
    "WAPhoneFindCC",
    "WAWebPhoneUtils",
    "WAWebUserPrefsMeUser",
    "err",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
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
    function d(e) {
      e.phoneNumberStartsWithPlus = !0;
    }
    function m(e) {
      e.phoneNumberLastSignificantCodePoint = 46;
    }
    function p(e) {
      e.phoneNumberLastSignificantCodePoint = 45;
    }
    function _(e) {
      e.phoneNumberLastSignificantCodePoint = 32;
    }
    function f(e, t) {
      ((e.phoneNumber += String.fromCodePoint(t)),
        (e.phoneNumberLastSignificantCodePoint = t),
        e.phoneNumberCurrentlyMatchingLeadingZeroes &&
          (t === 48
            ? e.phoneNumberLeadingZeroes++
            : (e.phoneNumberCurrentlyMatchingLeadingZeroes = !1)));
    }
    function g(t, n) {
      if (t.openings != null) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Msg formatting: cannot open a style before closing it",
            ])),
        );
        return;
      }
      ((t.openings = n),
        (t.phoneNumber = ""),
        (t.phoneNumberStartsWithPlus = !1),
        (t.phoneNumberLastSignificantCodePoint = -1),
        (t.phoneNumberParenthesesDepth = 0),
        (t.phoneNumberLeadingZeroes = 0),
        (t.phoneNumberCurrentlyMatchingLeadingZeroes = !0));
    }
    function h(e, t) {
      var n = e.openings;
      if (n == null) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Msg formatting: cannot close a style before opening it",
            ])),
        );
        return;
      }
      var r = 0;
      e.openings = null;
    }
    function y(e, t) {
      if (e.phoneNumberParenthesesDepth === 1) {
        h(e, t);
        return;
      }
      (e.phoneNumberParenthesesDepth++,
        (e.phoneNumberLastSignificantCodePoint = -1));
    }
    var C = r("lodash").memoize(function (e) {
      return o("WAPhoneFindCC").findCC(e);
    });
    function b(e) {
      return e != null && e.openings != null;
    }
    function v(e, t) {
      var n = S(e, t);
      return n == null
        ? !1
        : (h(e, t),
          e.parsedPhoneNumbers
            ? e.parsedPhoneNumbers.push(n)
            : (e.parsedPhoneNumbers = [n]),
          !0);
    }
    function S(e, t) {
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
          a = o("WAWebPhoneUtils").isPotentiallyValid(s, u);
        } else {
          var c,
            d =
              ((c = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
                ? void 0
                : c.toString()) || "",
            m = C(d);
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
    function R(e, t) {
      v(e, t) || h(e, t);
    }
    function L(e, t) {
      if (
        e.phoneNumberParenthesesDepth === 0 ||
        e.phoneNumberLastSignificantCodePoint < 48 ||
        e.phoneNumberLastSignificantCodePoint > 57
      ) {
        h(e, t);
        return;
      }
      (e.phoneNumberParenthesesDepth--,
        (e.phoneNumberLastSignificantCodePoint = -1));
    }
    function E(e) {
      return e > 65535 ? 2 : 1;
    }
    function k(e) {
      var t = null,
        n = 0;
      try {
        for (var a, i = e.length; n < i; ) {
          var l = e.codePointAt(n),
            s = E(l);
          if (b(t) && (l < 48 || l > 57)) {
            if (l === 45)
              t.phoneNumberParenthesesDepth === 0
                ? t.phoneNumberLastSignificantCodePoint === 45
                  ? R(t, n)
                  : t.phoneNumber.length === 0
                    ? h(t, n)
                    : p(t)
                : h(t, n);
            else if (l === 46)
              t.phoneNumberParenthesesDepth === 0
                ? t.phoneNumberLastSignificantCodePoint === 46
                  ? R(t, n)
                  : t.phoneNumber.length === 0
                    ? h(t, n)
                    : m(t)
                : h(t, n);
            else if (l !== 40)
              if (l === 41) L(t, n);
              else if (l === 32)
                if (t.phoneNumberLastSignificantCodePoint === 32) h(t, n);
                else {
                  var C = v(t, n);
                  C || _(t);
                }
              else R(t, n);
          }
          switch (l) {
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
                var S = e.codePointAt(n - 1);
                if ((S >= 65 && S <= 90) || (S >= 97 && S <= 122)) break;
              }
              (b(t) || (t || (t = c(e)), g(t, n)), f(t, l));
              break;
            }
            case 43:
              (t || (t = c(e)), g(t, n), d(t));
              break;
            case 40:
              (b(t) || (t || (t = c(e)), g(t, n)), y(t, n));
              break;
          }
          n += s;
        }
        return (
          t && t.openings != null && R(t, e.length),
          (a = t) != null &&
          a.parsedPhoneNumbers &&
          t.parsedPhoneNumbers.length > 0
            ? t.parsedPhoneNumbers.reduce(function (e, t) {
                return (e.push({ phone: t.matchedText, index: t.start }), e);
              }, [])
            : []
        );
      } catch (e) {
        var k = e instanceof Error ? e : r("err")(String(e));
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "findPhoneNumbers parse error",
                ])),
            )
            .catching(k)
            .sendLogs("findPhoneNumbers-error"),
          []
        );
      }
    }
    l.default = k;
  },
  98,
);
