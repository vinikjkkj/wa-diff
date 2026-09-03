__d(
  "WAWebSetSubjectGroupAction",
  [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebBoolFunc",
    "WAWebCommunitySubjectChangePopups.react",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupModifyInfoJob",
    "WAWebGroupType",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebStateUtils",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e, t) {
      return (t === void 0 && (t = ""), p(o("WAWebStateUtils").unproxy(e), t));
    }
    function p(t, r, a) {
      a === void 0 && (a = o("WAWebActionToast.react").genId());
      var i = r.trim();
      if (!i)
        return (u || (u = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      if (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) !==
          o("WAWebGroupType").GroupType.COMMUNITY &&
        i === t.contact.name
      )
        return (u || (u = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var l = o("WAWebGroupModifyInfoJob").setGroupSubject(t.id, i),
        c = t.contact.name,
        m;
      o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) ===
      o("WAWebGroupType").GroupType.COMMUNITY
        ? (m = new (o("WAWebActionToast.react").ActionType)(
            s._(/*BTDS*/ "Renaming community"),
          ))
        : (m = new (o("WAWebActionToast.react").ActionType)(
            s._(/*BTDS*/ "Renaming group"),
          ));
      var _ = s._(/*BTDS*/ "Couldn't rename community"),
        f = l
          .then(function () {
            if (
              o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(
                t.groupMetadata,
              ) === o("WAWebGroupType").GroupType.COMMUNITY
            )
              return new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ 'Community renamed to "{community}"', [
                  s._param("community", i),
                ]),
              );
            var e = c.trim() === "";
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Group renamed to {subject}", [
                s._param("subject", i),
              ]),
              e
                ? null
                : {
                    actionText: s._(/*BTDS*/ "Undo"),
                    actionHandler: function () {
                      return p(t, c, a);
                    },
                  },
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (
                  o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(
                    t.groupMetadata,
                  ) === o("WAWebGroupType").GroupType.COMMUNITY
                ) {
                  if (e.status === 530) {
                    o("WAWebModalManager").ModalManager.open(
                      d.jsx(
                        o("WAWebCommunitySubjectChangePopups.react")
                          .CommunitySubjectHalfSuccessErrorPopup,
                        { parentChat: t },
                      ),
                    );
                    return;
                  } else if (e.status >= 400)
                    return new (o("WAWebActionToast.react").ActionType)(_);
                }
                if (e.status >= 400)
                  return new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't rename group."),
                  );
              },
            ),
          )
          .catch(function (n) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chat:setSubject dropped",
                  ])),
              ),
              o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(
                t.groupMetadata,
              ) === o("WAWebGroupType").GroupType.COMMUNITY
                ? new (o("WAWebActionToast.react").ActionType)(_)
                : new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't rename group."),
                    {
                      actionText: s._(/*BTDS*/ "Try again."),
                      actionHandler: function () {
                        return p(t, i, a);
                      },
                    },
                  )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: a,
            initialAction: m,
            pendingAction: f,
          }),
        ),
        l
          .then(o("WAWebBoolFunc").returnTrue)
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              o("WAWebBoolFunc").returnFalse,
            ),
          )
      );
    }
    l.setGroupSubject = m;
  },
  226,
);
