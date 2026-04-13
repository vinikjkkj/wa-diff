__d(
  "WAWebListsIntroPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebListPeopleIcon.react",
    "WAWebListsGatingUtils",
    "WAWebModalManager",
    "WAWebSettingsOutlineIcon.react",
    "WAWebWdsIllContactFiltersIcon.react",
    "WDSIconIcLockPerson.react",
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
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = {
            Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
            title: s._(
              /*BTDS*/ "Any list you create becomes a filter at the top of your Chats tab.",
            ),
            key: "any-list-you-create",
          }),
          (t[0] = n))
        : (n = t[0]);
      var a;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            Icon: r("WDSIconIcLockPerson.react"),
            title: s._(/*BTDS*/ "Only you can see your lists."),
            key: "only-you-can-see",
          }),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            n,
            a,
            {
              Icon: o("WAWebSettingsOutlineIcon.react").SettingsOutlineIcon,
              title: o("WAWebListsGatingUtils").isListsM2Enabled()
                ? s._(/*BTDS*/ "Edit your lists anytime in Settings.")
                : s._(
                    /*BTDS*/ "Edit your lists anytime in Settings on your mobile device.",
                  ),
              key: "edit-your-lists",
            },
          ]),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        u;
      return (
        t[3] !== e
          ? ((u = c.jsx(g, babelHelpers.extends({ content: l }, e))),
            (t[3] = e),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    function g(t) {
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
              children: s._(/*BTDS*/ "Organize your chats with Lists"),
            }),
          }),
          c.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: _.content,
            children: n.map(function (e) {
              var t = e.Icon,
                n = e.description,
                r = e.key,
                o = e.title;
              return c.jsx(h, { Icon: t, title: o, description: n }, r);
            }),
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
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
    l.ListsIntroPopup = f;
  },
  226,
);
