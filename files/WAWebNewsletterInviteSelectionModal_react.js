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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(23),
        n = e.customGetData,
        r = e.customSecondaryText,
        a = e.infoHeader,
        i = e.isDisabled,
        l = e.maxItems,
        s = e.modalTitle,
        c = e.onConfirm,
        d = m(0),
        _ = d[0],
        f = d[1],
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function (t, n, r) {
            f(r.length);
          }),
          (t[0] = g))
        : (g = t[0]);
      var y = g,
        C;
      t[1] !== s
        ? ((C = u.jsx(o("WAWebText.react").WAWebTextLarge, {
            color: "wdsContentDefault",
            xstyle: p.inviteModalTitle,
            children: s,
          })),
          (t[1] = s),
          (t[2] = C))
        : (C = t[2]);
      var b;
      t[3] !== l || t[4] !== _
        ? ((b = h.modalSubtitle(_, l)), (t[3] = l), (t[4] = _), (t[5] = b))
        : (b = t[5]);
      var v;
      t[6] !== b
        ? ((v = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            color: "wdsContentDeemphasized",
            xstyle: p.followerSelectionCount,
            children: b,
          })),
          (t[6] = b),
          (t[7] = v))
        : (v = t[7]);
      var S;
      t[8] !== C || t[9] !== v
        ? ((S = u.jsxs(u.Fragment, { children: [C, v] })),
          (t[8] = C),
          (t[9] = v),
          (t[10] = S))
        : (S = t[10]);
      var R = S,
        L;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = [16, 24]), (t[11] = L))
        : (L = t[11]);
      var E;
      t[12] !== a
        ? ((E = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            padding: L,
            xstyle: p.customHeader,
            children: a,
          })),
          (t[12] = a),
          (t[13] = E))
        : (E = t[13]);
      var k = E,
        I;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {
            surface: "unknown",
            viewName: "newsletter-invite-selection",
          }),
          (t[14] = I))
        : (I = t[14]);
      var T;
      return (
        t[15] !== n ||
        t[16] !== k ||
        t[17] !== r ||
        t[18] !== R ||
        t[19] !== i ||
        t[20] !== l ||
        t[21] !== c
          ? ((T = u.jsx(o("WAWebSelectModal.react").SelectModal, {
              customHeader: k,
              onSelectionChanged: y,
              headerChildren: R,
              listType: o("WAWebSelectModal.react").ListType
                .ParticipantManageModal,
              onConfirm: c,
              maxItems: l,
              isDisabled: i,
              customSecondaryText: r,
              singleSelectionFooterType: o("WAWebSelectModalFooter.react")
                .FooterType.CONFIRM,
              multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
                .FooterType.CONFIRM,
              shouldShowSelectionSummary: !1,
              customGetData: n,
              tsNavigationData: I,
            })),
            (t[15] = n),
            (t[16] = k),
            (t[17] = r),
            (t[18] = R),
            (t[19] = i),
            (t[20] = l),
            (t[21] = c),
            (t[22] = T))
          : (T = t[22]),
        T
      );
    }
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
