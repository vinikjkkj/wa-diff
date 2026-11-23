__d(
  "WAWebGroupMembershipFormAnswersJob",
  [
    "WALogger",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebGroupGetMembershipApprovalRequestsJob",
    "WAWebGroupMembershipFormAnswersFetchGating",
    "WAWebGroupMembershipFormCrypto",
    "WAWebGroupMembershipFormCryptoTypes",
    "WAWebGroupMembershipFormDevStore",
    "WAWebNoop",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1e3,
      u = new Map();
    function c(e, t) {
      var n = t.debounced;
      if (o("WAWebGroupMembershipFormDevStore").isGMFDevMode())
        return Promise.resolve(!1);
      var a = e.toString(),
        i = u.get(a);
      if (i != null) return (n || i.startNow(), i.refetch);
      var l = r("WAWebNoop"),
        c = n
          ? new Promise(function (e) {
              var t = self.setTimeout(e, s);
              l = function () {
                (self.clearTimeout(t), e());
              };
            })
          : Promise.resolve(),
        d = c
          .then(function () {
            return m(e);
          })
          .finally(function () {
            u.delete(a);
          });
      return (u.set(a, { refetch: d, startNow: l }), d);
    }
    async function d(e, t) {
      var n = await o(
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
    }
    async function m(t) {
      try {
        return (await o(
          "WAWebGroupMembershipFormAnswersFetchGating",
        ).shouldFetchGroupMembershipFormAnswers(t))
          ? (await o(
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
    }
    ((l.scheduleGroupMembershipFormAnswersRefetch = c),
      (l.decodeStoredGroupMembershipFormAnswers = d));
  },
  98,
);
