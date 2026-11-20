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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
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
            msg:
              n > 0
                ? s._(
                    /*BTDS*/ "Communities and their announcement groups can't be left from here. Leave a community from its community info.",
                  )
                : s._(/*BTDS*/ "You already left the selected groups"),
          }),
        );
        return;
      }
      o("WAWebModalManager").ModalManager.open(
        c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          okText: s._(/*BTDS*/ "Leave groups"),
          onCancel: o("WAWebModalManager").closeModalManager,
          onOK: function () {
            (o("WAWebModalManager").closeModalManager(), h(t));
          },
          testid: "contacts-and-groups-leave-groups-confirm",
          title: s._(
            /*BTDS*/ '_j{"*":"Leave {count} groups?","_1":"Leave 1 group?"}',
            [s._plural(t.length, "count")],
          ),
          children: c.jsx(y, {
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
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = t[n];
          if (a == null)
            return { failedCount: 0, leftCount: 0, stoppedAtLimit: !1 };
          try {
            yield o("WAWebExitGroupAction").sendExitGroupWithoutToast(a);
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
            var i = yield f(t, n + 1);
            return babelHelpers.extends({}, i, {
              failedCount: i.failedCount + 1,
            });
          }
          var l = yield f(t, n + 1);
          return babelHelpers.extends({}, l, { leftCount: l.leftCount + 1 });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = _(e).then(function (e) {
        return new (o("WAWebActionToast.react").ActionType)(L(e));
      });
      return (
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: new (o("WAWebActionToast.react").ActionType)(
              s._(
                /*BTDS*/ '_j{"*":"Leaving {count} groups","_1":"Leaving 1 group"}',
                [s._plural(e.length, "count")],
              ),
            ),
            pendingAction: t,
          }),
        ),
        t.then(r("WAWebNoop"))
      );
    }
    function y(e) {
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
          i.some(C) ? "SEMICOLON" : "COMMA",
        ),
        u = n.length - d;
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx("div", {
            "data-testid": "contacts-and-groups-leave-groups-names",
            children:
              u > 0
                ? s._(
                    /*BTDS*/ '_j{"*":"{names} and {count} more groups","_1":"{names} and 1 more group"}',
                    [s._plural(u, "count"), s._param("names", l)],
                  )
                : l,
          }),
          S(n).map(function (e) {
            var t = e.community,
              n = e.groups;
            return c.jsx(
              "div",
              {
                "data-testid": "contacts-and-groups-leave-groups-community",
                children: c.jsx(b, { community: t, groups: n }),
              },
              t.id.toString(),
            );
          }),
          c.jsx("div", {
            "data-testid": "contacts-and-groups-leave-groups-notice",
            children: s._(
              /*BTDS*/ "Only admins are notified when you leave a group.",
            ),
          }),
          a > 0 &&
            c.jsx("div", {
              "data-testid": "contacts-and-groups-leave-groups-skipped",
              children: s._(
                /*BTDS*/ '_j{"*":"{count} communities or announcement groups will be skipped. Leave a community from its community info.","_1":"1 community or announcement group will be skipped. Leave a community from its community info."}',
                [s._plural(a, "count")],
              ),
            }),
          t > 0 &&
            c.jsx("div", {
              "data-testid": "contacts-and-groups-leave-groups-already-left",
              children: s._(
                /*BTDS*/ '_j{"*":"{count} groups you already left will be skipped.","_1":"1 group you already left will be skipped."}',
                [s._plural(t, "count")],
              ),
            }),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      return (
        o("WAWebContactsAndGroupsGroupTitle").getUnnamedGroupMetadata(
          e.groupMetadata,
        ) != null
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.community,
        r = e.groups,
        a;
      t[0] !== n ? ((a = n.title()), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = a;
      if (r.length === 1) {
        var l;
        t[2] !== r[0]
          ? ((l = o(
              "WAWebContactsAndGroupsGroupTitle",
            ).getContactsAndGroupsGroupTitle(r[0])),
            (t[2] = r[0]),
            (t[3] = l))
          : (l = t[3]);
        var u;
        return (
          t[4] !== i || t[5] !== l
            ? ((u = c.jsx(v, { communityName: i, groupName: l })),
              (t[4] = i),
              (t[5] = l),
              (t[6] = u))
            : (u = t[6]),
          u
        );
      }
      var d;
      return (
        t[7] !== i || t[8] !== r.length
          ? ((d =
              i !== ""
                ? s._(
                    /*BTDS*/ '_j{"*":"By exiting {count} groups you will also exit and lose access to the community \\"{community_name}.\\"","_1":"By exiting 1 group you will also exit and lose access to the community \\"{community_name}.\\""}',
                    [
                      s._plural(r.length, "count"),
                      s._param("community_name", i),
                    ],
                  )
                : s._(
                    /*BTDS*/ '_j{"*":"By exiting {count} groups you will also exit and lose access to the community.","_1":"By exiting 1 group you will also exit and lose access to the community."}',
                    [s._plural(r.length, "count")],
                  )),
            (t[7] = i),
            (t[8] = r.length),
            (t[9] = d))
          : (d = t[9]),
        d
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.communityName,
        r = e.groupName,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a =
              n !== ""
                ? s._(
                    /*BTDS*/ 'By exiting the group "{group_name}" you will also exit and lose access to the community "{community_name}."',
                    [s._param("group_name", r), s._param("community_name", n)],
                  )
                : s._(
                    /*BTDS*/ 'By exiting the group "{group_name}" you will also exit and lose access to the community.',
                    [s._param("group_name", r)],
                  )),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function S(e) {
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
          return R(t, n);
        })
      );
    }
    function R(e, t) {
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
    function L(e) {
      var t = e.failedCount,
        n = e.leftCount,
        r = e.stoppedAtLimit;
      return r
        ? s._(
            /*BTDS*/ '_j{"*":{"*":"Left {leftCount} groups. Couldn\'t leave {failedCount}. Stopped because of a limit on leaving groups at once. Try again later."},"_1":{"*":"Left 1 group. Couldn\'t leave {failedCount}. Stopped because of a limit on leaving groups at once. Try again later."}}',
            [s._plural(n, "leftCount"), s._param("failedCount", t, [0])],
          )
        : t === 0
          ? s._(/*BTDS*/ '_j{"*":"Left {count} groups","_1":"Left 1 group"}', [
              s._plural(n, "count"),
            ])
          : s._(
              /*BTDS*/ '_j{"*":{"*":"Left {leftCount} groups. Couldn\'t leave {failedCount}"},"_1":{"*":"Left 1 group. Couldn\'t leave {failedCount}"}}',
              [s._plural(n, "leftCount"), s._param("failedCount", t, [0])],
            );
    }
    ((L.displayName = L.name + " [from " + i.id + "]"),
      (l.getLeavableGroups = m),
      (l.leaveGroupsFromContactsAndGroups = p),
      (l.leaveGroups = _));
  },
  226,
);
