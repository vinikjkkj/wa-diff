__d(
  "WAWebPhoneUtils",
  [
    "WACountriesV2",
    "WAJids",
    "WAPhoneFindCC",
    "WAWebInflatePhoneRegex",
    "WAWebODS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = (function () {
        function e(e) {
          var t;
          if (Array.isArray(e)) {
            t = e[0];
            var n = e[1];
            (n != null &&
              n !== -1 &&
              (Array.isArray(n) || (n = [n]),
              (this.$3 = n.map(function (e) {
                return new RegExp("^(" + e + ")");
              }))),
              (this.$2 = e[2]));
          } else t = e;
          this.$1 = new RegExp(
            "^" + o("WAWebInflatePhoneRegex").inflatePhoneRegex(t) + "$",
          );
        }
        var t = e.prototype;
        return (
          (t.testAndFormat = function (t) {
            if (!(!this.$1.test(t) || !this.$4(t))) {
              if (typeof this.$2 == "string")
                return t.replace(this.$1, this.$2);
              var e = this.$1.exec(t);
              if (e != null)
                return e.slice(1).join(this.$2 != null ? "-" : " ");
            }
          }),
          (t.$4 = function (t) {
            return (
              !this.$3 ||
              this.$3.some(function (e) {
                return e.test(t);
              })
            );
          }),
          e
        );
      })(),
      u = {};
    function c(e) {
      var t = u,
        n = r("WACountriesV2");
      if (t[e] != null) return t[e];
      var o = n[e] != null ? JSON.parse("[" + n[e] + "]") : null;
      if (o == null) return null;
      var a = o.pop(),
        i = null;
      if (typeof a == "string") {
        var l = a,
          c = o.pop();
        try {
          i = new RegExp("^(?:" + l + ")$");
        } catch (e) {}
        return (t[e] = {
          formats: o.map(function (e) {
            return new s(e);
          }),
          lengths: c,
          validMobileRegex: i,
        });
      }
      return (t[e] = {
        formats: o.map(function (e) {
          return new s(e);
        }),
        lengths: a,
        validMobileRegex: null,
      });
    }
    function d(e) {
      var t = e.length > 0 && e[0] === "+",
        n = t ? e.substring(1) : e,
        r = o("WAPhoneFindCC").findCC(n);
      if (!r) return n;
      var a = n.substring(r.length),
        i = c(r);
      if (!i) return "+" + r + " " + a;
      for (var l = i.formats, s = 0; s < l.length; s++) {
        var u = l[s].testAndFormat(a);
        if (u != null && u !== "") return "+" + r + " " + u;
      }
      return "+" + r + " " + a;
    }
    function m(t) {
      var n = e.get(t);
      return (n == null && ((n = d(t)), e.set(t, n)), n);
    }
    var p = /^\+*[\d ()]+$/;
    function _(e) {
      return p.test(e);
    }
    function f(e, t) {
      if (!/^\d+$/.test(t)) return !1;
      var n = c(e);
      return n
        ? typeof n.lengths == "number"
          ? n.lengths === t.length
          : n.lengths.includes(t.length)
        : !1;
    }
    function g(e, t, n) {
      if (!/^\d+$/.test(t)) return !1;
      var o = c(e);
      if (!o) return !1;
      var a =
        typeof o.lengths == "number"
          ? o.lengths === t.length
          : o.lengths.includes(t.length);
      if (!a) return !1;
      var i = !1;
      if (
        (o.validMobileRegex != null && (i = o.validMobileRegex.test(t)),
        n != null)
      )
        e: {
          if (n === "pn_linking") {
            i
              ? r("WAWebODS").incr("web.pn_linking.v2.success")
              : r("WAWebODS").incr("web.pn_linking.v2.failure");
            break e;
          }
          break e;
        }
      return i;
    }
    function h(e) {
      return m(o("WAJids").phoneNumberFromJid(e));
    }
    ((l.compileCountryRegexes = c),
      (l.formatPhone = m),
      (l.isPotentiallyPhoneNumber = _),
      (l.isPotentiallyValid = f),
      (l.isValidMobileForRegistration = g),
      (l.formattedPhoneNumber = h));
  },
  98,
);
