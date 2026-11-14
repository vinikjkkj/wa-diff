__d(
  "WAWebGroupMembershipFormResponseAction",
  [
    "Promise",
    "WALogger",
    "WAWebGroupMembershipFormCryptoTypes",
    "WAWebGroupMembershipFormDevStore",
    "WAWebGroupMembershipFormGating",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 1e4,
      d = new WeakMap();
    function m(e, t) {
      if (
        !(
          t.membershipFormResponse != null ||
          !C(e, t.id) ||
          !o(
            "WAWebGroupMembershipFormGating",
          ).isGroupMembershipFormReviewEnabled()
        )
      ) {
        var n = d.get(t);
        if (n != null) {
          t.set({ membershipFormResponse: n });
          return;
        }
        f(e, t);
      }
    }
    function p(e, t) {
      var n;
      ((n = t.membershipFormResponse) == null ? void 0 : n.type) !== "failed" ||
        d.has(t) ||
        f(e, t);
    }
    function _(e) {
      var t = d.get(e);
      t != null &&
        e.membershipFormResponse === t &&
        e.set({ membershipFormResponse: void 0 });
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = { type: "loading" };
          (d.set(n, a), n.set({ membershipFormResponse: a }));
          var i = null,
            l = null,
            u = !1;
          try {
            i = yield h(b(t, n));
          } catch (e) {
            ((u = !0), (l = e));
          }
          if (d.get(n) === a && (d.delete(n), n.membershipFormResponse === a)) {
            var c;
            (u
              ? (o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[GMF] membership form answers failed to load",
                      ])),
                  )
                  .catching(r("getErrorSafe")(l))
                  .sendLogs("gmf-responses-load-failed"),
                (c = { type: "failed" }))
              : i == null
                ? (o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[GMF] membership form answers timed out",
                        ])),
                    )
                    .sendLogs("gmf-responses-load-timeout"),
                  (c = { type: "failed" }))
                : (c = o(
                    "WAWebGroupMembershipFormCryptoTypes",
                  ).getGroupMembershipFormResponseState(i)),
              n.set({ membershipFormResponse: c }));
          }
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
          var t,
            r = new (u || (u = n("Promise")))(function (e) {
              t = self.setTimeout(function () {
                return e(null);
              }, c);
            });
          try {
            return yield (u || (u = n("Promise"))).race([e, r]);
          } finally {
            self.clearTimeout(t);
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return e.isUser() || !t.isUser()
        ? !1
        : o("WAWebGroupMembershipFormDevStore").hasDevMembershipFormAnswers(
            o("WAWebWidFactory").asGroupWidOrThrow(e),
            o("WAWebWidFactory").asUserWidOrThrow(t),
          );
    }
    function b(e, t) {
      return o("WAWebGroupMembershipFormDevStore")
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
        });
    }
    ((l.maybeLoadGroupMembershipFormResponse = m),
      (l.retryGroupMembershipFormResponse = p),
      (l.cancelGroupMembershipFormResponseLoad = _));
  },
  98,
);
