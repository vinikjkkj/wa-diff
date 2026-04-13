__d(
  "WAWebSMBListsIntroPopup.react",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebDrawerManager",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebLabelFlowLoadable",
    "WAWebListPeopleIcon.react",
    "WAWebModalManager",
    "WAWebSettingsOutlineIcon.react",
    "WAWebWdsIllContactFiltersIcon.react",
    "WDSIconIcCheckCircle.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["content"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = {
        iconRow: { marginTop: "x9u28bd", $$css: !0 },
        header: {
          fontSize: "x1603h9y",
          fontWeight: "xk50ysn",
          lineHeight: "x37zpob",
          marginTop: "x9u28bd",
          $$css: !0,
        },
        content: { color: "xhslqc4", $$css: !0 },
        contentItemRow: { marginTop: "x1nmyh1g", $$css: !0 },
        icon: { color: "xhslqc4", $$css: !0 },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(6),
        n = g,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = c.jsx(r("WAWebClickableLink.react"), {
            onClick: n,
            children: s._(/*BTDS*/ "Settings"),
          })),
          (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = {
            Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
            title: s._(
              /*BTDS*/ "Lists make it even easier to organize your chats",
            ),
            key: "lists-easier-organize",
          }),
          (t[1] = l))
        : (l = t[1]);
      var u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = {
            Icon: r("WDSIconIcCheckCircle.react"),
            title: s._(
              /*BTDS*/ "Your current labels will stay the same under Lists",
            ),
            key: "labels-stay-same",
          }),
          (t[2] = u))
        : (u = t[2]);
      var d;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = [
            l,
            u,
            {
              Icon: o("WAWebSettingsOutlineIcon.react").SettingsOutlineIcon,
              title: s._(
                /*BTDS*/ "Edit your lists anytime in {settingsLink}.",
                [s._param("settingsLink", i)],
              ),
              key: "edit-your-lists",
            },
          ]),
          (t[3] = d))
        : (d = t[3]);
      var m = d,
        p;
      return (
        t[4] !== e
          ? ((p = c.jsx(h, babelHelpers.extends({ content: m }, e))),
            (t[4] = e),
            (t[5] = p))
          : (p = t[5]),
        p
      );
    }
    function g() {
      (o("WAWebModalManager").ModalManager.close(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          c.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
            isInitialStep: !0,
          }),
        ));
    }
    function h(t) {
      var n = t.content,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = p();
      m(function () {
        var e;
        (e = i.current) == null || e.focus();
      }, []);
      var l = function () {
        (o("WAWebModalManager").ModalManager.close(),
          a.onContinue == null || a.onContinue());
      };
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        okText: r("WAWebFbtCommon")("Continue"),
        onOK: l,
        ref: i,
        children: [
          c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: _.iconRow,
            children: c.jsx(r("WAWebFlexItem.react"), {
              children: c.jsx(
                o("WAWebWdsIllContactFiltersIcon.react")
                  .WdsIllContactFiltersIcon,
                {},
              ),
            }),
          }),
          c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: c.jsx(r("WAWebFlexItem.react"), {
              xstyle: _.header,
              children: s._(/*BTDS*/ "Labels are now Lists"),
            }),
          }),
          c.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: _.content,
            children: n.map(function (e) {
              var t = e.Icon,
                n = e.description,
                r = e.key,
                o = e.title;
              return c.jsx(y, { Icon: t, title: o, description: n }, r);
            }),
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.Icon,
        a = e.description,
        i = e.title,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = "x1iw51ew xyo0t3i"), (t[0] = l))
        : (l = t[0]);
      var s;
      t[1] !== n
        ? ((s = c.jsx(r("WAWebFlexItem.react"), {
            shrink: 0,
            className: l,
            children: c.jsx(n, { width: 24, iconXstyle: _.icon }),
          })),
          (t[1] = n),
          (t[2] = s))
        : (s = t[2]);
      var u;
      t[3] !== i
        ? ((u = c.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: i,
          })),
          (t[3] = i),
          (t[4] = u))
        : (u = t[4]);
      var d;
      t[5] !== a
        ? ((d =
            a != null &&
            c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: a,
            })),
          (t[5] = a),
          (t[6] = d))
        : (d = t[6]);
      var m;
      t[7] !== u || t[8] !== d
        ? ((m = c.jsxs(r("WAWebFlexItem.react"), { children: [u, d] })),
          (t[7] = u),
          (t[8] = d),
          (t[9] = m))
        : (m = t[9]);
      var p;
      return (
        t[10] !== s || t[11] !== m
          ? ((p = c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: _.contentItemRow,
              children: [s, m],
            })),
            (t[10] = s),
            (t[11] = m),
            (t[12] = p))
          : (p = t[12]),
        p
      );
    }
    l.SMBListsIntroPopup = f;
  },
  226,
);
