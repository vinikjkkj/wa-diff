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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.desc,
            i = t.existingGroups,
            l = t.icon,
            u = t.name,
            d = t.onCommunityCreationFailure,
            m = t.shouldCreateGeneralChat,
            p = o("WAWebGroupCommunityJob").sendCreateCommunity({
              name: u,
              desc: a,
              closed: !0,
              hasAllowNonAdminSubGroupCreation: !0,
              shouldCreateGeneralChat: m,
            }),
            _ = new (o("WAWebUiActionWamEvent").UiActionWamEvent)({
              uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE
                .COMMUNITY_CREATE,
              uiActionPreloaded: !1,
            }),
            f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                return (
                  yield p,
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
            g = new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Creating community"),
            );
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              initialAction: g,
              pendingAction: f,
            }),
          );
          try {
            var h = yield p,
              y = h.wid;
            if (
              (o("WAWebCoreActionsODS").logGroupCreate(),
              m && o("WAWebCoreActionsODS").logGroupCreate(),
              l != null)
            ) {
              var C = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.gadd(y);
              o("WAWebProfilePicThumbAction").setProfilePic(C, l, l);
            }
            if (i.length > 0) {
              var b = o("WAWebGroupCommunityJob")
                .sendLinkSubgroups({
                  parentGroupId: y,
                  subgroupIds: i.map(function (e) {
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
                        parentGroupId: y,
                        failedGroups: e.failedGroups.map(function (e) {
                          return o("WAWebWidFactory").createWid(e.jid);
                        }),
                        isCommunityFull: t,
                      }),
                    );
                  }
                });
              b.finally(function () {
                (_.markUiActionT(), _.commit());
              });
            }
            return y;
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
              d());
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  226,
);
