__d(
  "WAWebUnlinkSubgroupsAction",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebChatCollection",
    "WAWebGroupCommunityJob",
    "WAWebNoop",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    async function d(t, n, a) {
      var i = o("WAWebGroupCommunityJob").sendUnlinkSubgroups({
          parentGroupId: t,
          subgroupIds: n,
          removeOrphanMembers: a,
        }),
        l = (async function () {
          try {
            var t = await i;
            if (t.failedGroups.length > 0) {
              var r = t.failedGroups[0],
                a = r.error === 530;
              if (a) {
                var l,
                  u =
                    (l = o("WAWebChatCollection").ChatCollection.get(r.jid)) ==
                    null
                      ? void 0
                      : l.formattedTitle;
                return new (o("WAWebActionToast.react").ActionType)(
                  u != null
                    ? s._(/*BTDS*/ "", [s._param("group-name", u)])
                    : s._(/*BTDS*/ ""),
                );
              }
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
                      "Subgroup unlinking failed",
                    ])),
                )
                .verbose()
                .sendLogs("subgroup-unlinking-failed"),
              new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""))
            );
          }
        })(),
        u = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "", [s._plural(n.length)]),
        );
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: u,
          pendingAction: l,
        }),
      );
      try {
        await i;
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
