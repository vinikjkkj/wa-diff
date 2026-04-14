__d(
  "WAWebGroupMemberUpdatesPanel.react",
  [
    "fbt",
    "WAWebCollectionConstants",
    "WAWebContactCollection",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebGroupMemberUpdatePastParticipantRow.react",
    "WAWebGroupMemberUpdateUsernameRow.react",
    "WAWebGroupMemberUpdatesGatingUtils",
    "WAWebGroupMemberUpdatesLogger",
    "WAWebGroupParticipantsFlow.react",
    "WAWebMsgCollection",
    "WAWebText_DONOTUSE.react",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumGroupMemberUpdatesActionName",
    "WAWebWid",
    "WDSSpinner.react",
    "WDSText.react",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebStableCallback",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = 200,
      h = {
        disclaimer: { textAlign: "x2b8uid", lineHeight: "x16h55sf", $$css: !0 },
        emptyTitle: {
          textAlign: "x2b8uid",
          lineHeight: "x37zpob",
          paddingBottom: "x1g2khh7",
          $$css: !0,
        },
        empty: {
          height: "x5yr21d",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        headerSection: {
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "xl7twdi",
          paddingBottom: "xr1496l",
          $$css: !0,
        },
      };
    function y(e) {
      return e.scrollTop + g > e.scrollHeight - e.clientHeight;
    }
    function C(e) {
      var t = f([]),
        n = t[0],
        r = t[1],
        a = f(!1),
        i = a[0],
        l = a[1],
        s = f(!1),
        u = s[0],
        c = s[1],
        d = f(!1),
        g = d[0],
        h = d[1],
        y = _(null),
        C = m(
          function () {
            i ||
              u ||
              (c(!0),
              h(!1),
              o("WAWebMsgCollection")
                .MsgCollection.getGroupMemberUpdateMsgs(
                  e,
                  o("WAWebCollectionConstants").PAGE_SIZE,
                  y.current,
                )
                .then(function (e) {
                  if (
                    (e.length < o("WAWebCollectionConstants").PAGE_SIZE &&
                      l(!0),
                    e.length > 0)
                  ) {
                    var t = e[e.length - 1];
                    ((y.current = t.id),
                      r(function (t) {
                        return [].concat(t, e);
                      }),
                      o(
                        "WAWebGroupMemberUpdatesLogger",
                      ).GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(
                        o("WAWebWamEnumGroupMemberUpdatesActionName")
                          .GROUP_MEMBER_UPDATES_ACTION_NAME
                          .FETCH_MEMBER_UPDATES_SUCCESS,
                        e.length,
                      ));
                  } else
                    y.current == null &&
                      o(
                        "WAWebGroupMemberUpdatesLogger",
                      ).GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(
                        o("WAWebWamEnumGroupMemberUpdatesActionName")
                          .GROUP_MEMBER_UPDATES_ACTION_NAME
                          .FETCH_MEMBER_UPDATES_EMPTY,
                      );
                  c(!1);
                })
                .catch(function (e) {
                  (h(!0),
                    c(!1),
                    o(
                      "WAWebGroupMemberUpdatesLogger",
                    ).GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(
                      o("WAWebWamEnumGroupMemberUpdatesActionName")
                        .GROUP_MEMBER_UPDATES_ACTION_NAME
                        .FETCH_MEMBER_UPDATES_FAILURE,
                    ));
                }));
          },
          [e, i, u],
        ),
        b = _(!1);
      return (
        p(
          function () {
            b.current || ((b.current = !0), C());
          },
          [C],
        ),
        { msgs: n, isFullyLoaded: i, isLoading: u, hasError: g, loadMore: C }
      );
    }
    var b = function () {
        return s._(
          /*BTDS*/ "See updates from the last 60 days like username changes or who has left or been removed. {=m1}",
          [
            s._implicitParam(
              "=m1",
              c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: o("WAWebFaqUrl").getFaqUrl(),
                children: s._(/*BTDS*/ "Learn more"),
              }),
            ),
          ],
        );
      },
      v = function () {
        return s._(
          /*BTDS*/ "See updates from the last 60 days like who has left or been removed. {=m2}",
          [
            s._implicitParam(
              "=m2",
              c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: o("WAWebFaqUrl").getHowToExitAndDeleteGroupsFaq(),
                children: s._(/*BTDS*/ "Learn more"),
              }),
            ),
          ],
        );
      };
    function S(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.chat,
        u = i.onBack,
        d = i.onContactInfo,
        m = (n = l.groupMetadata) == null ? void 0 : n.pastParticipants,
        _ = C(l.id),
        f = _.hasError,
        g = _.isFullyLoaded,
        S = _.loadMore,
        R = _.msgs;
      p(function () {
        (o(
          "WAWebGroupMemberUpdatesLogger",
        ).GroupMemberUpdatesLogger.startSession(),
          o(
            "WAWebGroupMemberUpdatesLogger",
          ).GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(
            o("WAWebWamEnumGroupMemberUpdatesActionName")
              .GROUP_MEMBER_UPDATES_ACTION_NAME.VIEW,
          ));
      }, []);
      var L = r("useWAWebEventTargetValue")(
          m,
          ["bulk_add", "bulk_remove", "reset"],
          function () {
            var e,
              t =
                (e =
                  m == null
                    ? void 0
                    : m
                        .getValidRecords()
                        .filter(function (e) {
                          return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
                        })
                        .map(function (e) {
                          return {
                            type: "past_participant",
                            timestamp: e.leaveTs,
                            participant: e,
                          };
                        })) != null
                  ? e
                  : [],
              n = R.map(function (e) {
                return { type: "username_change", timestamp: e.t, msg: e };
              });
            return [].concat(t, n).sort(function (e, t) {
              return t.timestamp - e.timestamp;
            });
          },
          [R],
        ),
        E = r("useWAWebStableCallback")(function () {
          S();
        }),
        k = r("useWAWebThrottledCallback")(function (e) {
          e.currentTarget && y(e.currentTarget) && E();
        }, 100),
        I = function (t) {
          if (d != null) {
            var e = o("WAWebGroupParticipantsFlow.react").getOneToOneContact(t);
            e != null && d(e);
          }
        },
        T = function (t) {
          (o(
            "WAWebGroupMemberUpdatesLogger",
          ).GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(
            o("WAWebWamEnumGroupMemberUpdatesActionName")
              .GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_PAST_MEMBER_UPDATE,
          ),
            I(t.contact));
        },
        D = function (t) {
          var e;
          o(
            "WAWebGroupMemberUpdatesLogger",
          ).GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(
            o("WAWebWamEnumGroupMemberUpdatesActionName")
              .GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_USERNAME_UPDATE,
          );
          var n = (e = t.templateParams) != null ? e : [],
            a = n[2];
          if (a instanceof r("WAWebWid")) {
            var i = o("WAWebContactCollection").ContactCollection.get(a);
            i != null && I(i);
          }
        },
        x = null;
      g ||
        (x = c.jsx("div", {
          className: "x78zum5 xl56j7k x6s0dn4 xyamay9 xv54qhq x1l90r2v xf7dkkf",
          children: c.jsx(r("WDSSpinner.react"), { stroke: 6, size: 24 }),
        }));
      var $ = c.jsx(r("WAWebDrawerSection.react"), {
          xstyle: h.headerSection,
          animation: !1,
          children: c.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "14",
              color: "secondary",
              xstyle: h.disclaimer,
              children: o(
                "WAWebGroupMemberUpdatesGatingUtils",
              ).groupMemberUpdatesUsernameDescriptionEnabled()
                ? b()
                : v(),
            }),
          }),
        }),
        P;
      return (
        L.length > 0
          ? (P = c.jsxs(c.Fragment, {
              children: [
                c.jsx(r("WAWebDrawerSection.react"), {
                  animation: !1,
                  children: L.map(function (e, t) {
                    return e.type === "past_participant"
                      ? c.jsx(
                          r("WAWebGroupMemberUpdatePastParticipantRow.react"),
                          {
                            participant: e.participant,
                            onClick: function () {
                              return T(e.participant);
                            },
                          },
                          "past_" + e.participant.id.toString() + "_" + t,
                        )
                      : c.jsx(
                          r("WAWebGroupMemberUpdateUsernameRow.react"),
                          {
                            msg: e.msg,
                            onClick: function () {
                              return D(e.msg);
                            },
                          },
                          "uname_" + e.msg.id.toString() + "_" + t,
                        );
                  }),
                }),
                x,
                f &&
                  c.jsx("div", {
                    className: "x2b8uid x1p57kb1 x1ci70gm xb0esv5 xyo0t3i",
                    children: c.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      children: s._(
                        /*BTDS*/ "Couldn't load member changes. Try again later.",
                      ),
                    }),
                  }),
              ],
            }))
          : g
            ? (P = c.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: h.empty,
                justify: "center",
                align: "center",
                children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                  size: "16",
                  xstyle: h.emptyTitle,
                  children: s._(/*BTDS*/ "No member changes"),
                }),
              }))
            : (P = c.jsx("div", {
                className:
                  "x78zum5 xl56j7k x6s0dn4 xyamay9 xv54qhq x1l90r2v xf7dkkf",
                children: c.jsx(r("WDSSpinner.react"), { stroke: 6, size: 24 }),
              })),
        c.jsxs(r("WAWebDrawer.react"), {
          ref: a,
          theme: "invite",
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Member changes"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              rtlFixIfOnDarwin: !0,
              onBack: u,
            }),
            c.jsxs(r("WAWebDrawerBody.react"), {
              onScroll: k,
              children: [$, P],
            }),
          ],
        })
      );
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = S));
  },
  226,
);
