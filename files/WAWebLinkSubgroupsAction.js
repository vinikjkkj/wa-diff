__d(
  "WAWebLinkSubgroupsAction",
  [
    "fbt",
    "VultureJSDeadComponent.react",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebGroupCommunityJob",
    "WAWebModalManager",
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
              var i = t.failedGroups.reduce(function (e, t) {
                return e && t.error === 406;
              }, !0);
              return i
                ? new (o("WAWebActionToast.react").ActionType)(
                    s._(
                      /*BTDS*/ '_j{"*":"These groups cannot be added because the community is full.","_1":"This group cannot be added because the community is full."}',
                      [s._plural(t.failedGroups.length)],
                    ),
                  )
                : new (o("WAWebActionToast.react").ActionType)(
                    s._(
                      /*BTDS*/ '_j{"*":"These groups were not linked.","_1":"This group was not linked."}',
                      [s._plural(t.failedGroups.length)],
                    ),
                  );
            }
            return (
              t.failedParticipantJids.length > 0 &&
                o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("VultureJSDeadComponent.react"), {
                    name: "WAWebCommunityGeneralChatFailedParticipantsModal",
                  }),
                ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ '_j{"*":"Groups linked","_1":"Group linked"}', [
                  s._plural(n.length),
                ]),
              )
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
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Subgroup could not be linked. Please try again."),
              )
            );
          }
        })(),
        l = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ '_j{"*":"Linking groups","_1":"Linking group"}', [
            s._plural(n.length),
          ]),
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
