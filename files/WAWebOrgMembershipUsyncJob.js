__d(
  "WAWebOrgMembershipUsyncJob",
  [
    "WALogger",
    "WAWebDBOrg",
    "WAWebMexGetTypename",
    "WAWebMexUsync",
    "WAWebOrgMemberDisplayName",
    "WAWebSchemaOrg",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 100,
      d = 1e3;
    function m(e) {
      return o("WAWebDBOrg").getOrgContactsByLids(e);
    }
    async function p(e) {
      return _(Array.from(new Set(e)), 0);
    }
    async function _(e, t) {
      if (t >= e.length) return { rows: [], statusByLid: new Map() };
      var n = await f(e.slice(t, t + c)),
        r = await _(e, t + c);
      return {
        rows: [].concat(n.rows, r.rows),
        statusByLid: new Map(
          [].concat(Array.from(n.statusByLid), Array.from(r.statusByLid)),
        ),
      };
    }
    async function f(t) {
      try {
        var n = await h(t),
          a = new Map(),
          i = new Map();
        t.forEach(function (e) {
          var t = g(n.get(e), e, a);
          i.set(e, t);
        });
        var l = await o("WAWebDBOrg").replaceOrgMembershipsForLids(a);
        return { rows: l, statusByLid: i };
      } catch (n) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-affiliations] USync membership sync failed",
                ])),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("org-affiliations-resolution-failed"),
          {
            rows: [],
            statusByLid: new Map(
              t.map(function (e) {
                return [e, { backoffMs: d, status: "retry" }];
              }),
            ),
          }
        );
      }
    }
    function g(e, t, n) {
      if (e == null || e.status === "omitted") return { status: "omitted" };
      if (e.status === "failed") {
        if (e.error.retryable) {
          var r;
          return {
            backoffMs: (r = e.error.backoffMs) != null ? r : d,
            status: "retry",
          };
        }
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-affiliations] membership lookup rejected without retry",
                ])),
            )
            .sendLogs("org-affiliations-rejected"),
          { status: "invalid" }
        );
      }
      var a = b(e.memberships);
      return a == null
        ? (o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-affiliations] malformed complete membership response",
                ])),
            )
            .sendLogs("org-affiliations-malformed-complete-response"),
          { status: "invalid" })
        : (n.set(t, a), { status: "answered" });
    }
    async function h(e) {
      var t,
        n = new Map(),
        r = new Map(
          e.map(function (e) {
            return [
              e,
              o("WAWebWidFactory").createUserLidOrThrow(e, "lid").toJid(),
            ];
          }),
        ),
        a = await o("WAWebMexUsync").mexUsyncQuery({
          users: Array.from(r.values()).map(function (e) {
            return { jid: e };
          }),
          telemetry: { context: "INTERACTIVE" },
          fetch: { orgs: !0 },
        });
      return a.error != null
        ? (r.forEach(function (e, t) {
            n.set(t, { error: a.error, status: "failed" });
          }),
          n)
        : ((t = a.response) == null ||
            t.forEach(function (e) {
              var t = y(e.jid, r);
              t != null && n.set(t, C(e.orgs_info));
            }),
          r.forEach(function (e, t) {
            n.has(t) || n.set(t, { status: "omitted" });
          }),
          n);
    }
    function y(e, t) {
      try {
        var n = o("WAWebWidFactory").createWid(e);
        return n.isLid() && t.has(n.user) ? n.user : null;
      } catch (e) {
        return null;
      }
    }
    function C(e) {
      if (e == null) return { status: "omitted" };
      var t = o("WAWebMexGetTypename").getTypename(e);
      return t === "XWA2Orgs" && "orgs" in e
        ? e.orgs == null
          ? { status: "omitted" }
          : {
              memberships: e.orgs.map(function (e) {
                return {
                  display_last_name: e.display_last_name,
                  display_name: e.display_name,
                  member_tag: e.member_tag,
                  org_id: e.org_id,
                  role: e.role,
                };
              }),
              status: "complete",
            }
        : t === "XWA2ResponseStatus" &&
            "status" in e &&
            (e.status === "EMPTY" || e.status === "NOT_ALLOWED")
          ? { memberships: [], status: "complete" }
          : { status: "omitted" };
    }
    function b(e) {
      var t = e.map(function (e) {
        var t,
          n,
          r,
          a = o("WAWebSchemaOrg").OrgMemberRole.cast(e.role),
          i = o("WAWebOrgMemberDisplayName").getOrgMemberFullName(
            (t = e.display_name) != null ? t : "",
            e.display_last_name,
          );
        return e.org_id == null || e.org_id === "" || a == null
          ? null
          : {
              firstName: (n = e.display_name) != null ? n : "",
              lastName: e.display_last_name,
              memberName: i,
              memberTag: (r = e.member_tag) != null ? r : "",
              orgId: e.org_id,
              role: a,
            };
      });
      return t.some(function (e) {
        return e == null;
      })
        ? null
        : t.flatMap(function (e) {
            return e == null ? [] : [e];
          });
    }
    ((l.loadStoredOrgMemberships = m), (l.syncOrgMemberships = p));
  },
  98,
);
