__d(
  "WAWebGroupMembershipApprovalRequestsFlow.react",
  [
    "$InternalEnum",
    "WANullthrows",
    "WAWebExistingGroupPermissionsDrawer.react",
    "WAWebFindChatAction",
    "WAWebGroupMembershipApprovalRequestsDrawer.react",
    "WAWebInfoFlowLoadable",
    "WAWebMembershipApprovalRequestsOrder",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = n("$InternalEnum").Mirrored([
        "Requests",
        "ContactInfo",
        "GroupSettings",
      ]);
    function m(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.chat,
        s = i.onBack,
        m = o("useWAWebFlow").useFlow(d.Requests, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        p = m[0],
        _ = m[1],
        f = c(null),
        g = f[0],
        h = f[1],
        y = c(
          o("WAWebMembershipApprovalRequestsOrder")
            .MembershipApprovalRequestsOrder.Source,
        ),
        C = y[0],
        b = y[1],
        v = function () {
          b(
            o("WAWebMembershipApprovalRequestsOrder")
              .MembershipApprovalRequestsOrder.Source,
          );
        },
        S = function () {
          b(
            o("WAWebMembershipApprovalRequestsOrder")
              .MembershipApprovalRequestsOrder.Time,
          );
        },
        R = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                e.id,
                "membershipApprovalRequests",
              ),
              n = t.chat;
            (h(n), _.push(d.ContactInfo));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
      if (!_.step) return null;
      var L;
      switch (_.step) {
        case d.Requests:
          L = u.jsx(r("WAWebGroupMembershipApprovalRequestsDrawer.react"), {
            chat: l,
            orderBy: C,
            onBack: s,
            onRequestClick: R,
            onSortBySource: v,
            onSortByTime: S,
            onGroupSettings: function () {
              return _.push(d.GroupSettings);
            },
          });
          break;
        case d.ContactInfo: {
          L = u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
            displayName: "MembershipApprovalRequestInfoFlow",
            chat: r("WANullthrows")(g),
            onEnd: function () {
              return _.pop();
            },
          });
          break;
        }
        case d.GroupSettings:
          L = u.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
            chat: l,
            groupMetadata: r("WANullthrows")(l.groupMetadata),
            onClose: function () {
              return _.pop();
            },
          });
      }
      return u.jsx(p, {
        ref: a,
        displayName: "MembershipApprovalRequestsFlow",
        flow: _,
        children: L,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
