__d(
  "WAWebSetDescAction",
  [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WARandomHex",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupModifyInfoJob",
    "WAWebGroupType",
    "WAWebMiscErrors",
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
      var l, c, m, _;
      (a === void 0 && (a = ""),
        i === void 0 && (i = o("WAWebActionToast.react").genId()));
      var f = (l = a) == null ? void 0 : l.trim();
      if (f === ((c = t.groupMetadata) == null ? void 0 : c.desc))
        return (u || (u = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      f === "" && (f = null);
      var g = o("WAWebGroupModifyInfoJob").setGroupDescription({
          desc: f,
          groupWid: t.id,
          newDescId: o("WARandomHex").randomHex(8),
          prevDescId: (m = t.groupMetadata) == null ? void 0 : m.descId,
        }),
        h =
          o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(
            t.groupMetadata,
          ) === o("WAWebGroupType").GroupType.COMMUNITY,
        y = (_ = t.groupMetadata) == null ? void 0 : _.desc,
        C = new (o("WAWebActionToast.react").ActionType)(
          h
            ? s._(/*BTDS*/ "Changing community description")
            : s._(/*BTDS*/ "Changing group description"),
        ),
        b = g
          .then(function () {
            return new (o("WAWebActionToast.react").ActionType)(
              h
                ? s._(/*BTDS*/ "Community description changed")
                : s._(/*BTDS*/ "Group description changed"),
              {
                actionText: s._(/*BTDS*/ "Undo"),
                actionHandler: function () {
                  return p(t, y, i);
                },
              },
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (e.status >= 400)
                  return new (o("WAWebActionToast.react").ActionType)(
                    h
                      ? s._(/*BTDS*/ "Couldn't update community description")
                      : s._(/*BTDS*/ "Couldn't update group description"),
                  );
              },
            ),
          )
          .catch(function (n) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chat:setDesc dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                h
                  ? s._(/*BTDS*/ "Community description change failed")
                  : s._(/*BTDS*/ "Group description change failed"),
                {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return p(t, f, i);
                  },
                },
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: C,
            pendingAction: b,
          }),
        ),
        g
          .then(function () {
            var e;
            (e = t.groupMetadata) == null || e.set({ desc: f || "" });
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              r("WAWebNoop"),
            ),
          )
      );
    }
    l.setDesc = m;
  },
  226,
);
