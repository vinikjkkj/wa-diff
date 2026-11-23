__d(
  "WAQueryGroupsAndSync",
  ["FBLogger", "WACreateGroup", "WAGetDevices", "WAGlobals", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(t, n) {
      if ((n === void 0 && (n = !1), t != null)) {
        if (t.type === "all") {
          r("FBLogger")("wmi").MUSTFIX(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "queryGroupsAndSync: unsupported input type: all",
              ])),
          );
          return;
        }
        var o = t.groups;
        if (o == null || o.length === 0) {
          r("FBLogger")("wmi").MUSTFIX(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "queryGroupsAndSync: empty groups list",
              ])),
          );
          return;
        }
        await c({ groupJids: o, ignoreDhash: n });
      }
    }
    async function c(e) {
      var t = e.groupJids,
        n = e.ignoreDhash,
        r = n === void 0 ? !1 : n,
        a = await d({ groupJids: t });
      if (a.length !== 0) {
        await o("WACreateGroup").createGroups(
          a.map(function (e) {
            return {
              groupStatus: "queried",
              groupToCreate: e,
              serverTs: o("WATimeUtils").unixTime(),
              extras: void 0,
              folder: void 0,
              key: void 0,
            };
          }),
        );
        var i = m(a);
        i.size !== 0 &&
          (await o("WAGetDevices").getDevices({
            users: i,
            reason: "query-groups",
            ignoreDhash: r,
          }));
      }
    }
    async function d(e) {
      var t = e.groupJids,
        n = await Promise.all(
          t.map(function (e) {
            return o("WAGlobals").getDependencies().queryGroup({ groupJid: e });
          }),
        ),
        r = [];
      for (var a of n) a.success && r.push(a.value);
      return r;
    }
    function m(e) {
      var t = new Set();
      for (var n of e)
        for (var r of n.participants)
          r.success ? t.add(r.value.user) : t.add(r.error.user);
      return t;
    }
    ((l.queryGroupsLegacyWAAPI = u), (l.queryGroupsAndSync = c));
  },
  98,
);
