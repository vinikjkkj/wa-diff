__d(
  "WAWebNewsletterInviteSelectionModal.react",
  [
    "fbt",
    "WAWebApiContact",
    "WAWebCommonNewsletterStrings",
    "WAWebLidMigrationUtils",
    "WAWebMultiSelectContactList.react",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebText.react",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "compactMap",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = {
        customHeader: {
          backgroundColor: "x1280gxy",
          borderBottomColor: "x120ee7l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "xso031l",
          $$css: !0,
        },
        inviteModalTitle: { paddingTop: "xv8gdss", $$css: !0 },
        followerSelectionCount: { marginBottom: "x1ua1l7f", $$css: !0 },
      };
    function _(e) {
      var t = e.customGetData,
        n = e.customSecondaryText,
        r = e.infoHeader,
        a = e.isDisabled,
        i = e.maxItems,
        l = e.modalTitle,
        s = e.onConfirm,
        c = m(0),
        _ = c[0],
        f = c[1],
        g = d(function (e, t, n) {
          f(n.length);
        }, []),
        y = u.jsxs(u.Fragment, {
          children: [
            u.jsx(o("WAWebText.react").WAWebTextLarge, {
              color: "wdsContentDefault",
              xstyle: p.inviteModalTitle,
              children: l,
            }),
            u.jsx(o("WAWebText.react").WAWebTextSmall, {
              color: "wdsContentDeemphasized",
              xstyle: p.followerSelectionCount,
              children: h.modalSubtitle(_, i),
            }),
          ],
        }),
        C = u.jsx(o("WAWebText.react").WAWebTextMuted, {
          padding: [16, 24],
          xstyle: p.customHeader,
          children: r,
        });
      return u.jsx(o("WAWebSelectModal.react").SelectModal, {
        customHeader: C,
        onSelectionChanged: g,
        headerChildren: y,
        listType: o("WAWebSelectModal.react").ListType.ParticipantManageModal,
        onConfirm: s,
        maxItems: i,
        isDisabled: a,
        customSecondaryText: n,
        singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType
          .CONFIRM,
        multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
          .FooterType.CONFIRM,
        shouldShowSelectionSummary: !1,
        customGetData: t,
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-invite-selection",
        },
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      return e.reduce(function (e, t) {
        var n = o("WAWebWidFactory").asUserWidOrThrow(t.id),
          r = o("WAWebApiContact").getAlternateUserWid(n);
        return (r != null && e.add(r.toString()), e.add(n.toString()), e);
      }, new Set());
    }
    function g(e, t) {
      var n = new Set(
          r("compactMap")(e, function (e) {
            var t;
            return (t = o("WAWebLidMigrationUtils").toPn(e.id)) == null
              ? void 0
              : t.toString();
          }),
        ),
        a = t.reduce(
          function (e, t) {
            var r = n.has(t.id.toString()) ? "followersFromContacts" : "others";
            return (e[r].push(t), e);
          },
          { followersFromContacts: [], others: [] },
        ),
        i = a.followersFromContacts,
        l = a.others,
        s = [];
      return (
        i.length > 0 &&
          (s.push({
            itemKey: o("WAWebMultiSelectContactList.react").ContactListSection
              .FOLLOWERS,
            type: o("WAWebMultiSelectContactList.react").ContactListSection
              .FOLLOWERS,
          }),
          s.push.apply(
            s,
            i.map(function (e) {
              return {
                itemKey: e.id.toString(),
                type: o("WAWebMultiSelectContactList.react").Row.ROW_CONTACTS,
                data: e,
                isUnknownContact: !1,
              };
            }),
          )),
        l.length > 0 &&
          (s.push({
            itemKey: o("WAWebMultiSelectContactList.react").ContactListSection
              .CONTACTS,
            type: o("WAWebMultiSelectContactList.react").ContactListSection
              .CONTACTS,
          }),
          s.push.apply(
            s,
            l.map(function (e) {
              return {
                itemKey: e.id.toString(),
                type: o("WAWebMultiSelectContactList.react").Row.ROW_CONTACTS,
                data: e,
                isUnknownContact: !1,
              };
            }),
          )),
        s
      );
    }
    var h = {
      modalSubtitle: function (t, n) {
        return s._(/*BTDS*/ '_j{"*":"{selected} of {max} selected"}', [
          s._plural(t),
          s._param("selected", t),
          s._param("max", n),
        ]);
      },
      privacyNuxAdmin: function () {
        return o("WAWebCommonNewsletterStrings").adminPrivacyNux();
      },
      infoSectionFollowerInvite: function () {
        return o("WAWebCommonNewsletterStrings").followerInviteDisclaimer(
          o("WAWebWidFormat").widToFormattedUser(
            o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          ),
        );
      },
    };
    ((l.WAWebNewsletterInviteSelectionModal = _),
      (l.contactsToIdSet = f),
      (l.getInviteModalData = g));
  },
  226,
);
