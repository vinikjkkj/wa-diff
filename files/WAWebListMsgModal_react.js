__d(
  "WAWebListMsgModal.react",
  [
    "WALogger",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebListMsgRow.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebRound.react",
    "WAWebSendListMsgReplyChatAction",
    "WAWebVelocityTransitionGroup",
    "WAWebWdsIcSendFilledIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.list,
        a = e.onClick,
        i = e.selected,
        l;
      if (t[0] !== n.sections || t[1] !== a || t[2] !== i) {
        var s;
        (t[4] !== a || t[5] !== i
          ? ((s = function (t, n) {
              return u.jsx(
                r("WAWebDrawerSection.react"),
                {
                  title: t.title,
                  theme: "list-section",
                  children: t.rows.map(function (e, t) {
                    return u.jsx(
                      r("WAWebListMsgRow.react"),
                      { row: e, onClick: a.bind(null, e), selected: e === i },
                      t,
                    );
                  }),
                },
                n,
              );
            }),
            (t[4] = a),
            (t[5] = i),
            (t[6] = s))
          : (s = t[6]),
          (l = n.sections.map(s)),
          (t[0] = n.sections),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l));
      } else l = t[3];
      return l;
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.msg,
        a = c(null),
        i = a[0],
        l = a[1],
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = function (t) {
            l(t);
          }),
          (t[0] = s))
        : (s = t[0]);
      var m = s,
        _ = n.list;
      if (!_) return null;
      var f;
      t[1] !== n || t[2] !== i
        ? ((f = function () {
            i &&
              (r("WAWebSendListMsgReplyChatAction")(n, i).catch(p),
              o("WAWebModalManager").closeModalManager());
          }),
          (t[1] = n),
          (t[2] = i),
          (t[3] = f))
        : (f = t[3]);
      var g = f,
        h;
      if (i) {
        var y;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = {
              className:
                "xfo81ep x9f619 x78zum5 x6s0dn4 xh8yej3 x1x0gksc x15fo07t x13jy36j x17t9dm2 x1280gxy",
            }),
            (t[4] = y))
          : (y = t[4]);
        var C = i.title,
          b;
        t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = { className: "x10l6tqk x145d82y x3h4tne" }), (t[5] = b))
          : (b = t[5]);
        var v;
        t[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = u.jsx(
              o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
              { directional: !0 },
            )),
            (t[6] = v))
          : (v = t[6]);
        var S;
        t[7] !== g
          ? ((S = u.jsx(
              "div",
              babelHelpers.extends({}, b, {
                children: u.jsx(o("WAWebRound.react").Round, {
                  large: !0,
                  onClick: g,
                  testid: void 0,
                  children: v,
                }),
              }),
            )),
            (t[7] = g),
            (t[8] = S))
          : (S = t[8]);
        var R;
        (t[9] !== i.title || t[10] !== S
          ? ((R = u.jsxs(
              "div",
              babelHelpers.extends({}, y, { children: [C, S] }),
            )),
            (t[9] = i.title),
            (t[10] = S),
            (t[11] = R))
          : (R = t[11]),
          (h = R));
      }
      var L;
      t[12] !== _.buttonText
        ? ((L = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: _.buttonText,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
            onCancel: o("WAWebModalManager").closeModalManager,
          })),
          (t[12] = _.buttonText),
          (t[13] = L))
        : (L = t[13]);
      var E;
      t[14] !== _ || t[15] !== i
        ? ((E = u.jsx(r("WAWebDrawerBody.react"), {
            theme: "padding",
            children: u.jsx(d, { list: _, onClick: m, selected: i }),
          })),
          (t[14] = _),
          (t[15] = i),
          (t[16] = E))
        : (E = t[16]);
      var k;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = "xa1v5g2 x1okw0bk"), (t[17] = k))
        : (k = t[17]);
      var I;
      t[18] !== h
        ? ((I = u.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "slide-up-down-footer",
            className_DONOTUSE: k,
            children: h,
          })),
          (t[18] = h),
          (t[19] = I))
        : (I = t[19]);
      var T;
      return (
        t[20] !== L || t[21] !== E || t[22] !== I
          ? ((T = u.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Tower,
              children: u.jsxs(r("WAWebDrawer.react"), {
                theme: "products",
                children: [L, E, I],
              }),
            })),
            (t[20] = L),
            (t[21] = E),
            (t[22] = I),
            (t[23] = T))
          : (T = t[23]),
        T
      );
    }
    function p() {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "ListDrawer: failed to send list message reply",
            ])),
        )
        .sendLogs("list-drawer-send-failed");
    }
    l.default = m;
  },
  98,
);
