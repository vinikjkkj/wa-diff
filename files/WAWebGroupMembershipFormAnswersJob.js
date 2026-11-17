__d(
  "WAWebGroupMembershipFormAnswersJob",
  [
    "Promise",
    "WALogger",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebGroupGetMembershipApprovalRequestsJob",
    "WAWebGroupMembershipFormAnswersFetchGating",
    "WAWebGroupMembershipFormCrypto",
    "WAWebGroupMembershipFormCryptoTypes",
    "WAWebGroupMembershipFormDevStore",
    "WAWebNoop",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1e3,
      c = new Map();
    function d(e, t) {
      var a = t.debounced;
      if (o("WAWebGroupMembershipFormDevStore").isGMFDevMode())
        return (s || (s = n("Promise"))).resolve(!1);
      var i = e.toString(),
        l = c.get(i);
      if (l != null) return (a || l.startNow(), l.refetch);
      var d = r("WAWebNoop"),
        m = a
          ? new (s || (s = n("Promise")))(function (e) {
              var t = self.setTimeout(e, u);
              d = function () {
                (self.clearTimeout(t), e());
              };
            })
          : (s || (s = n("Promise"))).resolve(),
        p = m
          .then(function () {
            return _(e);
          })
          .finally(function () {
            c.delete(i);
          });
      return (c.set(i, { refetch: p, startNow: d }), p);
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebApiMembershipApprovalRequestStore",
          ).getMembershipApprovalRequestFormAnswers(e, t);
          return n == null
            ? {
                type: "failure",
                error: o("WAWebGroupMembershipFormCryptoTypes")
                  .GroupMembershipFormDecodeError.CORRUPT,
              }
            : o("WAWebGroupMembershipFormCrypto")
                .getGroupMembershipFormAnswersDecoder()
                .decode({
                  groupId: o("WAWebWidFactory").asGroupWidOrThrow(e),
                  requesterId: o("WAWebWidFactory").asUserWidOrThrow(t),
                  keyId: n.keyId,
                  payload: new Uint8Array(n.payload),
                });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return (yield o(
              "WAWebGroupMembershipFormAnswersFetchGating",
            ).shouldFetchGroupMembershipFormAnswers(t))
              ? (yield o(
                  "WAWebGroupGetMembershipApprovalRequestsJob",
                ).queryAndUpdateGroupMembershipApprovalRequests(t, !0),
                !0)
              : !1;
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[GMF] membership form answers refetch failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("gmf-answers-refetch-failed"),
              !1
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    ((l.scheduleGroupMembershipFormAnswersRefetch = d),
      (l.decodeStoredGroupMembershipFormAnswers = m));
  },
  98,
);
