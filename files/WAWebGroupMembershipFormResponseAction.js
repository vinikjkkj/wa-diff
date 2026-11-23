__d(
  "WAWebGroupMembershipFormResponseAction",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebGroupMembershipFormCryptoTypes",
    "WAWebGroupMembershipFormDevStore",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupMembershipRequestsService",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 1e4,
      d = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormAnswersJob",
      ).__setRef("WAWebGroupMembershipFormResponseAction"),
      m = new WeakMap();
    function p(e, t) {
      if (
        !(
          t.membershipFormResponse != null ||
          !v(e, t) ||
          !o(
            "WAWebGroupMembershipFormGating",
          ).isGroupMembershipFormReviewEnabled()
        )
      ) {
        var n = m.get(t);
        if (n != null) {
          t.set({ membershipFormResponse: n });
          return;
        }
        C(e, t);
      }
    }
    function _(e, t) {
      (f(t), p(e, t));
    }
    function f(e) {
      (m.delete(e), e.set({ membershipFormResponse: void 0 }));
    }
    function g(t) {
      var n = o("WAWebBackendRuntime").isWebDiBackendEnabled()
        ? o("WAWebBackendRuntime")
            .runtime(
              o("WAWebGroupMembershipRequestsService")
                .GroupMembershipRequestsService,
            )
            .scheduleGroupMembershipFormAnswersRefetch(t, { debounced: !1 })
        : d.load().then(function (e) {
            return e.scheduleGroupMembershipFormAnswersRefetch(t, {
              debounced: !1,
            });
          });
      n.catch(function (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[GMF] membership form answers refetch failed to start",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("gmf-answers-refetch-load-failed");
      });
    }
    function h(e, t) {
      var n;
      ((n = t.membershipFormResponse) == null ? void 0 : n.type) !== "failed" ||
        m.has(t) ||
        C(e, t);
    }
    function y(e) {
      var t = m.get(e);
      t != null &&
        e.membershipFormResponse === t &&
        e.set({ membershipFormResponse: void 0 });
    }
    async function C(e, t) {
      var n = { type: "loading" };
      (m.set(t, n), t.set({ membershipFormResponse: n }));
      var a = null,
        i = null,
        l = !1;
      try {
        a = await b(S(e, t));
      } catch (e) {
        ((l = !0), (i = e));
      }
      if (m.get(t) === n && (m.delete(t), t.membershipFormResponse === n)) {
        var c;
        (l
          ? (o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[GMF] membership form answers failed to load",
                  ])),
              )
              .catching(r("getErrorSafe")(i))
              .sendLogs("gmf-responses-load-failed"),
            (c = { type: "failed" }))
          : a == null
            ? (o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[GMF] membership form answers timed out",
                    ])),
                )
                .sendLogs("gmf-responses-load-timeout"),
              (c = { type: "failed" }))
            : (c = o(
                "WAWebGroupMembershipFormCryptoTypes",
              ).getGroupMembershipFormResponseState(a)),
          t.set({ membershipFormResponse: c }));
      }
    }
    async function b(e) {
      var t,
        n = new Promise(function (e) {
          t = self.setTimeout(function () {
            return e(null);
          }, c);
        });
      try {
        return await Promise.race([e, n]);
      } finally {
        self.clearTimeout(t);
      }
    }
    function v(e, t) {
      return o("WAWebGroupMembershipFormDevStore").isGMFDevMode()
        ? e.isUser() || !t.id.isUser()
          ? !1
          : o("WAWebGroupMembershipFormDevStore").hasDevMembershipFormAnswers(
              o("WAWebWidFactory").asGroupWidOrThrow(e),
              o("WAWebWidFactory").asUserWidOrThrow(t.id),
            )
        : t.hasMembershipFormAnswers;
    }
    function S(e, t) {
      return o("WAWebGroupMembershipFormDevStore").isGMFDevMode()
        ? o("WAWebGroupMembershipFormDevStore")
            .loadDevMembershipFormAnswers(
              o("WAWebWidFactory").asGroupWidOrThrow(e),
              o("WAWebWidFactory").asUserWidOrThrow(t.id),
            )
            .then(function (e) {
              return e != null
                ? e
                : {
                    type: "failure",
                    error: o("WAWebGroupMembershipFormCryptoTypes")
                      .GroupMembershipFormDecodeError.CORRUPT,
                  };
            })
        : o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime")
              .runtime(
                o("WAWebGroupMembershipRequestsService")
                  .GroupMembershipRequestsService,
              )
              .decodeStoredGroupMembershipFormAnswers(e, t.id)
          : d.load().then(function (n) {
              return n.decodeStoredGroupMembershipFormAnswers(e, t.id);
            });
    }
    ((l.maybeLoadGroupMembershipFormResponse = p),
      (l.reloadGroupMembershipFormResponse = _),
      (l.dropGroupMembershipFormResponse = f),
      (l.refetchGroupMembershipFormAnswers = g),
      (l.retryGroupMembershipFormResponse = h),
      (l.cancelGroupMembershipFormResponseLoad = y));
  },
  98,
);
