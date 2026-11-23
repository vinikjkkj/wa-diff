__d(
  "WAWebLinkSubgroupsAction",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebGroupCommunityJob",
    "WAWebNoop",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    async function d(t, n) {
      var a = o("WAWebGroupCommunityJob").sendLinkSubgroups({
          parentGroupId: t,
          subgroupIds: n,
        }),
        i = (async function () {
          try {
            var t = await a;
            if (t.failedGroups.length > 0) {
              var r = t.failedGroups.reduce(function (e, t) {
                return e && t.error === 406;
              }, !0);
              return r
                ? new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "", [s._plural(t.failedGroups.length)]),
                  )
                : new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "", [s._plural(t.failedGroups.length)]),
                  );
            }
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "", [s._plural(n.length)]),
            );
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Subgroup linking failed",
                    ])),
                )
                .verbose()
                .sendLogs("subgroup-linking-failed"),
              new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""))
            );
          }
        })(),
        l = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "", [s._plural(n.length)]),
        );
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: l,
          pendingAction: i,
        }),
      );
      try {
        await a;
      } catch (e) {
        o("WAFilteredCatch").filteredCatch(
          o("WAWebBackendErrors").ServerStatusCodeError,
          r("WAWebNoop"),
        )(e);
      }
    }
    l.default = d;
  },
  226,
);
