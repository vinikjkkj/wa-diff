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
    "WAWebThemeContext",
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
      var t = o("react-compiler-runtime").c(69),
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
        v = o("WAWebThemeContext").useIsDarkTheme(),
        S = _(!0),
        R = S[0],
        L = S[1],
        E;
      t[1] !== n.id
        ? ((E = function (t, r) {
            t.equals(n.id) && L(r);
          }),
          (t[1] = n.id),
          (t[2] = E))
        : (E = t[2]);
      var T = E;
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "conversation_near_bottom_changed",
        T,
      );
      var D;
      t[3] !== g || t[4] !== C || t[5] !== y || t[6] !== h || t[7] !== f
        ? ((D = o("WAWebTextStatusUtils").shouldDisplayTextStatus(
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
          (t[8] = D))
        : (D = t[8]);
      var x = D,
        $;
      t[9] !== x || t[10] !== R || t[11] !== C
        ? (($ =
            o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
            x &&
            R &&
            o("WAWebTextStatusUtils").isEphemeralTextStatus(C)),
          (t[9] = x),
          (t[10] = R),
          (t[11] = C),
          (t[12] = $))
        : ($ = t[12]);
      var P = $,
        N;
      t[13] !== n.id || t[14] !== P
        ? ((N = function (t) {
            P &&
              t.id.equals(n.id) &&
              o("WAWebAboutDailyUtils").incrementAboutMessageSend();
          }),
          (t[13] = n.id),
          (t[14] = P),
          (t[15] = N))
        : (N = t[15]);
      var M = N;
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "chat_message_sent",
        M,
      );
      var w = I(P),
        A = w.handleEnterComplete,
        F = w.handleExitComplete,
        O = w.isRendered,
        B = w.phase,
        W = p(void 0),
        q,
        U;
      if (
        (t[16] !== P || t[17] !== h
          ? ((q = function () {
              P &&
                h !== W.current &&
                ((W.current = h),
                o("WAWebAboutWamLogger").logAboutConsumption({
                  aboutConsumptionSurface: o("WAWebAboutWamLogger")
                    .ABOUT_CONSUMPTION_SURFACE_TYPE.ONE_ON_ONE_CHAT,
                }),
                o("WAWebAboutDailyUtils").incrementAboutChatConsumption());
            }),
            (U = [P, h]),
            (t[16] = P),
            (t[17] = h),
            (t[18] = q),
            (t[19] = U))
          : ((q = t[18]), (U = t[19])),
        m(q, U),
        !O)
      )
        return null;
      var V;
      t[20] !== n ||
      t[21] !== a ||
      t[22] !== d ||
      t[23] !== b ||
      t[24] !== g ||
      t[25] !== f
        ? ((V = function () {
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
          (t[26] = V))
        : (V = t[26]);
      var H = V,
        G;
      if (g != null) {
        var z;
        t[27] !== g
          ? ((z = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(g)),
            (t[27] = g),
            (t[28] = z))
          : (z = t[28]);
        var j = z;
        if (j != null) {
          var K;
          t[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((K = { className: "x11lfxj5 x2lah0s" }), (t[29] = K))
            : (K = t[29]);
          var Q;
          (t[30] !== j
            ? ((Q = u.jsx(
                "div",
                babelHelpers.extends({}, K, {
                  children: u.jsx(
                    r("WAWebEmoji.react"),
                    { emoji: j, size: "small" },
                    "low-res",
                  ),
                }),
              )),
              (t[30] = j),
              (t[31] = Q))
            : (Q = t[31]),
            (G = Q));
        }
      }
      var X;
      t[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = s._(/*BTDS*/ "Quote text status")), (t[32] = X))
        : (X = t[32]);
      var Y = X,
        J,
        Z;
      t[33] !== n || t[34] !== v
        ? ((J = o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(n)),
          (Z = {
            0: {
              className:
                "x16w0wmm x6nvzda x4i4b9w xhl9efl xj65ea0 x16ovd2e x12xbjc7 x1iw51ew xde1mab xpr29tx xw5ewwj x78zum5 x6s0dn4 x1ypdohk x1dsg9wm",
            },
            2: {
              className:
                "x16w0wmm x6nvzda x4i4b9w xhl9efl xj65ea0 x16ovd2e x12xbjc7 x1iw51ew xde1mab xpr29tx xw5ewwj x78zum5 x6s0dn4 x1ypdohk x1dsg9wm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9",
            },
            1: {
              className:
                "x16w0wmm x6nvzda x4i4b9w xhl9efl xj65ea0 x16ovd2e x12xbjc7 x1iw51ew xde1mab xpr29tx xw5ewwj x78zum5 x6s0dn4 x1dsg9wm xt0e3qv",
            },
            3: {
              className:
                "x16w0wmm x6nvzda x4i4b9w xhl9efl xj65ea0 x16ovd2e x12xbjc7 x1iw51ew xde1mab xpr29tx xw5ewwj x78zum5 x6s0dn4 x1dsg9wm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 xt0e3qv",
            },
          }[(!!v << 1) | (!!J << 0)]),
          (t[33] = n),
          (t[34] = v),
          (t[35] = J),
          (t[36] = Z))
        : ((J = t[35]), (Z = t[36]));
      var ee;
      t[37] !== f
        ? ((ee = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            xstyle: k.text,
            direction: "inherit",
            text: f,
            selectable: !1,
          })),
          (t[37] = f),
          (t[38] = ee))
        : (ee = t[38]);
      var te;
      t[39] !== G || t[40] !== Z || t[41] !== ee
        ? ((te = u.jsxs(
            "div",
            babelHelpers.extends({}, Z, { children: [G, ee] }),
          )),
          (t[39] = G),
          (t[40] = Z),
          (t[41] = ee),
          (t[42] = te))
        : (te = t[42]);
      var ne = te,
        re;
      t[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = {
            className: "x10l6tqk x1ts3d7w x1r4y97 x78zum5 xdt5ytf x1cy8zhl",
          }),
          (t[43] = re))
        : (re = t[43]);
      var oe;
      t[44] !== v || t[45] !== B
        ? ((oe = {
            0: {
              className:
                "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7",
            },
            4: {
              className:
                "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9",
            },
            2: {
              className:
                "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7 x91b5q4 x1ykxiw6 xa3vuyk x1u6ievf",
            },
            6: {
              className:
                "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x91b5q4 x1ykxiw6 xa3vuyk x1u6ievf",
            },
            1: {
              className:
                "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7 xocyte x5hsz1j xn0cd8s x1u6ievf x1vwdvh2",
            },
            5: {
              className:
                "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 xocyte x5hsz1j xn0cd8s x1u6ievf x1vwdvh2",
            },
            3: {
              className:
                "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7 xocyte x5hsz1j xn0cd8s x1u6ievf x1vwdvh2",
            },
            7: {
              className:
                "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 xocyte x5hsz1j xn0cd8s x1u6ievf x1vwdvh2",
            },
          }[(!!v << 2) | ((B === "entering") << 1) | ((B === "leaving") << 0)]),
          (t[44] = v),
          (t[45] = B),
          (t[46] = oe))
        : (oe = t[46]);
      var ae = B === "leaving" ? F : void 0,
        ie;
      t[47] !== oe || t[48] !== ae
        ? ((ie = u.jsx(
            "div",
            babelHelpers.extends({}, oe, { onAnimationEnd: ae }),
          )),
          (t[47] = oe),
          (t[48] = ae),
          (t[49] = ie))
        : (ie = t[49]);
      var le;
      t[50] !== v || t[51] !== B
        ? ((le = {
            0: {
              className:
                "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7",
            },
            4: {
              className:
                "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9",
            },
            2: {
              className:
                "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7 x1hha2om x1ykxiw6 xa3vuyk x1u6ievf xreyxwi",
            },
            6: {
              className:
                "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x1hha2om x1ykxiw6 xa3vuyk x1u6ievf xreyxwi",
            },
            1: {
              className:
                "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7 x1npxeiq x5hsz1j xn0cd8s x1u6ievf xreyxwi",
            },
            5: {
              className:
                "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x1npxeiq x5hsz1j xn0cd8s x1u6ievf xreyxwi",
            },
            3: {
              className:
                "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7 x1npxeiq x5hsz1j xn0cd8s x1u6ievf xreyxwi",
            },
            7: {
              className:
                "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x1npxeiq x5hsz1j xn0cd8s x1u6ievf xreyxwi",
            },
          }[(!!v << 2) | ((B === "entering") << 1) | ((B === "leaving") << 0)]),
          (t[50] = v),
          (t[51] = B),
          (t[52] = le))
        : (le = t[52]);
      var se;
      t[53] !== le
        ? ((se = u.jsx("div", babelHelpers.extends({}, le))),
          (t[53] = le),
          (t[54] = se))
        : (se = t[54]);
      var ue;
      t[55] !== B
        ? ((ue = {
            0: {},
            2: {
              className: "x91b5q4 x1ykxiw6 xa3vuyk x1u6ievf x1vwdvh2 x1al4vs7",
            },
            1: { className: "xocyte x5hsz1j xn0cd8s x1u6ievf x1al4vs7" },
            3: {
              className: "x1vwdvh2 xocyte x5hsz1j xn0cd8s x1u6ievf x1al4vs7",
            },
          }[((B === "entering") << 1) | ((B === "leaving") << 0)]),
          (t[55] = B),
          (t[56] = ue))
        : (ue = t[56]);
      var ce = B === "entering" ? A : void 0,
        de;
      t[57] !== ne || t[58] !== H || t[59] !== J
        ? ((de = J
            ? ne
            : u.jsx(o("WAWebClickable.react").Clickable, {
                onClick: H,
                ariaLabel: Y,
                children: ne,
              })),
          (t[57] = ne),
          (t[58] = H),
          (t[59] = J),
          (t[60] = de))
        : (de = t[60]);
      var me;
      t[61] !== ue || t[62] !== ce || t[63] !== de
        ? ((me = u.jsx(
            "div",
            babelHelpers.extends({}, ue, { onAnimationEnd: ce, children: de }),
          )),
          (t[61] = ue),
          (t[62] = ce),
          (t[63] = de),
          (t[64] = me))
        : (me = t[64]);
      var pe;
      return (
        t[65] !== ie || t[66] !== se || t[67] !== me
          ? ((pe = u.jsxs(
              "div",
              babelHelpers.extends({}, re, {
                "data-testid": void 0,
                children: [ie, se, me],
              }),
            )),
            (t[65] = ie),
            (t[66] = se),
            (t[67] = me),
            (t[68] = pe))
          : (pe = t[68]),
        pe
      );
    }
    l.default = x;
  },
  226,
);
