__d(
  "WAWebPrivacyVisibilityEditDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebAccountTakeOverBanner.react",
    "WAWebBackendErrors",
    "WAWebDefenseModeLockedInterstitial.react",
    "WAWebDefenseModeUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebModalManager",
    "WAWebPrivacySettings",
    "WAWebPrivacyVisibilityOption.react",
    "WAWebSelectContactsExceptModal.react",
    "WAWebSetPrivacyForOneCategoryAction",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUseContactManagementAvailability",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState;
    function m(t) {
      var a = t.category,
        i = t.onClose,
        l = t.onOpenContactsExceptModal,
        u = t.ref,
        m = d(function () {
          var e,
            t,
            n,
            r = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
          switch (a) {
            case "about":
              return (e = r.about) != null
                ? e
                : o("WAWebPrivacySettings").VISIBILITY.all;
            case "profilePicture":
              return (t = r.profilePicture) != null
                ? t
                : o("WAWebPrivacySettings").VISIBILITY.all;
            case "groupAdd":
              return (n = r.groupAdd) != null
                ? n
                : o("WAWebPrivacySettings").VISIBILITY.all;
          }
        }),
        f = m[0],
        g = m[1],
        h = d(function () {
          return o(
            "WAWebDefenseModeUtils",
          ).getWamEnumIfSettingLockedByDefenseMode(a);
        }),
        y = h[0],
        C = h[1],
        b = o(
          "WAWebUseContactManagementAvailability",
        ).useAccountIntegrityState();
      function v(e) {
        return S.apply(this, arguments);
      }
      function S() {
        return (
          (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            if (
              t !== o("WAWebPrivacySettings").VISIBILITY.contact_blacklist &&
              t !== f
            ) {
              g(t);
              var n = o(
                "WAWebSetPrivacyForOneCategoryAction",
              ).privacyWebNameToServerName(a);
              if (
                n === "readreceipts" ||
                n === "online" ||
                n === "calladd" ||
                n === "messages"
              )
                throw r("err")(
                  "visibility_edit_drawer: category can not be " + n,
                );
              try {
                switch (t) {
                  case o("WAWebPrivacySettings").VISIBILITY.none:
                    if (n === "groupadd")
                      throw r("err")(
                        "visibility_edit_drawer: groupadd can not be none",
                      );
                    yield o(
                      "WAWebSetPrivacyForOneCategoryAction",
                    ).setPrivacyForOneCategory({ name: n, value: "none" });
                    return;
                  case o("WAWebPrivacySettings").VISIBILITY.contacts:
                    yield o(
                      "WAWebSetPrivacyForOneCategoryAction",
                    ).setPrivacyForOneCategory({ name: n, value: "contacts" });
                    return;
                  case o("WAWebPrivacySettings").VISIBILITY.all:
                    yield o(
                      "WAWebSetPrivacyForOneCategoryAction",
                    ).setPrivacyForOneCategory({ name: n, value: "all" });
                    return;
                }
              } catch (t) {
                var i = r("getErrorSafe")(t);
                g(f);
                var l =
                  t instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                  t.statusCode === 409;
                (l ||
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "visibility_edit_drawer: set visiblity option failed ",
                          "",
                        ])),
                      i.stack,
                    )
                    .sendLogs(
                      "visibility_edit_drawer: set visiblity option failed",
                    ),
                  o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ "Failed to update privacy settings. Please try again.",
                      ),
                    }),
                  ));
              }
            }
          })),
          S.apply(this, arguments)
        );
      }
      var R = function () {
        var e = function () {
          g(o("WAWebPrivacySettings").VISIBILITY.contact_blacklist);
        };
        l != null
          ? l(e)
          : o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebSelectContactsExceptModal.react"), {
                category: a,
                onConfirm: e,
              }),
            );
      };
      o("useWAWebListener").useListener(
        o("WAWebUserPrefsGeneral").privacySettingsEventEmitter,
        "all",
        function () {
          var e,
            t = o(
              "WAWebDefenseModeUtils",
            ).getWamEnumIfSettingLockedByDefenseMode(a);
          C(t);
          var n = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
            r =
              (e =
                a === "about"
                  ? n.about
                  : a === "profilePicture"
                    ? n.profilePicture
                    : a === "groupAdd"
                      ? n.groupAdd
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              a,
                          );
                        })()) != null
                ? e
                : o("WAWebPrivacySettings").VISIBILITY.all;
          r !== f && g(r);
        },
      );
      var L = function (t) {
          return y == null
            ? t
            : babelHelpers.extends({}, t, {
                disabled: !0,
                onDisabledClick: function () {
                  o(
                    "WAWebDefenseModeLockedInterstitial.react",
                  ).openDefenseModeLockedInterstitialGlobal(y, t.value);
                },
              });
        },
        E = [
          L({
            value: o("WAWebPrivacySettings").VISIBILITY.all,
            label: s._(/*BTDS*/ "Everyone"),
            testid: "everyone",
          }),
          L({
            value: o("WAWebPrivacySettings").VISIBILITY.contacts,
            label: s._(/*BTDS*/ "My contacts"),
            testid: "my-contacts",
          }),
          L({
            value: o("WAWebPrivacySettings").VISIBILITY.contact_blacklist,
            label: s._(/*BTDS*/ "My contacts except..."),
            testid: "my-contacts-except",
            onChange: R,
            onClickSelected: R,
          }),
          a === "groupAdd"
            ? null
            : L({
                value: o("WAWebPrivacySettings").VISIBILITY.none,
                label: s._(/*BTDS*/ "Nobody"),
                testid: "nobody",
              }),
        ].filter(Boolean),
        k =
          a === "groupAdd"
            ? c.jsx(o("WAWebText.react").WAWebTextMuted, {
                margin: [20, 0],
                children: s._(
                  /*BTDS*/ "Admins who can't add you to a group will have the option of inviting you privately instead.",
                ),
              })
            : null,
        I =
          a === "groupAdd"
            ? c.jsx(o("WAWebText.react").WAWebTextMuted, {
                margin: [20, 0],
                children: s._(
                  /*BTDS*/ "This setting does not apply to community announcement groups. If you're added to a community, you'll always be added to a community announcement group.",
                ),
              })
            : null,
        T = null;
      return (
        b ===
          o("WAWebUseContactManagementAvailability").AccountIntegrityState
            .TIMELOCK &&
          (f === o("WAWebPrivacySettings").VISIBILITY.contacts ||
            f === o("WAWebPrivacySettings").VISIBILITY.contact_blacklist) &&
          (T = c.jsx(r("WAWebAccountTakeOverBanner.react"), {
            entryPoint: "privacy-settings",
          })),
        c.jsxs(r("WAWebDrawer.react"), {
          ref: u,
          testid: void 0,
          tsNavigationData: {
            surface: "unknown",
            viewName: "privacy-visibility-edit",
          },
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              testid: void 0,
              title: p(a),
              onBack: i,
              focusBackOrCancel: !0,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            }),
            c.jsxs(r("WAWebDrawerBody.react"), {
              children: [
                T,
                c.jsxs(r("WAWebDrawerSection.react"), {
                  theme: "padding-no-vertical",
                  animation: !1,
                  children: [
                    c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                      margin: [20, 0],
                      children: _(a),
                    }),
                    c.jsx("div", {
                      role: "radiogroup",
                      "aria-label": _(a),
                      children: E.map(function (e) {
                        return c.jsx(
                          r("WAWebPrivacyVisibilityOption.react"),
                          {
                            text: e.label,
                            selected: f === e.value,
                            disabled: e.disabled === !0 && f !== e.value,
                            testid: void 0,
                            onDisabledClick: e.onDisabledClick,
                            onClick: function () {
                              e.onChange != null ? e.onChange() : v(e.value);
                            },
                          },
                          e.value,
                        );
                      }),
                    }),
                    c.jsxs("div", { children: [k, I] }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      switch (e) {
        case "about":
          return s._(/*BTDS*/ "About");
        case "profilePicture":
          return s._(/*BTDS*/ "Profile picture");
        case "groupAdd":
          return s._(/*BTDS*/ "Groups");
      }
    }
    function _(e) {
      switch (e) {
        case "about":
          return s._(/*BTDS*/ "Who can see my About");
        case "profilePicture":
          return s._(/*BTDS*/ "Who can see my profile picture");
        case "groupAdd":
          return s._(/*BTDS*/ "Who can add me to groups");
      }
    }
    l.default = m;
  },
  226,
);
