__d(
  "WAWebCopyGroupInviteLinkAction",
  [
    "WALogger",
    "WAWebAddMemberInviteLinkLogger",
    "WAWebBackendErrors",
    "WAWebChatGroupUtils",
    "WAWebCopyLinkToast.react",
    "WAWebCopyToClipboard",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupInviteAction",
    "WAWebGroupInviteLinkErrors.react",
    "WAWebGroupInviteUtils.react",
    "WAWebGroupMetadataGetters",
    "WAWebNameGroupToShare.react",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      g(
        e,
        function () {
          (o("WAWebAddMemberInviteLinkLogger").logAddMemberInviteOptionsOpened(
            r("nullthrows")(e.groupMetadata),
          ),
            t());
        },
        n,
      );
    }
    function c(e, t) {
      g(
        e,
        function () {
          return d(r("nullthrows")(e.groupMetadata));
        },
        t,
      );
    }
    async function d(e) {
      o("WAWebAddMemberInviteLinkLogger").logAddMemberCopyLinkClick(e);
      var t;
      try {
        t = await f(e);
      } catch (t) {
        p(e, t);
        return;
      }
      o("WAWebCopyLinkToast.react").openLinkCopyResultToast(
        t != null && (await o("WAWebCopyToClipboard").copyTextToClipboard(t)),
      );
    }
    function m(t) {
      var n = r("nullthrows")(t.groupMetadata);
      o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(t) ||
        o("WAWebGroupMetadataGetters").getIsUnnamed(n) ||
        o("WAWebFrontendGroupMetadataGetters").getGroupInviteLink(n) != null ||
        o("WAWebGroupInviteAction")
          .queryGroupInviteCode(n)
          .catch(function (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[add-member-invite-link] invite link prefetch failed",
                ])),
            );
          });
    }
    function p(e, t) {
      if (!(t instanceof o("WAWebBackendErrors").ServerStatusCodeError)) {
        (o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[add-member-invite-link] invite link query failed",
            ])),
        ),
          o("WAWebCopyLinkToast.react").openLinkCopyResultToast(!1));
        return;
      }
      if (
        t.statusCode ===
        o("WAWebGroupInviteLinkErrors.react").GROWTH_LOCKED_STATUS_CODE
      ) {
        (o("WAWebGroupInviteLinkErrors.react").refreshGrowthLockedGroupMetadata(
          e.id,
        ),
          _(e));
        return;
      }
      o("WAWebGroupInviteLinkErrors.react").openGroupInviteLinkErrorToast(
        t.statusCode,
      );
    }
    function _(e) {
      o("WAWebGroupInviteUtils.react").openGrowthLockedModal(
        e.participants.iAmAdmin(),
        !0,
        e.memberLinkMode,
        !0,
      );
    }
    async function f(e) {
      var t = o("WAWebFrontendGroupMetadataGetters").getGroupInviteLink(e);
      return t != null
        ? t
        : (await o("WAWebGroupInviteAction").queryGroupInviteCode(e),
          o("WAWebFrontendGroupMetadataGetters").getGroupInviteLink(e));
    }
    function g(e, t, n) {
      var a = r("nullthrows")(e.groupMetadata);
      if (o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(e)) {
        _(a);
        return;
      }
      if (o("WAWebGroupMetadataGetters").getIsUnnamed(a)) {
        o("WAWebNameGroupToShare.react").openNameGroupToShareModal({
          chat: e,
          onNamed: t,
          signal: n,
          stackOverExistingModal: !0,
        });
        return;
      }
      t();
    }
    ((l.openInviteOptions = u),
      (l.copyGroupInviteLink = c),
      (l.prefetchGroupInviteLink = m));
  },
  98,
);
