__d(
  "WAWebOrgAdminBulkGroupNaming",
  [],
  function (t, n, r, o, a, i) {
    var e = "{value}",
      l = "{organization}",
      s = /\{(member_tag|organization|secondary_member_tag|value)\}/g,
      u = " \xB7 ";
    function c(t, n) {
      n === void 0 && (n = []);
      var r = v(t),
        o = r === "" ? e : e + " \xB7 " + l;
      return (
        n.length > 1 &&
          (o = n
            .map(function (e) {
              return "{" + e + "}";
            })
            .join(u)),
        { organizationName: r, pattern: o }
      );
    }
    function d(e, t) {
      var n = t.map(function (e) {
        var t = e.value;
        return v(t);
      });
      return e.pattern
        .replace(s, function (r, o) {
          var a;
          return o === "organization"
            ? e.organizationName
            : o === "value"
              ? n.join(u)
              : (a =
                    n[
                      t.findIndex(function (e) {
                        var t = e.tag;
                        return t === o;
                      })
                    ]) != null
                ? a
                : "";
        })
        .replace(/\s+/g, " ")
        .trim();
    }
    function m(e, t) {
      return t.every(function (t) {
        return e.includes("{" + t + "}");
      });
    }
    function p(e) {
      var t = [],
        n = [],
        r = 0;
      for (var o of e.matchAll(s))
        (t.push(e.slice(r, o.index)),
          n.push(b(o[1])),
          (r = o.index + o[0].length));
      return (t.push(e.slice(r)), { texts: t, tokens: n });
    }
    function _(e) {
      var t = e.texts,
        n = e.tokens;
      return (
        t[0] +
        n
          .map(function (e, n) {
            return "{" + e + "}" + t[n + 1];
          })
          .join("")
      );
    }
    function f(e, t) {
      var n = e.texts,
        r = e.tokens,
        o = n[t];
      return (
        t === r.length - 1 &&
          (o = t === 0 ? (n[0] + n[1]).trimStart() : n[t + 1]),
        {
          texts: [].concat(n.slice(0, t), [o], n.slice(t + 2)),
          tokens: r.filter(function (e, n) {
            return n !== t;
          }),
        }
      );
    }
    function g(e, t) {
      var n = e.texts,
        r = e.tokens;
      if (r.length === 0) {
        var o = n[0].trim();
        return { texts: ["", o === "" ? "" : " " + o], tokens: [t] };
      }
      return {
        texts: [].concat(n.slice(0, -1), [u, n[n.length - 1]]),
        tokens: [].concat(r, [t]),
      };
    }
    function h(e, t, n) {
      var r = e.texts,
        o = e.tokens,
        a = o.filter(function (e, n) {
          return n !== t;
        });
      return { texts: r, tokens: [].concat(a.slice(0, n), [o[t]], a.slice(n)) };
    }
    function y(e) {
      if (e == null) return null;
      var t = v(e);
      return t === "" ? null : t;
    }
    function C(e) {
      return v(e).toLowerCase();
    }
    function b(e) {
      return e === "member_tag"
        ? "member_tag"
        : e === "organization"
          ? "organization"
          : e === "secondary_member_tag"
            ? "secondary_member_tag"
            : "value";
    }
    function v(e) {
      return e.normalize("NFKC").trim().replace(/\s+/g, " ");
    }
    ((i.ORG_ADMIN_BULK_GROUP_VALUE_TOKEN = e),
      (i.ORG_ADMIN_BULK_GROUP_ORGANIZATION_TOKEN = l),
      (i.getDefaultOrgAdminBulkGroupNameTemplate = c),
      (i.formatOrgAdminBulkGroupName = d),
      (i.hasOrgAdminBulkGroupNameTokens = m),
      (i.getOrgAdminBulkGroupNameParts = p),
      (i.getOrgAdminBulkGroupNamePattern = _),
      (i.removeOrgAdminBulkGroupNameToken = f),
      (i.addOrgAdminBulkGroupNameToken = g),
      (i.moveOrgAdminBulkGroupNameToken = h),
      (i.normalizeOrgAdminBulkGroupMemberTag = y),
      (i.getOrgAdminBulkGroupMemberTagKey = C));
  },
  66,
);
