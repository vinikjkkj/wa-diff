__d(
  "WAWebContactsAndGroupsLeaveGroupsAction",
  [
    "fbt",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebConfirmPopup.react",
    "WAWebContactsAndGroupsGroupTitle",
    "WAWebContactsAndGroupsOneByOne",
    "WAWebExitGroupAction",
    "WAWebFbtIntlList",
    "WAWebFrontendChatGetters",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebToast.react",
    "WAWebToastManager",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = 3;
    function m(e) {
      return e.filter(function (e) {
        return (
          !o("WAWebFrontendChatGetters").getIsCommunity(e) &&
          !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e) &&
          !o("WAWebChatGetters").getIsReadOnly(e)
        );
      });
    }
    function p(e) {
      var t = m(e),
        n = e.filter(function (e) {
          return (
            o("WAWebFrontendChatGetters").getIsCommunity(e) ||
            o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e)
          );
        }).length,
        r = e.length - t.length - n;
      if (t.length === 0) {
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, {
            msg: n > 0 ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
          }),
        );
        return;
      }
      o("WAWebModalManager").ModalManager.open(
        c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          okText: s._(/*BTDS*/ ""),
          onCancel: o("WAWebModalManager").closeModalManager,
          onOK: function () {
            (o("WAWebModalManager").closeModalManager(), g(t));
          },
          testid: "contacts-and-groups-leave-groups-confirm",
          title: s._(/*BTDS*/ "", [s._plural(t.length, "count")]),
          children: c.jsx(h, {
            alreadyLeftCount: r,
            groups: t,
            skippedCount: n,
          }),
        }),
      );
    }
    function _(e) {
      return f(e, 0);
    }
    async function f(t, n) {
      var a = t[n];
      if (a == null)
        return { failedCount: 0, leftCount: 0, stoppedAtLimit: !1 };
      try {
        await o("WAWebExitGroupAction").sendExitGroupWithoutToast(a);
      } catch (a) {
        if (
          (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "leaveGroups: leaving a group failed",
                ])),
            )
            .catching(r("getErrorSafe")(a)),
          o("WAWebContactsAndGroupsOneByOne").isRateLimited(a))
        )
          return { failedCount: 1, leftCount: 0, stoppedAtLimit: !0 };
        var i = await f(t, n + 1);
        return babelHelpers.extends({}, i, { failedCount: i.failedCount + 1 });
      }
      var l = await f(t, n + 1);
      return babelHelpers.extends({}, l, { leftCount: l.leftCount + 1 });
    }
    function g(e) {
      var t = _(e).then(function (e) {
        return new (o("WAWebActionToast.react").ActionType)(R(e));
      });
      return (
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "", [s._plural(e.length, "count")]),
            ),
            pendingAction: t,
          }),
        ),
        t.then(r("WAWebNoop"))
      );
    }
    function h(e) {
      var t = e.alreadyLeftCount,
        n = e.groups,
        a = e.skippedCount,
        i = n.slice(0, d),
        l = r("WAWebFbtIntlList")(
          i.map(function (e) {
            return o(
              "WAWebContactsAndGroupsGroupTitle",
            ).getContactsAndGroupsGroupTitle(e);
          }),
          "NONE",
          i.some(y) ? "SEMICOLON" : "COMMA",
        ),
        u = n.length - d;
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx("div", {
            "data-testid": "contacts-and-groups-leave-groups-names",
            children:
              u > 0
                ? s._(/*BTDS*/ "", [
                    s._plural(u, "count"),
                    s._param("names", l),
                  ])
                : l,
          }),
          v(n).map(function (e) {
            var t = e.community,
              n = e.groups;
            return c.jsx(
              "div",
              {
                "data-testid": "contacts-and-groups-leave-groups-community",
                children: c.jsx(C, { community: t, groups: n }),
              },
              t.id.toString(),
            );
          }),
          c.jsx("div", {
            "data-testid": "contacts-and-groups-leave-groups-notice",
            children: s._(/*BTDS*/ ""),
          }),
          a > 0 &&
            c.jsx("div", {
              "data-testid": "contacts-and-groups-leave-groups-skipped",
              children: s._(/*BTDS*/ "", [s._plural(a, "count")]),
            }),
          t > 0 &&
            c.jsx("div", {
              "data-testid": "contacts-and-groups-leave-groups-already-left",
              children: s._(/*BTDS*/ "", [s._plural(t, "count")]),
            }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return (
        o("WAWebContactsAndGroupsGroupTitle").getUnnamedGroupMetadata(
          e.groupMetadata,
        ) != null
      );
    }
    function C(e) {
      var t = e.community,
        n = e.groups,
        r = t.title();
      return n.length === 1
        ? c.jsx(b, {
            communityName: r,
            groupName: o(
              "WAWebContactsAndGroupsGroupTitle",
            ).getContactsAndGroupsGroupTitle(n[0]),
          })
        : r !== ""
          ? s._(/*BTDS*/ "", [
              s._plural(n.length, "count"),
              s._param("community_name", r),
            ])
          : s._(/*BTDS*/ "", [s._plural(n.length, "count")]);
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.communityName,
        n = e.groupName;
      return t !== ""
        ? s._(/*BTDS*/ "", [
            s._param("group_name", n),
            s._param("community_name", t),
          ])
        : s._(/*BTDS*/ "", [s._param("group_name", n)]);
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n,
            r = (n = e.groupMetadata) == null ? void 0 : n.getParentGroupChat();
          if (r != null) {
            var o;
            t.set(r, [].concat((o = t.get(r)) != null ? o : [], [e]));
          }
        }),
        Array.from(t, function (e) {
          var t = e[0],
            n = e[1];
          return { community: t, groups: n };
        }).filter(function (e) {
          var t = e.community,
            n = e.groups;
          return S(t, n);
        })
      );
    }
    function S(e, t) {
      var n,
        r,
        o =
          (n = (r = e.groupMetadata) == null ? void 0 : r.joinedSubgroups) !=
          null
            ? n
            : [];
      return (
        o.length > 0 &&
        o.every(function (e) {
          return t.some(function (t) {
            return t.id.equals(e);
          });
        })
      );
    }
    function R(e) {
      var t = e.failedCount,
        n = e.leftCount,
        r = e.stoppedAtLimit;
      return r
        ? s._(/*BTDS*/ "", [
            s._plural(n, "leftCount"),
            s._param("failedCount", t, [0]),
          ])
        : t === 0
          ? s._(/*BTDS*/ "", [s._plural(n, "count")])
          : s._(/*BTDS*/ "", [
              s._plural(n, "leftCount"),
              s._param("failedCount", t, [0]),
            ]);
    }
    ((R.displayName = R.name + " [from " + i.id + "]"),
      (l.getLeavableGroups = m),
      (l.leaveGroupsFromContactsAndGroups = p),
      (l.leaveGroups = _));
  },
  226,
);
