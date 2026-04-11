__d(
  "WAWebChatHeaderTextStatusBubble.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebAboutDailyUtils",
    "WAWebAboutWamLogger",
    "WAWebBizAiAgentStatusUtils",
    "WAWebClickable.react",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebContactGetters",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebListener",
    "useWAWebSetModelValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = 12,
      g = 6,
      h = 60,
      y = 450,
      C = 200,
      b = "xj0yvnm-B",
      v = "xwdlab6-B",
      S = "inset(-12px -12px -12px -12px)",
      R = "inset(-12px -12px 58% -12px)",
      L = "x1fc32xu-B",
      E = "xlx4h74-B",
      k = {
        text: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          fontSize: "x1nxh6w3",
          lineHeight: "xd4r4e8",
          color: "x14ug900",
          $$css: !0,
        },
      };
    function I(e) {
      var t = o("react-compiler-runtime").c(5),
        n = _(e ? "entering" : "hidden"),
        r = n[0],
        a = n[1],
        i = _(e),
        l = i[0],
        s = i[1];
      e !== l &&
        (s(e),
        e
          ? a("entering")
          : (r === "visible" || r === "entering") && a("leaving"));
      var u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = function (t) {
            t.target === t.currentTarget && a(D);
          }),
          (t[0] = u))
        : (u = t[0]);
      var c = u,
        d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = function (t) {
            t.target === t.currentTarget && a(T);
          }),
          (t[1] = d))
        : (d = t[1]);
      var m = d,
        p = r !== "hidden",
        f;
      return (
        t[2] !== r || t[3] !== p
          ? ((f = {
              isRendered: p,
              phase: r,
              handleEnterComplete: c,
              handleExitComplete: m,
            }),
            (t[2] = r),
            (t[3] = p),
            (t[4] = f))
          : (f = t[4]),
        f
      );
    }
    function T(e) {
      return e === "leaving" ? "hidden" : e;
    }
    function D(e) {
      return e === "entering" ? "visible" : e;
    }
    function x(e) {
      var t = o("react-compiler-runtime").c(66),
        n = e.chat,
        a = e.contactId,
        i;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var l;
        ((i = [
          o("WAWebContactGetters").getNotifyName,
          (l = o("WAWebFrontendContactGetters")).getTextStatusString,
          l.getTextStatusEmoji,
          l.getTextStatusLastUpdateTime,
          l.getTextStatusExpiryTs,
          l.getTextStatusEphemeralDuration,
        ]),
          (t[0] = i));
      } else i = t[0];
      var c = o("useWAWebContactValues").useContactValues(a, i),
        d = c[0],
        f = c[1],
        g = c[2],
        h = c[3],
        y = c[4],
        C = c[5],
        b = o("useWAWebSetModelValue").useSetModelValue(n, "composeQuotedMsg"),
        v = _(!0),
        S = v[0],
        R = v[1],
        L;
      t[1] !== n.id
        ? ((L = function (t, r) {
            t.equals(n.id) && R(r);
          }),
          (t[1] = n.id),
          (t[2] = L))
        : (L = t[2]);
      var E = L;
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "conversation_near_bottom_changed",
        E,
      );
      var T;
      t[3] !== g || t[4] !== C || t[5] !== y || t[6] !== h || t[7] !== f
        ? ((T = o("WAWebTextStatusUtils").shouldDisplayTextStatus(
            f,
            g,
            h,
            y,
            C,
          )),
          (t[3] = g),
          (t[4] = C),
          (t[5] = y),
          (t[6] = h),
          (t[7] = f),
          (t[8] = T))
        : (T = t[8]);
      var D = T,
        x;
      t[9] !== D || t[10] !== S || t[11] !== C
        ? ((x =
            o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
            D &&
            S &&
            o("WAWebTextStatusUtils").isEphemeralTextStatus(C)),
          (t[9] = D),
          (t[10] = S),
          (t[11] = C),
          (t[12] = x))
        : (x = t[12]);
      var $ = x,
        P;
      t[13] !== n.id || t[14] !== $
        ? ((P = function (t) {
            $ &&
              t.id.equals(n.id) &&
              o("WAWebAboutDailyUtils").incrementAboutMessageSend();
          }),
          (t[13] = n.id),
          (t[14] = $),
          (t[15] = P))
        : (P = t[15]);
      var N = P;
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "chat_message_sent",
        N,
      );
      var M = I($),
        w = M.handleEnterComplete,
        A = M.handleExitComplete,
        F = M.isRendered,
        O = M.phase,
        B = p(void 0),
        W,
        q;
      if (
        (t[16] !== $ || t[17] !== h
          ? ((W = function () {
              $ &&
                h !== B.current &&
                ((B.current = h),
                o("WAWebAboutWamLogger").logAboutConsumption({
                  aboutConsumptionSurface: o("WAWebAboutWamLogger")
                    .ABOUT_CONSUMPTION_SURFACE_TYPE.ONE_ON_ONE_CHAT,
                }),
                o("WAWebAboutDailyUtils").incrementAboutChatConsumption());
            }),
            (q = [$, h]),
            (t[16] = $),
            (t[17] = h),
            (t[18] = W),
            (t[19] = q))
          : ((W = t[18]), (q = t[19])),
        m(W, q),
        !F)
      )
        return null;
      var U;
      t[20] !== n ||
      t[21] !== a ||
      t[22] !== d ||
      t[23] !== b ||
      t[24] !== g ||
      t[25] !== f
        ? ((U = function () {
            var e = [];
            (g != null && e.push(g), f != null && f !== "" && e.push(f));
            var t = e.join(" ");
            if (t !== "") {
              var i = new (o("WAWebMsgModel").Msg)({
                id: new (r("WAWebMsgKey"))({
                  fromMe: !1,
                  remote: a,
                  id: r("WAWebMsgKey").newId_DEPRECATED(),
                }),
                type: o("WAWebMsgType").MSG_TYPE.CHAT,
                kind: o("WAWebMsgType").MsgKind.Chat,
                body: t,
                t: o("WATimeUtils").unixTime(),
                from: a,
                to: n.id,
                notifyName: d != null ? d : "",
                isNewMsg: !1,
                local: !0,
                ack: 0,
              });
              (o("WAWebMsgCollection").MsgCollection.add(i),
                b(i),
                o("WAWebComposeBoxActions").ComposeBoxActions.focus(n),
                o("WAWebAboutWamLogger").logAboutInteraction({
                  aboutConsumptionSurface: o("WAWebAboutWamLogger")
                    .ABOUT_CONSUMPTION_SURFACE_TYPE.ONE_ON_ONE_CHAT,
                }),
                o("WAWebAboutDailyUtils").incrementAboutChatBubbleTap());
            }
          }),
          (t[20] = n),
          (t[21] = a),
          (t[22] = d),
          (t[23] = b),
          (t[24] = g),
          (t[25] = f),
          (t[26] = U))
        : (U = t[26]);
      var V = U,
        H;
      if (g != null) {
        var G;
        t[27] !== g
          ? ((G = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(g)),
            (t[27] = g),
            (t[28] = G))
          : (G = t[28]);
        var z = G;
        if (z != null) {
          var j;
          t[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((j = { className: "x11lfxj5 x2lah0s" }), (t[29] = j))
            : (j = t[29]);
          var K;
          (t[30] !== z
            ? ((K = u.jsx(
                "div",
                babelHelpers.extends({}, j, {
                  children: u.jsx(
                    r("WAWebEmoji.react"),
                    { emoji: z, size: "small" },
                    "low-res",
                  ),
                }),
              )),
              (t[30] = z),
              (t[31] = K))
            : (K = t[31]),
            (H = K));
        }
      }
      var Q;
      t[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = s._(/*BTDS*/ "Quote text status")), (t[32] = Q))
        : (Q = t[32]);
      var X = Q,
        Y,
        J;
      t[33] !== n
        ? ((Y = o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(n)),
          (J = {
            0: {
              className:
                "x16w0wmm x6nvzda x4i4b9w xhl9efl xj65ea0 x16ovd2e x12xbjc7 x1iw51ew xde1mab xpr29tx xw5ewwj x78zum5 x6s0dn4 x1ypdohk",
            },
            1: {
              className:
                "x16w0wmm x6nvzda x4i4b9w xhl9efl xj65ea0 x16ovd2e x12xbjc7 x1iw51ew xde1mab xpr29tx xw5ewwj x78zum5 x6s0dn4 xt0e3qv",
            },
          }[!!Y << 0]),
          (t[33] = n),
          (t[34] = Y),
          (t[35] = J))
        : ((Y = t[34]), (J = t[35]));
      var Z;
      t[36] !== f
        ? ((Z = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            titlify: !0,
            xstyle: k.text,
            direction: "inherit",
            text: f,
            selectable: !1,
          })),
          (t[36] = f),
          (t[37] = Z))
        : (Z = t[37]);
      var ee;
      t[38] !== H || t[39] !== J || t[40] !== Z
        ? ((ee = u.jsxs(
            "div",
            babelHelpers.extends({}, J, { children: [H, Z] }),
          )),
          (t[38] = H),
          (t[39] = J),
          (t[40] = Z),
          (t[41] = ee))
        : (ee = t[41]);
      var te = ee,
        ne;
      t[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = {
            className: "x10l6tqk x1ts3d7w x1r4y97 x78zum5 xdt5ytf x1cy8zhl",
          }),
          (t[42] = ne))
        : (ne = t[42]);
      var re;
      t[43] !== O
        ? ((re = {
            0: {
              className:
                "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u",
            },
            2: {
              className:
                "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x91b5q4 x1ykxiw6 xa3vuyk x1u6ievf",
            },
            1: {
              className:
                "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u xocyte x5hsz1j xn0cd8s x1u6ievf x1vwdvh2",
            },
            3: {
              className:
                "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u xocyte x5hsz1j xn0cd8s x1u6ievf x1vwdvh2",
            },
          }[((O === "entering") << 1) | ((O === "leaving") << 0)]),
          (t[43] = O),
          (t[44] = re))
        : (re = t[44]);
      var oe = O === "leaving" ? A : void 0,
        ae;
      t[45] !== re || t[46] !== oe
        ? ((ae = u.jsx(
            "div",
            babelHelpers.extends({}, re, { onAnimationEnd: oe }),
          )),
          (t[45] = re),
          (t[46] = oe),
          (t[47] = ae))
        : (ae = t[47]);
      var ie;
      t[48] !== O
        ? ((ie = {
            0: {
              className:
                "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5",
            },
            2: {
              className:
                "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1hha2om x1ykxiw6 xa3vuyk x1u6ievf xreyxwi",
            },
            1: {
              className:
                "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1npxeiq x5hsz1j xn0cd8s x1u6ievf xreyxwi",
            },
            3: {
              className:
                "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1npxeiq x5hsz1j xn0cd8s x1u6ievf xreyxwi",
            },
          }[((O === "entering") << 1) | ((O === "leaving") << 0)]),
          (t[48] = O),
          (t[49] = ie))
        : (ie = t[49]);
      var le;
      t[50] !== ie
        ? ((le = u.jsx("div", babelHelpers.extends({}, ie))),
          (t[50] = ie),
          (t[51] = le))
        : (le = t[51]);
      var se;
      t[52] !== O
        ? ((se = {
            0: {},
            2: { className: "x91b5q4 x1ykxiw6 xa3vuyk x1u6ievf x1vwdvh2" },
            1: { className: "xocyte x5hsz1j xn0cd8s x1u6ievf" },
            3: { className: "x1vwdvh2 xocyte x5hsz1j xn0cd8s x1u6ievf" },
          }[((O === "entering") << 1) | ((O === "leaving") << 0)]),
          (t[52] = O),
          (t[53] = se))
        : (se = t[53]);
      var ue = O === "entering" ? w : void 0,
        ce;
      t[54] !== te || t[55] !== V || t[56] !== Y
        ? ((ce = Y
            ? te
            : u.jsx(o("WAWebClickable.react").Clickable, {
                onClick: V,
                ariaLabel: X,
                children: te,
              })),
          (t[54] = te),
          (t[55] = V),
          (t[56] = Y),
          (t[57] = ce))
        : (ce = t[57]);
      var de;
      t[58] !== se || t[59] !== ue || t[60] !== ce
        ? ((de = u.jsx(
            "div",
            babelHelpers.extends({}, se, { onAnimationEnd: ue, children: ce }),
          )),
          (t[58] = se),
          (t[59] = ue),
          (t[60] = ce),
          (t[61] = de))
        : (de = t[61]);
      var me;
      return (
        t[62] !== ae || t[63] !== le || t[64] !== de
          ? ((me = u.jsxs(
              "div",
              babelHelpers.extends({}, ne, {
                "data-testid": void 0,
                children: [ae, le, de],
              }),
            )),
            (t[62] = ae),
            (t[63] = le),
            (t[64] = de),
            (t[65] = me))
          : (me = t[65]),
        me
      );
    }
    l.default = x;
  },
  226,
);
