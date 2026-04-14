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
        n = e.chat,
        a = e.onBack,
        i = e.onDeactivateCommunity,
        l = e.onTransferOwnership,
        s =
          !o("WAWebChatGroupUtils").isTerminatedGroupOrNotMember(n) &&
          !o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(n)
            ? u.jsx(_, { chat: n, onTransferOwnership: l })
            : null,
        d = o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(n)
          ? u.jsx(p, { chat: n, onBack: a })
          : null,
        h = o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(n)
          ? null
          : u.jsx(m, { chat: n, onTransferOwnership: l }),
        y = r("useWAWebEventTargetValue")(
          n == null || (t = n.groupMetadata) == null ? void 0 : t.participants,
          ["bulk_add", "bulk_remove", "reset", "change:isSuperAdmin"],
          function () {
            return (
              o("WAWebChatCommunityUtils").isCommunitySuperAdmin(n) &&
              !o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(n)
            );
          },
        ),
        C = r("useWAWebEventTargetValue")(
          n == null ? void 0 : n.groupMetadata,
          ["change:suspended"],
          function () {
            return !o("WAWebChatCommunityUtils").isSuspendedCommunity(n);
          },
        ),
        b = y ? u.jsx(f, { onDeactivateCommunity: i }) : null,
        v = y && C ? u.jsx(g, { onTransferOwnership: l }) : null;
      return u.jsxs(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
        {
          xstyle: [
            c.drawerSectionContainer,
            o("WAWebUISpacing").uiMargin.vert10,
          ],
          children: [v, s, d, h, b],
        },
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.chat,
        n = e.onTransferOwnership,
        a = s._(/*BTDS*/ "Report community"),
        i = function (a) {
          a.preventDefault();
          var e = function () {
              (o("WAWebSendSpamChatAction").sendReport({
                chat: t,
                spamFlow: o("WAWebSpamConstants").SpamFlow.CommunityHome,
              }),
                o("WAWebModalManager").ModalManager.close());
            },
            i = function () {
              o("WAWebSendSpamChatAction")
                .sendReport({
                  chat: t,
                  spamFlow: o("WAWebSpamConstants").SpamFlow.CommunityHome,
                })
                .then(function () {
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(r("WAWebLeaveCommunityModal.react"), {
                      chat: t,
                      onTransferOwnership: n,
                      spamFlow: o("WAWebSpamConstants").SpamFlow.CommunityHome,
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
        };
      return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
        ariaLabel: a.toString(),
        testid: void 0,
        color: "danger",
        icon: u.jsx(r("WDSIconIcThumbDown.react"), {}),
        theme: "chat-info",
        onClick: i,
        children: s._(/*BTDS*/ "Report community"),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
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
      var t = e.onDeactivateCommunity,
        n = s._(/*BTDS*/ "Deactivate community");
      return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
        ariaLabel: n.toString(),
        testid: void 0,
        color: "danger",
        icon: u.jsx(o("WAWebDeactivateIconIcon.react").DeactivateIconIcon, {}),
        theme: "chat-info",
        onClick: t,
        children: s._(/*BTDS*/ "Deactivate community"),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.onTransferOwnership,
        n = s._(/*BTDS*/ "Assign new owner"),
        r = function (n) {
          (n.preventDefault(), t());
        };
      return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
        ariaLabel: n.toString(),
        testid: void 0,
        color: "secondary",
        icon: u.jsx(o("WAWebPersonArrowIcon.react").PersonArrowIcon, {
          directional: !0,
        }),
        theme: "chat-info",
        onClick: r,
        children: n,
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
