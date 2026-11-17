__d(
  "WAWebGroupMembershipFormActions",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebGroupMembershipFormDevStore",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupMembershipFormTypes",
    "WAWebGroupSettingsService",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormSaveJob",
      ).__setRef("WAWebGroupMembershipFormActions");
    function c(e, t) {
      return _(e, t);
    }
    function d(e) {
      return _(e, null);
    }
    function m() {
      return (
        o("WAWebGroupMembershipFormDevStore").isGMFDevMode() ||
        o(
          "WAWebGroupMembershipFormGating",
        ).isGroupMembershipFormSettingEnabled()
      );
    }
    function p(t) {
      d(t).catch(function (t) {
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
    function _(e, t) {
      if (!m())
        return (s || (s = n("Promise"))).reject(
          new (o("WAWebGroupMembershipFormTypes").GroupMembershipFormSaveError)(
            o("WAWebGroupMembershipFormTypes").GroupMembershipFormSaveErrorCode
              .NOT_AVAILABLE,
          ),
        );
      if (o("WAWebGroupMembershipFormDevStore").isGMFDevMode())
        return (
          o("WAWebGroupMembershipFormDevStore").saveDevMembershipForm(e, t),
          (s || (s = n("Promise"))).resolve()
        );
      var r = o("WAWebBackendRuntime").isWebDiBackendEnabled()
        ? o("WAWebBackendRuntime")
            .runtime(o("WAWebGroupSettingsService").GroupSettingsService)
            .saveGroupMembershipForm(e, t)
        : u.load().then(function (n) {
            var r = n.saveGroupMembershipFormJob;
            return r(e, t);
          });
      return r.then(function (e) {
        if (e.type === "error")
          throw new (o(
            "WAWebGroupMembershipFormTypes",
          ).GroupMembershipFormSaveError)(e.code);
      });
    }
    ((l.saveGroupMembershipForm = c),
      (l.deleteGroupMembershipForm = d),
      (l.isGroupMembershipFormWriteAvailable = m),
      (l.deleteGroupMembershipFormInBackground = p));
  },
  98,
);
