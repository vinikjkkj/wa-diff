__d(
  "WAWebGroupMembershipFormSaveJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupMembershipFormCrypto",
    "WAWebGroupMembershipFormProto",
    "WAWebGroupMembershipFormStoreJob",
    "WAWebGroupMembershipFormTypes",
    "WAWebMexFetchGroupInfoJob",
    "WAWebMexUpdateGroupPropertyJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 409,
      c = 413;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a;
            if (n == null)
              return (
                yield o(
                  "WAWebMexUpdateGroupPropertyJob",
                ).mexUpdateGroupPropertyJob(t.toString(), {
                  membership_form: { questions: null },
                }),
                yield p(t, null),
                { type: "success" }
              );
            var i =
              (a = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t)) ==
              null
                ? void 0
                : a.membershipFormKeyId;
            if ((i == null && (i = yield f(t)), i == null)) {
              var l = o(
                "WAWebGroupMembershipFormCrypto",
              ).getGroupMembershipFormKeyProvider();
              if (l == null)
                return {
                  type: "error",
                  code: o("WAWebGroupMembershipFormTypes")
                    .GroupMembershipFormSaveErrorCode.NOT_AVAILABLE,
                };
              if (((i = yield h(t, l)), i == null))
                return {
                  type: "error",
                  code: o("WAWebGroupMembershipFormTypes")
                    .GroupMembershipFormSaveErrorCode.FAILED,
                };
            }
            var s = o(
              "WAWebGroupMembershipFormProto",
            ).encodeGroupMembershipForm(n);
            return (
              yield o(
                "WAWebMexUpdateGroupPropertyJob",
              ).mexUpdateGroupPropertyJob(t.toString(), {
                membership_form: {
                  questions: o(
                    "WAWebGroupMembershipFormProto",
                  ).bytesToXWA2Binary(s),
                },
              }),
              yield p(t, s.slice().buffer, i),
              { type: "success" }
            );
          } catch (t) {
            var u = C(t);
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[gmf] membership form ",
                      " failed: ",
                      "",
                    ])),
                  n == null ? "delete" : "save",
                  u,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("gmf-membership-form-save-failed"),
              { type: "error", code: u }
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            yield o(
              "WAWebGroupMembershipFormStoreJob",
            ).storeGroupMembershipForm(e, t, n);
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[gmf] membership form local store failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("gmf-membership-form-local-store-failed");
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebMexFetchGroupInfoJob",
          ).mexFetchGroupMembershipFormFromGroupInfo(e);
          return t == null
            ? null
            : (yield p(e, t.membershipForm, t.membershipFormKeyId),
              t.membershipFormKeyId);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield t.ensureMembershipFormKey(e),
            r = n.keyId,
            a = n.publicKeyPayload;
          try {
            return (
              yield o(
                "WAWebMexUpdateGroupPropertyJob",
              ).mexUpdateGroupPropertyJob(e.toString(), {
                encryption_keys: {
                  membership_form_key: {
                    key_id: r,
                    public_key_payload: o(
                      "WAWebGroupMembershipFormProto",
                    ).bytesToXWA2Binary(a),
                  },
                },
              }),
              r
            );
          } catch (t) {
            if (
              !(t instanceof o("WAWebBackendErrors").ServerStatusCodeError) ||
              t.status !== u
            )
              throw t;
            return f(e);
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return e instanceof o("WAWebBackendErrors").ServerStatusCodeError
        ? e.status === u
          ? o("WAWebGroupMembershipFormTypes").GroupMembershipFormSaveErrorCode
              .NOT_AVAILABLE
          : e.status === c
            ? o("WAWebGroupMembershipFormTypes")
                .GroupMembershipFormSaveErrorCode.TOO_LARGE
            : o("WAWebGroupMembershipFormTypes")
                .GroupMembershipFormSaveErrorCode.FAILED
        : o("WAWebGroupMembershipFormTypes").GroupMembershipFormSaveErrorCode
            .FAILED;
    }
    l.saveGroupMembershipFormJob = d;
  },
  98,
);
