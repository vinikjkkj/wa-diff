__d(
  "WAWebGroupMembershipFormStoredRequests",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebGroupInviteService",
    "WAWebGroupMembershipFormDevStore",
    "WAWebGroupMembershipFormGating",
    "WAWebWidFactory",
    "getErrorSafe",
    "react",
    "useWAWebAsyncRetry",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (u || (u = o("react"))).useEffect,
      d = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormRequestStore",
      ).__setRef("WAWebGroupMembershipFormStoredRequests"),
      m = new Set();
    function p() {
      m.forEach(function (e) {
        return e();
      });
    }
    function _(e) {
      return (
        m.add(e),
        function () {
          m.delete(e);
        }
      );
    }
    function f(e) {
      return o("WAWebGroupMembershipFormDevStore").isGMFDevMode()
        ? Promise.resolve(
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
          : d.load().then(function (t) {
              var n = t.getGroupMembershipFormStoredRequest;
              return n(e);
            });
    }
    function g(e, t) {
      (o("WAWebGroupMembershipFormDevStore").setDevStoredMembershipFormRequest(
        e,
        t,
      ),
        p());
    }
    async function h(t) {
      try {
        if (o("WAWebGroupMembershipFormDevStore").isGMFDevMode())
          o(
            "WAWebGroupMembershipFormDevStore",
          ).setDevStoredMembershipFormRequest(t, null);
        else if (o("WAWebBackendRuntime").isWebDiBackendEnabled())
          await o("WAWebBackendRuntime")
            .runtime(o("WAWebGroupInviteService").GroupInviteService)
            .deleteGroupMembershipFormStoredRequest(t);
        else {
          var n = await d.load(),
            a = n.deleteGroupMembershipFormStoredRequest;
          await a(t);
        }
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[GMF] clearing the stored request failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("gmf-clear-stored-request-failed");
      }
      p();
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
      var t =
          o(
            "WAWebGroupMembershipFormGating",
          ).isGroupMembershipFormJoinEnabled() && e != null,
        n =
          t && (e == null ? void 0 : e.type) === "group"
            ? e.groupId.toString()
            : null,
        a =
          t && (e == null ? void 0 : e.type) === "inviteCode"
            ? e.inviteCode
            : null,
        i = r("useWAWebAsyncRetry")(
          function () {
            var e = null;
            return (
              n != null
                ? (e = {
                    type: "group",
                    groupId: o("WAWebWidFactory").asGroupWidOrThrow(
                      o("WAWebWidFactory").createWid(n),
                    ),
                  })
                : a != null && (e = { type: "inviteCode", inviteCode: a }),
              e == null
                ? Promise.resolve(null)
                : f(e).catch(function (e) {
                    return (
                      o("WALogger")
                        .WARN(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[GMF] stored request read failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("gmf-stored-request-read-failed"),
                      null
                    );
                  })
            );
          },
          [n, a],
        ),
        l = i.retry,
        u = i.value;
      return (
        c(
          function () {
            return _(l);
          },
          [l],
        ),
        u
      );
    }
    ((l.fetchStoredGroupMembershipFormRequest = f),
      (l.saveDevStoredGroupMembershipFormRequest = g),
      (l.clearStoredGroupMembershipFormRequest = h),
      (l.resubmitStoredGroupMembershipFormRequest = y),
      (l.useStoredGroupMembershipFormRequest = C));
  },
  98,
);
