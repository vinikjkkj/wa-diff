__d(
  "WAWebOrgNetworkHomeRows",
  [
    "WAWebOrgAdminTableSort",
    "WAWebOrgMemberDisplayName",
    "WAWebOrgMemberLidEligibility",
    "WAWebOrgMemberPhoneNumber",
    "WAWebPhoneUtils",
    "WAWebSchemaOrg",
    "WAWebUsernameTypes",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e.map(function (e) {
        var n,
          r = (n = e.memberTag) == null ? void 0 : n.trim(),
          a = o("WAWebOrgMemberLidEligibility").parseWAWebOrgMemberLidUser(
            e.id,
          );
        return {
          isAdmin:
            e.role === o("WAWebSchemaOrg").OrgMemberRole.Admin ||
            e.role === o("WAWebSchemaOrg").OrgMemberRole.Creator,
          isViewer: e.id === t.user,
          lid: a,
          member: e,
          name: o(
            "WAWebOrgMemberDisplayName",
          ).getOrgMemberNameWithUsernameFallback(
            e.memberName,
            o("WAWebUsernameTypes").serializeMaybeUsername(e.username),
          ),
          phoneNumber: o(
            "WAWebOrgMemberPhoneNumber",
          ).getOrgMemberShownPhoneNumber(e, a),
          tag: r == null || r === "" ? null : r,
        };
      });
    }
    function s(e, t) {
      return t == null
        ? e
        : e.filter(function (e) {
            return e.tag === t;
          });
    }
    function u(e) {
      var t = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" }),
        n = new Map();
      return (
        e.forEach(function (e, t) {
          var r = t.trim();
          if (r !== "") {
            var o;
            n.set(r, ((o = n.get(r)) != null ? o : 0) + e);
          }
        }),
        Array.from(n, function (e) {
          var t = e[0],
            n = e[1];
          return { count: n, tag: t };
        })
          .filter(function (e) {
            var t = e.count;
            return t > 0;
          })
          .sort(function (e, n) {
            return t.compare(e.tag, n.tag);
          })
      );
    }
    function c(e, t) {
      var n = e.filter(function (e) {
          return e.isViewer;
        }),
        r = o("WAWebOrgAdminTableSort").sortOrgAdminTableRows(
          e.filter(function (e) {
            return !e.isViewer;
          }),
          t,
          d,
          function (e) {
            return e.name;
          },
        );
      return [].concat(n, r);
    }
    function d(e, t) {
      return t === "name"
        ? e.name
        : t === "phone"
          ? e.phoneNumber == null
            ? null
            : o("WAWebPhoneUtils").formatPhone(e.phoneNumber)
          : t === "tag"
            ? e.tag
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })();
    }
    ((l.toOrgNetworkHomeRows = e),
      (l.filterOrgNetworkHomeRowsByTag = s),
      (l.getOrgNetworkHomeTagCounts = u),
      (l.sortOrgNetworkHomeRows = c));
  },
  98,
);
