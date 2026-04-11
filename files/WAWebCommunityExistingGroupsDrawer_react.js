__d(
  "WAWebCommunityExistingGroupsDrawer.react",
  [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WANullthrows",
    "WAPromiseRaceAbort",
    "WAWebArrowForwardIcon.react",
    "WAWebChatCollection",
    "WAWebChatModel",
    "WAWebChatParticipantList.react",
    "WAWebCommunityGatingUtils",
    "WAWebCommunitySubgroupsLimitReachedPopup.react",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebGroupGatingUtils",
    "WAWebGroupMetadataCollection",
    "WAWebGroupType",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebMultiSelectChatList.react",
    "WAWebMultiSelection",
    "WAWebNameGroupModal.react",
    "WAWebNoop",
    "WAWebRichTextField.react",
    "WAWebRound.react",
    "WAWebSetSubjectGroupAction",
    "WAWebSingleSelection",
    "WAWebSpinner.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "asyncToGeneratorRuntime",
    "lodash",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useRef,
      g = p.useState,
      h = {
        drawerSection: {
          zIndex: "xhtitgo",
          display: "x78zum5",
          justifyContent: "x1l1ennw",
          paddingBottom: "x1ci70gm",
          marginTop: "xevwqry",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        paragraph: {
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          fontSize: "x1f6kntn",
          lineHeight: "x37zpob",
          textAlign: "x2b8uid",
          color: "xhslqc4",
          backgroundColor: "x1280gxy",
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          overflowWrap: "x1mzt3pk",
          $$css: !0,
        },
        createNewGroupText: { color: "x1eqckd8", $$css: !0 },
      };
    function y(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, u),
        l,
        d,
        p = i.addedExistingGroups,
        y = i.currentSubgroupCount,
        C = i.flowSelectedGroups,
        b = i.groupsSuggestedByMeToCommunity,
        v = i.isCommunityAdmin,
        S = i.isCommunityCreation,
        R = i.isParentGroupClosed,
        L = i.onBack,
        E = i.onContinue,
        k = i.onCreateNewGroup,
        I = i.setFlowSelectedGroups,
        T =
          S === !0
            ? o(
                "WAWebCommunityGatingUtils",
              ).getParentGroupLinkLimitCommunityCreation()
            : o("WAWebCommunityGatingUtils").getParentGroupLinkLimit(),
        D = T - y,
        x = Array.from(p != null ? p : []),
        $ = g(""),
        P = $[0],
        N = $[1],
        M = r("useLazyRef")(function () {
          return new (r("WAWebMultiSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        w = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        A = f(null),
        F = g(C),
        O = F[0],
        B = F[1],
        W = g([]),
        q = W[0],
        U = W[1],
        V = g(!0),
        H = V[0],
        G = V[1],
        z = f(new (r("WAWebFlatListController"))()),
        j = f(null);
      _(
        function () {
          var e;
          (e = j.current) == null || e.triggerFocus();
        },
        void 0,
      );
      var K = function () {
        G(!0);
        var e = o(
            "WAWebContactCollection",
          ).ContactCollection.getGroupContacts(),
          t = e.filter(function (e) {
            var t,
              n = o("WAWebChatCollection").ChatCollection.get(e.id.toString()),
              r =
                n == null || (t = n.groupMetadata) == null
                  ? void 0
                  : t.participants;
            return r != null && r.iAmAdmin() && !(p != null && p.has(e.id));
          }),
          n = t.filter(function (e) {
            var t = r("WAWebGroupMetadataCollection").get(e.id.toString());
            return (
              (t == null ? void 0 : t.groupType) ===
                o("WAWebGroupType").GroupType.DEFAULT ||
              (t == null ? void 0 : t.groupType) ===
                o("WAWebGroupType").GroupType.LINKED_SUBGROUP
            );
          });
        (U(n), G(!1));
      };
      _(function () {
        (K(),
          C.forEach(function (e) {
            M.current.setVal(e, !0);
          }));
      }, []);
      var Q = function () {
          var e;
          (e = j.current) == null || e.triggerFocus();
        },
        X = function () {
          (I(O), E());
        },
        Y = function () {
          var e;
          (N(""), (e = j.current) == null || e.clearTextInput());
        },
        J = function (t) {
          (M.current.setVal(t, !1), B(M.current.getSelected()), Y());
        },
        Z = function (t, n) {
          J(n);
        },
        ee = function (t) {
          (t == null || t.preventDefault(), w.current.setFirst(!0));
        },
        te = function (t) {
          var e;
          (w.current.unset(), (e = j.current) == null || e.triggerFocus());
        },
        ne = r("useWAWebUnmountSignal")(),
        re = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              var a = t;
              (yield r("WAPromiseRaceAbort")(
                o("WAWebSetSubjectGroupAction").setGroupSubject(n, a),
                ne,
              )
                .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                .catch(function (t) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "name_group_modal:onSetSubject failed",
                      ])),
                  );
                }),
                o("WAWebModalManager").ModalManager.close(),
                B(M.current.getSelected()),
                Y());
            },
          );
          return function (n, r) {
            return t.apply(this, arguments);
          };
        })(),
        oe = function () {
          o("WAWebModalManager").ModalManager.open(
            m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: o("WAWebModalManager").closeModalManager,
              okText: r("WAWebFbtCommon")("OK"),
              tsNavigationData: {
                surface: "unknown",
                viewName: "community-existing-groups",
              },
              children: s._(/*BTDS*/ "Only admins can edit this group's info"),
            }),
          );
        },
        ae = function (t, n) {
          if (O.length >= D && n)
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebCommunitySubgroupsLimitReachedPopup.react"), {
                maxSubgroups: T,
                isCommunityCreation: S,
              }),
            );
          else {
            var e = r("WAWebGroupMetadataCollection").get(t.id),
              a = (e == null ? void 0 : e.isUnnamed) === !0;
            if (a) {
              var i = r("WANullthrows")(
                  o("WAWebChatCollection").ChatCollection.get(t.id.toString()),
                ),
                l = r("WANullthrows")(
                  M.current.list.find(function (e) {
                    return e.id.toString() === t.id.toString();
                  }),
                ),
                u = s._(
                  /*BTDS*/ "This group was created without a name. Give it a name to add it to a community.",
                );
              o("WAWebModalManager").ModalManager.open(
                m.jsx(r("WAWebNameGroupModal.react"), {
                  chat: i,
                  subtext: u,
                  onCancel: function () {
                    (J(l), o("WAWebModalManager").ModalManager.close());
                  },
                  onOK: re,
                  editable: e == null ? void 0 : e.canSetSubject(),
                  editRestrictionInfo: e != null && e.restrict ? oe : void 0,
                }),
              );
            } else (B(M.current.getSelected()), Y());
          }
        },
        ie = function () {
          var e = r("lodash").differenceWith(q, x, function (e, t) {
            return e.id.equals(t);
          });
          return e;
        },
        le;
      O.length > 0 &&
        (le = m.jsx(o("WAWebRound.react").Round, {
          className: "x1r0gsg0 x11t971q xat24cr xvc5jky",
          testid: void 0,
          label: s._(/*BTDS*/ "Continue to add existing groups to community"),
          onClick: X,
          children: m.jsx(o("WAWebArrowForwardIcon.react").ArrowForwardIcon, {
            directional: !0,
          }),
        }));
      var se = function (t) {
          var e = r("WAWebGroupMetadataCollection").get(t.id.toString()),
            n =
              (e == null ? void 0 : e.groupType) ===
              o("WAWebGroupType").GroupType.LINKED_SUBGROUP,
            a = !!(
              b != null &&
              b.some(function (e) {
                return e.equals(t.id);
              })
            );
          return n || a;
        },
        ue = function (t, n) {
          if (!(!n || !(t instanceof o("WAWebChatModel").Chat))) {
            var e = r("WAWebGroupMetadataCollection").get(t.id.toString()),
              a =
                (e == null ? void 0 : e.groupType) ===
                o("WAWebGroupType").GroupType.LINKED_SUBGROUP;
            if (a) {
              var i,
                l =
                  (i = t.groupMetadata) == null ||
                  (i = i.getParentGroupChat()) == null
                    ? void 0
                    : i.formattedTitle;
              return s._(/*BTDS*/ 'Already added to "{community-name}"', [
                s._param(
                  "community-name",
                  m.jsx(o("WAWebEmojiText.react").EmojiText, { text: l }),
                ),
              ]);
            } else if (
              b != null &&
              b.some(function (e) {
                return e.equals(t.id);
              })
            )
              return s._(/*BTDS*/ "Already suggested to this community");
          }
        },
        ce = ie(),
        de = m.jsx(r("WAWebMultiSelectChatList.react"), {
          ref: A,
          active: w.current,
          selections: M.current,
          flatListController: z.current,
          onLeaveList: Q,
          searchText: P,
          maxChats: D,
          onSelectionChanged: ae,
          chatFilter: function (t) {
            return ce.some(function (e) {
              return e.id.equals(t.id);
            });
          },
          excludeContacts: !0,
          isCommunityExistingGroupsDrawer: !0,
          isDisabled: se,
          customItemSecondaryText: ue,
        }),
        me;
      q.length > 0
        ? v
          ? R
            ? (me = s._(
                /*BTDS*/ "Everyone in the groups will be added to the community.",
              ))
            : (me = s._(
                /*BTDS*/ "Everyone in the groups will be added to the community. Anyone in the community can join these groups.",
              ))
          : (me = s._(
              /*BTDS*/ "If approved by community admins, everyone in the groups will be added to the community.",
            ))
        : (me = m.jsxs(m.Fragment, {
            children: [
              s._(
                /*BTDS*/ "All groups you're an admin of have already been added to other communities.",
              ),
              " ",
              m.jsx(r("WAWebUnstyledButton.react"), {
                xstyle: h.createNewGroupText,
                onClick: k,
                children: s._(/*BTDS*/ "Create new group"),
              }),
            ],
          }));
      var pe = s._(/*BTDS*/ "Type group name"),
        _e =
          ((l = s._param("groupcount", O.length, [0])),
          (d = s._param("subgroups-left-to-max", D, [0])),
          s._(/*BTDS*/ '_j{"*":{"*":"Add existing groups ({=m1})"}}', [
            l,
            d,
            s._implicitParam(
              "=m1",
              m.jsx("span", {
                dir: r("WAWebL10N").LR("ltr", "rtl"),
                children: s._(
                  /*BTDS*/ '_j{"*":{"*":"{groupcount}{=m2}{subgroups-left-to-max}"}}',
                  [
                    l,
                    d,
                    s._implicitParam(
                      "=m2",
                      m.jsx("span", {
                        dir: r("WAWebL10N").LR("ltr", "rtl"),
                        children: s._(/*BTDS*/ '_j{"*":{"*":"\\\/"}}', [l, d]),
                      }),
                    ),
                  ],
                ),
              }),
            ),
          ]));
      return m.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        tsNavigationData: {
          surface: "unknown",
          viewName: "community-existing-groups",
        },
        children: [
          m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: _e,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: L,
          }),
          m.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              m.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                xstyle: h.paragraph,
                children: me,
              }),
              H
                ? m.jsx("div", {
                    className:
                      "x1280gxy x78zum5 xl56j7k x4i7bpe xyri2b x1sgudl8 x1c1uobl",
                    children: m.jsx(o("WAWebSpinner.react").Spinner, {}),
                  })
                : m.jsxs(m.Fragment, {
                    children: [
                      m.jsxs("div", {
                        className:
                          "xhig867 xscbp6u xizuyw3 x10wh9bi xpm28yp x8viiok x1o7cslx x1280gxy",
                        children: [
                          O.length > 0 &&
                            m.jsx(
                              "div",
                              babelHelpers.extends(
                                { "data-list-scroll-container": !0 },
                                (c || (c = r("stylex"))).props(
                                  o("WAWebUISpacing").uiPadding.top25,
                                ),
                                {
                                  children: m.jsx(
                                    r("WAWebChatParticipantList.react"),
                                    {
                                      theme: "list-names",
                                      contacts: O,
                                      onDelete: Z,
                                      onFocusSearch: Q,
                                    },
                                  ),
                                },
                              ),
                            ),
                          m.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                            handlers: { down: ee },
                            onFocus: te,
                            children: m.jsx(
                              o("WAWebRichTextField.react").RichTextField,
                              {
                                testid: void 0,
                                title: pe,
                                ref: j,
                                value: P,
                                showRemaining: !0,
                                onChange: function (t) {
                                  var e = t.text;
                                  return N(e);
                                },
                                placeholder: pe,
                                maxLength: o(
                                  "WAWebGroupGatingUtils",
                                ).getGroupMaxSubject(),
                                focusOnMount: !0,
                              },
                            ),
                          }),
                        ],
                      }),
                      m.jsx(r("WAWebFlatListContainer.react"), {
                        className:
                          "x1n2onr6 x1iyjqo2 xs83m0k x18xmwgd x6ikm8r x1odjw0f x1280gxy",
                        flatListControllers: [z.current],
                        children: de,
                      }),
                    ],
                  }),
              m.jsx(r("WAWebVelocityTransitionGroup"), {
                transitionName: "btn",
                xstyle: h.drawerSection,
                children: le,
              }),
            ],
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
