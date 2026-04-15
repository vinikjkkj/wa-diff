__d(
  "WAWebCommunityAdminPromotionNotificationFlow.react",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebCommunityAdminPromotionNotificationPopup.react",
    "WAWebCommunityAdminSelfDemotePopup.react",
    "WAWebCommunityLogEvents",
    "WAWebCommunityPromoteDemotePopups.react",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebNux",
    "WAWebWamEnumCadminDemoteOriginType",
    "WAWebWamEnumCadminDemoteResultType",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = n("$InternalEnum").Mirrored(["PromotionNotification", "Demote"]);
    function d(t) {
      var n = o("react-compiler-runtime").c(39),
        a = t.communityMetadata,
        i;
      n[0] !== a.id
        ? ((i = o("WAWebNux").getCommunityAdminPromotionNuxKey(
            a.id.toString(),
          )),
          (n[0] = a.id),
          (n[1] = i))
        : (i = n[1]);
      var l = i,
        s = r("useWAWebNux")(l),
        d = s[2],
        m = o("useWAWebFlow").useFlow(c.PromotionNotification),
        p = m[0],
        _ = m[1];
      if (_.step == null) return null;
      var f;
      e: switch (_.step) {
        case c.PromotionNotification: {
          var g;
          n[2] !== _
            ? ((g = function () {
                _.push(c.Demote);
              }),
              (n[2] = _),
              (n[3] = g))
            : (g = n[3]);
          var h = g,
            y;
          n[4] !== _ || n[5] !== d
            ? ((y = function () {
                (d(), _.end());
              }),
              (n[4] = _),
              (n[5] = d),
              (n[6] = y))
            : (y = n[6]);
          var C = y,
            b;
          (n[7] !== h || n[8] !== C
            ? ((b = u.jsx(
                r("WAWebCommunityAdminPromotionNotificationPopup.react"),
                { onDemote: h, onContinue: C },
              )),
              (n[7] = h),
              (n[8] = C),
              (n[9] = b))
            : (b = n[9]),
            (f = b));
          break e;
        }
        case c.Demote: {
          var v;
          n[10] !== a.id
            ? ((v = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(
                o("WAWebChatCollection").ChatCollection.get(a.id),
              )),
              (n[10] = a.id),
              (n[11] = v))
            : (v = n[11]);
          var S = v,
            R;
          n[12] !== a.participants || n[13] !== S
            ? ((R = function (t) {
                o("WAWebCommunityLogEvents").logCadminDemoteEvent(
                  o("WAWebWamEnumCadminDemoteOriginType")
                    .CADMIN_DEMOTE_ORIGIN_TYPE.PROMOTION_NOTIFICATION,
                  t,
                  a.participants.getAdmins().length === 1 || S,
                );
              }),
              (n[12] = a.participants),
              (n[13] = S),
              (n[14] = R))
            : (R = n[14]);
          var L = R,
            E;
          n[15] !== L
            ? ((E = function (t) {
                var e = t === void 0 ? !1 : t;
                (L(
                  e
                    ? o("WAWebWamEnumCadminDemoteResultType")
                        .CADMIN_DEMOTE_RESULT_TYPE.RETRY_CANCEL
                    : o("WAWebWamEnumCadminDemoteResultType")
                        .CADMIN_DEMOTE_RESULT_TYPE.CANCEL,
                ),
                  o("WAWebModalManager").ModalManager.close());
              }),
              (n[15] = L),
              (n[16] = E))
            : (E = n[16]);
          var k = E,
            I;
          n[17] !== a.id ||
          n[18] !== a.participants ||
          n[19] !== _ ||
          n[20] !== k ||
          n[21] !== d ||
          n[22] !== L
            ? ((I = function (n) {
                var t = n === void 0 ? !1 : n;
                d();
                var r = a.participants.getMeParticipant(),
                  i = o("WAWebChatCollection").ChatCollection.get(a.id);
                (r &&
                  i &&
                  ((r.contact.pendingAction = r.contact.pendingAction + 1),
                  o("WAWebModifyParticipantsGroupAction")
                    .demoteCommunityParticipants(i, [r])
                    .then(function () {
                      L(
                        t
                          ? o("WAWebWamEnumCadminDemoteResultType")
                              .CADMIN_DEMOTE_RESULT_TYPE.RETRY_SUCCESS
                          : o("WAWebWamEnumCadminDemoteResultType")
                              .CADMIN_DEMOTE_RESULT_TYPE.SUCCESS,
                      );
                    })
                    .catch(function (n) {
                      (o("WALogger")
                        .WARN(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "Error sending demote community participants iq",
                            ])),
                        )
                        .verbose()
                        .sendLogs("community-admin-self-demote-failed"),
                        L(
                          t
                            ? o("WAWebWamEnumCadminDemoteResultType")
                                .CADMIN_DEMOTE_RESULT_TYPE.RETRY_FAILURE
                            : o("WAWebWamEnumCadminDemoteResultType")
                                .CADMIN_DEMOTE_RESULT_TYPE.FAILURE,
                        ),
                        o("WAWebModalManager").ModalManager.open(
                          u.jsx(
                            o("WAWebCommunityPromoteDemotePopups.react")
                              .CommunityAdminDemoteErrorPopup,
                            {
                              onParticipantDemote: function () {
                                return I(!0);
                              },
                              onCancel: function () {
                                return k(!0);
                              },
                              isMe: !0,
                            },
                          ),
                        ));
                    })
                    .finally(function () {
                      r.contact.pendingAction = r.contact.pendingAction - 1;
                    })),
                  t ? o("WAWebModalManager").ModalManager.close() : _.end());
              }),
              (n[17] = a.id),
              (n[18] = a.participants),
              (n[19] = _),
              (n[20] = k),
              (n[21] = d),
              (n[22] = L),
              (n[23] = I))
            : (I = n[23]);
          var T;
          n[24] !== _ || n[25] !== L
            ? ((T = function () {
                (L(
                  o("WAWebWamEnumCadminDemoteResultType")
                    .CADMIN_DEMOTE_RESULT_TYPE.FAILURE,
                ),
                  _.pop());
              }),
              (n[24] = _),
              (n[25] = L),
              (n[26] = T))
            : (T = n[26]);
          var D = T,
            x;
          n[27] !== a.id
            ? ((x = o("WAWebChatCollection").ChatCollection.get(a.id)),
              (n[27] = a.id),
              (n[28] = x))
            : (x = n[28]);
          var $;
          (n[29] !== k ||
          n[30] !== I ||
          n[31] !== D ||
          n[32] !== S ||
          n[33] !== x
            ? (($ = u.jsx(r("WAWebCommunityAdminSelfDemotePopup.react"), {
                onDemote: I,
                onCancel: k,
                onFailure: D,
                isCommunitySuperAdmin: S,
                parentGroupChat: x,
              })),
              (n[29] = k),
              (n[30] = I),
              (n[31] = D),
              (n[32] = S),
              (n[33] = x),
              (n[34] = $))
            : ($ = n[34]),
            (f = $));
        }
      }
      var P;
      return (
        n[35] !== p || n[36] !== f || n[37] !== _
          ? ((P = u.jsx(p, { flow: _, children: f })),
            (n[35] = p),
            (n[36] = f),
            (n[37] = _),
            (n[38] = P))
          : (P = n[38]),
        P
      );
    }
    l.default = d;
  },
  98,
);
