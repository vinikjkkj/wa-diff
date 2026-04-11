__d(
  "WAWebSendNotSpamAction",
  [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebChatGetters",
    "WAWebSendNotSpamJob",
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
      return p(o("WAWebStateUtils").unproxy(e), t);
    }
    function p(t, a, i) {
      (a === void 0 && (a = !1),
        i === void 0 && (i = o("WAWebActionToast.react").genId()));
      var l = t.notSpam,
        c = t.promises;
      if (l) return (u || (u = n("Promise"))).resolve();
      if (c.sendNotSpam) return c.sendNotSpam;
      var m = (c.sendNotSpam = r("WAWebSendNotSpamJob")(t));
      if (a) {
        var _ = new (o("WAWebActionToast.react").ActionType)(
            s._(/*BTDS*/ "Marking as not spam"),
          ),
          f = m
            .then(function () {
              return new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Marked as not spam"),
              );
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").ServerStatusCodeError,
                function () {
                  return new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't mark as not spam"),
                  );
                },
              ),
            )
            .catch(function (n) {
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "models:chat:sendNotSpam dropped",
                    ])),
                ),
                new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "Couldn't mark as not spam"),
                  {
                    actionText: s._(/*BTDS*/ "Try again."),
                    actionHandler: function () {
                      return p(t, a, i);
                    },
                  },
                )
              );
            });
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: _,
            pendingAction: f,
          }),
        );
      }
      return m
        .then(function () {
          if ((t.set({ notSpam: !0 }), o("WAWebChatGetters").getIsGroup(t))) {
            var e;
            (e = t.groupMetadata) == null || e.set({ trusted: !0 });
          }
        })
        .finally(function () {
          (t.isTrusted(), (c.sendNotSpam = null));
        });
    }
    l.default = m;
  },
  226,
);
