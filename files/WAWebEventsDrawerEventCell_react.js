__d(
  "WAWebEventsDrawerEventCell.react",
  [
    "fbt",
    "WAWebCastToEventCreationMsg",
    "WAWebCellV2.react",
    "WAWebEmojiText.react",
    "WAWebEventDateBlock.react",
    "WAWebEventsGatingUtils",
    "WAWebFormatEventDateString",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebTag.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebEventResponses",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        eventDetailText: {
          display: "x1rg5ohu",
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          $$css: !0,
        },
        statusTag: { fontSize: "x1nxh6w3", $$css: !0 },
      };
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(46),
        a = e.chat,
        i = e.msg,
        l = e.onClick,
        d = e.passed,
        p = d === void 0 ? !1 : d,
        _;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var f;
        ((_ = [
          (f = o("WAWebMsgGetters")).getEventName,
          f.getEventStartTime,
          f.getEventEndTime,
          f.getEventLocation,
          f.getIsEventCanceled,
          f.getIsSentByMe,
        ]),
          (n[0] = _));
      } else _ = n[0];
      var g = o("useWAWebMsgValues").useMsgValues(
          i.id,
          r("WAWebCastToEventCreationMsg"),
          _,
        ),
        h = g[0],
        y = g[1],
        C = g[2],
        b = g[3],
        v = g[4],
        S = g[5],
        R = o("useWAWebEventResponses").useEventResponses(i),
        L = R.find(m),
        E;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { className: "x2b8uid xamitd3" }), (n[1] = E))
        : (E = n[1]);
      var k;
      n[2] !== y || n[3] !== p
        ? ((k = u.jsx(
            "div",
            babelHelpers.extends({}, E, {
              children: u.jsx(r("WAWebEventDateBlock.react"), {
                eventStartTime: y,
                passed: p,
              }),
            }),
          )),
          (n[2] = y),
          (n[3] = p),
          (n[4] = k))
        : (k = n[4]);
      var I = k,
        T;
      if (n[5] !== h) {
        var D;
        ((T = h.slice(
          0,
          (D = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) != null
            ? D
            : 100,
        )),
          (n[5] = h),
          (n[6] = T));
      } else T = n[6];
      var x = T,
        $;
      n[7] !== i
        ? (($ = o("WAWebFrontendMsgGetters").getRtl(i)), (n[7] = i), (n[8] = $))
        : ($ = n[8]);
      var P;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = r("WAWebL10N").isRTL()), (n[9] = P))
        : (P = n[9]);
      var N = $ !== P,
        M;
      n[10] !== i
        ? ((M = o("WAWebFrontendMsgGetters").getDir(i)),
          (n[10] = i),
          (n[11] = M))
        : (M = n[11]);
      var w;
      n[12] !== N || n[13] !== M || n[14] !== x
        ? ((w = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            xstyle: c.eventDetailText,
            children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: x,
              dirMismatch: N,
              direction: M,
              inferLinesDirection: !0,
              selectable: !0,
              ellipsify: !0,
            }),
          })),
          (n[12] = N),
          (n[13] = M),
          (n[14] = x),
          (n[15] = w))
        : (w = n[15]);
      var A = w,
        F = null,
        O = null;
      if (v === !0) {
        var B;
        (n[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = s._(/*BTDS*/ "Canceled")), (n[16] = B))
          : (B = n[16]),
          (F = B),
          (O = o("WAWebTag.react").TagTheme.Secondary));
      } else if (S) {
        var W;
        (n[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = s._(/*BTDS*/ "Creator")), (n[17] = W))
          : (W = n[17]),
          (F = W),
          (O = o("WAWebTag.react").TagTheme.Primary));
      } else if (
        (L == null ? void 0 : L.eventResponse) ===
        o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType
          .GOING
      ) {
        var q;
        (n[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = s._(/*BTDS*/ "Going")), (n[18] = q))
          : (q = n[18]),
          (F = q),
          (O = o("WAWebTag.react").TagTheme.Primary));
      } else if (
        (L == null ? void 0 : L.eventResponse) ===
        o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType
          .MAYBE
      ) {
        var U;
        (n[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = s._(/*BTDS*/ "Maybe")), (n[19] = U))
          : (U = n[19]),
          (F = U),
          (O = o("WAWebTag.react").TagTheme.Secondary));
      } else if (
        (L == null ? void 0 : L.eventResponse) ===
        o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType
          .NOT_GOING
      ) {
        var V;
        (n[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = s._(/*BTDS*/ "Not going")), (n[20] = V))
          : (V = n[20]),
          (F = V),
          (O = o("WAWebTag.react").TagTheme.Error));
      } else if (
        (L == null ? void 0 : L.eventResponse) == null ||
        (L == null ? void 0 : L.eventResponse) ===
          o("WAWebProtobufsE2E.pb")
            .Message$EventResponseMessage$EventResponseType.UNKNOWN
      ) {
        var H;
        (n[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = s._(/*BTDS*/ "Not responded")), (n[21] = H))
          : (H = n[21]),
          (F = H),
          (O = o("WAWebTag.react").TagTheme.Secondary));
      }
      var G;
      n[22] !== F || n[23] !== i.id || n[24] !== O
        ? ((G =
            F && O
              ? u.jsx(o("WAWebTag.react").Tag, {
                  theme: O,
                  testid: void 0,
                  xstyle: [
                    c.statusTag,
                    o("WAWebUISpacing").uiPadding.vert4,
                    o("WAWebUISpacing").uiPadding.horiz8,
                  ],
                  children: s._(/*BTDS*/ "{eventStatusText}", [
                    s._param("eventStatusText", F),
                  ]),
                })
              : null),
          (n[22] = F),
          (n[23] = i.id),
          (n[24] = O),
          (n[25] = G))
        : (G = n[25]);
      var z = G,
        j;
      n[26] !== C || n[27] !== y
        ? ((j = o("WAWebFormatEventDateString").getEventDateStringFor(y, C)),
          (n[26] = C),
          (n[27] = y),
          (n[28] = j))
        : (j = n[28]);
      var K = j,
        Q;
      n[29] !== K || n[30] !== y
        ? ((Q =
            y != null
              ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
                  xstyle: c.eventDetailText,
                  children: s._(/*BTDS*/ "{Event-datetime-string}", [
                    s._param("Event-datetime-string", K),
                  ]),
                })
              : null),
          (n[29] = K),
          (n[30] = y),
          (n[31] = Q))
        : (Q = n[31]);
      var X = Q,
        Y =
          (t = b == null ? void 0 : b.name) != null
            ? t
            : b == null
              ? void 0
              : b.address,
        J;
      n[32] !== Y
        ? ((J =
            Y != null
              ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
                  xstyle: c.eventDetailText,
                  children: s._(/*BTDS*/ "{event-location}", [
                    s._param("event-location", Y),
                  ]),
                })
              : null),
          (n[32] = Y),
          (n[33] = J))
        : (J = n[33]);
      var Z = J,
        ee;
      n[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = [
            o("WAWebUISpacing").uiMargin.vert6,
            o("WAWebUISpacing").uiMargin.horiz4,
          ]),
          (n[34] = ee))
        : (ee = n[34]);
      var te;
      n[35] !== a || n[36] !== i || n[37] !== l
        ? ((te = function () {
            return l(i, a);
          }),
          (n[35] = a),
          (n[36] = i),
          (n[37] = l),
          (n[38] = te))
        : (te = n[38]);
      var ne;
      return (
        n[39] !== I ||
        n[40] !== z ||
        n[41] !== A ||
        n[42] !== X ||
        n[43] !== Z ||
        n[44] !== te
          ? ((ne = u.jsx(r("WAWebCellV2.react"), {
              containerXStyle: ee,
              detailLeft: I,
              detailTop: A,
              primary: X,
              detailRight: z,
              secondary: Z,
              alignPrimary: "start",
              size: "medium",
              onClick: te,
            })),
            (n[39] = I),
            (n[40] = z),
            (n[41] = A),
            (n[42] = X),
            (n[43] = Z),
            (n[44] = te),
            (n[45] = ne))
          : (ne = n[45]),
        ne
      );
    }
    function m(e) {
      return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
    }
    l.default = d;
  },
  226,
);
