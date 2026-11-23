__d(
  "WAWebWorkDirectoryFetchMembersJob",
  [
    "WALogger",
    "WAWebCanonicalUtils",
    "WAWebNoop",
    "WAWebRelayClient",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "WAWebWidValidator",
    "WAWebWorkDirectoryFetchMembersJobQuery.graphql",
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
          : (e = n("WAWebWorkDirectoryFetchMembersJobQuery.graphql")),
      m = null,
      p = 0,
      _ = null,
      f = null,
      g = null,
      h = !1,
      y = new Set();
    async function C(e, t) {
      if ((D(t), m !== e && L(e), _ != null)) return _;
      var n = p,
        r = g;
      if (r == null) {
        var o = new AbortController();
        ((f = o), (r = R(o.signal)), (g = r));
      }
      try {
        var a = await r;
        return (
          E(e, n),
          _ == null &&
            ((_ = a),
            y.forEach(function (e) {
              return e();
            })),
          D(t),
          a
        );
      } catch (t) {
        throw (E(e, n), t);
      } finally {
        g === r && ((f = null), (g = null));
      }
    }
    function b(e) {
      return m === e ? _ : null;
    }
    function v() {
      var e,
        t =
          (e = o("WAWebUserUtils").getMaybeMeLidUser()) == null
            ? void 0
            : e.toString();
      t == null ||
        !o("WAWebCanonicalUtils").isCanonicalPresent() ||
        (m === t && h) ||
        (C(t, new AbortController().signal).catch(r("WAWebNoop")), (h = !0));
    }
    function S(e) {
      return (
        y.add(e),
        function () {
          y.delete(e);
        }
      );
    }
    async function R(e) {
      var t = new Map(),
        n = { invalidLidCount: 0 };
      try {
        await k(t, n, null, e, new Set());
      } catch (t) {
        throw (
          e.aborted ||
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[work-directory] fetching members failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("work-directory-fetch-failed"),
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
            .sendLogs("work-directory-invalid-lid"),
        Array.from(t.values())
      );
    }
    function L(e) {
      var t;
      ((t = f) == null || t.abort(),
        (f = null),
        (g = null),
        (m = e),
        (p += 1),
        (_ = null),
        (h = !1));
    }
    function E(e, t) {
      if (m !== e || p !== t)
        throw r("err")("Directory request was superseded");
    }
    async function k(e, t, n, a, i) {
      D(a);
      var l = { after: n, first: c },
        s = await o("WAWebRelayClient").fetchQuery(d, l, {
          environmentType: "whatsapp_web",
          fetchPolicy: "network-only",
        });
      D(a);
      var u = s == null ? void 0 : s.xwa_whatsapp_for_work_employee_directory;
      if (u == null) throw r("err")("Directory page is missing its connection");
      I(u.edges, e, t);
      var m = T({ after: n, pageInfo: u.page_info, seenCursors: i });
      if (m != null) return k(e, t, m, a, i);
    }
    function I(e, t, n) {
      for (var r of e != null ? e : []) {
        var o = r == null ? void 0 : r.node,
          a = x(
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
    function T(e) {
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
    function D(e) {
      if (e.aborted) throw r("err")("Directory request was aborted");
    }
    function x(e, t) {
      var n = e.designation,
        r = e.enrollmentStatus,
        o = e.lid,
        a = e.memberId,
        i = e.name,
        l = e.team;
      return a == null || a === "" || i == null || i === ""
        ? null
        : {
            designation: P(n),
            isEnrolled: r === "ENROLLED",
            lid: $(o, t),
            memberId: a,
            name: i,
            team: P(l),
          };
    }
    function $(e, t) {
      if (e == null) return null;
      if (!o("WAWebWidValidator").validateWid(e + "@lid"))
        return ((t.invalidLidCount += 1), null);
      try {
        return o("WAWebWidFactory").createUserLidOrThrow(e, "lid");
      } catch (e) {
        return ((t.invalidLidCount += 1), null);
      }
    }
    function P(e) {
      return e == null || e === "" ? null : e;
    }
    ((l.getCachedWorkDirectoryMembers = C),
      (l.getLoadedWorkDirectoryMembers = b),
      (l.requestWorkDirectoryMembersOnce = v),
      (l.subscribeToWorkDirectoryMembersLoad = S),
      (l.fetchWorkDirectoryMembers = R));
  },
  98,
);
