__d(
  "WAWebOrgMembershipUsyncJob",
  [
    "WALogger",
    "WAWebDBOrg",
    "WAWebMexGetTypename",
    "WAWebMexUsync",
    "WAWebSchemaOrg",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return f(Array.from(new Set(e)), 0);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t >= e.length) return { rows: [], statusByLid: new Map() };
          var n = yield h(e.slice(t, t + c)),
            r = yield f(e, t + c);
          return {
            rows: [].concat(n.rows, r.rows),
            statusByLid: new Map(
              [].concat(Array.from(n.statusByLid), Array.from(r.statusByLid)),
            ),
          };
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield b(e),
              n = new Map(),
              a = new Map();
            e.forEach(function (e) {
              var r = C(t.get(e), e, n);
              a.set(e, r);
            });
            var i = yield o("WAWebDBOrg").replaceOrgMembershipsForLids(n);
            return { rows: i, statusByLid: a };
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-affiliations] USync membership sync failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("org-affiliations-resolution-failed"),
              {
                rows: [],
                statusByLid: new Map(
                  e.map(function (e) {
                    return [e, { backoffMs: d, status: "retry" }];
                  }),
                ),
              }
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(t, n, r) {
      if (t == null || t.status === "omitted") return { status: "omitted" };
      if (t.status === "failed") {
        if (t.error.retryable) {
          var a;
          return {
            backoffMs: (a = t.error.backoffMs) != null ? a : d,
            status: "retry",
          };
        }
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-affiliations] membership lookup rejected without retry",
                ])),
            )
            .sendLogs("org-affiliations-rejected"),
          { status: "invalid" }
        );
      }
      var i = L(t.memberships);
      return i == null
        ? (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-affiliations] malformed complete membership response",
                ])),
            )
            .sendLogs("org-affiliations-malformed-complete-response"),
          { status: "invalid" })
        : (r.set(n, i), { status: "answered" });
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            a = yield o("WAWebMexUsync").mexUsyncQuery({
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
                  var t = S(e.jid, r);
                  t != null && n.set(t, R(e.orgs_info));
                }),
              r.forEach(function (e, t) {
                n.has(t) || n.set(t, { status: "omitted" });
              }),
              n);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      try {
        var n = o("WAWebWidFactory").createWid(e);
        return n.isLid() && t.has(n.user) ? n.user : null;
      } catch (e) {
        return null;
      }
    }
    function R(e) {
      if (e == null) return { status: "omitted" };
      var t = o("WAWebMexGetTypename").getTypename(e);
      return t === "XWA2Orgs" && "orgs" in e
        ? e.orgs == null
          ? { status: "omitted" }
          : {
              memberships: e.orgs.map(function (e) {
                return {
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
    function L(e) {
      var t = e.map(function (e) {
        var t,
          n,
          r = o("WAWebSchemaOrg").OrgMemberRole.cast(e.role);
        return e.org_id == null || e.org_id === "" || r == null
          ? null
          : {
              memberName: (t = e.display_name) != null ? t : "",
              memberTag: (n = e.member_tag) != null ? n : "",
              orgId: e.org_id,
              role: r,
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
