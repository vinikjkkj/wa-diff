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
      var l, c, m, _, f;
      (a === void 0 && (a = ""),
        i === void 0 && (i = o("WAWebActionToast.react").genId()));
      var g = (l = a) == null ? void 0 : l.trim();
      if (g === ((c = t.groupMetadata) == null ? void 0 : c.desc))
        return (u || (u = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      g === "" && (g = null);
      var h = o("WAWebGroupModifyInfoJob").setGroupDescription(
          t.id,
          g,
          o("WARandomHex").randomHex(8),
          (m = t.groupMetadata) == null ? void 0 : m.descId,
        ),
        y =
          ((_ = t.groupMetadata) == null ? void 0 : _.groupType) ===
          o("WAWebGroupType").GroupType.COMMUNITY,
        C = (f = t.groupMetadata) == null ? void 0 : f.desc,
        b = new (o("WAWebActionToast.react").ActionType)(
          y
            ? s._(/*BTDS*/ "Changing community description")
            : s._(/*BTDS*/ "Changing group description"),
        ),
        v = h
          .then(function () {
            return new (o("WAWebActionToast.react").ActionType)(
              y
                ? s._(/*BTDS*/ "Community description changed")
                : s._(/*BTDS*/ "Group description changed"),
              {
                actionText: s._(/*BTDS*/ "Undo"),
                actionHandler: function () {
                  return p(t, C, i);
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
                    y
                      ? s._(/*BTDS*/ "Community description change failed")
                      : s._(/*BTDS*/ "Group description change failed"),
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
                y
                  ? s._(/*BTDS*/ "Community description change failed")
                  : s._(/*BTDS*/ "Group description change failed"),
                {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return p(t, g, i);
                  },
                },
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: b,
            pendingAction: v,
          }),
        ),
        h
          .then(function () {
            var e;
            (e = t.groupMetadata) == null || e.set({ desc: g || "" });
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
