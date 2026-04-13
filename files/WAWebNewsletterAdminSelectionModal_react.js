__d(
  "WAWebNewsletterAdminSelectionModal.react",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebCommonNewsletterStrings",
    "WAWebFrontendChatGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterInviteSelectionModal.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebNewsletterAdmins",
    "useWAWebNewsletterPendingInvites",
    "useWAWebNewsletterSubscribers",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.chat,
        r = e.onConfirm,
        a;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebChatGetters").getId,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebChatGetters").getId,
          ]),
          (t[0] = a))
        : (a = t[0]),
        o("useWAWebChatValues").useChatValues(n.id, a));
      var i = o("useWAWebNewsletterPendingInvites").useNewsletterPendingInvites(
          n,
        ),
        l = o("useWAWebNewsletterAdmins").useNewsletterAdmins(n),
        s = o("useWAWebNewsletterSubscribers").useNewsletterAllSubscribers(n),
        c;
      t[1] !== i
        ? ((c = o("WAWebNewsletterInviteSelectionModal.react").contactsToIdSet(
            i,
          )),
          (t[1] = i),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        p;
      t[3] !== l
        ? ((p = o("WAWebNewsletterInviteSelectionModal.react").contactsToIdSet(
            l,
          )),
          (t[3] = l),
          (t[4] = p))
        : (p = t[4]);
      var _ = p,
        f =
          o("WAWebNewsletterGatingUtils").getMaxNumberOfAdmins() -
          (l.length + i.length),
        g;
      t[5] !== _
        ? ((g = function (t) {
            return _.has(t.toString());
          }),
          (t[5] = _),
          (t[6] = g))
        : (g = t[6]);
      var h = g,
        y;
      t[7] !== d
        ? ((y = function (t) {
            return d.has(t.toString());
          }),
          (t[7] = d),
          (t[8] = y))
        : (y = t[8]);
      var C = y,
        b;
      t[9] !== h || t[10] !== C
        ? ((b = function (t) {
            return h(t.id) || C(t.id);
          }),
          (t[9] = h),
          (t[10] = C),
          (t[11] = b))
        : (b = t[11]);
      var v = b,
        S;
      t[12] !== h || t[13] !== C
        ? ((S = function (t) {
            if (h(t)) return m.alreadyAnAdmin();
            if (C(t)) return m.alreadyInvited();
          }),
          (t[12] = h),
          (t[13] = C),
          (t[14] = S))
        : (S = t[14]);
      var R = S,
        L;
      t[15] !== s
        ? ((L = function (t) {
            return o(
              "WAWebNewsletterInviteSelectionModal.react",
            ).getInviteModalData(s, t);
          }),
          (t[15] = s),
          (t[16] = L))
        : (L = t[16]);
      var E = L,
        k,
        I;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = m.modalTitleAdminInvite()),
          (k = m.privacyNuxAdmin()),
          (t[17] = k),
          (t[18] = I))
        : ((k = t[17]), (I = t[18]));
      var T;
      return (
        t[19] !== E || t[20] !== R || t[21] !== v || t[22] !== f || t[23] !== r
          ? ((T = u.jsx(
              o("WAWebNewsletterInviteSelectionModal.react")
                .WAWebNewsletterInviteSelectionModal,
              {
                customSecondaryText: R,
                maxItems: f,
                isDisabled: v,
                onConfirm: r,
                customGetData: E,
                modalTitle: I,
                infoHeader: k,
              },
            )),
            (t[19] = E),
            (t[20] = R),
            (t[21] = v),
            (t[22] = f),
            (t[23] = r),
            (t[24] = T))
          : (T = t[24]),
        T
      );
    }
    var m = {
      modalTitleAdminInvite: function () {
        return s._(/*BTDS*/ "Invite admins");
      },
      alreadyAnAdmin: function () {
        return s._(/*BTDS*/ "Already an admin");
      },
      alreadyInvited: function () {
        return s._(/*BTDS*/ "Already invited");
      },
      privacyNuxAdmin: function () {
        return o("WAWebCommonNewsletterStrings").adminPrivacyNux();
      },
    };
    l.WAWebNewsletterAdminSelectionModal = d;
  },
  226,
);
