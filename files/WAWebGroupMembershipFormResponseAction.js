__d(
  "WAWebGroupMembershipFormResponseAction",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebGroupMembershipFormCryptoTypes",
    "WAWebGroupMembershipFormDevStore",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupMembershipRequestsService",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 1e4,
      m = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormAnswersJob",
      ).__setRef("WAWebGroupMembershipFormResponseAction"),
      p = new WeakMap();
    function _(e, t) {
      if (
        !(
          t.membershipFormResponse != null ||
          !L(e, t) ||
          !o(
            "WAWebGroupMembershipFormGating",
          ).isGroupMembershipFormReviewEnabled()
        )
      ) {
        var n = p.get(t);
        if (n != null) {
          t.set({ membershipFormResponse: n });
          return;
        }
        b(e, t);
      }
    }
    function f(e, t) {
      (g(t), _(e, t));
    }
    function g(e) {
      (p.delete(e), e.set({ membershipFormResponse: void 0 }));
    }
    function h(t) {
      var n = o("WAWebBackendRuntime").isWebDiBackendEnabled()
        ? o("WAWebBackendRuntime")
            .runtime(
              o("WAWebGroupMembershipRequestsService")
                .GroupMembershipRequestsService,
            )
            .scheduleGroupMembershipFormAnswersRefetch(t, { debounced: !1 })
        : m.load().then(function (e) {
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
    function y(e, t) {
      var n;
      ((n = t.membershipFormResponse) == null ? void 0 : n.type) !== "failed" ||
        p.has(t) ||
        b(e, t);
    }
    function C(e) {
      var t = p.get(e);
      t != null &&
        e.membershipFormResponse === t &&
        e.set({ membershipFormResponse: void 0 });
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = { type: "loading" };
          (p.set(t, n), t.set({ membershipFormResponse: n }));
          var a = null,
            i = null,
            l = !1;
          try {
            a = yield S(E(e, t));
          } catch (e) {
            ((l = !0), (i = e));
          }
          if (p.get(t) === n && (p.delete(t), t.membershipFormResponse === n)) {
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
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r = new (c || (c = n("Promise")))(function (e) {
              t = self.setTimeout(function () {
                return e(null);
              }, d);
            });
          try {
            return yield (c || (c = n("Promise"))).race([e, r]);
          } finally {
            self.clearTimeout(t);
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return o("WAWebGroupMembershipFormDevStore").isGMFDevMode()
        ? e.isUser() || !t.id.isUser()
          ? !1
          : o("WAWebGroupMembershipFormDevStore").hasDevMembershipFormAnswers(
              o("WAWebWidFactory").asGroupWidOrThrow(e),
              o("WAWebWidFactory").asUserWidOrThrow(t.id),
            )
        : t.hasMembershipFormAnswers;
    }
    function E(e, t) {
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
          : m.load().then(function (n) {
              return n.decodeStoredGroupMembershipFormAnswers(e, t.id);
            });
    }
    ((l.maybeLoadGroupMembershipFormResponse = _),
      (l.reloadGroupMembershipFormResponse = f),
      (l.dropGroupMembershipFormResponse = g),
      (l.refetchGroupMembershipFormAnswers = h),
      (l.retryGroupMembershipFormResponse = y),
      (l.cancelGroupMembershipFormResponseLoad = C));
  },
  98,
);
