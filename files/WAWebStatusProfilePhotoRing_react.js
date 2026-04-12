__d(
  "WAWebStatusProfilePhotoRing.react",
  [
    "fbt",
    "WAJids",
    "WAWebDetailImage.react",
    "WAWebFrontendStatusGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebOpenStatusQuotedFlow",
    "WAWebStatusGatingUtils",
    "WAWebStatusGetters",
    "WAWebStatusImageRing.react",
    "WAWebStatusQuotedFlowLoadable",
    "WDSVars.stylex",
    "react",
    "useWAWebStatusValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = 4,
      m = 53;
    function p(e) {
      var t = e.contactStatus,
        n = e.hideWhenNoUnreadStatuses,
        r = e.photoSize,
        a = e.rowIndex,
        i = e.rowSection,
        l = e.waitIdle,
        p = o("useWAWebStatusValues").useStatusValues(t.id, [
          o("WAWebStatusGetters").getId,
          o("WAWebFrontendStatusGetters").getContact,
          o("WAWebStatusGetters").getTotalCount,
          o("WAWebStatusGetters").getUnreadCount,
          o("WAWebFrontendStatusGetters").getLastStatus,
        ]),
        _ = p[0],
        f = p[1],
        g = p[2],
        h = p[3],
        y = p[4],
        C = c(
          function () {
            return !o(
              "WAWebStatusGatingUtils",
            ).isStatusCloseFriendsViewerSideEnabled() || y == null
              ? null
              : y.statusAudienceMetadata != null
                ? o("WDSVars.stylex").WDSBaseColor.plum400
                : null;
          },
          [y],
        ),
        b = (h === 0 && e.hideWhenNoUnreadStatuses) || g === 0,
        v = function (n) {
          if (!b) {
            if (
              (n.stopPropagation(),
              n.preventDefault(),
              t.isSyntheticFromMetadata &&
                _.isNewsletter() &&
                o(
                  "WAWebNewsletterGatingUtils",
                ).isNewsletterStatusReceiverEnabled())
            ) {
              o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus({
                newsletterJid: o("WAJids").toNewsletterJid(_.toString()),
                statusModelId: _,
                rowSection: i,
                rowIndex: a,
              });
              return;
            }
            o("WAWebModalManager").ModalManager.openMedia(
              u.jsx(
                o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable,
                {
                  status: t,
                  onClose: function () {
                    return o("WAWebModalManager").ModalManager.closeMedia();
                  },
                  rowSection: i,
                  rowIndex: a,
                },
              ),
              { transition: "status-modal" },
            );
          }
        },
        S = o("WAWebDetailImage.react").getSize(r),
        R = S != null ? S + d : m,
        L = s._(/*BTDS*/ "View status");
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
            id: _,
            size: R,
            stroke: d,
            hideWhenNoUnreadStatuses: n,
            theme: o("WAWebStatusImageRing.react").RingTheme.ChatList,
            respectAppTheme: !0,
            breakRing: !1,
            customUnreadRingColor: C,
          }),
          u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            onClick: v,
            children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: f.id,
              theme: b ? void 0 : "status_profile_photo_ring",
              size: r,
              waitIdle: l,
              ephemeralIcon: "chat-list",
              tabIndex: 0,
              ariaLabel: L,
              onClick: v,
            }),
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
