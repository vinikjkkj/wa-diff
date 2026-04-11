__d(
  "WAWebRequestPhoneNumberMessage.react",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebDialpadGreenIcon.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebSharePhoneNumberModal.react",
    "WAWebUISpacing",
    "WAWebWamEnumPnhEntryPointType",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          textAlign: "x2b8uid",
          position: "x1n2onr6",
          alignItems: "x6s0dn4",
          marginTop: "x1198e8h",
          marginInlineEnd: "x1lxpwgx",
          marginBottom: "xz62fqu",
          marginInlineStart: "xw01apr",
          borderStartStartRadius: "x13t61ll",
          borderStartEndRadius: "x1kchd1x",
          borderEndEndRadius: "x1u0fnx4",
          borderEndStartRadius: "xbxn0j6",
          backgroundColor: "x1ymkhp9",
          $$css: !0,
        },
        icon: {
          marginTop: "x1ok221b",
          marginInlineEnd: "xf6vk7d",
          marginBottom: "xu06os2",
          marginInlineStart: "x1hm9lzh",
          $$css: !0,
        },
        text: {
          marginTop: "x1xmf6yo",
          marginInlineEnd: "x1xegmmw",
          marginBottom: "xyorhqc",
          marginInlineStart: "x1hm9lzh",
          $$css: !0,
        },
      },
      d = function () {
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            o("WAWebSharePhoneNumberModal.react")
              .SharePhoneNumberRestrictedActionModal,
            {
              entryPoint: o("WAWebWamEnumPnhEntryPointType")
                .PNH_ENTRY_POINT_TYPE.PN_REQUEST,
            },
          ),
        );
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(43),
        n = e.msg,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebMsgGetters").getTo,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebFrontendMsgGetters").getSenderObj,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(n.id, a),
        l = i[0],
        m = i[1],
        p = i[2],
        _;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(o("WAWebDialpadGreenIcon.react").DialpadGreenIcon, {})),
          (t[1] = _))
        : (_ = t[1]);
      var f = _;
      if (m) {
        var g;
        if (t[2] !== l) {
          var h = o("WAWebContactCollection").ContactCollection.gadd(l);
          ((g = o("WAWebFrontendContactGetters").getIsMyContact(h)
            ? o("WAWebFrontendContactGetters").getFormattedName(h)
            : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(h)),
            (t[2] = l),
            (t[3] = g));
        } else g = t[3];
        var y = g,
          C;
        if (t[4] !== y) {
          var b;
          (t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = { className: "xk50ysn" }), (t[6] = b))
            : (b = t[6]),
            (C = s._(
              /*BTDS*/ "You requested {person-name} to share their phone number.",
              [
                s._param(
                  "person-name",
                  u.jsx("span", babelHelpers.extends({}, b, { children: y })),
                ),
              ],
            )),
            (t[4] = y),
            (t[5] = C));
        } else C = t[5];
        var v = C,
          S;
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = u.jsx(r("WAWebFlexItem.react"), {
              xstyle: c.icon,
              children: f,
            })),
            (t[7] = S))
          : (S = t[7]);
        var R;
        t[8] !== n ? ((R = n.unsafe()), (t[8] = n), (t[9] = R)) : (R = t[9]);
        var L;
        t[10] !== v || t[11] !== R
          ? ((L = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: c.container,
              children: [
                S,
                u.jsx(r("WAWebFlexItem.react"), {
                  xstyle: c.text,
                  children: u.jsx(r("WAWebMessageSpacerText.react"), {
                    msg: R,
                    children: v,
                  }),
                }),
              ],
            })),
            (t[10] = v),
            (t[11] = R),
            (t[12] = L))
          : (L = t[12]);
        var E;
        return (
          t[13] !== n || t[14] !== L
            ? ((E = u.jsx(r("WAWebMessageTextBubble.react"), {
                msg: n,
                displayAuthor: !1,
                testid: void 0,
                children: L,
              })),
              (t[13] = n),
              (t[14] = L),
              (t[15] = E))
            : (E = t[15]),
          E
        );
      }
      var k, I;
      t[16] !== p
        ? ((k = o("WAWebContactCollection").ContactCollection.gadd(p)),
          (I = o("WAWebFrontendContactGetters").getIsMyContact(k)
            ? o("WAWebFrontendContactGetters").getFormattedName(k)
            : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(k)),
          (t[16] = p),
          (t[17] = k),
          (t[18] = I))
        : ((k = t[17]), (I = t[18]));
      var T = I,
        D;
      if (t[19] !== T) {
        var x;
        (t[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = { className: "xk50ysn" }), (t[21] = x))
          : (x = t[21]),
          (D = s._(
            /*BTDS*/ "{person-name} requested you to share your phone number.",
            [
              s._param(
                "person-name",
                u.jsx("span", babelHelpers.extends({}, x, { children: T })),
              ),
            ],
          )),
          (t[19] = T),
          (t[20] = D));
      } else D = t[20];
      var $ = D,
        P;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Share phone number")), (t[22] = P))
        : (P = t[22]);
      var N = P,
        M = k.shareOwnPn || k.isContactBlocked,
        w;
      t[23] !== M
        ? ((w = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [
              {
                label: N,
                onClick: d,
                disabled: M,
                testid: "share-phone-number-button",
              },
            ],
            theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme
              .NO_DIVIDER,
          })),
          (t[23] = M),
          (t[24] = w))
        : (w = t[24]);
      var A = w,
        F,
        O;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = [c.container, o("WAWebUISpacing").uiPadding.bottom5]),
          (O = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: c.icon,
            children: f,
          })),
          (t[25] = F),
          (t[26] = O))
        : ((F = t[25]), (O = t[26]));
      var B = n.senderObj,
        W;
      t[27] !== n ? ((W = n.unsafe()), (t[27] = n), (t[28] = W)) : (W = t[28]);
      var q;
      t[29] !== $
        ? ((q = u.jsx("div", { children: $ })), (t[29] = $), (t[30] = q))
        : (q = t[30]);
      var U;
      t[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = { className: "x10l6tqk xxx7yvo x1c7jfne" }), (t[31] = U))
        : (U = t[31]);
      var V;
      t[32] !== n
        ? ((V = u.jsx(
            "div",
            babelHelpers.extends({}, U, {
              children: u.jsx(o("WAWebMessageMeta.react").Meta, { msg: n }),
            }),
          )),
          (t[32] = n),
          (t[33] = V))
        : (V = t[33]);
      var H;
      t[34] !== n.senderObj || t[35] !== W || t[36] !== q || t[37] !== V
        ? ((H = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: F,
            children: [
              O,
              u.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
                xstyle: c.text,
                contact: B,
                msg: W,
                children: [q, V],
              }),
            ],
          })),
          (t[34] = n.senderObj),
          (t[35] = W),
          (t[36] = q),
          (t[37] = V),
          (t[38] = H))
        : (H = t[38]);
      var G;
      return (
        t[39] !== A || t[40] !== n || t[41] !== H
          ? ((G = u.jsxs(r("WAWebMessageTextBubble.react"), {
              msg: n,
              displayAuthor: !1,
              hideMeta: !0,
              testid: void 0,
              children: [H, A],
            })),
            (t[39] = A),
            (t[40] = n),
            (t[41] = H),
            (t[42] = G))
          : (G = t[42]),
        G
      );
    }
    l.default = m;
  },
  226,
);
