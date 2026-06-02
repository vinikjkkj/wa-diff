__d(
  "WAWebCreateCommunityAction",
  [
    "fbt",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebCommunityLinkingFailedModal.react",
    "WAWebCoreActionsODS",
    "WAWebGroupCommunityJob",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebProfilePicThumbAction",
    "WAWebProfilePicThumbCollection",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUiActionWamEvent",
    "WAWebWamEnumUiActionType",
    "WAWebWidFactory",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    async function d(t) {
      var n = t.desc,
        a = t.existingGroups,
        i = t.icon,
        l = t.name,
        u = t.onCommunityCreationFailure,
        d = t.shouldCreateGeneralChat,
        m = o("WAWebGroupCommunityJob").sendCreateCommunity({
          name: l,
          desc: n,
          closed: !0,
          hasAllowNonAdminSubGroupCreation: !0,
          shouldCreateGeneralChat: d,
        }),
        p = new (o("WAWebUiActionWamEvent").UiActionWamEvent)({
          uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE
            .COMMUNITY_CREATE,
          uiActionPreloaded: !1,
        }),
        _ = (async function () {
          try {
            return (
              await m,
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Community created"),
              )
            );
          } catch (t) {
            throw (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Community creation failed",
                    ])),
                )
                .verbose()
                .sendLogs("community-creation-failed"),
              new (o("WAAbortError").AbortError)()
            );
          }
        })(),
        f = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Creating community"),
        );
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: f,
          pendingAction: _,
        }),
      );
      try {
        var g = await m,
          h = g.wid;
        if (
          (o("WAWebCoreActionsODS").logGroupCreate(),
          d && o("WAWebCoreActionsODS").logGroupCreate(),
          i != null)
        ) {
          var y = o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.gadd(h);
          o("WAWebProfilePicThumbAction").setProfilePic(y, i, i);
        }
        if (a.length > 0) {
          var C = o("WAWebGroupCommunityJob")
            .sendLinkSubgroups({
              parentGroupId: h,
              subgroupIds: a.map(function (e) {
                return e.id;
              }),
            })
            .then(function (e) {
              if (e.failedGroups.length > 0) {
                var t = e.failedGroups.reduce(function (e, t) {
                  return e && t.error === 406;
                }, !0);
                o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("WAWebCommunityLinkingFailedModal.react"), {
                    parentGroupId: h,
                    failedGroups: e.failedGroups.map(function (e) {
                      return o("WAWebWidFactory").createWid(e.jid);
                    }),
                    isCommunityFull: t,
                  }),
                );
              }
            });
          C.finally(function () {
            (p.markUiActionT(), p.commit());
          });
        }
        return h;
      } catch (e) {
        (o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, {
            msg: s._(
              /*BTDS*/ "Community could not be created. Check your internet connection and try again.",
            ),
          }),
        ),
          o("WAFilteredCatch").filteredCatch(
            o("WAWebBackendErrors").ServerStatusCodeError,
            r("WAWebNoop"),
          )(e),
          u());
      }
    }
    l.default = d;
  },
  226,
);
