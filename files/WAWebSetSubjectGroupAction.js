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
      var l, c;
      i === void 0 && (i = o("WAWebActionToast.react").genId());
      var m = a.trim();
      if (!m)
        return (u || (u = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      if (
        ((l = t.groupMetadata) == null ? void 0 : l.groupType) !==
          o("WAWebGroupType").GroupType.COMMUNITY &&
        m === t.contact.name
      )
        return (u || (u = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var _ = o("WAWebGroupModifyInfoJob").setGroupSubject(t.id, m),
        f = t.contact.name,
        g;
      ((c = t.groupMetadata) == null ? void 0 : c.groupType) ===
      o("WAWebGroupType").GroupType.COMMUNITY
        ? (g = new (o("WAWebActionToast.react").ActionType)(
            s._(/*BTDS*/ "Renaming community"),
          ))
        : (g = new (o("WAWebActionToast.react").ActionType)(
            s._(/*BTDS*/ "Renaming group"),
          ));
      var h = s._(/*BTDS*/ "Couldn't rename community"),
        y = _.then(function () {
          var e;
          if (
            ((e = t.groupMetadata) == null ? void 0 : e.groupType) ===
            o("WAWebGroupType").GroupType.COMMUNITY
          )
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ 'Community renamed to "{community}"', [
                s._param("community", m),
              ]),
            );
          var n = f.trim() === "";
          return new (o("WAWebActionToast.react").ActionType)(
            s._(/*BTDS*/ "Group renamed to {subject}", [
              s._param("subject", m),
            ]),
            n
              ? null
              : {
                  actionText: s._(/*BTDS*/ "Undo"),
                  actionHandler: function () {
                    return p(t, f, i);
                  },
                },
          );
        })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                var n;
                if (
                  ((n = t.groupMetadata) == null ? void 0 : n.groupType) ===
                  o("WAWebGroupType").GroupType.COMMUNITY
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
                    return new (o("WAWebActionToast.react").ActionType)(h);
                }
                if (e.status >= 400)
                  return new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't rename group."),
                  );
              },
            ),
          )
          .catch(function (n) {
            var r;
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chat:setSubject dropped",
                  ])),
              ),
              ((r = t.groupMetadata) == null ? void 0 : r.groupType) ===
              o("WAWebGroupType").GroupType.COMMUNITY
                ? new (o("WAWebActionToast.react").ActionType)(h)
                : new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't rename group."),
                    {
                      actionText: s._(/*BTDS*/ "Try again."),
                      actionHandler: function () {
                        return p(t, m, i);
                      },
                    },
                  )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: g,
            pendingAction: y,
          }),
        ),
        _.catch(
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
