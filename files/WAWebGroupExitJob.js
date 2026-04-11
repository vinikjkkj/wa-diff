__d(
  "WAWebGroupExitJob",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (r("WADeprecatedWapParser"))("leaveGroupsResultParser", function (
        e,
      ) {
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
      }),
      u = new (r("WADeprecatedWapParser"))(
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a = t.map(function (e) {
              return o("WAWap").wap("group", {
                id: o("WAWebCommsWapMd").GROUP_JID(e),
              });
            }),
            i = (r = o("WAWap")).wap(
              "iq",
              { to: r.G_US, type: "set", xmlns: "w:g2", id: r.generateId() },
              r.wap("leave", null, a),
            ),
            l = yield o("WADeprecatedSendIq").deprecatedSendIq(i, s);
          return l.success
            ? l.result
            : (e || (e = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  l.errorCode,
                  l.errorText,
                ),
              );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return c([e]).then(function (e) {
        return e[0];
      });
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a = t.map(function (e) {
              return o("WAWap").wap("linked_groups", {
                parent_group_jid: o("WAWebCommsWapMd").GROUP_JID(e),
              });
            }),
            i = (r = o("WAWap")).wap(
              "iq",
              { to: r.G_US, type: "set", xmlns: "w:g2", id: r.generateId() },
              r.wap("leave", null, a),
            ),
            l = yield o("WADeprecatedSendIq").deprecatedSendIq(i, u);
          return l.success
            ? l.result
            : (e || (e = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  l.errorCode,
                  l.errorText,
                ),
              );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return p([e]).then(function (e) {
        return e[0];
      });
    }
    ((l.leaveGroup = m), (l.leaveCommunities = p), (l.leaveCommunity = f));
  },
  98,
);
