__d(
  "WAWebOrgLeaveAction",
  [
    "WALogger",
    "WAWebOrgBridgeApi",
    "WAWebOrgLeaveJob",
    "WAWebOrgRefreshListAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      (await o("WAWebOrgLeaveJob").leaveOrg(t),
        await o("WAWebOrgRefreshListAction").whenOrgListRefreshSettles());
      var n = await o("WAWebOrgLeaveJob").removeLeftOrg(t);
      (o("WAWebOrgBridgeApi").removeOrgsFromMemory([t]),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[org-leave] left a network, stored=",
              "",
            ])),
          String(n),
        ),
        n ||
          (await o("WAWebOrgRefreshListAction").refreshOrgList({
            bypassCooldown: !0,
          })));
    }
    l.leaveOrgNetwork = s;
  },
  98,
);
