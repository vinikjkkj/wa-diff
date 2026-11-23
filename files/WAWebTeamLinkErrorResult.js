__d(
  "WAWebTeamLinkErrorResult",
  ["$InternalEnum", "WALogger", "WAWebGraphQLServerError", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        PHONE_NOT_ON_SMB: 4563025,
        ALREADY_ON_COEX: 4563026,
        NOT_ELIGIBLE: 4563029,
        INVITATION_NOT_SENT: 3095078,
        TEAM_LINK_INELIGIBLE: 3095077,
        USER_IS_NOT_AN_ADMIN: 2655073,
      });
    function u(t, n) {
      var r,
        a,
        i = d(n),
        l = (r = (a = i.find(m)) != null ? a : i[0]) != null ? r : null,
        s = c(t, n, l);
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "TeamLink ",
                " failed: ",
                ", code ",
                "",
              ])),
            t,
            s.type,
            l,
          )
          .sendLogs("teamlink-request-failed"),
        s
      );
    }
    function c(e, t, n) {
      var o = n != null ? p(n) : null;
      return o != null
        ? o
        : {
            type: "error",
            error:
              t instanceof Error ? t : r("err")("TeamLink " + e + " failed"),
            code: n,
          };
    }
    function d(e) {
      var t, n;
      return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
        ? ((t = (n = e.source) == null ? void 0 : n.errors) != null ? t : [])
            .map(function (e) {
              var t = e.code;
              return t;
            })
            .filter(function (e) {
              return Number.isInteger(e) && e !== 0;
            })
        : [];
    }
    function m(e) {
      return p(e) != null;
    }
    function p(e) {
      return o("WAWebGraphQLServerError").GraphQLErrorCode.cast(e) ===
        o("WAWebGraphQLServerError").GraphQLErrorCode.RATE_LIMIT_EXCEEDED
        ? { type: "rate-limited" }
        : (function (e) {
            if (e === s.PHONE_NOT_ON_SMB) return { type: "not-smb" };
            if (e === s.ALREADY_ON_COEX) return { type: "already-on-coex" };
            if (e === s.NOT_ELIGIBLE) return { type: "ineligible" };
            if (e === s.INVITATION_NOT_SENT)
              return { type: "invitation-not-sent" };
            if (e === s.TEAM_LINK_INELIGIBLE) return { type: "teamlink-off" };
            if (e === s.USER_IS_NOT_AN_ADMIN) return { type: "not-admin" };
            if (e === void 0) return null;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(s.cast(e));
    }
    l.reportTeamLinkError = u;
  },
  98,
);
