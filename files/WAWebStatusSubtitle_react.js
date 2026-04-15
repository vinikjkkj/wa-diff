__d(
  "WAWebStatusSubtitle.react",
  [
    "fbt",
    "invariant",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebMegaphoneRefreshedIcon.react",
    "WAWebMentionsRefreshedIcon.react",
    "WAWebMsgGetters",
    "WAWebMusicStatusAttribution.react",
    "WAWebNewsletterGatingUtils",
    "WAWebProtobufsStatusAttributions.pb",
    "WAWebStatusCloseFriendsDialog.react",
    "WAWebStatusExternalShareUtils",
    "WAWebStatusGatingUtils",
    "WAWebStatusNewsletterCTA.react",
    "WAWebStatusSubtitleAttribution.react",
    "WAWebStatusViewerActionWamEvent",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusViewActionType",
    "WAWebWamEnumTopBarAttributionType",
    "WDSIconWdsIcChannels.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useRef,
      f = m.useState,
      g = {
        statusMeta: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
        subtitleRow: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          minWidth: "xeuugli",
          $$css: !0,
        },
      },
      h = 5e3,
      y = 3;
    function C(e) {
      return e === "music"
        ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE.MUSIC
        : e === "mention"
          ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE
              .MENTION
          : e === "groupStatus"
            ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE
                .GROUP_STATUS
            : e === "closeFriends"
              ? o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE
                  .CLOSE_SHARING
              : e === "externalShare"
                ? o("WAWebWamEnumTopBarAttributionType")
                    .TOP_BAR_ATTRIBUTION_TYPE.CROSSPOSTING
                : e === "newsletterStatus"
                  ? o("WAWebWamEnumTopBarAttributionType")
                      .TOP_BAR_ATTRIBUTION_TYPE.CHANNEL_STATUS
                  : e === "paidPartnership"
                    ? u(!1, "paidPartnership attribution is not tappable")
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    function b(e, t) {
      return e
        ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS
        : t
          ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.CHANNEL_STATUS
          : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.REGULAR_STATUS;
    }
    function v(e, t, n) {
      new (o("WAWebStatusViewerActionWamEvent").StatusViewerActionWamEvent)({
        viewerActionType: o("WAWebWamEnumStatusViewActionType")
          .STATUS_VIEW_ACTION_TYPE.ATTRIBUTION_TAPPED,
        attributionType: C(e),
        statusCategory: b(t, n),
      }).commit();
    }
    function S(e, t) {
      var n = o("react-compiler-runtime").c(5),
        r = f(0),
        a = r[0],
        i = r[1],
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o(
            "WAWebStatusGatingUtils",
          ).isStatusCrosspostingAttributionsEnabled()),
          (n[0] = l))
        : (l = n[0]);
      var s = l,
        u,
        c;
      return (
        n[1] !== e || n[2] !== t
          ? ((u = function () {
              if (!(!s || e <= 1 || !t)) {
                var n = window.setInterval(function () {
                  i(R);
                }, h);
                return function () {
                  window.clearInterval(n);
                };
              }
            }),
            (c = [e, t, s]),
            (n[1] = e),
            (n[2] = t),
            (n[3] = u),
            (n[4] = c))
          : ((u = n[3]), (c = n[4])),
        p(u, c),
        e === 0 ? 0 : a % e
      );
    }
    function R(e) {
      return e + 1;
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.durationInSeconds,
        r = e.playing,
        a = f(n),
        i = a[0],
        l = a[1],
        s = _(null),
        u = _(0),
        c = _(n),
        m,
        g;
      (t[0] !== n
        ? ((m = function () {
            c.current = n;
          }),
          (g = [n]),
          (t[0] = n),
          (t[1] = m),
          (t[2] = g))
        : ((m = t[1]), (g = t[2])),
        p(m, g));
      var h, y;
      (t[3] !== r
        ? ((h = function () {
            if (!r) {
              var e = s.current;
              e != null &&
                ((u.current = u.current + (window.performance.now() - e) / 1e3),
                (s.current = null));
              return;
            }
            s.current = window.performance.now();
            var t,
              n = function () {
                var e = s.current;
                if (e != null) {
                  var r = u.current + (window.performance.now() - e) / 1e3;
                  l(Math.max(0, c.current - r));
                }
                t = window.requestAnimationFrame(n);
              };
            return (
              (t = window.requestAnimationFrame(n)),
              function () {
                window.cancelAnimationFrame(t);
              }
            );
          }),
          (y = [r]),
          (t[3] = r),
          (t[4] = h),
          (t[5] = y))
        : ((h = t[4]), (y = t[5])),
        p(h, y));
      var C;
      t[6] !== i
        ? ((C = o("WAWebStatusExternalShareUtils").formatDuration(
            Math.round(i),
          )),
          (t[6] = i),
          (t[7] = C))
        : (C = t[7]);
      var b;
      return (
        t[8] !== C
          ? ((b = d.jsx("span", { children: C })), (t[8] = C), (t[9] = b))
          : (b = t[9]),
        b
      );
    }
    function E(t) {
      var n = o("react-compiler-runtime").c(55),
        a = t.msg,
        i = t.onClickProfile,
        l = t.onDialogDismiss,
        u = t.onDialogOpen,
        c = t.onMentionsClick,
        m = t.playing,
        p = t.status,
        _ = t.statusMediaController,
        f = t.xstyle,
        h = p.contact,
        C;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var b;
        ((C = [
          (b = o("WAWebMsgGetters")).getFirstMusicAnnotationEmbeddedContent,
          b.getStatusMentioned,
          b.getIsGroupStatus,
          b.getIsNewsletterStatus,
          b.getIsSentByMe,
          b.getHasPaidPartnershipLabel,
        ]),
          (n[0] = C));
      } else C = n[0];
      var R = o("useWAWebMsgValues").useMsgValues(a.id, C),
        E = R[0],
        k = R[1],
        I = R[2],
        T = R[3],
        D = R[4],
        x = R[5],
        $ = o("WAWebContactCollection").ContactCollection.get(a.author),
        P = !0;
      I && $ != null && o("WAWebContactGetters").getIsMe($) && (P = !1);
      var N = o("WAWebStatusExternalShareUtils").getExternalShareInfo(a),
        M = [];
      if (
        x === !0 &&
        o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled()
      ) {
        var w;
        n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = s._(/*BTDS*/ "Paid partnership")), (n[1] = w))
          : (w = n[1]);
        var A;
        (n[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = {
              type: "paidPartnership",
              content: w,
              onClick: null,
              icon: d.jsx(
                o("WAWebMegaphoneRefreshedIcon.react").MegaphoneRefreshedIcon,
                { width: 14, height: 14 },
              ),
            }),
            (n[2] = A))
          : (A = n[2]),
          M.push(A),
          (P = !1));
      }
      if (E != null) {
        var F;
        n[3] !== a || n[4] !== E || n[5] !== m
          ? ((F = d.jsx(
              o("WAWebMusicStatusAttribution.react").MusicAttribution,
              { musicMetadata: E, msg: a, playing: m },
            )),
            (n[3] = a),
            (n[4] = E),
            (n[5] = m),
            (n[6] = F))
          : (F = n[6]);
        var O;
        n[7] !== a || n[8] !== E || n[9] !== _
          ? ((O = function () {
              return o(
                "WAWebMusicStatusAttribution.react",
              ).showMusicStatusAttributionModal(E, a, _);
            }),
            (n[7] = a),
            (n[8] = E),
            (n[9] = _),
            (n[10] = O))
          : (O = n[10]);
        var B;
        (n[11] !== F || n[12] !== O
          ? ((B = { type: "music", content: F, onClick: O, icon: null }),
            (n[11] = F),
            (n[12] = O),
            (n[13] = B))
          : (B = n[13]),
          M.push(B));
      }
      if (
        k === !0 &&
        o("WAWebStatusGatingUtils").isStatusPrivateMentionsReceiveEnabled()
      ) {
        var W;
        n[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = s._(/*BTDS*/ "Mentioned privately")), (n[14] = W))
          : (W = n[14]);
        var q;
        n[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = d.jsx(
              o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon,
              { width: 14, height: 14 },
            )),
            (n[15] = q))
          : (q = n[15]);
        var U;
        (n[16] !== c
          ? ((U = { type: "mention", content: W, onClick: c, icon: q }),
            (n[16] = c),
            (n[17] = U))
          : (U = n[17]),
          M.push(U));
      }
      if (I && $ != null) {
        var V = o("WAWebContactGetters").getIsMe($),
          H = V ? "You" : o("WAWebFrontendContactGetters").getFormattedName($);
        M.push({
          type: "groupStatus",
          content: s._(/*BTDS*/ "Added by {Author Name}", [
            s._param("Author Name", H),
          ]),
          onClick: function () {
            i($.id);
          },
          icon: null,
        });
      }
      var G = a.statusAudienceMetadata,
        z =
          G != null &&
          o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled();
      if (z) {
        var j, K;
        if (n[18] !== (G == null ? void 0 : G.listName)) {
          var Q;
          ((K =
            (Q = G == null ? void 0 : G.listName) != null
              ? Q
              : s._(/*BTDS*/ "Close friends")),
            (n[18] = G == null ? void 0 : G.listName),
            (n[19] = K));
        } else K = n[19];
        var X = K,
          Y = (j = G == null ? void 0 : G.listEmoji) != null ? j : "\u2B50",
          J;
        n[20] !== X
          ? ((J = s._(/*BTDS*/ "{List Name}", [s._param("List Name", X)])),
            (n[20] = X),
            (n[21] = J))
          : (J = n[21]);
        var Z;
        n[22] !== D ||
        n[23] !== X ||
        n[24] !== Y ||
        n[25] !== l ||
        n[26] !== u ||
        n[27] !== h
          ? ((Z = function () {
              (u == null || u(),
                o("WAWebStatusCloseFriendsDialog.react").showCloseFriendsDialog(
                  h == null ? void 0 : h.id,
                  h != null
                    ? o("WAWebFrontendContactGetters").getFormattedName(h)
                    : "",
                  Y,
                  X,
                  D,
                  function () {
                    l == null || l();
                  },
                ));
            }),
            (n[22] = D),
            (n[23] = X),
            (n[24] = Y),
            (n[25] = l),
            (n[26] = u),
            (n[27] = h),
            (n[28] = Z))
          : (Z = n[28]);
        var ee;
        (n[29] !== J || n[30] !== Z
          ? ((ee = {
              type: "closeFriends",
              content: J,
              onClick: Z,
              icon: null,
            }),
            (n[29] = J),
            (n[30] = Z),
            (n[31] = ee))
          : (ee = n[31]),
          M.push(ee),
          (P = !0));
      }
      if (N != null) {
        var te = N.durationInSeconds;
        M.push({
          type: "externalShare",
          content: d.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "start",
            children: [
              d.jsx(o("WAWebFlex.react").FlexItem, {
                align: "center",
                grow: 0,
                shrink: 0,
                children: N.displayText,
              }),
              N.source ===
                o("WAWebProtobufsStatusAttributions.pb")
                  .StatusAttribution$ExternalShare$Source.INSTAGRAM &&
                te != null &&
                te !== 0 &&
                d.jsxs(o("WAWebFlex.react").FlexRow, {
                  children: [
                    d.jsx(o("WAWebFlex.react").FlexItem, {
                      className: "x1wbi8v6 x7g7pl8",
                      children: "\u2022",
                    }),
                    d.jsx(L, { durationInSeconds: te, playing: m }),
                  ],
                }),
            ],
          }),
          onClick: function () {
            o("WAWebExternalLink.react").openExternalLink(N.url);
          },
          icon: o("WAWebStatusExternalShareUtils").getExternalShareIcon(
            N.source,
          ),
        });
      }
      if (
        T &&
        o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
      ) {
        var ne;
        n[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((ne = s._(/*BTDS*/ "Channel status")), (n[32] = ne))
          : (ne = n[32]);
        var re;
        (n[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((re = {
              type: "newsletterStatus",
              content: ne,
              onClick: null,
              icon: d.jsx(r("WDSIconWdsIcChannels.react"), {
                width: 14,
                height: 14,
              }),
            }),
            (n[33] = re))
          : (re = n[33]),
          M.push(re),
          (P = !1));
      }
      var oe = M.slice(0, y),
        ae = S(oe.length, m);
      if (h != null && o("WAWebContactGetters").getIsPSA(h)) return null;
      if (
        a.forwardedNewsletterMessageInfo != null &&
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterLinksOnStatusConsumptionEnabled()
      ) {
        var ie;
        n[34] !== f
          ? ((ie = [g.statusMeta, f]), (n[34] = f), (n[35] = ie))
          : (ie = n[35]);
        var le;
        return (
          n[36] !== a || n[37] !== ie
            ? ((le = d.jsx(r("WAWebStatusNewsletterCTA.react"), {
                msg: a,
                xstyle: ie,
              })),
              (n[36] = a),
              (n[37] = ie),
              (n[38] = le))
            : (le = n[38]),
          le
        );
      }
      var se = oe.length > 0 ? oe[ae] : null,
        ue = o("WAWebFlex.react").FlexRow,
        ce = "center",
        de = "start",
        me = (e || (e = r("stylex")))([z && g.subtitleRow, f]),
        pe;
      n[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((pe = { className: "x78zum5 x6s0dn4" }), (n[39] = pe))
        : (pe = n[39]);
      var _e;
      n[40] !== a.t
        ? ((_e = o("WAWebClock").Clock.relativeDateAndTimeStr(a.t)),
          (n[40] = a.t),
          (n[41] = _e))
        : (_e = n[41]);
      var fe;
      n[42] !== _e
        ? ((fe = d.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            grow: 0,
            shrink: 0,
            children: d.jsx(
              "div",
              babelHelpers.extends({}, pe, {
                children: d.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "persistentAlwaysWhite",
                  maxLines: 1,
                  children: _e,
                }),
              }),
            ),
          })),
          (n[42] = _e),
          (n[43] = fe))
        : (fe = n[43]);
      var ge;
      n[44] !== se || n[45] !== P || n[46] !== z || n[47] !== I || n[48] !== T
        ? ((ge =
            se != null &&
            d.jsx("span", {
              className: "x17t9dm2 xeuugli",
              children: d.jsx(r("WAWebStatusSubtitleAttribution.react"), {
                isCloseFriends: z,
                onClick:
                  se.onClick != null
                    ? function (e) {
                        (v(se.type, I, T), se.onClick == null || se.onClick(e));
                      }
                    : null,
                icon: se.icon,
                enableChevronIcon: P && se.type !== "music",
                children: se.content,
              }),
            })),
          (n[44] = se),
          (n[45] = P),
          (n[46] = z),
          (n[47] = I),
          (n[48] = T),
          (n[49] = ge))
        : (ge = n[49]);
      var he;
      return (
        n[50] !== ue || n[51] !== me || n[52] !== fe || n[53] !== ge
          ? ((he = d.jsxs(ue, {
              align: ce,
              justify: de,
              className: me,
              children: [fe, ge],
            })),
            (n[50] = ue),
            (n[51] = me),
            (n[52] = fe),
            (n[53] = ge),
            (n[54] = he))
          : (he = n[54]),
        he
      );
    }
    l.default = E;
  },
  226,
);
