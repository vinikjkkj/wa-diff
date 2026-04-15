__d(
  "WAWebDeleteRevokeMsgFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "WAArrayUtils",
    "WATimeUtils",
    "WAWebButton.react",
    "WAWebChatGetters",
    "WAWebCheckBox.react",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebDeleteNewsletterMsgModal.react",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebEnforcementActionLogging",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebName.react",
    "WAWebRevokeMetricUtils",
    "WDSButtonGroup.react",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
    "useWAWebListener",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = n("$InternalEnum").Mirrored(["DeleteRevoke", "RevokeConfirm"]);
    function p(e) {
      var t = o("react-compiler-runtime").c(73),
        n = e.chat,
        a = e.chats,
        i = e.commentList,
        l = e.fromChannelAlerts,
        s = e.isMsgVisible,
        u = e.msgList,
        c = e.onDelete,
        p = e.onEnd,
        v = e.theme,
        S = e.toastPosition,
        E = o("useWAWebFlow").useFlow(m.DeleteRevoke),
        k = E[0],
        T = E[1],
        D = r("useWAWebToggle")(!0),
        x = D[0],
        $ = D[1],
        P = o("WAWebDrawerManagerContext").useDrawerManagerContext("right"),
        N;
      (t[0] !== i || t[1] !== u
        ? (i != null && i.length > 0 ? (N = b(i)) : (N = b(u)),
          (t[0] = i),
          (t[1] = u),
          (t[2] = N))
        : (N = t[2]),
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          "close_modal",
          C,
        ));
      var M;
      t[3] !== u
        ? ((M = o("WAArrayUtils").groupBy(u, y)), (t[3] = u), (t[4] = M))
        : (M = t[4]);
      var w = M,
        A;
      t[5] !== i
        ? ((A = i != null ? i : []), (t[5] = i), (t[6] = A))
        : (A = t[6]);
      var F;
      t[7] !== A
        ? ((F = o("WAArrayUtils").groupBy(A, h)), (t[7] = A), (t[8] = F))
        : (F = t[8]);
      var O = F,
        B;
      t[9] !== n || t[10] !== a
        ? ((B = a != null ? a : [n]), (t[9] = n), (t[10] = a), (t[11] = B))
        : (B = t[11]);
      var W;
      if (t[12] !== B) {
        var q = B.filter(Boolean);
        ((W = q.some(g)), (t[12] = B), (t[13] = W));
      } else W = t[13];
      var U = W,
        V;
      t[14] !== x ||
      t[15] !== O ||
      t[16] !== T ||
      t[17] !== s ||
      t[18] !== w ||
      t[19] !== c ||
      t[20] !== p ||
      t[21] !== P ||
      t[22] !== v ||
      t[23] !== S
        ? ((V = function () {
            (w.forEach(function (e, t) {
              if (e.length > 0) {
                var n;
                o("WAWebCmd").Cmd.sendDeleteMsgs(
                  t,
                  { type: "message", list: e },
                  x,
                  null,
                  S,
                  v,
                );
                var r = (n = P.existsDrawer()) != null ? n : !1;
                r &&
                  s &&
                  e.forEach(function (e) {
                    s(e.id, !0) &&
                      o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
                  });
              }
            }),
              O.forEach(function (e, t) {
                e != null &&
                  e.length > 0 &&
                  o("WAWebCmd").Cmd.sendDeleteMsgs(
                    t,
                    { type: "addon", list: e },
                    x,
                    null,
                    S,
                    v,
                  );
              }),
              c == null || c(),
              p == null || p(),
              T.end());
          }),
          (t[14] = x),
          (t[15] = O),
          (t[16] = T),
          (t[17] = s),
          (t[18] = w),
          (t[19] = c),
          (t[20] = p),
          (t[21] = P),
          (t[22] = v),
          (t[23] = S),
          (t[24] = V))
        : (V = t[24]);
      var H = V,
        G;
      t[25] !== x ||
      t[26] !== O ||
      t[27] !== T ||
      t[28] !== w ||
      t[29] !== p ||
      t[30] !== N.admin ||
      t[31] !== S
        ? ((G = function () {
            (r("WAWebEnforcementActionLogging").isSessionStarted() &&
              r("WAWebEnforcementActionLogging").logDeleteUpdateConfirmClick(),
              w.forEach(function (e, t) {
                (N.admin > 0 &&
                  o(
                    "WAWebRevokeMetricUtils",
                  ).UiRevokeActionHelper.revokeConfirmed(),
                  e.length > 0 &&
                    o("WAWebCmd").Cmd.sendRevokeMsgs(
                      t,
                      { type: "message", list: e },
                      { clearMedia: x, toastPosition: S },
                    ));
              }),
              O.forEach(function (e, t) {
                e != null &&
                  e.length > 0 &&
                  o("WAWebCmd").Cmd.sendRevokeMsgs(
                    t,
                    { type: "addon", list: e },
                    { clearMedia: x, toastPosition: S },
                  );
              }),
              p == null || p(),
              T.end());
          }),
          (t[25] = x),
          (t[26] = O),
          (t[27] = T),
          (t[28] = w),
          (t[29] = p),
          (t[30] = N.admin),
          (t[31] = S),
          (t[32] = G))
        : (G = t[32]);
      var z = G,
        j;
      t[33] !== T ||
      t[34] !== z ||
      t[35] !== U ||
      t[36] !== N.admin ||
      t[37] !== N.sender
        ? ((j = function () {
            (N.admin === 0 && N.sender > 0
              ? o("WAWebRevokeMetricUtils").UiRevokeActionHelper.senderRevoke()
              : N.admin > 0 && N.sender === 0
                ? o("WAWebRevokeMetricUtils").UiRevokeActionHelper.adminRevoke()
                : o(
                    "WAWebRevokeMetricUtils",
                  ).UiRevokeActionHelper.adminAndSenderRevoke(),
              N.admin > 0 && !U ? T.push(m.RevokeConfirm) : z());
          }),
          (t[33] = T),
          (t[34] = z),
          (t[35] = U),
          (t[36] = N.admin),
          (t[37] = N.sender),
          (t[38] = j))
        : (j = t[38]);
      var K = j,
        Q;
      t[39] !== T
        ? ((Q = function () {
            (o("WAWebRevokeMetricUtils").UiRevokeActionHelper.endSession(),
              T.end());
          }),
          (t[39] = T),
          (t[40] = Q))
        : (Q = t[40]);
      var X = Q;
      if (T.step) {
        var Y;
        t[41] !== x ||
        t[42] !== i ||
        t[43] !== T.end ||
        t[44] !== H ||
        t[45] !== K ||
        t[46] !== u ||
        t[47] !== N ||
        t[48] !== v ||
        t[49] !== $
          ? ((Y =
              i != null && i.length > 0
                ? d.jsx(R, {
                    commentList: i,
                    revokable: N,
                    onDelete: H,
                    onRevoke: K,
                    onCancel: T.end,
                    theme: v,
                  })
                : d.jsx(L, {
                    msgList: u,
                    revokable: N,
                    clearMedia: x,
                    onDelete: H,
                    onRevoke: K,
                    onCancel: T.end,
                    onToggleClearMedia: $,
                    theme: v,
                  })),
            (t[41] = x),
            (t[42] = i),
            (t[43] = T.end),
            (t[44] = H),
            (t[45] = K),
            (t[46] = u),
            (t[47] = N),
            (t[48] = v),
            (t[49] = $),
            (t[50] = Y))
          : (Y = t[50]);
        var J = Y,
          Z;
        e: switch (T.step) {
          case m.DeleteRevoke: {
            var ee;
            (t[51] !== J ||
            t[52] !== T.end ||
            t[53] !== l ||
            t[54] !== K ||
            t[55] !== U ||
            t[56] !== u
              ? ((ee = U
                  ? d.jsx(r("WAWebDeleteNewsletterMsgModal.react"), {
                      msgList: u,
                      onRevoke: K,
                      onCancel: T.end,
                      fromChannelAlerts: l,
                    })
                  : J),
                (t[51] = J),
                (t[52] = T.end),
                (t[53] = l),
                (t[54] = K),
                (t[55] = U),
                (t[56] = u),
                (t[57] = ee))
              : (ee = t[57]),
              (Z = ee));
            break e;
          }
          case m.RevokeConfirm: {
            var te, ne;
            if (t[58] !== i || t[59] !== u) {
              ne = Symbol.for("react.early_return_sentinel");
              t: {
                var re;
                i != null && i.length > 0
                  ? (re = i.filter(f)[0])
                  : (re = u.filter(_)[0]);
                var oe = o("WAWebMsgGetters").getSender(re);
                if (oe == null) {
                  ne = void 0;
                  break t;
                }
                te = o("WAWebContactCollection").ContactCollection.assertGet(
                  oe,
                );
              }
              ((t[58] = i), (t[59] = u), (t[60] = te), (t[61] = ne));
            } else ((te = t[60]), (ne = t[61]));
            if (ne !== Symbol.for("react.early_return_sentinel")) return ne;
            var ae = te,
              ie;
            t[62] !== T
              ? ((ie = function () {
                  return T.pop();
                }),
                (t[62] = T),
                (t[63] = ie))
              : (ie = t[63]);
            var le;
            (t[64] !== ae || t[65] !== z || t[66] !== ie
              ? ((le = d.jsx(I, { onConfirm: z, onCancel: ie, contact: ae })),
                (t[64] = ae),
                (t[65] = z),
                (t[66] = ie),
                (t[67] = le))
              : (le = t[67]),
              (Z = le));
          }
        }
        var se;
        return (
          t[68] !== k || t[69] !== Z || t[70] !== T || t[71] !== X
            ? ((se = d.jsx(k, { requestDismiss: X, flow: T, children: Z })),
              (t[68] = k),
              (t[69] = Z),
              (t[70] = T),
              (t[71] = X),
              (t[72] = se))
            : (se = t[72]),
          se
        );
      }
    }
    function _(e) {
      return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
    }
    function f(e) {
      return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
    }
    function g(e) {
      return e != null ? o("WAWebChatGetters").getIsNewsletter(e) : !1;
    }
    function h(e) {
      return o("WAWebFrontendMsgGetters").getChat(e);
    }
    function y(e) {
      return o("WAWebFrontendMsgGetters").getChat(e);
    }
    function C() {
      r("WAWebEnforcementActionLogging").logDismissModalClick();
    }
    function b(e) {
      return e.reduce(
        function (e, t) {
          var n = o("WAWebMsgActionCapability").canSenderRevokeMsg(t),
            r = o("WAWebMsgActionCapability").canAdminRevokeMsg(t),
            a = o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(
              t,
            ),
            i = e.sender + (n || a ? 1 : 0),
            l = e.admin + (r && !a ? 1 : 0),
            s = n || r || a,
            u = e.canRevoke && s && l <= 1,
            c = [].concat(e.revokeDurations, [
              o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(t),
            ]);
          return { sender: i, admin: l, canRevoke: u, revokeDurations: c };
        },
        { sender: 0, admin: 0, canRevoke: !0, revokeDurations: [] },
      );
    }
    var v = function (t, n) {
        var e;
        if (t.canRevoke && t.admin > 0) {
          var r = n.filter(function (e) {
              return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
            })[0],
            a = o("WAWebMsgGetters").getSender(r);
          if (a == null) return;
          var i = o("WAWebContactCollection").ContactCollection.assertGet(a);
          e = s._(/*BTDS*/ "Delete message from {name}?", [
            s._param(
              "name",
              d.jsx(o("WAWebName.react").ContactName, { contact: i }),
            ),
          ]);
        } else
          e = s._(
            /*BTDS*/ '_j{"*":"Delete messages?","_1":"Delete message?"}',
            [s._plural(n.length)],
          );
        return e;
      },
      S = function (t, n, a, i, l) {
        var e = null,
          u = null,
          c = l === "mediaHub" ? "negative-destructive" : "primary",
          m = d.jsx(
            o("WAWebButton.react").Button,
            {
              testid: void 0,
              type: t.canRevoke ? "secondary" : c,
              onClick: n,
              children: s._(/*BTDS*/ "Delete for me"),
            },
            2,
          ),
          p = d.jsx(
            o("WAWebButton.react").Button,
            { type: "secondary", onClick: a, children: s._(/*BTDS*/ "Cancel") },
            0,
          );
        return (
          t.canRevoke &&
            (e = d.jsx(
              o("WAWebButton.react").Button,
              {
                testid: void 0,
                type: "secondary",
                onClick: i,
                children: s._(/*BTDS*/ "Delete for everyone"),
              },
              1,
            )),
          e
            ? (u = d.jsxs(o("WAWebButton.react").ButtonGroup, {
                direction: "vertical",
                align: "end",
                children: [e, m, p],
              }))
            : l !== "mediaHub"
              ? (u = d.jsx(r("WDSButtonGroup.react"), {
                  orientation: "horizontal",
                  width: "hug",
                  tertiaryButtonProps: {
                    variant: "borderless",
                    type: "default",
                    onPress: a,
                    label: s._(/*BTDS*/ "Cancel"),
                  },
                  primaryButtonProps: {
                    variant: "filled",
                    type: "default",
                    onPress: n,
                    testid: "popup-controls-delete",
                    label: s._(/*BTDS*/ "Delete for me"),
                  },
                }))
              : (u = d.jsxs(o("WAWebButton.react").ButtonGroup, {
                  direction: "horizontal",
                  children: [p, m],
                })),
          u
        );
      };
    function R(t) {
      var n = o("react-compiler-runtime").c(22),
        r,
        a;
      n[0] !== t
        ? ((a = t.ref),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i = r,
        l = i.commentList,
        s = i.onCancel,
        u = i.onDelete,
        c = i.onRevoke,
        m = i.revokable,
        p = i.theme,
        _;
      n[3] !== l || n[4] !== m
        ? ((_ = v(m, l)), (n[3] = l), (n[4] = m), (n[5] = _))
        : (_ = n[5]);
      var f = _,
        g;
      n[6] !== s || n[7] !== u || n[8] !== c || n[9] !== m || n[10] !== p
        ? ((g = S(m, u, s, c, p)),
          (n[6] = s),
          (n[7] = u),
          (n[8] = c),
          (n[9] = m),
          (n[10] = p),
          (n[11] = g))
        : (g = n[11]);
      var h = g,
        y;
      n[12] !== s
        ? ((y = { escape: s }), (n[12] = s), (n[13] = y))
        : (y = n[13]);
      var C = y,
        b;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { surface: "delete-message", viewName: "delete-revoke-msg" }),
          (n[14] = b))
        : (b = n[14]);
      var R;
      n[15] !== f || n[16] !== h
        ? ((R = d.jsx(o("WAWebModal.react").Modal, {
            actions: h,
            title: f,
            tsNavigationData: b,
          })),
          (n[15] = f),
          (n[16] = h),
          (n[17] = R))
        : (R = n[17]);
      var L;
      return (
        n[18] !== C || n[19] !== a || n[20] !== R
          ? ((L = d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: a,
              handlers: C,
              children: R,
            })),
            (n[18] = C),
            (n[19] = a),
            (n[20] = R),
            (n[21] = L))
          : (L = n[21]),
        L
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(42),
        n,
        r;
      t[0] !== e
        ? ((r = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a = n,
        i = a.clearMedia,
        l = a.msgList,
        c = a.onCancel,
        m = a.onDelete,
        p = a.onRevoke,
        _ = a.onToggleClearMedia,
        f = a.revokable,
        g = a.theme,
        h,
        y;
      t[3] !== _
        ? ((y = function () {
            _();
          }),
          (t[3] = _),
          (t[4] = y))
        : (y = t[4]);
      var C = y;
      if (l.some(k)) {
        var b;
        t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = s._(/*BTDS*/ "Delete file from your phone")), (t[5] = b))
          : (b = t[5]);
        var v = b,
          R;
        t[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = {
              className: "x78zum5 x1f6kntn xo5v014 x14z9mp x14vqqas x18d9i69",
            }),
            (t[6] = R))
          : (R = t[6]);
        var L;
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = {
              className:
                "x1rg5ohu x1c4vz4f x2lah0s xdl72j9 x1sa5p1d x1uuroth x19991ni x1d8287x xwji4o3",
            }),
            (t[7] = L))
          : (L = t[7]);
        var I;
        t[8] !== i || t[9] !== C
          ? ((I = d.jsx(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, L, {
                children: d.jsx(o("WAWebCheckBox.react").CheckBox, {
                  ariaLabel: v,
                  onChange: C,
                  checked: i,
                }),
              }),
            )),
            (t[8] = i),
            (t[9] = C),
            (t[10] = I))
          : (I = t[10]);
        var T;
        t[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = {
              className:
                "x1iyjqo2 xs83m0k xdl72j9 xc26acl x19991ni x1d8287x xwji4o3",
            }),
            (t[11] = T))
          : (T = t[11]);
        var D;
        t[12] !== C
          ? ((D = d.jsx(
              "div",
              babelHelpers.extends({}, T, { onClick: C, children: v }),
            )),
            (t[12] = C),
            (t[13] = D))
          : (D = t[13]);
        var x;
        (t[14] !== I || t[15] !== D
          ? ((x = d.createElement(
              "div",
              babelHelpers.extends({}, R, { key: 0 }),
              I,
              D,
            )),
            (t[14] = I),
            (t[15] = D),
            (t[16] = x))
          : (x = t[16]),
          (h = x));
      }
      var $;
      if (f.canRevoke && f.admin > 0) {
        var P, N;
        if (t[17] !== l) {
          N = Symbol.for("react.early_return_sentinel");
          e: {
            var M = l.filter(E)[0],
              w = o("WAWebMsgGetters").getSender(M);
            if (w == null) {
              N = void 0;
              break e;
            }
            P = o("WAWebContactCollection").ContactCollection.assertGet(w);
          }
          ((t[17] = l), (t[18] = P), (t[19] = N));
        } else ((P = t[18]), (N = t[19]));
        if (N !== Symbol.for("react.early_return_sentinel")) return N;
        var A = P,
          F;
        (t[20] !== A
          ? ((F = s._(/*BTDS*/ "Delete message from {name}?", [
              s._param(
                "name",
                d.jsx(o("WAWebName.react").ContactName, { contact: A }),
              ),
            ])),
            (t[20] = A),
            (t[21] = F))
          : (F = t[21]),
          ($ = F));
      } else if (
        l.length === 1 &&
        o("WAWebMsgGetters").getIsEdited(l[0]) &&
        o("WAWebMsgGetters").getIsFailed(l[0])
      ) {
        var O;
        (t[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = s._(
              /*BTDS*/ "Your edited message was not sent. You can always delete the message.",
            )),
            (t[22] = O))
          : (O = t[22]),
          ($ = O));
      } else {
        var B;
        (t[23] !== l.length
          ? ((B = s._(
              /*BTDS*/ '_j{"*":"Delete messages?","_1":"Delete message?"}',
              [s._plural(l.length)],
            )),
            (t[23] = l.length),
            (t[24] = B))
          : (B = t[24]),
          ($ = B));
      }
      var W;
      t[25] !== c || t[26] !== m || t[27] !== p || t[28] !== f || t[29] !== g
        ? ((W = S(f, m, c, p, g)),
          (t[25] = c),
          (t[26] = m),
          (t[27] = p),
          (t[28] = f),
          (t[29] = g),
          (t[30] = W))
        : (W = t[30]);
      var q = W,
        U;
      t[31] !== c
        ? ((U = { escape: c }), (t[31] = c), (t[32] = U))
        : (U = t[32]);
      var V = U,
        H;
      t[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = { surface: "delete-message", viewName: "delete-revoke-msg" }),
          (t[33] = H))
        : (H = t[33]);
      var G;
      t[34] !== $ || t[35] !== q || t[36] !== h
        ? ((G = d.jsx(o("WAWebModal.react").Modal, {
            actions: q,
            title: $,
            tsNavigationData: H,
            children: h,
          })),
          (t[34] = $),
          (t[35] = q),
          (t[36] = h),
          (t[37] = G))
        : (G = t[37]);
      var z;
      return (
        t[38] !== V || t[39] !== r || t[40] !== G
          ? ((z = d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: r,
              handlers: V,
              children: G,
            })),
            (t[38] = V),
            (t[39] = r),
            (t[40] = G),
            (t[41] = z))
          : (z = t[41]),
        z
      );
    }
    function E(e) {
      return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
    }
    function k(e) {
      return (
        o("WAWebFrontendMsgGetters").getAsMms(e) &&
        e.type !== o("WAWebMsgType").MSG_TYPE.STICKER
      );
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.contact,
        r = e.onCancel,
        a = e.onConfirm,
        i = e.ref,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { surface: "delete-message", viewName: "revoke-confirm" }),
          (t[0] = l))
        : (l = t[0]);
      var u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s._(/*BTDS*/ "Delete for everyone")), (t[1] = u))
        : (u = t[1]);
      var c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Cancel")), (t[2] = c))
        : (c = t[2]);
      var m;
      t[3] !== n
        ? ((m = s._(
            /*BTDS*/ "As an admin, you are deleting {name}'s message for everyone in this chat. They will see that you deleted the message.",
            [
              s._param(
                "name",
                d.jsx(o("WAWebName.react").ContactName, { contact: n }),
              ),
            ],
          )),
          (t[3] = n),
          (t[4] = m))
        : (m = t[4]);
      var p;
      return (
        t[5] !== r || t[6] !== a || t[7] !== i || t[8] !== m
          ? ((p = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: l,
              ref: i,
              okText: u,
              onOK: a,
              okButtonType: "solid-warning",
              cancelText: c,
              onCancel: r,
              children: m,
            })),
            (t[5] = r),
            (t[6] = a),
            (t[7] = i),
            (t[8] = m),
            (t[9] = p))
          : (p = t[9]),
        p
      );
    }
    l.default = p;
  },
  226,
);
