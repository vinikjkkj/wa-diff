__d(
  "WAWebNewGroupDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebAddressingModePopup.react",
    "WAWebCheckmarkMediumIcon.react",
    "WAWebChevronIcon.react",
    "WAWebClickable.react",
    "WAWebCommunityGetParticipantInfoText",
    "WAWebContactCollection",
    "WAWebDevOnlyBadge.react",
    "WAWebDrawer.react",
    "WAWebDrawerBlock.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebDrawerUtils",
    "WAWebEphemeralKicNux.react",
    "WAWebEphemeralL10N",
    "WAWebEphemeralPopup.react",
    "WAWebEphemeralityResolver",
    "WAWebGroupGatingUtils",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNux",
    "WAWebPhotoPickerConstants",
    "WAWebPhotoPickerLoadable.react",
    "WAWebRichTextField.react",
    "WAWebRound.react",
    "WAWebSpinner.react",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebUserPrefsNuxPreferences",
    "WAWebVelocityTransitionGroup",
    "WDSColorStyles.stylex",
    "gkx",
    "react",
    "useWAWebCallbackOnce",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c.useState,
      p = {
        header: { marginBottom: "x13m54ha", $$css: !0 },
        chevronIcon: { color: "xhslqc4", $$css: !0 },
      },
      _ = { surface: "group-creation" };
    function f(e) {
      var t = e.ephemeralDuration,
        n = e.handleEphemeralDurationClick,
        a;
      t > 0
        ? (a = o("WAWebEphemeralL10N").getDisappearingMessageDurationString(t))
        : (a = s._(/*BTDS*/ "Off"));
      var i = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
        xstyle: p.chevronIcon,
        directional: !0,
        height: 21,
      });
      return d.jsx(r("WAWebDrawerSection.react"), {
        children: d.jsxs(r("WAWebDrawerBlock.react"), {
          tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
          testid: void 0,
          onClick: n,
          side: i,
          ariaLabel: s._(/*BTDS*/ "Disappearing messages").toString(),
          multiline: !0,
          children: [
            d.jsx("div", {
              className: "x13m54ha",
              children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
                as: "h3",
                children: s._(/*BTDS*/ "Disappearing messages"),
              }),
            }),
            d.jsx(o("WAWebText.react").WAWebTextMuted, {
              as: "p",
              children: a,
            }),
          ],
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.addressingModeOverride,
        n = e.handleAddressingModeClick;
      return d.jsx(r("WAWebDrawerSection.react"), {
        children: d.jsxs(r("WAWebDrawerBlock.react"), {
          tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
          testid: void 0,
          onClick: n,
          side: d.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {}),
          ariaLabel: s._(/*BTDS*/ "Addressing Mode").toString(),
          multiline: !0,
          children: [
            d.jsx("div", {
              className: "x13m54ha",
              children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
                as: "h3",
                children: s._(/*BTDS*/ "Addressing Mode"),
              }),
            }),
            d.jsx(o("WAWebText.react").WAWebTextMuted, {
              as: "p",
              children: t,
            }),
          ],
        }),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.onGroupPermissions,
        n = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
          xstyle: p.chevronIcon,
          directional: !0,
          height: 21,
        });
      return d.jsx(r("WAWebDrawerSection.react"), {
        children: d.jsx(r("WAWebDrawerBlock.react"), {
          tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
          testid: void 0,
          onClick: t,
          side: n,
          ariaLabel: s._(/*BTDS*/ "Group permissions").toString(),
          multiline: !0,
          children: d.jsx("div", {
            className: "x13m54ha",
            children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
              as: "h3",
              children: s._(/*BTDS*/ "Group permissions"),
            }),
          }),
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.onAddParticipants,
        n = e.participants,
        a = o("WAWebCommunityGetParticipantInfoText").getParticipantInfoText(n);
      return d.jsx(r("WAWebDrawerSection.react"), {
        children: d.jsxs(r("WAWebDrawerBlock.react"), {
          tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
          onClick: t,
          side: d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            xstyle: p.chevronIcon,
            directional: !0,
            height: 21,
          }),
          ariaLabel: s._(/*BTDS*/ "Add members").toString(),
          multiline: !0,
          children: [
            d.jsx(o("WAWebText.react").WAWebTextTitle, {
              as: "h3",
              xstyle: p.header,
              children: s._(/*BTDS*/ "Add members (optional)"),
            }),
            d.jsx(o("WAWebText.react").WAWebTextMuted, {
              as: "p",
              children: a,
            }),
          ],
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, u);
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "WAWebNewGroupDrawer",
          ])),
      );
      var l = i.participants,
        c = l === void 0 ? [] : l,
        p = i.onSubmit,
        C = i.allowUnnamedGroup,
        b = i.parentGroupId,
        v = i.shortenedCreationFlow,
        S = i.onAddParticipants,
        R = i.onGroupPermissions,
        L = i.loading,
        E = L === void 0 ? !1 : L,
        k = m(i.subject || ""),
        I = k[0],
        T = k[1],
        D = m(i.thumb),
        x = D[0],
        $ = D[1],
        P = m(i.full),
        N = P[0],
        M = P[1],
        w = m(function () {
          if (i.ephemeralDuration != null) return i.ephemeralDuration;
          var e = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
            o("WAWebContactCollection").ContactCollection.getMeContact(),
          );
          return e != null ? e : 0;
        }),
        A = w[0],
        F = w[1],
        O = m((n = i.addressingModeOverride) != null ? n : "lid"),
        B = O[0],
        W = O[1],
        q = function (t, n) {
          ($(t),
            M(n),
            i.handleLiftGroupInfo == null ||
              i.handleLiftGroupInfo({ thumb: t, full: n }));
        },
        U = r("useWAWebCallbackOnce")(function () {
          var e = I.trim();
          p(e, x, N, A, c, B);
        }),
        V = function (t) {
          (T(t),
            i.handleLiftGroupInfo == null ||
              i.handleLiftGroupInfo({ text: t }));
        },
        H = function (t) {
          (F(t),
            i.handleLiftGroupInfo == null ||
              i.handleLiftGroupInfo({ ephemeralDuration: t }));
        },
        G = function (t) {
          (W(t),
            i.handleLiftGroupInfo == null ||
              i.handleLiftGroupInfo({ addressingModeOverride: t }));
        },
        z = function () {
          o("WAWebModalManager").ModalManager.openSupportModal(
            d.jsx(r("WAWebEphemeralPopup.react"), {
              initialDuration: A,
              onDurationSelected: H,
            }),
          );
        },
        j = function () {
          o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
            o("WAWebNux").NUX.EPHEMERAL,
          )
            ? o("WAWebModalManager").ModalManager.openSupportModal(
                d.jsx(r("WAWebEphemeralKicNux.react"), { fromMe: !0, onOk: z }),
              )
            : z();
        },
        K = function () {
          o("WAWebModalManager").ModalManager.openSupportModal(
            d.jsx(r("WAWebAddressingModePopup.react"), {
              initialAddressingMode: B,
              onAddressingModeSelected: G,
            }),
          );
        },
        Q = function () {
          return b || C !== !0
            ? I.trim().length > 0
            : o("WAWebABProps").getABPropConfigValue("ugc_enabled")
              ? !0
              : I.trim().length > 0;
        },
        X =
          !b &&
          C === !0 &&
          o("WAWebABProps").getABPropConfigValue("ugc_enabled")
            ? s._(/*BTDS*/ "Group subject (optional)")
            : s._(/*BTDS*/ "Group subject"),
        Y = d.jsx(f, { ephemeralDuration: A, handleEphemeralDurationClick: j }),
        J =
          (!r("gkx")("26258") || r("gkx")("26256")) &&
          d.jsx(g, { addressingModeOverride: B, handleAddressingModeClick: K }),
        Z =
          v === !0 && S
            ? d.jsx(y, { participants: c, onAddParticipants: S })
            : null,
        ee = d.jsx(h, { onGroupPermissions: R }),
        te =
          Q() === !0
            ? d.jsx(r("WAWebVelocityTransitionGroup"), {
                transitionName: "btn",
                children: d.jsx("div", {
                  className:
                    "xhtitgo x78zum5 x1l1ennw x17r0vjz x178dpqu x2b8uid",
                  children: d.jsx(o("WAWebClickable.react").Clickable, {
                    onClick: U,
                    "data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER,
                    children: d.jsx(o("WAWebRound.react").Round, {
                      testid: void 0,
                      label: s._(/*BTDS*/ "Create group"),
                      children: E
                        ? d.jsx(o("WAWebSpinner.react").Spinner, {
                            color: "white",
                            size: 30,
                          })
                        : d.jsx(
                            o("WAWebCheckmarkMediumIcon.react")
                              .CheckmarkMediumIcon,
                            {
                              iconXstyle: o("WDSColorStyles.stylex")
                                .WDSColorStyles.contentOnAccent,
                            },
                          ),
                    }),
                  }),
                }),
              })
            : null,
        ne = o("WAWebDrawerUtils").getDrawerHeaderType(i.viewType);
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        testid: void 0,
        viewType: i.viewType,
        tsNavigationData: _,
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "New group"),
            type: ne,
            onBack: i.onBack,
            onCancel: i.onCancel,
          }),
          d.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              d.jsxs(r("WAWebDrawerSection.react"), {
                children: [
                  d.jsx("div", {
                    className: "x178dpqu x1ulvn4e xc8tqf8 x1laec3j",
                    children: d.jsx(
                      o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable,
                      {
                        type: o("WAWebPhotoPickerConstants").PhotoPickerType
                          .GROUP,
                        attachToChat: !1,
                        startImage: N,
                        onImageSet: q,
                        dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                      },
                    ),
                  }),
                  d.jsxs("div", {
                    "data-testid": void 0,
                    className: "x178dpqu x1ulvn4e xc8tqf8 x1laec3j",
                    children: [
                      d.jsx(o("WAWebRichTextField.react").RichTextField, {
                        value: I,
                        maxLength: o(
                          "WAWebGroupGatingUtils",
                        ).getGroupMaxSubject(),
                        showRemaining: !0,
                        onChange: function (t) {
                          V(t.text);
                        },
                        title: X,
                        placeholder: X,
                        onEnter: Q() ? U : r("WAWebNoop"),
                        emojiBtnPosition: "side",
                        focusOnMount: !0,
                        tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                      }),
                      null,
                    ],
                  }),
                ],
              }),
              J,
              Y,
              ee,
              Z,
              te,
            ],
          }),
        ],
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
