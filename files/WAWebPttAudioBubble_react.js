__d(
  "WAWebPttAudioBubble.react",
  [
    "cx",
    "WAWebAck",
    "WAWebBizCtwaContext.react",
    "WAWebClassnames",
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMsgGetters",
    "WAWebMsgSelectors",
    "WAWebNewsletterGatingUtils",
    "WAWebPttMessagePlaybackRateButton",
    "WAWebPttPrefs",
    "WAWebShowForwardedNewsletterMessageIndicator",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = "6px",
      m = "336px",
      p = {
        bubble: {
          boxSizing: "x9f619",
          maxWidth: "x193iq5w",
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "x10b6aqq",
          paddingInlineStart: "x25sj25",
          $$css: !0,
        },
        newsletterBubble: { width: "x1yuel0x", $$css: !0 },
        regularBubble: { width: "x121pien", $$css: !0 },
        bubbleAnnouncement: { width: "x1yuel0x", $$css: !0 },
        hasAuthorAnnouncement: { paddingTop: "x1byr4rc", $$css: !0 },
        forwardedIndicator: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "xg8j3zb",
          paddingInlineStart: "x135b78x",
          $$css: !0,
        },
        hasAuthorForwardedIndicator: { paddingTop: "x123j3cw", $$css: !0 },
        hasAuthor: { paddingTop: "x9tmck8", $$css: !0 },
        hasAuthorElevatedPushNames: { paddingTop: "xexx8yu", $$css: !0 },
        hasQuote: { paddingTop: "xyqdw3p", $$css: !0 },
      };
    function _(t) {
      var n,
        a,
        i,
        l,
        s = o("react-compiler-runtime").c(64),
        u = t.msg,
        d;
      s[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = [
            o("WAWebMsgGetters").getId,
            o("WAWebMsgGetters").getAck,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebFrontendMsgGetters").getAsPttLike,
          ]),
          (s[0] = d))
        : (d = s[0]);
      var m = o("useWAWebMsgValues").useMsgValues(u.id, d),
        _ = m[0],
        f = m[1],
        g = m[2],
        h = m[3],
        y = o("WAWebFrontendMsgGetters").getChat(u.unsafe()),
        C;
      s[1] !== g
        ? ((C = r("WAWebL10N").isRTL() ? !g : g), (s[1] = g), (s[2] = C))
        : (C = s[2]);
      var b = C,
        v = t.author != null,
        S = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(y),
        R = t.quotedMsg != null,
        L = o("WAWebMsgSelectors").showForwarded(u),
        E = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((n = {}),
          (n._ak49 = !b),
          (n._ak4a = b),
          (n._ak4e =
            t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS ||
            t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY),
          n),
          (e || (e = r("stylex")))(
            t.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER
              ? p.regularBubble
              : p.newsletterBubble,
            o("WAWebDisplayType").isWideDisplay(t.displayType) &&
              p.bubbleAnnouncement,
            t.author != null &&
              o("WAWebDisplayType").isWideDisplay(t.displayType) &&
              p.hasAuthorAnnouncement,
            v && p.hasAuthor,
            v && S && p.hasAuthorElevatedPushNames,
            R && p.hasQuote,
            p.bubble,
          ),
        ),
        k;
      s[3] !== t.status
        ? ((k = t.status
            ? c.jsx("div", { className: "_ak4g", children: t.status })
            : null),
          (s[3] = t.status),
          (s[4] = k))
        : (k = s[4]);
      var I = k,
        T = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((a = {}), (a._ak4c = S), (a._ak4h = !0), a),
          {
            0: "x1e8r7jv xiqdezl",
            8: "x1n2onr6 x1ngbm5e x1tvzbhf xyqdw3p x1djpfga x1e8r7jv xiqdezl",
            4: "x1e8r7jv xiqdezl",
            12: "x1n2onr6 x1ngbm5e x1tvzbhf xyqdw3p x1djpfga x1e8r7jv xiqdezl",
            2: "x1e8r7jv xiqdezl",
            10: "x1n2onr6 x1ngbm5e x1tvzbhf xyqdw3p x1djpfga x1e8r7jv xiqdezl",
            6: "x1e8r7jv xiqdezl",
            14: "x1n2onr6 x1ngbm5e x1tvzbhf xyqdw3p x1djpfga x1e8r7jv xiqdezl",
            1: "xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
            9: "x1n2onr6 x1ngbm5e xyqdw3p xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
            5: "xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
            13: "x1n2onr6 x1ngbm5e xyqdw3p xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
            3: "xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
            11: "x1n2onr6 x1ngbm5e xyqdw3p xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
            7: "xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
            15: "x1n2onr6 x1ngbm5e xyqdw3p xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
          }[
            (!!R << 3) |
              (!!L << 2) |
              (!!o("WAWebDisplayType").isWideDisplay(t.displayType) << 1) |
              (!!S << 0)
          ],
        ),
        D =
          t.author != null
            ? c.jsx("div", { className: T, children: t.author })
            : null,
        x;
      s[5] !== v || s[6] !== u
        ? ((x = o("WAWebMsgSelectors").showForwarded(u)
            ? c.jsx(r("WAWebMessageForwardedIndicator.react"), {
                msg: u.unsafe(),
                xstyle: [
                  p.forwardedIndicator,
                  v && p.hasAuthorForwardedIndicator,
                ],
              })
            : null),
          (s[5] = v),
          (s[6] = u),
          (s[7] = x))
        : (x = s[7]);
      var $ = x,
        P;
      s[8] !== u
        ? ((P = c.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
            msg: u,
          })),
          (s[8] = u),
          (s[9] = P))
        : (P = s[9]);
      var N = P,
        M = o(
          "WAWebShowForwardedNewsletterMessageIndicator",
        ).showForwardedNewsletterMessageIndicator(
          u.forwardedNewsletterMessageInfo,
          u.type,
          o("WAWebNewsletterGatingUtils")
            .isNewsletterForwardBottomButtonEnabled,
        ),
        w;
      s[10] !== v || s[11] !== t.quotedMsg
        ? ((w = t.quotedMsg
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: { className: "xdj266r x18faa90 x1e56ztr x4h0osi" },
                    1: { className: "x18faa90 x1e56ztr x4h0osi x1ok221b" },
                  }[!!v << 0],
                  { children: t.quotedMsg },
                ),
              )
            : null),
          (s[10] = v),
          (s[11] = t.quotedMsg),
          (s[12] = w))
        : (w = s[12]);
      var A = w,
        F;
      s[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = ["playbackRate", "playbackControlMessageId"]), (s[13] = F))
        : (F = s[13]);
      var O = o("useWAWebModelValues").useModelValues(
          o("WAWebPttPrefs").PttPrefs,
          F,
        ),
        B = O.playbackControlMessageId,
        W = O.playbackRate,
        q = h != null,
        U,
        V = !1;
      if (q) {
        var H;
        (s[14] !== _
          ? ((H = _.toString()), (s[14] = _), (s[15] = H))
          : (H = s[15]),
          (V = B === H));
        var G;
        s[16] !== _
          ? ((G = function () {
              o("WAWebPttPrefs").PttPrefs.advancePlaybackRateFor(_);
            }),
            (s[16] = _),
            (s[17] = G))
          : (G = s[17]);
        var z = G,
          j;
        if (s[18] !== V) {
          var K;
          ((j = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((K = {}), (K._ak4l = V), (K._ak4k = !0), K),
          )),
            (s[18] = V),
            (s[19] = j));
        } else j = s[19];
        var Q = j,
          X = f === o("WAWebAck").ACK.PLAYED,
          Y;
        s[20] !== z || s[21] !== g || s[22] !== W || s[23] !== V || s[24] !== X
          ? ((Y = c.jsx(r("WAWebPttMessagePlaybackRateButton"), {
              playbackRate: W,
              onClick: z,
              isSentByMe: g,
              played: X,
              playbackRateButtonIsVisible: V,
            })),
            (s[20] = z),
            (s[21] = g),
            (s[22] = W),
            (s[23] = V),
            (s[24] = X),
            (s[25] = Y))
          : (Y = s[25]);
        var J;
        (s[26] !== Q || s[27] !== Y
          ? ((J = c.jsx("div", { className: Q, children: Y })),
            (s[26] = Q),
            (s[27] = Y),
            (s[28] = J))
          : (J = s[28]),
          (U = J));
      }
      var Z = !V,
        ee;
      if (s[29] !== Z) {
        var te;
        ((ee = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((te = {}), (te._ak4n = Z), (te._ak4m = !0), te),
        )),
          (s[29] = Z),
          (s[30] = ee));
      } else ee = s[30];
      var ne = ee,
        re = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((i = {}), (i._ak4c = S), (i._ak4o = !0), i),
        ),
        oe = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((l = {}), (l._ak4s = !0), l),
          { 0: "", 2: "xbfrwjf", 1: "x1ua38it", 3: "x1ua38it" }[
            (!M << 1) | (!!M << 0)
          ],
        ),
        ae;
      s[31] !== u
        ? ((ae = u.unsafe()), (s[31] = u), (s[32] = ae))
        : (ae = s[32]);
      var ie;
      s[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = "x1198e8h x18faa90 xahult9 x4h0osi"), (s[33] = ie))
        : (ie = s[33]);
      var le;
      s[34] !== ae
        ? ((le = c.jsx(r("WAWebBizCtwaContext.react"), {
            msg: ae,
            wrapperClass: ie,
          })),
          (s[34] = ae),
          (s[35] = le))
        : (le = s[35]);
      var se;
      s[36] !== t.player
        ? ((se = c.jsx("div", { className: "_ak4q", children: t.player })),
          (s[36] = t.player),
          (s[37] = se))
        : (se = s[37]);
      var ue;
      s[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = { className: "x1n2onr6" }), (s[38] = ue))
        : (ue = s[38]);
      var ce;
      s[39] !== ne || s[40] !== t.avatar || s[41] !== I
        ? ((ce = c.jsxs("div", { className: ne, children: [t.avatar, I] })),
          (s[39] = ne),
          (s[40] = t.avatar),
          (s[41] = I),
          (s[42] = ce))
        : (ce = s[42]);
      var de;
      s[43] !== U || s[44] !== ce
        ? ((de = c.jsxs(
            "div",
            babelHelpers.extends({}, ue, { children: [U, ce] }),
          )),
          (s[43] = U),
          (s[44] = ce),
          (s[45] = de))
        : (de = s[45]);
      var me;
      s[46] !== re || s[47] !== se || s[48] !== de
        ? ((me = c.jsxs("div", { className: re, children: [se, de] })),
          (s[46] = re),
          (s[47] = se),
          (s[48] = de),
          (s[49] = me))
        : (me = s[49]);
      var pe;
      s[50] !== u
        ? ((pe = c.jsx(o("WAWebMessageMeta.react").Meta, { msg: u })),
          (s[50] = u),
          (s[51] = pe))
        : (pe = s[51]);
      var _e;
      s[52] !== oe || s[53] !== pe
        ? ((_e = c.jsx("div", { className: oe, children: pe })),
          (s[52] = oe),
          (s[53] = pe),
          (s[54] = _e))
        : (_e = s[54]);
      var fe;
      return (
        s[55] !== D ||
        s[56] !== E ||
        s[57] !== $ ||
        s[58] !== N ||
        s[59] !== A ||
        s[60] !== le ||
        s[61] !== me ||
        s[62] !== _e
          ? ((fe = c.jsxs("div", {
              className: E,
              children: [D, $, N, A, le, me, _e],
            })),
            (s[55] = D),
            (s[56] = E),
            (s[57] = $),
            (s[58] = N),
            (s[59] = A),
            (s[60] = le),
            (s[61] = me),
            (s[62] = _e),
            (s[63] = fe))
          : (fe = s[63]),
        fe
      );
    }
    l.default = _;
  },
  98,
);
