__d(
  "WAWebNewSubgroupSuggestionDrawer.react",
  [
    "fbt",
    "WAWebCheckmarkMediumIcon.react",
    "WAWebChevronIcon.react",
    "WAWebDefaultGroupIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBlock.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebGroupGatingUtils",
    "WAWebImgWithFallback.react",
    "WAWebNoop",
    "WAWebRichTextField.react",
    "WAWebRound.react",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "useWAWebCallbackOnce",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        chevronIcon: { color: "xhslqc4", $$css: !0 },
        backgroundFill: { fill: "x1flh12g", $$css: !0 },
        primaryFill: { fill: "xvt3oi1", $$css: !0 },
      };
    function p(e) {
      var t = e.onGroupPermissions,
        n = c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
          xstyle: m.chevronIcon,
          directional: !0,
          height: 21,
        });
      return c.jsx(r("WAWebDrawerBlock.react"), {
        testid: void 0,
        onClick: t,
        side: n,
        ariaLabel: s._(/*BTDS*/ "Group permissions").toString(),
        multiline: !0,
        children: c.jsx("div", {
          className: "x13m54ha",
          children: c.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "h3",
            children: s._(/*BTDS*/ "Group permissions"),
          }),
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.description,
        l = a.loading,
        u = l === void 0 ? !1 : l,
        _ = a.onBack,
        f = a.onGroupPermissions,
        g = a.onSubmit,
        h = a.parentGroup,
        y = a.subject,
        C = d(y || ""),
        b = C[0],
        v = C[1],
        S = d(i || ""),
        R = S[0],
        L = S[1],
        E = r("useWAWebCallbackOnce")(function () {
          g(b, R);
        }),
        k = function (t) {
          (v(t),
            a.handleLiftGroupInfo == null ||
              a.handleLiftGroupInfo({ text: t }));
        },
        I = function (t) {
          (L(t),
            a.handleLiftGroupInfo == null ||
              a.handleLiftGroupInfo({ description: t }));
        },
        T = function () {
          return b.trim().length > 0;
        },
        D = c.jsx(o("WAWebFlex.react").FlexRow, {
          justify: "center",
          children: c.jsx(o("WAWebImgWithFallback.react").ImgWithFallback, {
            fallbackSVG: c.jsx(
              o("WAWebDefaultGroupIcon.react").DefaultGroupIcon,
              {
                innerStyles: {
                  primary: m.primaryFill,
                  background: m.backgroundFill,
                },
              },
            ),
            size: 200,
            imgProps: { src: "" },
          }),
        }),
        x = s._(/*BTDS*/ "What's this group's name?"),
        $ = s._(/*BTDS*/ "Group description (optional)"),
        P = h != null ? c.jsx(p, { onGroupPermissions: f }) : null;
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "new-subgroup-suggestion",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "New group"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: _,
          }),
          c.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              c.jsxs(r("WAWebDrawerSection.react"), {
                theme: "full-height",
                children: [
                  c.jsx("div", {
                    className: "x178dpqu x1ulvn4e xc8tqf8 x1laec3j",
                    children: D,
                  }),
                  c.jsx("div", {
                    "data-testid": void 0,
                    className: "x178dpqu x1ulvn4e xc8tqf8 x1laec3j",
                    children: c.jsx(
                      o("WAWebRichTextField.react").RichTextField,
                      {
                        value: b,
                        maxLength: o(
                          "WAWebGroupGatingUtils",
                        ).getGroupMaxSubject(),
                        showRemaining: !0,
                        onChange: function (t) {
                          k(t.text);
                        },
                        title: x,
                        placeholder: x,
                        onEnter: T() ? E : r("WAWebNoop"),
                        emojiBtnPosition: "side",
                        focusOnMount: !0,
                      },
                    ),
                  }),
                  c.jsxs("div", {
                    className: "x178dpqu x1ulvn4e xc8tqf8 x1laec3j",
                    children: [
                      c.jsx(o("WAWebRichTextField.react").RichTextField, {
                        testid: void 0,
                        title: $,
                        value: R,
                        maxLength: o(
                          "WAWebGroupGatingUtils",
                        ).getGroupDescriptionLength(),
                        showRemaining: !0,
                        onChange: function (t) {
                          return I(t.text);
                        },
                        inputPlaceholder: $,
                        onEnter: T() ? E : r("WAWebNoop"),
                        emojiBtnPosition: "side",
                        multiline: !0,
                        maxVisibleLines: 5,
                        minVisibleLines: 5,
                        textFormatEnabled: !0,
                        bulletPointsEnabled: !0,
                        numberedListEnabled: !1,
                        blockQuoteEnabled: !1,
                        inlineCodeEnabled: !1,
                        theme: "gray-background",
                      }),
                      c.jsx("div", {
                        className: "x1de0gy",
                        children: c.jsx(o("WAWebText.react").WAWebTextSmall, {
                          children: s._(
                            /*BTDS*/ "This group suggestion must be approved by a community admin. If approved, anyone in the community can join it. {=m2}",
                            [
                              s._implicitParam(
                                "=m2",
                                c.jsx(
                                  o("WAWebExternalLink.react").ExternalLink,
                                  {
                                    href: o(
                                      "WAWebFaqUrl",
                                    ).getMemberAddedGroupsUrl(),
                                    children: s._(/*BTDS*/ "Learn more"),
                                  },
                                ),
                              ),
                            ],
                          ),
                        }),
                      }),
                    ],
                  }),
                  P,
                ],
              }),
              c.jsx(r("WAWebVelocityTransitionGroup"), {
                transitionName: "btn",
                children:
                  T() === !0
                    ? c.jsx("div", {
                        className:
                          "xhtitgo x78zum5 x1l1ennw x17r0vjz x178dpqu x2b8uid",
                        children: c.jsx(o("WAWebRound.react").Round, {
                          testid: void 0,
                          onClick: E,
                          label: s._(/*BTDS*/ "Create group suggestion"),
                          children: u
                            ? c.jsx(o("WAWebSpinner.react").Spinner, {
                                size: 16,
                              })
                            : c.jsx(
                                o("WAWebCheckmarkMediumIcon.react")
                                  .CheckmarkMediumIcon,
                                {},
                              ),
                        }),
                      })
                    : null,
              }),
            ],
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
