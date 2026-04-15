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
    "WAWebGroupMemberUpdatesLogger",
    "WAWebGroupParticipantsFlow.react",
    "WAWebMsgCollection",
    "WAWebText_DONOTUSE.react",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebWamEnumGroupMemberUpdatesActionName",
    "WAWebWid",
    "WDSSpinner.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(14),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = []), (t[0] = n))
        : (n = t[0]);
      var r = f(n),
        a = r[0],
        i = r[1],
        l = f(!1),
        s = l[0],
        u = l[1],
        c = f(!1),
        d = c[0],
        m = c[1],
        g = f(!1),
        h = g[0],
        y = g[1],
        C = _(null),
        b;
      t[1] !== e || t[2] !== s || t[3] !== d
        ? ((b = function () {
            s ||
              d ||
              (m(!0),
              y(!1),
              o("WAWebMsgCollection")
                .MsgCollection.getGroupMemberUpdateMsgs(
                  e,
                  o("WAWebCollectionConstants").PAGE_SIZE,
                  C.current,
                )
                .then(function (e) {
                  if (
                    (e.length < o("WAWebCollectionConstants").PAGE_SIZE &&
                      u(!0),
                    e.length > 0)
                  ) {
                    var t = e[e.length - 1];
                    ((C.current = t.id),
                      i(function (t) {
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
                    C.current == null &&
                      o(
                        "WAWebGroupMemberUpdatesLogger",
                      ).GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(
                        o("WAWebWamEnumGroupMemberUpdatesActionName")
                          .GROUP_MEMBER_UPDATES_ACTION_NAME
                          .FETCH_MEMBER_UPDATES_EMPTY,
                      );
                  m(!1);
                })
                .catch(function (e) {
                  (y(!0),
                    m(!1),
                    o(
                      "WAWebGroupMemberUpdatesLogger",
                    ).GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(
                      o("WAWebWamEnumGroupMemberUpdatesActionName")
                        .GROUP_MEMBER_UPDATES_ACTION_NAME
                        .FETCH_MEMBER_UPDATES_FAILURE,
                    ));
                }));
          }),
          (t[1] = e),
          (t[2] = s),
          (t[3] = d),
          (t[4] = b))
        : (b = t[4]);
      var v = b,
        S = _(!1),
        R,
        L;
      (t[5] !== v
        ? ((R = function () {
            S.current || ((S.current = !0), v());
          }),
          (L = [v]),
          (t[5] = v),
          (t[6] = R),
          (t[7] = L))
        : ((R = t[6]), (L = t[7])),
        p(R, L));
      var E;
      return (
        t[8] !== h || t[9] !== s || t[10] !== d || t[11] !== v || t[12] !== a
          ? ((E = {
              msgs: a,
              isFullyLoaded: s,
              isLoading: d,
              hasError: h,
              loadMore: v,
            }),
            (t[8] = h),
            (t[9] = s),
            (t[10] = d),
            (t[11] = v),
            (t[12] = a),
            (t[13] = E))
          : (E = t[13]),
        E
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
        a = o("react-compiler-runtime").c(49),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var u = i,
        d = u.chat,
        m = u.onBack,
        _ = u.onContactInfo,
        f = (n = d.groupMetadata) == null ? void 0 : n.pastParticipants,
        g = C(d.id),
        S = g.hasError,
        T = g.isFullyLoaded,
        D = g.loadMore,
        x = g.msgs,
        $;
      (a[3] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = []), (a[3] = $))
        : ($ = a[3]),
        p(I, $));
      var P;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = ["bulk_add", "bulk_remove", "reset"]), (a[4] = P))
        : (P = a[4]);
      var N;
      a[5] !== f || a[6] !== x
        ? ((N = function () {
            var e,
              t =
                (e =
                  f == null ? void 0 : f.getValidRecords().filter(k).map(E)) !=
                null
                  ? e
                  : [],
              n = x.map(L);
            return [].concat(t, n).sort(R);
          }),
          (a[5] = f),
          (a[6] = x),
          (a[7] = N))
        : (N = a[7]);
      var M;
      a[8] !== x ? ((M = [x]), (a[8] = x), (a[9] = M)) : (M = a[9]);
      var w = r("useWAWebEventTargetValue")(f, P, N, M),
        A;
      a[10] !== D
        ? ((A = function () {
            D();
          }),
          (a[10] = D),
          (a[11] = A))
        : (A = a[11]);
      var F = r("useWAWebStableCallback")(A),
        O;
      a[12] !== F
        ? ((O = function (t) {
            t.currentTarget && y(t.currentTarget) && F();
          }),
          (a[12] = F),
          (a[13] = O))
        : (O = a[13]);
      var B = r("useWAWebThrottledCallback")(O, 100),
        W;
      a[14] !== _
        ? ((W = function (t) {
            if (_ != null) {
              var e = o("WAWebGroupParticipantsFlow.react").getOneToOneContact(
                t,
              );
              e != null && _(e);
            }
          }),
          (a[14] = _),
          (a[15] = W))
        : (W = a[15]);
      var q = W,
        U;
      a[16] !== q
        ? ((U = function (t) {
            (o(
              "WAWebGroupMemberUpdatesLogger",
            ).GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(
              o("WAWebWamEnumGroupMemberUpdatesActionName")
                .GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_PAST_MEMBER_UPDATE,
            ),
              q(t.contact));
          }),
          (a[16] = q),
          (a[17] = U))
        : (U = a[17]);
      var V = U,
        H;
      a[18] !== q
        ? ((H = function (t) {
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
              i != null && q(i);
            }
          }),
          (a[18] = q),
          (a[19] = H))
        : (H = a[19]);
      var G = H,
        z = null;
      if (!T) {
        var j;
        (a[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = c.jsx("div", {
              className:
                "x78zum5 xl56j7k x6s0dn4 xyamay9 xv54qhq x1l90r2v xf7dkkf",
              children: c.jsx(r("WDSSpinner.react"), { stroke: 6, size: 24 }),
            })),
            (a[20] = j))
          : (j = a[20]),
          (z = j));
      }
      var K;
      a[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = c.jsx(r("WAWebDrawerSection.react"), {
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
                  "WAWebUsernameGatingUtils",
                ).usernameDisplayedEnabled()
                  ? b()
                  : v(),
              }),
            }),
          })),
          (a[21] = K))
        : (K = a[21]);
      var Q = K,
        X;
      if (w.length > 0) {
        var Y;
        if (a[22] !== w || a[23] !== V || a[24] !== G) {
          var J;
          (a[26] !== V || a[27] !== G
            ? ((J = function (t, n) {
                return t.type === "past_participant"
                  ? c.jsx(
                      r("WAWebGroupMemberUpdatePastParticipantRow.react"),
                      {
                        participant: t.participant,
                        onClick: function () {
                          return V(t.participant);
                        },
                      },
                      "past_" + t.participant.id.toString() + "_" + n,
                    )
                  : c.jsx(
                      r("WAWebGroupMemberUpdateUsernameRow.react"),
                      {
                        msg: t.msg,
                        onClick: function () {
                          return G(t.msg);
                        },
                      },
                      "uname_" + t.msg.id.toString() + "_" + n,
                    );
              }),
              (a[26] = V),
              (a[27] = G),
              (a[28] = J))
            : (J = a[28]),
            (Y = w.map(J)),
            (a[22] = w),
            (a[23] = V),
            (a[24] = G),
            (a[25] = Y));
        } else Y = a[25];
        var Z;
        a[29] !== Y
          ? ((Z = c.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              children: Y,
            })),
            (a[29] = Y),
            (a[30] = Z))
          : (Z = a[30]);
        var ee;
        a[31] !== S
          ? ((ee =
              S &&
              c.jsx("div", {
                className: "x2b8uid x1p57kb1 x1ci70gm xb0esv5 xyo0t3i",
                children: c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s._(
                    /*BTDS*/ "Couldn't load member changes. Try again later.",
                  ),
                }),
              })),
            (a[31] = S),
            (a[32] = ee))
          : (ee = a[32]);
        var te;
        (a[33] !== z || a[34] !== Z || a[35] !== ee
          ? ((te = c.jsxs(c.Fragment, { children: [Z, z, ee] })),
            (a[33] = z),
            (a[34] = Z),
            (a[35] = ee),
            (a[36] = te))
          : (te = a[36]),
          (X = te));
      } else if (T) {
        var ne;
        (a[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((ne = c.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: h.empty,
              justify: "center",
              align: "center",
              children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                size: "16",
                xstyle: h.emptyTitle,
                children: s._(/*BTDS*/ "No member changes"),
              }),
            })),
            (a[37] = ne))
          : (ne = a[37]),
          (X = ne));
      } else {
        var re;
        (a[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((re = c.jsx("div", {
              className:
                "x78zum5 xl56j7k x6s0dn4 xyamay9 xv54qhq x1l90r2v xf7dkkf",
              children: c.jsx(r("WDSSpinner.react"), { stroke: 6, size: 24 }),
            })),
            (a[38] = re))
          : (re = a[38]),
          (X = re));
      }
      var oe;
      a[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = s._(/*BTDS*/ "Member changes")), (a[39] = oe))
        : (oe = a[39]);
      var ae;
      a[40] !== m
        ? ((ae = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: oe,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            rtlFixIfOnDarwin: !0,
            onBack: m,
          })),
          (a[40] = m),
          (a[41] = ae))
        : (ae = a[41]);
      var ie;
      a[42] !== X || a[43] !== B
        ? ((ie = c.jsxs(r("WAWebDrawerBody.react"), {
            onScroll: B,
            children: [Q, X],
          })),
          (a[42] = X),
          (a[43] = B),
          (a[44] = ie))
        : (ie = a[44]);
      var le;
      return (
        a[45] !== l || a[46] !== ae || a[47] !== ie
          ? ((le = c.jsxs(r("WAWebDrawer.react"), {
              ref: l,
              theme: "invite",
              children: [ae, ie],
            })),
            (a[45] = l),
            (a[46] = ae),
            (a[47] = ie),
            (a[48] = le))
          : (le = a[48]),
        le
      );
    }
    function R(e, t) {
      return t.timestamp - e.timestamp;
    }
    function L(e) {
      return { type: "username_change", timestamp: e.t, msg: e };
    }
    function E(e) {
      return { type: "past_participant", timestamp: e.leaveTs, participant: e };
    }
    function k(e) {
      return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
    }
    function I() {
      (o(
        "WAWebGroupMemberUpdatesLogger",
      ).GroupMemberUpdatesLogger.startSession(),
        o(
          "WAWebGroupMemberUpdatesLogger",
        ).GroupMemberUpdatesLogger.logOnMemberUpdatesScreen(
          o("WAWebWamEnumGroupMemberUpdatesActionName")
            .GROUP_MEMBER_UPDATES_ACTION_NAME.VIEW,
        ));
    }
    l.default = S;
  },
  226,
);
