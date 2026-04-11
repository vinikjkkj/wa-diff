__d(
  "WAWebPhoneNumberFormatMutator",
  [
    "WAWebFormatMutator",
    "WAWebInternFormatMutator",
    "WAWebLinkFormatMutator",
    "WAWebMentionFormatMutator",
    "WAWebPhoneNumberMutatorComponent.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            var e = o.fromMe,
              a = o.selectable,
              i = a === void 0 ? !1 : a,
              l = n.phone;
            return s.jsx(r("WAWebPhoneNumberMutatorComponent.react"), {
              phoneNumber: l,
              selectable: i,
              fromMe: e,
            });
          }),
          t
        );
      })(r("WAWebFormatMutator"));
    ((u.format = !1),
      (u.compatibility = !0),
      (u.nestable = function (e) {
        return (
          e !== r("WAWebLinkFormatMutator") &&
          e !== r("WAWebInternFormatMutator") &&
          e !== r("WAWebMentionFormatMutator")
        );
      }),
      (u.match = function (e, t, n) {
        if (!t) return [];
        var r = t.phoneNumbers,
          o = r === void 0 ? [] : r;
        return o.map(c);
      }));
    function c(e) {
      var t = e.index,
        n = e.phone,
        r = t + n.length - 1;
      return [t, t, r, r, e];
    }
    l.default = u;
  },
  98,
);
