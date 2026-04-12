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
      var t = e.chat,
        n = e.onConfirm,
        r = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebChatGetters").getId,
          o("WAWebFrontendChatGetters").getNewsletterMetadata,
          o("WAWebChatGetters").getIsNewsletter,
          o("WAWebChatGetters").getId,
        ]),
        a = r[0],
        i = r[1],
        l = r[2],
        s = o("useWAWebNewsletterPendingInvites").useNewsletterPendingInvites(
          t,
        ),
        d = o("useWAWebNewsletterAdmins").useNewsletterAdmins(t),
        p = o("useWAWebNewsletterSubscribers").useNewsletterAllSubscribers(t),
        _ = c(
          function () {
            return o(
              "WAWebNewsletterInviteSelectionModal.react",
            ).contactsToIdSet(s);
          },
          [s],
        ),
        f = c(
          function () {
            return o(
              "WAWebNewsletterInviteSelectionModal.react",
            ).contactsToIdSet(d);
          },
          [d],
        ),
        g =
          o("WAWebNewsletterGatingUtils").getMaxNumberOfAdmins() -
          (d.length + s.length),
        h = function (t) {
          return f.has(t.toString());
        },
        y = function (t) {
          return _.has(t.toString());
        },
        C = function (t) {
          return h(t.id) || y(t.id);
        },
        b = function (t) {
          if (h(t)) return m.alreadyAnAdmin();
          if (y(t)) return m.alreadyInvited();
        },
        v = function (t) {
          return o(
            "WAWebNewsletterInviteSelectionModal.react",
          ).getInviteModalData(p, t);
        };
      return u.jsx(
        o("WAWebNewsletterInviteSelectionModal.react")
          .WAWebNewsletterInviteSelectionModal,
        {
          customSecondaryText: b,
          maxItems: g,
          isDisabled: C,
          onConfirm: n,
          customGetData: v,
          modalTitle: m.modalTitleAdminInvite(),
          infoHeader: m.privacyNuxAdmin(),
        },
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
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
