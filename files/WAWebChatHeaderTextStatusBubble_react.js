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
      var t = _(e ? "entering" : "hidden"),
        n = t[0],
        r = t[1],
        o = _(e),
        a = o[0],
        i = o[1];
      e !== a &&
        (i(e),
        e
          ? r("entering")
          : (n === "visible" || n === "entering") && r("leaving"));
      var l = d(function (e) {
          e.target === e.currentTarget &&
            r(function (e) {
              return e === "entering" ? "visible" : e;
            });
        }, []),
        s = d(function (e) {
          e.target === e.currentTarget &&
            r(function (e) {
              return e === "leaving" ? "hidden" : e;
            });
        }, []);
      return {
        isRendered: n !== "hidden",
        phase: n,
        handleEnterComplete: l,
        handleExitComplete: s,
      };
    }
    function T(e) {
      var t,
        n = e.chat,
        a = e.contactId,
        i = e.selectable,
        l = o("useWAWebContactValues").useContactValues(a, [
          o("WAWebContactGetters").getNotifyName,
          (t = o("WAWebFrontendContactGetters")).getTextStatusString,
          t.getTextStatusEmoji,
          t.getTextStatusLastUpdateTime,
          t.getTextStatusExpiryTs,
          t.getTextStatusEphemeralDuration,
        ]),
        c = l[0],
        f = l[1],
        g = l[2],
        h = l[3],
        y = l[4],
        C = l[5],
        b = o("useWAWebSetModelValue").useSetModelValue(n, "composeQuotedMsg"),
        v = o("WAWebThemeContext").useIsDarkTheme(),
        S = _(!0),
        R = S[0],
        L = S[1],
        E = d(
          function (e, t) {
            e.equals(n.id) && L(t);
          },
          [n.id],
        );
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "conversation_near_bottom_changed",
        E,
      );
      var T = o("WAWebTextStatusUtils").shouldDisplayTextStatus(f, g, h, y, C),
        D =
          o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
          T &&
          R &&
          i !== !0 &&
          o("WAWebTextStatusUtils").isEphemeralTextStatus(C),
        x = d(
          function (e) {
            D &&
              e.id.equals(n.id) &&
              o("WAWebAboutDailyUtils").incrementAboutMessageSend();
          },
          [D, n.id],
        );
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "chat_message_sent",
        x,
      );
      var $ = I(D),
        P = $.handleEnterComplete,
        N = $.handleExitComplete,
        M = $.isRendered,
        w = $.phase,
        A = p(void 0);
      if (
        (m(
          function () {
            D &&
              h !== A.current &&
              ((A.current = h),
              o("WAWebAboutWamLogger").logAboutConsumption({
                aboutConsumptionSurface: o("WAWebAboutWamLogger")
                  .ABOUT_CONSUMPTION_SURFACE_TYPE.ONE_ON_ONE_CHAT,
              }),
              o("WAWebAboutDailyUtils").incrementAboutChatConsumption());
          },
          [D, h],
        ),
        !M)
      )
        return null;
      var F = function () {
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
              notifyName: c != null ? c : "",
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
        },
        O;
      if (g != null) {
        var B = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(g);
        B != null &&
          (O = u.jsx("div", {
            className: "x11lfxj5 x2lah0s",
            children: u.jsx(
              r("WAWebEmoji.react"),
              { emoji: B, size: "small" },
              "low-res",
            ),
          }));
      }
      var W = s._(/*BTDS*/ "Quote text status"),
        q = o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(n),
        U = u.jsxs(
          "div",
          babelHelpers.extends(
            {},
            {
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
            }[(!!v << 1) | (!!q << 0)],
            {
              children: [
                O,
                u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  xstyle: k.text,
                  direction: "inherit",
                  text: f,
                  selectable: !1,
                }),
              ],
            },
          ),
        );
      return u.jsxs("div", {
        className: "x10l6tqk x1ts3d7w x1r4y97 x78zum5 xdt5ytf x1cy8zhl",
        "data-testid": void 0,
        children: [
          u.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
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
              }[
                (!!v << 2) |
                  ((w === "entering") << 1) |
                  ((w === "leaving") << 0)
              ],
              { onAnimationEnd: w === "leaving" ? N : void 0 },
            ),
          ),
          u.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
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
              }[
                (!!v << 2) |
                  ((w === "entering") << 1) |
                  ((w === "leaving") << 0)
              ],
            ),
          ),
          u.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {},
                2: {
                  className:
                    "x91b5q4 x1ykxiw6 xa3vuyk x1u6ievf x1vwdvh2 x1al4vs7",
                },
                1: { className: "xocyte x5hsz1j xn0cd8s x1u6ievf x1al4vs7" },
                3: {
                  className:
                    "x1vwdvh2 xocyte x5hsz1j xn0cd8s x1u6ievf x1al4vs7",
                },
              }[((w === "entering") << 1) | ((w === "leaving") << 0)],
              {
                onAnimationEnd: w === "entering" ? P : void 0,
                children: q
                  ? U
                  : u.jsx(o("WAWebClickable.react").Clickable, {
                      onClick: F,
                      ariaLabel: W,
                      children: U,
                    }),
              },
            ),
          ),
        ],
      });
    }
    ((T.displayName = T.name + " [from " + i.id + "]"), (l.default = T));
  },
  226,
);
