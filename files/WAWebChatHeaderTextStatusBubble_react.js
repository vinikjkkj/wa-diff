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
      var t = o("react-compiler-runtime").c(70),
        n = e.chat,
        a = e.contactId,
        i = e.selectable,
        l;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var c;
        ((l = [
          o("WAWebContactGetters").getNotifyName,
          (c = o("WAWebFrontendContactGetters")).getTextStatusString,
          c.getTextStatusEmoji,
          c.getTextStatusLastUpdateTime,
          c.getTextStatusExpiryTs,
          c.getTextStatusEphemeralDuration,
        ]),
          (t[0] = l));
      } else l = t[0];
      var d = o("useWAWebContactValues").useContactValues(a, l),
        f = d[0],
        g = d[1],
        h = d[2],
        y = d[3],
        C = d[4],
        b = d[5],
        v = o("useWAWebSetModelValue").useSetModelValue(n, "composeQuotedMsg"),
        S = o("WAWebThemeContext").useIsDarkTheme(),
        R = _(!0),
        L = R[0],
        E = R[1],
        T;
      t[1] !== n.id
        ? ((T = function (t, r) {
            t.equals(n.id) && E(r);
          }),
          (t[1] = n.id),
          (t[2] = T))
        : (T = t[2]);
      var D = T;
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "conversation_near_bottom_changed",
        D,
      );
      var x;
      t[3] !== h || t[4] !== b || t[5] !== C || t[6] !== y || t[7] !== g
        ? ((x = o("WAWebTextStatusUtils").shouldDisplayTextStatus(
            g,
            h,
            y,
            C,
            b,
          )),
          (t[3] = h),
          (t[4] = b),
          (t[5] = C),
          (t[6] = y),
          (t[7] = g),
          (t[8] = x))
        : (x = t[8]);
      var $ = x,
        P;
      t[9] !== $ || t[10] !== L || t[11] !== i || t[12] !== b
        ? ((P =
            o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
            $ &&
            L &&
            i !== !0 &&
            o("WAWebTextStatusUtils").isEphemeralTextStatus(b)),
          (t[9] = $),
          (t[10] = L),
          (t[11] = i),
          (t[12] = b),
          (t[13] = P))
        : (P = t[13]);
      var N = P,
        M;
      t[14] !== n.id || t[15] !== N
        ? ((M = function (t) {
            N &&
              t.id.equals(n.id) &&
              o("WAWebAboutDailyUtils").incrementAboutMessageSend();
          }),
          (t[14] = n.id),
          (t[15] = N),
          (t[16] = M))
        : (M = t[16]);
      var w = M;
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "chat_message_sent",
        w,
      );
      var A = I(N),
        F = A.handleEnterComplete,
        O = A.handleExitComplete,
        B = A.isRendered,
        W = A.phase,
        q = p(void 0),
        U,
        V;
      if (
        (t[17] !== N || t[18] !== y
          ? ((U = function () {
              N &&
                y !== q.current &&
                ((q.current = y),
                o("WAWebAboutWamLogger").logAboutConsumption({
                  aboutConsumptionSurface: o("WAWebAboutWamLogger")
                    .ABOUT_CONSUMPTION_SURFACE_TYPE.ONE_ON_ONE_CHAT,
                }),
                o("WAWebAboutDailyUtils").incrementAboutChatConsumption());
            }),
            (V = [N, y]),
            (t[17] = N),
            (t[18] = y),
            (t[19] = U),
            (t[20] = V))
          : ((U = t[19]), (V = t[20])),
        m(U, V),
        !B)
      )
        return null;
      var H;
      t[21] !== n ||
      t[22] !== a ||
      t[23] !== f ||
      t[24] !== v ||
      t[25] !== h ||
      t[26] !== g
        ? ((H = function () {
            var e = [];
            (h != null && e.push(h), g != null && g !== "" && e.push(g));
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
                notifyName: f != null ? f : "",
                isNewMsg: !1,
                local: !0,
                ack: 0,
              });
              (o("WAWebMsgCollection").MsgCollection.add(i),
                v(i),
                o("WAWebComposeBoxActions").ComposeBoxActions.focus(n),
                o("WAWebAboutWamLogger").logAboutInteraction({
                  aboutConsumptionSurface: o("WAWebAboutWamLogger")
                    .ABOUT_CONSUMPTION_SURFACE_TYPE.ONE_ON_ONE_CHAT,
                }),
                o("WAWebAboutDailyUtils").incrementAboutChatBubbleTap());
            }
          }),
          (t[21] = n),
          (t[22] = a),
          (t[23] = f),
          (t[24] = v),
          (t[25] = h),
          (t[26] = g),
          (t[27] = H))
        : (H = t[27]);
      var G = H,
        z;
      if (h != null) {
        var j;
        t[28] !== h
          ? ((j = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(h)),
            (t[28] = h),
            (t[29] = j))
          : (j = t[29]);
        var K = j;
        if (K != null) {
          var Q;
          t[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((Q = { className: "x11lfxj5 x2lah0s" }), (t[30] = Q))
            : (Q = t[30]);
          var X;
          (t[31] !== K
            ? ((X = u.jsx(
                "div",
                babelHelpers.extends({}, Q, {
                  children: u.jsx(
                    r("WAWebEmoji.react"),
                    { emoji: K, size: "small" },
                    "low-res",
                  ),
                }),
              )),
              (t[31] = K),
              (t[32] = X))
            : (X = t[32]),
            (z = X));
        }
      }
      var Y;
      t[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = s._(/*BTDS*/ "Quote text status")), (t[33] = Y))
        : (Y = t[33]);
      var J = Y,
        Z,
        ee;
      t[34] !== n || t[35] !== S
        ? ((Z = o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(n)),
          (ee = {
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
          }[(!!S << 1) | (!!Z << 0)]),
          (t[34] = n),
          (t[35] = S),
          (t[36] = Z),
          (t[37] = ee))
        : ((Z = t[36]), (ee = t[37]));
      var te;
      t[38] !== g
        ? ((te = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            xstyle: k.text,
            direction: "inherit",
            text: g,
            selectable: !1,
          })),
          (t[38] = g),
          (t[39] = te))
        : (te = t[39]);
      var ne;
      t[40] !== z || t[41] !== ee || t[42] !== te
        ? ((ne = u.jsxs(
            "div",
            babelHelpers.extends({}, ee, { children: [z, te] }),
          )),
          (t[40] = z),
          (t[41] = ee),
          (t[42] = te),
          (t[43] = ne))
        : (ne = t[43]);
      var re = ne,
        oe;
      t[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = {
            className: "x10l6tqk x1ts3d7w x1r4y97 x78zum5 xdt5ytf x1cy8zhl",
          }),
          (t[44] = oe))
        : (oe = t[44]);
      var ae;
      t[45] !== S || t[46] !== W
        ? ((ae = {
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
          }[(!!S << 2) | ((W === "entering") << 1) | ((W === "leaving") << 0)]),
          (t[45] = S),
          (t[46] = W),
          (t[47] = ae))
        : (ae = t[47]);
      var ie = W === "leaving" ? O : void 0,
        le;
      t[48] !== ae || t[49] !== ie
        ? ((le = u.jsx(
            "div",
            babelHelpers.extends({}, ae, { onAnimationEnd: ie }),
          )),
          (t[48] = ae),
          (t[49] = ie),
          (t[50] = le))
        : (le = t[50]);
      var se;
      t[51] !== S || t[52] !== W
        ? ((se = {
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
          }[(!!S << 2) | ((W === "entering") << 1) | ((W === "leaving") << 0)]),
          (t[51] = S),
          (t[52] = W),
          (t[53] = se))
        : (se = t[53]);
      var ue;
      t[54] !== se
        ? ((ue = u.jsx("div", babelHelpers.extends({}, se))),
          (t[54] = se),
          (t[55] = ue))
        : (ue = t[55]);
      var ce;
      t[56] !== W
        ? ((ce = {
            0: {},
            2: {
              className: "x91b5q4 x1ykxiw6 xa3vuyk x1u6ievf x1vwdvh2 x1al4vs7",
            },
            1: { className: "xocyte x5hsz1j xn0cd8s x1u6ievf x1al4vs7" },
            3: {
              className: "x1vwdvh2 xocyte x5hsz1j xn0cd8s x1u6ievf x1al4vs7",
            },
          }[((W === "entering") << 1) | ((W === "leaving") << 0)]),
          (t[56] = W),
          (t[57] = ce))
        : (ce = t[57]);
      var de = W === "entering" ? F : void 0,
        me;
      t[58] !== re || t[59] !== G || t[60] !== Z
        ? ((me = Z
            ? re
            : u.jsx(o("WAWebClickable.react").Clickable, {
                onClick: G,
                ariaLabel: J,
                children: re,
              })),
          (t[58] = re),
          (t[59] = G),
          (t[60] = Z),
          (t[61] = me))
        : (me = t[61]);
      var pe;
      t[62] !== ce || t[63] !== de || t[64] !== me
        ? ((pe = u.jsx(
            "div",
            babelHelpers.extends({}, ce, { onAnimationEnd: de, children: me }),
          )),
          (t[62] = ce),
          (t[63] = de),
          (t[64] = me),
          (t[65] = pe))
        : (pe = t[65]);
      var _e;
      return (
        t[66] !== le || t[67] !== ue || t[68] !== pe
          ? ((_e = u.jsxs(
              "div",
              babelHelpers.extends({}, oe, {
                "data-testid": void 0,
                children: [le, ue, pe],
              }),
            )),
            (t[66] = le),
            (t[67] = ue),
            (t[68] = pe),
            (t[69] = _e))
          : (_e = t[69]),
        _e
      );
    }
    l.default = x;
  },
  226,
);
