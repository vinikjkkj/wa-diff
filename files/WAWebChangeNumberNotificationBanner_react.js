__d(
  "WAWebChangeNumberNotificationBanner.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebButton.react",
    "WAWebChatGetters",
    "WAWebChatSendMessages",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebContactCollection",
    "WAWebConversationBanner.react",
    "WAWebFindChatAction",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebText_DONOTUSE.react",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebFindChatAction").findOrCreateLatestChat(
              e,
              "changeNumberNotificationClick",
            ),
            r = n.chat;
          (r.changeNumberOldJid || (r.changeNumberOldJid = t),
            (r.changeNumberNewJid = void 0),
            o("WAWebCmd")
              .Cmd.openChatFromUnread({ chat: r })
              .then(function (e) {
                e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(r);
              }));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.chat,
        a = e.ref,
        i = e.xstyle,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebChatGetters").getChangeNumberOldJid,
            o("WAWebChatGetters").getChangeNumberNewJid,
            o("WAWebChatGetters").getId,
          ]),
          (t[0] = l))
        : (l = t[0]);
      var c = o("useWAWebChatValues").useChatValues(n.id, l),
        m = c[0],
        p = c[1],
        _ = c[2],
        f;
      t[1] !== p || t[2] !== _
        ? ((f = function () {
            var e = _;
            d(r("WANullthrows")(p), e);
          }),
          (t[1] = p),
          (t[2] = _),
          (t[3] = f))
        : (f = t[3]);
      var g = f,
        h;
      t[4] !== n
        ? ((h = function () {
            o("WAWebChatSendMessages").sendDismissChangeNumber(n);
          }),
          (t[4] = n),
          (t[5] = h))
        : (h = t[5]);
      var y = h,
        C = m === void 0 && p !== void 0,
        b = m !== void 0 && p === void 0,
        v;
      if (t[6] !== m || t[7] !== _ || t[8] !== b) {
        e: {
          var S = m || _,
            R = o("WAWebContactCollection").ContactCollection.get(S),
            L =
              R != null &&
              (o("WAWebFrontendContactGetters").getIsMyContact(R) ||
                (R != null && R.id.isLid()))
                ? o("WAWebFrontendContactGetters").getFormattedName(R)
                : o("WAWebWidFormat").widToFormattedUser(S);
          if (b) {
            v = s._(
              /*BTDS*/ "{name} changed their phone number. You're currently chatting with their new number.",
              [s._param("name", L)],
            );
            break e;
          }
          v = s._(
            /*BTDS*/ "{name} changed their phone number to a new number.",
            [s._param("name", L)],
          );
        }
        ((t[6] = m), (t[7] = _), (t[8] = b), (t[9] = v));
      } else v = t[9];
      var E = v,
        k;
      t[10] !== C || t[11] !== g
        ? ((k = C
            ? u.jsx("div", {
                className: "x1fkuohi",
                children: u.jsx(o("WAWebButton.react").Button, {
                  onClick: g,
                  type: "plain-white",
                  nowrap: !0,
                  children: s._(/*BTDS*/ "Message new number"),
                }),
              })
            : null),
          (t[10] = C),
          (t[11] = g),
          (t[12] = k))
        : (k = t[12]);
      var I = k,
        T;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = { className: "x78zum5 x6s0dn4" }), (t[13] = T))
        : (T = t[13]);
      var D;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = "x1iyjqo2 xhslqc4"), (t[14] = D))
        : (D = t[14]);
      var x;
      t[15] !== E
        ? ((x = u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            theme: "plain",
            className: D,
            children: E,
          })),
          (t[15] = E),
          (t[16] = x))
        : (x = t[16]);
      var $;
      t[17] !== I || t[18] !== x
        ? (($ = u.jsxs(
            "div",
            babelHelpers.extends({}, T, { children: [x, I] }),
          )),
          (t[17] = I),
          (t[18] = x),
          (t[19] = $))
        : ($ = t[19]);
      var P;
      return (
        t[20] !== y || t[21] !== a || t[22] !== $ || t[23] !== i
          ? ((P = u.jsx(r("WAWebConversationBanner.react"), {
              ref: a,
              onClose: y,
              xstyle: i,
              children: $,
            })),
            (t[20] = y),
            (t[21] = a),
            (t[22] = $),
            (t[23] = i),
            (t[24] = P))
          : (P = t[24]),
        P
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(1),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [
            o("WAWebFrontendChatGetters").getShowChangeNumberNotification,
          ]),
          (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebChatValues").useChatValues(e.id, n),
        a = r[0];
      return a;
    }
    ((l.onChangeNumberNotificationClick = d),
      (l.ChangeNumberNotificationBanner = p),
      (l.useChangeNumberNotificationBanner = _));
  },
  226,
);
