__d(
  "WAWebCustomerManagerSearchValueMatcher",
  [
    "WAWebCustomerManagerChatResolver",
    "WAWebCustomerManagerDateFormatUtils",
    "WAWebL10NAccentFold",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 512;
    function s(e, t, n) {
      var r = o("WAWebL10NAccentFold").accentFold(e);
      if (r.includes(t)) return !0;
      if (n == null) return !1;
      var a = r.replace(/[^0-9]/g, "");
      return a !== "" && a.includes(n);
    }
    function u(e, t, n) {
      if (/^[0-9]{1,7}$/.test(e))
        return function () {
          return !1;
        };
      var r = t != null && t.length >= 8 ? t : null;
      if (!n)
        return function (t) {
          return d(t, e, r);
        };
      var o = c(e, r);
      return function (t) {
        return o(t.birthday) || m(t, e, r);
      };
    }
    function c(t, n) {
      var r = new Map();
      return function (o) {
        if (o == null || o === 0) return !1;
        var a = r.get(o);
        if (a != null) return a;
        var i = _(o, "birthday", t, n);
        return (r.size === e && r.clear(), r.set(o, i), i);
      };
    }
    function d(e, t, n) {
      return _(e.birthday, "birthday", t, n) || m(e, t, n);
    }
    function m(e, t, n) {
      var r;
      return (
        _(
          (r = o("WAWebCustomerManagerChatResolver").resolveCustomerManagerChat(
            e.chatJid,
          )) == null
            ? void 0
            : r.t,
          "instant",
          t,
          n,
        ) || p(e, t, n)
      );
    }
    function p(e, t, n) {
      return (
        _(e.createdAt, "instant", t, n, !1) ||
        _(e.modifiedAt, "instant", t, n, !1)
      );
    }
    function _(e, t, n, r, a) {
      if ((a === void 0 && (a = !0), e == null || e === 0)) return !1;
      var i = new Date(e * 1e3);
      if (!Number.isFinite(i.getTime())) return !1;
      if (s(f(i, t), n, r)) return !0;
      if (!a) return !1;
      var l =
        t === "birthday"
          ? o("WAWebCustomerManagerDateFormatUtils").formatCustomerBirthday(e)
          : t === "instant"
            ? o("WAWebCustomerManagerDateFormatUtils").formatCustomerDate(e)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })();
      return s(l, n, r);
    }
    function f(e, t) {
      var n = t !== "instant",
        r = n ? e.getUTCMonth() + 1 : e.getMonth() + 1,
        o = n ? e.getUTCDate() : e.getDate(),
        a = String(r).padStart(2, "0") + "-" + String(o).padStart(2, "0");
      if (t === "birthday") return a;
      var i = n ? e.getUTCFullYear() : e.getFullYear();
      return i + "-" + a;
    }
    ((l.matchesSearchValue = s), (l.createCustomerDateMatcher = u));
  },
  98,
);
