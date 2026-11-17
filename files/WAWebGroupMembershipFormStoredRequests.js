__d(
  "WAWebGroupMembershipFormStoredRequests",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebGroupInviteService",
    "WAWebGroupMembershipFormDevStore",
    "WAWebGroupMembershipFormGating",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebAsyncRetry",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (c || (c = o("react"))).useEffect,
      m = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormRequestStore",
      ).__setRef("WAWebGroupMembershipFormStoredRequests"),
      p = new Set();
    function _() {
      p.forEach(function (e) {
        return e();
      });
    }
    function f(e) {
      return (
        p.add(e),
        function () {
          p.delete(e);
        }
      );
    }
    function g(e) {
      return o("WAWebGroupMembershipFormDevStore").isGMFDevMode()
        ? (u || (u = n("Promise"))).resolve(
            e.type === "group"
              ? o(
                  "WAWebGroupMembershipFormDevStore",
                ).getDevStoredMembershipFormRequest(e.groupId)
              : o(
                  "WAWebGroupMembershipFormDevStore",
                ).getDevStoredMembershipFormRequestByInviteCode(e.inviteCode),
          )
        : o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime")
              .runtime(o("WAWebGroupInviteService").GroupInviteService)
              .getGroupMembershipFormStoredRequest(e)
          : m.load().then(function (t) {
              var n = t.getGroupMembershipFormStoredRequest;
              return n(e);
            });
    }
    function h(e, t) {
      (o("WAWebGroupMembershipFormDevStore").setDevStoredMembershipFormRequest(
        e,
        t,
      ),
        _());
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if (o("WAWebGroupMembershipFormDevStore").isGMFDevMode())
              o(
                "WAWebGroupMembershipFormDevStore",
              ).setDevStoredMembershipFormRequest(e, null);
            else if (o("WAWebBackendRuntime").isWebDiBackendEnabled())
              yield o("WAWebBackendRuntime")
                .runtime(o("WAWebGroupInviteService").GroupInviteService)
                .deleteGroupMembershipFormStoredRequest(e);
            else {
              var t = yield m.load(),
                n = t.deleteGroupMembershipFormStoredRequest;
              yield n(e);
            }
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[GMF] clearing the stored request failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("gmf-clear-stored-request-failed");
          }
          _();
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
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
        : (h(e.groupId, {
            inviteCode: e.inviteCode,
            answers: t,
            requestId: e.requestId,
            keyId: r.keyId,
          }),
          !0);
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(12),
        a;
      t[0] !== e
        ? ((a =
            o(
              "WAWebGroupMembershipFormGating",
            ).isGroupMembershipFormJoinEnabled() && e != null),
          (t[0] = e),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== i || t[3] !== e
        ? ((l =
            i && (e == null ? void 0 : e.type) === "group"
              ? e.groupId.toString()
              : null),
          (t[2] = i),
          (t[3] = e),
          (t[4] = l))
        : (l = t[4]);
      var s = l,
        c =
          i && (e == null ? void 0 : e.type) === "inviteCode"
            ? e.inviteCode
            : null,
        m,
        p;
      t[5] !== s || t[6] !== c
        ? ((m = function () {
            var e = null;
            return (
              s != null
                ? (e = {
                    type: "group",
                    groupId: o("WAWebWidFactory").asGroupWidOrThrow(
                      o("WAWebWidFactory").createWid(s),
                    ),
                  })
                : c != null && (e = { type: "inviteCode", inviteCode: c }),
              e == null
                ? (u || (u = n("Promise"))).resolve(null)
                : g(e).catch(S)
            );
          }),
          (p = [s, c]),
          (t[5] = s),
          (t[6] = c),
          (t[7] = m),
          (t[8] = p))
        : ((m = t[7]), (p = t[8]));
      var _ = r("useWAWebAsyncRetry")(m, p),
        h = _.retry,
        y = _.value,
        C,
        b;
      return (
        t[9] !== h
          ? ((C = function () {
              return f(h);
            }),
            (b = [h]),
            (t[9] = h),
            (t[10] = C),
            (t[11] = b))
          : ((C = t[10]), (b = t[11])),
        d(C, b),
        y
      );
    }
    function S(t) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[GMF] stored request read failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("gmf-stored-request-read-failed"),
        null
      );
    }
    ((l.fetchStoredGroupMembershipFormRequest = g),
      (l.saveDevStoredGroupMembershipFormRequest = h),
      (l.clearStoredGroupMembershipFormRequest = y),
      (l.resubmitStoredGroupMembershipFormRequest = b),
      (l.useStoredGroupMembershipFormRequest = v));
  },
  98,
);
