__d(
  "WAWebGroupInviteV4Utils",
  [
    "WALogger",
    "WAWebInviteV4QueryGroupAction",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      if (t.revokeGroupsV4AddInvitePromise)
        return t.revokeGroupsV4AddInvitePromise;
      var r = o("WAWebWidToJid").widToGroupJid(t.id),
        a = t.pendingParticipants,
        i = Promise.resolve();
      return (
        (i = o("WAWebInviteV4QueryGroupAction").revokeGroupInviteV4(n, r)),
        (t.revokeGroupsV4AddInvitePromise = i
          .then(function (e) {
            return (e.status >= 200 && e.status < 300 && a.remove(n), e.status);
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
    async function u(e) {
      var t = await o("WAWebInviteV4QueryGroupAction").getPendingParticipants(
        e.id,
      );
      t.forEach(function (t) {
        e.pendingParticipants.add({
          id: o("WAWebWidFactory").createUserWidOrThrow(t),
        });
      });
    }
    ((l.revokeGroupsV4AddInvite = s), (l.queryGroupsV4PendingInvite = u));
  },
  98,
);
