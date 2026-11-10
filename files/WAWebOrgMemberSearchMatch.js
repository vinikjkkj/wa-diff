__d(
  "WAWebOrgMemberSearchMatch",
  [
    "WAWebPhoneNumberSearch",
    "WAWebSearchUtils",
    "WAWebSimpleSearch",
    "WAWebUsernameTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 25,
      u = 4,
      c = /^[\d\s+()\-.\u2010-\u2015]+$/;
    function d(t) {
      return t.replace(/\s/g, "").length >= e;
    }
    function m(e) {
      var t = o("WAWebSearchUtils").normalizeString(e.trim());
      return t.startsWith("@") ? t.slice(1).trim() : t;
    }
    function p(e, t) {
      return t === ""
        ? !1
        : o("WAWebSimpleSearch").simpleSearch(t, [e.memberName]) ||
            _(e.username, t);
    }
    function _(e, t) {
      var n = o("WAWebUsernameTypes").serializeMaybeUsername(e);
      return (
        t !== "" &&
        n != null &&
        o("WAWebSearchUtils").normalizeString(n).startsWith(t)
      );
    }
    function f(e) {
      return c.test(h(e));
    }
    function g(e, t) {
      var n = h(t);
      if (e == null || !c.test(n)) return !1;
      var r = e.replace(/\D/g, "");
      return C(n.replace(/\D/g, "")).some(function (e) {
        return r.includes(e);
      });
    }
    function h(e) {
      return y(
        o("WAWebPhoneNumberSearch")
          .stripInvisibleChars(e)
          .trim()
          .normalize("NFKC"),
      );
    }
    function y(e) {
      return e.replace(/[\u0660-\u0669\u06F0-\u06F9]/g, function (e) {
        var t = e.charCodeAt(0);
        return String(t - (t >= 1776 ? 1776 : 1632));
      });
    }
    function C(e) {
      return [e, e.replace(/^00?/, "")].filter(function (e) {
        return e.length >= u;
      });
    }
    function b(t, n) {
      return n.length >= e && o("WAWebSimpleSearch").simpleSearch(n, [t]);
    }
    function v(e, t, n) {
      var r = m(n),
        o = e.filter(function (e) {
          return p(e, r);
        });
      if (!b(t, r)) return o;
      var a = new Set(o),
        i = e.filter(function (e) {
          return !a.has(e);
        });
      return [].concat(o, i.slice(0, Math.max(0, s - o.length)));
    }
    ((l.isOrgMemberQueryLongEnough = d),
      (l.toOrgMemberQuery = m),
      (l.matchesOrgMember = p),
      (l.matchesOrgMemberUsername = _),
      (l.isOrgMemberPhoneQuery = f),
      (l.matchesOrgMemberPhoneNumber = g),
      (l.findOrgMembers = v));
  },
  98,
);
