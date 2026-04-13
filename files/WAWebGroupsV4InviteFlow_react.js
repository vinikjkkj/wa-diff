__d(
  "WAWebGroupsV4InviteFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWebChatSendMessages",
    "WAWebConfirmPopup.react",
    "WAWebFbtIntlList",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupsV4InviteAddComment.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebSendMsgResultAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "countWhere",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c.useRef,
      p = n("$InternalEnum").Mirrored(["Confirm", "AddComment"]);
    function _(e) {
      var t = o("react-compiler-runtime").c(39),
        a = o("useWAWebFlow").useFlow(p.Confirm),
        i = a[0],
        l = a[1],
        c = r("WAWebGroupMetadataCollection").get(e.groupGid),
        _ = !!(c != null && c.isParentGroup) || !!(c != null && c.isCag),
        C = y,
        b;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function (t, n) {
            var e = n === void 0 ? !1 : n;
            if (!Array.isArray(t)) return C(t, e);
            var o = t.map(function (t) {
              return C(t, e);
            });
            return r("WAWebFbtIntlList")(
              o,
              r("WAWebFbtIntlList").CONJUNCTIONS.AND,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            );
          }),
          (t[0] = b))
        : (b = t[0]);
      var v = b,
        S = m(!1),
        R;
      t[1] !== e
        ? ((R = function () {
            S.current || ((S.current = !0), e.onFinish == null || e.onFinish());
          }),
          (t[1] = e),
          (t[2] = R))
        : (R = t[2]);
      var L = R,
        E,
        k;
      if (t[3] !== e.participantNeedInvite) {
        var I = v(e.participantNeedInvite.map(h), !0);
        ((E = s._(
          /*BTDS*/ '_j{"*":"Couldn\'t add {member}. You can invite them privately to join this group."}',
          [s._plural(e.participantNeedInvite.length), s._param("member", I)],
        )),
          (k = s._(
            /*BTDS*/ '_j{"*":"Couldn\'t add {member}. You can invite them privately to join this community."}',
            [s._plural(e.participantNeedInvite.length), s._param("member", I)],
          )),
          (t[3] = e.participantNeedInvite),
          (t[4] = E),
          (t[5] = k));
      } else ((E = t[4]), (k = t[5]));
      var T = k,
        D = _ ? T : E,
        x;
      t[6] !== L ||
      t[7] !== e.groupGid ||
      t[8] !== e.participantNeedInvite ||
      t[9] !== e.subject
        ? ((x = function (a, i) {
            var t = a === void 0 ? "" : a;
            (o("WAWebModalManager").ModalManager.close(),
              L(),
              (u || (u = n("Promise")))
                .all(
                  e.participantNeedInvite.map(
                    (function () {
                      var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (n) {
                          var a = n.contact,
                            l = n.invite_code,
                            s = n.invite_code_exp,
                            u = yield o(
                              "WAWebFindChatAction",
                            ).findOrCreateLatestChat(
                              a.id,
                              "groupsV4InviteFlow",
                            ),
                            c = u.chat,
                            d = e.groupGid.toString(),
                            m = r("WAWebGroupMetadataCollection").assertGet(d),
                            p = yield o(
                              "WAWebChatSendMessages",
                            ).sendGroupInviteMessage(
                              c,
                              d,
                              e.subject,
                              l || "",
                              s,
                              t,
                              i,
                            );
                          return p.messageSendResult ===
                            o("WAWebSendMsgResultAction").SendMsgResult.OK
                            ? (m.pendingParticipants.add({ id: a.id }), !0)
                            : !1;
                        },
                      );
                      return function (e) {
                        return a.apply(this, arguments);
                      };
                    })(),
                  ),
                )
                .then(g)
                .catch(f));
          }),
          (t[6] = L),
          (t[7] = e.groupGid),
          (t[8] = e.participantNeedInvite),
          (t[9] = e.subject),
          (t[10] = x))
        : (x = t[10]);
      var $ = x,
        P;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Invite to group")), (t[11] = P))
        : (P = t[11]);
      var N = P,
        M;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(/*BTDS*/ "Invite to community")), (t[12] = M))
        : (M = t[12]);
      var w = M,
        A = _ ? w : N;
      if (l.step == null) return null;
      var F = null;
      e: switch (l.step) {
        case p.Confirm: {
          var O;
          t[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((O = { surface: "unknown", viewName: "group-invite-flow" }),
              (t[13] = O))
            : (O = t[13]);
          var B;
          t[14] !== l
            ? ((B = function () {
                return l.push(p.AddComment);
              }),
              (t[14] = l),
              (t[15] = B))
            : (B = t[15]);
          var W;
          t[16] !== L || t[17] !== l
            ? ((W = function () {
                (l.pop(), L());
              }),
              (t[16] = L),
              (t[17] = l),
              (t[18] = W))
            : (W = t[18]);
          var q;
          t[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((q = s._(/*BTDS*/ "Cancel")), (t[19] = q))
            : (q = t[19]);
          var U;
          (t[20] !== D || t[21] !== A || t[22] !== B || t[23] !== W
            ? ((U = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: O,
                onOK: B,
                okText: A,
                onCancel: W,
                cancelText: q,
                children: D,
              })),
              (t[20] = D),
              (t[21] = A),
              (t[22] = B),
              (t[23] = W),
              (t[24] = U))
            : (U = t[24]),
            (F = U));
          break e;
        }
        case p.AddComment: {
          var V;
          t[25] !== L || t[26] !== l
            ? ((V = function () {
                (l.pop(), L());
              }),
              (t[25] = L),
              (t[26] = l),
              (t[27] = V))
            : (V = t[27]);
          var H;
          (t[28] !== $ ||
          t[29] !== e.groupDesc ||
          t[30] !== e.groupGid ||
          t[31] !== e.participantNeedInvite ||
          t[32] !== e.subject ||
          t[33] !== V
            ? ((H = d.jsx(r("WAWebGroupsV4InviteAddComment.react"), {
                participants: e.participantNeedInvite,
                gid: e.groupGid,
                subject: e.subject,
                groupDesc: e.groupDesc,
                onClose: V,
                onSend: $,
              })),
              (t[28] = $),
              (t[29] = e.groupDesc),
              (t[30] = e.groupGid),
              (t[31] = e.participantNeedInvite),
              (t[32] = e.subject),
              (t[33] = V),
              (t[34] = H))
            : (H = t[34]),
            (F = H));
        }
      }
      var G;
      return (
        t[35] !== i || t[36] !== F || t[37] !== l
          ? ((G = d.jsx(i, { flow: l, children: F })),
            (t[35] = i),
            (t[36] = F),
            (t[37] = l),
            (t[38] = G))
          : (G = t[38]),
        G
      );
    }
    function f(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[error] handleSendInvite",
            ])),
        )
        .sendLogs("groups-v4-invite-send-failed");
    }
    function g(e) {
      var t = r("countWhere")(e, Boolean);
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ '_j{"*":"{num} invites sent","_1":"1 invite sent"}',
            [s._plural(t, "num")],
          ),
        }),
      );
    }
    function h(e) {
      return e.contact;
    }
    function y(e, t) {
      var n = t === void 0 ? !1 : t;
      return n
        ? o("WAWebFrontendContactGetters").getFormattedUser(e)
        : d.jsx(o("WAWebName.react").Name, { contact: e });
    }
    l.default = _;
  },
  226,
);
