__d(
  "WAWebNewSubgroupSuggestionFlow.react",
  [
    "$InternalEnum",
    "WAWebChatCollection",
    "WAWebCreateSubgroupSuggestionAction",
    "WAWebNewGroupPermissionsDrawer.react",
    "WAWebNewSubgroupSuggestionDrawer.react",
    "WAWebNoop",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = n("$InternalEnum").Mirrored([
        "SUBGROUP_SUGGESTION_DRAWER",
        "GROUP_PERMISSIONS_DRAWER",
      ]),
      m = d.SUBGROUP_SUGGESTION_DRAWER;
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.parentGroup,
        l = o("useWAWebFlow").useFlow(m, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: a.onEnd,
        }),
        s = l[0],
        p = l[1],
        _ = c(!0),
        f = _[0],
        g = _[1],
        h = c(!0),
        y = h[0],
        C = h[1],
        b = c(!0),
        v = b[0],
        S = b[1],
        R = c(!1),
        L = R[0],
        E = R[1],
        k = c(!0),
        I = k[0],
        T = k[1],
        D = c(),
        x = D[0],
        $ = D[1],
        P = c(),
        N = P[0],
        M = P[1],
        w = c(!1),
        A = w[0],
        F = w[1],
        O = function () {
          p.pop();
        },
        B = function (t, n) {
          F(!0);
          var e = o("WAWebChatCollection").ChatCollection.assertGet(i);
          o("WAWebCreateSubgroupSuggestionAction")
            .createNewGroupSubgroupSuggestionAction(
              e,
              {
                subject: t,
                description: n === "" ? void 0 : n,
                restrict: f,
                announce: y,
                membershipApprovalMode: L,
                memberAddMode: v,
                memberShareGroupHistoryMode: I,
              },
              O,
              a.onEnd,
            )
            .then(function () {
              O();
            })
            .finally(function () {
              F(!1);
            });
        },
        W = function (t) {
          (t.text != null && $(t.text),
            t.description != null && M(t.description));
        };
      if (p.step == null) return null;
      var q;
      switch (p.step) {
        case d.SUBGROUP_SUGGESTION_DRAWER: {
          q = u.jsx(r("WAWebNewSubgroupSuggestionDrawer.react"), {
            parentGroup: i,
            onBack: a.onBack,
            onGroupPermissions: function () {
              return p.push(d.GROUP_PERMISSIONS_DRAWER);
            },
            handleLiftGroupInfo: W,
            subject: x,
            description: N,
            onSubmit: B,
            loading: A,
          });
          break;
        }
        case d.GROUP_PERMISSIONS_DRAWER: {
          q = u.jsx(r("WAWebNewGroupPermissionsDrawer.react"), {
            onBack: function () {
              return p.pop();
            },
            restrict: f,
            setRestrict: g,
            announce: y,
            setAnnounce: C,
            membershipApprovalMode: L,
            setMembershipApprovalMode: E,
            memberAddMode: v,
            setMemberAddMode: S,
            memberLinkMode: !1,
            setMemberLinkMode: r("WAWebNoop"),
            memberShareGroupHistoryMode: I,
            setMemberShareGroupHistoryMode: T,
          });
          break;
        }
      }
      return u.jsx(s, { ref: n, flow: p, children: q });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = p;
    ((l.NewSubgroupSuggestionFlowStep = d), (l.NewSubgroupSuggestionFlow = _));
  },
  98,
);
