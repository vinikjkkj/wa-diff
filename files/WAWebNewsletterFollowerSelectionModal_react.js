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
    "useWAWebChatValues",
    "useWAWebNewsletterSubscribers",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e) {
      var t = e.chat,
        n = e.maxInvites,
        r = e.onConfirm,
        a = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebChatGetters").getId,
          o("WAWebFrontendChatGetters").getNewsletterMetadata,
          o("WAWebChatGetters").getIsNewsletter,
        ]),
        i = a[0],
        l = a[1],
        s = a[2],
        d = o("useWAWebNewsletterSubscribers").useNewsletterAllSubscribers(t),
        p = c(
          function () {
            return o(
              "WAWebNewsletterInviteSelectionModal.react",
            ).contactsToIdSet(d);
          },
          [d],
        ),
        _ = n != null ? n : 0,
        f = function (t) {
          return p.has(t.toString());
        },
        g = function (t) {
          return f(t.id);
        },
        h = function (t) {
          if (f(t)) return m.alreadyAFollower();
        },
        y = function (t) {
          return o(
            "WAWebNewsletterInviteSelectionModal.react",
          ).getInviteModalData(d, t);
        };
      return u.jsx(
        o("WAWebNewsletterInviteSelectionModal.react")
          .WAWebNewsletterInviteSelectionModal,
        {
          customSecondaryText: h,
          maxItems: _,
          isDisabled: g,
          onConfirm: r,
          customGetData: y,
          modalTitle: m.modalTitleFollowerInvite(),
          infoHeader: m.infoSectionFollowerInvite(),
        },
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
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
