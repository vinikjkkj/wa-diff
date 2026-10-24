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
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      y(
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
      y(
        e,
        function () {
          return d(r("nullthrows")(e.groupMetadata));
        },
        t,
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebAddMemberInviteLinkLogger").logAddMemberCopyLinkClick(e);
          var t;
          try {
            t = yield g(e);
          } catch (t) {
            _(e, t);
            return;
          }
          o("WAWebCopyLinkToast.react").openLinkCopyResultToast(
            t != null &&
              (yield o("WAWebCopyToClipboard").copyTextToClipboard(t)),
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(t) {
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
    function _(e, t) {
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
          f(e));
        return;
      }
      o("WAWebGroupInviteLinkErrors.react").openGroupInviteLinkErrorToast(
        t.statusCode,
      );
    }
    function f(e) {
      o("WAWebGroupInviteUtils.react").openGrowthLockedModal(
        e.participants.iAmAdmin(),
        !0,
        e.memberLinkMode,
        !0,
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebFrontendGroupMetadataGetters").getGroupInviteLink(e);
          return t != null
            ? t
            : (yield o("WAWebGroupInviteAction").queryGroupInviteCode(e),
              o("WAWebFrontendGroupMetadataGetters").getGroupInviteLink(e));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      var a = r("nullthrows")(e.groupMetadata);
      if (o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(e)) {
        f(a);
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
      (l.prefetchGroupInviteLink = p));
  },
  98,
);
