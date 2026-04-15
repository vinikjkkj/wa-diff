__d(
  "WAWebSendTextFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebBlockContactAction",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDrawerManager",
    "WAWebFrontendConstants",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebSendTextMsgChatAction",
    "WAWebServerPropConstants",
    "WAWebTextMessageModal.react",
    "WAWebUiIdleEventBus",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useRef,
      _ = n("$InternalEnum").Mirrored(["Select", "TextMessage"]);
    function f(t) {
      var a = o("react-compiler-runtime").c(41),
        i = t.alwaysShowComposeModal,
        l = t.onSend,
        u = t.origin,
        d = t.text,
        m = t.title,
        f = o("useWAWebFlow").useFlow(_.Select),
        h = f[0],
        y = f[1],
        C;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = []), (a[0] = C))
        : (C = a[0]);
      var b = p(C),
        v;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = []), (a[1] = v))
        : (v = a[1]);
      var S = p(v),
        R = g,
        L;
      e: {
        if (u != null && r("WAWebWid").isNewsletter(u)) {
          var E;
          (a[2] !== u
            ? ((E = { surface: "channel-forward", extras: { channelWid: u } }),
              (a[2] = u),
              (a[3] = E))
            : (E = a[3]),
            (L = E));
          break e;
        }
        L = void 0;
      }
      var k = L;
      if (y.step == null) return null;
      var I;
      e: switch (y.step) {
        case _.Select: {
          var T;
          a[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((T = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t) {
                    (yield R(e),
                      e.active
                        ? o("WAWebComposeBoxActions").ComposeBoxActions.paste(
                            e,
                            t,
                          )
                        : (e.setComposeContents({
                            text: t,
                            timestamp: o("WATimeUtils").unixTime(),
                          }),
                          o("WAWebCmd")
                            .Cmd.openChatFromUnread({ chat: e })
                            .then(function (t) {
                              t &&
                                o(
                                  "WAWebComposeBoxActions",
                                ).ComposeBoxActions.focus(e);
                            })));
                  },
                );
                return function (n, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (a[4] = T))
            : (T = a[4]);
          var D = T,
            x;
          a[5] !== u
            ? ((x = u != null && r("WAWebWid").isNewsletter(u)),
              (a[5] = u),
              (a[6] = x))
            : (x = a[6]);
          var $ = x,
            P;
          a[7] !== i || a[8] !== y || a[9] !== $ || a[10] !== l || a[11] !== d
            ? ((P = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.selectedItems,
                      n = t;
                    if (((S.current = n), n.length === 1 && !$ && i !== !0)) {
                      var r = n[0];
                      (yield D(r, d),
                        y.end(),
                        window.innerWidth <=
                          o("WAWebFrontendConstants")
                            .LAYOUT_2COLUMNS_MAX_WIDTH &&
                          o(
                            "WAWebDrawerManager",
                          ).DrawerManager.closeDrawerRight());
                    } else y.push(_.TextMessage);
                    l && l();
                  },
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })()),
              (a[7] = i),
              (a[8] = y),
              (a[9] = $),
              (a[10] = l),
              (a[11] = d),
              (a[12] = P))
            : (P = a[12]);
          var N = P,
            M;
          a[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((M = function () {
                return b.current;
              }),
              (a[13] = M))
            : (M = a[13]);
          var w = M,
            A;
          a[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = function (t, n, r) {
                b.current = r;
              }),
              (a[14] = A))
            : (A = a[14]);
          var F = A,
            O;
          a[15] !== m
            ? ((O = m != null ? m : s._(/*BTDS*/ "Send message to")),
              (a[15] = m),
              (a[16] = O))
            : (O = a[16]);
          var B;
          a[17] !== y
            ? ((B = function () {
                return y.end();
              }),
              (a[17] = y),
              (a[18] = B))
            : (B = a[18]);
          var W;
          (a[19] !== N || a[20] !== B || a[21] !== O || a[22] !== k
            ? ((W = c.jsx(o("WAWebSelectModal.react").SelectModal, {
                title: O,
                tsNavigationData: k,
                listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
                getInitialItems: w,
                maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
                onConfirm: N,
                onCancel: B,
                onSelectionChanged: F,
                singleSelectionFooterType: o("WAWebSelectModalFooter.react")
                  .FooterType.NEXT,
                multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
                  .FooterType.NEXT,
              })),
              (a[19] = N),
              (a[20] = B),
              (a[21] = O),
              (a[22] = k),
              (a[23] = W))
            : (W = a[23]),
            (I = W));
          break e;
        }
        case _.TextMessage: {
          var q;
          a[24] !== y
            ? ((q = function (r, a, i) {
                (r.forEach(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        (yield R(t),
                          o("WAWebUiIdleEventBus").UiIdleEventBus.once(
                            "ui_idle",
                            function () {
                              (o("WALogger").LOG(
                                e ||
                                  (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "handleSend inside WAWebSendTextFlow",
                                  ])),
                              ),
                                o(
                                  "WAWebSendTextMsgChatAction",
                                ).sendTextMsgToChat(t, a, { linkPreview: i }));
                            },
                          ));
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                ),
                  y.end());
              }),
              (a[24] = y),
              (a[25] = q))
            : (q = a[25]);
          var U = q,
            V;
          a[26] !== m
            ? ((V = m != null ? m : s._(/*BTDS*/ "Send message to")),
              (a[26] = m),
              (a[27] = V))
            : (V = a[27]);
          var H;
          a[28] !== U
            ? ((H = function (t, n) {
                return U(S.current, t, n);
              }),
              (a[28] = U),
              (a[29] = H))
            : (H = a[29]);
          var G;
          a[30] !== y
            ? ((G = function () {
                return y.pop();
              }),
              (a[30] = y),
              (a[31] = G))
            : (G = a[31]);
          var z;
          (a[32] !== V || a[33] !== H || a[34] !== G || a[35] !== d
            ? ((z = c.jsx(r("WAWebTextMessageModal.react"), {
                defaultText: d,
                title: V,
                onSend: H,
                onBack: G,
              })),
              (a[32] = V),
              (a[33] = H),
              (a[34] = G),
              (a[35] = d),
              (a[36] = z))
            : (z = a[36]),
            (I = z));
        }
      }
      var j;
      return (
        a[37] !== h || a[38] !== I || a[39] !== y
          ? ((j = c.jsx(h, { flow: y, children: I })),
            (a[37] = h),
            (a[38] = I),
            (a[39] = y),
            (a[40] = j))
          : (j = a[40]),
        j
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebChatGetters").getIsUser(e) &&
            e.contact.isContactBlocked &&
            (yield o("WAWebBlockContactAction").unblockContact(e.contact));
        })),
        h.apply(this, arguments)
      );
    }
    l.default = f;
  },
  226,
);
