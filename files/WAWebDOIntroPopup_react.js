__d(
  "WAWebDOIntroPopup.react",
  [
    "fbt",
    "WAWebAutomaticEventsUserJourneyWamEvent",
    "WAWebBoltIcon.react",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebLabelOutlineIcon.react",
    "WAWebListPeopleIcon.react",
    "WAWebListsGatingUtils",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumAutomaticEventsTargetComponentEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWdsIllDetectedOutcomesAutomatedLabelsIcon.react",
    "WDSIconIcSettings.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["content", "listsEnabled"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useRef,
      f = {
        header: {
          fontSize: "x1603h9y",
          fontWeight: "xk50ysn",
          lineHeight: "x37zpob",
          $$css: !0,
        },
        buttonGroupStyle: {
          justifyContent: "x1lvf691",
          paddingBottom: "xs9asl8",
          $$css: !0,
        },
        icon: { color: "xhslqc4", $$css: !0 },
      },
      g = "https://business.facebook.com";
    function h(e) {
      var t = o("react-compiler-runtime").c(8),
        n;
      t[0] !== e.surfaceType
        ? ((n = function (n) {
            (n.preventDefault(),
              new (o(
                "WAWebAutomaticEventsUserJourneyWamEvent",
              ).AutomaticEventsUserJourneyWamEvent)({
                surface: e.surfaceType,
                smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                  .SMB_USER_ACTION_TYPE_ENUM.CLICK,
                automaticEventsTargetComponent: o(
                  "WAWebWamEnumAutomaticEventsTargetComponentEnum",
                ).AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM
                  .NUX_SCREEN_META_BUSINESS_SUITE,
              }).commit(),
              self.setTimeout(y, 10));
          }),
          (t[0] = e.surfaceType),
          (t[1] = n))
        : (n = t[1]);
      var a = n,
        i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = o("WAWebListsGatingUtils").isListsEnabled()), (t[2] = i))
        : (i = t[2]);
      var l = i,
        u;
      t[3] !== a
        ? ((u = l
            ? [
                {
                  Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
                  title: s._(
                    /*BTDS*/ "Chats are added to a list when a new order or lead occurs",
                  ),
                  key: "chats-are-added-to-list-new-order-or-lead",
                },
                {
                  Icon: o("WAWebBoltIcon.react").BoltIcon,
                  title: s._(
                    /*BTDS*/ "Organizing your chats with auto-created lists saves valuable time",
                  ),
                  key: "organizing-chats-with-auto-created-lists-saves-time",
                },
                {
                  Icon: r("WDSIconIcSettings.react"),
                  title: s._(
                    /*BTDS*/ "You can change your lists settings in the Tools tab",
                  ),
                  key: "change-your-lists-settings-in-tools-tab",
                },
              ]
            : [
                {
                  Icon: o("WAWebBoltIcon.react").BoltIcon,
                  title: s._(
                    /*BTDS*/ "Auto labels can help you save time and work more efficiently",
                  ),
                  key: "auto-labels-can-help-you-save-time-and-work-more-efficiently",
                },
                {
                  Icon: o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
                  title: s._(
                    /*BTDS*/ "Labels are added by Meta when a new order or lead occurs in a chat",
                  ),
                  key: "labels-are-added-new-order-or-lead",
                },
                {
                  Icon: r("WDSIconIcSettings.react"),
                  title: s._(
                    /*BTDS*/ "You can change your labeling settings in {=m2}",
                    [
                      s._implicitParam(
                        "=m2",
                        d.jsx(r("WAWebClickableLink.react"), {
                          href: g,
                          onClick: a,
                          children: s._(/*BTDS*/ "Meta Business Suite"),
                        }),
                      ),
                    ],
                  ),
                  key: "change-your-labeling-settings-in-mbs",
                },
              ]),
          (t[3] = a),
          (t[4] = u))
        : (u = t[4]);
      var c = u,
        m;
      return (
        t[5] !== c || t[6] !== e
          ? ((m = d.jsx(
              C,
              babelHelpers.extends({ content: c, listsEnabled: l }, e),
            )),
            (t[5] = c),
            (t[6] = e),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    function y() {
      return o("WAWebExternalLink.react").openExternalLink(g);
    }
    function C(t) {
      var n,
        a = t.content,
        i = t.listsEnabled,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u = _();
      p(
        function () {
          var e;
          ((e = u.current) == null || e.focus(),
            new (o(
              "WAWebAutomaticEventsUserJourneyWamEvent",
            ).AutomaticEventsUserJourneyWamEvent)({
              surface: l.surfaceType,
              smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
              automaticEventsTargetComponent: o(
                "WAWebWamEnumAutomaticEventsTargetComponentEnum",
              ).AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.NUX_SCREEN,
            }).commit());
        },
        [l.surfaceType],
      );
      var c = function () {
        (new (o(
          "WAWebAutomaticEventsUserJourneyWamEvent",
        ).AutomaticEventsUserJourneyWamEvent)({
          surface: l.surfaceType,
          smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.CLICK,
          automaticEventsTargetComponent: o(
            "WAWebWamEnumAutomaticEventsTargetComponentEnum",
          ).AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.NUX_SCREEN_OK,
        }).commit(),
          o("WAWebModalManager").ModalManager.close(),
          l.onContinue == null || l.onContinue());
      };
      return d.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        okText: r("WAWebFbtCommon")("OK"),
        onOK: c,
        ref: u,
        buttonGroupStyle: f.buttonGroupStyle,
        children: [
          d.jsx((n = o("WAWebFlex.react")).FlexRow, {
            align: "center",
            justify: "center",
            children: d.jsx(n.FlexItem, {
              xstyle: [
                o("WAWebUISpacing").uiMargin.top10,
                o("WAWebUISpacing").uiPadding.horiz10,
              ],
              children: d.jsx(
                o("WAWebWdsIllDetectedOutcomesAutomatedLabelsIcon.react")
                  .WdsIllDetectedOutcomesAutomatedLabelsIcon,
                { width: 90, height: 90 },
              ),
            }),
          }),
          d.jsx(n.FlexRow, {
            align: "center",
            justify: "center",
            children: d.jsx(n.FlexItem, {
              xstyle: [f.header, o("WAWebUISpacing").uiPadding.vert18],
              children: i
                ? s._(/*BTDS*/ "Some chats automatically added to lists")
                : s._(/*BTDS*/ "Some chats are automatically labeled"),
            }),
          }),
          d.jsx(o("WAWebFlex.react").FlexColumn, {
            children: a.map(function (e) {
              var t = e.Icon,
                n = e.description,
                r = e.key,
                o = e.title;
              return d.jsx(b, { Icon: t, title: o, description: n }, r);
            }),
          }),
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.Icon,
        a = e.description,
        i = e.title,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (u || (u = r("stylex")))([o("WAWebUISpacing").uiMargin.top20])),
          (t[0] = l))
        : (l = t[0]);
      var s;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (u || (u = r("stylex")))(o("WAWebUISpacing").uiMargin.horiz25)),
          (t[1] = s))
        : (s = t[1]);
      var c;
      t[2] !== n
        ? ((c = d.jsx(o("WAWebFlex.react").FlexItem, {
            shrink: 0,
            className: s,
            children: d.jsx(n, { width: 24, iconXstyle: f.icon }),
          })),
          (t[2] = n),
          (t[3] = c))
        : (c = t[3]);
      var m;
      t[4] !== i
        ? ((m = d.jsx(o("WAWebText.react").WAWebTextTitle, {
            xstyle: o("WAWebUISpacing").uiMargin.end24,
            color: "wdsContentDeemphasized",
            children: i,
          })),
          (t[4] = i),
          (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] !== a
        ? ((p =
            a != null &&
            d.jsx(o("WAWebText.react").WAWebTextSmall, { children: a })),
          (t[6] = a),
          (t[7] = p))
        : (p = t[7]);
      var _;
      t[8] !== m || t[9] !== p
        ? ((_ = d.jsxs(o("WAWebFlex.react").FlexItem, { children: [m, p] })),
          (t[8] = m),
          (t[9] = p),
          (t[10] = _))
        : (_ = t[10]);
      var g;
      return (
        t[11] !== c || t[12] !== _
          ? ((g = d.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              className: l,
              children: [c, _],
            })),
            (t[11] = c),
            (t[12] = _),
            (t[13] = g))
          : (g = t[13]),
        g
      );
    }
    l.default = h;
  },
  226,
);
