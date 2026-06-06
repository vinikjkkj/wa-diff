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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = o("WAWebGroupCommunityJob").sendUnlinkSubgroups({
              parentGroupId: t,
              subgroupIds: a,
              removeOrphanMembers: i,
            }),
            u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var t = yield l;
                if (t.failedGroups.length > 0) {
                  var n = t.failedGroups[0],
                    r = n.error === 530;
                  if (r) {
                    var i,
                      u =
                        (i = o("WAWebChatCollection").ChatCollection.get(
                          n.jid,
                        )) == null
                          ? void 0
                          : i.formattedTitle;
                    return new (o("WAWebActionToast.react").ActionType)(
                      u != null
                        ? s._(
                            /*BTDS*/ '"{group-name}" was successfully removed, but not all of its members were removed from the community.',
                            [s._param("group-name", u)],
                          )
                        : s._(
                            /*BTDS*/ "The group was successfully removed, but not all of its members were removed from the community.",
                          ),
                    );
                  }
                }
                return new (o("WAWebActionToast.react").ActionType)(
                  s._(
                    /*BTDS*/ '_j{"*":"Groups unlinked","_1":"Group unlinked"}',
                    [s._plural(a.length)],
                  ),
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
                  new (o("WAWebActionToast.react").ActionType)(
                    s._(
                      /*BTDS*/ "Subgroup could not be unlinked. Please try again.",
                    ),
                  )
                );
              }
            })(),
            d = new (o("WAWebActionToast.react").ActionType)(
              s._(
                /*BTDS*/ '_j{"*":"Unlinking groups","_1":"Unlinking group"}',
                [s._plural(a.length)],
              ),
            );
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              initialAction: d,
              pendingAction: u,
            }),
          );
          try {
            yield l;
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
