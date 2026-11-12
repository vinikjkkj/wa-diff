__d(
  "WAWebGroupMembershipFormActions",
  [
    "Promise",
    "WALogger",
    "WAWebGroupMembershipFormDevStore",
    "WAWebGroupMembershipFormTypes",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return p(e, t);
    }
    function c(e) {
      return p(e, null);
    }
    function d() {
      return o("WAWebGroupMembershipFormDevStore").isGMFDevMode();
    }
    function m(t) {
      c(t).catch(function (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[gmf] delete after turning off approval failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("gmf-delete-form-after-approval-off-failed");
      });
    }
    function p(e, t) {
      return d()
        ? (o("WAWebGroupMembershipFormDevStore").saveDevMembershipForm(e, t),
          (s || (s = n("Promise"))).resolve())
        : (s || (s = n("Promise"))).reject(
            new (o(
              "WAWebGroupMembershipFormTypes",
            ).GroupMembershipFormSaveError)(
              o("WAWebGroupMembershipFormTypes")
                .GroupMembershipFormSaveErrorCode.NOT_AVAILABLE,
            ),
          );
    }
    ((l.saveGroupMembershipForm = u),
      (l.deleteGroupMembershipForm = c),
      (l.isGroupMembershipFormWriteAvailable = d),
      (l.deleteGroupMembershipFormInBackground = m));
  },
  98,
);
