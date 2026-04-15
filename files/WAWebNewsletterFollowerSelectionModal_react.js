__d(
  "WAWebNewsletterFollowerSelectionModal.react",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebCommonNewsletterStrings",
    "WAWebFrontendChatGetters",
    "WAWebNewsletterInviteSelectionModal.react",
    "WAWebUserPrefsMeUser",
    "WAWebWidFormat",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebNewsletterSubscribers",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.chat,
        r = e.maxInvites,
        a = e.onConfirm,
        i;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebChatGetters").getId,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
            o("WAWebChatGetters").getIsNewsletter,
          ]),
          (t[0] = i))
        : (i = t[0]),
        o("useWAWebChatValues").useChatValues(n.id, i));
      var l = o("useWAWebNewsletterSubscribers").useNewsletterAllSubscribers(n),
        s;
      t[1] !== l
        ? ((s = o("WAWebNewsletterInviteSelectionModal.react").contactsToIdSet(
            l,
          )),
          (t[1] = l),
          (t[2] = s))
        : (s = t[2]);
      var c = s,
        d = r != null ? r : 0,
        p;
      t[3] !== c
        ? ((p = function (t) {
            return c.has(t.toString());
          }),
          (t[3] = c),
          (t[4] = p))
        : (p = t[4]);
      var _ = p,
        f;
      t[5] !== _
        ? ((f = function (t) {
            return _(t.id);
          }),
          (t[5] = _),
          (t[6] = f))
        : (f = t[6]);
      var g = f,
        h;
      t[7] !== _
        ? ((h = function (t) {
            if (_(t)) return m.alreadyAFollower();
          }),
          (t[7] = _),
          (t[8] = h))
        : (h = t[8]);
      var y = h,
        C;
      t[9] !== l
        ? ((C = function (t) {
            return o(
              "WAWebNewsletterInviteSelectionModal.react",
            ).getInviteModalData(l, t);
          }),
          (t[9] = l),
          (t[10] = C))
        : (C = t[10]);
      var b = C,
        v,
        S;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = m.modalTitleFollowerInvite()),
          (S = m.infoSectionFollowerInvite()),
          (t[11] = v),
          (t[12] = S))
        : ((v = t[11]), (S = t[12]));
      var R;
      return (
        t[13] !== b || t[14] !== y || t[15] !== g || t[16] !== d || t[17] !== a
          ? ((R = u.jsx(
              o("WAWebNewsletterInviteSelectionModal.react")
                .WAWebNewsletterInviteSelectionModal,
              {
                customSecondaryText: y,
                maxItems: d,
                isDisabled: g,
                onConfirm: a,
                customGetData: b,
                modalTitle: v,
                infoHeader: S,
              },
            )),
            (t[13] = b),
            (t[14] = y),
            (t[15] = g),
            (t[16] = d),
            (t[17] = a),
            (t[18] = R))
          : (R = t[18]),
        R
      );
    }
    var m = {
      modalTitleFollowerInvite: function () {
        return s._(/*BTDS*/ "Invite followers");
      },
      alreadyAFollower: function () {
        return s._(/*BTDS*/ "Already a follower");
      },
      infoSectionFollowerInvite: function () {
        return o("WAWebCommonNewsletterStrings").followerInviteDisclaimer(
          o("WAWebWidFormat").widToFormattedUser(
            o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          ),
        );
      },
    };
    l.default = d;
  },
  226,
);
