__d(
  "WAWebCommunityHomeActionsSection.react",
  [
    "fbt",
    "WAWebChatCommunityUtils",
    "WAWebChatGroupUtils",
    "WAWebChatInfoDrawerSection.react",
    "WAWebDeactivateIconIcon.react",
    "WAWebDeleteChatPopup.react",
    "WAWebDeleteIcon.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerManager",
    "WAWebFbtCommon",
    "WAWebLeaveCommunityModal.react",
    "WAWebModalManager",
    "WAWebPersonArrowIcon.react",
    "WAWebReportSpamPopup.react",
    "WAWebSendSpamChatAction",
    "WAWebSpamConstants",
    "WAWebUISpacing",
    "WDSIconIcLogout.react",
    "WDSIconIcThumbDown.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        drawerSectionContainer: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
      };
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(29),
        a = e.chat,
        i = e.onBack,
        l = e.onDeactivateCommunity,
        s = e.onTransferOwnership,
        d;
      n[0] !== a || n[1] !== s
        ? ((d =
            !o("WAWebChatGroupUtils").isTerminatedGroupOrNotMember(a) &&
            !o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(a)
              ? u.jsx(_, { chat: a, onTransferOwnership: s })
              : null),
          (n[0] = a),
          (n[1] = s),
          (n[2] = d))
        : (d = n[2]);
      var h = d,
        y;
      n[3] !== a || n[4] !== i
        ? ((y = o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(a)
            ? u.jsx(p, { chat: a, onBack: i })
            : null),
          (n[3] = a),
          (n[4] = i),
          (n[5] = y))
        : (y = n[5]);
      var C = y,
        b;
      n[6] !== a || n[7] !== s
        ? ((b = o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(a)
            ? null
            : u.jsx(m, { chat: a, onTransferOwnership: s })),
          (n[6] = a),
          (n[7] = s),
          (n[8] = b))
        : (b = n[8]);
      var v = b,
        S;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = ["bulk_add", "bulk_remove", "reset", "change:isSuperAdmin"]),
          (n[9] = S))
        : (S = n[9]);
      var R;
      n[10] !== a
        ? ((R = function () {
            return (
              o("WAWebChatCommunityUtils").isCommunitySuperAdmin(a) &&
              !o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(a)
            );
          }),
          (n[10] = a),
          (n[11] = R))
        : (R = n[11]);
      var L = r("useWAWebEventTargetValue")(
          a == null || (t = a.groupMetadata) == null ? void 0 : t.participants,
          S,
          R,
        ),
        E;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = ["change:suspended"]), (n[12] = E))
        : (E = n[12]);
      var k;
      n[13] !== a
        ? ((k = function () {
            return !o("WAWebChatCommunityUtils").isSuspendedCommunity(a);
          }),
          (n[13] = a),
          (n[14] = k))
        : (k = n[14]);
      var I = r("useWAWebEventTargetValue")(
          a == null ? void 0 : a.groupMetadata,
          E,
          k,
        ),
        T;
      n[15] !== L || n[16] !== l
        ? ((T = L ? u.jsx(f, { onDeactivateCommunity: l }) : null),
          (n[15] = L),
          (n[16] = l),
          (n[17] = T))
        : (T = n[17]);
      var D = T,
        x;
      n[18] !== L || n[19] !== I || n[20] !== s
        ? ((x = L && I ? u.jsx(g, { onTransferOwnership: s }) : null),
          (n[18] = L),
          (n[19] = I),
          (n[20] = s),
          (n[21] = x))
        : (x = n[21]);
      var $ = x,
        P;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = [
            c.drawerSectionContainer,
            o("WAWebUISpacing").uiMargin.vert10,
          ]),
          (n[22] = P))
        : (P = n[22]);
      var N;
      return (
        n[23] !== $ || n[24] !== D || n[25] !== C || n[26] !== h || n[27] !== v
          ? ((N = u.jsxs(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
              { xstyle: P, children: [$, h, C, v, D] },
            )),
            (n[23] = $),
            (n[24] = D),
            (n[25] = C),
            (n[26] = h),
            (n[27] = v),
            (n[28] = N))
          : (N = n[28]),
        N
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.chat,
        a = e.onTransferOwnership,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Report community")), (t[0] = i))
        : (i = t[0]);
      var l = i,
        c;
      t[1] !== n || t[2] !== a
        ? ((c = function (t) {
            t.preventDefault();
            var e = function () {
                (o("WAWebSendSpamChatAction").sendReport({
                  chat: n,
                  spamFlow: o("WAWebSpamConstants").SpamFlow.CommunityHome,
                }),
                  o("WAWebModalManager").ModalManager.close());
              },
              i = function () {
                o("WAWebSendSpamChatAction")
                  .sendReport({
                    chat: n,
                    spamFlow: o("WAWebSpamConstants").SpamFlow.CommunityHome,
                  })
                  .then(function () {
                    o("WAWebModalManager").ModalManager.open(
                      u.jsx(r("WAWebLeaveCommunityModal.react"), {
                        chat: n,
                        onTransferOwnership: a,
                        spamFlow:
                          o("WAWebSpamConstants").SpamFlow.CommunityHome,
                      }),
                      { transition: "modal-flow" },
                    );
                  });
              };
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebReportSpamPopup.react"), {
                isCommunity: !0,
                isGroupChat: !0,
                isMessage: !1,
                onReport: e,
                onReportExitClear: i,
                onCancel: o("WAWebModalManager").closeModalManager,
              }),
            );
          }),
          (t[1] = n),
          (t[2] = a),
          (t[3] = c))
        : (c = t[3]);
      var d = c,
        m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = l.toString()), (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(r("WDSIconIcThumbDown.react"), {})), (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Report community")), (t[6] = _))
        : (_ = t[6]);
      var f;
      return (
        t[7] !== d
          ? ((f = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              ariaLabel: m,
              testid: void 0,
              color: "danger",
              icon: p,
              theme: "chat-info",
              onClick: d,
              children: _,
            })),
            (t[7] = d),
            (t[8] = f))
          : (f = t[8]),
        f
      );
    }
    function p(e) {
      var t = e.chat,
        n = e.onBack,
        a = s._(/*BTDS*/ "Delete community"),
        i = function (r) {
          (t.pendingAction++,
            r.finally(function () {
              (t.pendingAction--,
                n
                  ? n()
                  : o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
            }));
        },
        l = function (n) {
          (n.preventDefault(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebDeleteChatPopup.react"), {
                chat: t,
                onDeleteOrExit: i,
              }),
              { transition: "modal-flow" },
            ));
        };
      return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
        ariaLabel: a.toString(),
        testid: void 0,
        color: "danger",
        icon: u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, { directional: !0 }),
        theme: "chat-info",
        onClick: l,
        children: s._(/*BTDS*/ "Delete community"),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.chat,
        n = e.onTransferOwnership,
        a = r("WAWebFbtCommon")("Exit Community"),
        i = function (a) {
          (a.preventDefault(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebLeaveCommunityModal.react"), {
                chat: t,
                onTransferOwnership: n,
                onExitAndDeleteSuccess:
                  o("WAWebDrawerManager").closeDrawerRight,
                spamFlow: o("WAWebSpamConstants").SpamFlow.CommunityHome,
              }),
              { transition: "modal-flow" },
            ));
        };
      return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
        ariaLabel: a.toString(),
        testid: void 0,
        color: "danger",
        icon: u.jsx(r("WDSIconIcLogout.react"), { directional: !0 }),
        theme: "chat-info",
        onClick: i,
        children: r("WAWebFbtCommon")("Exit Community"),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.onDeactivateCommunity,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s._(/*BTDS*/ "Deactivate community")), (t[0] = r))
        : (r = t[0]);
      var a = r,
        i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = a.toString()), (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(
            o("WAWebDeactivateIconIcon.react").DeactivateIconIcon,
            {},
          )),
          (t[2] = l))
        : (l = t[2]);
      var c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Deactivate community")), (t[3] = c))
        : (c = t[3]);
      var d;
      return (
        t[4] !== n
          ? ((d = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              ariaLabel: i,
              testid: void 0,
              color: "danger",
              icon: l,
              theme: "chat-info",
              onClick: n,
              children: c,
            })),
            (t[4] = n),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.onTransferOwnership,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s._(/*BTDS*/ "Assign new owner")), (t[0] = r))
        : (r = t[0]);
      var a = r,
        i;
      t[1] !== n
        ? ((i = function (t) {
            (t.preventDefault(), n());
          }),
          (t[1] = n),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = a.toString()), (t[3] = c))
        : (c = t[3]);
      var d;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(o("WAWebPersonArrowIcon.react").PersonArrowIcon, {
            directional: !0,
          })),
          (t[4] = d))
        : (d = t[4]);
      var m;
      return (
        t[5] !== l
          ? ((m = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              ariaLabel: c,
              testid: void 0,
              color: "secondary",
              icon: d,
              theme: "chat-info",
              onClick: l,
              children: a,
            })),
            (t[5] = l),
            (t[6] = m))
          : (m = t[6]),
        m
      );
    }
    l.default = d;
  },
  226,
);
