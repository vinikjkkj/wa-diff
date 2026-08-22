__d(
  "WAWebSetSubjectGroupAction",
  [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebCommunitySubjectChangePopups.react",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupModifyInfoJob",
    "WAWebGroupType",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebNoop",
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
    function p(t, a, i) {
      i === void 0 && (i = o("WAWebActionToast.react").genId());
      var l = a.trim();
      if (!l)
        return (u || (u = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      if (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) !==
          o("WAWebGroupType").GroupType.COMMUNITY &&
        l === t.contact.name
      )
        return (u || (u = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var c = o("WAWebGroupModifyInfoJob").setGroupSubject(t.id, l),
        m = t.contact.name,
        _;
      o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) ===
      o("WAWebGroupType").GroupType.COMMUNITY
        ? (_ = new (o("WAWebActionToast.react").ActionType)(
            s._(/*BTDS*/ "Renaming community"),
          ))
        : (_ = new (o("WAWebActionToast.react").ActionType)(
            s._(/*BTDS*/ "Renaming group"),
          ));
      var f = s._(/*BTDS*/ "Couldn't rename community"),
        g = c
          .then(function () {
            if (
              o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(
                t.groupMetadata,
              ) === o("WAWebGroupType").GroupType.COMMUNITY
            )
              return new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ 'Community renamed to "{community}"', [
                  s._param("community", l),
                ]),
              );
            var e = m.trim() === "";
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Group renamed to {subject}", [
                s._param("subject", l),
              ]),
              e
                ? null
                : {
                    actionText: s._(/*BTDS*/ "Undo"),
                    actionHandler: function () {
                      return p(t, m, i);
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
                    return new (o("WAWebActionToast.react").ActionType)(f);
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
                ? new (o("WAWebActionToast.react").ActionType)(f)
                : new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't rename group."),
                    {
                      actionText: s._(/*BTDS*/ "Try again."),
                      actionHandler: function () {
                        return p(t, l, i);
                      },
                    },
                  )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: _,
            pendingAction: g,
          }),
        ),
        c.catch(
          o("WAFilteredCatch").filteredCatch(
            o("WAWebBackendErrors").ServerStatusCodeError,
            r("WAWebNoop"),
          ),
        )
      );
    }
    l.setGroupSubject = m;
  },
  226,
);
