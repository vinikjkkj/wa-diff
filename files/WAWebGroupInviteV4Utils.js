__d(
  "WAWebGroupInviteV4Utils",
  [
    "Promise",
    "WALogger",
    "WAWebInviteV4QueryGroupAction",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, r) {
      if (t.revokeGroupsV4AddInvitePromise)
        return t.revokeGroupsV4AddInvitePromise;
      var a = o("WAWebWidToJid").widToGroupJid(t.id),
        i = t.pendingParticipants,
        l = (s || (s = n("Promise"))).resolve();
      return (
        (l = o("WAWebInviteV4QueryGroupAction").revokeGroupInviteV4(r, a)),
        (t.revokeGroupsV4AddInvitePromise = l
          .then(function (e) {
            return (e.status >= 200 && e.status < 300 && i.remove(r), e.status);
          })
          .catch(function (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[GroupMetadata] revokeGroupsV4AddInvite failed",
                  ])),
              ),
              500
            );
          })
          .finally(function () {
            t.revokeGroupsV4AddInvitePromise = null;
          }))
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebInviteV4QueryGroupAction",
          ).getPendingParticipants(e.id);
          t.forEach(function (t) {
            e.pendingParticipants.add({
              id: o("WAWebWidFactory").createUserWidOrThrow(t),
            });
          });
        })),
        d.apply(this, arguments)
      );
    }
    ((l.revokeGroupsV4AddInvite = u), (l.queryGroupsV4PendingInvite = c));
  },
  98,
);
