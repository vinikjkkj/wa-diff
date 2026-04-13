__d(
  "WAWebCommunityDeactivationInfoDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCommunityDeactivationPopup.react",
    "WAWebCommunityInformationCell.react",
    "WAWebDeactivateBadgeDarkIcon.react",
    "WAWebDeactivateBadgeIcon.react",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFocusTracer",
    "WAWebLinkCrossedIcon.react",
    "WAWebModalManager",
    "WAWebSpeakerCrossedIcon.react",
    "WAWebText.react",
    "WAWebThemeContext",
    "WAWebTrashActiveIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useContext,
      m = c.useEffect,
      p = c.useRef,
      _ = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          paddingTop: "x1miatn0",
          paddingInlineEnd: "x15zmtp0",
          paddingBottom: "xuzjt68",
          paddingInlineStart: "x1oiqv2n",
          $$css: !0,
        },
        buttonContainer: {
          marginTop: "x98l61r",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        header: {
          marginTop: "x9u28bd",
          marginBottom: "x1ua1l7f",
          textAlign: "x2b8uid",
          lineHeight: "x1evy7pa",
          $$css: !0,
        },
        badge: {
          zIndex: "xhtitgo",
          bottom: "xvp9gi2",
          insetInlineEnd: "x1i4sgur",
          left: null,
          right: null,
          position: "x1n2onr6",
          marginInlineEnd: "xhg6vv5",
          $$css: !0,
        },
        marginBottom16: { marginBottom: "x1ua1l7f", $$css: !0 },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(37),
        n = e.chat,
        a = e.onBack,
        i = e.ref,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["id", "name"]), (t[0] = l))
        : (l = t[0]);
      var c = o("useWAWebModelValues").useModelValues(n.contact, l),
        f = d(o("WAWebThemeContext").ThemeContext),
        h = f.theme,
        y = p(),
        C,
        b;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function () {
            r("WAWebFocusTracer").focus(y.current);
          }),
          (b = []),
          (t[1] = C),
          (t[2] = b))
        : ((C = t[1]), (b = t[2])),
        m(C, b));
      var v, S;
      (t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = ["close_modal"]),
          (S = function () {
            return r("WAWebFocusTracer").focus(y.current);
          }),
          (t[3] = v),
          (t[4] = S))
        : ((v = t[3]), (S = t[4])),
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          v,
          S,
        ));
      var R = h === "dark",
        L = R
          ? o("WAWebDeactivateBadgeDarkIcon.react").DeactivateBadgeDarkIcon
          : o("WAWebDeactivateBadgeIcon.react").DeactivateBadgeIcon,
        E;
      t[5] !== c.name
        ? ((E = s._(/*BTDS*/ 'Deactivate "{community-name}"?', [
            s._param(
              "community-name",
              u.jsx(o("WAWebEmojiText.react").EmojiText, { text: c.name }),
            ),
          ])),
          (t[5] = c.name),
          (t[6] = E))
        : (E = t[6]);
      var k = E,
        I;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "This action cannot be undone.")), (t[7] = I))
        : (I = t[7]);
      var T = I,
        D;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = [
            {
              title: s._(/*BTDS*/ "Groups will be disconnected"),
              description: s._(
                /*BTDS*/ "Groups won't be in this community but will still work as usual.",
              ),
              Icon: o("WAWebLinkCrossedIcon.react").LinkCrossedIcon,
              key: "all-groups-removed",
            },
            {
              title: s._(/*BTDS*/ "Announcement group will be closed"),
              description: s._(
                /*BTDS*/ "Past admins won't be able to message this community.",
              ),
              Icon: o("WAWebSpeakerCrossedIcon.react").SpeakerCrossedIcon,
              key: "announcement-group-removed",
            },
            {
              title: s._(/*BTDS*/ "Community info will be deleted"),
              description: s._(
                /*BTDS*/ "Members won't have access to past info, like admins and groups.",
              ),
              Icon: o("WAWebTrashActiveIcon.react").TrashActiveIcon,
              key: "community-info-deleted",
            },
          ]),
          (t[8] = D))
        : (D = t[8]);
      var x = D,
        $;
      t[9] !== n
        ? (($ = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebCommunityDeactivationPopup.react"), { chat: n }),
            );
          }),
          (t[9] = n),
          (t[10] = $))
        : ($ = t[10]);
      var P = $,
        N;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = {
            surface: "unknown",
            viewName: "community-deactivation-info",
          }),
          (t[11] = N))
        : (N = t[11]);
      var M;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(/*BTDS*/ "Deactivate community")), (t[12] = M))
        : (M = t[12]);
      var w;
      t[13] !== a
        ? ((w = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: M,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: a,
          })),
          (t[13] = a),
          (t[14] = w))
        : (w = t[14]);
      var A;
      t[15] !== n.id
        ? ((A = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: n.id,
            size: 104,
            quality: o("WAWebDetailImage.react").DetailImageQuality.High,
            shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
          })),
          (t[15] = n.id),
          (t[16] = A))
        : (A = t[16]);
      var F;
      t[17] !== L
        ? ((F = u.jsx(L, { width: 36, height: 36, xstyle: _.badge })),
          (t[17] = L),
          (t[18] = F))
        : (F = t[18]);
      var O;
      t[19] !== A || t[20] !== F
        ? ((O = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: [A, F],
          })),
          (t[19] = A),
          (t[20] = F),
          (t[21] = O))
        : (O = t[21]);
      var B;
      t[22] !== k
        ? ((B = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
              weight: "bold",
              xstyle: _.header,
              children: k,
            }),
          })),
          (t[22] = k),
          (t[23] = B))
        : (B = t[23]);
      var W, q;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: _.marginBottom16,
            children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
              as: "h1",
              children: T,
            }),
          })),
          (q = x.map(g)),
          (t[24] = W),
          (t[25] = q))
        : ((W = t[24]), (q = t[25]));
      var U;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = s._(/*BTDS*/ "Deactivate")), (t[26] = U))
        : (U = t[26]);
      var V;
      t[27] !== P
        ? ((V = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: _.buttonContainer,
            children: u.jsx(o("WAWebButton.react").Button, {
              testid: void 0,
              type: "solid-warning",
              onClick: P,
              children: U,
            }),
          })),
          (t[27] = P),
          (t[28] = V))
        : (V = t[28]);
      var H;
      t[29] !== O || t[30] !== B || t[31] !== V
        ? ((H = u.jsx(r("WAWebDrawerBody.react"), {
            ref: y,
            tabIndex: "-1",
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              xstyle: _.container,
              children: [O, B, W, q, V],
            }),
          })),
          (t[29] = O),
          (t[30] = B),
          (t[31] = V),
          (t[32] = H))
        : (H = t[32]);
      var G;
      return (
        t[33] !== i || t[34] !== w || t[35] !== H
          ? ((G = u.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              testid: void 0,
              tsNavigationData: N,
              children: [w, H],
            })),
            (t[33] = i),
            (t[34] = w),
            (t[35] = H),
            (t[36] = G))
          : (G = t[36]),
        G
      );
    }
    function g(e) {
      var t = e.Icon,
        n = e.description,
        o = e.key,
        a = e.title;
      return u.jsx(
        r("WAWebCommunityInformationCell.react"),
        { Icon: t, title: a, description: n },
        o,
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
