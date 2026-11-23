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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 409,
      c = 413;
    async function d(t, n) {
      try {
        var a;
        if (n == null)
          return (
            await o("WAWebMexUpdateGroupPropertyJob").mexUpdateGroupPropertyJob(
              t.toString(),
              { membership_form: { questions: null } },
            ),
            await m(t, null),
            { type: "success" }
          );
        var i =
          (a = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t)) ==
          null
            ? void 0
            : a.membershipFormKeyId;
        if ((i == null && (i = await p(t)), i == null)) {
          var l = o(
            "WAWebGroupMembershipFormCrypto",
          ).getGroupMembershipFormKeyProvider();
          if (l == null)
            return {
              type: "error",
              code: o("WAWebGroupMembershipFormTypes")
                .GroupMembershipFormSaveErrorCode.NOT_AVAILABLE,
            };
          if (((i = await _(t, l)), i == null))
            return {
              type: "error",
              code: o("WAWebGroupMembershipFormTypes")
                .GroupMembershipFormSaveErrorCode.FAILED,
            };
        }
        var s = o("WAWebGroupMembershipFormProto").encodeGroupMembershipForm(n);
        return (
          await o("WAWebMexUpdateGroupPropertyJob").mexUpdateGroupPropertyJob(
            t.toString(),
            {
              membership_form: {
                questions: o("WAWebGroupMembershipFormProto").bytesToXWA2Binary(
                  s,
                ),
              },
            },
          ),
          await m(t, s.slice().buffer, i),
          { type: "success" }
        );
      } catch (t) {
        var u = f(t);
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
    }
    async function m(e, t, n) {
      try {
        await o("WAWebGroupMembershipFormStoreJob").storeGroupMembershipForm(
          e,
          t,
          n,
        );
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
    }
    async function p(e) {
      var t = await o(
        "WAWebMexFetchGroupInfoJob",
      ).mexFetchGroupMembershipFormFromGroupInfo(e);
      return t == null
        ? null
        : (await m(e, t.membershipForm, t.membershipFormKeyId),
          t.membershipFormKeyId);
    }
    async function _(e, t) {
      var n = await t.ensureMembershipFormKey(e),
        r = n.keyId,
        a = n.publicKeyPayload;
      try {
        return (
          await o("WAWebMexUpdateGroupPropertyJob").mexUpdateGroupPropertyJob(
            e.toString(),
            {
              encryption_keys: {
                membership_form_key: {
                  key_id: r,
                  public_key_payload: o(
                    "WAWebGroupMembershipFormProto",
                  ).bytesToXWA2Binary(a),
                },
              },
            },
          ),
          r
        );
      } catch (t) {
        if (
          !(t instanceof o("WAWebBackendErrors").ServerStatusCodeError) ||
          t.status !== u
        )
          throw t;
        return p(e);
      }
    }
    function f(e) {
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
