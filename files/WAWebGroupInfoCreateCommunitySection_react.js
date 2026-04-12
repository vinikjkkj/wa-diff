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
    function m(t) {
      var a = t.chat,
        i = t.groupMetadata,
        l = o("useWAWebModelValues").useModelValues(i, [
          "id",
          "parentGroup",
          "isUnnamed",
        ]),
        u = l.id,
        m = l.isUnnamed,
        p = l.parentGroup,
        _ = r("useWAWebEventTargetValue")(
          i.participants,
          "change:isAdmin",
          function () {
            return i.participants.iAmAdmin();
          },
        ),
        f = r("useWAWebEventTargetValue")(
          i.participants,
          ["bulk_add", "bulk_remove", "reset"],
          function () {
            return i.participants.length;
          },
        ),
        g = o("WAWebABProps").getABPropConfigValue(
          "parent_group_min_participants_for_group_entry_point",
        ),
        h = r("useWAWebUnmountSignal")();
      if (
        !_ ||
        p != null ||
        f < g ||
        i.groupType ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
        !o("WAWebCommunityGatingUtils").communitiesCreationEnabled() ||
        i.isSuspendedOrTerminated()
      )
        return null;
      var y = function () {
          var e = c.jsx(
            o("WAWebAddGroupToCommunityFlowLoadable.react")
              .AddGroupToCommunityFlowLoadable,
            {
              groupToBeLinked: u,
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
        },
        C = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              var i = t;
              (yield r("WAPromiseRaceAbort")(
                o("WAWebSetSubjectGroupAction").setGroupSubject(a, i),
                h,
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
                y());
            },
          );
          return function (n, r) {
            return t.apply(this, arguments);
          };
        })(),
        b = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: o("WAWebModalManager").closeModalManager,
              okText: r("WAWebFbtCommon")("OK"),
              children: s._(/*BTDS*/ "Only admins can edit this group's info"),
            }),
          );
        },
        v = function () {
          if (m) {
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
                onOK: C,
                editable:
                  (e = a.groupMetadata) == null ? void 0 : e.canSetSubject(),
                editRestrictionInfo:
                  (t = a.groupMetadata) != null && t.restrict ? b : void 0,
              }),
            );
          } else y();
        };
      return c.jsx(r("WAWebDrawerSection.react"), {
        theme: "no-padding",
        children: c.jsx(r("WAWebCellV2.react"), {
          testid: void 0,
          detailLeft: c.jsx(
            o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon,
            { iconXstyle: d.communitySquircle, width: 49, height: 49 },
          ),
          primary: c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            children: s._(/*BTDS*/ "Add group to a community"),
          }),
          secondary: c.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
            children: s._(
              /*BTDS*/ "Bring members together in topic-based groups",
            ),
          }),
          detailRight: c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            iconXstyle: d.secondaryColor,
            directional: !0,
            height: 21,
          }),
          onClick: v,
          size: "medium",
          isRefresh: !0,
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
