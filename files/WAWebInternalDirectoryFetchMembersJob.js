__d(
  "WAWebInternalDirectoryFetchMembersJob",
  [
    "WALogger",
    "WAWebInternalDirectoryFetchMembersJobQuery.graphql",
    "WAWebNoop",
    "WAWebRelayClient",
    "WAWebWidFactory",
    "WAWebWidValidator",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 100,
      d =
        e !== void 0
          ? e
          : (e = n("WAWebInternalDirectoryFetchMembersJobQuery.graphql")),
      m = null,
      p = 0,
      _ = null,
      f = null,
      g = null,
      h = !1,
      y = new Set();
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((P(t), m !== e && k(e), _ != null)) return _;
          var n = p,
            r = g;
          if (r == null) {
            var o = new AbortController();
            ((f = o), (r = L(o.signal)), (g = r));
          }
          try {
            var a = yield r;
            return (
              I(e, n),
              _ == null &&
                ((_ = a),
                y.forEach(function (e) {
                  return e();
                })),
              P(t),
              a
            );
          } catch (t) {
            throw (I(e, n), t);
          } finally {
            g === r && ((f = null), (g = null));
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return m === e ? _ : null;
    }
    function S(e) {
      (m === e && h) ||
        (C(e, new AbortController().signal).catch(r("WAWebNoop")), (h = !0));
    }
    function R(e) {
      return (
        y.add(e),
        function () {
          y.delete(e);
        }
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map(),
            n = { invalidLidCount: 0 };
          try {
            yield T(t, n, null, e, new Set());
          } catch (t) {
            throw (
              e.aborted ||
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[internal-directory] fetching members failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("internal-directory-fetch-failed"),
              t
            );
          }
          return (
            n.invalidLidCount > 0 &&
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Directory returned ",
                      " members with unparseable LIDs",
                    ])),
                  n.invalidLidCount,
                )
                .sendLogs("internal-directory-invalid-lid"),
            Array.from(t.values())
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t;
      ((t = f) == null || t.abort(),
        (f = null),
        (g = null),
        (m = e),
        (p += 1),
        (_ = null),
        (h = !1));
    }
    function I(e, t) {
      if (m !== e || p !== t)
        throw r("err")("Directory request was superseded");
    }
    function T(e, t, n, r, o) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            P(a);
            var l = { after: n, first: c },
              s = yield o("WAWebRelayClient").fetchQuery(d, l, {
                environmentType: "whatsapp_web",
                fetchPolicy: "network-only",
              });
            P(a);
            var u =
              s == null ? void 0 : s.xwa_whatsapp_for_work_employee_directory;
            if (u == null)
              throw r("err")("Directory page is missing its connection");
            x(u.edges, e, t);
            var m = $({ after: n, pageInfo: u.page_info, seenCursors: i });
            if (m != null) return T(e, t, m, a, i);
          },
        )),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      for (var r of e != null ? e : []) {
        var o = r == null ? void 0 : r.node,
          a = N(
            {
              designation: o == null ? void 0 : o.designation,
              enrollmentStatus: o == null ? void 0 : o.enrollment_status,
              lid: o == null ? void 0 : o.lid,
              memberId: o == null ? void 0 : o.member_id,
              name: o == null ? void 0 : o.name,
              team: o == null ? void 0 : o.team,
            },
            n,
          );
        a != null && !t.has(a.memberId) && t.set(a.memberId, a);
      }
    }
    function $(e) {
      var t = e.after,
        n = e.pageInfo,
        o = e.seenCursors;
      if ((n == null ? void 0 : n.has_next_page) !== !0) return null;
      var a = n.end_cursor;
      if (a == null || a === "")
        throw r("err")("Directory page is missing its next cursor");
      if (a === t || o.has(a))
        throw r("err")("Directory pagination returned a repeated cursor");
      return (o.add(a), a);
    }
    function P(e) {
      if (e.aborted) throw r("err")("Directory request was aborted");
    }
    function N(e, t) {
      var n = e.designation,
        r = e.enrollmentStatus,
        o = e.lid,
        a = e.memberId,
        i = e.name,
        l = e.team;
      return a == null || a === "" || i == null || i === ""
        ? null
        : {
            designation: w(n),
            isEnrolled: r === "ENROLLED",
            lid: M(o, t),
            memberId: a,
            name: i,
            team: w(l),
          };
    }
    function M(e, t) {
      if (e == null) return null;
      if (!o("WAWebWidValidator").validateWid(e + "@lid"))
        return ((t.invalidLidCount += 1), null);
      try {
        return o("WAWebWidFactory").createUserLidOrThrow(e, "lid");
      } catch (e) {
        return ((t.invalidLidCount += 1), null);
      }
    }
    function w(e) {
      return e == null || e === "" ? null : e;
    }
    ((l.getCachedInternalDirectoryMembers = C),
      (l.getLoadedInternalDirectoryMembers = v),
      (l.requestInternalDirectoryMembersOnce = S),
      (l.subscribeToInternalDirectoryMembersLoad = R),
      (l.fetchInternalDirectoryMembers = L));
  },
  98,
);
