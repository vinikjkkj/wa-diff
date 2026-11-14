__d(
  "WAWebGroupMembershipFormStoredRequests",
  ["WAWebGroupMembershipFormDevStore", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = new Set(),
      c = new Map();
    function d() {
      ((c = new Map()),
        u.forEach(function (e) {
          return e();
        }));
    }
    function m(e) {
      return (
        u.add(e),
        function () {
          u.delete(e);
        }
      );
    }
    function p(e, t) {
      return (c.has(e) || c.set(e, t()), c.get(e));
    }
    function _(e) {
      return o(
        "WAWebGroupMembershipFormDevStore",
      ).getDevStoredMembershipFormRequest(e);
    }
    function f(e) {
      return o(
        "WAWebGroupMembershipFormDevStore",
      ).getDevStoredMembershipFormRequestByInviteCode(e);
    }
    function g(e, t) {
      (o("WAWebGroupMembershipFormDevStore").setDevStoredMembershipFormRequest(
        e,
        t,
      ),
        d());
    }
    function h(e) {
      (o("WAWebGroupMembershipFormDevStore").setDevStoredMembershipFormRequest(
        e,
        null,
      ),
        d());
    }
    function y(e, t) {
      var n;
      if (!o("WAWebGroupMembershipFormDevStore").isGMFDevMode()) return !1;
      var r =
        (n = o(
          "WAWebGroupMembershipFormDevStore",
        ).getDevInviteMembershipFormInfo(e.groupId)) == null
          ? void 0
          : n.key;
      return r == null
        ? !1
        : (g(e.groupId, {
            inviteCode: e.inviteCode,
            answers: t,
            requestId: e.requestId,
            keyId: r.keyId,
          }),
          !0);
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function () {
              return e != null
                ? p("inviteCode:" + e, function () {
                    return f(e);
                  })
                : null;
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        s(m, n)
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function () {
              return e != null
                ? p("group:" + e.toString(), function () {
                    return _(e);
                  })
                : null;
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        s(m, n)
      );
    }
    ((l.getStoredGroupMembershipFormRequest = _),
      (l.getStoredGroupMembershipFormRequestByInviteCode = f),
      (l.saveStoredGroupMembershipFormRequest = g),
      (l.clearStoredGroupMembershipFormRequest = h),
      (l.resubmitStoredGroupMembershipFormRequest = y),
      (l.useStoredGroupMembershipFormRequestByInviteCode = C),
      (l.useStoredGroupMembershipFormRequest = b));
  },
  98,
);
