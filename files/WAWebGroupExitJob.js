__d(
  "WAWebGroupExitJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))(
        "leaveGroupsResultParser",
        function (e) {
          e.assertAttr("type", "result");
          var t = e.child("leave"),
            n = t.mapChildren(function (e) {
              var t;
              return {
                id: o("WAWebJidToWid").groupJidToWid(e.attrGroupJid("id")),
                code: (t = e.maybeAttrInt("error")) != null ? t : 200,
              };
            });
          return n;
        },
      ),
      s = new (r("WADeprecatedWapParser"))(
        "leaveCommunitiesResultParser",
        function (e) {
          e.assertAttr("type", "result");
          var t = e.child("leave"),
            n = t.mapChildren(function (e) {
              var t;
              return {
                id: o("WAWebJidToWid").groupJidToWid(
                  e.attrGroupJid("parent_group_jid"),
                ),
                code: (t = e.maybeAttrInt("error")) != null ? t : 200,
              };
            });
          return n;
        },
      );
    async function u(t) {
      var n,
        r = t.map(function (e) {
          return o("WAWap").wap("group", {
            id: o("WAWebCommsWapMd").GROUP_JID(e),
          });
        }),
        a = (n = o("WAWap")).wap(
          "iq",
          { to: n.G_US, type: "set", xmlns: "w:g2", id: n.generateId() },
          n.wap("leave", null, r),
        ),
        i = await o("WADeprecatedSendIq").deprecatedSendIq(a, e);
      return i.success
        ? i.result
        : Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(
              i.errorCode,
              i.errorText,
            ),
          );
    }
    function c(e) {
      return u([e]).then(function (e) {
        return e[0];
      });
    }
    async function d(e) {
      var t,
        n = e.map(function (e) {
          return o("WAWap").wap("linked_groups", {
            parent_group_jid: o("WAWebCommsWapMd").GROUP_JID(e),
          });
        }),
        r = (t = o("WAWap")).wap(
          "iq",
          { to: t.G_US, type: "set", xmlns: "w:g2", id: t.generateId() },
          t.wap("leave", null, n),
        ),
        a = await o("WADeprecatedSendIq").deprecatedSendIq(r, s);
      return a.success
        ? a.result
        : Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(
              a.errorCode,
              a.errorText,
            ),
          );
    }
    function m(e) {
      return d([e]).then(function (e) {
        return e[0];
      });
    }
    ((l.leaveGroup = c), (l.leaveCommunities = d), (l.leaveCommunity = m));
  },
  98,
);
