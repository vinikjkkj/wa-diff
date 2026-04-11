__d(
  "WAWebNewGroupParticipantsDrawer.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebClickable.react",
    "WAWebContactGetters",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebGroupMetadataCollection",
    "WAWebLidMigrationUtils",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebRound.react",
    "WAWebSelectGroupParticipantsDrawer.react",
    "WAWebTabOrder",
    "WAWebText_DONOTUSE.react",
    "WAWebUnnamedNewGroupAlreadyExistsModal.react",
    "WAWebWid",
    "WDSIconIcArrowForward.react",
    "react",
    "useWAWebGroupDiscardGuard",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useState,
      _ = {
        paragraph: {
          paddingTop: "xyamay9",
          paddingInlineEnd: "x64bnmy",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x13jy36j",
          fontSize: "x1f6kntn",
          lineHeight: "x37zpob",
          textAlign: "x2b8uid",
          color: "xhslqc4",
          overflowWrap: "x1mzt3pk",
          $$css: !0,
        },
      },
      f = { surface: "group-member-add-group-creation" };
    function g(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.participants,
        l = i === void 0 ? [] : i,
        u = a.initialSelectedOutContacts,
        d = u === void 0 ? [] : u,
        g = a.onBack,
        h = a.onCancel,
        y = a.onContinue,
        C = a.onParticipantsChange,
        b = a.communityName,
        v = a.parentGroupId,
        S = a.initialSelectedSubgroup,
        R = a.participantsDrawerTitle,
        L = p(l),
        E = L[0],
        k = L[1],
        I = p(Array.from(d)),
        T = I[0],
        D = I[1],
        x = o("useWAWebGroupDiscardGuard").useGroupCreationDiscardGuard(
          E.length,
        ),
        $ = m(
          function () {
            x().then(function (e) {
              e && (g == null || g());
            });
          },
          [x, g],
        ),
        P = m(
          function () {
            x().then(function (e) {
              e && (h == null || h());
            });
          },
          [x, h],
        ),
        N = function () {
          var e = r("WAWebGroupMetadataCollection").filter(function (e) {
            var t = e.participants.filter(function (e) {
              return !o("WAWebContactGetters").getIsMe(e.contact);
            });
            if (t.length === E.length && e.subject === "") {
              for (
                var n = E.sort(function (e, t) {
                    return e.id.toString().localeCompare(t.id.toString());
                  }),
                  a = t.sort(function (e, t) {
                    return e.id.toString().localeCompare(t.id.toString());
                  }),
                  i = 0;
                i < n.length;
                i++
              )
                if (
                  !r("WAWebWid").equals.apply(
                    r("WAWebWid"),
                    o("WAWebLidMigrationUtils").toCommonAddressingMode(
                      n[i].id,
                      a[i].id,
                    ),
                  )
                )
                  return !1;
              return !0;
            }
            return !1;
          });
          if (e.length > 0) return e[0].id;
        },
        M = function () {
          var e = N();
          !v && e
            ? o("WAWebModalManager").ModalManager.openSupportModal(
                c.jsx(r("WAWebUnnamedNewGroupAlreadyExistsModal.react"), {
                  existingUnnamedGroup: e,
                  onCancel: function () {
                    o("WAWebModalManager").ModalManager.closeSupportOrModal();
                  },
                  onCreateNewGroupClick: function () {
                    (o("WAWebModalManager").ModalManager.closeSupportOrModal(),
                      y(E, !1, T));
                  },
                  onEnd: function () {
                    (o("WAWebModalManager").ModalManager.closeSupportOrModal(),
                      o("WAWebModalManager").ModalManager.close());
                  },
                }),
              )
            : v
              ? y(E, !1, T)
              : y(
                  E,
                  E.length <=
                    o("WAWebABProps").getABPropConfigValue(
                      "ugc_participant_limit",
                    ),
                  T,
                );
        },
        w =
          b != null && E.length
            ? c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                xstyle: _.paragraph,
                children: s._(
                  /*BTDS*/ 'Members will also be added to the community "{community-name}" and its announcement group.',
                  [
                    s._param(
                      "community-name",
                      c.jsx(o("WAWebEmojiText.react").EmojiText, { text: b }),
                    ),
                  ],
                ),
              })
            : null,
        A = o("WAWebMiscGatingUtils").getGroupSizeLimit();
      return c.jsx(r("WAWebSelectGroupParticipantsDrawer.react"), {
        ref: n,
        testid: void 0,
        tsNavigationData: f,
        viewType: a.viewType,
        header: R != null ? R : s._(/*BTDS*/ "Add group members"),
        participants: E,
        selectionSizeLimit: A,
        errorToastOnAddParticipantLimit: s._(
          /*BTDS*/ "Can't add more than {max} members",
          [s._param("max", A)],
        ),
        nextBtn: c.jsx(o("WAWebClickable.react").Clickable, {
          "data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER,
          onClick: M,
          children: c.jsx(o("WAWebRound.react").Round, {
            testid: void 0,
            label: r("WAWebFbtCommon")("Next"),
            children: c.jsx(r("WDSIconIcArrowForward.react"), {
              directional: !0,
              colorName: "contentOnAccent",
            }),
          }),
        }),
        nextBtnDetail: w,
        communityName: b,
        parentGroupId: v,
        initialSelectedSubgroup: S,
        onChange: function (t) {
          (k(t), C == null || C(t));
        },
        initialSelectedOutContacts: T,
        onOutContactSelectionChange: D,
        onKeyboardEnter: M,
        onBack: g != null ? $ : g,
        onCancel: h != null ? P : h,
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
