__d(
  "WAWebLinkSubgroupsAction",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebCommunityGeneralChatFailedParticipantsModal.react",
    "WAWebGroupCommunityJob",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = o("WAWebGroupCommunityJob").sendLinkSubgroups({
              parentGroupId: t,
              subgroupIds: a,
            }),
            l = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var t = yield i;
                if (t.failedGroups.length > 0) {
                  var n = t.failedGroups.reduce(function (e, t) {
                    return e && t.error === 406;
                  }, !0);
                  return n
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
                      c.jsx(
                        r(
                          "WAWebCommunityGeneralChatFailedParticipantsModal.react",
                        ),
                        { failedParticipantJids: t.failedParticipantJids },
                      ),
                    ),
                  new (o("WAWebActionToast.react").ActionType)(
                    s._(
                      /*BTDS*/ '_j{"*":"Groups linked","_1":"Group linked"}',
                      [s._plural(a.length)],
                    ),
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
                    s._(
                      /*BTDS*/ "Subgroup could not be linked. Please try again.",
                    ),
                  )
                );
              }
            })(),
            u = new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ '_j{"*":"Linking groups","_1":"Linking group"}', [
                s._plural(a.length),
              ]),
            );
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              initialAction: u,
              pendingAction: l,
            }),
          );
          try {
            yield i;
          } catch (e) {
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              r("WAWebNoop"),
            )(e);
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  226,
);
