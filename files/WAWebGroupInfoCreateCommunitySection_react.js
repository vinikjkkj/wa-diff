__d(
  "WAWebGroupInfoCreateCommunitySection.react",
  [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebABProps",
    "WAWebAddGroupToCommunityFlowLoadable.react",
    "WAWebCellV2.react",
    "WAWebChevronIcon.react",
    "WAWebCommunityCreationFlowMetricUtils",
    "WAWebCommunityGatingUtils",
    "WAWebCommunitySquircleIcon.react",
    "WAWebConfirmPopup.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebFbtCommon",
    "WAWebGroupType",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebNameGroupModal.react",
    "WAWebNoop",
    "WAWebSetSubjectGroupAction",
    "WAWebText.react",
    "WAWebWamEnumCommunityCreationCurrentScreenType",
    "WAWebWamEnumCommunityCreationEntrypointType",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        communitySquircle: { color: "x1v5yvga", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(23),
        a = e.chat,
        i = e.groupMetadata,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["id", "parentGroup", "isUnnamed"]), (t[0] = l))
        : (l = t[0]);
      var u = o("useWAWebModelValues").useModelValues(i, l),
        m = u.id,
        f = u.isUnnamed,
        g = u.parentGroup,
        h;
      t[1] !== i.participants
        ? ((h = function () {
            return i.participants.iAmAdmin();
          }),
          (t[1] = i.participants),
          (t[2] = h))
        : (h = t[2]);
      var y = r("useWAWebEventTargetValue")(
          i.participants,
          "change:isAdmin",
          h,
        ),
        C;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = ["bulk_add", "bulk_remove", "reset"]), (t[3] = C))
        : (C = t[3]);
      var b;
      t[4] !== i.participants.length
        ? ((b = function () {
            return i.participants.length;
          }),
          (t[4] = i.participants.length),
          (t[5] = b))
        : (b = t[5]);
      var v = r("useWAWebEventTargetValue")(i.participants, C, b),
        S = o("WAWebABProps").getABPropConfigValue(
          "parent_group_min_participants_for_group_entry_point",
        ),
        R = r("useWAWebUnmountSignal")();
      if (
        !y ||
        g != null ||
        v < S ||
        i.groupType ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
        !o("WAWebCommunityGatingUtils").communitiesCreationEnabled() ||
        i.isSuspendedOrTerminated()
      )
        return null;
      var L;
      t[6] !== m
        ? ((L = function () {
            var e = c.jsx(
              o("WAWebAddGroupToCommunityFlowLoadable.react")
                .AddGroupToCommunityFlowLoadable,
              {
                groupToBeLinked: m,
                onEnd: o("WAWebDrawerManager").closeDrawerLeft,
              },
            );
            (o("WAWebDrawerManager").DrawerManager.openDrawerLeft(e, {
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            }),
              o(
                "WAWebCommunityCreationFlowMetricUtils",
              ).UiCommunityCreationAction.startSession(
                o("WAWebWamEnumCommunityCreationEntrypointType")
                  .COMMUNITY_CREATION_ENTRYPOINT_TYPE.GROUP_INFO,
              ),
              o(
                "WAWebCommunityCreationFlowMetricUtils",
              ).UiCommunityCreationAction.enter(
                o("WAWebWamEnumCommunityCreationCurrentScreenType")
                  .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.GROUP_INFO,
              ));
          }),
          (t[6] = m),
          (t[7] = L))
        : (L = t[7]);
      var E = L,
        k;
      t[8] !== a || t[9] !== E || t[10] !== R
        ? ((k = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = e;
                (yield r("WAPromiseRaceAbort")(
                  o("WAWebSetSubjectGroupAction").setGroupSubject(a, n),
                  R,
                )
                  .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                  .catch(_),
                  o("WAWebModalManager").ModalManager.close(),
                  E());
              },
            );
            return function (n, r) {
              return e.apply(this, arguments);
            };
          })()),
          (t[8] = a),
          (t[9] = E),
          (t[10] = R),
          (t[11] = k))
        : (k = t[11]);
      var I = k,
        T = p,
        D;
      t[12] !== a || t[13] !== E || t[14] !== I || t[15] !== f
        ? ((D = function () {
            if (f) {
              var e,
                t,
                n = s._(
                  /*BTDS*/ "This group was created without a name. Give it a name to create a community.",
                );
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebNameGroupModal.react"), {
                  chat: a,
                  subtext: n,
                  onCancel: o("WAWebModalManager").closeModalManager,
                  onOK: I,
                  editable:
                    (e = a.groupMetadata) == null ? void 0 : e.canSetSubject(),
                  editRestrictionInfo:
                    (t = a.groupMetadata) != null && t.restrict ? T : void 0,
                }),
              );
            } else E();
          }),
          (t[12] = a),
          (t[13] = E),
          (t[14] = I),
          (t[15] = f),
          (t[16] = D))
        : (D = t[16]);
      var x = D,
        $;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = c.jsx(
            o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon,
            { iconXstyle: d.communitySquircle, width: 49, height: 49 },
          )),
          (t[17] = $))
        : ($ = t[17]);
      var P;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            children: s._(/*BTDS*/ "Add group to a community"),
          })),
          (t[18] = P))
        : (P = t[18]);
      var N, M;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = c.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
            children: s._(
              /*BTDS*/ "Bring members together in topic-based groups",
            ),
          })),
          (M = c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            iconXstyle: d.secondaryColor,
            directional: !0,
            height: 21,
          })),
          (t[19] = N),
          (t[20] = M))
        : ((N = t[19]), (M = t[20]));
      var w;
      return (
        t[21] !== x
          ? ((w = c.jsx(r("WAWebDrawerSection.react"), {
              theme: "no-padding",
              children: c.jsx(r("WAWebCellV2.react"), {
                testid: void 0,
                detailLeft: $,
                primary: P,
                secondary: N,
                detailRight: M,
                onClick: x,
                size: "medium",
                isRefresh: !0,
              }),
            })),
            (t[21] = x),
            (t[22] = w))
          : (w = t[22]),
        w
      );
    }
    function p() {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          okText: r("WAWebFbtCommon")("OK"),
          children: s._(/*BTDS*/ "Only admins can edit this group's info"),
        }),
      );
    }
    function _(t) {
      o("WALogger").WARN(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "name_group_modal:onSetSubject failed",
          ])),
      );
    }
    l.default = m;
  },
  226,
);
